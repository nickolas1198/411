import React, { useState } from "react";
import { Select } from "semantic-ui-react";
import fontSizeOptions from "./FontSizeOptions";

type FontSizeDropdownType = {
  setFontSize: (fontSize: number) => void;
};

const FontSizeDropdown = (props: FontSizeDropdownType) => {
  const [dropdownFontSize, setDropdownFontSize] = useState(14);

  const handleChange = (event: any) => {
    setDropdownFontSize(event.target.textContent);
    props.setFontSize(parseInt(event.target.textContent, 10));
  };

  // TODO: assign fontsize to value(drill down from TextEditorGrid)
  return (
    <Select
      placeholder={dropdownFontSize.toString()}
      options={fontSizeOptions}
      onChange={handleChange}
      value={dropdownFontSize}
    />
  );
};

export default FontSizeDropdown;
