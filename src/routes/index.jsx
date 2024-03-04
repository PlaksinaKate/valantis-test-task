import { ROUTES } from '../helpers/consts.js';
import { Home } from './Home/index.jsx';

export default [
  {
    path: ROUTES.home,
    children: [
      {
        path: ROUTES.home,
        index: true,
        element: <Home />
      }
    ]
  },
]
