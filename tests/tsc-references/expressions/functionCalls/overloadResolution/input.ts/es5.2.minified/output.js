function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
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
}, SomeBase1 = function() {
    "use strict";
    _classCallCheck(this, SomeBase1);
}, SomeDerived1 = function(SomeBase) {
    "use strict";
    function SomeDerived1() {
        return _classCallCheck(this, SomeDerived1), _possibleConstructorReturn(this, _getPrototypeOf(SomeDerived1).apply(this, arguments));
    }
    return _inherits(SomeDerived1, SomeBase), SomeDerived1;
}(SomeBase1), SomeDerived2 = function(SomeBase) {
    "use strict";
    function SomeDerived2() {
        return _classCallCheck(this, SomeDerived2), _possibleConstructorReturn(this, _getPrototypeOf(SomeDerived2).apply(this, arguments));
    }
    return _inherits(SomeDerived2, SomeBase), SomeDerived2;
}(SomeBase1), SomeDerived3 = function(SomeBase) {
    "use strict";
    function SomeDerived3() {
        return _classCallCheck(this, SomeDerived3), _possibleConstructorReturn(this, _getPrototypeOf(SomeDerived3).apply(this, arguments));
    }
    return _inherits(SomeDerived3, SomeBase), SomeDerived3;
}(SomeBase1);
function fn1() {
    return null;
}
function fn2() {
}
function fn3() {
    return null;
}
function fn4() {
}
function fn5() {
}
fn1(void 0), fn1({
}), fn2(0, void 0), fn2(0, ""), fn2("", 0), fn2("", 0), fn3(3), fn3("", 3, ""), fn3(5, 5, 5), fn3(4), fn3("", "", ""), fn3("", "", 3), fn3(), fn4("", 3), fn4(3, ""), fn4("", 3), fn4(3, ""), fn4("", 3), fn4(3, ""), fn4(3, void 0), fn4("", null), fn4(null, null), fn4(!0, null), fn4(null, !0), fn5(function(n) {
    return n.toFixed();
}), fn5(function(n) {
    return n.substr(0);
});