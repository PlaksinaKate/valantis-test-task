import { ROUTES } from '../helpers/consts.js';
import { Home } from './Home/index.jsx';
import DefaultLayout from '../layouts/Default/index.jsx';

export default [
  {
    path: ROUTES.home,
    element: <DefaultLayout />,
    children: [
      {
        path: ROUTES.home,
        index: true,
        element: <Home />
      }
    ]
  },
]
