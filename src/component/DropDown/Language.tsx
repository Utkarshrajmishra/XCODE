import Select from "react-select";
import { useState } from "react";
import { Languages } from "../../constants/Languages";
import { Styles } from "../../constants/Style";

const options = Languages.map((theme) => ({
  label: theme.label,
  value: theme.value,
  id:theme.id
}));

interface ThemeProps {
  handleChange: (currentLang: string, currentVersion:string) => void;
}

const LanguageDropDown: React.FC<ThemeProps> = ({ handleChange }: ThemeProps) => {
  const [selectedTheme, setSelectedTheme] = useState(options[0]);

  const themeChanged = (selectedOption: any) => {
    setSelectedTheme(selectedOption);
    handleChange(selectedTheme.value,selectedTheme.id);
  };

  return (
    <>
      <Select
        onChange={themeChanged}
        styles={Styles}
        options={options}
        value={selectedTheme}
      />
    </>
  );
};

export default LanguageDropDown;
