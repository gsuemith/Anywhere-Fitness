import { Route, Switch } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./routes/home/Home";
import { PrivateRoute } from "./utils/PrivateRoute";
import Client from "./routes/client/Client";
import Register from "./routes/register/Register"
import Login from "./routes/login/Login"


function App() {
	return (
		<>
			<Header />
			<Switch>
				<PrivateRoute exact path="/client">
					<Client />
				</PrivateRoute>
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login}/>
				<Route path="/" component={Home} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
