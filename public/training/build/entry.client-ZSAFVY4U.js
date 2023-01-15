import {
  ClientStyleContext,
  RemixBrowser
} from "/training/build/_shared/chunk-TFGEEUTX.js";
import {
  CacheProvider,
  __commonJS,
  __toESM,
  emotion_cache_browser_esm_default,
  require_jsx_dev_runtime,
  require_react,
  require_react_dom
} from "/training/build/_shared/chunk-QBMQJ4JJ.js";

// .yarn/__virtual__/react-dom-virtual-b1243fc8c1/0/cache/react-dom-npm-18.2.0-dd675bca1c-7d323310be.zip/node_modules/react-dom/client.js
var require_client = __commonJS({
  ".yarn/__virtual__/react-dom-virtual-b1243fc8c1/0/cache/react-dom-npm-18.2.0-dd675bca1c-7d323310be.zip/node_modules/react-dom/client.js"(exports) {
    "use strict";
    var m = require_react_dom();
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// app/entry.client.tsx
var import_react2 = __toESM(require_react());
var import_client = __toESM(require_client());

// app/utils/createEmotionCache.ts
var defaultCache = createEmotionCache();
function createEmotionCache() {
  return emotion_cache_browser_esm_default({ key: "cha" });
}

// app/entry.client.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ClientCacheProvider({ children }) {
  const [cache, setCache] = (0, import_react2.useState)(defaultCache);
  function reset() {
    setCache(createEmotionCache());
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientStyleContext.Provider, { value: { reset }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CacheProvider, { value: cache, children }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
function hydrate() {
  (0, import_react2.startTransition)(() => {
    (0, import_client.hydrateRoot)(
      document,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientCacheProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    );
  });
}
if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  window.setTimeout(hydrate, 1);
}
//# sourceMappingURL=/training/build/entry.client-ZSAFVY4U.js.map
