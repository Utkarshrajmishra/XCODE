import Select from "react-select";
import { useState } from "react";
import { Themes } from "../../constants/Theme";
import { Styles } from "../../constants/Style";

const options = Themes.map((theme) => ({
  label: theme.label,
  value: theme.value,
}));

interface ThemeProps{
  handleChange:(currentTheme:string)=>void
}

const ThemeDropDown:React.FC<ThemeProps>= ({
  handleChange
}:ThemeProps) => {
  const [selectedTheme, setSelectedTheme] = useState(options[0]);

  const themeChanged = (selectedOption: any) => {
    setSelectedTheme(selectedOption);
    handleChange(selectedTheme.value)
  };

  return (
    <>
      <Select onChange={themeChanged}
      styles={Styles}
      options={options} 
      value={selectedTheme} />
    </>
  );
};

export default ThemeDropDown;
