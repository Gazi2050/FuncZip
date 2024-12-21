import typescript from '@rollup/plugin-typescript';
import { minify } from 'terser';

export default {
    input: 'src/index.ts',
    output: [
        {
            dir: 'dist',
            format: 'esm',
            entryFileNames: '[name].js',
            chunkFileNames: '[name]-[hash].js',
            sourcemap: true,
            plugins: [
                {
                    writeBundle: async (options, bundle) => {
                        for (const file of Object.values(bundle)) {
                            if (file.type === 'chunk' || file.type === 'file') {
                                const result = await minify(file.code);
                                file.code = result.code;
                            }
                        }
                    },
                },
            ],
        },
        {
            file: 'dist/index.min.js',
            format: 'umd',
            name: 'funczip',
            sourcemap: true,
            plugins: [
                {
                    writeBundle: async (options, bundle) => {
                        for (const file of Object.values(bundle)) {
                            if (file.type === 'chunk' || file.type === 'file') {
                                const result = await minify(file.code);
                                file.code = result.code;
                            }
                        }
                    },
                },
            ],
        },
    ],
    plugins: [
        typescript({ tsconfig: './tsconfig.build.json' }),
    ],
};
