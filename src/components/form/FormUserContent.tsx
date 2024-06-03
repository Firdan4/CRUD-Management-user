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
import { User, addUser } from "@/api/userApi";
import { SetStateAction } from "react";

interface FormUserContentProps {
  setShowFormUser: React.Dispatch<SetStateAction<boolean>>;
}

const FormUserContent: React.FC<FormUserContentProps> = ({
  setShowFormUser,
}) => {
  const queryClient = useQueryClient();
  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      name: "",
      address: "",
      birtDate: "",
      gender: "",
    },
  });

  const { mutate: mutateUser } = useMutation({
    mutationKey: ["adduser"],
    mutationFn: (data: User) => addUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });

      setShowFormUser(false);
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

      mutateUser(data);
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
                  <Input type={type} {...field} />
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
          <Button type="submit">Continue</Button>
        </AlertDialogFooter>
      </form>
    </Form>
  );
};

export default FormUserContent;
