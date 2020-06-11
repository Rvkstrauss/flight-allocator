import React from "react";
import styled from "styled-components";

const Submit = (props) => {
  return (
    <StyledSubmitButton onClick={props.assignFlights}>
      Assign ✈️
    </StyledSubmitButton>
  );
};

export default Submit;

const StyledSubmitButton = styled("div")`
  width: 80px;
  background-color: #f79b4d;
  color: white;
  padding: 11px;
  text-align: center;
  border-radius: 10px;
  margin-top: 20px;
`;
