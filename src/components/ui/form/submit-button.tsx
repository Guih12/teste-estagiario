import { Loader2 } from "lucide-react";
import { PropsWithChildren } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "../button";

interface Props extends PropsWithChildren {
  onSubmitChildren: string;
  className?: string;
}

export function SubmitButton({
  onSubmitChildren,
  children,
  className = "",
}: Props) {
  const form = useFormContext();
  const isSubmitting = form.formState.isSubmitting;

  return (
    <Button disabled={isSubmitting} className={className}>
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {onSubmitChildren}
        </>
      ) : (
        children
      )}
    </Button>
  );
}
