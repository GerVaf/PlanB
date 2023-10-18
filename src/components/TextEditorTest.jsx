import React from "react";
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/char_counter.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins/align.min.js";
import "froala-editor/js/plugins/font_family.min.js";
import "froala-editor/js/plugins/font_size.min.js";
import "froala-editor/js/plugins/line_height.min.js";
const TextEditorTest = ({model,setModel,handleEditorChange}) => {
  return (
    <FroalaEditor
      model={model}
      onModelChange={(e) => {
        setModel(e);
        handleEditorChange(e);
      }}
      config={{
        placeholder: "This is new text editor Awesomeeeeeee!!!",
        charCounterCount: true,
        toolbarButtons: {
          moreText: {
            buttons: [
              "fontFamily",
              "fontSize",
              "bold",
              "italic",
              "underline",
              "lineHeight",
              "strikeThrough",
              "subscript",
              "superscript",
            ],
            buttonsVisible: 6, // Adjust this number as needed
          },
          moreParagraph: {
            buttons: [
              "alignLeft",
              "alignCenter",
              "alignRight",
              "alignJustify",
              "formatOL",
              "formatUL",
            ],
            buttonsVisible: 6, // Adjust this number as needed
          },
          moreRich: {
            buttons: [
              "insertLink",
              "insertImage",
              "insertVideo",
              "insertTable",
            ],
            buttonsVisible: 6, // Adjust this number as needed
          },
        },
        fontFamily: {
          "Poppins,sans": "Poppins",
        },
        fontFamilySelection: true,
        fontSizeSelection: true,
        lineHeightSelection: true,
      }}
      tag="textarea"
    />
  );
};

export default TextEditorTest;
