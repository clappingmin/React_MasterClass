# 5 Crypto Tracker

```bash
npm install --save styled-components
npm install --save @types/styled-components
npm i react-router-dom@6.4
npm i --save-dev @types/react-router-dom
npm i react-query
```

## Switch

- react-router-dom v5
- 한 번에 하나의 Route를 렌더링할 수 있는 방법

## styles

- 스타일 리셋하는 방법
- style reset 파일을 복사, 붙여넣기
- **_styled-reset 사용하기_**

```bash
npm i styled-reset
```

### createGlobalStyle

- 렌더링 될 때 전역 스코프에 스타일을 올려주는 컴포넌트 생성

### Fragment

- 일종의 유령 컴포넌트
- 부모 없이 서로 붙어 있는 것들을 리턴할 수 있게 해준다.

#### <a></a>

- a href를 하면 페이지가 새로고침되어 버려서 사용 X
- react router에서 <Link></Link>들은 결국 <a></a>로 바뀐다.
  - styled-component에서 수정할 때 a로 부르면 된다.

#### 그 자리에서 함수를 바로 실행하는 방법

```javaScript
    (async () => {
      fetch('https://api.coinpaprika.com/v1/coins');
    })();
```

### Link를 통해서 데이터를 보내는 방법

- parameter를 통해 url에 정보를 담아 보내는 방법
- 다른 방법 : state를 사용하는 방법
- to에 오브젝트를 담아서 보낸다.
- state로 데이터를 보낼 때 주의할 점
  - 다이렉트로 그 주소에 접근할 경우 error가 뜬다.
  - 클릭할 때 state가 전달되서 다이렉트로 접근하면 state가 정의되지 않았기 때문에 state가 undefinedf라서 오류가 발생한다.

## interfate

- interface 이름 지을 때 앞에 I를 붙임 (보통)

## Nested Routing (중첩 라우팅)

- v6에서는 Switch가 Routes로 변경됐다.
- Outlet을 사용하면 Nested Routing을 쉽게 구현할 수 있다.

### useEffect()

- 해당 훅을 최초에 한번만 실행하고 싶을 때는 []로 no defendencies를 사용한다.
- 하지만 훅은 최선의 성능을 위해서는 hook안에서 사용한 것은 defendency를 넣어야 한다고 경고를 준다.

### useMatch

- hook
- 사용자가 특정한 URL에 있는지의 여부를 알려주는 훅
- 특정 URL에 들어와있으면 Object를 아닐 경우 null을 반환한다.

## React Query

```bash
npm i react-query
```

- react 버전이 18 이상일 경우 typeScript에서 react query를 못불러 온다.
- react 버전 17로 하던가

```bash
npm i @tanstack/react- query
```

- @tanstack/react- query에서 useQuery를 사용할 때 query key의 값을 []로 묶어줘야 한다.

- React 애플리케이션에서 서버 state를 fetching, caching, synchronizing, updating 할 수 있도록 도와주는 라이브러리
- global state를 건드리지 않고 React 및 React Native 애플리케이션에서 데이터를 가져오고 캐시하고 업데이트 한다.
- themeProvider 때처럼 queryClientProvider 안에 있는 모든 것은 queryClient에 접근할 수 있다.
- response를 파괴하지 않고 캐시해둠

1. 사용 첫 단계 fetcher 함수 만들기

- 니꼬쌤은 기본적으로 API와 관련된 것들은 component들과 멀리 떨어뜨림
- fetch 함수는 꼭 fetch promise를 return해 줘야 한다.

2. useQuery(쿼리 key(쿼리의 고유식별자),fetcher 함수)

- 두 개의 인자를 받는다. 쿼리 key(쿼리의 고유식별자),fetcher 함수
- isLoading이라고 불리는 boolean 값을 return한다.
- return 해주는 data는 data에 넣어준다.

### Devtools

- render할 수 있는 component
- React query에 있는 Devtools를 import 하면 캐시에 있는 query를 볼 수 있다.

```javascript
import { ReactQueryDevtools } from 'react-query/devtools';

<ReactQueryDevtools initialIsOpen={true} />;
```
