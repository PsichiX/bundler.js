# bundler.js

## Tool to produce application bundles

bundler.js is great and easy to use tool to produce application bundles.

[![NPM](https://nodei.co/npm/bundler.js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bundler.js/)

## Installation

```bash
$ npm install bundler.js
```

If you want to use bundler.js from terminal, you should install it globally:

```bash
$ npm install -g bundler.js
```

## API Usage Examples

```javascript
var bundler = require('bundler.js'),
    actions = {
        copy: function(file, config, info, bundlerActions){
            console.log('custom file copy: ' + JSON.stringify(file));
            bundlerActions.copy(file, config, info);
        }
    };

bundler.bundle('bundle.json', actions, 'debug');
```

## Commandline Usage Examples

Using configuration file:
```bash
$ bundle path/to/configuration.json
```
and specifying mode:
```bash
$ bundle path/to/configuration.json mode
```

Commandline options:
 * [0] `path/to/configuration.json` - path to configuration JSON file.
 * [1] `mode`                       - mode identifier.

## Configuration File Example
```json
{
  "verbose": true,
  "source": "src",
  "intermediate": {
    "debug": "intermediate/debug",
    "release": "intermediate/release"
  },
  "destination": {
    "debug": "bin/debug",
    "release": "bin/release"
  },
  "compiler": {
    "debug": {
      "lint": true,
      "minify": false,
      "defines": {
        "DEBUG": true
      }
    },
    "release": {
      "lint": true,
      "minify": true,
      "defines": {
        "RELEASE": true
      }
    }
  },
  "files": [
    "a.png ? gfx & hq",
    "b.png ? gfx & !hq",
    "main.js @compile ? (code & html)"
  ],
  "variants": {
    "debug": [
      "html",
      "code",
      "gfx"
    ],
    "release": [
      "html",
      "code",
      "gfx",
      "hq"
    ]
  }
}
```

## Support
 * [Issues](https://github.com/PsichiX/bundler.js/issues)