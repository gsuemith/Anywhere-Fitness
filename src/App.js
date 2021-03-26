import { Route, Switch } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Routes/Home/Home";


function App() {
  return (
    < >
      <Header />
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
