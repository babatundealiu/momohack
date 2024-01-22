import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUser {
	id?: string;
	fullName?: string;
	verify?: boolean;
	token?: string;
	role? : string
}

const initialState = {
	currentUser: {} as IUser | null,
	showAmount: true,
};

const Reducers = createSlice({
	name: "momoHack",
	initialState,
	reducers: {
		AddUser: (state, { payload }: PayloadAction<IUser>) => {
			state.currentUser = payload;
		},

		toggleShowAmount: (state) => {
			state.showAmount = !state.showAmount;
		},
	},
});

export const { AddUser, toggleShowAmount } = Reducers.actions;

export default Reducers.reducer;
