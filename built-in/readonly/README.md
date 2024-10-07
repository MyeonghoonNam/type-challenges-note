## 문제 설명

`T`의 모든 프로퍼티를 읽기 전용(재할당 불가)으로 바꾸는 내장 제네릭 `Readonly<T>`를 이를 사용하지 않고 구현하세요.

```typescript
interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
```

## readonly 속성 ?

readonly는 타입 객체의 key 앞에 붙여주면서 사용할 수 있으며 읽기 전용 속성이므로 수정이 불가능하게 한다.

구체적으로 초기화는 가능하며 변경이 안된다.

```ts
interface Todo {
  readonly title: string;
  readonly description: string;
}

const firstTodo: Todo = {
  title: "typescript",
  description: "study",
};

firstTodo.title = "javascript"; // error
```

## 풀이

Readonly 유틸리티 타입을 사용하지 않고 직접 구현하는게 문제이므로 가져온 타입을 `T`, 해당 타입 객체의 키를 유니온형태로 추출하고 순회하기 위해 `in`과 `keyof` 키워드를 활용한 맵드타입으로 문제를 해결하였습니다.

```ts
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
```
