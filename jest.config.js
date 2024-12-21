module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/test'],
    testMatch: ['**/*.test.ts'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
    moduleFileExtensions: ['ts', 'js'],
    verbose: true,
};
