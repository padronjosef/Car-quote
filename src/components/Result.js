import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultTextQuotation = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const TextQuotation = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Result = ({ quotation }) => {
  return !quotation ? (
    <Message>Chose a brand, year and a plan</Message>
  ) : (
    <ResultTextQuotation>
      <TransitionGroup component="span" className="result">
        <CSSTransition
          classNames="result"
          key={quotation}
          timeout={{ enter: 500, exit: 500 }}
        >
          <TextQuotation>
            The total is: <span>{quotation}</span>
          </TextQuotation>
        </CSSTransition>
      </TransitionGroup>
    </ResultTextQuotation>
  );
};

Result.propTypes = {
  quotation: PropTypes.number.isRequired,
};

export default Result;
