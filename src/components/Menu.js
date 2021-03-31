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
				<li>
					<a href="landing.html">Landing</a>
				</li>
				<li>
					<a href="generic.html">Generic</a>
				</li>
				<li>
					<a href="/classes">Classes</a>
				</li>
			</ul>
			<ul className="actions stacked">
				<li>
					<a href="\#" className="button primary fit">
						Get Started
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
