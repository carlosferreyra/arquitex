module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/e2e/",
    ".*\\.e2e\\.spec\\.ts$",
    ".*\\.functional\\.spec\\.ts$",
  ],
  globalSetup: "jest-preset-angular/global-setup",
};
