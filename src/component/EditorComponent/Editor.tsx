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

  const handleChange = (value: string | undefined) => {
    if (value) {
      setValue(value);
      onChange("code", value);
    }
  };

  return (
    <>
      <Editor
        height="85vh"
        language={lang}
        value={value}
        theme={theme}
        defaultLanguage="// some comments"
        onChange={handleChange}
      />
    </>
  );
};

export default CodeEditor;
