"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var UnorderedList =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(UnorderedList, _PureComponent);

  function UnorderedList() {
    (0, _classCallCheck2.default)(this, UnorderedList);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UnorderedList).apply(this, arguments));
  }

  (0, _createClass2.default)(UnorderedList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          size = _this$props.size,
          icon = _this$props.icon,
          iconColor = _this$props.iconColor,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children", "size", "icon", "iconColor"]); // Only pass down icon-related props if specified

      var inheritedProps = icon ? {
        size: size,
        icon: icon,
        iconColor: iconColor
      } : {
        size: size
      };

      var finalChildren = _react.default.Children.map(children, function (child) {
        if (!_react.default.isValidElement(child)) {
          return child;
        }

        return _react.default.cloneElement(child, (0, _objectSpread2.default)({}, inheritedProps, child.props));
      });

      return _react.default.createElement(_uiBox.default, (0, _extends2.default)({}, UnorderedList.styles, props), finalChildren);
    }
  }]);
  return UnorderedList;
}(_react.PureComponent);

exports.default = UnorderedList;
UnorderedList.displayName = "UnorderedList";
(0, _defineProperty2.default)(UnorderedList, "propTypes", (0, _objectSpread2.default)({}, _uiBox.default.propTypes, {
  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: _propTypes.default.oneOf([300, 400, 500, 600]).isRequired,

  /**
   * When passed, adds a icon before each list item in the list
   * You can override this on a individual list item.
   */
  icon: _propTypes.default.string,

  /**
   * The color of the icon in each list item in the list.
   */
  iconColor: _propTypes.default.string
}));
(0, _defineProperty2.default)(UnorderedList, "defaultProps", {
  size: 400
});
(0, _defineProperty2.default)(UnorderedList, "styles", {
  is: 'ul',
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'disc'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9Vbm9yZGVyZWRMaXN0LmpzIl0sIm5hbWVzIjpbIlVub3JkZXJlZExpc3QiLCJwcm9wcyIsImNoaWxkcmVuIiwic2l6ZSIsImljb24iLCJpY29uQ29sb3IiLCJpbmhlcml0ZWRQcm9wcyIsImZpbmFsQ2hpbGRyZW4iLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsInN0eWxlcyIsIlB1cmVDb21wb25lbnQiLCJCb3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJpcyIsIm1hcmdpbiIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nIiwibGlzdFN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztJQUVxQkEsYTs7Ozs7Ozs7Ozs7OzZCQWtDVjtBQUFBLHdCQUMrQyxLQUFLQyxLQURwRDtBQUFBLFVBQ0NDLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ1dDLElBRFgsZUFDV0EsSUFEWDtBQUFBLFVBQ2lCQyxJQURqQixlQUNpQkEsSUFEakI7QUFBQSxVQUN1QkMsU0FEdkIsZUFDdUJBLFNBRHZCO0FBQUEsVUFDcUNKLEtBRHJDLG1HQUdQOztBQUNBLFVBQU1LLGNBQWMsR0FBR0YsSUFBSSxHQUFHO0FBQUVELFFBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRQyxRQUFBQSxJQUFJLEVBQUpBLElBQVI7QUFBY0MsUUFBQUEsU0FBUyxFQUFUQTtBQUFkLE9BQUgsR0FBK0I7QUFBRUYsUUFBQUEsSUFBSSxFQUFKQTtBQUFGLE9BQTFEOztBQUVBLFVBQU1JLGFBQWEsR0FBR0MsZUFBTUMsUUFBTixDQUFlQyxHQUFmLENBQW1CUixRQUFuQixFQUE2QixVQUFBUyxLQUFLLEVBQUk7QUFDMUQsWUFBSSxDQUFDSCxlQUFNSSxjQUFOLENBQXFCRCxLQUFyQixDQUFMLEVBQWtDO0FBQ2hDLGlCQUFPQSxLQUFQO0FBQ0Q7O0FBRUQsZUFBT0gsZUFBTUssWUFBTixDQUFtQkYsS0FBbkIsa0NBQ0ZMLGNBREUsRUFHRkssS0FBSyxDQUFDVixLQUhKLEVBQVA7QUFLRCxPQVZxQixDQUF0Qjs7QUFZQSxhQUNFLDZCQUFDLGNBQUQsNkJBQVNELGFBQWEsQ0FBQ2MsTUFBdkIsRUFBbUNiLEtBQW5DLEdBQ0dNLGFBREgsQ0FERjtBQUtEOzs7RUF6RHdDUSxvQjs7O0FBQXRCZixhOzhCQUFBQSxhLCtDQUVkZ0IsZUFBSUMsUztBQUVQOzs7O0FBSUFkLEVBQUFBLElBQUksRUFBRWUsbUJBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBaEIsRUFBc0NDLFU7O0FBRTVDOzs7O0FBSUFoQixFQUFBQSxJQUFJLEVBQUVjLG1CQUFVRyxNOztBQUVoQjs7O0FBR0FoQixFQUFBQSxTQUFTLEVBQUVhLG1CQUFVRzs7OEJBbkJKckIsYSxrQkFzQkc7QUFDcEJHLEVBQUFBLElBQUksRUFBRTtBQURjLEM7OEJBdEJISCxhLFlBMEJIO0FBQ2RzQixFQUFBQSxFQUFFLEVBQUUsSUFEVTtBQUVkQyxFQUFBQSxNQUFNLEVBQUUsQ0FGTTtBQUdkQyxFQUFBQSxVQUFVLEVBQUUsT0FIRTtBQUlkQyxFQUFBQSxPQUFPLEVBQUUsQ0FKSztBQUtkQyxFQUFBQSxTQUFTLEVBQUU7QUFMRyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbm9yZGVyZWRMaXN0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uQm94LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFNpemUgb2YgdGhlIHRleHQgdXNlZCBpbiBhIGxpc3QgaXRlbS5cbiAgICAgKiBDYW4gYmU6IDMwMCwgNDAwLCA1MDAsIDYwMC5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzMwMCwgNDAwLCA1MDAsIDYwMF0pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHBhc3NlZCwgYWRkcyBhIGljb24gYmVmb3JlIGVhY2ggbGlzdCBpdGVtIGluIHRoZSBsaXN0XG4gICAgICogWW91IGNhbiBvdmVycmlkZSB0aGlzIG9uIGEgaW5kaXZpZHVhbCBsaXN0IGl0ZW0uXG4gICAgICovXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb2xvciBvZiB0aGUgaWNvbiBpbiBlYWNoIGxpc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBpY29uQ29sb3I6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogNDAwXG4gIH1cblxuICBzdGF0aWMgc3R5bGVzID0ge1xuICAgIGlzOiAndWwnLFxuICAgIG1hcmdpbjogMCxcbiAgICBtYXJnaW5MZWZ0OiAnMS4xZW0nLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbGlzdFN0eWxlOiAnZGlzYydcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBzaXplLCBpY29uLCBpY29uQ29sb3IsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICAvLyBPbmx5IHBhc3MgZG93biBpY29uLXJlbGF0ZWQgcHJvcHMgaWYgc3BlY2lmaWVkXG4gICAgY29uc3QgaW5oZXJpdGVkUHJvcHMgPSBpY29uID8geyBzaXplLCBpY29uLCBpY29uQ29sb3IgfSA6IHsgc2l6ZSB9XG5cbiAgICBjb25zdCBmaW5hbENoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAuLi5pbmhlcml0ZWRQcm9wcyxcbiAgICAgICAgLy8gUHJlZmVyIG1vcmUgZ3JhbnVsYXJseSBkZWZpbmVkIGljb24gaWYgcHJlc2VudFxuICAgICAgICAuLi5jaGlsZC5wcm9wc1xuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggey4uLlVub3JkZXJlZExpc3Quc3R5bGVzfSB7Li4ucHJvcHN9PlxuICAgICAgICB7ZmluYWxDaGlsZHJlbn1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuIl19