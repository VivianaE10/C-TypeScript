// este archivo  le indica a Jest cómo debe manejar los archivos TypeScript:
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
};
