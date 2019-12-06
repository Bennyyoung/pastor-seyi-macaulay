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

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../typography");

var _theme = require("../../theme");

var TextInput =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TextInput, _PureComponent);

  function TextInput() {
    (0, _classCallCheck2.default)(this, TextInput);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextInput).apply(this, arguments));
  }

  (0, _createClass2.default)(TextInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          width = _this$props.width,
          height = _this$props.height,
          disabled = _this$props.disabled,
          required = _this$props.required,
          isInvalid = _this$props.isInvalid,
          appearance = _this$props.appearance,
          placeholder = _this$props.placeholder,
          spellCheck = _this$props.spellCheck,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "className", "width", "height", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck"]);
      var themedClassName = theme.getTextInputClassName(appearance);
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      return _react.default.createElement(_typography.Text, (0, _extends2.default)({
        is: "input",
        className: (0, _classnames.default)(themedClassName, className),
        type: "text",
        size: textSize,
        width: width,
        height: height,
        required: required,
        disabled: disabled,
        placeholder: placeholder,
        paddingLeft: Math.round(height / 3.2),
        paddingRight: Math.round(height / 3.2),
        borderRadius: borderRadius,
        spellCheck: spellCheck,
        "aria-invalid": isInvalid
      }, disabled ? {
        color: 'muted'
      } : {}, props));
    }
  }]);
  return TextInput;
}(_react.PureComponent);

TextInput.displayName = "TextInput";
(0, _defineProperty2.default)(TextInput, "propTypes", (0, _objectSpread2.default)({}, _typography.Text.propTypes, {
  /**
   * Makes the input element required.
   */
  required: _propTypes.default.bool,

  /**
   * Makes the input element disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * Sets visual styling of _only_ the text input to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid: _propTypes.default.bool,

  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck: _propTypes.default.bool,

  /**
   * The placeholder text when there is no value present.
   */
  placeholder: _propTypes.default.string,

  /**
   * The appearance of the TextInput.
   */
  appearance: _propTypes.default.string,

  /**
   * The width of the TextInput.
   */
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: _propTypes.default.string
}));
(0, _defineProperty2.default)(TextInput, "defaultProps", {
  appearance: 'default',
  height: 32,
  width: 280,
  disabled: false,
  isInvalid: false,
  spellCheck: true
});

var _default = (0, _theme.withTheme)(TextInput);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXh0LWlucHV0L3NyYy9UZXh0SW5wdXQuanMiXSwibmFtZXMiOlsiVGV4dElucHV0IiwicHJvcHMiLCJ0aGVtZSIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzYWJsZWQiLCJyZXF1aXJlZCIsImlzSW52YWxpZCIsImFwcGVhcmFuY2UiLCJwbGFjZWhvbGRlciIsInNwZWxsQ2hlY2siLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRUZXh0SW5wdXRDbGFzc05hbWUiLCJ0ZXh0U2l6ZSIsImdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCIsImJvcmRlclJhZGl1cyIsImdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQiLCJNYXRoIiwicm91bmQiLCJjb2xvciIsIlB1cmVDb21wb25lbnQiLCJUZXh0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBRU1BLFM7Ozs7Ozs7Ozs7Ozs2QkFnRUs7QUFBQSx3QkFjSCxLQUFLQyxLQWRGO0FBQUEsVUFFTEMsS0FGSyxlQUVMQSxLQUZLO0FBQUEsVUFHTEMsU0FISyxlQUdMQSxTQUhLO0FBQUEsVUFLTEMsS0FMSyxlQUtMQSxLQUxLO0FBQUEsVUFNTEMsTUFOSyxlQU1MQSxNQU5LO0FBQUEsVUFPTEMsUUFQSyxlQU9MQSxRQVBLO0FBQUEsVUFRTEMsUUFSSyxlQVFMQSxRQVJLO0FBQUEsVUFTTEMsU0FUSyxlQVNMQSxTQVRLO0FBQUEsVUFVTEMsVUFWSyxlQVVMQSxVQVZLO0FBQUEsVUFXTEMsV0FYSyxlQVdMQSxXQVhLO0FBQUEsVUFZTEMsVUFaSyxlQVlMQSxVQVpLO0FBQUEsVUFhRlYsS0FiRTtBQWVQLFVBQU1XLGVBQWUsR0FBR1YsS0FBSyxDQUFDVyxxQkFBTixDQUE0QkosVUFBNUIsQ0FBeEI7QUFDQSxVQUFNSyxRQUFRLEdBQUdaLEtBQUssQ0FBQ2EsMkJBQU4sQ0FBa0NWLE1BQWxDLENBQWpCO0FBQ0EsVUFBTVcsWUFBWSxHQUFHZCxLQUFLLENBQUNlLCtCQUFOLENBQXNDWixNQUF0QyxDQUFyQjtBQUVBLGFBQ0UsNkJBQUMsZ0JBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBQyxPQURMO0FBRUUsUUFBQSxTQUFTLEVBQUUseUJBQUdPLGVBQUgsRUFBb0JULFNBQXBCLENBRmI7QUFHRSxRQUFBLElBQUksRUFBQyxNQUhQO0FBSUUsUUFBQSxJQUFJLEVBQUVXLFFBSlI7QUFLRSxRQUFBLEtBQUssRUFBRVYsS0FMVDtBQU1FLFFBQUEsTUFBTSxFQUFFQyxNQU5WO0FBT0UsUUFBQSxRQUFRLEVBQUVFLFFBUFo7QUFRRSxRQUFBLFFBQVEsRUFBRUQsUUFSWjtBQVNFLFFBQUEsV0FBVyxFQUFFSSxXQVRmO0FBVUUsUUFBQSxXQUFXLEVBQUVRLElBQUksQ0FBQ0MsS0FBTCxDQUFXZCxNQUFNLEdBQUcsR0FBcEIsQ0FWZjtBQVdFLFFBQUEsWUFBWSxFQUFFYSxJQUFJLENBQUNDLEtBQUwsQ0FBV2QsTUFBTSxHQUFHLEdBQXBCLENBWGhCO0FBWUUsUUFBQSxZQUFZLEVBQUVXLFlBWmhCO0FBYUUsUUFBQSxVQUFVLEVBQUVMLFVBYmQ7QUFjRSx3QkFBY0g7QUFkaEIsU0FlT0YsUUFBUSxHQUFHO0FBQUVjLFFBQUFBLEtBQUssRUFBRTtBQUFULE9BQUgsR0FBd0IsRUFmdkMsRUFnQk1uQixLQWhCTixFQURGO0FBb0JEOzs7RUF2R3FCb0Isb0I7O0FBQWxCckIsUzs4QkFBQUEsUywrQ0FLQ3NCLGlCQUFLQyxTO0FBRVI7OztBQUdBaEIsRUFBQUEsUUFBUSxFQUFFaUIsbUJBQVVDLEk7O0FBRXBCOzs7QUFHQW5CLEVBQUFBLFFBQVEsRUFBRWtCLG1CQUFVQyxJOztBQUVwQjs7OztBQUlBakIsRUFBQUEsU0FBUyxFQUFFZ0IsbUJBQVVDLEk7O0FBRXJCOzs7QUFHQWQsRUFBQUEsVUFBVSxFQUFFYSxtQkFBVUMsSTs7QUFFdEI7OztBQUdBZixFQUFBQSxXQUFXLEVBQUVjLG1CQUFVRSxNOztBQUV2Qjs7O0FBR0FqQixFQUFBQSxVQUFVLEVBQUVlLG1CQUFVRSxNOztBQUV0Qjs7O0FBR0F0QixFQUFBQSxLQUFLLEVBQUVvQixtQkFBVUcsU0FBVixDQUFvQixDQUFDSCxtQkFBVUUsTUFBWCxFQUFtQkYsbUJBQVVJLE1BQTdCLENBQXBCLEM7O0FBRVA7OztBQUdBMUIsRUFBQUEsS0FBSyxFQUFFc0IsbUJBQVVLLE1BQVYsQ0FBaUJDLFU7O0FBRXhCOzs7O0FBSUEzQixFQUFBQSxTQUFTLEVBQUVxQixtQkFBVUU7OzhCQXBEbkIxQixTLGtCQXVEa0I7QUFDcEJTLEVBQUFBLFVBQVUsRUFBRSxTQURRO0FBRXBCSixFQUFBQSxNQUFNLEVBQUUsRUFGWTtBQUdwQkQsRUFBQUEsS0FBSyxFQUFFLEdBSGE7QUFJcEJFLEVBQUFBLFFBQVEsRUFBRSxLQUpVO0FBS3BCRSxFQUFBQSxTQUFTLEVBQUUsS0FMUztBQU1wQkcsRUFBQUEsVUFBVSxFQUFFO0FBTlEsQzs7ZUFtRFQsc0JBQVVYLFNBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIFRleHRJbnB1dCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBUZXh0IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5UZXh0LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBpbnB1dCBlbGVtZW50IHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBpbnB1dCBlbGVtZW50IGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdmlzdWFsIHN0eWxpbmcgb2YgX29ubHlfIHRoZSB0ZXh0IGlucHV0IHRvIGJlIFwiaW52YWxpZFwiLlxuICAgICAqIE5vdGUgdGhhdCB0aGlzIGRvZXMgbm90IGVmZmVjdCBhbnkgYHZhbGlkYXRpb25NZXNzYWdlYC5cbiAgICAgKi9cbiAgICBpc0ludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVXNlIHRoZSBuYXRpdmUgc3BlbGwgY2hlY2sgZnVuY3Rpb25hbGl0eSBvZiB0aGUgYnJvd3Nlci5cbiAgICAgKi9cbiAgICBzcGVsbENoZWNrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwbGFjZWhvbGRlciB0ZXh0IHdoZW4gdGhlcmUgaXMgbm8gdmFsdWUgcHJlc2VudC5cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBUZXh0SW5wdXQuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgVGV4dElucHV0LlxuICAgICAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgYnV0dG9uLlxuICAgICAqIE9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICAgIGhlaWdodDogMzIsXG4gICAgd2lkdGg6IDI4MCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaXNJbnZhbGlkOiBmYWxzZSxcbiAgICBzcGVsbENoZWNrOiB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG4gICAgICBjbGFzc05hbWUsXG5cbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIGlzSW52YWxpZCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHNwZWxsQ2hlY2ssXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0VGV4dElucHV0Q2xhc3NOYW1lKGFwcGVhcmFuY2UpXG4gICAgY29uc3QgdGV4dFNpemUgPSB0aGVtZS5nZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoZW1lLmdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGlzPVwiaW5wdXRcIlxuICAgICAgICBjbGFzc05hbWU9e2N4KHRoZW1lZENsYXNzTmFtZSwgY2xhc3NOYW1lKX1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBzaXplPXt0ZXh0U2l6ZX1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgcGFkZGluZ0xlZnQ9e01hdGgucm91bmQoaGVpZ2h0IC8gMy4yKX1cbiAgICAgICAgcGFkZGluZ1JpZ2h0PXtNYXRoLnJvdW5kKGhlaWdodCAvIDMuMil9XG4gICAgICAgIGJvcmRlclJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICBzcGVsbENoZWNrPXtzcGVsbENoZWNrfVxuICAgICAgICBhcmlhLWludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgey4uLihkaXNhYmxlZCA/IHsgY29sb3I6ICdtdXRlZCcgfSA6IHt9KX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRleHRJbnB1dClcbiJdfQ==