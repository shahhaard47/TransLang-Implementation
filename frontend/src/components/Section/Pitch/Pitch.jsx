import React from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components';
import {Button} from 'rebass'


import codeTogether from './img/codeTogether.svg';

const Section = styled.section`
    display: flex;
    color: black;
    margin: 0 3%;
    position: absolute;
    text-align: left;
    top: 33%;
    font-size: 1.5vw;
    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        top: 20%;
        font-size: 2vw;
        text-align:center;
    }
`;

const Subsections = styled.div`
    width: 50%;
    @media (max-width: 1000px) {
        width: 100%
        font-size: 1.9vw;
    }
    @media (max-width: 800px) {
        top: 1
        font-size: 3.2vw;
        text-align: center;
    }
`

const SubsectionWithImage = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    @media (max-width: 1000px) {
        width: 100%
        font-size: 1.9vw;
    }
    @media (max-width: 800px) {
        width: 100%
        font-size: 3.2vw;
        text-align: center;
    }
`


const Title = styled.h1`
    font-size: 2em;
    margin: 0 0 0.2em;
    font-weight: 700;
`;

const Subtitle = styled.p`
    margin: 1.5em 0 0 .5em;
    font-weight: 300;
    font-size: 1em;
`;

const MainJoinButton = styled.button`
    
    font-size: 16px;
    letter-spacing: 1.9px;
    font-weight: 700;
    margin: 2.5em 0.5em 0.5em 0;
    padding: 12px 2em;
    color: white;
    background-color: #1A57CE;
    cursor: pointer;
    text-decoration: none;
    vertical-align: middle;
    font-family: Helvetica, Arial, sans-serif;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    user-select: none;
    text-align: center;
    border: 0;
    transition: 0.3s;
    &:hover {
      background-color: #6C63FF;
      box-shadow: none;
    }
`;

const pitch = (props) => {
  return (
    <Section>
      <Subsections>
        <Title>Making the field of computing more inclusive.</Title>
        <Subtitle>
          In a classroom where 131 countires are represented, a monoligual approach suppresses many students’ expression and comprehension. By supporting communication in more diverse and active ways, we believe more students will be able to enter the field of computing.
        </Subtitle>
        <Link to="/login">
          <Button style={{margin: 30}}>TRY IT OUT</Button>
        </Link>
      </Subsections>

      <SubsectionWithImage>
        <img src={codeTogether} alt="anyone can compute" />
      </SubsectionWithImage>
    </Section>

  )
}

export default pitch;