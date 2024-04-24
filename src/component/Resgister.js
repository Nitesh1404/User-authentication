import React, { useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: ''
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('https://auth-backend-rhn8.onrender.com/api/auth/createuser', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.error);
			}
			localStorage.setItem('token', data.authtoken);
			navigate('/profile') // Redirect to profile page on successful registration
		} catch (error) {
			console.error('Registration error:', error.message);
		}
	};

	return (
		<div className='container d-flex justify-content-center align-items-center flex-column'>
			<h2 className='my-5' style={{ fontWeight: "bold" }}>Register</h2>

			<form className="form" onSubmit={handleSubmit}>
				<div className="flex-column">
					<label>Name</label>
				</div>
				<div className="inputForm">
					<input type="text" className="input" name="name" placeholder="Enter your Name" value={formData.name} onChange={handleChange} />
				</div>

				<div className="flex-column">
					<label>Email</label>
				</div>
				<div className="inputForm">
					<input type="text" className="input" name="email" placeholder="Enter your Email" value={formData.email} onChange={handleChange} />
				</div>

				<div className="flex-column">
					<label>Password</label>
				</div>
				<div className="inputForm">
					<input type="password" className="input" name="password" placeholder="Enter your Password" value={formData.password} onChange={handleChange} />
				</div>

				<button type="submit" className="button-submit">Sign Up</button>

				<p className="p">Already have an account?
					<span className="span">
						<Link to='/login'>Sign In</Link>
					</span>
				</p>
			</form>
		</div >
	);
};

export default Register;
