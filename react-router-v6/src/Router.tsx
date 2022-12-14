import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import About from './screens/About';
import Home from './screens/Home';
import Root from './Root';
import NotFound from './screens/NotFound';
import ErrorComponent from './components/ErrorComponent';
import User from './screens/users/User';
import Followers from './screens/users/Followers';

const router = createBrowserRouter([
  {
    // 첫번째 라우터는 Homepage가 아닌 전체 route들의 컨테이너 같은 것
    path: '/', // url
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: 'about', // /의 자식
        element: <About />,
      },
      {
        path: 'users/:userId',
        element: <User />,
        children: [
          {
            path: 'followers',
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
