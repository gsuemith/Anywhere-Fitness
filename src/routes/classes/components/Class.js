import React from "react";
import { useSelector } from "react-redux";
import "./Class.css";

function Class(props) {
	const login = useSelector((state) => state.isLoggedIn);
	const handleClick = (e) => {
		e.preventDefault();
		console.log(e);
		setTimeout(() => {}, 3000);
	};
	return (
		<div className="Class-div">
			<div className="classname">
				<h2>{props.info.name}</h2>
			</div>
			<div className="class-info-div">
				<div className="locationName">
					<p>
						Location:{" "}
						<span className="locationSpan">{props.info.location}</span>
					</p>
				</div>
				<div className="AboutClass">
					<h3>About Class</h3>
					<div className="class-info-time">
						<p>
							Date:
							<span className="locationSpan">{props.info.date}</span>{" "}
						</p>
						<p>
							Start Time:
							<span className="locationSpan"> {props.info.startTime}</span>{" "}
						</p>
					</div>
					<div className="extraInfo">
						<p>
							Duration:{" "}
							<span className="locationSpan">{props.info.duration}</span>
						</p>
						<p>
							Type: <span className="locationSpan">{props.info.type}</span>{" "}
						</p>
					</div>
					<h3>Level of Difficulty:</h3>
					<span className="difficultySpan">{props.info.level}</span>
				</div>
			</div>
			<div className="classRole">
				<p>
					Class Size:{" "}
					<span className="classSizeSpan">{props.info.classSize}</span>
				</p>
				<p>
					Attendies:{" "}
					<span className="classSizeSpan">{props.info.attendees}</span>
				</p>
			</div>
			{login ? (
				<button onClick={handleClick}>Sign Up Now</button>
			) : (
				<a href="/login" id="SignupBTN">
					Login to Sign Up
				</a>
			)}
		</div>
	);
}

export default Class;
