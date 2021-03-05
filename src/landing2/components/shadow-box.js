import React from "react";
import styled from "styled-components";

const ShadowBox = ({ children }) => {
  return <Root className="my-5">{children}</Root>;
};

const Root = styled.div`
  box-shadow: 3px 0 5px rgba(0, 0, 0, 0.03), 0px 3px 15px rgba(0, 0, 0, 0.02);
`;

export default ShadowBox;
