import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h1 {
    margin-bottom: 0;
  }
`;

export const StyledUserData = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledUserDataButton = styled.button`
  border: 0;
  padding: 4px 6px;
  font-size: 12px;
  color: white;
  background-color: #1f1e31;
  border-radius: 6px;
  cursor: pointer;
`;
