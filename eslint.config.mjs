import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": ["error", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }],
      "no-console": ["warn", { "allow": ["warn", "error", "info"] }],
      "react/no-unescaped-entities": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "prefer-const": "error",
      "no-var": "error",
      "eqeqeq": ["error", "always"],
    }
  }
]);

export default eslintConfig;
