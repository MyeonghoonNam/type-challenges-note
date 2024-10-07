interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// 제네릭 extends 활용으로 타입 제한 설정
type MyPick<T, K extends keyof T> = {
  // Mapped type in 연산자를 통해 K 집합 타입의 요소들을 하나씩 치환
  [P in K]: T[P];
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
