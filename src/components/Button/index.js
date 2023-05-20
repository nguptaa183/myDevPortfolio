import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: solid 1px #572b8b;
  text-transform: uppercase;
  text-align: center;
  margin-right: 1rem;
  text-decoration: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #572b8b;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #ffffff;
    color: #572b8b;
    transition: all 0.3s ease 0s;
    transform: translateY(-3px);
  }

  /* Media Query */
  @media (max-width: 768px) {
    & {
      font-size: 15px;
      padding: 0.3rem 1.5rem;
      margin-right: 0.5rem;
    }
  }
  @media (max-width: 320px) {
    & {
      font-size: 12px;
    }
  }

  &:disabled {
    background: #9571bf;
    border: solid 1px #9571bf;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #572b8b;

	`}
`;
