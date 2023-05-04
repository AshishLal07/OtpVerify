import React from 'react';
import { useEffect } from 'react';
const Popup = ({ Number, valid }) => {
	let inputs, button;

	function setIndex() {
		inputs.forEach((input, index) => {
			input.dataset.index = index;
		});
	}

	useEffect(() => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
		inputs = document.querySelectorAll('.otp-field input');
		// eslint-disable-next-line react-hooks/exhaustive-deps
		button = document.querySelector('.otp-btn');
		setIndex();

		// eslint-disable-next-line
	}, []);

	const toggleValidOtp = (add, remove) => {
		button.classList.add(add);
		button.classList.remove(remove);
	};

	const handleOtp = (e) => {
		const input = e.target;
		let value = input.value;
		let isValidInput = value.match(/[0-9a-z]/gi);
		input.value = '';
		input.value = isValidInput ? value[0] : '';
		let fieldIndex = input.dataset.index;

		// console.log(fieldIndex, input.value, inputs.length - 1, isValidInput);

		if (fieldIndex < inputs.length - 1 && isValidInput) {
			input.nextElementSibling.focus();
		}

		if (e.key === 'Backspace' && fieldIndex > 0) {
			input.previousElementSibling.focus();
			if (button.classList.contains('opacity-100')) {
				toggleValidOtp('opacity-75', 'opacity-100');
				button.setAttribute('disabled', true);
			}
		}

		// eslint-disable-next-line eqeqeq
		if (fieldIndex == inputs.length - 1 && isValidInput) {
			button.removeAttribute('disabled');
			toggleValidOtp('opacity-100', 'opacity-75');
		}
	};

	const handleOnPasteOtp = (e) => {
		const data = e.clipboardData.getData('text');
		const value = data.split('');
		if (value.length === inputs.length) {
			inputs.forEach((input, index) => (input.value = value[index]));
			button.setAttribute('disabled', 'false');
			toggleValidOtp('opacity-100', 'opacity-75');
		}
	};

	return (
		<div className=" w-1/2 m-auto">
			<p className="text-2xl m-2">Phone Verification</p>
			<hr></hr>
			<p className="text-gray-400 my-2 ">
				Enter the OTP you recieved on {Number.slice(0, 5)}-{Number[5]}XXXX
			</p>
			<form className="otp-field flex justify-between mt-8">
				<input
					type="text"
					className="border-b-2 border-black w-9 text-center"
					name="digit-"
					maxLength="1"
					onKeyUp={handleOtp}
					onPaste={handleOnPasteOtp}
				></input>
				<input
					type="text"
					className="border-b-2 border-black w-9 text-center"
					name="digit-"
					maxLength="1"
					onKeyUp={handleOtp}
					onPaste={handleOnPasteOtp}
				></input>
				<input
					type="text"
					className="border-b-2 border-black w-9 text-center"
					name="digit-"
					maxLength="1"
					onKeyUp={handleOtp}
					onPaste={handleOnPasteOtp}
				></input>
				<input
					type="text"
					className="border-b-2 border-black w-9 text-center "
					name="digit-"
					maxLength="1"
					onKeyUp={handleOtp}
					onPaste={handleOnPasteOtp}
				></input>
				<input
					type="text"
					className="border-b-2 border-black w-9 text-center"
					name="digit-"
					maxLength="1"
					onKeyUp={handleOtp}
					onPaste={handleOnPasteOtp}
				></input>
				<input
					type="text"
					className="border-b-2 border-black w-9 text-center "
					name="digit-"
					maxLength="1"
					onKeyUp={handleOtp}
					onPaste={handleOnPasteOtp}
				></input>
			</form>
			<div className="flex justify-between my-4">
				<p className="text-blue-600 cursor-pointer" onClick={() => valid()}>
					Change Number
				</p>
				<p className="text-blue-600">Re-send OTP</p>
			</div>
			<button
				disabled
				className="otp-btn opacity-75 bg-orange-600 w-64 py-1 rounded-full "
			>
				{' '}
				Verify Phone Number{' '}
			</button>
		</div>
	);
};

export default Popup;
