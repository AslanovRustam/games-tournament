import styled, { keyframes } from "styled-components";

const appear = keyframes`
  from { opacity: 0; transform: translateY(8px) scale(.995); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 24px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.bgGlass};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: background 0.3s, color 0.3s;
  animation: ${appear} 220ms ease-out;
`;
