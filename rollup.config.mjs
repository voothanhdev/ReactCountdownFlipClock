import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import scss from 'rollup-plugin-scss'

export default {
    input: './src/index.ts',
    output: [
        {
            file: './dist/index.js',
            format: 'cjs',
            sourcemap: true,
        }, {
            file: './dist/index.esm.js',
            format: 'esm',
            sourcemap: true,
        },
    ],
    external: ['react', 'react-dom'],
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            useTsconfigDeclarationDir: true
        }),
        scss({
            insert: true,
            output: 'dist/bundle.css',
        })
    ]
}
