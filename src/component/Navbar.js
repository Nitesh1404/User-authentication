import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const handleLogout = () => {
		localStorage.removeItem('token');
	}
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">Navbar</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">Home</Link>
						</li>

						{
							localStorage.getItem('token') ? <li className="nav-item">
								<Link className="nav-link" to="/" onClick={handleLogout}>logout</Link>
							</li> : <li className="nav-item">
								<Link className="nav-link" to="/" >login</Link>
							</li>
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
