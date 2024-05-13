import { Editor } from "@monaco-editor/react";


interface CodeEditorProps {
  code: string;
  theme: string;
  lang: string;
  onChange: (codeType: string, newCode: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  theme = "vs-dark",
  lang = "javascript",
  onChange,
}: CodeEditorProps) => {
  //const [value, setValue] = useState(code);

  const handleChange = (values: string | undefined) => {
    if (values) {
      //setValue(values);
      onChange("code", values);
    }
  };

  return (
    <>
      <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
        <Editor
          height="85vh"
          language={lang}
          theme={theme}
          defaultLanguage="javascript"
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default CodeEditor;
