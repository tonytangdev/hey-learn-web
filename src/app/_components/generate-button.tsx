import { Button } from "@/components/ui/button";
import { ArrowRight, LoaderCircle } from "lucide-react";

interface GenerateButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export const GenerateButton = ({ onClick, isLoading }: GenerateButtonProps) => {
  return (
    <Button size="lg" className="group" disabled={isLoading} onClick={onClick}>
      {isLoading ? (
        <>
          <LoaderCircle className="animate-spin h-4 w-4" />
          Generating Quiz...
        </>
      ) : (
        <>
          Generate Quiz
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </>
      )}
    </Button>
  );
};