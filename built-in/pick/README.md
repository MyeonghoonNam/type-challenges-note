## 문제 설명

`T`에서 `K` 프로퍼티만 선택해 새로운 오브젝트 타입을 만드는 내장 제네릭 `Pick<T, K>`을 이를 사용하지 않고 구현하세요.

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

## Pick 타입이란 ?

타입스크립트의 유틸리티 타입 중 하나로, 유틸리티 타입은 이미 정의해 놓은 타입을 변환할 때 유용한 타입이다.

Pick 타입은 특정 타입에서 몇 개의 속성을 선택하여 타입을 정의할 수 있으며 `Pick<Type, Keys>` 형식으로 작성할 수 있다. 이때, keys 값에는 `문자열 리터럴` 혹은 `유니온 형식의 문자열 리터럴`이 올 수 있다.

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Todo타입에서 'title', 'completed' 속성을 선택하여 타입 정의
type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

## 풀이

Pick 타입을 유틸리티 타입을 사용하지 않고 직접 구현하는게 문제이므로 가져온 타입을 `T`, 해당 타입의 키를 확장하는 `K`를 선언하여 제네릭에서의 `extends`를 통해 타입의 조건부 제한을 설정하고 `Mapped Type`을 사용하여 타입을 정의합니다.

> 맵드 타입(Mapped Type)이란?
> 기존에 정의되어 있는 타입을 새로운 타입으로 변환해 주는 문법을 의미합니다.
>
> ```typescript
> { [ P in K ] : T }
> { [ P in K ]? : T }
> { readonly [ P in K ] : T }
> { readonly [ P in K ]? : T }
> ```

```ts
// 제네릭 extends 활용으로 타입 제한 설정
type MyPick<T, K extends keyof T> = {
  // Mapped type in 연산자를 통해 K 집합 타입의 요소들을 하나씩 치환
  [P in K]: T[P];
};
```
