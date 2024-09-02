import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import ErrorPageHandle from './components/ErrorPageHandle/ErrorPageHandle';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import BooksDetails from './components/BooksDetails/BooksDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPageHandle/>,

    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/listedBook",
        element: <ListedBooks/>,
      },
      {
        path: "/pageToRead",
        element: <PagesToRead/>,
      },
      {
        path: "/booksDetails/:id",
        element: <BooksDetails />,
        loader: () => fetch("/books.json"),
    }
    ],

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
