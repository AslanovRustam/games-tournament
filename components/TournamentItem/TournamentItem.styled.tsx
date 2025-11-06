import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0.45)
  );
  opacity: 0;
  transition: opacity 300ms ease;
  display: flex;
  align-items: flex-end;
  padding: 12px;
  color: #fff;
  pointer-events: none;
`;

export const Card = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  &:hover ${Overlay} {
    opacity: 1;
    pointer-events: auto;
  }
`;
