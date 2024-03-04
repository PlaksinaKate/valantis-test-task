import { ROUTES } from '../helpers/consts.js';
import { Home } from './Home/index.jsx';
import DefaultLayout from '../layouts/Default/index.jsx';
import ErrorPage from './ErrorPage/index.jsx';

export default [
  {
    path: ROUTES.home,
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.home,
        index: true,
        element: <Home />
      }
    ]
  },
]
