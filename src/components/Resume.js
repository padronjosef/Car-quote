import React from "react";
import styled from "@emotion/styled";

const WrapperResume = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838F;
  color: #FFF;
  margin-top: 1rem
`

const Resume = ({ data }) => {
  const { brand, year, plan } = data;

  if (!brand || !year || !plan) return null;

  return (
    <WrapperResume>
      <h2>Quotation Resume</h2>
      <ul>
        <li>Brand: {brand}</li>
        <li>year: {year}</li>
        <li>plan: {plan}</li>
      </ul>
    </WrapperResume>
  );
};

export default Resume;
