import { Route, Switch } from "react-router-dom";

import LandingPage from "../pages/landing";
import Home from "../pages/home";
import Pokemon from "../pages/pokemon";

const Router = () => {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<LandingPage />
				</Route>

				<Route path="/home">
					<Home />
				</Route>

				<Route path="/pokemon">
					<Pokemon />
				</Route>
			</Switch>
		</>
	);
};

export default Router;
