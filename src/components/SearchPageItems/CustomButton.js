import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.backgroundColor || "#FFB800"};
  color: ${(props) => props.textColor || "white"};
  border: none;
  padding: 0.8rem 3rem;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  margin-top: ${(props) => props.marginTop || 0};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);

  :hover {
    background-color: ${(props) => props.hoverBgColor || "#FFB800"};
    color: ${(props) => props.hoverTextColor || "#ffffff"};
    transform: translateY(-3px);
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 20px 20px rgba(0, 0, 0, 0.15),
        inset 0px 0px 0px 0.5px rgba(0, 0, 0, 0.15);
  }
  
`;

const CustomButton = (props) => {
  return <Button {...props}>{props.children}</Button>;
};

export default CustomButton;
