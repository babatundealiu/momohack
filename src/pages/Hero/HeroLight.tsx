import React from "react";
import styled from "@emotion/styled";
import pix from "../../assets/Group 236.jpg";
import pix2 from "../../assets/Group 237.jpg";
import { Link } from "react-router-dom";

const Container = styled.div`
	height: 90vh;
	background-color: #ffffff;
`;
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 90px;
	padding-top: 40px;
	@media (min-width: 320px) and (max-width: 767px) {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		padding-top: 0;
		gap: 40px;
	}
`;
const HeroText = styled.div`
	width: 650px;
	span {
		color: #ffcb05;
	}
	h1 {
		color: #084a5f;
		font-size: 55px;
	}
	button {
		background-color: #ffcb05;
		color: #084a5f;
		padding: 15px 40px;
		border: none;
		font-size: 20px;
		font-weight: bold;
		margin-top: 10px;
		border-radius: 10px;
	}
	@media (min-width: 320px) and (max-width: 767px) {
		margin: 0 20px;
		width: 100vw;
		text-align: center;
		h1 {
			font-size: 22px;
			margin: 0 20px;
		}
		button {
			padding: 10px 15px;
			font-size: 16px;
			margin-top: 20px;
		}
	}
`;
const HeroImage = styled.div`
	@media (min-width: 320px) and (max-width: 767px) {
	}
`;
const MobileImage = styled.div`
	img {
		display: none;
	}
	@media (min-width: 320px) and (max-width: 767px) {
		width: 100vw;
		height: 450px;

		img {
			display: block;
			height: 100%;
			object-fit: cover;
			width: 100%;
		}
	}
`;
const BigImage = styled.div`
	img {
		height: 80vh;
	}
	@media (min-width: 320px) and (max-width: 767px) {
		display: none;
	}
`;

const HeroLight: React.FC = () => {
	return (
		<Container>
			<Wrapper>
				<HeroText>
					<h1>
						<span>Welcome</span> to Market padi platform! Start your journey towards financial goals and security. 
						Your path to a brighter financial future begins here.
					</h1>
					<Link to='/onboarding'>
						<button>Get Started</button>
					</Link>
				</HeroText>
				<HeroImage>
					<BigImage>
						<img src={pix} />
					</BigImage>
					<MobileImage>
						<img src={pix2} />
					</MobileImage>
				</HeroImage>
			</Wrapper>
		</Container>
	);
};

export default HeroLight;
