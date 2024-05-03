import styled from "styled-components";

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Star = styled.svg`
  width: 1.5rem; /* 24px */
  height: 1.5rem; /* 24px */
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "gold" : "lightgray")};
  transition: color 0.2s ease;

  
  &:hover {
    color: gold;
  }
`;
