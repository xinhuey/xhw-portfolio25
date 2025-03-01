import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
    ],
    rules: {
      "react/no-unescaped-entities": "off", // Disable this rule
      "@next/next/no-page-custom-font": "off", // Disable this rule
      "react-hooks/exhaustive-deps": "off", // Disable the exhaustive-deps rule
    },
  }),
];

export default eslintConfig;