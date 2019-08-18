'use strict';

var core = require('@actions/core');
var github = require('@actions/github');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

const run = function () {
  try {
    return Promise.resolve(_catch(function () {
      const client = new github.GitHub(core.getInput('repo-token', {
        required: true
      }));
      const context = github.context;

      if (!context.payload.issue) {
        core.debug('Not an issue, skipping');
      }

      if (context.payload.action !== 'opened') {
        core.debug('No issue was opened, skipping');
        return;
      }

      return Promise.resolve(client.issues.createComment(_extends({}, context.issue, {
        body: greeting
      }))).then(function () {});
    }, function (error) {
      core.setFailed(error.message);
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};

const greeting = 'Thanks for opening this issue!';
run();
//# sourceMappingURL=coba-actions.cjs.development.js.map
