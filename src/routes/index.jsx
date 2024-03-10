import { ROUTES } from '../helpers/consts.js';
import { Store } from './Store/index.jsx';
import ErrorPage from './ErrorPage/index.jsx';

export default [
  {
    path: ROUTES.home,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.home,
        index: true,
        element: <Store />
      }
    ]
  },
]
