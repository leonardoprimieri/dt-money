import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  position: initial;

  > div {
    img {
      position: relative;
      top: 0;
      right: 0;
    }
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: var(--text-title);
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    border: 0;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    height: 4rem;
    font-size: 1rem;
    font-weight: 400;

    & + input {
      margin-top: 1rem;
    }

    &::placeholder {
      color: var(--text-body);
    }
  }
  button[type="submit"] {
    background: var(--green);
    padding: 0 1.5rem;
    height: 4rem;
    border: 0;
    margin-top: 1rem;
    font-weight: 600;
    color: var(--shape);
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: filter 0.2s ease;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#E52E4D",
  red: "#33CC95",
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: var(--text-title);
  border: 1px solid #d7d7d7;

  transition: border-color 0.2s ease;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 20px;
    height: 20px;
  }
`;
