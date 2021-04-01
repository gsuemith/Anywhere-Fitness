import React, {useState} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import { LOG_IN } from "../../actions";
import { useHistory } from "react-router";
import Banner from "./Banner"

const initialFormValues = {
	username: "",
	password: "",
	role: "",
  };
  
const Login = () => {
	const [credentials, setCredentials] = useState(initialFormValues);
	// set error
	const [error, setError] = useState(""); 
	const dispatch = useDispatch();
	const {push} = useHistory();
	const handleChange = e => {
		const {name, value} = e.target
		setCredentials({...credentials, [name]:value})

	}

const handleSubmit = e => {
	e.preventDefault()
	// 
	const {password, username, role} = credentials
	if(!password || !username || !role){
		setError("Please Fill All Forms");
		return 
	}
	credentials.role = parseInt(credentials.role)
	console.log(credentials)
	axios.post("https://anywherefitness-tt16.herokuapp.com/api/auth/login", credentials)
	.then(res => {
		console.log(res)
		localStorage.setItem("token", res.data.token)
		const user = res.config.data
		dispatch({type:LOG_IN, payload: user})
		push("/classes")



	})
	.catch(error => {
		console.log(error.response)
	})
}


	return( 
	<>
	<Banner N={5}/>
	<section>
	<div className = "inner">
    <form onSubmit={handleSubmit}>
      <div className="fields"> 
	  {/* username */}
        <div className="field third">
          <label htmlFor="name">Username:</label>
          <input type="text" name="username" id="username" value={credentials.username} onChange={handleChange}/>
        </div>
		{/* password */}
        <div className="field third">
          <label htmlFor="username">Password:</label>
          <input type="text" name="password" id="password" value={credentials.password} onChange={handleChange} />
        </div>
		{/* drop down */}
	  <div className="field third">
		  <label htmlFor="role"> Role </label>
		  <select name="role" id="role" value={credentials.role} onChange={handleChange}>
			  <option value="">Select a Role:</option>
			  <option value={1}>Instructor</option>
			  <option value={2}>Client</option>
		  </select>
		</div>
      </div>
	  
	  {/* submit */}
      <ul className="actions">
        <li><input type="submit" value="Submit" className="primary" /></li>
		<li>{error && <h4>{error}</h4>}</li>
      </ul>
    </form>
	</div>
  </section>
  </>)

};
export default Login;

