export type Pop<T extends unknown[]> = T extends [...infer Rest, infer R]
  ? [...Rest]
  : never;

type res = Pop<[1, 2, 3]>;
