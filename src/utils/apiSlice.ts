import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Post = {
	id: string;
	amount: number;
};


type TransferPost = {
	id?: string;
	amount: number;
	walletId : string,
	decs : string
};

export const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "https://mom-hack.onrender.com/api/v1",
	}),
	tagTypes: [
		"UserData",
		"merchantUser",
		"allMerchants",
		"merchantHistory",
		"agentHistory",
	],
	endpoints: (builder) => ({
		getUserData: builder.query({
			query: (id) => `/single-agent/${id}`,
			providesTags: ["UserData"],
		}),

		getMerchantData: builder.query({
			query: (id) => `/single-marchat/${id}`,
			providesTags: ["merchantUser"],
		}),

		getAllMerchantData: builder.query({
			query: (id) => `/all-marchant-by-agent/${id}`,
			providesTags: ["allMerchants"],
		}),

		addFundMerchant: builder.mutation<Post, Partial<Post>>({
			query: (body) => ({
				method: "POST",
				url: `/fund-wallet-merchant/${body.id}`,
				body,
			}),
			invalidatesTags: ["merchantUser", "merchantHistory"],
		}),

		addFundAgent: builder.mutation<Post, Partial<Post>>({
			query: (body) => ({
				method: "POST",
				url: `/fund-wallet-agent/${body.id}`,
				body,
			}),
			invalidatesTags: ["UserData", "merchantUser"],
		}),

		transferFund: builder.mutation<TransferPost, Partial<TransferPost>>({
			query: (body) => ({
				method: "POST",
				url: `/send-fund/${body.id}`,
				body,
			}),
			invalidatesTags: ["UserData", "agentHistory"],
		}),

		getMerchantHistory: builder.query({
			query: (id) => `/history-wallet-merchant/${id}`,
			providesTags: ["merchantHistory"],
		}),

		getAgentHistory: builder.query({
			query: (id) => `/history-wallet-agnet/${id}`,
			providesTags: ["agentHistory"],
		}),
	}),
});

export const {
	useGetUserDataQuery,
	useGetMerchantDataQuery,
	useGetAllMerchantDataQuery,
	useAddFundMerchantMutation,
	useGetMerchantHistoryQuery,
	useGetAgentHistoryQuery,
	useAddFundAgentMutation,
	useTransferFundMutation
} = api;
