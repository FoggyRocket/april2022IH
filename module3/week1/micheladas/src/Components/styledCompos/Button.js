import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: ${(props) => (props.primary ? "white" : "transparent")};
  color: ${(props) => (props.primary ? "black" : "white")};
  border: ${(props) => (props.primary ? "none" : "2px solid white")};

  ${(props) => {
    if (props.primary) {
    }
  }}
`;

export default Button;
