function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
// @filename: file.tsx
// @jsx: preserve
// @noLib: true
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts
const React = require('react');
const obj = {};
const obj1 = {
    x: 2
};
const obj3 = {
    y: true,
    overwrite: "hi"
};
class OverWriteAttr extends React.Component {
    render() {
        return(/*#__PURE__*/ React.createElement("div", null, "Hello"));
    }
}
// OK
let x = /*#__PURE__*/ React.createElement(OverWriteAttr, _extends({}, obj, {
    y: true,
    overwrite: "hi"
}, obj1));
let x1 = /*#__PURE__*/ React.createElement(OverWriteAttr, _extends({}, obj1, obj3));
export { };
