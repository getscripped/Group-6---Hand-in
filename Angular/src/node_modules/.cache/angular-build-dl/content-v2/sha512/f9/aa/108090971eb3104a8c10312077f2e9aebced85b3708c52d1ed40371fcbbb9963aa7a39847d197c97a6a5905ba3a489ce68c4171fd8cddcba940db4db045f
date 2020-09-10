function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-drag-drop-drag-drop-module"], {
  /***/
  "./node_modules/atoa/atoa.js":
  /*!***********************************!*\
    !*** ./node_modules/atoa/atoa.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesAtoaAtoaJs(module, exports) {
    module.exports = function atoa(a, n) {
      return Array.prototype.slice.call(a, n);
    };
    /***/

  },

  /***/
  "./node_modules/contra/debounce.js":
  /*!*****************************************!*\
    !*** ./node_modules/contra/debounce.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesContraDebounceJs(module, exports, __webpack_require__) {
    "use strict";

    var ticky = __webpack_require__(
    /*! ticky */
    "./node_modules/ticky/ticky-browser.js");

    module.exports = function debounce(fn, args, ctx) {
      if (!fn) {
        return;
      }

      ticky(function run() {
        fn.apply(ctx || null, args || []);
      });
    };
    /***/

  },

  /***/
  "./node_modules/contra/emitter.js":
  /*!****************************************!*\
    !*** ./node_modules/contra/emitter.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesContraEmitterJs(module, exports, __webpack_require__) {
    "use strict";

    var atoa = __webpack_require__(
    /*! atoa */
    "./node_modules/atoa/atoa.js");

    var debounce = __webpack_require__(
    /*! ./debounce */
    "./node_modules/contra/debounce.js");

    module.exports = function emitter(thing, options) {
      var opts = options || {};
      var evt = {};

      if (thing === undefined) {
        thing = {};
      }

      thing.on = function (type, fn) {
        if (!evt[type]) {
          evt[type] = [fn];
        } else {
          evt[type].push(fn);
        }

        return thing;
      };

      thing.once = function (type, fn) {
        fn._once = true; // thing.off(fn) still works!

        thing.on(type, fn);
        return thing;
      };

      thing.off = function (type, fn) {
        var c = arguments.length;

        if (c === 1) {
          delete evt[type];
        } else if (c === 0) {
          evt = {};
        } else {
          var et = evt[type];

          if (!et) {
            return thing;
          }

          et.splice(et.indexOf(fn), 1);
        }

        return thing;
      };

      thing.emit = function () {
        var args = atoa(arguments);
        return thing.emitterSnapshot(args.shift()).apply(this, args);
      };

      thing.emitterSnapshot = function (type) {
        var et = (evt[type] || []).slice(0);
        return function () {
          var args = atoa(arguments);
          var ctx = this || thing;

          if (type === 'error' && opts.throws !== false && !et.length) {
            throw args.length === 1 ? args[0] : args;
          }

          et.forEach(function emitter(listen) {
            if (opts.async) {
              debounce(listen, args, ctx);
            } else {
              listen.apply(ctx, args);
            }

            if (listen._once) {
              thing.off(type, listen);
            }
          });
          return thing;
        };
      };

      return thing;
    };
    /***/

  },

  /***/
  "./node_modules/crossvent/src/crossvent.js":
  /*!*************************************************!*\
    !*** ./node_modules/crossvent/src/crossvent.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCrossventSrcCrossventJs(module, exports, __webpack_require__) {
    "use strict";

    var customEvent = __webpack_require__(
    /*! custom-event */
    "./node_modules/custom-event/index.js");

    var eventmap = __webpack_require__(
    /*! ./eventmap */
    "./node_modules/crossvent/src/eventmap.js");

    var doc = global.document;
    var addEvent = addEventEasy;
    var removeEvent = removeEventEasy;
    var hardCache = [];

    if (!global.addEventListener) {
      addEvent = addEventHard;
      removeEvent = removeEventHard;
    }

    module.exports = {
      add: addEvent,
      remove: removeEvent,
      fabricate: fabricateEvent
    };

    function addEventEasy(el, type, fn, capturing) {
      return el.addEventListener(type, fn, capturing);
    }

    function addEventHard(el, type, fn) {
      return el.attachEvent('on' + type, wrap(el, type, fn));
    }

    function removeEventEasy(el, type, fn, capturing) {
      return el.removeEventListener(type, fn, capturing);
    }

    function removeEventHard(el, type, fn) {
      var listener = unwrap(el, type, fn);

      if (listener) {
        return el.detachEvent('on' + type, listener);
      }
    }

    function fabricateEvent(el, type, model) {
      var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();

      if (el.dispatchEvent) {
        el.dispatchEvent(e);
      } else {
        el.fireEvent('on' + type, e);
      }

      function makeClassicEvent() {
        var e;

        if (doc.createEvent) {
          e = doc.createEvent('Event');
          e.initEvent(type, true, true);
        } else if (doc.createEventObject) {
          e = doc.createEventObject();
        }

        return e;
      }

      function makeCustomEvent() {
        return new customEvent(type, {
          detail: model
        });
      }
    }

    function wrapperFactory(el, type, fn) {
      return function wrapper(originalEvent) {
        var e = originalEvent || global.event;
        e.target = e.target || e.srcElement;

        e.preventDefault = e.preventDefault || function preventDefault() {
          e.returnValue = false;
        };

        e.stopPropagation = e.stopPropagation || function stopPropagation() {
          e.cancelBubble = true;
        };

        e.which = e.which || e.keyCode;
        fn.call(el, e);
      };
    }

    function wrap(el, type, fn) {
      var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
      hardCache.push({
        wrapper: wrapper,
        element: el,
        type: type,
        fn: fn
      });
      return wrapper;
    }

    function unwrap(el, type, fn) {
      var i = find(el, type, fn);

      if (i) {
        var wrapper = hardCache[i].wrapper;
        hardCache.splice(i, 1); // free up a tad of memory

        return wrapper;
      }
    }

    function find(el, type, fn) {
      var i, item;

      for (i = 0; i < hardCache.length; i++) {
        item = hardCache[i];

        if (item.element === el && item.type === type && item.fn === fn) {
          return i;
        }
      }
    }
    /***/

  },

  /***/
  "./node_modules/crossvent/src/eventmap.js":
  /*!************************************************!*\
    !*** ./node_modules/crossvent/src/eventmap.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCrossventSrcEventmapJs(module, exports, __webpack_require__) {
    "use strict";

    var eventmap = [];
    var eventname = '';
    var ron = /^on/;

    for (eventname in global) {
      if (ron.test(eventname)) {
        eventmap.push(eventname.slice(2));
      }
    }

    module.exports = eventmap;
    /***/
  },

  /***/
  "./node_modules/custom-event/index.js":
  /*!********************************************!*\
    !*** ./node_modules/custom-event/index.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCustomEventIndexJs(module, exports) {
    var NativeCustomEvent = global.CustomEvent;

    function useNative() {
      try {
        var p = new NativeCustomEvent('cat', {
          detail: {
            foo: 'bar'
          }
        });
        return 'cat' === p.type && 'bar' === p.detail.foo;
      } catch (e) {}

      return false;
    }
    /**
     * Cross-browser `CustomEvent` constructor.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
     *
     * @public
     */


    module.exports = useNative() ? NativeCustomEvent : // IE >= 9
    'function' === typeof document.createEvent ? function CustomEvent(type, params) {
      var e = document.createEvent('CustomEvent');

      if (params) {
        e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
      } else {
        e.initCustomEvent(type, false, false, void 0);
      }

      return e;
    } : // IE <= 8
    function CustomEvent(type, params) {
      var e = document.createEventObject();
      e.type = type;

      if (params) {
        e.bubbles = Boolean(params.bubbles);
        e.cancelable = Boolean(params.cancelable);
        e.detail = params.detail;
      } else {
        e.bubbles = false;
        e.cancelable = false;
        e.detail = void 0;
      }

      return e;
    };
    /***/
  },

  /***/
  "./node_modules/dragula/classes.js":
  /*!*****************************************!*\
    !*** ./node_modules/dragula/classes.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesDragulaClassesJs(module, exports, __webpack_require__) {
    "use strict";

    var cache = {};
    var start = '(?:^|\\s)';
    var end = '(?:\\s|$)';

    function lookupClass(className) {
      var cached = cache[className];

      if (cached) {
        cached.lastIndex = 0;
      } else {
        cache[className] = cached = new RegExp(start + className + end, 'g');
      }

      return cached;
    }

    function addClass(el, className) {
      var current = el.className;

      if (!current.length) {
        el.className = className;
      } else if (!lookupClass(className).test(current)) {
        el.className += ' ' + className;
      }
    }

    function rmClass(el, className) {
      el.className = el.className.replace(lookupClass(className), ' ').trim();
    }

    module.exports = {
      add: addClass,
      rm: rmClass
    };
    /***/
  },

  /***/
  "./node_modules/dragula/dragula.js":
  /*!*****************************************!*\
    !*** ./node_modules/dragula/dragula.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesDragulaDragulaJs(module, exports, __webpack_require__) {
    "use strict";

    var emitter = __webpack_require__(
    /*! contra/emitter */
    "./node_modules/contra/emitter.js");

    var crossvent = __webpack_require__(
    /*! crossvent */
    "./node_modules/crossvent/src/crossvent.js");

    var classes = __webpack_require__(
    /*! ./classes */
    "./node_modules/dragula/classes.js");

    var doc = document;
    var documentElement = doc.documentElement;

    function dragula(initialContainers, options) {
      var len = arguments.length;

      if (len === 1 && Array.isArray(initialContainers) === false) {
        options = initialContainers;
        initialContainers = [];
      }

      var _mirror; // mirror image


      var _source; // source container


      var _item; // item being dragged


      var _offsetX; // reference x


      var _offsetY; // reference y


      var _moveX; // reference move x


      var _moveY; // reference move y


      var _initialSibling; // reference sibling when grabbed


      var _currentSibling; // reference sibling now


      var _copy; // item used for copying


      var _renderTimer; // timer for setTimeout renderMirrorImage


      var _lastDropTarget = null; // last container item was over

      var _grabbed; // holds mousedown context until first mousemove


      var o = options || {};

      if (o.moves === void 0) {
        o.moves = always;
      }

      if (o.accepts === void 0) {
        o.accepts = always;
      }

      if (o.invalid === void 0) {
        o.invalid = invalidTarget;
      }

      if (o.containers === void 0) {
        o.containers = initialContainers || [];
      }

      if (o.isContainer === void 0) {
        o.isContainer = never;
      }

      if (o.copy === void 0) {
        o.copy = false;
      }

      if (o.copySortSource === void 0) {
        o.copySortSource = false;
      }

      if (o.revertOnSpill === void 0) {
        o.revertOnSpill = false;
      }

      if (o.removeOnSpill === void 0) {
        o.removeOnSpill = false;
      }

      if (o.direction === void 0) {
        o.direction = 'vertical';
      }

      if (o.ignoreInputTextSelection === void 0) {
        o.ignoreInputTextSelection = true;
      }

      if (o.mirrorContainer === void 0) {
        o.mirrorContainer = doc.body;
      }

      var drake = emitter({
        containers: o.containers,
        start: manualStart,
        end: end,
        cancel: cancel,
        remove: remove,
        destroy: destroy,
        canMove: canMove,
        dragging: false
      });

      if (o.removeOnSpill === true) {
        drake.on('over', spillOver).on('out', spillOut);
      }

      events();
      return drake;

      function isContainer(el) {
        return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
      }

      function events(remove) {
        var op = remove ? 'remove' : 'add';
        touchy(documentElement, op, 'mousedown', grab);
        touchy(documentElement, op, 'mouseup', release);
      }

      function eventualMovements(remove) {
        var op = remove ? 'remove' : 'add';
        touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
      }

      function movements(remove) {
        var op = remove ? 'remove' : 'add';
        crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8

        crossvent[op](documentElement, 'click', preventGrabbed);
      }

      function destroy() {
        events(true);
        release({});
      }

      function preventGrabbed(e) {
        if (_grabbed) {
          e.preventDefault();
        }
      }

      function grab(e) {
        _moveX = e.clientX;
        _moveY = e.clientY;
        var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;

        if (ignore) {
          return; // we only care about honest-to-god left clicks and touch events
        }

        var item = e.target;
        var context = canStart(item);

        if (!context) {
          return;
        }

        _grabbed = context;
        eventualMovements();

        if (e.type === 'mousedown') {
          if (isInput(item)) {
            // see also: https://github.com/bevacqua/dragula/issues/208
            item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
          } else {
            e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
          }
        }
      }

      function startBecauseMouseMoved(e) {
        if (!_grabbed) {
          return;
        }

        if (whichMouseButton(e) === 0) {
          release({});
          return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
        } // truthy check fixes #239, equality fixes #207


        if (e.clientX !== void 0 && e.clientX === _moveX && e.clientY !== void 0 && e.clientY === _moveY) {
          return;
        }

        if (o.ignoreInputTextSelection) {
          var clientX = getCoord('clientX', e);
          var clientY = getCoord('clientY', e);
          var elementBehindCursor = doc.elementFromPoint(clientX, clientY);

          if (isInput(elementBehindCursor)) {
            return;
          }
        }

        var grabbed = _grabbed; // call to end() unsets _grabbed

        eventualMovements(true);
        movements();
        end();
        start(grabbed);
        var offset = getOffset(_item);
        _offsetX = getCoord('pageX', e) - offset.left;
        _offsetY = getCoord('pageY', e) - offset.top;
        classes.add(_copy || _item, 'gu-transit');
        renderMirrorImage();
        drag(e);
      }

      function canStart(item) {
        if (drake.dragging && _mirror) {
          return;
        }

        if (isContainer(item)) {
          return; // don't drag container itself
        }

        var handle = item;

        while (getParent(item) && isContainer(getParent(item)) === false) {
          if (o.invalid(item, handle)) {
            return;
          }

          item = getParent(item); // drag target should be a top element

          if (!item) {
            return;
          }
        }

        var source = getParent(item);

        if (!source) {
          return;
        }

        if (o.invalid(item, handle)) {
          return;
        }

        var movable = o.moves(item, source, handle, nextEl(item));

        if (!movable) {
          return;
        }

        return {
          item: item,
          source: source
        };
      }

      function canMove(item) {
        return !!canStart(item);
      }

      function manualStart(item) {
        var context = canStart(item);

        if (context) {
          start(context);
        }
      }

      function start(context) {
        if (isCopy(context.item, context.source)) {
          _copy = context.item.cloneNode(true);
          drake.emit('cloned', _copy, context.item, 'copy');
        }

        _source = context.source;
        _item = context.item;
        _initialSibling = _currentSibling = nextEl(context.item);
        drake.dragging = true;
        drake.emit('drag', _item, _source);
      }

      function invalidTarget() {
        return false;
      }

      function end() {
        if (!drake.dragging) {
          return;
        }

        var item = _copy || _item;
        drop(item, getParent(item));
      }

      function ungrab() {
        _grabbed = false;
        eventualMovements(true);
        movements(true);
      }

      function release(e) {
        ungrab();

        if (!drake.dragging) {
          return;
        }

        var item = _copy || _item;
        var clientX = getCoord('clientX', e);
        var clientY = getCoord('clientY', e);
        var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
        var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);

        if (dropTarget && (_copy && o.copySortSource || !_copy || dropTarget !== _source)) {
          drop(item, dropTarget);
        } else if (o.removeOnSpill) {
          remove();
        } else {
          cancel();
        }
      }

      function drop(item, target) {
        var parent = getParent(item);

        if (_copy && o.copySortSource && target === _source) {
          parent.removeChild(_item);
        }

        if (isInitialPlacement(target)) {
          drake.emit('cancel', item, _source, _source);
        } else {
          drake.emit('drop', item, target, _source, _currentSibling);
        }

        cleanup();
      }

      function remove() {
        if (!drake.dragging) {
          return;
        }

        var item = _copy || _item;
        var parent = getParent(item);

        if (parent) {
          parent.removeChild(item);
        }

        drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
        cleanup();
      }

      function cancel(revert) {
        if (!drake.dragging) {
          return;
        }

        var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
        var item = _copy || _item;
        var parent = getParent(item);
        var initial = isInitialPlacement(parent);

        if (initial === false && reverts) {
          if (_copy) {
            if (parent) {
              parent.removeChild(_copy);
            }
          } else {
            _source.insertBefore(item, _initialSibling);
          }
        }

        if (initial || reverts) {
          drake.emit('cancel', item, _source, _source);
        } else {
          drake.emit('drop', item, parent, _source, _currentSibling);
        }

        cleanup();
      }

      function cleanup() {
        var item = _copy || _item;
        ungrab();
        removeMirrorImage();

        if (item) {
          classes.rm(item, 'gu-transit');
        }

        if (_renderTimer) {
          clearTimeout(_renderTimer);
        }

        drake.dragging = false;

        if (_lastDropTarget) {
          drake.emit('out', item, _lastDropTarget, _source);
        }

        drake.emit('dragend', item);
        _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
      }

      function isInitialPlacement(target, s) {
        var sibling;

        if (s !== void 0) {
          sibling = s;
        } else if (_mirror) {
          sibling = _currentSibling;
        } else {
          sibling = nextEl(_copy || _item);
        }

        return target === _source && sibling === _initialSibling;
      }

      function findDropTarget(elementBehindCursor, clientX, clientY) {
        var target = elementBehindCursor;

        while (target && !accepted()) {
          target = getParent(target);
        }

        return target;

        function accepted() {
          var droppable = isContainer(target);

          if (droppable === false) {
            return false;
          }

          var immediate = getImmediateChild(target, elementBehindCursor);
          var reference = getReference(target, immediate, clientX, clientY);
          var initial = isInitialPlacement(target, reference);

          if (initial) {
            return true; // should always be able to drop it right back where it was
          }

          return o.accepts(_item, target, _source, reference);
        }
      }

      function drag(e) {
        if (!_mirror) {
          return;
        }

        e.preventDefault();
        var clientX = getCoord('clientX', e);
        var clientY = getCoord('clientY', e);
        var x = clientX - _offsetX;
        var y = clientY - _offsetY;
        _mirror.style.left = x + 'px';
        _mirror.style.top = y + 'px';
        var item = _copy || _item;
        var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
        var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
        var changed = dropTarget !== null && dropTarget !== _lastDropTarget;

        if (changed || dropTarget === null) {
          out();
          _lastDropTarget = dropTarget;
          over();
        }

        var parent = getParent(item);

        if (dropTarget === _source && _copy && !o.copySortSource) {
          if (parent) {
            parent.removeChild(item);
          }

          return;
        }

        var reference;
        var immediate = getImmediateChild(dropTarget, elementBehindCursor);

        if (immediate !== null) {
          reference = getReference(dropTarget, immediate, clientX, clientY);
        } else if (o.revertOnSpill === true && !_copy) {
          reference = _initialSibling;
          dropTarget = _source;
        } else {
          if (_copy && parent) {
            parent.removeChild(item);
          }

          return;
        }

        if (reference === null && changed || reference !== item && reference !== nextEl(item)) {
          _currentSibling = reference;
          dropTarget.insertBefore(item, reference);
          drake.emit('shadow', item, dropTarget, _source);
        }

        function moved(type) {
          drake.emit(type, item, _lastDropTarget, _source);
        }

        function over() {
          if (changed) {
            moved('over');
          }
        }

        function out() {
          if (_lastDropTarget) {
            moved('out');
          }
        }
      }

      function spillOver(el) {
        classes.rm(el, 'gu-hide');
      }

      function spillOut(el) {
        if (drake.dragging) {
          classes.add(el, 'gu-hide');
        }
      }

      function renderMirrorImage() {
        if (_mirror) {
          return;
        }

        var rect = _item.getBoundingClientRect();

        _mirror = _item.cloneNode(true);
        _mirror.style.width = getRectWidth(rect) + 'px';
        _mirror.style.height = getRectHeight(rect) + 'px';
        classes.rm(_mirror, 'gu-transit');
        classes.add(_mirror, 'gu-mirror');
        o.mirrorContainer.appendChild(_mirror);
        touchy(documentElement, 'add', 'mousemove', drag);
        classes.add(o.mirrorContainer, 'gu-unselectable');
        drake.emit('cloned', _mirror, _item, 'mirror');
      }

      function removeMirrorImage() {
        if (_mirror) {
          classes.rm(o.mirrorContainer, 'gu-unselectable');
          touchy(documentElement, 'remove', 'mousemove', drag);
          getParent(_mirror).removeChild(_mirror);
          _mirror = null;
        }
      }

      function getImmediateChild(dropTarget, target) {
        var immediate = target;

        while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
          immediate = getParent(immediate);
        }

        if (immediate === documentElement) {
          return null;
        }

        return immediate;
      }

      function getReference(dropTarget, target, x, y) {
        var horizontal = o.direction === 'horizontal';
        var reference = target !== dropTarget ? inside() : outside();
        return reference;

        function outside() {
          // slower, but able to figure out any position
          var len = dropTarget.children.length;
          var i;
          var el;
          var rect;

          for (i = 0; i < len; i++) {
            el = dropTarget.children[i];
            rect = el.getBoundingClientRect();

            if (horizontal && rect.left + rect.width / 2 > x) {
              return el;
            }

            if (!horizontal && rect.top + rect.height / 2 > y) {
              return el;
            }
          }

          return null;
        }

        function inside() {
          // faster, but only available if dropped inside a child element
          var rect = target.getBoundingClientRect();

          if (horizontal) {
            return resolve(x > rect.left + getRectWidth(rect) / 2);
          }

          return resolve(y > rect.top + getRectHeight(rect) / 2);
        }

        function resolve(after) {
          return after ? nextEl(target) : target;
        }
      }

      function isCopy(item, container) {
        return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
      }
    }

    function touchy(el, op, type, fn) {
      var touch = {
        mouseup: 'touchend',
        mousedown: 'touchstart',
        mousemove: 'touchmove'
      };
      var pointers = {
        mouseup: 'pointerup',
        mousedown: 'pointerdown',
        mousemove: 'pointermove'
      };
      var microsoft = {
        mouseup: 'MSPointerUp',
        mousedown: 'MSPointerDown',
        mousemove: 'MSPointerMove'
      };

      if (global.navigator.pointerEnabled) {
        crossvent[op](el, pointers[type], fn);
      } else if (global.navigator.msPointerEnabled) {
        crossvent[op](el, microsoft[type], fn);
      } else {
        crossvent[op](el, touch[type], fn);
        crossvent[op](el, type, fn);
      }
    }

    function whichMouseButton(e) {
      if (e.touches !== void 0) {
        return e.touches.length;
      }

      if (e.which !== void 0 && e.which !== 0) {
        return e.which;
      } // see https://github.com/bevacqua/dragula/issues/261


      if (e.buttons !== void 0) {
        return e.buttons;
      }

      var button = e.button;

      if (button !== void 0) {
        // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
        return button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
      }
    }

    function getOffset(el) {
      var rect = el.getBoundingClientRect();
      return {
        left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
        top: rect.top + getScroll('scrollTop', 'pageYOffset')
      };
    }

    function getScroll(scrollProp, offsetProp) {
      if (typeof global[offsetProp] !== 'undefined') {
        return global[offsetProp];
      }

      if (documentElement.clientHeight) {
        return documentElement[scrollProp];
      }

      return doc.body[scrollProp];
    }

    function getElementBehindPoint(point, x, y) {
      var p = point || {};
      var state = p.className;
      var el;
      p.className += ' gu-hide';
      el = doc.elementFromPoint(x, y);
      p.className = state;
      return el;
    }

    function never() {
      return false;
    }

    function always() {
      return true;
    }

    function getRectWidth(rect) {
      return rect.width || rect.right - rect.left;
    }

    function getRectHeight(rect) {
      return rect.height || rect.bottom - rect.top;
    }

    function getParent(el) {
      return el.parentNode === doc ? null : el.parentNode;
    }

    function isInput(el) {
      return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el);
    }

    function isEditable(el) {
      if (!el) {
        return false;
      } // no parents were editable


      if (el.contentEditable === 'false') {
        return false;
      } // stop the lookup


      if (el.contentEditable === 'true') {
        return true;
      } // found a contentEditable element in the chain


      return isEditable(getParent(el)); // contentEditable is set to 'inherit'
    }

    function nextEl(el) {
      return el.nextElementSibling || manually();

      function manually() {
        var sibling = el;

        do {
          sibling = sibling.nextSibling;
        } while (sibling && sibling.nodeType !== 1);

        return sibling;
      }
    }

    function getEventHost(e) {
      // on touchend event, we have to use `e.changedTouches`
      // see http://stackoverflow.com/questions/7192563/touchend-event-properties
      // see https://github.com/bevacqua/dragula/issues/34
      if (e.targetTouches && e.targetTouches.length) {
        return e.targetTouches[0];
      }

      if (e.changedTouches && e.changedTouches.length) {
        return e.changedTouches[0];
      }

      return e;
    }

    function getCoord(coord, e) {
      var host = getEventHost(e);
      var missMap = {
        pageX: 'clientX',
        // IE8
        pageY: 'clientY' // IE8

      };

      if (coord in missMap && !(coord in host) && missMap[coord] in host) {
        coord = missMap[coord];
      }

      return host[coord];
    }

    module.exports = dragula;
    /***/
  },

  /***/
  "./node_modules/ng2-dragula/__ivy_ngcc__/dist/fesm2015/ng2-dragula.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/ng2-dragula/__ivy_ngcc__/dist/fesm2015/ng2-dragula.js ***!
    \****************************************************************************/

  /*! exports provided: DragulaDirective, DragulaService, DragulaModule, dragula, DrakeFactory, Group, EventTypes, MockDrake, MockDrakeFactory */

  /***/
  function node_modulesNg2Dragula__ivy_ngcc__DistFesm2015Ng2DragulaJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragulaDirective", function () {
      return DragulaDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragulaService", function () {
      return DragulaService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragulaModule", function () {
      return DragulaModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dragula", function () {
      return dragula;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrakeFactory", function () {
      return DrakeFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Group", function () {
      return Group;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventTypes", function () {
      return EventTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MockDrake", function () {
      return MockDrake;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MockDrakeFactory", function () {
      return MockDrakeFactory;
    });
    /* harmony import */


    var dragula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! dragula */
    "./node_modules/dragula/dragula.js");
    /* harmony import */


    var dragula__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(dragula__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */


    var Group =
    /**
     * @param {?} name
     * @param {?} drake
     * @param {?} options
     */
    function Group(name, drake, options) {
      _classCallCheck(this, Group);

      this.name = name;
      this.drake = drake;
      this.options = options;
      this.initEvents = false;
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /** @enum {string} */


    var EventTypes = {
      Cancel: "cancel",
      Cloned: "cloned",
      Drag: "drag",
      DragEnd: "dragend",
      Drop: "drop",
      Out: "out",
      Over: "over",
      Remove: "remove",
      Shadow: "shadow",
      DropModel: "dropModel",
      RemoveModel: "removeModel"
    };
    /** @type {?} */

    var AllEvents = Object.keys(EventTypes).map(function (k) {
      return (
        /** @type {?} */
        EventTypes[
        /** @type {?} */
        k]
      );
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /** @type {?} */

    var dragula = dragula__WEBPACK_IMPORTED_MODULE_0___default.a || dragula__WEBPACK_IMPORTED_MODULE_0__;

    var DrakeFactory =
    /**
     * @param {?=} build
     */
    function DrakeFactory() {
      var build = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dragula;

      _classCallCheck(this, DrakeFactory);

      this.build = build;
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /** @type {?} */


    var filterEvent = function filterEvent(eventType, filterDragType, projector) {
      return function (input) {
        return input.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_ref) {
          var event = _ref.event,
              name = _ref.name;
          return event === eventType && (filterDragType === undefined || name === filterDragType);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref2) {
          var name = _ref2.name,
              args = _ref2.args;
          return projector(name, args);
        }));
      };
    };
    /** @type {?} */


    var elContainerSourceProjector = function elContainerSourceProjector(name, _ref3) {
      var _ref4 = _slicedToArray(_ref3, 3),
          el = _ref4[0],
          container = _ref4[1],
          source = _ref4[2];

      return {
        name: name,
        el: el,
        container: container,
        source: source
      };
    };

    var DragulaService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?=} drakeFactory
       */
      function DragulaService() {
        var _this = this;

        var drakeFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        _classCallCheck(this, DragulaService);

        this.drakeFactory = drakeFactory;
        this.dispatch$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

        this.drag = function (groupName) {
          return _this.dispatch$.pipe(filterEvent(EventTypes.Drag, groupName, function (name, _ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                el = _ref6[0],
                source = _ref6[1];

            return {
              name: name,
              el: el,
              source: source
            };
          }));
        };

        this.dragend = function (groupName) {
          return _this.dispatch$.pipe(filterEvent(EventTypes.DragEnd, groupName, function (name, _ref7) {
            var _ref8 = _slicedToArray(_ref7, 1),
                el = _ref8[0];

            return {
              name: name,
              el: el
            };
          }));
        };

        this.drop = function (groupName) {
          return _this.dispatch$.pipe(filterEvent(EventTypes.Drop, groupName, function (name, _ref9) {
            var _ref10 = _slicedToArray(_ref9, 4),
                el = _ref10[0],
                target = _ref10[1],
                source = _ref10[2],
                sibling = _ref10[3];

            return {
              name: name,
              el: el,
              target: target,
              source: source,
              sibling: sibling
            };
          }));
        };

        this.elContainerSource = function (eventType) {
          return function (groupName) {
            return _this.dispatch$.pipe(filterEvent(eventType, groupName, elContainerSourceProjector));
          };
        };

        this.cancel = this.elContainerSource(EventTypes.Cancel);
        this.remove = this.elContainerSource(EventTypes.Remove);
        this.shadow = this.elContainerSource(EventTypes.Shadow);
        this.over = this.elContainerSource(EventTypes.Over);
        this.out = this.elContainerSource(EventTypes.Out);

        this.cloned = function (groupName) {
          return _this.dispatch$.pipe(filterEvent(EventTypes.Cloned, groupName, function (name, _ref11) {
            var _ref12 = _slicedToArray(_ref11, 3),
                clone = _ref12[0],
                original = _ref12[1],
                cloneType = _ref12[2];

            return {
              name: name,
              clone: clone,
              original: original,
              cloneType: cloneType
            };
          }));
        };

        this.dropModel = function (groupName) {
          return _this.dispatch$.pipe(filterEvent(EventTypes.DropModel, groupName, function (name, _ref13) {
            var _ref14 = _slicedToArray(_ref13, 9),
                el = _ref14[0],
                target = _ref14[1],
                source = _ref14[2],
                sibling = _ref14[3],
                item = _ref14[4],
                sourceModel = _ref14[5],
                targetModel = _ref14[6],
                sourceIndex = _ref14[7],
                targetIndex = _ref14[8];

            return {
              name: name,
              el: el,
              target: target,
              source: source,
              sibling: sibling,
              item: item,
              sourceModel: sourceModel,
              targetModel: targetModel,
              sourceIndex: sourceIndex,
              targetIndex: targetIndex
            };
          }));
        };

        this.removeModel = function (groupName) {
          return _this.dispatch$.pipe(filterEvent(EventTypes.RemoveModel, groupName, function (name, _ref15) {
            var _ref16 = _slicedToArray(_ref15, 6),
                el = _ref16[0],
                container = _ref16[1],
                source = _ref16[2],
                item = _ref16[3],
                sourceModel = _ref16[4],
                sourceIndex = _ref16[5];

            return {
              name: name,
              el: el,
              container: container,
              source: source,
              item: item,
              sourceModel: sourceModel,
              sourceIndex: sourceIndex
            };
          }));
        };

        this.groups = {};

        if (this.drakeFactory === null) {
          this.drakeFactory = new DrakeFactory();
        }
      }
      /**
       * Public mainly for testing purposes. Prefer `createGroup()`.
       * @param {?} group
       * @return {?}
       */


      _createClass(DragulaService, [{
        key: "add",
        value: function add(group) {
          /** @type {?} */
          var existingGroup = this.find(group.name);

          if (existingGroup) {
            throw new Error('Group named: "' + group.name + '" already exists.');
          }

          this.groups[group.name] = group;
          this.handleModels(group);
          this.setupEvents(group);
          return group;
        }
        /**
         * @param {?} name
         * @return {?}
         */

      }, {
        key: "find",
        value: function find(name) {
          return this.groups[name];
        }
        /**
         * @param {?} name
         * @return {?}
         */

      }, {
        key: "destroy",
        value: function destroy(name) {
          /** @type {?} */
          var group = this.find(name);

          if (!group) {
            return;
          }

          group.drake && group.drake.destroy();
          delete this.groups[name];
        }
        /**
         * Creates a group with the specified name and options.
         *
         * Note: formerly known as `setOptions`
         * @template T
         * @param {?} name
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "createGroup",
        value: function createGroup(name, options) {
          return this.add(new Group(name, this.drakeFactory.build([], options), options));
        }
        /**
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "handleModels",
        value: function handleModels(_ref17) {
          var _this2 = this;

          var name = _ref17.name,
              drake = _ref17.drake,
              options = _ref17.options;

          /** @type {?} */
          var dragElm;
          /** @type {?} */

          var dragIndex;
          /** @type {?} */

          var dropIndex;
          drake.on('remove', function (el, container, source) {
            if (!drake.models) {
              return;
            }
            /** @type {?} */


            var sourceModel = drake.models[drake.containers.indexOf(source)];
            sourceModel = sourceModel.slice(0);
            /** @type {?} */

            var item = sourceModel.splice(dragIndex, 1)[0]; // console.log('REMOVE');
            // console.log(sourceModel);

            _this2.dispatch$.next({
              event: EventTypes.RemoveModel,
              name: name,
              args: [el, container, source, item, sourceModel, dragIndex]
            });
          });
          drake.on('drag', function (el, source) {
            if (!drake.models) {
              return;
            }

            dragElm = el;
            dragIndex = _this2.domIndexOf(el, source);
          });
          drake.on('drop', function (dropElm, target, source, sibling) {
            if (!drake.models || !target) {
              return;
            }

            dropIndex = _this2.domIndexOf(dropElm, target);
            /** @type {?} */

            var sourceModel = drake.models[drake.containers.indexOf(source)];
            /** @type {?} */

            var targetModel = drake.models[drake.containers.indexOf(target)];
            /** @type {?} */

            var item;

            if (target === source) {
              sourceModel = sourceModel.slice(0);
              item = sourceModel.splice(dragIndex, 1)[0];
              sourceModel.splice(dropIndex, 0, item); // this was true before we cloned and updated sourceModel,
              // but targetModel still has the old value

              targetModel = sourceModel;
            } else {
              /** @type {?} */
              var isCopying = dragElm !== dropElm;
              item = sourceModel[dragIndex];

              if (isCopying) {
                if (!options.copyItem) {
                  throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");
                }

                item = options.copyItem(item);
              }

              if (!isCopying) {
                sourceModel = sourceModel.slice(0);
                sourceModel.splice(dragIndex, 1);
              }

              targetModel = targetModel.slice(0);
              targetModel.splice(dropIndex, 0, item);

              if (isCopying) {
                try {
                  target.removeChild(dropElm);
                } catch (e) {}
              }
            }

            _this2.dispatch$.next({
              event: EventTypes.DropModel,
              name: name,
              args: [dropElm, target, source, sibling, item, sourceModel, targetModel, dragIndex, dropIndex]
            });
          });
        }
        /**
         * @param {?} group
         * @return {?}
         */

      }, {
        key: "setupEvents",
        value: function setupEvents(group) {
          var _this3 = this;

          if (group.initEvents) {
            return;
          }

          group.initEvents = true;
          /** @type {?} */

          var name = group.name;
          /** @type {?} */

          var emitter = function emitter(event) {
            group.drake.on(event, function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              _this3.dispatch$.next({
                event: event,
                name: name,
                args: args
              });
            });
          };

          AllEvents.forEach(emitter);
        }
        /**
         * @param {?} child
         * @param {?} parent
         * @return {?}
         */

      }, {
        key: "domIndexOf",
        value: function domIndexOf(child, parent) {
          return Array.prototype.indexOf.call(parent.children, child);
        }
      }]);

      return DragulaService;
    }();

    DragulaService.ɵfac = function DragulaService_Factory(t) {
      return new (t || DragulaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DrakeFactory, 8));
    };

    DragulaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DragulaService,
      factory: DragulaService.ɵfac
    });
    /** @nocollapse */

    DragulaService.ctorParameters = function () {
      return [{
        type: DrakeFactory,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragulaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: DrakeFactory,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */


    var DragulaDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} el
       * @param {?} dragulaService
       */
      function DragulaDirective(el, dragulaService) {
        _classCallCheck(this, DragulaDirective);

        this.el = el;
        this.dragulaService = dragulaService;
        this.dragulaModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(DragulaDirective, [{
        key: "ngOnChanges",

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (changes && changes.dragula) {
            var _changes$dragula = changes.dragula,
                prev = _changes$dragula.previousValue,
                current = _changes$dragula.currentValue,
                firstChange = _changes$dragula.firstChange;
            /** @type {?} */

            var hadPreviousValue = !!prev;
            /** @type {?} */

            var hasNewValue = !!current; // something -> null       =>  teardown only
            // something -> something  =>  teardown, then setup
            //      null -> something  =>  setup only
            //
            //      null -> null (precluded by fact of change being present)

            if (hadPreviousValue) {
              this.teardown(prev);
            }

            if (hasNewValue) {
              this.setup();
            }
          } else if (changes && changes.dragulaModel) {
            var _changes$dragulaModel = changes.dragulaModel,
                _prev = _changes$dragulaModel.previousValue,
                _current = _changes$dragulaModel.currentValue,
                _firstChange = _changes$dragulaModel.firstChange;
            var drake = this.group.drake;

            if (this.dragula && drake) {
              drake.models = drake.models || [];
              /** @type {?} */

              var prevIndex = drake.models.indexOf(_prev);

              if (prevIndex !== -1) {
                // delete the previous
                drake.models.splice(prevIndex, 1); // maybe insert a new one at the same spot

                if (!!_current) {
                  drake.models.splice(prevIndex, 0, _current);
                }
              } else if (!!_current) {
                // no previous one to remove; just push this one.
                drake.models.push(_current);
              }
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "setup",
        value: function setup() {
          var _this4 = this;

          /** @type {?} */
          var checkModel = function checkModel(group) {
            if (_this4.dragulaModel) {
              if (group.drake.models) {
                group.drake.models.push(_this4.dragulaModel);
              } else {
                group.drake.models = [_this4.dragulaModel];
              }
            }
          };
          /** @type {?} */


          var group = this.dragulaService.find(this.dragula);

          if (!group) {
            /** @type {?} */
            var options = {};
            group = this.dragulaService.createGroup(this.dragula, options);
          } // ensure model and container element are pushed


          checkModel(group);
          group.drake.containers.push(this.container);
          this.subscribe(this.dragula);
          this.group = group;
        }
        /**
         * @param {?} name
         * @return {?}
         */

      }, {
        key: "subscribe",
        value: function subscribe(name) {
          var _this5 = this;

          this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
          this.subs.add(this.dragulaService.dropModel(name).subscribe(function (_ref18) {
            var source = _ref18.source,
                target = _ref18.target,
                sourceModel = _ref18.sourceModel,
                targetModel = _ref18.targetModel;

            if (source === _this5.el.nativeElement) {
              _this5.dragulaModelChange.emit(sourceModel);
            } else if (target === _this5.el.nativeElement) {
              _this5.dragulaModelChange.emit(targetModel);
            }
          }));
          this.subs.add(this.dragulaService.removeModel(name).subscribe(function (_ref19) {
            var source = _ref19.source,
                sourceModel = _ref19.sourceModel;

            if (source === _this5.el.nativeElement) {
              _this5.dragulaModelChange.emit(sourceModel);
            }
          }));
        }
        /**
         * @param {?} groupName
         * @return {?}
         */

      }, {
        key: "teardown",
        value: function teardown(groupName) {
          if (this.subs) {
            this.subs.unsubscribe();
          }
          /** @type {?} */


          var group = this.dragulaService.find(groupName);

          if (group) {
            /** @type {?} */
            var itemToRemove = group.drake.containers.indexOf(this.el.nativeElement);

            if (itemToRemove !== -1) {
              group.drake.containers.splice(itemToRemove, 1);
            }

            if (this.dragulaModel && group.drake && group.drake.models) {
              /** @type {?} */
              var modelIndex = group.drake.models.indexOf(this.dragulaModel);

              if (modelIndex !== -1) {
                group.drake.models.splice(modelIndex, 1);
              }
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.teardown(this.dragula);
        }
      }, {
        key: "container",
        get: function get() {
          return this.el && this.el.nativeElement;
        }
      }]);

      return DragulaDirective;
    }();

    DragulaDirective.ɵfac = function DragulaDirective_Factory(t) {
      return new (t || DragulaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DragulaService));
    };

    DragulaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DragulaDirective,
      selectors: [["", "dragula", ""]],
      inputs: {
        dragula: "dragula",
        dragulaModel: "dragulaModel"
      },
      outputs: {
        dragulaModelChange: "dragulaModelChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()]
    });
    /** @nocollapse */

    DragulaDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: DragulaService
      }];
    };

    DragulaDirective.propDecorators = {
      dragula: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      dragulaModel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      dragulaModelChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragulaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[dragula]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: DragulaService
        }];
      }, {
        dragulaModelChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragula: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dragulaModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */


    var DragulaModule =
    /*#__PURE__*/
    function () {
      function DragulaModule() {
        _classCallCheck(this, DragulaModule);
      }

      _createClass(DragulaModule, null, [{
        key: "forRoot",

        /**
         * @return {?}
         */
        value: function forRoot() {
          return {
            ngModule: DragulaModule,
            providers: [DragulaService]
          };
        }
      }]);

      return DragulaModule;
    }();

    DragulaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DragulaModule
    });
    DragulaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function DragulaModule_Factory(t) {
        return new (t || DragulaModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DragulaModule, {
        declarations: [DragulaDirective],
        exports: [DragulaDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragulaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [DragulaDirective],
          declarations: [DragulaDirective]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /** @type {?} */


    var MockDrakeFactory = new DrakeFactory(function (containers, options) {
      return new MockDrake(containers, options);
    });
    /**
     * You can use MockDrake to simulate Drake events.
     *
     * The three methods that actually do anything are `on(event, listener)`,
     * `destroy()`, and a new method, `emit()`. Use `emit()` to manually emit Drake
     * events, and if you injected MockDrake properly with MockDrakeFactory or
     * mocked the DragulaService.find() method, then you can make ng2-dragula think
     * drags and drops are happening.
     *
     * Caveats:
     *
     * 1. YOU MUST MAKE THE DOM CHANGES YOURSELF.
     * 2. REPEAT: YOU MUST MAKE THE DOM CHANGES YOURSELF.
     *    That means `source.removeChild(el)`, and `target.insertBefore(el)`.
     * 3. None of the other methods do anything.
     *    That's ok, because ng2-dragula doesn't use them.
     */

    var MockDrake =
    /*#__PURE__*/
    function () {
      /**
       * @param {?=} containers A list of container elements.
       * @param {?=} options These will NOT be used. At all.
       * @param {?=} models Nonstandard, but useful for testing using `new MockDrake()` directly.
       *               Note, default value is undefined, like a real Drake. Don't change that.
       */
      function MockDrake() {
        var containers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var models = arguments.length > 2 ? arguments[2] : undefined;

        _classCallCheck(this, MockDrake);

        this.containers = containers;
        this.options = options;
        this.models = models;
        /* Doesn't represent anything meaningful. */

        this.dragging = false;
        this.emitter$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
      }
      /**
       * @param {?} item
       * @return {?}
       */


      _createClass(MockDrake, [{
        key: "start",
        value: function start(item) {
          this.dragging = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "end",
        value: function end() {
          this.dragging = false;
        }
        /**
         * @param {?=} revert
         * @return {?}
         */

      }, {
        key: "cancel",
        value: function cancel(revert) {
          this.dragging = false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove() {
          this.dragging = false;
        }
        /**
         * @param {?} event
         * @param {?} callback
         * @return {?}
         */

      }, {
        key: "on",
        value: function on(event, callback) {
          this.subs.add(this.emitter$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_ref20) {
            var eventType = _ref20.eventType;
            return eventType === event;
          })).subscribe(function (_ref21) {
            var args = _ref21.args;
            callback.apply(void 0, _toConsumableArray(args));
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "destroy",
        value: function destroy() {
          this.subs.unsubscribe();
        }
        /**
         * This is the most useful method. You can use it to manually fire events that would normally
         * be fired by a real drake.
         *
         * You're likely most interested in firing `drag`, `remove` and `drop`, the three events
         * DragulaService uses to implement [dragulaModel].
         *
         * See https://github.com/bevacqua/dragula#drakeon-events for what you should emit (and in what order).
         *
         * (Note also, firing dropModel and removeModel won't work. You would have to mock DragulaService for that.)
         * @param {?} eventType
         * @param {...?} args
         * @return {?}
         */

      }, {
        key: "emit",
        value: function emit(eventType) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          this.emitter$.next({
            eventType: eventType,
            args: args
          });
        }
      }]);

      return MockDrake;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6LzM3MC9Qcm9qZWN0IGNvZGUvZ3JhZHVzL25vZGVfbW9kdWxlcy9uZzItZHJhZ3VsYS9kaXN0L2Zlc20yMDE1L25nMi1kcmFndWxhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBOFBDLHlHQUdDOzs7Ozs7Ozs7a0NBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBc0pELDhRQUdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBZ0JEOzs7Ozs7OzswQkFNQyIsImZpbGUiOiJuZzItZHJhZ3VsYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGRyYWd1bGFFeHB0IGZyb20gJ2RyYWd1bGEnO1xuaW1wb3J0IGRyYWd1bGFFeHB0X19kZWZhdWx0LCB7ICB9IGZyb20gJ2RyYWd1bGEnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuY2xhc3MgR3JvdXAge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEBwYXJhbSB7P30gZHJha2VcbiAgICAgKiBAcGFyYW0gez99IG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkcmFrZSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRyYWtlID0gZHJha2U7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cyA9IGZhbHNlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBFdmVudFR5cGVzID0ge1xuICAgIENhbmNlbDogXCJjYW5jZWxcIixcbiAgICBDbG9uZWQ6IFwiY2xvbmVkXCIsXG4gICAgRHJhZzogXCJkcmFnXCIsXG4gICAgRHJhZ0VuZDogXCJkcmFnZW5kXCIsXG4gICAgRHJvcDogXCJkcm9wXCIsXG4gICAgT3V0OiBcIm91dFwiLFxuICAgIE92ZXI6IFwib3ZlclwiLFxuICAgIFJlbW92ZTogXCJyZW1vdmVcIixcbiAgICBTaGFkb3c6IFwic2hhZG93XCIsXG4gICAgRHJvcE1vZGVsOiBcImRyb3BNb2RlbFwiLFxuICAgIFJlbW92ZU1vZGVsOiBcInJlbW92ZU1vZGVsXCIsXG59O1xuLyoqIEB0eXBlIHs/fSAqL1xuY29uc3QgQWxsRXZlbnRzID0gT2JqZWN0LmtleXMoRXZlbnRUeXBlcykubWFwKGsgPT4gLyoqIEB0eXBlIHs/fSAqLyAoRXZlbnRUeXBlc1svKiogQHR5cGUgez99ICovIChrKV0pKTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqIEB0eXBlIHs/fSAqL1xuY29uc3QgZHJhZ3VsYSA9IGRyYWd1bGFFeHB0X19kZWZhdWx0IHx8IGRyYWd1bGFFeHB0O1xuY2xhc3MgRHJha2VGYWN0b3J5IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez89fSBidWlsZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGJ1aWxkID0gZHJhZ3VsYSkge1xuICAgICAgICB0aGlzLmJ1aWxkID0gYnVpbGQ7XG4gICAgfVxufVxuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogQHN1cHByZXNzIHtjaGVja1R5cGVzfSBjaGVja2VkIGJ5IHRzY1xuICovXG4vKiogQHR5cGUgez99ICovXG5jb25zdCBmaWx0ZXJFdmVudCA9IChldmVudFR5cGUsIGZpbHRlckRyYWdUeXBlLCBwcm9qZWN0b3IpID0+IChpbnB1dCkgPT4ge1xuICAgIHJldHVybiBpbnB1dC5waXBlKGZpbHRlcigoeyBldmVudCwgbmFtZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiBldmVudCA9PT0gZXZlbnRUeXBlXG4gICAgICAgICAgICAmJiAoZmlsdGVyRHJhZ1R5cGUgPT09IHVuZGVmaW5lZCB8fCBuYW1lID09PSBmaWx0ZXJEcmFnVHlwZSk7XG4gICAgfSksIG1hcCgoeyBuYW1lLCBhcmdzIH0pID0+IHByb2plY3RvcihuYW1lLCBhcmdzKSkpO1xufTtcbi8qKiBAdHlwZSB7P30gKi9cbmNvbnN0IGVsQ29udGFpbmVyU291cmNlUHJvamVjdG9yID0gKG5hbWUsIFtlbCwgY29udGFpbmVyLCBzb3VyY2VdKSA9PiAoeyBuYW1lLCBlbCwgY29udGFpbmVyLCBzb3VyY2UgfSk7XG5jbGFzcyBEcmFndWxhU2VydmljZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/PX0gZHJha2VGYWN0b3J5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZHJha2VGYWN0b3J5ID0gbnVsbCkge1xuICAgICAgICB0aGlzLmRyYWtlRmFjdG9yeSA9IGRyYWtlRmFjdG9yeTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaCQgPSBuZXcgU3ViamVjdCgpO1xuICAgICAgICB0aGlzLmRyYWcgPSAoZ3JvdXBOYW1lKSA9PiB0aGlzLmRpc3BhdGNoJC5waXBlKGZpbHRlckV2ZW50KEV2ZW50VHlwZXMuRHJhZywgZ3JvdXBOYW1lLCAobmFtZSwgW2VsLCBzb3VyY2VdKSA9PiAoeyBuYW1lLCBlbCwgc291cmNlIH0pKSk7XG4gICAgICAgIHRoaXMuZHJhZ2VuZCA9IChncm91cE5hbWUpID0+IHRoaXMuZGlzcGF0Y2gkLnBpcGUoZmlsdGVyRXZlbnQoRXZlbnRUeXBlcy5EcmFnRW5kLCBncm91cE5hbWUsIChuYW1lLCBbZWxdKSA9PiAoeyBuYW1lLCBlbCB9KSkpO1xuICAgICAgICB0aGlzLmRyb3AgPSAoZ3JvdXBOYW1lKSA9PiB0aGlzLmRpc3BhdGNoJC5waXBlKGZpbHRlckV2ZW50KEV2ZW50VHlwZXMuRHJvcCwgZ3JvdXBOYW1lLCAobmFtZSwgW2VsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZ10pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWUsIGVsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZyB9O1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuZWxDb250YWluZXJTb3VyY2UgPSAoZXZlbnRUeXBlKSA9PiAoZ3JvdXBOYW1lKSA9PiB0aGlzLmRpc3BhdGNoJC5waXBlKGZpbHRlckV2ZW50KGV2ZW50VHlwZSwgZ3JvdXBOYW1lLCBlbENvbnRhaW5lclNvdXJjZVByb2plY3RvcikpO1xuICAgICAgICB0aGlzLmNhbmNlbCA9IHRoaXMuZWxDb250YWluZXJTb3VyY2UoRXZlbnRUeXBlcy5DYW5jZWwpO1xuICAgICAgICB0aGlzLnJlbW92ZSA9IHRoaXMuZWxDb250YWluZXJTb3VyY2UoRXZlbnRUeXBlcy5SZW1vdmUpO1xuICAgICAgICB0aGlzLnNoYWRvdyA9IHRoaXMuZWxDb250YWluZXJTb3VyY2UoRXZlbnRUeXBlcy5TaGFkb3cpO1xuICAgICAgICB0aGlzLm92ZXIgPSB0aGlzLmVsQ29udGFpbmVyU291cmNlKEV2ZW50VHlwZXMuT3Zlcik7XG4gICAgICAgIHRoaXMub3V0ID0gdGhpcy5lbENvbnRhaW5lclNvdXJjZShFdmVudFR5cGVzLk91dCk7XG4gICAgICAgIHRoaXMuY2xvbmVkID0gKGdyb3VwTmFtZSkgPT4gdGhpcy5kaXNwYXRjaCQucGlwZShmaWx0ZXJFdmVudChFdmVudFR5cGVzLkNsb25lZCwgZ3JvdXBOYW1lLCAobmFtZSwgW2Nsb25lLCBvcmlnaW5hbCwgY2xvbmVUeXBlXSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZSwgY2xvbmUsIG9yaWdpbmFsLCBjbG9uZVR5cGUgfTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmRyb3BNb2RlbCA9IChncm91cE5hbWUpID0+IHRoaXMuZGlzcGF0Y2gkLnBpcGUoZmlsdGVyRXZlbnQoRXZlbnRUeXBlcy5Ecm9wTW9kZWwsIGdyb3VwTmFtZSwgKG5hbWUsIFtlbCwgdGFyZ2V0LCBzb3VyY2UsIHNpYmxpbmcsIGl0ZW0sIHNvdXJjZU1vZGVsLCB0YXJnZXRNb2RlbCwgc291cmNlSW5kZXgsIHRhcmdldEluZGV4XSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZSwgZWwsIHRhcmdldCwgc291cmNlLCBzaWJsaW5nLCBpdGVtLCBzb3VyY2VNb2RlbCwgdGFyZ2V0TW9kZWwsIHNvdXJjZUluZGV4LCB0YXJnZXRJbmRleCB9O1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMucmVtb3ZlTW9kZWwgPSAoZ3JvdXBOYW1lKSA9PiB0aGlzLmRpc3BhdGNoJC5waXBlKGZpbHRlckV2ZW50KEV2ZW50VHlwZXMuUmVtb3ZlTW9kZWwsIGdyb3VwTmFtZSwgKG5hbWUsIFtlbCwgY29udGFpbmVyLCBzb3VyY2UsIGl0ZW0sIHNvdXJjZU1vZGVsLCBzb3VyY2VJbmRleF0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWUsIGVsLCBjb250YWluZXIsIHNvdXJjZSwgaXRlbSwgc291cmNlTW9kZWwsIHNvdXJjZUluZGV4IH07XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5ncm91cHMgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMuZHJha2VGYWN0b3J5ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWtlRmFjdG9yeSA9IG5ldyBEcmFrZUZhY3RvcnkoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbWFpbmx5IGZvciB0ZXN0aW5nIHB1cnBvc2VzLiBQcmVmZXIgYGNyZWF0ZUdyb3VwKClgLlxuICAgICAqIEBwYXJhbSB7P30gZ3JvdXBcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGFkZChncm91cCkge1xuICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgIGxldCBleGlzdGluZ0dyb3VwID0gdGhpcy5maW5kKGdyb3VwLm5hbWUpO1xuICAgICAgICBpZiAoZXhpc3RpbmdHcm91cCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdHcm91cCBuYW1lZDogXCInICsgZ3JvdXAubmFtZSArICdcIiBhbHJlYWR5IGV4aXN0cy4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyb3Vwc1tncm91cC5uYW1lXSA9IGdyb3VwO1xuICAgICAgICB0aGlzLmhhbmRsZU1vZGVscyhncm91cCk7XG4gICAgICAgIHRoaXMuc2V0dXBFdmVudHMoZ3JvdXApO1xuICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZmluZChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3Vwc1tuYW1lXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBkZXN0cm95KG5hbWUpIHtcbiAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICBsZXQgZ3JvdXAgPSB0aGlzLmZpbmQobmFtZSk7XG4gICAgICAgIGlmICghZ3JvdXApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBncm91cC5kcmFrZSAmJiBncm91cC5kcmFrZS5kZXN0cm95KCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmdyb3Vwc1tuYW1lXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGdyb3VwIHdpdGggdGhlIHNwZWNpZmllZCBuYW1lIGFuZCBvcHRpb25zLlxuICAgICAqXG4gICAgICogTm90ZTogZm9ybWVybHkga25vd24gYXMgYHNldE9wdGlvbnNgXG4gICAgICogQHRlbXBsYXRlIFRcbiAgICAgKiBAcGFyYW0gez99IG5hbWVcbiAgICAgKiBAcGFyYW0gez99IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGNyZWF0ZUdyb3VwKG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKG5ldyBHcm91cChuYW1lLCB0aGlzLmRyYWtlRmFjdG9yeS5idWlsZChbXSwgb3B0aW9ucyksIG9wdGlvbnMpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBfXzBcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGhhbmRsZU1vZGVscyh7IG5hbWUsIGRyYWtlLCBvcHRpb25zIH0pIHtcbiAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICBsZXQgZHJhZ0VsbTtcbiAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICBsZXQgZHJhZ0luZGV4O1xuICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgIGxldCBkcm9wSW5kZXg7XG4gICAgICAgIGRyYWtlLm9uKCdyZW1vdmUnLCAoZWwsIGNvbnRhaW5lciwgc291cmNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRyYWtlLm1vZGVscykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgICAgIGxldCBzb3VyY2VNb2RlbCA9IGRyYWtlLm1vZGVsc1tkcmFrZS5jb250YWluZXJzLmluZGV4T2Yoc291cmNlKV07XG4gICAgICAgICAgICBzb3VyY2VNb2RlbCA9IHNvdXJjZU1vZGVsLnNsaWNlKDApO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHNvdXJjZU1vZGVsLnNwbGljZShkcmFnSW5kZXgsIDEpWzBdO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1JFTU9WRScpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc291cmNlTW9kZWwpO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaCQubmV4dCh7XG4gICAgICAgICAgICAgICAgZXZlbnQ6IEV2ZW50VHlwZXMuUmVtb3ZlTW9kZWwsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBhcmdzOiBbZWwsIGNvbnRhaW5lciwgc291cmNlLCBpdGVtLCBzb3VyY2VNb2RlbCwgZHJhZ0luZGV4XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkcmFrZS5vbignZHJhZycsIChlbCwgc291cmNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRyYWtlLm1vZGVscykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyYWdFbG0gPSBlbDtcbiAgICAgICAgICAgIGRyYWdJbmRleCA9IHRoaXMuZG9tSW5kZXhPZihlbCwgc291cmNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRyYWtlLm9uKCdkcm9wJywgKGRyb3BFbG0sIHRhcmdldCwgc291cmNlLCBzaWJsaW5nKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRyYWtlLm1vZGVscyB8fCAhdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJvcEluZGV4ID0gdGhpcy5kb21JbmRleE9mKGRyb3BFbG0sIHRhcmdldCk7XG4gICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICBsZXQgc291cmNlTW9kZWwgPSBkcmFrZS5tb2RlbHNbZHJha2UuY29udGFpbmVycy5pbmRleE9mKHNvdXJjZSldO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAgICAgbGV0IHRhcmdldE1vZGVsID0gZHJha2UubW9kZWxzW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZih0YXJnZXQpXTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgICAgIGxldCBpdGVtO1xuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgc291cmNlTW9kZWwgPSBzb3VyY2VNb2RlbC5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICBpdGVtID0gc291cmNlTW9kZWwuc3BsaWNlKGRyYWdJbmRleCwgMSlbMF07XG4gICAgICAgICAgICAgICAgc291cmNlTW9kZWwuc3BsaWNlKGRyb3BJbmRleCwgMCwgaXRlbSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgdHJ1ZSBiZWZvcmUgd2UgY2xvbmVkIGFuZCB1cGRhdGVkIHNvdXJjZU1vZGVsLFxuICAgICAgICAgICAgICAgIC8vIGJ1dCB0YXJnZXRNb2RlbCBzdGlsbCBoYXMgdGhlIG9sZCB2YWx1ZVxuICAgICAgICAgICAgICAgIHRhcmdldE1vZGVsID0gc291cmNlTW9kZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICAgICAgbGV0IGlzQ29weWluZyA9IGRyYWdFbG0gIT09IGRyb3BFbG07XG4gICAgICAgICAgICAgICAgaXRlbSA9IHNvdXJjZU1vZGVsW2RyYWdJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGlzQ29weWluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMuY29weUl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIklmIHlvdSBoYXZlIGVuYWJsZWQgYGNvcHlgIG9uIGEgZ3JvdXAsIHlvdSBtdXN0IHByb3ZpZGUgYSBgY29weUl0ZW1gIGZ1bmN0aW9uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpdGVtID0gb3B0aW9ucy5jb3B5SXRlbShpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFpc0NvcHlpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlTW9kZWwgPSBzb3VyY2VNb2RlbC5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlTW9kZWwuc3BsaWNlKGRyYWdJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldE1vZGVsID0gdGFyZ2V0TW9kZWwuc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TW9kZWwuc3BsaWNlKGRyb3BJbmRleCwgMCwgaXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQ29weWluZykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNoaWxkKGRyb3BFbG0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoJC5uZXh0KHtcbiAgICAgICAgICAgICAgICBldmVudDogRXZlbnRUeXBlcy5Ecm9wTW9kZWwsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBhcmdzOiBbZHJvcEVsbSwgdGFyZ2V0LCBzb3VyY2UsIHNpYmxpbmcsIGl0ZW0sIHNvdXJjZU1vZGVsLCB0YXJnZXRNb2RlbCwgZHJhZ0luZGV4LCBkcm9wSW5kZXhdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZ3JvdXBcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIHNldHVwRXZlbnRzKGdyb3VwKSB7XG4gICAgICAgIGlmIChncm91cC5pbml0RXZlbnRzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZ3JvdXAuaW5pdEV2ZW50cyA9IHRydWU7XG4gICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgY29uc3QgbmFtZSA9IGdyb3VwLm5hbWU7XG4gICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgbGV0IGVtaXR0ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGdyb3VwLmRyYWtlLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2gkLm5leHQoeyBldmVudCwgbmFtZSwgYXJncyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBBbGxFdmVudHMuZm9yRWFjaChlbWl0dGVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjaGlsZFxuICAgICAqIEBwYXJhbSB7P30gcGFyZW50XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBkb21JbmRleE9mKGNoaWxkLCBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50LmNoaWxkcmVuLCBjaGlsZCk7XG4gICAgfVxufVxuRHJhZ3VsYVNlcnZpY2UuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfVxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuRHJhZ3VsYVNlcnZpY2UuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXG4gICAgeyB0eXBlOiBEcmFrZUZhY3RvcnksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH1dIH1cbl07XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbmNsYXNzIERyYWd1bGFEaXJlY3RpdmUge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZWxcbiAgICAgKiBAcGFyYW0gez99IGRyYWd1bGFTZXJ2aWNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWwsIGRyYWd1bGFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgICAgdGhpcy5kcmFndWxhU2VydmljZSA9IGRyYWd1bGFTZXJ2aWNlO1xuICAgICAgICB0aGlzLmRyYWd1bGFNb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBnZXQgY29udGFpbmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbCAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLmRyYWd1bGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcHJldmlvdXNWYWx1ZTogcHJldiwgY3VycmVudFZhbHVlOiBjdXJyZW50LCBmaXJzdENoYW5nZSB9ID0gY2hhbmdlcy5kcmFndWxhO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAgICAgbGV0IGhhZFByZXZpb3VzVmFsdWUgPSAhIXByZXY7XG4gICAgICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgICAgICBsZXQgaGFzTmV3VmFsdWUgPSAhIWN1cnJlbnQ7XG4gICAgICAgICAgICAvLyBzb21ldGhpbmcgLT4gbnVsbCAgICAgICA9PiAgdGVhcmRvd24gb25seVxuICAgICAgICAgICAgLy8gc29tZXRoaW5nIC0+IHNvbWV0aGluZyAgPT4gIHRlYXJkb3duLCB0aGVuIHNldHVwXG4gICAgICAgICAgICAvLyAgICAgIG51bGwgLT4gc29tZXRoaW5nICA9PiAgc2V0dXAgb25seVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICAgbnVsbCAtPiBudWxsIChwcmVjbHVkZWQgYnkgZmFjdCBvZiBjaGFuZ2UgYmVpbmcgcHJlc2VudClcbiAgICAgICAgICAgIGlmIChoYWRQcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZWFyZG93bihwcmV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYXNOZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuZHJhZ3VsYU1vZGVsKSB7XG4gICAgICAgICAgICBjb25zdCB7IHByZXZpb3VzVmFsdWU6IHByZXYsIGN1cnJlbnRWYWx1ZTogY3VycmVudCwgZmlyc3RDaGFuZ2UgfSA9IGNoYW5nZXMuZHJhZ3VsYU1vZGVsO1xuICAgICAgICAgICAgY29uc3QgeyBkcmFrZSB9ID0gdGhpcy5ncm91cDtcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYWd1bGEgJiYgZHJha2UpIHtcbiAgICAgICAgICAgICAgICBkcmFrZS5tb2RlbHMgPSBkcmFrZS5tb2RlbHMgfHwgW107XG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAgICAgICAgIGxldCBwcmV2SW5kZXggPSBkcmFrZS5tb2RlbHMuaW5kZXhPZihwcmV2KTtcbiAgICAgICAgICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBkZWxldGUgdGhlIHByZXZpb3VzXG4gICAgICAgICAgICAgICAgICAgIGRyYWtlLm1vZGVscy5zcGxpY2UocHJldkluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF5YmUgaW5zZXJ0IGEgbmV3IG9uZSBhdCB0aGUgc2FtZSBzcG90XG4gICAgICAgICAgICAgICAgICAgIGlmICghIWN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWtlLm1vZGVscy5zcGxpY2UocHJldkluZGV4LCAwLCBjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghIWN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gcHJldmlvdXMgb25lIHRvIHJlbW92ZTsganVzdCBwdXNoIHRoaXMgb25lLlxuICAgICAgICAgICAgICAgICAgICBkcmFrZS5tb2RlbHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBzZXR1cCgpIHtcbiAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICBsZXQgY2hlY2tNb2RlbCA9IChncm91cCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ3VsYU1vZGVsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdyb3VwLmRyYWtlLm1vZGVscykge1xuICAgICAgICAgICAgICAgICAgICBncm91cC5kcmFrZS5tb2RlbHMucHVzaCh0aGlzLmRyYWd1bGFNb2RlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBncm91cC5kcmFrZS5tb2RlbHMgPSBbdGhpcy5kcmFndWxhTW9kZWxdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICBsZXQgZ3JvdXAgPSB0aGlzLmRyYWd1bGFTZXJ2aWNlLmZpbmQodGhpcy5kcmFndWxhKTtcbiAgICAgICAgaWYgKCFncm91cCkge1xuICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIGdyb3VwID0gdGhpcy5kcmFndWxhU2VydmljZS5jcmVhdGVHcm91cCh0aGlzLmRyYWd1bGEsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVuc3VyZSBtb2RlbCBhbmQgY29udGFpbmVyIGVsZW1lbnQgYXJlIHB1c2hlZFxuICAgICAgICBjaGVja01vZGVsKGdyb3VwKTtcbiAgICAgICAgZ3JvdXAuZHJha2UuY29udGFpbmVycy5wdXNoKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUodGhpcy5kcmFndWxhKTtcbiAgICAgICAgdGhpcy5ncm91cCA9IGdyb3VwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IG5hbWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIHN1YnNjcmliZShuYW1lKSB7XG4gICAgICAgIHRoaXMuc3VicyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgdGhpcy5zdWJzLmFkZCh0aGlzLmRyYWd1bGFTZXJ2aWNlXG4gICAgICAgICAgICAuZHJvcE1vZGVsKG5hbWUpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCh7IHNvdXJjZSwgdGFyZ2V0LCBzb3VyY2VNb2RlbCwgdGFyZ2V0TW9kZWwgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNvdXJjZSA9PT0gdGhpcy5lbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFndWxhTW9kZWxDaGFuZ2UuZW1pdChzb3VyY2VNb2RlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0YXJnZXQgPT09IHRoaXMuZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ3VsYU1vZGVsQ2hhbmdlLmVtaXQodGFyZ2V0TW9kZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuc3Vicy5hZGQodGhpcy5kcmFndWxhU2VydmljZVxuICAgICAgICAgICAgLnJlbW92ZU1vZGVsKG5hbWUpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCh7IHNvdXJjZSwgc291cmNlTW9kZWwgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNvdXJjZSA9PT0gdGhpcy5lbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFndWxhTW9kZWxDaGFuZ2UuZW1pdChzb3VyY2VNb2RlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBncm91cE5hbWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIHRlYXJkb3duKGdyb3VwTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5zdWJzKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvKiogQHR5cGUgez99ICovXG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5kcmFndWxhU2VydmljZS5maW5kKGdyb3VwTmFtZSk7XG4gICAgICAgIGlmIChncm91cCkge1xuICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAgICAgY29uc3QgaXRlbVRvUmVtb3ZlID0gZ3JvdXAuZHJha2UuY29udGFpbmVycy5pbmRleE9mKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoaXRlbVRvUmVtb3ZlICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGdyb3VwLmRyYWtlLmNvbnRhaW5lcnMuc3BsaWNlKGl0ZW1Ub1JlbW92ZSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kcmFndWxhTW9kZWwgJiYgZ3JvdXAuZHJha2UgJiYgZ3JvdXAuZHJha2UubW9kZWxzKSB7XG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICAgICAgICAgIGxldCBtb2RlbEluZGV4ID0gZ3JvdXAuZHJha2UubW9kZWxzLmluZGV4T2YodGhpcy5kcmFndWxhTW9kZWwpO1xuICAgICAgICAgICAgICAgIGlmIChtb2RlbEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBncm91cC5kcmFrZS5tb2RlbHMuc3BsaWNlKG1vZGVsSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnRlYXJkb3duKHRoaXMuZHJhZ3VsYSk7XG4gICAgfVxufVxuRHJhZ3VsYURpcmVjdGl2ZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbeyBzZWxlY3RvcjogJ1tkcmFndWxhXScgfSxdIH1cbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkRyYWd1bGFEaXJlY3RpdmUuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXG4gICAgeyB0eXBlOiBFbGVtZW50UmVmIH0sXG4gICAgeyB0eXBlOiBEcmFndWxhU2VydmljZSB9XG5dO1xuRHJhZ3VsYURpcmVjdGl2ZS5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICBkcmFndWxhOiBbeyB0eXBlOiBJbnB1dCB9XSxcbiAgICBkcmFndWxhTW9kZWw6IFt7IHR5cGU6IElucHV0IH1dLFxuICAgIGRyYWd1bGFNb2RlbENoYW5nZTogW3sgdHlwZTogT3V0cHV0IH1dXG59O1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogQHN1cHByZXNzIHtjaGVja1R5cGVzfSBjaGVja2VkIGJ5IHRzY1xuICovXG5jbGFzcyBEcmFndWxhTW9kdWxlIHtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIHN0YXRpYyBmb3JSb290KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IERyYWd1bGFNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtEcmFndWxhU2VydmljZV1cbiAgICAgICAgfTtcbiAgICB9XG59XG5EcmFndWxhTW9kdWxlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBleHBvcnRzOiBbRHJhZ3VsYURpcmVjdGl2ZV0sXG4gICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbRHJhZ3VsYURpcmVjdGl2ZV0sXG4gICAgICAgICAgICB9LF0gfVxuXTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqIEB0eXBlIHs/fSAqL1xuY29uc3QgTW9ja0RyYWtlRmFjdG9yeSA9IG5ldyBEcmFrZUZhY3RvcnkoKGNvbnRhaW5lcnMsIG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gbmV3IE1vY2tEcmFrZShjb250YWluZXJzLCBvcHRpb25zKTtcbn0pO1xuLyoqXG4gKiBZb3UgY2FuIHVzZSBNb2NrRHJha2UgdG8gc2ltdWxhdGUgRHJha2UgZXZlbnRzLlxuICpcbiAqIFRoZSB0aHJlZSBtZXRob2RzIHRoYXQgYWN0dWFsbHkgZG8gYW55dGhpbmcgYXJlIGBvbihldmVudCwgbGlzdGVuZXIpYCxcbiAqIGBkZXN0cm95KClgLCBhbmQgYSBuZXcgbWV0aG9kLCBgZW1pdCgpYC4gVXNlIGBlbWl0KClgIHRvIG1hbnVhbGx5IGVtaXQgRHJha2VcbiAqIGV2ZW50cywgYW5kIGlmIHlvdSBpbmplY3RlZCBNb2NrRHJha2UgcHJvcGVybHkgd2l0aCBNb2NrRHJha2VGYWN0b3J5IG9yXG4gKiBtb2NrZWQgdGhlIERyYWd1bGFTZXJ2aWNlLmZpbmQoKSBtZXRob2QsIHRoZW4geW91IGNhbiBtYWtlIG5nMi1kcmFndWxhIHRoaW5rXG4gKiBkcmFncyBhbmQgZHJvcHMgYXJlIGhhcHBlbmluZy5cbiAqXG4gKiBDYXZlYXRzOlxuICpcbiAqIDEuIFlPVSBNVVNUIE1BS0UgVEhFIERPTSBDSEFOR0VTIFlPVVJTRUxGLlxuICogMi4gUkVQRUFUOiBZT1UgTVVTVCBNQUtFIFRIRSBET00gQ0hBTkdFUyBZT1VSU0VMRi5cbiAqICAgIFRoYXQgbWVhbnMgYHNvdXJjZS5yZW1vdmVDaGlsZChlbClgLCBhbmQgYHRhcmdldC5pbnNlcnRCZWZvcmUoZWwpYC5cbiAqIDMuIE5vbmUgb2YgdGhlIG90aGVyIG1ldGhvZHMgZG8gYW55dGhpbmcuXG4gKiAgICBUaGF0J3Mgb2ssIGJlY2F1c2UgbmcyLWRyYWd1bGEgZG9lc24ndCB1c2UgdGhlbS5cbiAqL1xuY2xhc3MgTW9ja0RyYWtlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez89fSBjb250YWluZXJzIEEgbGlzdCBvZiBjb250YWluZXIgZWxlbWVudHMuXG4gICAgICogQHBhcmFtIHs/PX0gb3B0aW9ucyBUaGVzZSB3aWxsIE5PVCBiZSB1c2VkLiBBdCBhbGwuXG4gICAgICogQHBhcmFtIHs/PX0gbW9kZWxzIE5vbnN0YW5kYXJkLCBidXQgdXNlZnVsIGZvciB0ZXN0aW5nIHVzaW5nIGBuZXcgTW9ja0RyYWtlKClgIGRpcmVjdGx5LlxuICAgICAqICAgICAgICAgICAgICAgTm90ZSwgZGVmYXVsdCB2YWx1ZSBpcyB1bmRlZmluZWQsIGxpa2UgYSByZWFsIERyYWtlLiBEb24ndCBjaGFuZ2UgdGhhdC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXJzID0gW10sIG9wdGlvbnMgPSB7fSwgbW9kZWxzKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVycyA9IGNvbnRhaW5lcnM7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMubW9kZWxzID0gbW9kZWxzO1xuICAgICAgICAvKiBEb2Vzbid0IHJlcHJlc2VudCBhbnl0aGluZyBtZWFuaW5nZnVsLiAqL1xuICAgICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW1pdHRlciQgPSBuZXcgU3ViamVjdCgpO1xuICAgICAgICB0aGlzLnN1YnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gaXRlbVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgc3RhcnQoaXRlbSkge1xuICAgICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBlbmQoKSB7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/PX0gcmV2ZXJ0XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBjYW5jZWwocmV2ZXJ0KSB7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBldmVudFxuICAgICAqIEBwYXJhbSB7P30gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIG9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnN1YnMuYWRkKHRoaXMuZW1pdHRlciRcbiAgICAgICAgICAgIC5waXBlKGZpbHRlcigoeyBldmVudFR5cGUgfSkgPT4gZXZlbnRUeXBlID09PSBldmVudCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCh7IGFyZ3MgfSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soLi4uYXJncyk7XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB0aGUgbW9zdCB1c2VmdWwgbWV0aG9kLiBZb3UgY2FuIHVzZSBpdCB0byBtYW51YWxseSBmaXJlIGV2ZW50cyB0aGF0IHdvdWxkIG5vcm1hbGx5XG4gICAgICogYmUgZmlyZWQgYnkgYSByZWFsIGRyYWtlLlxuICAgICAqXG4gICAgICogWW91J3JlIGxpa2VseSBtb3N0IGludGVyZXN0ZWQgaW4gZmlyaW5nIGBkcmFnYCwgYHJlbW92ZWAgYW5kIGBkcm9wYCwgdGhlIHRocmVlIGV2ZW50c1xuICAgICAqIERyYWd1bGFTZXJ2aWNlIHVzZXMgdG8gaW1wbGVtZW50IFtkcmFndWxhTW9kZWxdLlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhI2RyYWtlb24tZXZlbnRzIGZvciB3aGF0IHlvdSBzaG91bGQgZW1pdCAoYW5kIGluIHdoYXQgb3JkZXIpLlxuICAgICAqXG4gICAgICogKE5vdGUgYWxzbywgZmlyaW5nIGRyb3BNb2RlbCBhbmQgcmVtb3ZlTW9kZWwgd29uJ3Qgd29yay4gWW91IHdvdWxkIGhhdmUgdG8gbW9jayBEcmFndWxhU2VydmljZSBmb3IgdGhhdC4pXG4gICAgICogQHBhcmFtIHs/fSBldmVudFR5cGVcbiAgICAgKiBAcGFyYW0gey4uLj99IGFyZ3NcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGVtaXQoZXZlbnRUeXBlLCAuLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuZW1pdHRlciQubmV4dCh7IGV2ZW50VHlwZSwgYXJncyB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuXG5leHBvcnQgeyBEcmFndWxhRGlyZWN0aXZlLCBEcmFndWxhU2VydmljZSwgRHJhZ3VsYU1vZHVsZSwgZHJhZ3VsYSwgRHJha2VGYWN0b3J5LCBHcm91cCwgRXZlbnRUeXBlcywgTW9ja0RyYWtlLCBNb2NrRHJha2VGYWN0b3J5IH07XG4iXX0=

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/drag-drop/drag-drop.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/drag-drop/drag-drop.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDragDropDragDropComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row wrap\" fxLayout.xs=\"column\" [dragula]=\"'bag-container'\">\r\n    <div *ngFor=\"let icon of icons\" fxFlex=\"33.3\" class=\"flex-p\"> \r\n        <mat-card class=\"draggable\">            \r\n            <mat-card-header fxLayoutAlign=\"center\">\r\n                <mat-card-subtitle fxLayoutAlign=\"center\">\r\n                    <mat-icon class=\"icon-lg\">{{icon}}</mat-icon>\r\n                </mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content class=\"text-center\">\r\n                There's also the possibility of moving elements around in the same container, changing their position.\r\n            </mat-card-content>           \r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<div fxLayout=\"row\">\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>            \r\n            <mat-card-header fxLayoutAlign=\"center\">\r\n                <mat-card-subtitle fxLayoutAlign=\"center\">\r\n                    <h2>First Container</h2> \r\n                </mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content [dragula]=\"'bag-1'\" class=\"bag\">\r\n                <mat-card *ngFor=\"let color of colors\" [class.bg-primary]=\"color=='primary'\" [class.bg-accent]=\"color=='accent'\" [class.bg-warn]=\"color=='warn'\" class=\"draggable\">\r\n                    You can move these elements between these two containers\r\n                </mat-card>                 \r\n            </mat-card-content>           \r\n        </mat-card> \r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>            \r\n            <mat-card-header fxLayoutAlign=\"center\">\r\n                <mat-card-subtitle fxLayoutAlign=\"center\">\r\n                    <h2>Second Container</h2> \r\n                </mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content [dragula]=\"'bag-1'\" class=\"bag\">\r\n                <mat-card *ngFor=\"let color of colors\" [class.bg-primary]=\"color=='primary'\" [class.bg-accent]=\"color=='accent'\" [class.bg-warn]=\"color=='warn'\"  class=\"draggable\">\r\n                    You can move these elements between these two containers\r\n                </mat-card>                 \r\n            </mat-card-content>          \r\n        </mat-card> \r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/ticky/ticky-browser.js":
  /*!*********************************************!*\
    !*** ./node_modules/ticky/ticky-browser.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesTickyTickyBrowserJs(module, exports) {
    var si = typeof setImmediate === 'function',
        tick;

    if (si) {
      tick = function tick(fn) {
        setImmediate(fn);
      };
    } else {
      tick = function tick(fn) {
        setTimeout(fn, 0);
      };
    }

    module.exports = tick;
    /***/
  },

  /***/
  "./src/app/pages/drag-drop/drag-drop.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/drag-drop/drag-drop.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDragDropDragDropComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bag {\n  min-height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZHJhZy1kcm9wL0Q6XFwzNzBcXFByb2plY3QgY29kZVxcZ3JhZHVzL3NyY1xcYXBwXFxwYWdlc1xcZHJhZy1kcm9wXFxkcmFnLWRyb3AuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RyYWctZHJvcC9kcmFnLWRyb3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZHJhZy1kcm9wL2RyYWctZHJvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWd7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG59IiwiLmJhZyB7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/drag-drop/drag-drop.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/drag-drop/drag-drop.component.ts ***!
    \********************************************************/

  /*! exports provided: DragDropComponent */

  /***/
  function srcAppPagesDragDropDragDropComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDropComponent", function () {
      return DragDropComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../app.settings */
    "./src/app/app.settings.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DragDropComponent = function DragDropComponent(appSettings) {
      _classCallCheck(this, DragDropComponent);

      this.appSettings = appSettings;
      this.icons = ["home", "person", "alarm", "work", "mail", "favorite"];
      this.colors = ["accent", "primary", "warn"];
      this.settings = this.appSettings.settings;
    };

    DragDropComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]
      }];
    };

    DragDropComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-drag-drop',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./drag-drop.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/drag-drop/drag-drop.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./drag-drop.component.scss */
      "./src/app/pages/drag-drop/drag-drop.component.scss")).default]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])], DragDropComponent);
    /***/
  },

  /***/
  "./src/app/pages/drag-drop/drag-drop.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/drag-drop/drag-drop.module.ts ***!
    \*****************************************************/

  /*! exports provided: routes, DragDropModule */

  /***/
  function srcAppPagesDragDropDragDropModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDropModule", function () {
      return DragDropModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng2_dragula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-dragula */
    "./node_modules/ng2-dragula/__ivy_ngcc__/dist/fesm2015/ng2-dragula.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _drag_drop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./drag-drop.component */
    "./src/app/pages/drag-drop/drag-drop.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: '',
      component: _drag_drop_component__WEBPACK_IMPORTED_MODULE_5__["DragDropComponent"],
      pathMatch: 'full'
    }];

    var DragDropModule = function DragDropModule() {
      _classCallCheck(this, DragDropModule);
    };

    DragDropModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), ng2_dragula__WEBPACK_IMPORTED_MODULE_3__["DragulaModule"].forRoot(), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
      declarations: [_drag_drop_component__WEBPACK_IMPORTED_MODULE_5__["DragDropComponent"]]
    })], DragDropModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-drag-drop-drag-drop-module-es5.js.map