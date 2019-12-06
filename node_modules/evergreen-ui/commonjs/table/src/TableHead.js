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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _ScrollbarSize = _interopRequireDefault(require("./ScrollbarSize"));

var TableHead =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TableHead, _PureComponent);

  function TableHead() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, TableHead);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TableHead)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      scrollbarWidth: 0
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleScrollbarSize", function (width) {
      _this.setState({
        scrollbarWidth: width
      });
    });
    return _this;
  }

  (0, _createClass2.default)(TableHead, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          height = _this$props.height,
          accountForScrollbar = _this$props.accountForScrollbar,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children", "height", "accountForScrollbar"]);
      var scrollbarWidth = this.state.scrollbarWidth;
      return _react.default.createElement(_layers.Pane, (0, _extends2.default)({
        display: "flex",
        flexShrink: 0,
        paddingRight: scrollbarWidth,
        borderBottom: "default",
        background: "tint2",
        height: height
      }, props), children, ' ', accountForScrollbar && _react.default.createElement(_ScrollbarSize.default, {
        handleScrollbarSize: this.handleScrollbarSize
      }));
    }
  }]);
  return TableHead;
}(_react.PureComponent);

exports.default = TableHead;
TableHead.displayName = "TableHead";
(0, _defineProperty2.default)(TableHead, "propTypes", (0, _objectSpread2.default)({}, _layers.Pane.propTypes, {
  /**
   * The height of the table head.
   */
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,

  /**
   * This should always be true if you are using TableHead together with a TableBody.
   * Because TableBody has `overflowY: scroll` by default.
   */
  accountForScrollbar: _propTypes.default.bool
}));
(0, _defineProperty2.default)(TableHead, "defaultProps", {
  height: 32,
  accountForScrollbar: true
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVIZWFkLmpzIl0sIm5hbWVzIjpbIlRhYmxlSGVhZCIsInNjcm9sbGJhcldpZHRoIiwid2lkdGgiLCJzZXRTdGF0ZSIsInByb3BzIiwiY2hpbGRyZW4iLCJoZWlnaHQiLCJhY2NvdW50Rm9yU2Nyb2xsYmFyIiwic3RhdGUiLCJoYW5kbGVTY3JvbGxiYXJTaXplIiwiUHVyZUNvbXBvbmVudCIsIlBhbmUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBbUJYO0FBQ05DLE1BQUFBLGNBQWMsRUFBRTtBQURWLEs7c0dBU2MsVUFBQUMsS0FBSyxFQUFJO0FBQzdCLFlBQUtDLFFBQUwsQ0FBYztBQUNaRixRQUFBQSxjQUFjLEVBQUVDO0FBREosT0FBZDtBQUdELEs7Ozs7Ozs2QkFFUTtBQUFBLHdCQUNxRCxLQUFLRSxLQUQxRDtBQUFBLFVBQ0NDLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ1dDLE1BRFgsZUFDV0EsTUFEWDtBQUFBLFVBQ21CQyxtQkFEbkIsZUFDbUJBLG1CQURuQjtBQUFBLFVBQzJDSCxLQUQzQztBQUFBLFVBRUNILGNBRkQsR0FFb0IsS0FBS08sS0FGekIsQ0FFQ1AsY0FGRDtBQUlQLGFBQ0UsNkJBQUMsWUFBRDtBQUNFLFFBQUEsT0FBTyxFQUFDLE1BRFY7QUFFRSxRQUFBLFVBQVUsRUFBRSxDQUZkO0FBR0UsUUFBQSxZQUFZLEVBQUVBLGNBSGhCO0FBSUUsUUFBQSxZQUFZLEVBQUMsU0FKZjtBQUtFLFFBQUEsVUFBVSxFQUFDLE9BTGI7QUFNRSxRQUFBLE1BQU0sRUFBRUs7QUFOVixTQU9NRixLQVBOLEdBU0dDLFFBVEgsRUFTYSxHQVRiLEVBVUdFLG1CQUFtQixJQUNsQiw2QkFBQyxzQkFBRDtBQUFlLFFBQUEsbUJBQW1CLEVBQUUsS0FBS0U7QUFBekMsUUFYSixDQURGO0FBZ0JEOzs7RUF0RG9DQyxvQjs7O0FBQWxCVixTOzhCQUFBQSxTLCtDQUtkVyxhQUFLQyxTO0FBRVI7OztBQUdBTixFQUFBQSxNQUFNLEVBQUVPLG1CQUFVQyxTQUFWLENBQW9CLENBQUNELG1CQUFVRSxNQUFYLEVBQW1CRixtQkFBVUcsTUFBN0IsQ0FBcEIsRUFBMERDLFU7O0FBRWxFOzs7O0FBSUFWLEVBQUFBLG1CQUFtQixFQUFFTSxtQkFBVUs7OzhCQWhCZGxCLFMsa0JBdUJHO0FBQ3BCTSxFQUFBQSxNQUFNLEVBQUUsRUFEWTtBQUVwQkMsRUFBQUEsbUJBQW1CLEVBQUU7QUFGRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgU2Nyb2xsYmFyU2l6ZSBmcm9tICcuL1Njcm9sbGJhclNpemUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlSGVhZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBQYW5lIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5QYW5lLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHRhYmxlIGhlYWQuXG4gICAgICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgc2hvdWxkIGFsd2F5cyBiZSB0cnVlIGlmIHlvdSBhcmUgdXNpbmcgVGFibGVIZWFkIHRvZ2V0aGVyIHdpdGggYSBUYWJsZUJvZHkuXG4gICAgICogQmVjYXVzZSBUYWJsZUJvZHkgaGFzIGBvdmVyZmxvd1k6IHNjcm9sbGAgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBhY2NvdW50Rm9yU2Nyb2xsYmFyOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgc2Nyb2xsYmFyV2lkdGg6IDBcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiAzMixcbiAgICBhY2NvdW50Rm9yU2Nyb2xsYmFyOiB0cnVlXG4gIH1cblxuICBoYW5kbGVTY3JvbGxiYXJTaXplID0gd2lkdGggPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2Nyb2xsYmFyV2lkdGg6IHdpZHRoXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBoZWlnaHQsIGFjY291bnRGb3JTY3JvbGxiYXIsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBzY3JvbGxiYXJXaWR0aCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAgcGFkZGluZ1JpZ2h0PXtzY3JvbGxiYXJXaWR0aH1cbiAgICAgICAgYm9yZGVyQm90dG9tPVwiZGVmYXVsdFwiXG4gICAgICAgIGJhY2tncm91bmQ9XCJ0aW50MlwiXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn17JyAnfVxuICAgICAgICB7YWNjb3VudEZvclNjcm9sbGJhciAmJiAoXG4gICAgICAgICAgPFNjcm9sbGJhclNpemUgaGFuZGxlU2Nyb2xsYmFyU2l6ZT17dGhpcy5oYW5kbGVTY3JvbGxiYXJTaXplfSAvPlxuICAgICAgICApfVxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuIl19