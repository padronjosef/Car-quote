import React from "react";
import styled from "@emotion/styled";
import { capitalLetter } from "./helper"
import PropTypes from 'prop-types';

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
        <li>Brand: {capitalLetter(brand)}</li>
        <li>Year: {year}</li>
        <li>Plan: {capitalLetter(plan)}</li>
      </ul>
    </WrapperResume>
  );
};

Resume.prototype = {
  data: PropTypes.object.isRequired
}


export default Resume;
