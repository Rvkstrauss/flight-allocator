import React from "react";
import { CSVReader } from "react-papaparse";
import UploadBox from "./UploadBox";
import styled from "styled-components";

const buttonRef = React.createRef();

function FileLoader(props) {
  const handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  const handleOnFileLoad = (data) => {
    props.fileChanged(data, props.type);
  };

  const handleOnError = (err) => {
    //file, inputElem, reason) => {
    console.log(err);
  };

  // const handleOnRemoveFile = (data) => {
  //   console.log(data);
  // };

  const handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
    props.fileChanged(null, props.type);
  };

  return (
    <StyledFileLoader>
      <CSVReader
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        ref={buttonRef}
        onFileLoad={handleOnFileLoad}
        onError={handleOnError}
        noClick
        noDrag
        onRemoveFile={handleRemoveFile}
      >
        {({ file }) => (
          <UploadBox
            file={file}
            title={props.title}
            handleRemoveFile={handleRemoveFile}
            handleOpenDialog={handleOpenDialog}
          ></UploadBox>
        )}
      </CSVReader>
    </StyledFileLoader>
  );
}

export default FileLoader;

const StyledFileLoader = styled("div")`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10;
  color: #9393fb;
`;
