import React, {useState, useEffect} from 'react'
import {MdSearch} from "react-icons/md"
import {MdShoppingBasket} from "react-icons/md"
import {BsFillPersonFill} from "react-icons/bs"
import {MdOutlineMenu} from "react-icons/md"

const Header = () => {
	const [header, setHeader] = useState(false)

	useEffect(() => {
		console.log(header)
	})
	return (
		<header className="header flex h-15vh w-80% md:w-screen md:px-6 mx-auto justify-between items-center">
			<h1 className="font-poppins z-20 md:text-xl text-2xl cursor-pointer qhd:text-3xl">KOMBUCHA</h1>
				<div className="flex items-center">
					<nav className="flex font-poppins mr-20 md2:hidden">
					<a className="nav_link active mr-4 qhd:mr-8 border-b-2 border-red-500 qhd:text-2xl" href="#">products</a>
					<a className="nav_link active mr-4 qhd:mr-8 qhd:text-2xl" href="#">story</a>
					<a className="nav_link active mr-4 qhd:mr-8 qhd:text-2xl" href="#">manufacturing</a>
					<a className="nav_link active mr-4 qhd:mr-8 qhd:text-2xl" href="#">packaging</a>
				</nav>
				<div className="icons flex">
					<MdSearch size="20" className="mr-4 "/>
					<MdShoppingBasket size="20" className="mr-4"/>
					<BsFillPersonFill size="20" className="mr-4"/>
					<MdOutlineMenu onClick={() => setHeader(!header)} size="20" className="md2:block hidden z-20"/>
				</div>	
			</div>
			<div className={`w-screen ${header===true ? "flex" : "hidden"} flex-col items-center justify-center h-screen absolute top-0 left-0 bg-white z-10`}>
				<a className="font-poppins text-xl mb-4" href="#">products</a>
				<a className="font-poppins text-xl mb-4" href="#">story</a>
				<a className="font-poppins text-xl mb-4" href="#">manufacturing</a>
				<a className="font-poppins text-xl" href="#">packaging</a>
			</div>
		</header>
	)
}

export default Header