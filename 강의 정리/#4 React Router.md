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
