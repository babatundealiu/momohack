import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import MobileSidebar from "./MobileSideBar";

const NavbarContainer = styled.div`
	/* Your navbar styles here */
	position: fixed;
	top: 0;
	left: 0; /* Adjust this value to match the width of the Sidebar */
	right: 0;
	height: 60px;
	background-color: #fff;
	box-shadow: 0 2px 5px rgba(219, 219, 219, 0.1);
	display: flex;
	align-items: center;
	padding-left: 20px;
	padding-right: 20px;

	@media screen and (max-width: 768px) {
		left: 0;
	}
`;

const User = styled.div`
	display: flex;
	align-items: center;
`;

const Cont = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const IconHold = styled.div`
	display: flex;
	width: 30px;
	height: 30px;
	margin-right: 20px;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	background-color: black;
	color: white;
`;

const Hold = styled.div``;
const Uname = styled.div``;
const UEmail = styled.div`
	color: gray;
`;

const Menu = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		cursor: pointer;
		font-size: 25px;
	}
`;

const Navbar: React.FC = () => {
	const [show, setShow] = useState<boolean>(false);

	const toggle = () => {
		setShow(!show);
	};

	return (
		<NavbarContainer>
			<Menu onClick={toggle}>
				<AiOutlineMenu />
			</Menu>
			<Cont>
				<h1 className="text-[#084A5F] font-bold text-[22px]">Market<span className="text-[#FFCB05] font-bold text-[22px]">Padi</span></h1>

				<User>
					<IconHold style={{ borderRadius: "360px", fontSize: "12px" }}>
						GE
					</IconHold>
					<Hold>
						<Uname>Godwin Udoh</Uname>
						<UEmail>User</UEmail>
					</Hold>
				</User>
			</Cont>
			{show ? <MobileSidebar toggle={toggle} show={show} /> : null}
		</NavbarContainer>
	);
};

export default Navbar;
