import { Route, Switch } from "react-router";

import Footer from "./components/Footer";
import Header from "./components/Header";

import { PrivateRoute } from "./utils/PrivateRoute";

import Home from "./routes/home/Home";
import Client from "./routes/client/Client";
import Instructor from "./routes/instructor/Instructor";
import Register from "./routes/register/Register"
import Login from "./routes/login/Login"
import Classes from "./routes/classes/Classes"


function App() {
	return (
		<>
			<Header />
			<Switch>
				<PrivateRoute path="/instructor">
					<Instructor />
				</PrivateRoute>
				<PrivateRoute path="/client">
					<Client />
				</PrivateRoute>
				<Route path="/classes">
					<Classes />
				</Route>
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login}/>
				<Route path="/" component={Home} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
