# Wiki

## 제네릭(generic)

타입을 직접적으로 고정된 값으로 명시하지말고 '변수' 를 통해 언제든지 변할 수 있는 타입을 통해 보다 유연하게 해주는 문법을 의미한다. 즉, **타입의 변수화**로 요약할 수 있다.

제네릭 타입은 함수나 클래스의 선언 시점이 아닌, **사용 시점에 타입을 선언**할 수 있는 방법을 제공한다.

꺾쇠 `<>` 기호를 제네릭을 구현하려면 식별자 뒤에다가 꺾쇠 괄호를 적어주어야 한다.그리고 제네릭명은 꼭 T가 아니어도 된다. 관습적으로 대문자 알파벳 한글자로 처리하는 편이다. (T, U, K ...)

### 제네릭 제약 조건(extends)

제네릭은 사용하는 시점에 타입을 결정한다. 타입의 범위가 너무 광범위하다면 타입스크립트의 의미가 모호해지며 이를 위해 적용되는 **타입의 종류를 제한할 수 있는 기능을 제공한다.**

아래와 같이 `extends` 키워드를 활용한다.

> 제네릭의 extends는 인터페이스나 클래스의 extends 와 약간 정의가 다르다.
> 클래스의 extends는 상속의 의미로서 '확장' 의 정의를 가지지만, 제네릭의 extends는 '제한' 의 의미를 가진다는 차이점이 있다.
> 따라서 **`<T extends K>`** 형태의 제네릭이 있다면, **T가 K에 할당 가능해야 한다** 라고 정의하면 된다.

매개변수 key가 반드시 매개변수 obj의 제네릭 타입 T(객체를 받게되는)에 존재하여야 할때, keyof T 를 하면 객체의 key 값을 모아 유니온 타입으로 만들 수 있다.

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // 성공
getProperty(x, "m"); // 오류: 인수의 타입 'm' 은 'a' | 'b' | 'c' | 'd'에 해당되지 않음.
```

### keyof

객체 형태의 타입을, 따로 속성들만 뽑아 모아 유니온 타입으로 만들어주는 연산자

```typescript
type Type = {
  name: string;
  age: number;
  married: boolean;
};

type Union = keyof Type; // type Union = name | age | married

const a: Union = "name";
const b: Union = "age";
const c: Union = "married";
```

## 유틸리티 타입(utility type)

유틸리티 타입은 이미 정의해 놓은 타입을 변환할 때 유용한 타입이다.

### Pick

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
