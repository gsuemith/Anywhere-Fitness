import React from "react";

const Menu = () => {
	const handleLogout = (e) => {
		window.localStorage.clear("token");
	};
	return (
		<div className="inner">
			<ul className="links">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/client">Trainees</a>
				</li>
				<li>
					<a href="/instructor">Instructors</a>
				</li>
			</ul>
			<ul className="actions stacked">
				<li>
					<a href="/classes" className="button primary fit">
						See Classes
					</a>
				</li>
				<li>
					<a href="/register" className="button fit">
						Register
					</a>
				</li>
				<li>
					<a href="/login" className="button fit">
						Log In
					</a>
				</li>
				<li>
					<a href="/" onClick={handleLogout} className="button fit">
						Log Out
					</a>
				</li>
			</ul>
			<a className="close" href="#menu">
				"Close"
			</a>
		</div>
	);
};

export default Menu;
