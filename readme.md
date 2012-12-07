# sgen

string generator

## installation

#### [component/component](https://github.com/component/component)

```bash
$ component install [--dev] ramitos/sgen
```

#### npm

```bash
$ npm install [--save/--save-dev] sgen
```

## example

```js
var sgen = require('sgen');

sgen.timestamp();
sgen.random();

sgen.timestamp(new Date(2012, 1, 1).getTime());
sgen.random(12);
```

## license

MIT