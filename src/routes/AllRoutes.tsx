import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layouts/HomeLayout";
import AgentOverView from "../pages/Agent/AgentOverView";
import SecondLayout from "../components/layouts/SecondLayout";
import AgentSignUpLight from "../pages/Signup/AgentSignUpLight";
import AgentSignUpDark from "../pages/Signup/AgentSignUpDark";
import AgentSignInLight from "../pages/Signin/AgentSignInLight";
import AgentSignInDark from "../pages/Signin/AgentSignInDark";
import HeroDark from "../pages/Hero/HeroDark";
import HeroLight from "../pages/Hero/HeroLight";
import HomeLayoutDark from "../components/layouts/HomeLayoutDark";
import OnboardingPage from "../pages/OnboardingPage";
import AgentTransaction from "../pages/Agent/AgentTransaction";
import AgentMerchant from "../pages/Agent/AgentMerchant";
import MerchantLayout from "../components/layouts/MerchantLayout";
import MerchantOverView from "../pages/Merchants/MerchantOverView";
import MerchantWallet from "../pages/Merchants/MerchantWallet";
import AgentSettingsProfile from "../pages/Agent/AgentSettingsProfile";
import MerchantSignUp from "../pages/Signup/MechantSignUp";
import MechantSignIn from "../pages/Signin/MechantSignIn";
import AgentSettingsSecurity from "../pages/Agent/AgentSettingsSecurity";
import AgentMyWallet from "../pages/Agent/AgentMyWallet";
import MerchantDetails from "../pages/Agent/MerchantDetails";
import UserOverview from "../pages/User/UserOverview";
import UserLayout from "../components/layouts/UserLayout";
import UserTransaction from "../pages/User/UserTransaction";
import UserCreditScore from "../pages/User/UserCreditScore";
import UserWallet from "../pages/User/UserWallet";
import UserSettingsProfile from "../pages/User/UserSettingsProfile";
import UserSettingsSecurity from "../pages/User/UserSettingsSecurity";
import UserSettingsNotification from "../pages/User/UserSettingsNotification";
import UserSettingsTerms from "../pages/User/UserSettingsTerms";

const Index = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <HeroLight />,
			},
		],
	},
	{
		path: "home-dark",
		element: <HomeLayoutDark />,
		children: [
			{
				index: true,
				element: <HeroDark />,
			},
		],
	},

	{
		path: "agent-dashboard",
		element: <SecondLayout />,
		children: [
			{
				index: true,
				element: <AgentOverView />,
			},

			{
				path: "transactions",
				element: <AgentTransaction />,
			},
			{
				path: "agentmerchant",
				element: <AgentMerchant />,
			},
			{
				path: "agentmerchant/details/:id",
				element : <MerchantDetails  />
			},
			{
				path: "agentmywallet",
				element: <AgentMyWallet />,
			},
			{
				path: "agentprofile",
				element: <AgentSettingsProfile />,
			},
			{
				path: "agentsecurity",
				element: <AgentSettingsSecurity />,
			},
		],
	},

	{
		path: "user-dashboard",
		element: <UserLayout/>,
		children: [
			{
				index: true,
				element: <UserOverview/>
			},
			{
				path: 'transactions',
				element: <UserTransaction />
			},
			{
				path: 'agentsignup',
				element: <AgentSignUpDark />
			},
			{
				path: "creditscore",
				element: <UserCreditScore/>
			},
			{
				path: "wallet",
				element: <UserWallet />
			},
			{
				path: "settingsprofile",
				element: <UserSettingsProfile />
			},
			{
				path: "settingssecurity",
				element: <UserSettingsSecurity />
			},
			{
				path: "settingsnotification",
				element: <UserSettingsNotification />
			},
			{
				path: "settingsterms",
				element: <UserSettingsTerms />
			}
		]
	},

	{
		path: "merchant-dashboard",
		element: <MerchantLayout />,
		children: [
			{
				index: true,
				element: <MerchantOverView />,
			},

			{
				path: "wallet",
				element: <MerchantWallet />,
			},
		],
	},
	{
		path: "/agentsignup",
		element: <AgentSignUpLight />,
	},
	{
		path: "/agentsignupdark",
		element: <AgentSignUpDark />,
	},
	{
		path: "/agentsignin",
		element: <AgentSignInLight />,
	},
	{
		path: "/agentsignindark",
		element: <AgentSignInDark />,
	},

	{
		path: "/merchantsignup",
		element: <MerchantSignUp />,
	},

	{
		path: "/merchantsignin",
		element: <MechantSignIn />,
	},
	{
		path: "onboarding",
		element: <OnboardingPage />,
	},
]);

export default Index;
