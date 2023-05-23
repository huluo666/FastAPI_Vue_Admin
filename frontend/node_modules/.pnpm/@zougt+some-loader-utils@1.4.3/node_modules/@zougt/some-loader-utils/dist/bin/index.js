#!/usr/bin/env node
"use strict";

var _cac = _interopRequireDefault(require("cac"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _package = _interopRequireDefault(require("../../package.json"));

var _packPath = require("../packPath");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cli = (0, _cac.default)();

const init = optionName => {
  const targetRsoleved = (0, _packPath.getCurrentPackRequirePath)();

  if (_fsExtra.default.existsSync(`${targetRsoleved}/customThemeOptions.json`)) {
    try {
      const opts = JSON.parse(_fsExtra.default.readFileSync(`${targetRsoleved}/customThemeOptions.json`).toString());
      console.log(!optionName ? opts : {
        [optionName]: opts[optionName]
      }); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
};

cli.command('inspect [optionName]', 'inspect setCustomTheme options').action(init);
cli.command('ins [optionName]', 'inspect setCustomTheme options').action(init);
cli.help();
cli.version(_package.default.version);
cli.parse();