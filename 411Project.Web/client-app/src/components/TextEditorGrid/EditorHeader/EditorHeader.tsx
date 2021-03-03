import { Label } from "semantic-ui-react";
import "../../../Styles/EditorHeader.css";

type EditorHeader = {
  headerName: string;
};

const EditorHeader = (props: EditorHeader) => (
  <Label className="EditorHeader">
    <div className="EditorHeaderText">{props.headerName}</div>
  </Label>
);

export default EditorHeader;
