#!/usr/bin/env node

require = require('esm')(module /*, options*/);
require('../index').cli(process.argv);
