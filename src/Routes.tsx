import { Switch, Route, BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"

export default function Routes() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/" exact >
                    <Home/>
                </Route>
            </Switch>

        </BrowserRouter>
    )
}