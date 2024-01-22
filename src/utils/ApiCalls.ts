import ShowToast from "../components/commons/ShowToast";
import Instance from "./AxiosConfig";

export interface IUser {
	fullName?: string;
	email: string;
	phoneNumber?: string;
	password: string;
	agentCode?: string;
	emailOrPhone?: string;
}

export const RegisterAgent = async (data: IUser) => {
	try {
		const response = await Instance.post("/register-agent", data);
		return response;
	} catch (err:any) {
		ShowToast(false, `${err.response?.data?.messeage}`);
	}
};

export const SignInAgent = async (data: IUser) => {
	try {
		const response = await Instance.post("/login-agent", data);
		return response;
	} catch (err:any) {
		ShowToast(false, `${err.response?.data?.messeage}`);
	}
};

export const RegisterMerchant = async (data: IUser) => {
	try {
		const response = await Instance.post("/register-marchant", data);
		return response;
	} catch (err:any) {
		ShowToast(false, `${err.response?.data?.messeage}`);
	}
};

export const SignInMerchant = async (data: any) => {
	try {
		const response = await Instance.post("/login-marchant", data);
		return response;
	} catch (err:any) {
		ShowToast(false, `${err.response?.data?.messeage}`);
	}
};
