// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8swOi":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "1473161443125882";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"ejrGw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _moji = require("moji");
var _mojiDefault = parcelHelpers.interopDefault(_moji);
document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const zenkakuResult = document.getElementById('zenkakuResult');
    const hankakuResult = document.getElementById('hankakuResult');
    const characterTypeRadios = document.getElementsByName('characterType'); // For character type
    const spaceConversionRadios = document.getElementsByName('spaceConversion'); // For space conversion
    // Add listeners for input and changes
    inputText.addEventListener('input', updateConversion);
    characterTypeRadios.forEach((radio)=>radio.addEventListener('change', updateConversion));
    spaceConversionRadios.forEach((radio)=>radio.addEventListener('change', updateConversion));
    function updateConversion() {
        const text = inputText.value;
        const characterType = getSelectedValue(characterTypeRadios); // "english" or "kana"
        const spaceConversion = getSelectedValue(spaceConversionRadios); // "hankaku-space" or "zenkaku-space"
        let zenkakuText = text;
        let hankakuText = text;
        // Convert text based on character type
        if (characterType === 'english') {
            zenkakuText = (0, _mojiDefault.default)(text).convert('HE', 'ZE').toString();
            hankakuText = (0, _mojiDefault.default)(text).convert('ZE', 'HE').toString();
        } else if (characterType === 'kana') {
            zenkakuText = (0, _mojiDefault.default)(text).convert('HK', 'ZK').toString();
            hankakuText = (0, _mojiDefault.default)(text).convert('ZK', 'HK').toString();
        }
        // Apply space conversion if needed
        if (spaceConversion === 'zenkaku-space') {
            zenkakuText = (0, _mojiDefault.default)(zenkakuText).convert('HS', 'ZS').toString();
            hankakuText = (0, _mojiDefault.default)(hankakuText).convert('HS', 'ZS').toString();
        } else if (spaceConversion === 'hankaku-space') {
            zenkakuText = (0, _mojiDefault.default)(zenkakuText).convert('ZS', 'HS').toString();
            hankakuText = (0, _mojiDefault.default)(hankakuText).convert('ZS', 'HS').toString();
        }
        // Update result areas
        zenkakuResult.value = zenkakuText;
        hankakuResult.value = hankakuText;
    }
    function getSelectedValue(radioButtons) {
        for (const radio of radioButtons){
            if (radio.checked) return radio.value;
        }
        return null;
    }
});

},{"moji":"2YCbX","@parcel/transformer-js/src/esmodule-helpers.js":"kgk3g"}],"2YCbX":[function(require,module,exports,__globalThis) {
"use strict";
var Moji = require("e9c6b049530758cb");
var mojiStr = require("e465a35794dcf851");
var _mojisyu = require("cc6374b1dcca16c6");
var assign = require("14d90a113d14e9bd");
var mojisyu = assign({}, _mojisyu);
mojiStr.call(Moji.prototype);
var moji = function(str) {
    return new Moji(mojisyu, str);
};
moji.addMojisyu = function(syu) {
    mojisyu = assign(mojisyu, syu);
};
module.exports = moji;

},{"e9c6b049530758cb":"2n4UY","e465a35794dcf851":"84tPx","cc6374b1dcca16c6":"izJAK","14d90a113d14e9bd":"7OXxh"}],"2n4UY":[function(require,module,exports,__globalThis) {
'use strict';
/**
 * @constructor
 * @param {object} mojisyu
 * @param {string} str
 */ function Moji(mojisyu, str) {
    this.origin = str;
    this._result = this.origin;
    this._mojisyu = mojisyu;
}
Moji.prototype.toString = function() {
    return this._result;
};
/**
 * convert
 * 変換の実行
 *
 * @param {string} from_syumei 変換前の文字種名
 * @param {string} to_syumei 変化後の文字種名
 * @returns {Moji}
 */ Moji.prototype.convert = function convert(from_syumei, to_syumei) {
    var from_mojisyu_body = this._mojisyu[from_syumei];
    var to_mojisyu_body = this._mojisyu[to_syumei];
    if (this._mojisyuType(from_mojisyu_body) === 'range' && this._mojisyuType(to_mojisyu_body) === 'range') {
        this._result = this._rangeConvert(from_mojisyu_body, to_mojisyu_body);
        return this;
    }
    if (this._mojisyuType(from_mojisyu_body) === 'regexp' && this._mojisyuType(to_mojisyu_body) === 'regexp') {
        this._result = this._regexpConvert(from_mojisyu_body, to_mojisyu_body);
        return this;
    }
};
/**
 * _rangeConvert
 * @param {object} from_syu
 * @param {object} to_syu
 * @return {string}
 * @private
 */ Moji.prototype._rangeConvert = function _rangeConvert(from_syu, to_syu) {
    var distance = to_syu.start - from_syu.start;
    return this._rangeMap(from_syu, function(moji, is_match, code) {
        if (is_match) return String.fromCharCode(code + distance);
        return moji;
    }).join('');
};
/**
 * _regexpConvert
 * @param from_syu
 * @param to_syu
 * @return {string}
 * @private
 */ Moji.prototype._regexpConvert = function _regexpConvert(from_syu, to_syu) {
    return this._regexpMap(from_syu, function(moji, is_match, index) {
        if (!is_match) return moji;
        return to_syu.list[index];
    });
};
/**
 *  filter
 *  文字種のみに絞込
 *  @param {string} mojisyu_name 絞り込まれる文字種
 *  @returns {Moji}
 */ Moji.prototype.filter = function filter(mojisyu_name) {
    var mojisyu_body = this._mojisyu[mojisyu_name];
    if (this._mojisyuType(mojisyu_body) === 'range') {
        this._result = this._rangeFilter(mojisyu_body);
        return this;
    }
    if (this._mojisyuType(mojisyu_body) === 'regexp') {
        this._result = this._regexpFilter(mojisyu_body);
        return this;
    }
};
/**
 * _rangeFilter
 * @param mojisyu
 * @return {string}
 * @private
 */ Moji.prototype._rangeFilter = function _rangeFilter(mojisyu) {
    return this._rangeMap(mojisyu, function(moji, is_range) {
        if (is_range) return moji;
        return '';
    }).join('');
};
/**
 * _regexpFilter
 * @param mojisyu
 * @return {string}
 * @private
 */ Moji.prototype._regexpFilter = function _regexpFilter(mojisyu) {
    var match_mojis = [];
    this._regexpMap(mojisyu, function(moji, is_match) {
        if (is_match) match_mojis.push(moji);
    });
    return match_mojis.join('');
};
/**
 * reject
 * 文字種は排除
 * @param {string} mojisyu_name 排除される文字種
 * @returns {Moji}
 */ Moji.prototype.reject = function reject(mojisyu_name) {
    var mojisyu_body = this._mojisyu[mojisyu_name];
    if (this._mojisyuType(mojisyu_body) === 'range') {
        this._result = this._rangeReject(mojisyu_body);
        return this;
    }
    if (this._mojisyuType(mojisyu_body) === 'regexp') {
        this._result = this._regexpReject(mojisyu_body);
        return this;
    }
};
/**
 * _rangeReject
 * @param mojisyu
 * @return {string}
 * @private
 */ Moji.prototype._rangeReject = function _rangeReject(mojisyu) {
    return this._rangeMap(mojisyu, function(moji, is_range) {
        if (!is_range) return moji;
        return '';
    }).join('');
};
/**
 * _regexpReject
 * @param mojisyu
 * @return {string}
 * @private
 */ Moji.prototype._regexpReject = function _regexpReject(mojisyu) {
    var reject_moji = this._regexpFilter(mojisyu);
    return this._result.replace(reject_moji, '');
};
/**
 * _mojisyuType
 * 文字種のタイプを判別
 * range || regexp
 * @param {mojisyu} mojisyu 文字種
 * @return {string}
 */ Moji.prototype._mojisyuType = function _mojisyuType(mojisyu) {
    if (mojisyu.start && mojisyu.end) return 'range';
    if (mojisyu.regexp && mojisyu.list) return 'regexp';
    return '';
};
/**
 * _rangeMap
 * @param {object} mojisyu - 文字種オブジェクト
 * @param {function} callback
 * @return {Array}
 * @private
 */ Moji.prototype._rangeMap = function _rangeMap(mojisyu, callback) {
    return this._result.split('').map(function(moji) {
        var code = moji.charCodeAt(0);
        var is_match = code >= mojisyu.start && code <= mojisyu.end;
        return callback.call(this, moji, is_match, code);
    });
};
/**
 * _regexpMap
 * @param {object} mojisyu - 文字種オブジェクト
 * @param callback
 * @return {string}
 * @private
 */ Moji.prototype._regexpMap = function _regexpMap(mojisyu, callback) {
    return this._result.replace(mojisyu.regexp, function(moji) {
        var index = mojisyu.list.indexOf(moji);
        var is_match = index >= 0;
        return callback.call(this, moji, is_match, index);
    });
};
module.exports = Moji;

},{}],"84tPx":[function(require,module,exports,__globalThis) {
function mojiStr() {
    /**
     * trim
     * 行頭、行末の空白を削除
     */ this.trim = function() {
        this._result = this._result.trim();
        return this;
    };
    /**
     * match
     * matchした文字列に変更
     * matchしなければなにもしない
     * @param {RegExp} regexp
     */ this.match = function(regexp) {
        var result = this._result.match(regexp);
        if (!result || !regexp) return this;
        this._result = result.toString();
        return this;
    };
    this.replace = function(regexp, new_str) {
        this._result = this._result.replace(regexp, new_str);
        return this;
    };
    return this;
}
module.exports = mojiStr; // slice
 //substr
 //toLocaleLowerCase
 //toLocaleUpperCase
 //toLowerCase
 //toUpperCase
 //trim
 //trimLeft
 //trimRight
 //encodeURIComponent
 //decodeURIComponent

},{}],"izJAK":[function(require,module,exports,__globalThis) {
"use strict";
module.exports = {
    'ZE': {
        start: 0xff01,
        end: 0xff5e
    },
    'HE': {
        start: 0x0021,
        end: 0x007e
    },
    'HG': {
        start: 0x3041,
        end: 0x3096
    },
    'KK': {
        start: 0x30a1,
        end: 0x30f6
    },
    'HS': {
        regexp: /(\s|\u00A0)/g,
        list: [
            '\u0020',
            '\u00A0'
        ]
    },
    'ZS': {
        regexp: /(\u3000)/g,
        list: [
            "\u3000",
            "\u3000"
        ]
    },
    'HK': {
        regexp: /([\uff66-\uff9c]\uff9e)|([\uff8a-\uff8e]\uff9f)|([\uff61-\uff9f])/g,
        list: [
            "\uFF61",
            "\uFF62",
            "\uFF63",
            "\uFF64",
            "\uFF65",
            "\uFF66",
            "\uFF67",
            "\uFF68",
            "\uFF69",
            "\uFF6A",
            "\uFF6B",
            "\uFF6C",
            "\uFF6D",
            "\uFF6E",
            "\uFF6F",
            "\uFF70",
            "\uFF71",
            "\uFF72",
            "\uFF73",
            "\uFF74",
            "\uFF75",
            "\uFF76",
            "\uFF77",
            "\uFF78",
            "\uFF79",
            "\uFF7A",
            "\uFF7B",
            "\uFF7C",
            "\uFF7D",
            "\uFF7E",
            "\uFF7F",
            "\uFF80",
            "\uFF81",
            "\uFF82",
            "\uFF83",
            "\uFF84",
            "\uFF85",
            "\uFF86",
            "\uFF87",
            "\uFF88",
            "\uFF89",
            "\uFF8A",
            "\uFF8B",
            "\uFF8C",
            "\uFF8D",
            "\uFF8E",
            "\uFF8F",
            "\uFF90",
            "\uFF91",
            "\uFF92",
            "\uFF93",
            "\uFF94",
            "\uFF95",
            "\uFF96",
            "\uFF97",
            "\uFF98",
            "\uFF99",
            "\uFF9A",
            "\uFF9B",
            "\uFF9C",
            "\uFF9D",
            "\uFF9E",
            "\uFF9F",
            "\uFF66\uFF9E",
            "\uFF73\uFF9E",
            "\uFF76\uFF9E",
            "\uFF77\uFF9E",
            "\uFF78\uFF9E",
            "\uFF79\uFF9E",
            "\uFF7A\uFF9E",
            "\uFF7B\uFF9E",
            "\uFF7C\uFF9E",
            "\uFF7D\uFF9E",
            "\uFF7E\uFF9E",
            "\uFF7F\uFF9E",
            "\uFF80\uFF9E",
            "\uFF81\uFF9E",
            "\uFF82\uFF9E",
            "\uFF83\uFF9E",
            "\uFF84\uFF9E",
            "\uFF8A\uFF9E",
            "\uFF8A\uFF9F",
            "\uFF8B\uFF9E",
            "\uFF8B\uFF9F",
            "\uFF8C\uFF9E",
            "\uFF8C\uFF9F",
            "\uFF8D\uFF9E",
            "\uFF8D\uFF9F",
            "\uFF8E\uFF9E",
            "\uFF8E\uFF9F",
            "\uFF9C\uFF9E"
        ]
    },
    'ZK': {
        regexp: /([\u3001-\u30fc])/g,
        list: [
            "\u3002",
            "\u300C",
            "\u300D",
            "\u3001",
            "\u30FB",
            "\u30F2",
            "\u30A1",
            "\u30A3",
            "\u30A5",
            "\u30A7",
            "\u30A9",
            "\u30E3",
            "\u30E5",
            "\u30E7",
            "\u30C3",
            "\u30FC",
            "\u30A2",
            "\u30A4",
            "\u30A6",
            "\u30A8",
            "\u30AA",
            "\u30AB",
            "\u30AD",
            "\u30AF",
            "\u30B1",
            "\u30B3",
            "\u30B5",
            "\u30B7",
            "\u30B9",
            "\u30BB",
            "\u30BD",
            "\u30BF",
            "\u30C1",
            "\u30C4",
            "\u30C6",
            "\u30C8",
            "\u30CA",
            "\u30CB",
            "\u30CC",
            "\u30CD",
            "\u30CE",
            "\u30CF",
            "\u30D2",
            "\u30D5",
            "\u30D8",
            "\u30DB",
            "\u30DE",
            "\u30DF",
            "\u30E0",
            "\u30E1",
            "\u30E2",
            "\u30E4",
            "\u30E6",
            "\u30E8",
            "\u30E9",
            "\u30EA",
            "\u30EB",
            "\u30EC",
            "\u30ED",
            "\u30EF",
            "\u30F3",
            "\u309B",
            "\u309C",
            "\u30FA",
            "\u30F4",
            "\u30AC",
            "\u30AE",
            "\u30B0",
            "\u30B2",
            "\u30B4",
            "\u30B6",
            "\u30B8",
            "\u30BA",
            "\u30BC",
            "\u30BE",
            "\u30C0",
            "\u30C2",
            "\u30C5",
            "\u30C7",
            "\u30C9",
            "\u30D0",
            "\u30D1",
            "\u30D3",
            "\u30D4",
            "\u30D6",
            "\u30D7",
            "\u30D9",
            "\u30DA",
            "\u30DC",
            "\u30DD",
            "\u30F7"
        ]
    }
};

},{}],"7OXxh":[function(require,module,exports,__globalThis) {
'use strict';
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function ToObject(val) {
    if (val == null) throw new TypeError('Object.assign cannot be called with null or undefined');
    return Object(val);
}
function ownEnumerableKeys(obj) {
    var keys = Object.getOwnPropertyNames(obj);
    if (Object.getOwnPropertySymbols) keys = keys.concat(Object.getOwnPropertySymbols(obj));
    return keys.filter(function(key) {
        return propIsEnumerable.call(obj, key);
    });
}
module.exports = Object.assign || function(target, source) {
    var from;
    var keys;
    var to = ToObject(target);
    for(var s = 1; s < arguments.length; s++){
        from = arguments[s];
        keys = ownEnumerableKeys(Object(from));
        for(var i = 0; i < keys.length; i++)to[keys[i]] = from[keys[i]];
    }
    return to;
};

},{}],"kgk3g":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["8swOi","ejrGw"], "ejrGw", "parcelRequire94c2")

//# sourceMappingURL=index.43125882.js.map
