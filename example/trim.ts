type TrimLeft<Str extends string> = Str extends `${
  | " "
  | "\t"
  | "\n"}${infer Rest}`
  ? TrimLeft<Rest>
  : Str;

type trimLRes = TrimLeft<" 123">;

type TrimRight<Str extends string> = Str extends `${infer Rest}${
  | " "
  | "\t"
  | "\n"}`
  ? TrimRight<Rest>
  : Str;

type trimRRest = TrimRight<"123 ">;

type Trim<T extends string> = TrimLeft<TrimRight<T>>;

type trimRes = Trim<" 123 ">;
