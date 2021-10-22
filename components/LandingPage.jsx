import React, {useState, useEffect, useRef} from 'react'
import Image from "next/image"
import heroImg from "../assets/landing_page_and_theme__3_-removebg-preview.png"
import brandImg1 from "../assets/landing_page_and_theme-removebg-preview.png"
import brandImg2 from "../assets/landing_page_and_theme__1_-removebg-preview (1).png"
import brandImg3 from "../assets/landing_page_and_theme__2_-removebg-preview (1).png"
import brandImg4 from "../assets/landing_page_and_theme__3_-removebg-preview (1).png"
import brandImg5 from "../assets/landing_page_and_theme__4_-removebg-preview.png"
import img2 from "../assets/landing_page_and_theme__1_-removebg-preview.png"
import img4 from "../assets/landing_page_and_theme__5_-removebg-preview.png"
import img3 from "../assets/landing_page_and_theme__2_-removebg-preview.png"
import {BiMedal} from "react-icons/bi"
import {BsTruck} from "react-icons/bs"
import {RiMoneyEuroCircleLine} from "react-icons/ri"
import {MdKeyboardArrowRight} from "react-icons/md"
import {MdKeyboardArrowLeft} from "react-icons/md"

const LandingPage = () => {
	

	return ( 
		<div className="w-80%  mx-auto md:w-90%">
			<div className="flex md:flex-col md:h-160vh xsm:h-200vh h-85vh w-full">
				<div className="w-50% md:w-full md:h-1/2 h-full flex items-center justify-center">
					<Image src={heroImg} alt="" width="300" height="600"/>
				</div>	
				<div className="w-50% md:w-full h-full md:h-1/2 flex flex-col justify-center">
					<p className="flex text-lg text-gray-700 items-center font-poppins after:w-20 after:bg-gray-700 after:h-0 after:ml-4">ORGANIC TEA</p>
					<h1 className="md:text-5xl text-6xl text-gray-700 mt-8 mb-2 font-poppins">SPARKLING . TEA</h1>
					<h1 className="md:text-5xl text-6xl font-poppins text-red-500">KOMBUCHA</h1>
					<p className="text-md mt-4 font-poppins text-gray-700">Sparkling teas are essentially a mix of soda and tea, a cold carbonated version
					of the healthy classic-and health experts love them. "These beverages can 
					provide the benefit of the tea in them", says Jessica Cording, R.D
					</p>
					<div className="text-4xl text-gray-700 w-52 h-16 mt-4 border-b-2 border-gray-700 font-poppins font-semibold">$89.99</div>
					<button className="bg-gray-700 w-44 text-white mt-8 h-12">BUY NOW</button>
					<div className="flex w-full justify-between mt-8">
						<p className="font-poppins text-gray-700">INGREDIANTS <h3 className="text-red-500 text-xl font-poppins">100% Organic</h3></p>
						<p className="font-poppins text-gray-700">FLAVORS <h3 className="text-red-500 text-xl font-poppins">5 variations</h3></p>
						<p className="font-poppins text-gray-700">VOLUME <h3 className="text-red-500 text-xl font-poppins">465ml</h3></p>
					</div>
				</div>	
			</div>
			<div className="h-screen xsm:h-150vh w-full">
				<div className="brands h-20vh xsm:h-30vh w-full flex justify-evenly items-center">
					<Image src={brandImg1}/>
					<Image src={brandImg2}/>
					<Image src={brandImg3}/>
					<Image src={brandImg4}/>
					<Image src={brandImg5}/>
				</div>
				<div className="text h-60 w-full text-center flex flex-col justify-center">
					<h2 className="text-4xl text-gray-700 mb-4 font-poppins font-semibold ">100% Authentic Product</h2>
					<p className="text-md font-poppins mb-8 text-gray-700">And produce say the ten moments parties.Simple innate summer fat appear basket his desire joy.</p>
					<div className="w-full flex justify-center items-center mb-12">
						<BiMedal size={"100"} className="mr-8 text-gray-700"/>
						<BsTruck size={"100"} className="mr-8 text-gray-700"/>
						<RiMoneyEuroCircleLine size={"100"} className="mr-8 text-gray-700"/>
					</div>
					<button className="w-44 h-14 bg-gray-700 mx-auto text-white">Explore more</button>
				</div>
				<div className="w-full h-20vh xsm:h-30vh flex flex-col justify-center items-center text-center">
					<h2 className="text-4xl text-gray-700 font-poppins font-semibold mb-4">Arie Kombucha</h2>
					<p className="text-sm w-80% md:w-full mx-auto font-poppins text-gray-700">We loved designing the entire series of labels for Singapore based Kombucha. the label's philosophy concerning fresh and energetic ingrediants was key when creating this lively and colorful universe.</p>
				</div>
			</div>
			<div className="w-full h-150vh md:h-200vh xsm:h-240vh">
				<div className="w-full h-1/2 flex md:flex-col-reverse">
					<div className="h-full md:h-1/2 md:w-full w-1/2 flex flex-col justify-center px-8">
						<h3 className="font-poppins text-red-500 mb-4">KOMBUCHA</h3>
						<h2 className="font-poppins text-gray-700 text-3xl mb-4">Pineapple, Lychee & Hibiscus</h2>
						<p className="font-poppins mb-8 text-sm text-gray-700">We loved designing the entire series of labels for Singapore based Kombucha. the label's philosophy concerning fresh and energetic ingrediants was key when creating this lively and colorful universe.</p>
						<button className="w-32 h-12 bg-gray-700 text-white">Add to cart</button>
					</div>
					<div className="h-full md:h-1/2 md:w-full w-1/2 flex justify-center relative after:absolute after:w-20 after:h-20 after:border-t-2 after:border-r-2 after:border-r-red-500 after:border-t-red-500 after:top-0 after:right-0 after:bg-transparent items-center
					before:absolute before:w-20 before:h-20 before:border-b-2 before:border-l-2 before:border-l-red-500 before:border-b-red-500 before:bottom-0 before:left-0 before:bg-transparent items-center
					md:after:border-t-0 md:after:border-r-0 md:before:border-b-0 md:before:border-l-0
					">
						<Image src={img2} width={170} height={300}/>
					</div>
				</div>
				<div className="w-full h-1/2 flex md:flex-col">
					<div className="h-full md:h-1/2 md:w-full w-1/2 flex justify-center relative after:absolute after:w-20 after:h-20 after:border-t-2 after:border-l-2 after:border-l-red-500 after:border-t-red-500 after:left-0 after:top-0 after:bg-transparent items-center
					before:absolute before:w-20 before:h-20 before:border-b-2 before:border-r-2 before:border-r-red-500 before:border-b-red-500 before:bottom-0 before:right-0 before:bg-transparent items-center
					md:after:border-t-0 md:after:border-l-0 md:before:border-b-0 md:before:border-r-0
					">
						<Image src={img3} width={170} height={300}/>
					</div>
					<div className="h-full md:h-1/2 md:w-full w-1/2 flex flex-col justify-center px-8">
						<h3 className="font-poppins text-red-500 mb-4">KOMBUCHA</h3>
						<h2 className="font-poppins text-gray-700 text-3xl mb-4">Pineapple, Lychee & Hibiscus</h2>
						<p className="font-poppins mb-8 text-sm text-gray-700">We loved designing the entire series of labels for Singapore based Kombucha. the label's philosophy concerning fresh and energetic ingrediants was key when creating this lively and colorful universe.</p>
						<button className="w-32 h-12 bg-gray-700 text-white">Add to cart</button>
					</div>
				</div>
			</div>
			<div className="w-full h-150vh md:h-200vh xsm:h-240vh">
				<div className="w-full h-1/2 md:h-1/2 flex md:flex-col-reverse">
					<div className="h-full md:h-1/2 md:w-full w-1/2 flex flex-col justify-center px-8">
						<h3 className="font-poppins text-red-500 mb-4">KOMBUCHA</h3>
						<h2 className="font-poppins text-gray-700 text-3xl mb-4">Pineapple, Lychee & Hibiscus</h2>
						<p className="font-poppins mb-8 text-sm text-gray-700">We loved designing the entire series of labels for Singapore based Kombucha. the label's philosophy concerning fresh and energetic ingrediants was key when creating this lively and colorful universe.</p>
						<button className="w-32 h-12 bg-gray-700 text-white">Add to cart</button>
					</div>
					<div className="h-full md:h-1/2 md:w-full w-1/2 flex justify-center relative after:absolute after:w-20 after:h-20 after:border-t-2 after:border-r-2 after:border-r-red-500 after:border-t-red-500 after:top-0 after:right-0 after:bg-transparent items-center
					before:absolute before:w-20 before:h-20 before:border-b-2 before:border-l-2 before:border-l-red-500 before:border-b-red-500 before:bottom-0 before:left-0 before:bg-transparent items-center
					md:after:border-t-0 md:after:border-r-0 md:before:border-b-0 md:before:border-l-0
					">
						<Image src={heroImg} width={170} height={300}/>
					</div>
				</div>
				<div className="w-full h-1/2 flex flex-col">
					<div className="h-20vh xsm:h-40vh flex md:flex-col w-full justify-between md:justify-center items-center px-8">
						<h3 className="text-3xl font-poppins text-gray-700">Popular this week</h3>
						<div className="flex xsm:w-full justify-start">
							<p className="flex mr-4 text-lg text-gray-700 items-center font-poppins after:w-10 after:bg-gray-700 after:h-0 after:ml-2">01</p>
							<p className="flex mr-4 text-md text-gray-500 items-center font-poppins after:w-10 after:bg-gray-500 after:h-0 after:ml-2">02</p>
							<p className="flex text-md text-gray-500 items-center font-poppins after:w-10 after:bg-gray-500 after:h-0 after:ml-2">03</p>
						</div>
					</div>
					<div className="w-full md:flex-col h-40vh md:h-150vh flex justify-evenly items-center">
						<div className="w-40% md:w-full shadow-xl h-64 rounded bg-black flex">
							<div className="w-60% h-full bg-white flex flex-col justify-evenly px-6 md:px-2">
								<h3 className="text-lg font-poppins">Pineapple, Lychee & Hibiscus</h3>
								<p className="text-sm font-poppins">We loved designing the entire series of labels for Singapore based Arie Kombucha</p>
								<button className="bg-gray-700 w-32 h-10 text-white">Buy Now</button>
							</div>
							<div className="w-40% h-full bg-white flex items-center justify-center">
								<Image src={img2} width={100} height={200}/>
							</div>
						</div>
						<div className="w-40%  shadow-xl md:w-full h-64 rounded bg-black flex">
							<div className="w-60% h-full bg-white flex flex-col justify-evenly px-6 md:px-2">
								<h3 className="text-lg font-poppins">Pineapple, Lychee & Hibiscus</h3>
								<p className="text-sm font-poppins">We loved designing the entire series of labels for Singapore based Arie Kombucha</p>
								<button className="bg-gray-700 w-32 h-10 text-white">Buy Now</button>
							</div>
							<div className="w-40% h-full bg-white flex items-center justify-center">
								<Image src={img2} width={100} height={200}/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-50vh md:h-90vh md:flex-col flex items-center justify-evenly">
				<div className="w-72 h-52 rounded shadow-xl bg-white ">
					<Image src={img4}/>
				</div>
				<div className="flex w-50% md:w-full md:h-1/2 h-full items-center justify-evenly text-center">
					<div className="flex flex-col">
						<h2 className='text-5xl font-poppins'>56</h2>
						<p className="font-poppins text-md">countries supported</p>
					</div>
					<div className="flex flex-col">
						<h2 className='text-5xl font-poppins'>112+</h2>
						<p className="font-poppins text-md">International Branches</p>
					</div>
					<div className="flex flex-col">
						<h2 className='text-5xl font-poppins'>1M+</h2>
						<p className="font-poppins text-md">Sales through out the world</p>
					</div>
				</div>
			</div>
			<div className="w-full h-80vh ">
				<div className="w-full h-30vh flex items-center justify-center flex-col text-center">
					<h2 className="text-5xl text-gray-700 font-poppins">Testimonials</h2>
					<p className="text-md font-poppins text-gray-700 mt-4">Simple innote summer fat basket his desire joy.</p>
				</div>
				<div className="h-40vh w-full flex items-center justify-center overflow-x-hidden">
					<div className="w-40% md:w-full flex-shrink-0 h-full rounded shadow-xl  mr-8 flex flex-col items-center justify-center text-center">
						<div className="w-14 mb-2 h-14 rounded-full bg-testimonial bg-center bg-cover bg-no-repeat"></div>
						<p className="text-red-500 mb-2 text-lg">★★★★★</p>
						<h3 className="font-poppins mb-4 font-semibold text-lg">John De Marli</h3>
						<p className="text-sm font-poppins">And produce say the ten moment parties. Simple innate summer fat appear basket his desire joy. Outward at gravity do excited.</p>
					</div>
					<div className="w-40% md:w-full flex-shrink-0 h-full rounded shadow-xl  mr-8 flex flex-col items-center justify-center text-center">
						<div className="w-14 mb-2 h-14 rounded-full bg-testimonial bg-center bg-cover bg-no-repeat"></div>
						<p className="text-red-500 mb-2 text-lg">★★★★★</p>
						<h3 className="font-poppins mb-4 font-semibold text-lg">John De Marli</h3>
						<p className="text-sm font-poppins">And produce say the ten moment parties. Simple innate summer fat appear basket his desire joy. Outward at gravity do excited.</p>
					</div>
					<div className="w-40% md:w-full flex-shrink-0 h-full rounded shadow-xl flex flex-col items-center justify-center text-center">
						<div className="w-14 mb-2 h-14 rounded-full bg-testimonial bg-center bg-cover bg-no-repeat"></div>
						<p className="text-red-500 mb-2 text-lg">★★★★★</p>
						<h3 className="font-poppins mb-4 font-semibold text-lg">John De Marli</h3>
						<p className="text-sm font-poppins">And produce say the ten moment parties. Simple innate summer fat appear basket his desire joy. Outward at gravity do excited.</p>
					</div>
				</div>
				<div className="h-10vh w-full flex items-center justify-center">
					<MdKeyboardArrowLeft size={30} className="text-gray-700"/>
					<div className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full">
						<MdKeyboardArrowRight size={30} className="text-white"/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LandingPage