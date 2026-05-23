import coreWebVitals from "eslint-config-next/core-web-vitals";

// eslint-config-next@16 ships a Babel parser (bundled from next@14) that returns
// a scope manager without addGlobals — required by eslint@10. We strip it so ESLint
// falls back to espree for .js/.mjs files; .ts/.tsx already use typescript-eslint/parser.
const config = coreWebVitals.map((c) => {
  if (c.languageOptions?.parser?.meta?.name === "eslint-config-next/parser") {
    const { parser: _, ...langOpts } = c.languageOptions;
    return { ...c, languageOptions: langOpts };
  }
  return c;
});

export default config;
