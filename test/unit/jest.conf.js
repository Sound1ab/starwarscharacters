const path = require("path");

module.exports = {
	rootDir: path.resolve(__dirname, "../../"),
	moduleFileExtensions: ["js", "json", "vue"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
		"^@components/(.*)$": "<rootDir>/src/js/components/$1",
		"^@js/(.*)$": "<rootDir>/src/js/$1",
		"^@images/(.*)$": "<rootDir>/src/assets/images/$1",
		"^@layouts/(.*)$": "<rootDir>/src/js/layouts/$1",
		"^@styles/(.*)$": "<rootDir>/src/scss/$1",
		"^@config/(.*)$": "<rootDir>/src/js/config/$1",
		"^@helpers/(.*)$": "<rootDir>/src/js/helpers/$1",
		"^@test/(.*)$": "<rootDir>/test/unit/helpers/$1",
	},
	transform: {
		"^.+\\.js$": "<rootDir>/node_modules/babel-jest",
		".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
	},
	snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
	setupFiles: ["<rootDir>/test/unit/setup"],
	mapCoverage: false,
	coverageDirectory: "<rootDir>/test/unit/coverage",
	collectCoverageFrom: [
		"src/js/components/**/*.{js,vue}",
		"src/js/helpers/**/*.{js,vue}",
		"src/js/layouts/**/*.{js,vue}",
	],
	"testResultsProcessor": "jest-junit",
};
