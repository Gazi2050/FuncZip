export type MergeType = "shallow" | "deep" | "custom";
export type CustomMergeFunction = (
    key: string,
    value1: string | number | undefined,
    value2: string | number
) => string | number;