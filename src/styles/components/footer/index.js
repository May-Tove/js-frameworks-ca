import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.lightText};
  padding: 0.5rem;
  text-align: center;
`;
