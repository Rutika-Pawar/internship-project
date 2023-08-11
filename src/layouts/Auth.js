import { useSelector, useDispatch } from 'react-redux';
import { loggedIn, loggedOut } from '../store/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Auth = () => {
	let log = useSelector((state) => state.auth.isLoggedIn);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (log === 'true') {
			localStorage.setItem('loggedIn', true);
			navigate('/dashboard');
		} else {
			navigate('/auth');
		}
	}, [log, navigate]);

	return (
		<>
			<h1>
				Auth Component
				<div>
					<button
						aria-label="Increment value"
						onClick={() => dispatch(loggedIn())}
					>
						Log In
					</button>
					<span>{log}</span>
					<button
						aria-label="Decrement value"
						onClick={() => dispatch(loggedOut())}
					>
						Log out!!
					</button>
				</div>
			</h1>
		</>
	);
};
