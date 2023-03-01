import React from "react"
import Login from "./modules/Login/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./modules/Home/Home"
import Register from "./modules/Register/Register"

const App: React.FC = () => {
	return (
		<div className='app'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
