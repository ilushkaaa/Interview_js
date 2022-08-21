/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const { defaults } = require('jest-config');

module.exports = {
  rootDir: process.cwd(),
  preset: 'ts-jest',
  testMatch: ['**/ts/**/*.test.tsx', '**/ts/**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};
