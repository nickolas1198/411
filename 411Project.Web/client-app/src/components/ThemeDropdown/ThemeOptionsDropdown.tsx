import React, { useState } from "react";
import { Select } from "semantic-ui-react";
import themeOptions from "./ThemeOptions";

type ThemeDropdownType = {
  setTheme: (theme: string) => void;
};

const ThemeDropdown = (props: ThemeDropdownType) => {
  const [dropdownTheme, setDropdownTheme] = useState("solarized_dark");

  const handleChange = (event: any) => {
    setDropdownTheme(event.target.textContent);
    props.setTheme(event.target.textContent);
  };

  // TODO: assign fontsize to value(drill down from TextEditorGrid)
  return (
    <Select
      placeholder={dropdownTheme.toString()}
      options={themeOptions}
      onChange={handleChange}
      value={dropdownTheme}
    />
  );
};

export default ThemeDropdown;
