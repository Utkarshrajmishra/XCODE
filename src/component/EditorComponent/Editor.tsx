import { Editor } from "@monaco-editor/react";
import { useState } from "react";

interface CodeEditorProps {
  code: string;
  theme: string;
  lang: string;
  onChange: (codeType: string, newCode: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  code = "",
  theme = "vs-dark",
  lang = "javascript",
  onChange,
}: CodeEditorProps) => {
  const [value, setValue] = useState(code);

  const handleChange = (values: string | undefined) => {
    if (values) {
      setValue(values);
      onChange("code", value);
    }
  };

  return (
    <>
      <Editor
        height="85vh"
        language={lang}
        theme={theme}
        defaultLanguage="// some comments"
        onChange={handleChange}
      />
    </>
  );
};

export default CodeEditor;
