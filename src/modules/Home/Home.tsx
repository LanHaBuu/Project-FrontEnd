import React from "react"
import { Link, useLocation } from "react-router-dom"
import { decodeToken } from "../../function/decodeToken"
import "./Home.scss"

const Home: React.FC = () => {
	const { name }: any = decodeToken(localStorage.getItem("token"))

	return (
		<div className='home-container'>
			<div className='header'>
				<h2>Home</h2>
				<span>{`Xin chao ${name}`}</span>
			</div>
			<div className='buttons'>
				<Link to='/register'>Register</Link>
				<Link to='/login'>Login</Link>
			</div>
		</div>
	)
}

export default Home
