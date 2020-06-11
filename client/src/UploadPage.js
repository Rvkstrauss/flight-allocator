import React, { useState } from "react";
import styled from "styled-components";
import FileLoader from "./FileLoader";
import Submit from "./Submit";

function UploadPage() {
  const [flights, setFlights] = useState(null);
  const [pnr, setPnr] = useState(null);
  const [assigned, setAssigned] = useState(false)

  const fileChanged = (data, type) => {
    console.log(data, type);
    if (type === "flights") {
      setFlights(data);
    } else {
      setPnr(data);
    }
  };

  const assignFlights = async() => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'flights': flights, 'pnr': pnr })
    };
    try {
        const response = await fetch('localhost:5000/flights', requestOptions);
        const data = await response.json();
        console.log(data)
        // should be fn that presents flight results and clears state
        setAssigned(true)
        setFlights(null);
        setPnr(null);
        
    } catch (e) {
        console.error(e);
        setAssigned(false);
    }
    // send post files from FileLoader to server and await flight + pnr combos
  };

  return (
    <StyledUploadPage>
        <h4>Assign flights to reservations</h4>
      <FileLoader fileChanged={fileChanged} type={"flights"} title={'Flights'}/>
      <FileLoader fileChanged={fileChanged} type={"pnr"} title={'PNR'}/>
      <Submit assignFlights={assignFlights} assigned={assigned}/>
    </StyledUploadPage>
  );
}

export default UploadPage;

const StyledUploadPage = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #9393fb;
`;
