module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testEnvironment: 'node',
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], 
  moduleNameMapper: {
    "\\.(css)": "identity-obj-proxy"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"]
};