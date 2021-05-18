import React from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types';

const WrapperHeader = styled.header`
  background-color: #25c6da;
  padding: 10px;
  font-weight: bold;
  color: #fff;
`;

const TextHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: "slabo 27px", serif;
  text-align: center;
`;

const Header = ({ title }) => {
  return (
    <WrapperHeader>
      <TextHeader>{title}</TextHeader>
    </WrapperHeader>
  );
};

Header.prototype= {
  title: PropTypes.string.isRequired
}

export default Header;
