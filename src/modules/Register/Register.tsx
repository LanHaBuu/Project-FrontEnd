import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Register.scss"

const Register: React.FC = () => {
	const [input, setInput] = useState({ username: "", password: "", name: "" })
	const navigation = useNavigate()

	const handleChangeInput = (e: any) => {
		setInput(prev => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			}
		})
	}

	const handleRegister = () => {
		axios
			.post("user", { data: input })
			.then(res => {
				alert("Bạn đã đăng ký thành công")
				navigation("/login")
				setInput({
					username: "",
					password: "",
					name: "",
				})
			})
			.catch(err => alert(err.response.data.message))
	}

	return (
		<div className='register-container'>
			<div className='input-wrapper'>
				<input
					type='text'
					name='username'
					placeholder='Username'
					value={input.username}
					onChange={handleChangeInput}
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					value={input.password}
					onChange={handleChangeInput}
				/>
				<input
					type='text'
					name='name'
					placeholder='Tên hiển thị'
					value={input.name}
					onChange={handleChangeInput}
				/>
			</div>
			<button onClick={handleRegister}>Register</button>
		</div>
	)
}

export default Register
