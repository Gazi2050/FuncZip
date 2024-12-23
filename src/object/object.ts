type MergeStrategy = 'shallow' | 'deep' | 'custom';

function mergeObjects<T extends object, U extends object>(
    obj1: T,
    obj2: U,
    strategy: MergeStrategy = 'shallow',
    customMergeFn?: (key: keyof (T & U), value1: T[keyof T], value2: U[keyof U]) => T[keyof T] | U[keyof U]
): T & U {
    const result: Partial<T & U> = {};

    const merge = (key: keyof (T & U)) => {
        const value1 = obj1[key];
        const value2 = obj2[key];

        if (customMergeFn) {
            result[key] = customMergeFn(key, value1, value2);
        } else if (value1 !== undefined && value2 !== undefined) {
            if (strategy === 'deep' && typeof value1 === 'object' && typeof value2 === 'object') {
                result[key] = mergeObjects(value1 as any, value2 as any, strategy); // Type assertion for deep merge
            } else {
                result[key] = value2; // obj2 value takes precedence
            }
        } else {
            result[key] = value1 !== undefined ? value1 : value2;
        }
    };

    // Merge obj1 and obj2
    for (const key in obj1) {
        merge(key as keyof (T & U));
    }
    for (const key in obj2) {
        if (!(key in obj1)) {
            merge(key as keyof (T & U));
        }
    }

    return result as T & U; // Type assertion for the final result
}

// Example usage:

const obj1 = { a: 1, b: { x: 10, y: 20 }, c: 3 };
const obj2 = { b: { y: 30, z: 40 }, d: 4 };

// Shallow merge
const shallowMerged = mergeObjects(obj1, obj2, 'shallow');
console.log('Shallow Merge:', shallowMerged); // { a: 1, b: { y: 30, z: 40 }, c: 3, d: 4 }

// Deep merge
const deepMerged = mergeObjects(obj1, obj2, 'deep');
console.log('Deep Merge:', deepMerged); // { a: 1, b: { x: 10, y: 30, z: 40 }, c: 3, d: 4 }

// Custom merge
const customMerged = mergeObjects(obj1, obj2, 'custom', (key, value1, value2) => {
    if (key === 'b') {
        return { ...value1, ...value2, custom: 'merged' }; // Custom logic for merging 'b'
    }
    return value2; // Default to value2 for other keys
});
console.log('Custom Merge:', customMerged); // { a: 1, b: { x: 10, y: 30, z: 40, custom: 'merged' }, c: 3, d: 4 }