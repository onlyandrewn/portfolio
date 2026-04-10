import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const ButtonStyles = styled.a`
	font-family: "Graphik Bold";
	text-transform: uppercase;
	position: relative;
    padding: 16px;
    padding-right: 48px;
    padding-left: 48px;
    outline: 0;
    border: 2px solid #f6a302;
	border-radius: 3px;
    background: #f6a302;
    text-align: left;
    font-size: 12px;
	text-decoration: none;
	color: #fff;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	line-height: 1;
	white-space: nowrap;

	&:hover,
	&:active,
	&:focus {
		border: 2px solid ${darken(0.2, "#f6a302")};
	}

	&:visited {
		color: #fff;
	}

	@media (max-width: 768px) {
		padding-left: 32px;
		padding-right: 32px;
	}

	@media (max-width: 480px) {
		display: none;
	}
`;

export default function Button() {
	return (
		<ButtonStyles href="/resume.pdf">
			Download resume
		</ButtonStyles>
	);
};