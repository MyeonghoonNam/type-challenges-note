## 문제 설명

배열(튜플)을 받아 길이를 반환하는 제네릭 `Length<T>`를 구현하세요.

```typescript
type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5
```

## 풀이

읽기전용 unknown 타입의 배열로 타입을 제한하고 `T["length"]` 인덱스 접근을 통해 타입의 전체 길이를 반환하여 문제를 해결하였다.

```ts
type Length<T extends readonly unknown[]> = T["length"];
```
