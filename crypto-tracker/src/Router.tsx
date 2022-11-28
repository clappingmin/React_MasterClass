import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Coin from './routes/Coin';
import Coins from './routes/Coins';

const router = createBrowserRouter([
  {
    // 첫번째 라우터는 Homepage가 아닌 전체 route들의 컨테이너 같은 것
    path: '/', // url
    element: <App />,
    children: [
      {
        path: '', // url
        element: <Coins />,
      },
      {
        path: ':coinId', // url
        element: <Coin />,
      },
    ],
  },
]);

export default router;
