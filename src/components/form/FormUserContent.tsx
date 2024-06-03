import { UserSchema } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { AlertDialogCancel, AlertDialogFooter } from "../ui/alert-dialog";
import { Input } from "../ui/input";
import { formFields } from "@/config/formFields";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { generateDateLocalTime, generateId } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { User, addUser, updateUser } from "@/api/userApi";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { hiddenForm } from "@/redux/formSlice";
import { RootState } from "@/redux/store";

const FormUserContent: React.FC = () => {
  const { user, isDisable, isEdit } = useSelector(
    (state: RootState) => state.form
  );
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      name: user?.name,
      address: user?.address,
      birtDate: user?.birtDate,
      gender: user?.gender,
    },
  });

  const { mutate: mutateUser } = useMutation({
    mutationKey: ["adduser"],
    mutationFn: (data: User) => addUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      dispatch(hiddenForm());
      Swal.fire({
        title: "Created Success!",
        icon: "success",
        timer: 1000,
        showConfirmButton: false,
      });
    },
  });
  const { mutate: mutateUpdateUser } = useMutation({
    mutationKey: ["updateuser"],
    mutationFn: (data: User) => updateUser(data, user.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      dispatch(hiddenForm());
      Swal.fire({
        title: "Update Success!",
        icon: "success",
        timer: 1000,
        showConfirmButton: false,
      });
    },
  });

  const onSubmit = async (value: z.infer<typeof UserSchema>) => {
    const validationParse = UserSchema.safeParse(value);
    if (validationParse.success) {
      const createdAt = generateDateLocalTime();
      const id = generateId();
      const data = {
        ...validationParse.data,
        createdAt,
        id,
      };

      if (isEdit) {
        mutateUpdateUser(validationParse.data as User);
      } else {
        mutateUser(data);
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {formFields.map(({ label, name, type }) => (
          <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {label}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input disabled={isDisable} type={type} {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        ))}

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>
                Jenis Kelamin<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                  disabled={isDisable}
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="L" />
                    </FormControl>
                    <FormLabel className="font-normal">Pria</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="P" />
                    </FormControl>
                    <FormLabel className="font-normal">Wanita</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button type="submit" disabled={isDisable}>
            Save
          </Button>
        </AlertDialogFooter>
      </form>
    </Form>
  );
};

export default FormUserContent;
