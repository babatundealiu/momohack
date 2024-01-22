import React from "react";
import styled from "styled-components";

import homeLogo from "../../../assets/Momo/Icons/Home Icon.svg";
import walletLogo from "../../../assets/Momo/Icons/Wallet.svg";
import transacLogo from "../../../assets/Momo/Icons/Transaction Icon.svg";
import merchantLogo from "../../../assets/Momo/Icons/Merchant Icon.svg";
import settingsLogo from "../../../assets/Momo/Icons/Settings.svg";
import { NavLink } from "react-router-dom";

const SidebarContainer = styled.div`
	/* Your sidebar styles here */
	position: fixed;
	top: 60px;
	left: 0;
	bottom: 0;
	width: 230px;
	background-color: white;
	color: #084a5f;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	font-weight: 800;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const Wrapper = styled.div`
	margin-top: 30px;
	margin-left: 40px;
`;

const Nav = styled.div`
	margin-top: 5px;
`;

const Icon = styled.div`
	margin-right: 10px;
	margin-top: 5px;
`;

const Hold = styled(NavLink)`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	cursor: pointer;
`;

const Cont = styled.div`
	margin-top: 45px;
`;

const Sidebar: React.FC = () => {
	return (
		<SidebarContainer>
			<Wrapper>
				<Cont>
					<Hold to='/user-dashboard'>
						<Icon>
							<img className='w-[17px]' src={homeLogo} />
						</Icon>
						<Nav>Dashboard</Nav>
					</Hold>
					<Hold to='/user-dashboard/wallet'>
						<Icon>
							<img className='w-[17px]' src={walletLogo} />
						</Icon>
						<Nav>myWallet</Nav>
					</Hold>
					<Hold to='/user-dashboard/transactions'>
						<Icon>
							<img className='w-[17px]' src={transacLogo} />
						</Icon>
						<Nav>Transactions</Nav>
					</Hold>
					<Hold to='creditscore'>
						<Icon>
							<img className='w-[17px]' src={merchantLogo} />
						</Icon>
						<Nav>Credit Score</Nav>
					</Hold>

					<Hold to='/user-dashboard/settingsprofile'>
						<Icon>
							<img className='w-[17px]' src={settingsLogo} />
						</Icon>
						<Nav>Settings</Nav>
					</Hold>
				</Cont>
			</Wrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
