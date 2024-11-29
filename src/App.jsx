import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import './components/Homepage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home';
import Homepage from './components/Homepage'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Homepage></Homepage>
       
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
