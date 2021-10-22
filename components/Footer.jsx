import React from 'react'
import {FaFacebook} from "react-icons/fa"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"

const Footer = () => {
	return (
		<div className="w-full h-60 md:h-100vh">
			<div className="w-full h-50vh md:h-90vh flex md:flex-col">
				<div className="w-40% h-full md:w-full md:h-40% flex flex-col justify-center pl-32 md:px-8">
					<h2 className="text-2xl mb-2 font-semibold text-gray-700 font-poppins">KOMBUCHA</h2>
					<p className="text-md mb-4 font-poppins text-gray-500">Sufficient particular impossible by reasonable expression is. Yet preference unpleasent.</p>
					<div className="flex">
						<FaFacebook size="30" className="text-gray-700 mr-2"/>						
						<AiFillTwitterCircle size="30" className="text-gray-700 mr-2"/>
						<AiFillInstagram size="30" className="text-gray-700 mr-2"/>
					</div>
				</div>
				<div className="w-60% md:w-full md:h-60% h-full px-10 flex md:grid md:grid-cols-2 justify-evenly">
					<div className="flex flex-col justify-center h-full">
						<h2 className="text-xl mb-4 font-poppins text-gray-700">Menu</h2>
						<p className="text-sm mb-2 font-poppins text-gray-500">Donations</p>
						<p className="text-sm mb-2 font-poppins text-gray-500">Features</p>
						<p className="text-sm mb-2 font-poppins text-gray-500">Category</p>
						<p className="text-sm mb-2 font-poppins text-gray-500">Volunteer</p>
						<p className="text-sm font-poppins text-gray-500">About us</p>
					</div>
					<div className="flex flex-col justify-center h-full">
						<h2 className="text-xl mb-4 font-poppins text-gray-700">Categories</h2>
						<p className="text-sm mb-2 font-poppins text-gray-500">Healthy Food</p>
						<p className="text-sm mb-2 font-poppins text-gray-500">Education</p>
						<p className="text-sm mb-2 font-poppins text-gray-500">Clean Water</p>
						<p className="text-sm mb-2 font-poppins text-gray-500">Medical Help</p>
					</div>
					<div className="flex flex-col justify-center h-full">
						<h2 className="text-xl mb-4 font-poppins text-gray-700">About Us</h2>
						<p className="text-sm mb-2 font-poppins text-gray-500">Who are you?</p>
						<p className="text-sm mb-2 font-poppins text-gray-500">Contact Us</p>
						<p className="text-sm mb-2 font-poppins text-gray-500">FAQ</p>
						<p className="text-sm mb-2 font-poppins text-gray-500">Help</p>
					</div>
				</div>
			</div>
			<div className="w-full h-10vh border-t border-t-gray-200 flex items-center justify-center">
				<p className="text-sm font-poppins text-gray-500">© Copyright kombucha. All rights reserved</p>
			</div>
		</div>
	)
}

export default Footer