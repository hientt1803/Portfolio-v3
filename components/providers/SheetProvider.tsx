import { Sheet } from "@/components/ui/sheet";

interface SheetProps {
  children: React.ReactNode;
}

export const SheetProvider = ({ children }: SheetProps) => {
  return <Sheet>{children}</Sheet>;
};
