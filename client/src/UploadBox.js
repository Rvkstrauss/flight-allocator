import React from "react";
import styled from "styled-components";
import deleteIcon from "./assets/delete.svg";
import uploadIcon from "./assets/upload.svg";

const UploadBox = (props) => {
  return (
    <StyledUploadBox>
      <h6>{props.title}</h6>
      <div className={"file"}>{props.file && props.file.name}</div>
      <button
        type="button"
        onClick={props.handleOpenDialog}
        className={"upload"}
        //   style={{
        //     borderRadius: 0,
        //     marginLeft: 0,
        //     marginRight: 0,
        //     width: "40%",
        //     paddingLeft: 0,
        //     paddingRight: 0,
        //   }}
      >
        <img src={uploadIcon} alt={""} />
      </button>

      <button
        className={"delete"}
        //   style={{
        //     borderRadius: 0,
        //     marginLeft: 0,
        //     marginRight: 0,
        //     paddingLeft: 20,
        //     paddingRight: 20,
        //   }}
        onClick={props.handleRemoveFile}
      >
        <img src={deleteIcon} alt={""} />
      </button>
    </StyledUploadBox>
  );
};
export default UploadBox;

const StyledUploadBox = styled("div")`
  display: flex;
  background-color: #FFFFFF;
  width: 100%;
  border: 1px solid darkgrey;
  border-radius: 3px;
  padding: 5px;
  justify-content: space-evenly;
  img {
      height 20px;
      width: 20px;
  }
  .upload, .delete {
      background-color: #ffffff;
      border: none
  }
  .upload {

  }
  .delete {

  }
  .file {
    width: 200px;
  }
`;
