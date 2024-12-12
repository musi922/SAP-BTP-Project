sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: sapbtpproject",
		defaults: {
			page: "ui5://test-resources/sapbtpproject/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "sapbtpproject/",
				never: "test-resources/sapbtpproject/"
			},
			loader: {
				paths: {
					"sapbtpproject": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for sapbtpproject"
			},
			"integration/opaTests": {
				title: "Integration tests for sapbtpproject"
			}
		}
	};
});
