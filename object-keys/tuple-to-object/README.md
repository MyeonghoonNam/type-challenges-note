## 문제 설명

`배열(튜플)`을 받아, `각 원소의 값을 key/value`로 갖는 오브젝트 타입을 반환하는 타입을 구현하세요.

```ts
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type result = TupleToObject<typeof tuple>;
// expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```

## PropertyKey 유형 ?

`PropertyKey` 타입은 key값에 해당하는 전역 타입이다.

```ts
// string | number | symbol
type Example = PropertyKey;
```

가능한 모든 키를 사용하여 Record 유형을 생성하려는 상황에서 유용할 수 있습니다.

```ts
type RecordWithAllKeys = Record<PropertyKey, unknown>;
```

## 풀이

읽기 전용 속성 타입 `PropertyKey` 배열로 타입을 제한하고, `T[number]`를 통한 인덱스 시그니쳐로 배열 타입의 요소에 맵드 타입으로 접근하여 문제를 해결할 수 있습니다.

```ts
type TupleToObject<T extends readonly PropertyKey[]> = {
  [P in T[number]]: P;
};
```
