import Select from "react-select";
import { useState } from "react";
import { Languages } from "../../constants/Languages";
import { Styles } from "../../constants/Style";

const options = Languages.map((lang) => ({
  id: lang.id,
  name: lang.name,
  label: lang.label,
  value: lang.value,
}));

interface LanguageProps {
  handleChangeLang: (currentLang: any) => void;
}

const LanguageDropDown: React.FC<LanguageProps> = ({
  handleChangeLang,
}: LanguageProps) => {
  const [Language, setLanguage] = useState(options[0]);

  const themeChanged = (selectedLang: any) => {
    setLanguage(selectedLang);
    handleChangeLang(selectedLang);
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
