import { useState } from "react";
import OutputDetails from "../component/Output/OutputDetail";
import ThemeDropDown from "../component/DropDown/ThemeDropDown";
import LanguageDropDown from "../component/DropDown/Language";
import CodeEditor from "../component/EditorComponent/Editor";
import InputWindow from "../component/InputWindow/InputWindow";
import OutputWindow from "../component/Output/OutputWindow";
const Home = () => {
  const [theme, setTheme] = useState("vs-dark");
  const [langID, setLangID] = useState<Number>();
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [processing,setProcessing]=useState('')

  const handleChange = (newTheme: string) => {
    setTheme(newTheme);

    console.log(theme);
  };

  const handleChangeLang = (newLanguage: any) => {
    setLangID(newLanguage.id);
    setLanguage(newLanguage.value);
  };

  const onChange = (codeType: string, code: string) => {
    if (codeType == "code") setCode(code);
  };

  const handleCompile=()=>{

  }

  return (
    <>
      <div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
      <div className="flex flex-row">
        <div className="py-2 px-4">
          <LanguageDropDown handleChangeLang={handleChangeLang} />
        </div>
        <div className="py-2 px-4">
          <ThemeDropDown handleChange={handleChange} />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-col w-full h-full justify-start items-end px-4">
          <CodeEditor
            code={code}
            onChange={onChange}
            theme={theme}
            lang={language}
          />
        </div>
        <div className="flex-col w-[40%] px-4">
          <div className="right-container flex flex-shrink-0  flex-col">
            <OutputWindow currentOutput={output} />
          </div>
          <div className="flex flex-col items-end">
            <InputWindow input={input} setInput={setInput} />
            <button
              onClick={handleCompile}
              disabled={!code}
              className={`mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
                !code ? "opacity-50" : ""`}
            >
              {processing ? "Processing..." : "Compile and Execute"}
            </button>
            {output && <OutputDetails outputDetails={output} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
