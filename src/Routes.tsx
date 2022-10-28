import { Switch, Route, BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Movies from "./pages/Movies/Movies"

export default function Routes() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/" exact >
                    <Home/>
                </Route>
                <Route path="/movies" exact >
                    <Movies/>
                </Route>
            </Switch>

        </BrowserRouter>
    )
}