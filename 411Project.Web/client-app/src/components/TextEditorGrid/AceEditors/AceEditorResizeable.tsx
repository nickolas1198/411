import { useEffect, useRef } from "react";
import AceEditor from "react-ace";
import { IAceEditorProps } from "react-ace/lib/ace";

import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";

// Below lies all of the language modes and
// their snippets
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/snippets/c_cpp";

import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/snippets/csharp";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/snippets/java";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/snippets/javascript";

import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/snippets/kotlin";

import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/snippets/php";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/snippets/python";

import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/snippets/ruby";

import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/snippets/rust";

import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/snippets/swift";

import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/snippets/typescript";

// Themes in alphabetical order
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/theme-clouds";
import "ace-builds/src-noconflict/theme-clouds_midnight";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-eclipse";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-noconflict/theme-xcode";

// This is a hacky solution to make the AceEditor component rerender
// when one of it's parent components changes the 'editorResize" prop
// to true.
// Used for:
//  text wrapping
//  font size
//  theme

// "IAceEditorProps" is a type from the component library
type aceEditorResizeableInfo = IAceEditorProps & {
  // -editorResize- state from a parent component
  editorResize: boolean;

  // -setEditorResize()- state setter from parent component. Sets -editorResize-
  // back to false.
  onResizeComplete: () => void;
};

const AceEditorResizeable = (props: aceEditorResizeableInfo) => {
  const aceRef = useRef(null);

  useEffect(() => {
    if (props.editorResize === true) {
      props.onResizeComplete();

      const curr = aceRef.current as any;
      curr.editor?.resize();
    }
  }, [props.editorResize]);

  return <AceEditor {...props} ref={aceRef} />;
};

export default AceEditorResizeable;
