import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import MobileSidebar from "./MobileSideBar";
import { useSelector } from "react-redux";
import { useGetUserDataQuery } from "../../../utils/apiSlice";
import ava from "../../../assets/Momo/Images/avatar.png";
import { Dropdown } from "flowbite-react";

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

const Hold = styled.div`
	display: flex;
`;
const Uname = styled.div`
display: flex;
word-break: normal;
word-wrap: normal;
width: 70px;
height: 20px;
overflow: hidden;
`;
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



const Wrapper = styled.div`
	width: 100%;

	h2 {
		font-size: 25px;
		font-weight: bold;
		color: #084a5f;
		/* padding-top: 20px; */
		margin-left: 30px;

		span {
			color: #ffcb05;
		}
	}
	@media (min-width: 320px) and (max-width: 767px) {
		h2 {
			font-size: 20px;
			margin-left: 15px;
			/* padding-top: 15px; */
			font-weight: bold;
		}
	}
`;


const Navbar: React.FC = () => {
	const [show, setShow] = useState<boolean>(false);
	const readUser = useSelector(
		(state: any) => state?.persistedReducer?.currentUser,
	);
	const { data } = useGetUserDataQuery(readUser?.id);

	console.log(data);

	const toggle = () => {
		setShow(!show);
	};

	return (
		<NavbarContainer>
			<Menu onClick={toggle}>
				<AiOutlineMenu />
			</Menu>
			<Cont>
				<Wrapper>
					<h2>
						Market<span>Padi</span>
					</h2>
				</Wrapper>

				<User>
					<IconHold style={{ borderRadius: "360px", fontSize: "12px" }}>
						<img
							src={ava}
							style={{ height: "100%", width: "100%", objectFit: "contain" }}
						/>
					</IconHold>
					<Hold>
						<div>
							<Uname>{data?.data?.fullName}</Uname>
							<UEmail>Agent</UEmail>
						</div>

						<Dropdown className='-z-10' label='' inline>
							<Dropdown.Item>
								Agent Code :{" "}
								<div className='font-bold mr-3 ml-2'>
									{data?.data?.agentCode}
								</div>{" "}
							</Dropdown.Item>
						</Dropdown>
					</Hold>
				</User>
			</Cont>
			{show ? <MobileSidebar toggle={toggle} show={show} /> : null}
		</NavbarContainer>
	);
};

export default Navbar;
