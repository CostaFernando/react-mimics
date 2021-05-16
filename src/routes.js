import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Instructions from "./pages/Instructions";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/instrucoes" component={Instructions} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
