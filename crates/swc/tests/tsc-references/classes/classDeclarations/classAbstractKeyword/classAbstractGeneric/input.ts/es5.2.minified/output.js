function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
}
function _getPrototypeOf(o) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: !0,
            configurable: !0
        }
    }), superClass && _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    return call && ("object" === _typeof(call) || "function" == typeof call) ? call : (function(self) {
        if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
    })(self);
}
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
}, A1 = function() {
    "use strict";
    _classCallCheck(this, A1);
}, B = function(A) {
    "use strict";
    function B() {
        return _classCallCheck(this, B), _possibleConstructorReturn(this, _getPrototypeOf(B).apply(this, arguments));
    }
    return _inherits(B, A), B;
}(A1), C = function(A) {
    "use strict";
    function C() {
        return _classCallCheck(this, C), _possibleConstructorReturn(this, _getPrototypeOf(C).apply(this, arguments));
    }
    return _inherits(C, A), C;
}(A1), D = function(A) {
    "use strict";
    function D() {
        return _classCallCheck(this, D), _possibleConstructorReturn(this, _getPrototypeOf(D).apply(this, arguments));
    }
    return _inherits(D, A), D;
}(A1), E = function(A) {
    "use strict";
    function E() {
        return _classCallCheck(this, E), _possibleConstructorReturn(this, _getPrototypeOf(E).apply(this, arguments));
    }
    return _inherits(E, A), _createClass(E, [
        {
            key: "foo",
            value: function() {
                return this.t;
            }
        }
    ]), E;
}(A1), F = function(A) {
    "use strict";
    function F() {
        return _classCallCheck(this, F), _possibleConstructorReturn(this, _getPrototypeOf(F).apply(this, arguments));
    }
    return _inherits(F, A), _createClass(F, [
        {
            key: "bar",
            value: function(t) {
            }
        }
    ]), F;
}(A1), G = function(A) {
    "use strict";
    function G() {
        return _classCallCheck(this, G), _possibleConstructorReturn(this, _getPrototypeOf(G).apply(this, arguments));
    }
    return _inherits(G, A), _createClass(G, [
        {
            key: "foo",
            value: function() {
                return this.t;
            }
        },
        {
            key: "bar",
            value: function(t) {
            }
        }
    ]), G;
}(A1);