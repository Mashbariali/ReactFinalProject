import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import './Style.css'



function Log() {
    const nav = useNavigate() 
    
const [name, setName] = useState('');

const [password, setPassword] = useState('');
const [isLoggedin, setIsLoggedin] = useState(false);

const login = () => {
	
	console.log(name, password);
	const userData = {
	name,
	password,
	};
	localStorage.setItem('key', JSON.stringify(userData));
	setIsLoggedin(true);
	setName('');
	setPassword('');
    nav("/TicketReservation")
};

const logout = () => {
	localStorage.removeItem('key');
	setIsLoggedin(false);
};

return (
	<>
	<div className='login'>
		<h1>Login </h1>
		{!isLoggedin ? (
		<>
			<form action="">
			<input
				type="text"
				onChange={(e) => setName(e.target.value)}
				value={name}
				placeholder="Name"
			/>
            <br></br>
			
			<input
				type="password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				placeholder="Password"
			/>
            <br></br>
			<button type="submit" onClick={login}>
				Login
			</button>
			</form>
		</>
		) : (
		<>
			<h2>logged in</h2>
			<button onClickCapture={logout}>logout</button>
		</>
		)}
	</div>

	
	</>
);
}

export default Log;
