import typescript from '@rollup/plugin-typescript';
import { minify } from 'terser';

export default {
    input: 'src/index.ts', // Main entry point for your code
    output: [
        {
            dir: 'dist', // Output directory for bundled files
            format: 'esm', // Use ES Module format for better compatibility
            entryFileNames: '[name].js', // Output file names based on entry point
            chunkFileNames: '[name]-[hash].js', // Generate chunk file names with a hash
            sourcemap: true, // Enable sourcemaps
            plugins: [
                {
                    writeBundle: async (options, bundle) => {
                        for (const file of Object.values(bundle)) {
                            if (file.type === 'chunk' || file.type === 'file') {
                                const result = await minify(file.code);
                                file.code = result.code; // Minify the code
                            }
                        }
                    },
                },
            ],
        },
        {
            file: 'dist/index.min.js', // Minified final bundle
            format: 'umd', // Universal module format for compatibility
            name: 'funczip', // Global variable name for UMD
            sourcemap: true, // Enable sourcemaps for the minified output
            plugins: [
                {
                    writeBundle: async (options, bundle) => {
                        for (const file of Object.values(bundle)) {
                            if (file.type === 'chunk' || file.type === 'file') {
                                const result = await minify(file.code);
                                file.code = result.code; // Minify the code
                            }
                        }
                    },
                },
            ],
        },
    ],
    plugins: [
        typescript({ tsconfig: './tsconfig.json' }), // Use TypeScript plugin to handle .ts files
    ],
};
