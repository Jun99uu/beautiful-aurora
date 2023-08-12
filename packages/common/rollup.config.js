import { babel } from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import scss from "rollup-plugin-scss";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
        interop: "compat",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        sourcemap: true,
        interop: "compat",
        exports: "named",
      },
    ],
    plugins: [
      scss({
        output: true,
        failOnError: true,
        outputStyle: "compressed",
        fileName: "style.css",
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      typescript(),
      terser(),
    ],
  },
];
