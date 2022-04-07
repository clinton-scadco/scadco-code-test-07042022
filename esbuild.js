// const { build } = require("esbuild");

import esbuildServe from "esbuild-serve";

import { sassPlugin } from "esbuild-sass-plugin";

import { resolve, dirname } from "path";

esbuildServe(
    {
        define: { "process.env.NODE_ENV": '"development"' },
        entryPoints: ["./src/index.tsx"],
        bundle: true,
        outdir: "wwwroot/scripts",
        plugins: [
            sassPlugin({
                type: "style",
                loadPaths: [resolve(dirname("./"), "node_modules")],
            }),
        ],
        sourcemap: true,
        watch: true,
    },
    { root: "wwwroot", port: 2222 }
);
