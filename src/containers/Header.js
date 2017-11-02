import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyled = styled.div`
  margin-top: 3%;
`

const LinkTitle = styled(Link)`
  font-size: 44px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  &:hover {
    color: black;
    text-decoration: none;
  }
`

const Header = () => {
  return (
    <HeaderStyled>
      <LinkTitle to='/'>Spiritual Gifts</LinkTitle>
      <p>Finding your place in ministry</p>
      <hr />
    </HeaderStyled>
  );
};

export default Header;