import { Route, Redirect } from "react-router-dom";

<Redirect to="/"/>


export default function PrivateRoute ({children, ...routeProps}){
    return <Route {...routeProps}>{children}</Route>
}