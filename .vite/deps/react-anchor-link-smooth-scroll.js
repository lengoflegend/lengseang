import {
  __commonJS,
  require_react
} from "./chunk-Y455YYDO.js";

// node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js
var require_anchor_link = __commonJS({
  "node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory(require_react());
      else if (typeof define === "function" && define.amd)
        define(["react"], factory);
      else if (typeof exports === "object")
        exports["anchor-link"] = factory(require_react());
      else
        root["anchor-link"] = factory(root["react"]);
    })(typeof self !== "undefined" ? self : exports, function(__WEBPACK_EXTERNAL_MODULE_2__) {
      return (
        /******/
        function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
              return installedModules[moduleId].exports;
            }
            var module2 = installedModules[moduleId] = {
              /******/
              i: moduleId,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
            module2.l = true;
            return module2.exports;
          }
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.d = function(exports2, name, getter) {
            if (!__webpack_require__.o(exports2, name)) {
              Object.defineProperty(exports2, name, {
                /******/
                configurable: false,
                /******/
                enumerable: true,
                /******/
                get: getter
                /******/
              });
            }
          };
          __webpack_require__.n = function(module2) {
            var getter = module2 && module2.__esModule ? (
              /******/
              function getDefault() {
                return module2["default"];
              }
            ) : (
              /******/
              function getModuleExports() {
                return module2;
              }
            );
            __webpack_require__.d(getter, "a", getter);
            return getter;
          };
          __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          __webpack_require__.p = "";
          return __webpack_require__(__webpack_require__.s = 0);
        }([
          /* 0 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _anchorLink = __webpack_require__(1);
            var _anchorLink2 = _interopRequireDefault(_anchorLink);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _anchorLink2.default;
          },
          /* 1 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _extends = Object.assign || function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _react = __webpack_require__(2);
            var _react2 = _interopRequireDefault(_react);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _objectWithoutProperties(obj, keys) {
              var target = {};
              for (var i in obj) {
                if (keys.indexOf(i) >= 0) continue;
                if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
                target[i] = obj[i];
              }
              return target;
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var AnchorLink = function(_Component) {
              _inherits(AnchorLink2, _Component);
              function AnchorLink2(props) {
                _classCallCheck(this, AnchorLink2);
                var _this = _possibleConstructorReturn(this, (AnchorLink2.__proto__ || Object.getPrototypeOf(AnchorLink2)).call(this, props));
                _this.smoothScroll = _this.smoothScroll.bind(_this);
                return _this;
              }
              _createClass(AnchorLink2, [{
                key: "componentDidMount",
                value: function componentDidMount() {
                  __webpack_require__(3).polyfill();
                }
              }, {
                key: "smoothScroll",
                value: function smoothScroll(e) {
                  var _this2 = this;
                  e.preventDefault();
                  var offset = function offset2() {
                    return 0;
                  };
                  if (typeof this.props.offset !== "undefined") {
                    if (!!(this.props.offset && this.props.offset.constructor && this.props.offset.apply)) {
                      offset = this.props.offset;
                    } else {
                      offset = function offset2() {
                        return parseInt(_this2.props.offset);
                      };
                    }
                  }
                  var id = e.currentTarget.getAttribute("href").slice(1);
                  var $anchor = document.getElementById(id);
                  var offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset;
                  window.scroll({
                    top: offsetTop - offset(),
                    behavior: "smooth"
                  });
                  if (this.props.onClick) {
                    this.props.onClick(e);
                  }
                }
              }, {
                key: "render",
                value: function render() {
                  var _props = this.props, offset = _props.offset, rest = _objectWithoutProperties(_props, ["offset"]);
                  return _react2.default.createElement("a", _extends({}, rest, { onClick: this.smoothScroll }));
                }
              }]);
              return AnchorLink2;
            }(_react.Component);
            exports2.default = AnchorLink;
          },
          /* 2 */
          /***/
          function(module2, exports2) {
            module2.exports = __WEBPACK_EXTERNAL_MODULE_2__;
          },
          /* 3 */
          /***/
          function(module2, exports2, __webpack_require__) {
            (function() {
              "use strict";
              function polyfill() {
                var w = window;
                var d = document;
                if ("scrollBehavior" in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
                  return;
                }
                var Element = w.HTMLElement || w.Element;
                var SCROLL_TIME = 468;
                var original = {
                  scroll: w.scroll || w.scrollTo,
                  scrollBy: w.scrollBy,
                  elementScroll: Element.prototype.scroll || scrollElement,
                  scrollIntoView: Element.prototype.scrollIntoView
                };
                var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
                function isMicrosoftBrowser(userAgent) {
                  var userAgentPatterns = ["MSIE ", "Trident/", "Edge/"];
                  return new RegExp(userAgentPatterns.join("|")).test(userAgent);
                }
                var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
                function scrollElement(x, y) {
                  this.scrollLeft = x;
                  this.scrollTop = y;
                }
                function ease(k) {
                  return 0.5 * (1 - Math.cos(Math.PI * k));
                }
                function shouldBailOut(firstArg) {
                  if (firstArg === null || typeof firstArg !== "object" || firstArg.behavior === void 0 || firstArg.behavior === "auto" || firstArg.behavior === "instant") {
                    return true;
                  }
                  if (typeof firstArg === "object" && firstArg.behavior === "smooth") {
                    return false;
                  }
                  throw new TypeError(
                    "behavior member of ScrollOptions " + firstArg.behavior + " is not a valid value for enumeration ScrollBehavior."
                  );
                }
                function hasScrollableSpace(el, axis) {
                  if (axis === "Y") {
                    return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
                  }
                  if (axis === "X") {
                    return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
                  }
                }
                function canOverflow(el, axis) {
                  var overflowValue = w.getComputedStyle(el, null)["overflow" + axis];
                  return overflowValue === "auto" || overflowValue === "scroll";
                }
                function isScrollable(el) {
                  var isScrollableY = hasScrollableSpace(el, "Y") && canOverflow(el, "Y");
                  var isScrollableX = hasScrollableSpace(el, "X") && canOverflow(el, "X");
                  return isScrollableY || isScrollableX;
                }
                function findScrollableParent(el) {
                  var isBody;
                  do {
                    el = el.parentNode;
                    isBody = el === d.body;
                  } while (isBody === false && isScrollable(el) === false);
                  isBody = null;
                  return el;
                }
                function step(context) {
                  var time = now();
                  var value;
                  var currentX;
                  var currentY;
                  var elapsed = (time - context.startTime) / SCROLL_TIME;
                  elapsed = elapsed > 1 ? 1 : elapsed;
                  value = ease(elapsed);
                  currentX = context.startX + (context.x - context.startX) * value;
                  currentY = context.startY + (context.y - context.startY) * value;
                  context.method.call(context.scrollable, currentX, currentY);
                  if (currentX !== context.x || currentY !== context.y) {
                    w.requestAnimationFrame(step.bind(w, context));
                  }
                }
                function smoothScroll(el, x, y) {
                  var scrollable;
                  var startX;
                  var startY;
                  var method;
                  var startTime = now();
                  if (el === d.body) {
                    scrollable = w;
                    startX = w.scrollX || w.pageXOffset;
                    startY = w.scrollY || w.pageYOffset;
                    method = original.scroll;
                  } else {
                    scrollable = el;
                    startX = el.scrollLeft;
                    startY = el.scrollTop;
                    method = scrollElement;
                  }
                  step({
                    scrollable,
                    method,
                    startTime,
                    startX,
                    startY,
                    x,
                    y
                  });
                }
                w.scroll = w.scrollTo = function() {
                  if (arguments[0] === void 0) {
                    return;
                  }
                  if (shouldBailOut(arguments[0]) === true) {
                    original.scroll.call(
                      w,
                      arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : w.scrollX || w.pageXOffset,
                      // use top prop, second argument if present or fallback to scrollY
                      arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : w.scrollY || w.pageYOffset
                    );
                    return;
                  }
                  smoothScroll.call(
                    w,
                    d.body,
                    arguments[0].left !== void 0 ? ~~arguments[0].left : w.scrollX || w.pageXOffset,
                    arguments[0].top !== void 0 ? ~~arguments[0].top : w.scrollY || w.pageYOffset
                  );
                };
                w.scrollBy = function() {
                  if (arguments[0] === void 0) {
                    return;
                  }
                  if (shouldBailOut(arguments[0])) {
                    original.scrollBy.call(
                      w,
                      arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : 0,
                      arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : 0
                    );
                    return;
                  }
                  smoothScroll.call(
                    w,
                    d.body,
                    ~~arguments[0].left + (w.scrollX || w.pageXOffset),
                    ~~arguments[0].top + (w.scrollY || w.pageYOffset)
                  );
                };
                Element.prototype.scroll = Element.prototype.scrollTo = function() {
                  if (arguments[0] === void 0) {
                    return;
                  }
                  if (shouldBailOut(arguments[0]) === true) {
                    if (typeof arguments[0] === "number" && arguments[1] === void 0) {
                      throw new SyntaxError("Value could not be converted");
                    }
                    original.elementScroll.call(
                      this,
                      // use left prop, first number argument or fallback to scrollLeft
                      arguments[0].left !== void 0 ? ~~arguments[0].left : typeof arguments[0] !== "object" ? ~~arguments[0] : this.scrollLeft,
                      // use top prop, second argument or fallback to scrollTop
                      arguments[0].top !== void 0 ? ~~arguments[0].top : arguments[1] !== void 0 ? ~~arguments[1] : this.scrollTop
                    );
                    return;
                  }
                  var left = arguments[0].left;
                  var top = arguments[0].top;
                  smoothScroll.call(
                    this,
                    this,
                    typeof left === "undefined" ? this.scrollLeft : ~~left,
                    typeof top === "undefined" ? this.scrollTop : ~~top
                  );
                };
                Element.prototype.scrollBy = function() {
                  if (arguments[0] === void 0) {
                    return;
                  }
                  if (shouldBailOut(arguments[0]) === true) {
                    original.elementScroll.call(
                      this,
                      arguments[0].left !== void 0 ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft,
                      arguments[0].top !== void 0 ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop
                    );
                    return;
                  }
                  this.scroll({
                    left: ~~arguments[0].left + this.scrollLeft,
                    top: ~~arguments[0].top + this.scrollTop,
                    behavior: arguments[0].behavior
                  });
                };
                Element.prototype.scrollIntoView = function() {
                  if (shouldBailOut(arguments[0]) === true) {
                    original.scrollIntoView.call(
                      this,
                      arguments[0] === void 0 ? true : arguments[0]
                    );
                    return;
                  }
                  var scrollableParent = findScrollableParent(this);
                  var parentRects = scrollableParent.getBoundingClientRect();
                  var clientRects = this.getBoundingClientRect();
                  if (scrollableParent !== d.body) {
                    smoothScroll.call(
                      this,
                      scrollableParent,
                      scrollableParent.scrollLeft + clientRects.left - parentRects.left,
                      scrollableParent.scrollTop + clientRects.top - parentRects.top
                    );
                    if (w.getComputedStyle(scrollableParent).position !== "fixed") {
                      w.scrollBy({
                        left: parentRects.left,
                        top: parentRects.top,
                        behavior: "smooth"
                      });
                    }
                  } else {
                    w.scrollBy({
                      left: clientRects.left,
                      top: clientRects.top,
                      behavior: "smooth"
                    });
                  }
                };
              }
              if (true) {
                module2.exports = { polyfill };
              } else {
                polyfill();
              }
            })();
          }
          /******/
        ])
      );
    });
  }
});
export default require_anchor_link();
//# sourceMappingURL=react-anchor-link-smooth-scroll.js.map
