/* eslint-disable */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const { defaults } = require('jest-config')

module.exports = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    silent: true,
    globals: {
        // https://github.com/vercel/next.js/issues/8663
        'ts-jest': {
            tsconfig: 'tsconfig.jest.json',
        },
    },
    moduleNameMapper: {
        // https://jestjs.io/docs/webpack
        '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '^.+\\.(css|scss|less)$': '<rootDir>/__mocks__/styleMock.js',
        '@/(.*)': '<rootDir>/src/$1',
        '@components/(.*)': '<rootDir>/src/components/$1',
        '@styles/(.*)': '<rootDir>/src/styles/$1',
        '@hooks/(.*)': '<rootDir>/src/hooks/$1',
        '@public/(.*)': '<rootDir>/public/$1',
    },
    testRegex: '(/__tests__/.*\\.(test|spec))\\.[jt]sx?$',
}
