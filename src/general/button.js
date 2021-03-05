import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return (
    <BaseButton>
      <span className="text">{children}</span>
    </BaseButton>
  );
};

const BaseButton = styled.button`
  border: 0;
  outline: 0;
  color: #fff;
  font-size: 13px;
  background: #462686;
  border-radius: 100px;
  padding: 0.7rem 2rem;
  box-shadow: 10px 10px 24px rgba(35, 9, 88, 0.25);

  & span.text {
    display: block;
    margin-top: 3px;
  }
`;

export default Button;
