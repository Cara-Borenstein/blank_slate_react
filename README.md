Blank Slate React App

* Start app with npm-start

* See deploy.sh for steps to deploy using npm. 

Why npm?

* lower barrier to entry because we've written previous projects that use npm
* starting with npm 5, npm has a package-lock.json

> package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates ([package-lock.json docs](https://docs.npmjs.com/files/package-lock.json))

* yarn, the other considered alternative, uses Facebook's npm registry mirror whereas npm does not send package usage info to Facebook ([yarn vs npm](https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/))
