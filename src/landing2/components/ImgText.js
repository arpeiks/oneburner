import styled from "styled-components";

const Root = styled.div`
  h2 {
    color: #333333;
    font-weight: normal;
  }

  p {
    font-weight: normal;
    color: rgba(69, 69, 69, 0.8);
  }

  img {
    width: 100%;
    margin: auto;
    display: block;
    text-align: center;

    @media (max-width: 600px) {
      max-width: 300px;
    }

    @media (max-width: 900px) {
      max-width: 400px;
    }
  }
`;

export default Root;
