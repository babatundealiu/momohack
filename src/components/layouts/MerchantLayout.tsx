import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "../Blocks/MechantBlock/SideBar";
import Navbar from "../Blocks/MechantBlock/NavBar";
import WalletBar from "../Blocks/MechantBlock/WalletBar";

const LayoutContainer = styled.div`
	/* Your layout styles here */
	margin-top: 60px; /* To leave space for the fixed navbar */
	margin-left: 200px; /* To leave space for the fixed sidebar */

	@media screen and (max-width: 768px) {
		margin-left: 0;
	}
`;

const OutletContainer = styled.div`
	padding-top: 30px;
	padding-left: 20px;
	max-width: calc(100vw - 550px);

	@media screen and (max-width: 768px) {
		max-width: 95%;
	}

	/* To match the width of the Sidebar */
`;

const MerchantLayout: React.FC = () => {
	return (
		<LayoutContainer>
			<Sidebar />
			<WalletBar />
			<div>
				<Navbar />
				<OutletContainer>
					<Outlet />
				</OutletContainer>
			</div>
		</LayoutContainer>
	);
};

export default MerchantLayout;
