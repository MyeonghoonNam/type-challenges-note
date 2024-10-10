type First<T extends unknown[]> = T extends [infer A, ...infer rest]
  ? A
  : never;
