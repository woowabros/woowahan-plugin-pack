# woowahan-plugin-pack

Plugin pack for woowahanjs

#### requirements

* woowahanjs v0.1.0 higher

## Install

```
npm install --save-dev woowahan-plugin-pack
```

## Setup

```javascript
import Woowahan from 'woowahan';
import * as Plugins from 'woowahan-plugin-pack';

const app = new Woowahan();

app.use([
  Woowahan.Plugin('toggleClass', Plugins.toggleClassPlugin),
  Woowahan.Plugin('toggleVisibility', Plugins.toggleVisibilityPlugin),
  Woowahan.Plugin('src', Plugins.srcPlugin),
  Woowahan.Plugin('separatedNumber', Plugins.separatedByCommas),
]);

