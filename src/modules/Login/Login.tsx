import React, { useState } from "react"
import axios from "axios"
import "./Login.scss"
import { useLocation, useNavigate } from "react-router-dom"
import { decodeToken } from "../../function/decodeToken"

const Login: React.FC = () => {
	const [input, setInput] = useState({ username: "", password: "" })
	const navigate = useNavigate()
	const handleChange = (e: any) => {
		setInput((prev): any => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			}
		})
	}

	const handleLogin = () => {
		axios({
			method: "post",
			url: "auth/login",
			data: input,
			headers: { "Content-Type": "application/json" },
		})
			.then(res => {
				localStorage.setItem(
					"token",
					JSON.stringify(res.data.access_token),
				)
				navigate("/")
			})
			.catch(err => alert(err.response.data.message))
	}

	return (
		<div className='login-container'>
			<div className='input-wrapper'>
				<input
					type='text'
					name='username'
					placeholder='Username'
					value={input.username}
					onChange={handleChange}
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					value={input.password}
					onChange={handleChange}
				/>
			</div>
			<button onClick={handleLogin}>Login</button>
		</div>
	)
}

export default Login
