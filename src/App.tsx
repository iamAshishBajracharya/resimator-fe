import AppRoutes from './routes/AppRoutes';
import { useDispatch } from 'react-redux';
import useLocalStorage from './hooks/useLocalStorage';
import { useEffect } from 'react';
import { setAuthToken, setUser } from './features/auth/authSlice'; // Assuming you have actions for setting auth token and user

function App() {
  const dispatch = useDispatch();

  // Retrieve token and user from localStorage
  const [token,] = useLocalStorage<string>('jwtToken', '');
  const [user,] = useLocalStorage<string>('user', ''); // Assuming you store the user as a stringified JSON object

  useEffect(() => {
    if (token) {
      // If the token exists, set it to the Redux store
      dispatch(setAuthToken(token));

      // Optionally, navigate to the dashboard or home page
      // navigate('/dashboard');
    }
    console.log('token', token, user)
    if (user) {
      console.log('$user', user)
      // Parse and set the user data if available in localStorage
      // dispatch(setUser(JSON.parse(user)));
      dispatch(setUser(user));
    }
  }, [token, user, dispatch]);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
