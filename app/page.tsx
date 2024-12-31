import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex m-10">
        <Button disabled>
          <Loader2 className="animate-spin" />
          Submit
        </Button>
      </div>
    </>
  );
}
