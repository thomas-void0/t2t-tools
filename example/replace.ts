export type Replace<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer Left}${From}${infer Right}`
  ? `${Left}${To}${Right}`
  : Str;

type replaceRes = Replace<"hello js ~~", "js", "ts">;
