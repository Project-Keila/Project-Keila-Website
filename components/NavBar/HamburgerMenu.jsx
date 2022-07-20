import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import listenForOutsideClicks from "../../utils/listenForClickOutside";

const BurgerBar = () => {
  return (
    <svg
      width="40"
      height="5"
      viewBox="0 0 44 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="43" height="3" fill="white" stroke="black" />
    </svg>
  );
};

const HambrgerMenu = () => {
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(
    listenForOutsideClicks(listening, setListening, menuRef, setIsOpen)
  );

  return (
    <Container>
      <Menu ref={menuRef} onClick={toggle}>
        <BurgerBar />
        <BurgerBar />
        <BurgerBar />
      </Menu>
      <Dropdown open={isOpen}>
        <Link href="/about">About</Link>
        <Link href="/calculator">Calculator</Link>
        <Link href="/partners">Partners</Link>
      </Dropdown>
    </Container>
  );
};

export default HambrgerMenu;

const Container = styled.div`
  position: relative;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30px;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  background: #369627;
  left: -70px;
  top: 34px;
  width: 120px;
  border-radius: 10px;
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  a {
    padding: 10px;
    border-bottom: 1px solid black;
    text-align: center;
    color: white;
  }
`;
