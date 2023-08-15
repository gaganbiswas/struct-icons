import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";

const config = {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
  },
  external: [/@babel\/runtime/],
  plugins: [
    babel({
      babelHelpers: "runtime",
      plugins: ["@babel/plugin-transform-runtime"],
    }),
    typescript({
      compilerOptions: {
        declaration: true,
        declarationDir: "dist/types",
        emitDeclarationOnly: true,
      },
    }),
  ],
};

export default config;
