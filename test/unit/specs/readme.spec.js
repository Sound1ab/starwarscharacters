const firstline = require('firstline');

describe("README.md", () => {
	it("Should have been updated for new project.", (done) => {
		firstline('/Users/leo.kyrkos/development/yfs/scaffolding_vue/README.md').then(text => {
			expect(text === '# YFS Vue Scaffolding').toBeFalsy();
			done();
		})
	});
});
