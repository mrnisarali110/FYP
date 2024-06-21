import SignupForm from './components/SignupForm'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import SignIn from './SignIn';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <SignupForm />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
    ],
  },









])
function App() {
  return <RouterProvider router={router} />;
}

export default App;