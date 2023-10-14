import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import { MovieDatils } from '../pages/MovieDatils';
export function MyRouter() {
    return (
        <Router>
            <Routes>
                
                <Route
                    exact
                    path='/'
                    element={<LandingPage />}
                />

                <Route
                    exact
                    path='/movies/:movieId'
                    element={<MovieDatils />}
                />
                
            </Routes>
        </Router>
    )
}