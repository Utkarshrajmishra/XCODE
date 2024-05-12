import Select from "react-select";
import { useState } from "react";
import { Languages } from "../../constants/Languages";
import { Styles } from "../../constants/Style";

const options = Languages.map((lang) => ({
 id:lang.id,
 name:lang.name,
 label:lang.label,
 value:lang.value,
}));

interface LanguageProps {
  handleChange: (currentLang: string, currentVersion:string) => void;
}

const LanguageDropDown: React.FC<LanguageProps> = ({
  handleChange,
}: LanguageProps) => {
  const [Language, setLanguage] = useState(options[0]);

  const themeChanged = (selectedLang: any) => {
    setLanguage(selectedLang);
    handleChange(selectedLang.value, selectedLang.id);
  };

  return (
    <>
      <Select
        onChange={themeChanged}
        styles={Styles}
        options={options}
        value={Language}
      />
    </>
  );
};

export default LanguageDropDown;
