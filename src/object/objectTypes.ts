export type MergeType = "shallow" | "deep";
export type Primitive = string | number | boolean | null | undefined;
export type NestedObject = { [key: string]: Primitive | NestedObject | Array<NestedObject> };