import { ValueExtractor } from "./arrayTypes";

export function chunkArray<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];

    for (let i = 0; i < arr.length; i += size) {
        const chunk = arr.slice(i, i + size);
        result.push(chunk);
    }
    return result;
}

export function averageArray(arr: number[]): number | null {
    if (arr.length === 0) {
        return null;
    }
    const sum: number = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average: number = sum / arr.length;

    return average;
}

export function shuffleArray<T>(arr: T[]): T[] {
    const shuffleArray = [...arr];
    for (let i = shuffleArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]];
    }
    return shuffleArray;
}

export function uniqueByKey<T>(
    arr: T[],
    keyOrExtractor: keyof T | string | ValueExtractor<T>
): T[] {
    const seen = new Set<unknown>();

    return arr.filter(item => {
        const value = typeof keyOrExtractor === "function"
            ? keyOrExtractor(item)
            : keyOrExtractor
                .toString()
                .split(".")
                .reduce<unknown>((acc, part) => {
                    if (acc && typeof acc === "object" && part in acc) {
                        return (acc as Record<string, unknown>)[part];
                    }
                    return undefined;
                }, item as Record<string, unknown>);

        if (seen.has(value)) return false;
        seen.add(value);
        return true;
    });
}