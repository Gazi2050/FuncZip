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
