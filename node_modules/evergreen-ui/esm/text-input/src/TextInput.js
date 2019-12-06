import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Text } from '../../typography';
import { withTheme } from '../../theme';

var TextInput =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TextInput, _PureComponent);

  function TextInput() {
    _classCallCheck(this, TextInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextInput).apply(this, arguments));
  }

  _createClass(TextInput, [{
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
          props = _objectWithoutProperties(_this$props, ["theme", "className", "width", "height", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck"]);

      var themedClassName = theme.getTextInputClassName(appearance);
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      return React.createElement(Text, _extends({
        is: "input",
        className: cx(themedClassName, className),
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
}(PureComponent);

TextInput.displayName = "TextInput";

_defineProperty(TextInput, "propTypes", _objectSpread({}, Text.propTypes, {
  /**
   * Makes the input element required.
   */
  required: PropTypes.bool,

  /**
   * Makes the input element disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Sets visual styling of _only_ the text input to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid: PropTypes.bool,

  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck: PropTypes.bool,

  /**
   * The placeholder text when there is no value present.
   */
  placeholder: PropTypes.string,

  /**
   * The appearance of the TextInput.
   */
  appearance: PropTypes.string,

  /**
   * The width of the TextInput.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}));

_defineProperty(TextInput, "defaultProps", {
  appearance: 'default',
  height: 32,
  width: 280,
  disabled: false,
  isInvalid: false,
  spellCheck: true
});

export default withTheme(TextInput);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXh0LWlucHV0L3NyYy9UZXh0SW5wdXQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiY3giLCJUZXh0Iiwid2l0aFRoZW1lIiwiVGV4dElucHV0IiwicHJvcHMiLCJ0aGVtZSIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzYWJsZWQiLCJyZXF1aXJlZCIsImlzSW52YWxpZCIsImFwcGVhcmFuY2UiLCJwbGFjZWhvbGRlciIsInNwZWxsQ2hlY2siLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRUZXh0SW5wdXRDbGFzc05hbWUiLCJ0ZXh0U2l6ZSIsImdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCIsImJvcmRlclJhZGl1cyIsImdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQiLCJNYXRoIiwicm91bmQiLCJjb2xvciIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjs7SUFFTUMsUzs7Ozs7Ozs7Ozs7Ozs2QkFnRUs7QUFBQSx3QkFjSCxLQUFLQyxLQWRGO0FBQUEsVUFFTEMsS0FGSyxlQUVMQSxLQUZLO0FBQUEsVUFHTEMsU0FISyxlQUdMQSxTQUhLO0FBQUEsVUFLTEMsS0FMSyxlQUtMQSxLQUxLO0FBQUEsVUFNTEMsTUFOSyxlQU1MQSxNQU5LO0FBQUEsVUFPTEMsUUFQSyxlQU9MQSxRQVBLO0FBQUEsVUFRTEMsUUFSSyxlQVFMQSxRQVJLO0FBQUEsVUFTTEMsU0FUSyxlQVNMQSxTQVRLO0FBQUEsVUFVTEMsVUFWSyxlQVVMQSxVQVZLO0FBQUEsVUFXTEMsV0FYSyxlQVdMQSxXQVhLO0FBQUEsVUFZTEMsVUFaSyxlQVlMQSxVQVpLO0FBQUEsVUFhRlYsS0FiRTs7QUFlUCxVQUFNVyxlQUFlLEdBQUdWLEtBQUssQ0FBQ1cscUJBQU4sQ0FBNEJKLFVBQTVCLENBQXhCO0FBQ0EsVUFBTUssUUFBUSxHQUFHWixLQUFLLENBQUNhLDJCQUFOLENBQWtDVixNQUFsQyxDQUFqQjtBQUNBLFVBQU1XLFlBQVksR0FBR2QsS0FBSyxDQUFDZSwrQkFBTixDQUFzQ1osTUFBdEMsQ0FBckI7QUFFQSxhQUNFLG9CQUFDLElBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBQyxPQURMO0FBRUUsUUFBQSxTQUFTLEVBQUVSLEVBQUUsQ0FBQ2UsZUFBRCxFQUFrQlQsU0FBbEIsQ0FGZjtBQUdFLFFBQUEsSUFBSSxFQUFDLE1BSFA7QUFJRSxRQUFBLElBQUksRUFBRVcsUUFKUjtBQUtFLFFBQUEsS0FBSyxFQUFFVixLQUxUO0FBTUUsUUFBQSxNQUFNLEVBQUVDLE1BTlY7QUFPRSxRQUFBLFFBQVEsRUFBRUUsUUFQWjtBQVFFLFFBQUEsUUFBUSxFQUFFRCxRQVJaO0FBU0UsUUFBQSxXQUFXLEVBQUVJLFdBVGY7QUFVRSxRQUFBLFdBQVcsRUFBRVEsSUFBSSxDQUFDQyxLQUFMLENBQVdkLE1BQU0sR0FBRyxHQUFwQixDQVZmO0FBV0UsUUFBQSxZQUFZLEVBQUVhLElBQUksQ0FBQ0MsS0FBTCxDQUFXZCxNQUFNLEdBQUcsR0FBcEIsQ0FYaEI7QUFZRSxRQUFBLFlBQVksRUFBRVcsWUFaaEI7QUFhRSxRQUFBLFVBQVUsRUFBRUwsVUFiZDtBQWNFLHdCQUFjSDtBQWRoQixTQWVPRixRQUFRLEdBQUc7QUFBRWMsUUFBQUEsS0FBSyxFQUFFO0FBQVQsT0FBSCxHQUF3QixFQWZ2QyxFQWdCTW5CLEtBaEJOLEVBREY7QUFvQkQ7Ozs7RUF2R3FCTixhOztBQUFsQkssUzs7Z0JBQUFBLFMsaUNBS0NGLElBQUksQ0FBQ3VCLFM7QUFFUjs7O0FBR0FkLEVBQUFBLFFBQVEsRUFBRVgsU0FBUyxDQUFDMEIsSTs7QUFFcEI7OztBQUdBaEIsRUFBQUEsUUFBUSxFQUFFVixTQUFTLENBQUMwQixJOztBQUVwQjs7OztBQUlBZCxFQUFBQSxTQUFTLEVBQUVaLFNBQVMsQ0FBQzBCLEk7O0FBRXJCOzs7QUFHQVgsRUFBQUEsVUFBVSxFQUFFZixTQUFTLENBQUMwQixJOztBQUV0Qjs7O0FBR0FaLEVBQUFBLFdBQVcsRUFBRWQsU0FBUyxDQUFDMkIsTTs7QUFFdkI7OztBQUdBZCxFQUFBQSxVQUFVLEVBQUViLFNBQVMsQ0FBQzJCLE07O0FBRXRCOzs7QUFHQW5CLEVBQUFBLEtBQUssRUFBRVIsU0FBUyxDQUFDNEIsU0FBVixDQUFvQixDQUFDNUIsU0FBUyxDQUFDMkIsTUFBWCxFQUFtQjNCLFNBQVMsQ0FBQzZCLE1BQTdCLENBQXBCLEM7O0FBRVA7OztBQUdBdkIsRUFBQUEsS0FBSyxFQUFFTixTQUFTLENBQUM4QixNQUFWLENBQWlCQyxVOztBQUV4Qjs7OztBQUlBeEIsRUFBQUEsU0FBUyxFQUFFUCxTQUFTLENBQUMyQjs7O2dCQXBEbkJ2QixTLGtCQXVEa0I7QUFDcEJTLEVBQUFBLFVBQVUsRUFBRSxTQURRO0FBRXBCSixFQUFBQSxNQUFNLEVBQUUsRUFGWTtBQUdwQkQsRUFBQUEsS0FBSyxFQUFFLEdBSGE7QUFJcEJFLEVBQUFBLFFBQVEsRUFBRSxLQUpVO0FBS3BCRSxFQUFBQSxTQUFTLEVBQUUsS0FMUztBQU1wQkcsRUFBQUEsVUFBVSxFQUFFO0FBTlEsQzs7QUFtRHhCLGVBQWVaLFNBQVMsQ0FBQ0MsU0FBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIFRleHRJbnB1dCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBUZXh0IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5UZXh0LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBpbnB1dCBlbGVtZW50IHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBpbnB1dCBlbGVtZW50IGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdmlzdWFsIHN0eWxpbmcgb2YgX29ubHlfIHRoZSB0ZXh0IGlucHV0IHRvIGJlIFwiaW52YWxpZFwiLlxuICAgICAqIE5vdGUgdGhhdCB0aGlzIGRvZXMgbm90IGVmZmVjdCBhbnkgYHZhbGlkYXRpb25NZXNzYWdlYC5cbiAgICAgKi9cbiAgICBpc0ludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVXNlIHRoZSBuYXRpdmUgc3BlbGwgY2hlY2sgZnVuY3Rpb25hbGl0eSBvZiB0aGUgYnJvd3Nlci5cbiAgICAgKi9cbiAgICBzcGVsbENoZWNrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwbGFjZWhvbGRlciB0ZXh0IHdoZW4gdGhlcmUgaXMgbm8gdmFsdWUgcHJlc2VudC5cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBUZXh0SW5wdXQuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgVGV4dElucHV0LlxuICAgICAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgYnV0dG9uLlxuICAgICAqIE9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICAgIGhlaWdodDogMzIsXG4gICAgd2lkdGg6IDI4MCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaXNJbnZhbGlkOiBmYWxzZSxcbiAgICBzcGVsbENoZWNrOiB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG4gICAgICBjbGFzc05hbWUsXG5cbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIGlzSW52YWxpZCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHNwZWxsQ2hlY2ssXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0VGV4dElucHV0Q2xhc3NOYW1lKGFwcGVhcmFuY2UpXG4gICAgY29uc3QgdGV4dFNpemUgPSB0aGVtZS5nZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoZW1lLmdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGlzPVwiaW5wdXRcIlxuICAgICAgICBjbGFzc05hbWU9e2N4KHRoZW1lZENsYXNzTmFtZSwgY2xhc3NOYW1lKX1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBzaXplPXt0ZXh0U2l6ZX1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgcGFkZGluZ0xlZnQ9e01hdGgucm91bmQoaGVpZ2h0IC8gMy4yKX1cbiAgICAgICAgcGFkZGluZ1JpZ2h0PXtNYXRoLnJvdW5kKGhlaWdodCAvIDMuMil9XG4gICAgICAgIGJvcmRlclJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICBzcGVsbENoZWNrPXtzcGVsbENoZWNrfVxuICAgICAgICBhcmlhLWludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgey4uLihkaXNhYmxlZCA/IHsgY29sb3I6ICdtdXRlZCcgfSA6IHt9KX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRleHRJbnB1dClcbiJdfQ==