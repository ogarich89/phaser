export default {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.(js|ts)$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            dynamicImport: true,
          },
          target: 'es2022',
        },
      },
    ],
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub',
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^config/(.*)$': '<rootDir>/config/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/config/setup-tests.js'],
  coverageReporters: ['cobertura', 'json-summary'],
};
