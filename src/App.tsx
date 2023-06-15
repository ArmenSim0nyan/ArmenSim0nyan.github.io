import { Router, Route, Routes } from '@solidjs/router';
import { Component, lazy } from 'solid-js';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));

const App: Component = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" component={WelcomePage} />
            </Routes>
        </Router>
    );
};

export default App;
