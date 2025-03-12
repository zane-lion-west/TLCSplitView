import {
  require_react
} from "./chunk-WNPTCGAH.js";
import {
  require_prop_types
} from "./chunk-ZNAOO6ZH.js";
import {
  __commonJS
} from "./chunk-5WRI5ZAA.js";

// node_modules/react-motion/lib/mapToZero.js
var require_mapToZero = __commonJS({
  "node_modules/react-motion/lib/mapToZero.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = mapToZero;
    function mapToZero(obj) {
      var ret = {};
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          ret[key] = 0;
        }
      }
      return ret;
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-motion/lib/stripStyle.js
var require_stripStyle = __commonJS({
  "node_modules/react-motion/lib/stripStyle.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = stripStyle;
    function stripStyle(style) {
      var ret = {};
      for (var key in style) {
        if (!Object.prototype.hasOwnProperty.call(style, key)) {
          continue;
        }
        ret[key] = typeof style[key] === "number" ? style[key] : style[key].val;
      }
      return ret;
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-motion/lib/stepper.js
var require_stepper = __commonJS({
  "node_modules/react-motion/lib/stepper.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = stepper;
    var reusedTuple = [0, 0];
    function stepper(secondPerFrame, x, v, destX, k, b, precision) {
      var Fspring = -k * (x - destX);
      var Fdamper = -b * v;
      var a = Fspring + Fdamper;
      var newV = v + a * secondPerFrame;
      var newX = x + newV * secondPerFrame;
      if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
        reusedTuple[0] = destX;
        reusedTuple[1] = 0;
        return reusedTuple;
      }
      reusedTuple[0] = newX;
      reusedTuple[1] = newV;
      return reusedTuple;
    }
    module.exports = exports["default"];
  }
});

// node_modules/performance-now/lib/performance-now.js
var require_performance_now = __commonJS({
  "node_modules/performance-now/lib/performance-now.js"(exports, module) {
    (function() {
      var getNanoSeconds, hrtime, loadTime;
      if (typeof performance !== "undefined" && performance !== null && performance.now) {
        module.exports = function() {
          return performance.now();
        };
      } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
        module.exports = function() {
          return (getNanoSeconds() - loadTime) / 1e6;
        };
        hrtime = process.hrtime;
        getNanoSeconds = function() {
          var hr;
          hr = hrtime();
          return hr[0] * 1e9 + hr[1];
        };
        loadTime = getNanoSeconds();
      } else if (Date.now) {
        module.exports = function() {
          return Date.now() - loadTime;
        };
        loadTime = Date.now();
      } else {
        module.exports = function() {
          return (/* @__PURE__ */ new Date()).getTime() - loadTime;
        };
        loadTime = (/* @__PURE__ */ new Date()).getTime();
      }
    }).call(exports);
  }
});

// node_modules/raf/node_modules/performance-now/lib/performance-now.js
var require_performance_now2 = __commonJS({
  "node_modules/raf/node_modules/performance-now/lib/performance-now.js"(exports, module) {
    (function() {
      var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
      if (typeof performance !== "undefined" && performance !== null && performance.now) {
        module.exports = function() {
          return performance.now();
        };
      } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
        module.exports = function() {
          return (getNanoSeconds() - nodeLoadTime) / 1e6;
        };
        hrtime = process.hrtime;
        getNanoSeconds = function() {
          var hr;
          hr = hrtime();
          return hr[0] * 1e9 + hr[1];
        };
        moduleLoadTime = getNanoSeconds();
        upTime = process.uptime() * 1e9;
        nodeLoadTime = moduleLoadTime - upTime;
      } else if (Date.now) {
        module.exports = function() {
          return Date.now() - loadTime;
        };
        loadTime = Date.now();
      } else {
        module.exports = function() {
          return (/* @__PURE__ */ new Date()).getTime() - loadTime;
        };
        loadTime = (/* @__PURE__ */ new Date()).getTime();
      }
    }).call(exports);
  }
});

// node_modules/raf/index.js
var require_raf = __commonJS({
  "node_modules/raf/index.js"(exports, module) {
    var now = require_performance_now2();
    var root = typeof window === "undefined" ? global : window;
    var vendors = ["moz", "webkit"];
    var suffix = "AnimationFrame";
    var raf = root["request" + suffix];
    var caf = root["cancel" + suffix] || root["cancelRequest" + suffix];
    for (i = 0; !raf && i < vendors.length; i++) {
      raf = root[vendors[i] + "Request" + suffix];
      caf = root[vendors[i] + "Cancel" + suffix] || root[vendors[i] + "CancelRequest" + suffix];
    }
    var i;
    if (!raf || !caf) {
      last = 0, id = 0, queue = [], frameDuration = 1e3 / 60;
      raf = function(callback) {
        if (queue.length === 0) {
          var _now = now(), next = Math.max(0, frameDuration - (_now - last));
          last = next + _now;
          setTimeout(function() {
            var cp = queue.slice(0);
            queue.length = 0;
            for (var i2 = 0; i2 < cp.length; i2++) {
              if (!cp[i2].cancelled) {
                try {
                  cp[i2].callback(last);
                } catch (e) {
                  setTimeout(function() {
                    throw e;
                  }, 0);
                }
              }
            }
          }, Math.round(next));
        }
        queue.push({
          handle: ++id,
          callback,
          cancelled: false
        });
        return id;
      };
      caf = function(handle) {
        for (var i2 = 0; i2 < queue.length; i2++) {
          if (queue[i2].handle === handle) {
            queue[i2].cancelled = true;
          }
        }
      };
    }
    var last;
    var id;
    var queue;
    var frameDuration;
    module.exports = function(fn) {
      return raf.call(root, fn);
    };
    module.exports.cancel = function() {
      caf.apply(root, arguments);
    };
    module.exports.polyfill = function(object) {
      if (!object) {
        object = root;
      }
      object.requestAnimationFrame = raf;
      object.cancelAnimationFrame = caf;
    };
  }
});

// node_modules/react-motion/lib/shouldStopAnimation.js
var require_shouldStopAnimation = __commonJS({
  "node_modules/react-motion/lib/shouldStopAnimation.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = shouldStopAnimation;
    function shouldStopAnimation(currentStyle, style, currentVelocity) {
      for (var key in style) {
        if (!Object.prototype.hasOwnProperty.call(style, key)) {
          continue;
        }
        if (currentVelocity[key] !== 0) {
          return false;
        }
        var styleValue = typeof style[key] === "number" ? style[key] : style[key].val;
        if (currentStyle[key] !== styleValue) {
          return false;
        }
      }
      return true;
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-motion/lib/Motion.js
var require_Motion = __commonJS({
  "node_modules/react-motion/lib/Motion.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
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
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var _mapToZero = require_mapToZero();
    var _mapToZero2 = _interopRequireDefault(_mapToZero);
    var _stripStyle = require_stripStyle();
    var _stripStyle2 = _interopRequireDefault(_stripStyle);
    var _stepper3 = require_stepper();
    var _stepper4 = _interopRequireDefault(_stepper3);
    var _performanceNow = require_performance_now();
    var _performanceNow2 = _interopRequireDefault(_performanceNow);
    var _raf = require_raf();
    var _raf2 = _interopRequireDefault(_raf);
    var _shouldStopAnimation = require_shouldStopAnimation();
    var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var msPerFrame = 1e3 / 60;
    var Motion = function(_React$Component) {
      _inherits(Motion2, _React$Component);
      _createClass(Motion2, null, [{
        key: "propTypes",
        value: {
          // TOOD: warn against putting a config in here
          defaultStyle: _propTypes2["default"].objectOf(_propTypes2["default"].number),
          style: _propTypes2["default"].objectOf(_propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].object])).isRequired,
          children: _propTypes2["default"].func.isRequired,
          onRest: _propTypes2["default"].func
        },
        enumerable: true
      }]);
      function Motion2(props) {
        var _this = this;
        _classCallCheck(this, Motion2);
        _React$Component.call(this, props);
        this.wasAnimating = false;
        this.animationID = null;
        this.prevTime = 0;
        this.accumulatedTime = 0;
        this.unreadPropStyle = null;
        this.clearUnreadPropStyle = function(destStyle) {
          var dirty = false;
          var _state = _this.state;
          var currentStyle = _state.currentStyle;
          var currentVelocity = _state.currentVelocity;
          var lastIdealStyle = _state.lastIdealStyle;
          var lastIdealVelocity = _state.lastIdealVelocity;
          for (var key in destStyle) {
            if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
              continue;
            }
            var styleValue = destStyle[key];
            if (typeof styleValue === "number") {
              if (!dirty) {
                dirty = true;
                currentStyle = _extends({}, currentStyle);
                currentVelocity = _extends({}, currentVelocity);
                lastIdealStyle = _extends({}, lastIdealStyle);
                lastIdealVelocity = _extends({}, lastIdealVelocity);
              }
              currentStyle[key] = styleValue;
              currentVelocity[key] = 0;
              lastIdealStyle[key] = styleValue;
              lastIdealVelocity[key] = 0;
            }
          }
          if (dirty) {
            _this.setState({ currentStyle, currentVelocity, lastIdealStyle, lastIdealVelocity });
          }
        };
        this.startAnimationIfNecessary = function() {
          _this.animationID = _raf2["default"](function(timestamp) {
            var propsStyle = _this.props.style;
            if (_shouldStopAnimation2["default"](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
              if (_this.wasAnimating && _this.props.onRest) {
                _this.props.onRest();
              }
              _this.animationID = null;
              _this.wasAnimating = false;
              _this.accumulatedTime = 0;
              return;
            }
            _this.wasAnimating = true;
            var currentTime = timestamp || _performanceNow2["default"]();
            var timeDelta = currentTime - _this.prevTime;
            _this.prevTime = currentTime;
            _this.accumulatedTime = _this.accumulatedTime + timeDelta;
            if (_this.accumulatedTime > msPerFrame * 10) {
              _this.accumulatedTime = 0;
            }
            if (_this.accumulatedTime === 0) {
              _this.animationID = null;
              _this.startAnimationIfNecessary();
              return;
            }
            var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
            var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
            var newLastIdealStyle = {};
            var newLastIdealVelocity = {};
            var newCurrentStyle = {};
            var newCurrentVelocity = {};
            for (var key in propsStyle) {
              if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
                continue;
              }
              var styleValue = propsStyle[key];
              if (typeof styleValue === "number") {
                newCurrentStyle[key] = styleValue;
                newCurrentVelocity[key] = 0;
                newLastIdealStyle[key] = styleValue;
                newLastIdealVelocity[key] = 0;
              } else {
                var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
                var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
                for (var i = 0; i < framesToCatchUp; i++) {
                  var _stepper = _stepper4["default"](msPerFrame / 1e3, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
                  newLastIdealStyleValue = _stepper[0];
                  newLastIdealVelocityValue = _stepper[1];
                }
                var _stepper2 = _stepper4["default"](msPerFrame / 1e3, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
                var nextIdealX = _stepper2[0];
                var nextIdealV = _stepper2[1];
                newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
                newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
                newLastIdealStyle[key] = newLastIdealStyleValue;
                newLastIdealVelocity[key] = newLastIdealVelocityValue;
              }
            }
            _this.animationID = null;
            _this.accumulatedTime -= framesToCatchUp * msPerFrame;
            _this.setState({
              currentStyle: newCurrentStyle,
              currentVelocity: newCurrentVelocity,
              lastIdealStyle: newLastIdealStyle,
              lastIdealVelocity: newLastIdealVelocity
            });
            _this.unreadPropStyle = null;
            _this.startAnimationIfNecessary();
          });
        };
        this.state = this.defaultState();
      }
      Motion2.prototype.defaultState = function defaultState() {
        var _props = this.props;
        var defaultStyle = _props.defaultStyle;
        var style = _props.style;
        var currentStyle = defaultStyle || _stripStyle2["default"](style);
        var currentVelocity = _mapToZero2["default"](currentStyle);
        return {
          currentStyle,
          currentVelocity,
          lastIdealStyle: currentStyle,
          lastIdealVelocity: currentVelocity
        };
      };
      Motion2.prototype.componentDidMount = function componentDidMount() {
        this.prevTime = _performanceNow2["default"]();
        this.startAnimationIfNecessary();
      };
      Motion2.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (this.unreadPropStyle != null) {
          this.clearUnreadPropStyle(this.unreadPropStyle);
        }
        this.unreadPropStyle = props.style;
        if (this.animationID == null) {
          this.prevTime = _performanceNow2["default"]();
          this.startAnimationIfNecessary();
        }
      };
      Motion2.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.animationID != null) {
          _raf2["default"].cancel(this.animationID);
          this.animationID = null;
        }
      };
      Motion2.prototype.render = function render() {
        var renderedChildren = this.props.children(this.state.currentStyle);
        return renderedChildren && _react2["default"].Children.only(renderedChildren);
      };
      return Motion2;
    }(_react2["default"].Component);
    exports["default"] = Motion;
    module.exports = exports["default"];
  }
});

// node_modules/react-motion/lib/StaggeredMotion.js
var require_StaggeredMotion = __commonJS({
  "node_modules/react-motion/lib/StaggeredMotion.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
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
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var _mapToZero = require_mapToZero();
    var _mapToZero2 = _interopRequireDefault(_mapToZero);
    var _stripStyle = require_stripStyle();
    var _stripStyle2 = _interopRequireDefault(_stripStyle);
    var _stepper3 = require_stepper();
    var _stepper4 = _interopRequireDefault(_stepper3);
    var _performanceNow = require_performance_now();
    var _performanceNow2 = _interopRequireDefault(_performanceNow);
    var _raf = require_raf();
    var _raf2 = _interopRequireDefault(_raf);
    var _shouldStopAnimation = require_shouldStopAnimation();
    var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var msPerFrame = 1e3 / 60;
    function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
      for (var i = 0; i < currentStyles.length; i++) {
        if (!_shouldStopAnimation2["default"](currentStyles[i], styles[i], currentVelocities[i])) {
          return false;
        }
      }
      return true;
    }
    var StaggeredMotion = function(_React$Component) {
      _inherits(StaggeredMotion2, _React$Component);
      _createClass(StaggeredMotion2, null, [{
        key: "propTypes",
        value: {
          // TOOD: warn against putting a config in here
          defaultStyles: _propTypes2["default"].arrayOf(_propTypes2["default"].objectOf(_propTypes2["default"].number)),
          styles: _propTypes2["default"].func.isRequired,
          children: _propTypes2["default"].func.isRequired
        },
        enumerable: true
      }]);
      function StaggeredMotion2(props) {
        var _this = this;
        _classCallCheck(this, StaggeredMotion2);
        _React$Component.call(this, props);
        this.animationID = null;
        this.prevTime = 0;
        this.accumulatedTime = 0;
        this.unreadPropStyles = null;
        this.clearUnreadPropStyle = function(unreadPropStyles) {
          var _state = _this.state;
          var currentStyles = _state.currentStyles;
          var currentVelocities = _state.currentVelocities;
          var lastIdealStyles = _state.lastIdealStyles;
          var lastIdealVelocities = _state.lastIdealVelocities;
          var someDirty = false;
          for (var i = 0; i < unreadPropStyles.length; i++) {
            var unreadPropStyle = unreadPropStyles[i];
            var dirty = false;
            for (var key in unreadPropStyle) {
              if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
                continue;
              }
              var styleValue = unreadPropStyle[key];
              if (typeof styleValue === "number") {
                if (!dirty) {
                  dirty = true;
                  someDirty = true;
                  currentStyles[i] = _extends({}, currentStyles[i]);
                  currentVelocities[i] = _extends({}, currentVelocities[i]);
                  lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
                  lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
                }
                currentStyles[i][key] = styleValue;
                currentVelocities[i][key] = 0;
                lastIdealStyles[i][key] = styleValue;
                lastIdealVelocities[i][key] = 0;
              }
            }
          }
          if (someDirty) {
            _this.setState({ currentStyles, currentVelocities, lastIdealStyles, lastIdealVelocities });
          }
        };
        this.startAnimationIfNecessary = function() {
          _this.animationID = _raf2["default"](function(timestamp) {
            var destStyles = _this.props.styles(_this.state.lastIdealStyles);
            if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
              _this.animationID = null;
              _this.accumulatedTime = 0;
              return;
            }
            var currentTime = timestamp || _performanceNow2["default"]();
            var timeDelta = currentTime - _this.prevTime;
            _this.prevTime = currentTime;
            _this.accumulatedTime = _this.accumulatedTime + timeDelta;
            if (_this.accumulatedTime > msPerFrame * 10) {
              _this.accumulatedTime = 0;
            }
            if (_this.accumulatedTime === 0) {
              _this.animationID = null;
              _this.startAnimationIfNecessary();
              return;
            }
            var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
            var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
            var newLastIdealStyles = [];
            var newLastIdealVelocities = [];
            var newCurrentStyles = [];
            var newCurrentVelocities = [];
            for (var i = 0; i < destStyles.length; i++) {
              var destStyle = destStyles[i];
              var newCurrentStyle = {};
              var newCurrentVelocity = {};
              var newLastIdealStyle = {};
              var newLastIdealVelocity = {};
              for (var key in destStyle) {
                if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
                  continue;
                }
                var styleValue = destStyle[key];
                if (typeof styleValue === "number") {
                  newCurrentStyle[key] = styleValue;
                  newCurrentVelocity[key] = 0;
                  newLastIdealStyle[key] = styleValue;
                  newLastIdealVelocity[key] = 0;
                } else {
                  var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
                  var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
                  for (var j = 0; j < framesToCatchUp; j++) {
                    var _stepper = _stepper4["default"](msPerFrame / 1e3, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
                    newLastIdealStyleValue = _stepper[0];
                    newLastIdealVelocityValue = _stepper[1];
                  }
                  var _stepper2 = _stepper4["default"](msPerFrame / 1e3, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
                  var nextIdealX = _stepper2[0];
                  var nextIdealV = _stepper2[1];
                  newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
                  newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
                  newLastIdealStyle[key] = newLastIdealStyleValue;
                  newLastIdealVelocity[key] = newLastIdealVelocityValue;
                }
              }
              newCurrentStyles[i] = newCurrentStyle;
              newCurrentVelocities[i] = newCurrentVelocity;
              newLastIdealStyles[i] = newLastIdealStyle;
              newLastIdealVelocities[i] = newLastIdealVelocity;
            }
            _this.animationID = null;
            _this.accumulatedTime -= framesToCatchUp * msPerFrame;
            _this.setState({
              currentStyles: newCurrentStyles,
              currentVelocities: newCurrentVelocities,
              lastIdealStyles: newLastIdealStyles,
              lastIdealVelocities: newLastIdealVelocities
            });
            _this.unreadPropStyles = null;
            _this.startAnimationIfNecessary();
          });
        };
        this.state = this.defaultState();
      }
      StaggeredMotion2.prototype.defaultState = function defaultState() {
        var _props = this.props;
        var defaultStyles = _props.defaultStyles;
        var styles = _props.styles;
        var currentStyles = defaultStyles || styles().map(_stripStyle2["default"]);
        var currentVelocities = currentStyles.map(function(currentStyle) {
          return _mapToZero2["default"](currentStyle);
        });
        return {
          currentStyles,
          currentVelocities,
          lastIdealStyles: currentStyles,
          lastIdealVelocities: currentVelocities
        };
      };
      StaggeredMotion2.prototype.componentDidMount = function componentDidMount() {
        this.prevTime = _performanceNow2["default"]();
        this.startAnimationIfNecessary();
      };
      StaggeredMotion2.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (this.unreadPropStyles != null) {
          this.clearUnreadPropStyle(this.unreadPropStyles);
        }
        this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
        if (this.animationID == null) {
          this.prevTime = _performanceNow2["default"]();
          this.startAnimationIfNecessary();
        }
      };
      StaggeredMotion2.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.animationID != null) {
          _raf2["default"].cancel(this.animationID);
          this.animationID = null;
        }
      };
      StaggeredMotion2.prototype.render = function render() {
        var renderedChildren = this.props.children(this.state.currentStyles);
        return renderedChildren && _react2["default"].Children.only(renderedChildren);
      };
      return StaggeredMotion2;
    }(_react2["default"].Component);
    exports["default"] = StaggeredMotion;
    module.exports = exports["default"];
  }
});

// node_modules/react-motion/lib/mergeDiff.js
var require_mergeDiff = __commonJS({
  "node_modules/react-motion/lib/mergeDiff.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = mergeDiff;
    function mergeDiff(prev, next, onRemove) {
      var prevKeyIndex = {};
      for (var i = 0; i < prev.length; i++) {
        prevKeyIndex[prev[i].key] = i;
      }
      var nextKeyIndex = {};
      for (var i = 0; i < next.length; i++) {
        nextKeyIndex[next[i].key] = i;
      }
      var ret = [];
      for (var i = 0; i < next.length; i++) {
        ret[i] = next[i];
      }
      for (var i = 0; i < prev.length; i++) {
        if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
          var fill = onRemove(i, prev[i]);
          if (fill != null) {
            ret.push(fill);
          }
        }
      }
      return ret.sort(function(a, b) {
        var nextOrderA = nextKeyIndex[a.key];
        var nextOrderB = nextKeyIndex[b.key];
        var prevOrderA = prevKeyIndex[a.key];
        var prevOrderB = prevKeyIndex[b.key];
        if (nextOrderA != null && nextOrderB != null) {
          return nextKeyIndex[a.key] - nextKeyIndex[b.key];
        } else if (prevOrderA != null && prevOrderB != null) {
          return prevKeyIndex[a.key] - prevKeyIndex[b.key];
        } else if (nextOrderA != null) {
          for (var i2 = 0; i2 < next.length; i2++) {
            var pivot = next[i2].key;
            if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
              continue;
            }
            if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
              return -1;
            } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
              return 1;
            }
          }
          return 1;
        }
        for (var i2 = 0; i2 < next.length; i2++) {
          var pivot = next[i2].key;
          if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
            continue;
          }
          if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
            return 1;
          } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
            return -1;
          }
        }
        return -1;
      });
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-motion/lib/TransitionMotion.js
var require_TransitionMotion = __commonJS({
  "node_modules/react-motion/lib/TransitionMotion.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
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
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var _mapToZero = require_mapToZero();
    var _mapToZero2 = _interopRequireDefault(_mapToZero);
    var _stripStyle = require_stripStyle();
    var _stripStyle2 = _interopRequireDefault(_stripStyle);
    var _stepper3 = require_stepper();
    var _stepper4 = _interopRequireDefault(_stepper3);
    var _mergeDiff = require_mergeDiff();
    var _mergeDiff2 = _interopRequireDefault(_mergeDiff);
    var _performanceNow = require_performance_now();
    var _performanceNow2 = _interopRequireDefault(_performanceNow);
    var _raf = require_raf();
    var _raf2 = _interopRequireDefault(_raf);
    var _shouldStopAnimation = require_shouldStopAnimation();
    var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var msPerFrame = 1e3 / 60;
    function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
      var cUnreadPropStyles = unreadPropStyles;
      if (cUnreadPropStyles == null) {
        return mergedPropsStyles.map(function(mergedPropsStyle, i) {
          return {
            key: mergedPropsStyle.key,
            data: mergedPropsStyle.data,
            style: plainStyles[i]
          };
        });
      }
      return mergedPropsStyles.map(function(mergedPropsStyle, i) {
        for (var j = 0; j < cUnreadPropStyles.length; j++) {
          if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
            return {
              key: cUnreadPropStyles[j].key,
              data: cUnreadPropStyles[j].data,
              style: plainStyles[i]
            };
          }
        }
        return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
      });
    }
    function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
      if (mergedPropsStyles.length !== destStyles.length) {
        return false;
      }
      for (var i = 0; i < mergedPropsStyles.length; i++) {
        if (mergedPropsStyles[i].key !== destStyles[i].key) {
          return false;
        }
      }
      for (var i = 0; i < mergedPropsStyles.length; i++) {
        if (!_shouldStopAnimation2["default"](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
          return false;
        }
      }
      return true;
    }
    function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
      var newMergedPropsStyles = _mergeDiff2["default"](oldMergedPropsStyles, destStyles, function(oldIndex, oldMergedPropsStyle) {
        var leavingStyle = willLeave(oldMergedPropsStyle);
        if (leavingStyle == null) {
          didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
          return null;
        }
        if (_shouldStopAnimation2["default"](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
          didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
          return null;
        }
        return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
      });
      var newCurrentStyles = [];
      var newCurrentVelocities = [];
      var newLastIdealStyles = [];
      var newLastIdealVelocities = [];
      for (var i = 0; i < newMergedPropsStyles.length; i++) {
        var newMergedPropsStyleCell = newMergedPropsStyles[i];
        var foundOldIndex = null;
        for (var j = 0; j < oldMergedPropsStyles.length; j++) {
          if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
            foundOldIndex = j;
            break;
          }
        }
        if (foundOldIndex == null) {
          var plainStyle = willEnter(newMergedPropsStyleCell);
          newCurrentStyles[i] = plainStyle;
          newLastIdealStyles[i] = plainStyle;
          var velocity = _mapToZero2["default"](newMergedPropsStyleCell.style);
          newCurrentVelocities[i] = velocity;
          newLastIdealVelocities[i] = velocity;
        } else {
          newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
          newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
          newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
          newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
        }
      }
      return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
    }
    var TransitionMotion = function(_React$Component) {
      _inherits(TransitionMotion2, _React$Component);
      _createClass(TransitionMotion2, null, [{
        key: "propTypes",
        value: {
          defaultStyles: _propTypes2["default"].arrayOf(_propTypes2["default"].shape({
            key: _propTypes2["default"].string.isRequired,
            data: _propTypes2["default"].any,
            style: _propTypes2["default"].objectOf(_propTypes2["default"].number).isRequired
          })),
          styles: _propTypes2["default"].oneOfType([_propTypes2["default"].func, _propTypes2["default"].arrayOf(_propTypes2["default"].shape({
            key: _propTypes2["default"].string.isRequired,
            data: _propTypes2["default"].any,
            style: _propTypes2["default"].objectOf(_propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].object])).isRequired
          }))]).isRequired,
          children: _propTypes2["default"].func.isRequired,
          willEnter: _propTypes2["default"].func,
          willLeave: _propTypes2["default"].func,
          didLeave: _propTypes2["default"].func
        },
        enumerable: true
      }, {
        key: "defaultProps",
        value: {
          willEnter: function willEnter(styleThatEntered) {
            return _stripStyle2["default"](styleThatEntered.style);
          },
          // recall: returning null makes the current unmounting TransitionStyle
          // disappear immediately
          willLeave: function willLeave() {
            return null;
          },
          didLeave: function didLeave() {
          }
        },
        enumerable: true
      }]);
      function TransitionMotion2(props) {
        var _this = this;
        _classCallCheck(this, TransitionMotion2);
        _React$Component.call(this, props);
        this.unmounting = false;
        this.animationID = null;
        this.prevTime = 0;
        this.accumulatedTime = 0;
        this.unreadPropStyles = null;
        this.clearUnreadPropStyle = function(unreadPropStyles) {
          var _mergeAndSync = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, unreadPropStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);
          var mergedPropsStyles = _mergeAndSync[0];
          var currentStyles = _mergeAndSync[1];
          var currentVelocities = _mergeAndSync[2];
          var lastIdealStyles = _mergeAndSync[3];
          var lastIdealVelocities = _mergeAndSync[4];
          for (var i = 0; i < unreadPropStyles.length; i++) {
            var unreadPropStyle = unreadPropStyles[i].style;
            var dirty = false;
            for (var key in unreadPropStyle) {
              if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
                continue;
              }
              var styleValue = unreadPropStyle[key];
              if (typeof styleValue === "number") {
                if (!dirty) {
                  dirty = true;
                  currentStyles[i] = _extends({}, currentStyles[i]);
                  currentVelocities[i] = _extends({}, currentVelocities[i]);
                  lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
                  lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
                  mergedPropsStyles[i] = {
                    key: mergedPropsStyles[i].key,
                    data: mergedPropsStyles[i].data,
                    style: _extends({}, mergedPropsStyles[i].style)
                  };
                }
                currentStyles[i][key] = styleValue;
                currentVelocities[i][key] = 0;
                lastIdealStyles[i][key] = styleValue;
                lastIdealVelocities[i][key] = 0;
                mergedPropsStyles[i].style[key] = styleValue;
              }
            }
          }
          _this.setState({
            currentStyles,
            currentVelocities,
            mergedPropsStyles,
            lastIdealStyles,
            lastIdealVelocities
          });
        };
        this.startAnimationIfNecessary = function() {
          if (_this.unmounting) {
            return;
          }
          _this.animationID = _raf2["default"](function(timestamp) {
            if (_this.unmounting) {
              return;
            }
            var propStyles = _this.props.styles;
            var destStyles = typeof propStyles === "function" ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;
            if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
              _this.animationID = null;
              _this.accumulatedTime = 0;
              return;
            }
            var currentTime = timestamp || _performanceNow2["default"]();
            var timeDelta = currentTime - _this.prevTime;
            _this.prevTime = currentTime;
            _this.accumulatedTime = _this.accumulatedTime + timeDelta;
            if (_this.accumulatedTime > msPerFrame * 10) {
              _this.accumulatedTime = 0;
            }
            if (_this.accumulatedTime === 0) {
              _this.animationID = null;
              _this.startAnimationIfNecessary();
              return;
            }
            var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
            var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
            var _mergeAndSync2 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);
            var newMergedPropsStyles = _mergeAndSync2[0];
            var newCurrentStyles = _mergeAndSync2[1];
            var newCurrentVelocities = _mergeAndSync2[2];
            var newLastIdealStyles = _mergeAndSync2[3];
            var newLastIdealVelocities = _mergeAndSync2[4];
            for (var i = 0; i < newMergedPropsStyles.length; i++) {
              var newMergedPropsStyle = newMergedPropsStyles[i].style;
              var newCurrentStyle = {};
              var newCurrentVelocity = {};
              var newLastIdealStyle = {};
              var newLastIdealVelocity = {};
              for (var key in newMergedPropsStyle) {
                if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
                  continue;
                }
                var styleValue = newMergedPropsStyle[key];
                if (typeof styleValue === "number") {
                  newCurrentStyle[key] = styleValue;
                  newCurrentVelocity[key] = 0;
                  newLastIdealStyle[key] = styleValue;
                  newLastIdealVelocity[key] = 0;
                } else {
                  var newLastIdealStyleValue = newLastIdealStyles[i][key];
                  var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
                  for (var j = 0; j < framesToCatchUp; j++) {
                    var _stepper = _stepper4["default"](msPerFrame / 1e3, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
                    newLastIdealStyleValue = _stepper[0];
                    newLastIdealVelocityValue = _stepper[1];
                  }
                  var _stepper2 = _stepper4["default"](msPerFrame / 1e3, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
                  var nextIdealX = _stepper2[0];
                  var nextIdealV = _stepper2[1];
                  newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
                  newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
                  newLastIdealStyle[key] = newLastIdealStyleValue;
                  newLastIdealVelocity[key] = newLastIdealVelocityValue;
                }
              }
              newLastIdealStyles[i] = newLastIdealStyle;
              newLastIdealVelocities[i] = newLastIdealVelocity;
              newCurrentStyles[i] = newCurrentStyle;
              newCurrentVelocities[i] = newCurrentVelocity;
            }
            _this.animationID = null;
            _this.accumulatedTime -= framesToCatchUp * msPerFrame;
            _this.setState({
              currentStyles: newCurrentStyles,
              currentVelocities: newCurrentVelocities,
              lastIdealStyles: newLastIdealStyles,
              lastIdealVelocities: newLastIdealVelocities,
              mergedPropsStyles: newMergedPropsStyles
            });
            _this.unreadPropStyles = null;
            _this.startAnimationIfNecessary();
          });
        };
        this.state = this.defaultState();
      }
      TransitionMotion2.prototype.defaultState = function defaultState() {
        var _props = this.props;
        var defaultStyles = _props.defaultStyles;
        var styles = _props.styles;
        var willEnter = _props.willEnter;
        var willLeave = _props.willLeave;
        var didLeave = _props.didLeave;
        var destStyles = typeof styles === "function" ? styles(defaultStyles) : styles;
        var oldMergedPropsStyles = void 0;
        if (defaultStyles == null) {
          oldMergedPropsStyles = destStyles;
        } else {
          oldMergedPropsStyles = defaultStyles.map(function(defaultStyleCell) {
            for (var i = 0; i < destStyles.length; i++) {
              if (destStyles[i].key === defaultStyleCell.key) {
                return destStyles[i];
              }
            }
            return defaultStyleCell;
          });
        }
        var oldCurrentStyles = defaultStyles == null ? destStyles.map(function(s) {
          return _stripStyle2["default"](s.style);
        }) : defaultStyles.map(function(s) {
          return _stripStyle2["default"](s.style);
        });
        var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function(s) {
          return _mapToZero2["default"](s.style);
        }) : defaultStyles.map(function(s) {
          return _mapToZero2["default"](s.style);
        });
        var _mergeAndSync3 = mergeAndSync(
          // Because this is an old-style createReactClass component, Flow doesn't
          // understand that the willEnter and willLeave props have default values
          // and will always be present.
          willEnter,
          willLeave,
          didLeave,
          oldMergedPropsStyles,
          destStyles,
          oldCurrentStyles,
          oldCurrentVelocities,
          oldCurrentStyles,
          // oldLastIdealStyles really
          oldCurrentVelocities
        );
        var mergedPropsStyles = _mergeAndSync3[0];
        var currentStyles = _mergeAndSync3[1];
        var currentVelocities = _mergeAndSync3[2];
        var lastIdealStyles = _mergeAndSync3[3];
        var lastIdealVelocities = _mergeAndSync3[4];
        return {
          currentStyles,
          currentVelocities,
          lastIdealStyles,
          lastIdealVelocities,
          mergedPropsStyles
        };
      };
      TransitionMotion2.prototype.componentDidMount = function componentDidMount() {
        this.prevTime = _performanceNow2["default"]();
        this.startAnimationIfNecessary();
      };
      TransitionMotion2.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        if (this.unreadPropStyles) {
          this.clearUnreadPropStyle(this.unreadPropStyles);
        }
        var styles = props.styles;
        if (typeof styles === "function") {
          this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
        } else {
          this.unreadPropStyles = styles;
        }
        if (this.animationID == null) {
          this.prevTime = _performanceNow2["default"]();
          this.startAnimationIfNecessary();
        }
      };
      TransitionMotion2.prototype.componentWillUnmount = function componentWillUnmount() {
        this.unmounting = true;
        if (this.animationID != null) {
          _raf2["default"].cancel(this.animationID);
          this.animationID = null;
        }
      };
      TransitionMotion2.prototype.render = function render() {
        var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
        var renderedChildren = this.props.children(hydratedStyles);
        return renderedChildren && _react2["default"].Children.only(renderedChildren);
      };
      return TransitionMotion2;
    }(_react2["default"].Component);
    exports["default"] = TransitionMotion;
    module.exports = exports["default"];
  }
});

// node_modules/react-motion/lib/presets.js
var require_presets = __commonJS({
  "node_modules/react-motion/lib/presets.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = {
      noWobble: { stiffness: 170, damping: 26 },
      // the default, if nothing provided
      gentle: { stiffness: 120, damping: 14 },
      wobbly: { stiffness: 180, damping: 12 },
      stiff: { stiffness: 210, damping: 20 }
    };
    module.exports = exports["default"];
  }
});

// node_modules/react-motion/lib/spring.js
var require_spring = __commonJS({
  "node_modules/react-motion/lib/spring.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
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
    exports["default"] = spring;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _presets = require_presets();
    var _presets2 = _interopRequireDefault(_presets);
    var defaultConfig = _extends({}, _presets2["default"].noWobble, {
      precision: 0.01
    });
    function spring(val, config) {
      return _extends({}, defaultConfig, config, { val });
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-motion/lib/reorderKeys.js
var require_reorderKeys = __commonJS({
  "node_modules/react-motion/lib/reorderKeys.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = reorderKeys;
    var hasWarned = false;
    function reorderKeys() {
      if (true) {
        if (!hasWarned) {
          hasWarned = true;
          console.error("`reorderKeys` has been removed, since it is no longer needed for TransitionMotion's new styles array API.");
        }
      }
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-motion/lib/react-motion.js
var require_react_motion = __commonJS({
  "node_modules/react-motion/lib/react-motion.js"(exports) {
    exports.__esModule = true;
    function _interopRequire(obj) {
      return obj && obj.__esModule ? obj["default"] : obj;
    }
    var _Motion = require_Motion();
    exports.Motion = _interopRequire(_Motion);
    var _StaggeredMotion = require_StaggeredMotion();
    exports.StaggeredMotion = _interopRequire(_StaggeredMotion);
    var _TransitionMotion = require_TransitionMotion();
    exports.TransitionMotion = _interopRequire(_TransitionMotion);
    var _spring = require_spring();
    exports.spring = _interopRequire(_spring);
    var _presets = require_presets();
    exports.presets = _interopRequire(_presets);
    var _stripStyle = require_stripStyle();
    exports.stripStyle = _interopRequire(_stripStyle);
    var _reorderKeys = require_reorderKeys();
    exports.reorderKeys = _interopRequire(_reorderKeys);
  }
});
export default require_react_motion();
//# sourceMappingURL=react-motion.js.map
