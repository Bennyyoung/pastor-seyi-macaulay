"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var OrderedList =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(OrderedList, _PureComponent);

  function OrderedList() {
    (0, _classCallCheck2.default)(this, OrderedList);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(OrderedList).apply(this, arguments));
  }

  (0, _createClass2.default)(OrderedList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          size = _this$props.size,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children", "size"]);

      var finalChildren = _react.default.Children.map(children, function (child) {
        if (!_react.default.isValidElement(child)) {
          return child;
        }

        return _react.default.cloneElement(child, {
          // Prefer more granularly defined icon if present
          size: child.props.size || size
        });
      });

      return _react.default.createElement(_uiBox.default, (0, _extends2.default)({}, OrderedList.styles, props), finalChildren);
    }
  }]);
  return OrderedList;
}(_react.PureComponent);

exports.default = OrderedList;
OrderedList.displayName = "OrderedList";
(0, _defineProperty2.default)(OrderedList, "propTypes", (0, _objectSpread2.default)({}, _uiBox.default.propTypes, {
  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: _propTypes.default.oneOf([300, 400, 500, 600]).isRequired
}));
(0, _defineProperty2.default)(OrderedList, "defaultProps", {
  size: 400
});
(0, _defineProperty2.default)(OrderedList, "styles", {
  is: 'ol',
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'decimal'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9PcmRlcmVkTGlzdC5qcyJdLCJuYW1lcyI6WyJPcmRlcmVkTGlzdCIsInByb3BzIiwiY2hpbGRyZW4iLCJzaXplIiwiZmluYWxDaGlsZHJlbiIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiY2xvbmVFbGVtZW50Iiwic3R5bGVzIiwiUHVyZUNvbXBvbmVudCIsIkJveCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImlzIiwibWFyZ2luIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJsaXN0U3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7NkJBdUJWO0FBQUEsd0JBQzhCLEtBQUtDLEtBRG5DO0FBQUEsVUFDQ0MsUUFERCxlQUNDQSxRQUREO0FBQUEsVUFDV0MsSUFEWCxlQUNXQSxJQURYO0FBQUEsVUFDb0JGLEtBRHBCOztBQUdQLFVBQU1HLGFBQWEsR0FBR0MsZUFBTUMsUUFBTixDQUFlQyxHQUFmLENBQW1CTCxRQUFuQixFQUE2QixVQUFBTSxLQUFLLEVBQUk7QUFDMUQsWUFBSSxDQUFDSCxlQUFNSSxjQUFOLENBQXFCRCxLQUFyQixDQUFMLEVBQWtDO0FBQ2hDLGlCQUFPQSxLQUFQO0FBQ0Q7O0FBRUQsZUFBT0gsZUFBTUssWUFBTixDQUFtQkYsS0FBbkIsRUFBMEI7QUFDL0I7QUFDQUwsVUFBQUEsSUFBSSxFQUFFSyxLQUFLLENBQUNQLEtBQU4sQ0FBWUUsSUFBWixJQUFvQkE7QUFGSyxTQUExQixDQUFQO0FBSUQsT0FUcUIsQ0FBdEI7O0FBV0EsYUFDRSw2QkFBQyxjQUFELDZCQUFTSCxXQUFXLENBQUNXLE1BQXJCLEVBQWlDVixLQUFqQyxHQUNHRyxhQURILENBREY7QUFLRDs7O0VBMUNzQ1Esb0I7OztBQUFwQlosVzs4QkFBQUEsVywrQ0FFZGEsZUFBSUMsUztBQUVQOzs7O0FBSUFYLEVBQUFBLElBQUksRUFBRVksbUJBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBaEIsRUFBc0NDOzs4QkFSM0JqQixXLGtCQVdHO0FBQ3BCRyxFQUFBQSxJQUFJLEVBQUU7QUFEYyxDOzhCQVhISCxXLFlBZUg7QUFDZGtCLEVBQUFBLEVBQUUsRUFBRSxJQURVO0FBRWRDLEVBQUFBLE1BQU0sRUFBRSxDQUZNO0FBR2RDLEVBQUFBLFVBQVUsRUFBRSxPQUhFO0FBSWRDLEVBQUFBLE9BQU8sRUFBRSxDQUpLO0FBS2RDLEVBQUFBLFNBQVMsRUFBRTtBQUxHLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyZWRMaXN0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uQm94LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFNpemUgb2YgdGhlIHRleHQgdXNlZCBpbiBhIGxpc3QgaXRlbS5cbiAgICAgKiBDYW4gYmU6IDMwMCwgNDAwLCA1MDAsIDYwMC5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzMwMCwgNDAwLCA1MDAsIDYwMF0pLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogNDAwXG4gIH1cblxuICBzdGF0aWMgc3R5bGVzID0ge1xuICAgIGlzOiAnb2wnLFxuICAgIG1hcmdpbjogMCxcbiAgICBtYXJnaW5MZWZ0OiAnMS4xZW0nLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbGlzdFN0eWxlOiAnZGVjaW1hbCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBzaXplLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgZmluYWxDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgLy8gUHJlZmVyIG1vcmUgZ3JhbnVsYXJseSBkZWZpbmVkIGljb24gaWYgcHJlc2VudFxuICAgICAgICBzaXplOiBjaGlsZC5wcm9wcy5zaXplIHx8IHNpemVcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHsuLi5PcmRlcmVkTGlzdC5zdHlsZXN9IHsuLi5wcm9wc30+XG4gICAgICAgIHtmaW5hbENoaWxkcmVufVxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG4iXX0=