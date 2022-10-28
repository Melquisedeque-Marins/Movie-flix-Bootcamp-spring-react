import { Switch, Route, Router } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import MovieDetails from "./pages/MovieDetails/MovieDetails"
import Movies from "./pages/Movies/Movies"
import history from "./util/history"

export default function Routes() {
    return (
        <Router history={history}>
            <Navbar/>
            <Switch>
                <Route path="/" exact >
                    <Home/>
                </Route>
                    <Route path="/movies" exact >
                        <Movies/>
                    </Route>
                    <Route path="/movies/:movieId" >
                        <MovieDetails/>
                    </Route>
            </Switch>
        </Router>
    )
}