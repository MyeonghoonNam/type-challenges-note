## 문제

`T`에서 `U`에 할당할 수 있는 타입을 제외하는 내장 제네릭 `Exclude<T, U>`를 이를 사용하지 않고 구현하세요.

## Exclude 타입 ?

여러개의 타입이 함께 존재하는 유니언 타입에서 특정 타입을 제거하는 유틸리티 타입이다.
Exclude로 제거할 수 있는 것은 하나의 타입 부터 유니언 까지 가능하다.

```ts
type T0 = Exclude<"a" | "b" | "c", "a">;
// type T0 = "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
// type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>;
// type T2 = string | number
```

## 풀이

실제 타입스크립트 Exclude의 코드는 아래와 같다.

```ts
/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T;
```

제네릭에서 사용되는 `T extends U`라는 키워드는 `T가 U라는 타입인지`를 의미한다.

T가 U의 타입 이라면, `never(빈 타입)`를, 그렇지 않다면 `T` 그자체, 즉 원래대로 돌려준다.
