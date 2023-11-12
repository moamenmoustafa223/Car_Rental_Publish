import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound'
import NavBar from './components/NavBar/NavBar'
import FeaturedCard from './components/FeaturedCard/FeaturedCard';
import UploadForm from './components/UploadForm/UploadForm';
import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage'
import CarPage from './pages/CarPage'
import VendorPage from './pages/VendorPage'
function App() {
  const routes = createBrowserRouter([

    {
      path: "", element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },

        { path: "navbar", element: <NavBar /> },
        { path: "card", element: <FeaturedCard /> },

        { path: "*", element: <NotFound /> }
      ]
    },
    {
      path: "form",
      element: <UploadForm count={3} />
    },
    {
      path: "cars",
      element: <CarsPage />
    },
    {
      path: "car/:id",
      element: <CarPage />
    }
  ])

  return (
    <>
      <RouterProvider router={routes}>
      </RouterProvider>
    </>
  )
}

export default App
