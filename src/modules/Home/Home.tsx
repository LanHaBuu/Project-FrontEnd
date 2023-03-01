import React from "react"
import { Link, useLocation } from "react-router-dom"
import { decodeToken } from "../../function/decodeToken"
import "./Home.scss"

const Home: React.FC = () => {
	const userName: string = decodeToken(localStorage.getItem("token"))?.name

	return (
		<div className='home-container'>
			<div className='header'>
				<h2>Home</h2>
				<span>{userName && `Xin chao ${userName}`}</span>
			</div>
			<div className='buttons'>
				<Link to='/register'>Register</Link>
				<Link to='/login'>Login</Link>
			</div>
		</div>
	)
}

export default Home
