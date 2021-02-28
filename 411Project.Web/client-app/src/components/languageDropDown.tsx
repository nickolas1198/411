import React from "react";
import { Select } from "semantic-ui-react";

type DropdownInfo = {
  setLanguageId: (languageId: number) => void;
  setLanguageName: (languageName: string) => void;
};

/* 
"key" will be used to set the mode within the react-ace editor

"value" will be the language_id in Judge0ApiCall to match the 
Judge0 api documentation.
https://extra-ce.judge0.com/#statuses-and-languages-language-get
*/
const languageOptions = [
  { key: "c_cpp", value: 54, text: "C++" },
  { key: "csharp", value: 51, text: "C#" },
  { key: "java", value: 62, text: "Java" },
  { key: "javascript", value: 63, text: "JavaScript" },
  { key: "kotlin", value: 78, text: "Kotlin" },
  { key: "php", value: 68, text: "PHP" },
  { key: "python", value: 71, text: "Python" },
  { key: "ruby", value: 68, text: "Ruby" },
  { key: "rust", value: 72, text: "Rust" },
  { key: "swift", value: 83, text: "Swift" },
  { key: "typescript", value: 74, text: "TypeScript" },
];

const langDrop = (props: DropdownInfo) => {
  const handleChange = (data: any) => {
    props.setLanguageId(data.value);

    // The <Select> component does not have access to the "key" in the
    // languageOptions array.
    // Only way I know of to get the "key" is to filter the
    // the languageOptions array against data.value
    // The chosen language will be in currLanguage[0]
    let currLanguage = languageOptions.filter((x) => x.value === data.value);
    props.setLanguageName(currLanguage[0].key);
  };

  return (
    <Select
      placeholder="Java"
      options={languageOptions}
      onChange={(event, data) => {
        handleChange(data);
      }}
    />
  );
};

export default langDrop;
