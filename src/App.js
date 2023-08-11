import './styles/index.scss';

import { useSelector } from 'react-redux';
import { Navigate, Routes, Route } from 'react-router-dom';
import { Dashboard } from './layouts/Dashboard';
import { Auth } from './layouts/Auth';
import { Home } from './pages/Home';
import { Notices, Teachers } from './pages';
import { Results } from './pages/Results';

function App() {
	const log = useSelector((state) => state.auth.isLoggedIn);

	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={
						log === 'true' ? (
							<Navigate to="/dashboard" replace />
						) : (
							<Navigate to="/auth" replace />
						)
					}
				/>
				<Route path="/dashboard" element={<Dashboard />}>
					<Route path="home" element={<Home />} />
					<Route path="notices/:id" element={<Notices />} />
					<Route path="teachers" element={<Teachers />} />
					<Route path="results" element={<Results />} />
				</Route>
				<Route path="/auth" element={<Auth />} />
			</Routes>
		</div>
	);
}

export default App;
