module.exports = {
    preset: 'ts-jest',                // Use ts-jest to handle TypeScript files
    testEnvironment: 'node',          // Set the test environment to Node.js
    roots: ['<rootDir>/test'],        // Specify where your test files are located
    testMatch: ['**/*.test.ts'],      // Match test files with `.test.ts` extension
    collectCoverage: true,            // Enable code coverage reporting
    coverageDirectory: 'coverage',    // Output directory for coverage reports
    coverageReporters: ['json', 'lcov', 'text', 'clover'], // Specify coverage formats
    moduleFileExtensions: ['ts', 'js'], // Recognize both TypeScript and JavaScript files
    verbose: true                     // Enable detailed output during testing
};
