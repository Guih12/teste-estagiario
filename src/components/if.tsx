import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  condition: any;
}

export function If({ condition, children }: Props) {
  return !!condition ? children : null;
}
