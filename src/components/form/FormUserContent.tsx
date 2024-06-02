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
import { generateId } from "@/lib/utils";

const FormUserContent = () => {
  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      name: "",
      address: "",
      birtDate: "",
      gender: "L",
    },
  });

  const onSubmit = (value: z.infer<typeof UserSchema>) => {
    const validationParse = UserSchema.safeParse(value);
    console.log(validationParse);
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
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input type={type} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Jenis Kelamin</FormLabel>
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
                  <FormMessage />
                </RadioGroup>
              </FormControl>
              <FormMessage />
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
