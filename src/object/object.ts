import { MergeType } from "./objectTypes";

export function mergeObjects(
    obj1: Record<string, string | number>,
    obj2: Record<string, string | number>,
    mergeType: MergeType
): Record<string, string | number> {
    const result: Record<string, string | number> = { ...obj1 };
    for (const key in obj2) {
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
            const value1 = result[key];
            const value2 = obj2[key];
            switch (mergeType) {
                case "shallow":
                    result[key] = value2;
                    break;
                case "deep":
                    if (typeof value1 === "number" && typeof value2 === "number") {
                        result[key] = value1 + value2;
                    } else if (typeof value1 === "string" && typeof value2 === "string") {
                        result[key] = value1 + value2;
                    } else {
                        result[key] = value2;
                    }
                    break;
                default:
                    throw new Error(`Unknown merge type: ${mergeType}`);
            }
        }
    }
    return result;
};
