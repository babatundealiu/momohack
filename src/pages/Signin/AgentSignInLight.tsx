import React, { useState } from "react";
import styled from "@emotion/styled";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { MdVisibilityOff } from "react-icons/md";
import { MdVisibility } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/commons/Loader";
import { SignInAgent } from "../../utils/ApiCalls";
import ShowToast from "../../components/commons/ShowToast";
import { AddUser } from "../../services/Reducers";
import {useDispatch}  from 'react-redux'

const Container = styled.div`
	height: 100vh;
	display: flex;
	box-sizing: border-box;
`;
const Wrapper = styled.div`
	background-color: #f7f9fc;
	width: 100%;

	h2 {
		font-size: 34px;
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
const Wrapper2 = styled.div`
	background-color: #f1f1f1;
	width: 100%;
	@media (min-width: 320px) and (max-width: 1023px) {
		display: none;
	}
`;
const UserInput = styled.div`
	display: flex;
	align-items: center;
	background-color: white;
	margin-bottom: 20px;
	border-radius: 10px;
	padding: 0 20px;
	gap: 15px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	input {
		background-color: transparent;
		width: 100%;
		height: 60px;
		outline: #121212;
		color: black;
		font-size: 20px;
		padding-left: 5px;
		border: none;
		::placeholder {
			font-size: 18px;
		}
	}
	@media (min-width: 320px) and (max-width: 767px) {
		margin: 15px 15px;
		input {
			height: 50px;
			width: 90%;
			font-size: 16px;
			::placeholder {
				font-size: 16px;
			}
		}
	}
`;
const Para = styled.p`
	color: #121212eb;
	font-size: 17px;
	font-weight: lighter;
	@media (min-width: 320px) and (max-width: 767px) {
		font-size: 12px;
	}
`;

const Icon = styled.div`
	color: #084a5f;
	font-size: 25px;
	width: 34px;
	height: 26px;
	@media (min-width: 320px) and (max-width: 767px) {
		font-size: 20px;
		width: 34px;
		height: 20px;
	}
`;
const CenterSignUp = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	/* height: 90%; */
	padding-bottom: 50px;
	h2 {
		margin-left: 0;
		padding-top: 0;
		font-size: 38px;
	}
	@media (min-width: 320px) and (max-width: 767px) {
		h2 {
			font-size: 30px;
		}
	}
`;
const UserButton = styled.button`
	background-color: #ffcb05;
	color: #084a5f;
	width: 100%;
	height: 60px;
	border: none;
	border-radius: 10px;
	font-size: 20px;
	font-weight: bolder;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	@media (min-width: 320px) and (max-width: 767px) {
		width: 92%;
		height: 50px;
		margin-top: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		font-size: 18px;
	}
`;
const Button = styled.div`
	color: #084a5f;
	background-color: white;
	border-radius: 30px;
	height: 60px;
	width: 50%;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 40px;

	p {
		font-size: 18px;
		font-weight: bolder;
	}
	@media (min-width: 320px) and (max-width: 767px) {
		width: 80%;
		margin-top: 30px;
		height: 50px;
		p {
			font-size: 15px;
		}
	}
`;
const GoogleIcon = styled.div`
	font-size: 30px;
	margin-right: 10px;
	@media (min-width: 320px) and (max-width: 767px) {
		font-size: 25px;
	}
`;
const Paras = styled.p`
	color: #12121298;
	font-size: 17px;
	font-weight: 600;
	margin: 15px 0;
	@media (min-width: 320px) and (max-width: 767px) {
		font-size: 15px;
		margin: 10px 0;
	}
`;
const Visibility = styled.div`
	color: #00000050;
	font-size: 30px;
	padding-right: 20px;
	@media (min-width: 320px) and (max-width: 767px) {
		font-size: 20px;
		padding-right: 10px;
	}
`;
const VisibilityOn = styled.div`
	color: #00000050;
	font-size: 30px;
	padding-right: 20px;
	display: none;
	@media (min-width: 320px) and (max-width: 767px) {
		font-size: 20px;
		padding-right: 10px;
	}
`;
const Member = styled.div`
	color: #12121298;
	font-size: 17px;
	font-weight: 600;
	margin-top: 40px;

	span {
		color: #084a5f;
		font-size: 18px;
	}
	@media (min-width: 320px) and (max-width: 767px) {
		font-size: 14px;
		margin-top: 60px;
		span {
			font-size: 15px;
		}
	}
`;
const AgentSignInLight: React.FC = () => {
	const Navigate = useNavigate();
    const dispatch = useDispatch()
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setFormData((prevProfile) => ({
			...prevProfile,
			[name]: value,
		}));
	};
	const [load, setLoad] = useState(false);
	const handleSubmit = async () => {
		setLoad(true);
		try {
			const response = await SignInAgent(formData);
			console.log(response);
			setLoad(false);
			if (response!.status === 200) {
                dispatch(
									AddUser({
                                        fullName : response?.data?.data?.fullName,
										id: response?.data?.data?._id,
										verify: response?.data?.data?.verify,
                                        token : response?.data?.token,
										role : "agent"
									}),
								);
				ShowToast(true, "Login Successfull");
				Navigate("/agent-dashboard");
			}
		} catch (err) {
			return err;
		}
	};
	return (
		<Container>
			{load ? <Loader /> : null}
			<Wrapper>
				<h2>
					Market<span>Padi</span>
				</h2>
				<CenterSignUp>
					<h2>Sign In</h2>
					<Para>Join the Momo Community Today !</Para>
					<Button>
						<GoogleIcon>
							<FcGoogle />
						</GoogleIcon>
						<p>Use Google Account</p>
					</Button>
					<Paras>or</Paras>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit();
						}}
                        >
						<UserInput>
							<Icon>
								<MdEmail />
							</Icon>
							<input
								name='email'
								onChange={onChangeValue}
								type='email'
								required
								placeholder='Email'
							/>
						</UserInput>

						<UserInput>
							<Icon>
								<RiLockPasswordFill />
							</Icon>
							<input
								name='password'
								onChange={onChangeValue}
								type='password'
								required
								placeholder='Password'
							/>
							<Visibility>
								<MdVisibilityOff />
							</Visibility>
							<VisibilityOn>
								<MdVisibility />
							</VisibilityOn>
						</UserInput>
						<UserButton>Sign In</UserButton>
					</form>
					<Member>
						<p>
							Don't have an account?{" "}
							<Link to='/agentsignup'>
								<span>Sign Up</span>
							</Link>{" "}
						</p>
					</Member>
				</CenterSignUp>
			</Wrapper>
			<Wrapper2></Wrapper2>
		</Container>
	);
};

export default AgentSignInLight;
