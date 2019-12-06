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

var _classnames = _interopRequireDefault(require("classnames"));

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _theme = require("../../theme");

var Text =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Text, _PureComponent);

  function Text() {
    (0, _classCallCheck2.default)(this, Text);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Text).apply(this, arguments));
  }

  (0, _createClass2.default)(Text, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          css = _this$props.css,
          theme = _this$props.theme,
          size = _this$props.size,
          color = _this$props.color,
          fontFamily = _this$props.fontFamily,
          marginTop = _this$props.marginTop,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["className", "css", "theme", "size", "color", "fontFamily", "marginTop"]);

      var _theme$getTextStyle = theme.getTextStyle(size),
          defaultMarginTop = _theme$getTextStyle.marginTop,
          textStyle = (0, _objectWithoutProperties2.default)(_theme$getTextStyle, ["marginTop"]);

      var finalMarginTop = marginTop === 'default' ? defaultMarginTop : marginTop;
      return _react.default.createElement(_uiBox.default, (0, _extends2.default)({
        is: "span",
        color: theme.getTextColor(color),
        fontFamily: theme.getFontFamily(fontFamily),
        marginTop: finalMarginTop
      }, textStyle, {
        className: (0, _classnames.default)(className, css ? (0, _glamor.css)(css).toString() : undefined)
      }, props));
    }
  }]);
  return Text;
}(_react.PureComponent);

Text.displayName = "Text";
(0, _defineProperty2.default)(Text, "propTypes", (0, _objectSpread2.default)({}, _uiBox.default.propTypes, {
  /**
   * Size of the text style.
   * Can be: 300, 400, 500, 600.
   */
  size: _propTypes.default.oneOf([300, 400, 500, 600]).isRequired,

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: _propTypes.default.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes.default.object.isRequired
}));
(0, _defineProperty2.default)(Text, "defaultProps", {
  size: 400,
  color: 'default',
  fontFamily: 'ui'
});

var _default = (0, _theme.withTheme)(Text);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9UZXh0LmpzIl0sIm5hbWVzIjpbIlRleHQiLCJwcm9wcyIsImNsYXNzTmFtZSIsImNzcyIsInRoZW1lIiwic2l6ZSIsImNvbG9yIiwiZm9udEZhbWlseSIsIm1hcmdpblRvcCIsImdldFRleHRTdHlsZSIsImRlZmF1bHRNYXJnaW5Ub3AiLCJ0ZXh0U3R5bGUiLCJmaW5hbE1hcmdpblRvcCIsImdldFRleHRDb2xvciIsImdldEZvbnRGYW1pbHkiLCJ0b1N0cmluZyIsInVuZGVmaW5lZCIsIlB1cmVDb21wb25lbnQiLCJCb3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBRU1BLEk7Ozs7Ozs7Ozs7Ozs2QkErQks7QUFBQSx3QkFVSCxLQUFLQyxLQVZGO0FBQUEsVUFFTEMsU0FGSyxlQUVMQSxTQUZLO0FBQUEsVUFHTEMsR0FISyxlQUdMQSxHQUhLO0FBQUEsVUFJTEMsS0FKSyxlQUlMQSxLQUpLO0FBQUEsVUFLTEMsSUFMSyxlQUtMQSxJQUxLO0FBQUEsVUFNTEMsS0FOSyxlQU1MQSxLQU5LO0FBQUEsVUFPTEMsVUFQSyxlQU9MQSxVQVBLO0FBQUEsVUFRTEMsU0FSSyxlQVFMQSxTQVJLO0FBQUEsVUFTRlAsS0FURTs7QUFBQSxnQ0FZK0NHLEtBQUssQ0FBQ0ssWUFBTixDQUNwREosSUFEb0QsQ0FaL0M7QUFBQSxVQVlZSyxnQkFaWix1QkFZQ0YsU0FaRDtBQUFBLFVBWWlDRyxTQVpqQzs7QUFnQlAsVUFBTUMsY0FBYyxHQUNsQkosU0FBUyxLQUFLLFNBQWQsR0FBMEJFLGdCQUExQixHQUE2Q0YsU0FEL0M7QUFHQSxhQUNFLDZCQUFDLGNBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBQyxNQURMO0FBRUUsUUFBQSxLQUFLLEVBQUVKLEtBQUssQ0FBQ1MsWUFBTixDQUFtQlAsS0FBbkIsQ0FGVDtBQUdFLFFBQUEsVUFBVSxFQUFFRixLQUFLLENBQUNVLGFBQU4sQ0FBb0JQLFVBQXBCLENBSGQ7QUFJRSxRQUFBLFNBQVMsRUFBRUs7QUFKYixTQUtNRCxTQUxOO0FBTUUsUUFBQSxTQUFTLEVBQUUseUJBQUdULFNBQUgsRUFBY0MsR0FBRyxHQUFHLGlCQUFVQSxHQUFWLEVBQWVZLFFBQWYsRUFBSCxHQUErQkMsU0FBaEQ7QUFOYixTQU9NZixLQVBOLEVBREY7QUFXRDs7O0VBN0RnQmdCLG9COztBQUFiakIsSTs4QkFBQUEsSSwrQ0FLQ2tCLGVBQUlDLFM7QUFFUDs7OztBQUlBZCxFQUFBQSxJQUFJLEVBQUVlLG1CQUFVQyxLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLENBQWhCLEVBQXNDQyxVOztBQUU1Qzs7OztBQUlBZixFQUFBQSxVQUFVLEVBQUVhLG1CQUFVRyxNQUFWLENBQWlCRCxVOztBQUU3Qjs7O0FBR0FsQixFQUFBQSxLQUFLLEVBQUVnQixtQkFBVUksTUFBVixDQUFpQkY7OzhCQXRCdEJ0QixJLGtCQXlCa0I7QUFDcEJLLEVBQUFBLElBQUksRUFBRSxHQURjO0FBRXBCQyxFQUFBQSxLQUFLLEVBQUUsU0FGYTtBQUdwQkMsRUFBQUEsVUFBVSxFQUFFO0FBSFEsQzs7ZUF1Q1Qsc0JBQVVQLElBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgY3NzIGFzIGdsYW1vckNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jbGFzcyBUZXh0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIEJveCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uQm94LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFNpemUgb2YgdGhlIHRleHQgc3R5bGUuXG4gICAgICogQ2FuIGJlOiAzMDAsIDQwMCwgNTAwLCA2MDAuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFszMDAsIDQwMCwgNTAwLCA2MDBdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRm9udCBmYW1pbHkuXG4gICAgICogQ2FuIGJlOiBgdWlgLCBgZGlzcGxheWAgb3IgYG1vbm9gIG9yIGEgY3VzdG9tIGZvbnQgZmFtaWx5LlxuICAgICAqL1xuICAgIGZvbnRGYW1pbHk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaXplOiA0MDAsXG4gICAgY29sb3I6ICdkZWZhdWx0JyxcbiAgICBmb250RmFtaWx5OiAndWknXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY3NzLFxuICAgICAgdGhlbWUsXG4gICAgICBzaXplLFxuICAgICAgY29sb3IsXG4gICAgICBmb250RmFtaWx5LFxuICAgICAgbWFyZ2luVG9wLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgeyBtYXJnaW5Ub3A6IGRlZmF1bHRNYXJnaW5Ub3AsIC4uLnRleHRTdHlsZSB9ID0gdGhlbWUuZ2V0VGV4dFN0eWxlKFxuICAgICAgc2l6ZVxuICAgIClcblxuICAgIGNvbnN0IGZpbmFsTWFyZ2luVG9wID1cbiAgICAgIG1hcmdpblRvcCA9PT0gJ2RlZmF1bHQnID8gZGVmYXVsdE1hcmdpblRvcCA6IG1hcmdpblRvcFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgaXM9XCJzcGFuXCJcbiAgICAgICAgY29sb3I9e3RoZW1lLmdldFRleHRDb2xvcihjb2xvcil9XG4gICAgICAgIGZvbnRGYW1pbHk9e3RoZW1lLmdldEZvbnRGYW1pbHkoZm9udEZhbWlseSl9XG4gICAgICAgIG1hcmdpblRvcD17ZmluYWxNYXJnaW5Ub3B9XG4gICAgICAgIHsuLi50ZXh0U3R5bGV9XG4gICAgICAgIGNsYXNzTmFtZT17Y3goY2xhc3NOYW1lLCBjc3MgPyBnbGFtb3JDc3MoY3NzKS50b1N0cmluZygpIDogdW5kZWZpbmVkKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRleHQpXG4iXX0=