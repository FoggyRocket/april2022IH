import styled from "styled-components";

const SectionChelas = styled.section`
  border-radius: 8px;
  background-color: #ffff;
  padding: 2em;
  margin: 1em 0.75em;
  color: #3d3d3d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-wrap: nowrap;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export default SectionChelas;
