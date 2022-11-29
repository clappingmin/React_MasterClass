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
