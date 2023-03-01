import styled from "styled-components";

export const Logo = styled.img`
  width: 200px;
  height: 100%;
  object-fit: cover;
`;

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-weight: bold;
  display: flex;
`;

export const NavLink = styled.li`
  margin: 1rem;
  cursor: pointer;
`;
