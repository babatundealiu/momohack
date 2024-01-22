"use client";

import {  Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
	useAddFundAgentMutation,
	useAddFundMerchantMutation,
} from "../../utils/apiSlice";
import ShowToast from "./ShowToast";

interface Iprops {
	type: string;
}

const ModalComp: React.FC<Iprops> = ({ type }) => {
	const [openModal, setOpenModal] = useState<string | undefined>();
	const [email, setEmail] = useState("");
	const [amount, setAmount] = useState<number>();
	const props = { openModal, setOpenModal, email, setEmail };
	const user = useSelector((state: any) => state.persistedReducer?.currentUser);

	const [addFundMerchant, { isLoading: load }] = useAddFundMerchantMutation();
	const [addFundAgent, { isLoading }] = useAddFundAgentMutation();

	const handleSubmit = () => {
		addFundMerchant({
			id: user.id,
			amount: Number(amount),
		}).then(() => {
			props.setOpenModal(undefined);
			ShowToast(true, "Wallet Funded Successful");
		});
	};

	const handleSubmitAgent = () => {
		addFundAgent({
			id: user.id,
			amount: Number(amount),
		}).then(() => {
			props.setOpenModal(undefined);
			ShowToast(true, "Wallet Funded Successful");
		});
	};

	return (
		<>
			{type === "fundWallet" || type === "fundWalletAgent" ? (
				<div
					onClick={() => props.setOpenModal("fundWallet")}
					className='w-[220px] mt-5 h-[46px] text-white justify-center bg-green-500 rounded-[10px] flex items-center mb-2 cursor-pointer'>
					{" "}
					Fund Wallet
				</div>
			) : null}

			<Modal
				show={
					props.openModal === "fundWallet" ||
					props.openModal === "fundWalletAgent"
				}
				size='xl'
				popup
				onClose={() => props.setOpenModal(undefined)}>
				<Modal.Header />
				<Modal.Body>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							if (type === "fundWallet") {
								handleSubmit();
							} else {
								handleSubmitAgent();
							}
						}}
						className='space-y-6 '>
						<h3 className='text-xl font-medium  text-gray-900 dark:text-white'>
							Fund your Wallet
						</h3>
						<div>
							<div className='mb-2 block'>
								<Label htmlFor='amount' value='Amount (#)' />
							</div>
							<TextInput
								onChange={(e) => {
									setAmount(Number(e.target.value));
								}}
								type='number'
								id='amount'
								placeholder='50'
								required
							/>
						</div>

						{isLoading || load ? (
							<div className='w-full'>
								<button
									disabled
									className='rounded-[10px] flex items-center mb-2 cursor-pointer 
w-[150px] mt-5 h-[46px] text-white justify-center bg-green-500 '>
									Processing...
								</button>
							</div>
						) : (
							<div className='w-full'>
								<button
									className='rounded-[10px] flex items-center mb-2 cursor-pointer 
w-[150px] mt-5 h-[46px] text-white justify-center bg-green-500 '>
									Deposit
								</button>
							</div>
						)}
					</form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default ModalComp;
