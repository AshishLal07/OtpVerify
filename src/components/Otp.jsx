import React from 'react';
import { useState } from 'react';
import Popup from './Popup';

const Otp = () => {
	const [number, setNumber] = useState(0);
	const [validno, setValidNo] = useState(false);
	const display = document.querySelector('.addNo');
	const handleSubmit = () => {
		if (number.length < 10) {
			alert('Enter a valid 10 digit number');
		} else {
			setValidNo(true);
			display.classList.add('hidden');
		}
	};
	const changeNo = () => {
		setValidNo(false);
		display.classList.remove('hidden');
	};

	return (
		<div className=" text-center mt-56">
			<div className="addNo">
				<input
					type="tel"
					className="border-2 border-black mr-3 pl-2 w-72"
					placeholder="Enter your mobile number"
					onChange={(e) => setNumber(e.target.value)}
					required
					minLength="10"
				></input>
				<button className="border-2 px-2" onClick={handleSubmit} type="submit">
					Submit
				</button>
			</div>
			{validno && <Popup Number={number} valid={changeNo}></Popup>}
		</div>
	);
};

export default Otp;
