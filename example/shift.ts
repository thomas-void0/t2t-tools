export type Shift<T extends unknown[]> = T extends [infer R, ...infer Rest]
  ? [...Rest]
  : never;

type resShift = Shift<[1, 2, 3]>;
