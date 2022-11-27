# React Router

```bash
npm i react-router-dom@6.4
```

## BrowserRouter

- createBrowserRouter 라는 멋진 새로운 API가 있어서 사용하지 않을 거임
- Link를 사용하려면 Link를 Router 안에 넣어야 한다.
  - Router 밖에서는 Link를 render 할 수 없기 때문

## errorElement

- 잘못된 주소 접근시 이동하는 컴포넌트를 작성해준다.
- 이동하려는 페이지 컴포넌트에서 충돌이 있을 때도 error페이지로 이동
- errorElement가 앱을 죽이지 않고 에러컴포넌트를 보여줌으로서 다른 컴포넌트에서 발생하는 문제로부터 보호해준다.

```javaScript
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
    ],
    errorElement: <NotFound />,
  },
]);
```

## userNavigate

- 다른 페이지로 이동시키는 한 가지 방법은 Link를 이용하는 것
  - Link는 유저가 클릭해야 한다.
- 유저의 클릭없이 유저를 이동시키고 싶을 때는 useNavigate를 이용한다.
- 유저가 로그인해서 redirect 시키고 싶거나, 유저가 어떤 페이지로 갔는데 접근 권한이 없을 때 사용한다.

## useParams

- 주소의 정보를 가져올 때 사용

```javaScript
import { useParams } from 'react-router-dom';

function User() {
  const params = useParams();
  console.log(params);
  return <h1>User</h1>;
}

export default User;
```

## Outlet

- outlet 컴포넌트는 Root 화면의 자식들을 render 했었어
- react Router의 역할은 Root를 render하는건데 Root한테 자식이 있으니 Outlet을 Root의 자식으로 대체시킨다.
- 해당 페이지의 자식이 있다면 그 경우에 Outlet이 사용된다.
- /를 쓰면 절대경로이다. 상대경로를 쓰려면 /없이 주소를 적는다

## useOutletContext

- url로 데이터를 보내는 대신 자식 route들과 소통하는 방법이다.
