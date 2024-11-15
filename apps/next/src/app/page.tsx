import { CustomDialog } from "@/components/dialog";
import { CustomSheet } from "@/components/sheet";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <CustomDialog />
      <CustomSheet />
    </div>
  );
}
