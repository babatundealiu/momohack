import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
	background-color: white;
`;
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 90px;
	height: 80px;
	@media (min-width: 320px) and (max-width: 767px) {
		margin: 0 20px;
	}
`;
const Logo = styled.div`
	color: #084a5f;
	font-size: 20px;
	span {
		color: #ffcb05;
	}
	@media (min-width: 320px) and (max-width: 767px) {
		font-size: 18px;
	}
`;
const ButtHold = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	@media (min-width: 320px) and (max-width: 767px) {
		gap: 5px;
	}
`;
const Button1 = styled.button`
	background-color: transparent;
	color: #084a5f;
	border: none;
	padding: 12px 30px;
	font-size: 18px;
	cursor: pointer;
	outline: none;
	border-radius: 10px;
	font-weight: 600;
	@media (min-width: 320px) and (max-width: 767px) {
		padding: 8px 10px;
		font-size: 16px;
		font-weight: bold;
	}
`;
const Button2 = styled.button`
	background-color: #ffcb05;
	color: #084a5f;
	border: none;
	padding: 12px 30px;
	font-size: 18px;
	cursor: pointer;
	outline: none;
	border-radius: 10px;
	font-weight: 600;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	@media (min-width: 320px) and (max-width: 767px) {
		padding: 8px 15px;
		font-size: 16px;
		font-weight: bold;
	}
`;
const Header: React.FC = () => {
	return (
		<Container>
			<Wrapper>
				<Logo>
					<h2>
						Market<span>Padi</span>
					</h2>
				</Logo>
				<ButtHold>
					<Link to='/onboarding'>
						<Button1>Sign In</Button1>
					</Link>
					<Link to='/onboarding'>
						<Button2>Sign Up</Button2>
					</Link>
				</ButtHold>
			</Wrapper>
		</Container>
	);
};

export default Header;
