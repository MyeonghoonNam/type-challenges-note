## 문제

배열(튜플) `T`를 받아 첫 원소의 타입을 반환하는 제네릭 `First<T>`를 구현하세요.

## infer 키워드 ?

조건부 `extends`절에서 사용하는 키워드이다.

타입 스크립트가 엔진이 런타임 상황에서 타입을 추론할 수 있도록 하고, 추론한 타입 값을 `infer` 타입 파라미터 `U` 에 할당해준다.

```ts
type Foo<T> = T extends { a: infer U; b: infer U } ? U : never;
type T10 = Foo<{ a: string; b: string }>; // string
type T11 = Foo<{ a: string; b: number }>; // string | number
```

## 풀이

```ts
type First<T extends unknown[]> = T extends [infer A, ...infer rest]
  ? A
  : never;
```

조건부 `extends`절과 삼항연산자를 활용하였고, 배열의 스프레드 연산과 `infer` 키워드를 통해 조건부 타입 추론으로 문제를 해결하였다.
