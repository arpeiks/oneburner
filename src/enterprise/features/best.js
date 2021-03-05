import React from "react";
import styled from "styled-components";

const Best = () => {
  return (
    <Root>
      <div>
        <img src="/images/medal.jpg" alt="" height="128" />
      </div>
      <div>
        <h4>Best Collaboraion software</h4>
        <p className="m-0">Africa tech coalition 2020</p>
      </div>
    </Root>
  );
};

const Root = styled.div`
  h4 {
    font-weight: 400;
  }

  top: -135px;
  margin: auto;
  display: flex;
  padding: 1.6em 0;
  max-width: 720px;
  position: relative;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  justify-content: center;
  box-shadow: 0px 20px 40px rgba(51, 51, 51, 0.13);
`;

export default Best;
