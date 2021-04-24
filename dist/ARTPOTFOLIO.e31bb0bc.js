// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Control = /*#__PURE__*/function () {
  function Control() {
    _classCallCheck(this, Control);

    this.run();
    this.run1();
    this.run2();
  }

  _createClass(Control, [{
    key: "run",
    value: function run() {
      var loadBut = document.getElementById("pict");
      var butBut = document.getElementById("pictBut");
      var output = document.getElementById('square');
      butBut.addEventListener("click", function () {
        loadBut.click();
      });
      loadBut.addEventListener("change", function (loadFile) {
        var newDiv = document.createElement('img');
        newDiv.src = URL.createObjectURL(event.target.files[0]);
        newDiv.classList.add("imgProperty");
        newDiv.setAttribute('draggable', 'false');
        output.append(newDiv);
        newDiv.addEventListener('mousedown', function mousedown(event) {
          var prevX = event.clientX;
          var prevY = event.clientY;
          output.addEventListener('mousemove', function mousemove(event) {
            var newX = prevX - event.clientX;
            var newY = prevY - event.clientY;
            var rect = event.target.getBoundingClientRect();
            event.target.style.left = rect.left - newX + "px";
            event.target.style.top = rect.top - newY + "px";
            prevX = event.clientX;
            prevY = event.clientY;
            this.addEventListener('mouseup', function mouseup(_event) {
              // здесь необходимо мнять эквент листенер с маусмув, который обьявлен в др. месте и типа не существует 
              this.removeEventListener('mousemove', mousemove);
              this.removeEventListener('mouseup', mouseup);
            });
          });
        });
      });
    }
  }, {
    key: "run1",
    value: function run1() {
      var butButTect = document.getElementById("tectBut");
      var output = document.getElementById('square');
      butButTect.addEventListener("click", function () {
        var newDiv = document.createElement('textarea');
        newDiv.setAttribute('placeholder', "Введите текст");
        output.append(newDiv);
        newDiv.addEventListener('mousedown', function mousedown(event) {
          var prevX = event.clientX;
          var prevY = event.clientY;
          output.addEventListener('mousemove', function mousemove(event) {
            var newX = prevX - event.clientX;
            var newY = prevY - event.clientY;
            var rect = event.target.getBoundingClientRect();
            event.target.style.left = rect.left - newX + "px";
            event.target.style.top = rect.top - newY + "px";
            prevX = event.clientX;
            prevY = event.clientY;
            this.addEventListener('mouseup', function mouseup(_event) {
              // здесь необходимо мнять эквент листенер с маусмув, который обьявлен в др. месте и типа не существует 
              this.removeEventListener('mousemove', mousemove);
              this.removeEventListener('mouseup', mouseup);
            });
          });
        });
      });
    }
  }, {
    key: "run2",
    value: function run2() {
      var colBut = document.getElementById("colour");
      var output = document.getElementById('square');
      colBut.addEventListener("change", function () {
        output.style.backgroundColor = event.target.value;
      });
    }
  }]);

  return Control;
}();

new Control();
/*       
       dragElement(document.getElementById("mydiv"));

       function dragElement(elmnt){
           var pos1=0, pos2=0, pos3=0, pos4=0;
           if(document.getElementById(elmnt.id+"header")){
               document.getElementById(elmnt.id+"header").onmousedown = dragMouseDown;
           }
           else{
               elmnt.onmousedown = dragMouseDown;
           }

           function dragMouseDown(e){
               e = e || window.event;
               e.preventDefault();
               pos3 = e.clientX;
               pos4 = e.clientY;
               document.onmouseup = closeDragElement;
               document.onmousemove = elementDrag;
           }

           function elementDrag(e){
               e = e || window.event;
               e.preventDefault();
               pos1 = pos3 - e.clientX;
               pos2 = pos4 - e.clientY;
               pos3 = e.clientX;
               pos4 = e.clientY;

               elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
               elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
           }

           function closeDragElement(){
               document.onmouseup = null;
               document.onmousemove = null;
           }
       }


       function addFields(){
           // Container <div> where dynamic content will be placed
           let container = document.getElementById("container");
           
               // Append a node with a random text
               container.appendChild(document.createTextNode("Member"));
               // Create an <input> element, set its type and name attributes
               let input = document.createElement("input");
               input.type = "text";
               input.name = "member";
               container.appendChild(input);
               // Append a line break 
               container.appendChild(document.createElement("br"));
       }


       function createTxt(){
           let parent = document.getElementById(square);
           let child = document.createElement("input");
           child.innerHTML = "Введите текст";
           parent.append(child);
       }

       function createTxt(){
           let parent = document.getElementById(square);
           let child = document.createElement("input");
           child.innerHTML = "Введите текст";
           parent.append(child);
       }
*/
},{}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59426" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/ARTPOTFOLIO.e31bb0bc.js.map