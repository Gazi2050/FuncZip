import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
    // JavaScript bundling configuration
    {
        input: 'src/index.ts', // Entry file for your library
        output: [
            {
                file: 'dist/index.cjs', // Output CommonJS format
                format: 'cjs',
            },
            {
                file: 'dist/index.js',  // Output ES Module format
                format: 'esm',
            },
        ],
        plugins: [
            resolve(),       // Resolves modules in `node_modules`
            commonjs(),      // Converts CommonJS to ES modules
            typescript(),    // Compiles TypeScript to JavaScript
        ],
    },

    // TypeScript declaration file bundling
    {
        input: 'dist/index.d.ts', // Path to the TypeScript declaration file
        output: {
            file: 'dist/index.d.ts', // Output the bundled declaration file
            format: 'es',
        },
        plugins: [dts()], // Bundle `.d.ts` files
    },
];
