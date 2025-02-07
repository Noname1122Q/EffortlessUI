import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "./button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

export default function CodeBlock({ codeString }: { codeString: string }) {
  const onCopy = () => {
    navigator.clipboard.writeText(codeString);
    toast.message("Copied to clipboard!");
  };

  return (
    <div className="flex flex-col p-4 space-y-2 ">
      <Button
        variant={"outline"}
        size={"sm"}
        className="max-w-20"
        onClick={onCopy}
      >
        <Copy className="size-4 mr-2" /> Copy
      </Button>
      <SyntaxHighlighter language="tsx" style={oneDark} wrapLongLines>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
