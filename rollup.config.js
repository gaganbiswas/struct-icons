import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import del from "rollup-plugin-delete";

const config = [
  {
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
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts(), del({ hook: "buildEnd", targets: "./dist/types" })],
  },
];

export default config;
