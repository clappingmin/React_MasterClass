# TypeScript

## TypeScript
- JavaScript를 기반으로 한 프로그래밍 언어
- strongly-typed 언어 : 프로그래밍 언어가 작동하기 전에 type을 확인하는 언어
- type이 맞지 않는 입력이 있을 경우 에러를 발생시킨다.
- 개발자가 할 실수들을 방지할 수 있다.
- TypeScript는 브라우저가 이해할 수 없다. TypeScript를 컴파일해서 JavaScript 만듦

## 설치
### 프로젝트 새로 만들 경우
```bash
npx create-react-app 프로젝트명 --template typescript
```
### 기존 프로젝트를 바꿀 경우
```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

### 라이브러리 설치할 때
```bash
npm install --save @types/styled-components
```

prop Tyes
- prop이 거기에 있는지 없는지를 확인해 준다.
= 브라우저 콘솔에 경고를 보여준다.
- 코드를 실행한 후에만 확인 가능하다.
- 우리가 TypeScript를 사용하는 이유는 코드가 실행되기 전에 오류를 확인하기 위해서인데,,
- 그러니 prop Types를 사용하지 않고 TypeScript로 보호해줄 것

interface (인터페이스)
- object shape을 TypeScript에게 설명해주는 TypeScript의 개념

```JavaScript
interface PlayerShape {
  name: string;
  age: string;
}

const sayHello = (playerObj: PlayerShape) => `Hello ${playerObj.name}`;

sayHello({ name: 'min', age: 12 });
```

default props? optional props?

```JavaScript
// borderColor가 props에 있으면 그 값을, 없으면 'white'를 Container에 넘겨주겠다.
// Circle한테는 borderColor가 optional, Container한테는 Required일 경우!
function Circle({ bgColor, borderColor }: CircleProps) {
  return <Container bgColor={bgColor} borderColor={borderColor ?? 'white'} />;
}
```

TypeScript에서 state
- typeScript에서 state의 default의 type은 앞으로 변하지 않을 것이라고 생각한다.
- type을 쓰지 않아도 default value를 보고 알아서 type을 생각한다.
- 만약 string 또는 number 타입으로 사용하고 싶을 경우?
```JavaScript
  const [counter, setCounter] = useState<number | string>(0);
```
- 하지만 매우 드물다.

## Theme
1. npm install @types/styled-components
2. declaration(선언) 파일 생성
