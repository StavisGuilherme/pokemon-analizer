import { Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import Main from "../pages/main";

const Router = () => {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route path="/main">
					<Main />
				</Route>
			</Switch>
		</>
	);
};

export default Router;
