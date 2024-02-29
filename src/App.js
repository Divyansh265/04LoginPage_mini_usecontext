
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <div><h2>Welcome to Login Page</h2></div>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
