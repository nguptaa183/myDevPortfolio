import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  border: none;
  width: 100%;
`;

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 4;	
	`}
`;
