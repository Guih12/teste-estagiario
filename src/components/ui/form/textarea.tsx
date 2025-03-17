import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Textarea as TextareaField } from "../textarea";

interface Props {
  label: string;
  name: string;
  description?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export function Textarea({ label, name, description, inputProps }: Props) {
  const form = useFormContext();
  const error = form.formState.errors[name];

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full gap-1">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <TextareaField
              placeholder={inputProps?.placeholder ?? ""}
              className={`resize-none ${inputProps?.className}${error && "border-destructive border"}`}
              {...field}
            />
          </FormControl>

          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
