import { Loader2 } from "lucide-react";

export function LoadingScreen() {
  return (
    <div className="flex h-screen w-screen items-center justify-center gap-2">
      <Loader2 className="animate-spin" /> Loading
    </div>
  );
}
