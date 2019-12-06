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

var Textarea =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Textarea, _PureComponent);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, _getPrototypeOf(Textarea).apply(this, arguments));
  }

  _createClass(Textarea, [{
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
          grammarly = _this$props.grammarly,
          props = _objectWithoutProperties(_this$props, ["theme", "className", "width", "height", "disabled", "required", "isInvalid", "appearance", "placeholder", "spellCheck", "grammarly"]);

      var themedClassName = theme.getTextareaClassName(appearance);
      return React.createElement(Text, _extends({
        is: "textarea",
        className: cx(themedClassName, className),
        size: 400,
        width: width,
        height: height,
        required: required,
        disabled: disabled,
        placeholder: placeholder,
        paddingLeft: Math.round(height / 3.2),
        paddingRight: Math.round(height / 3.2),
        borderRadius: 3,
        spellCheck: spellCheck,
        "aria-invalid": isInvalid,
        "data-gramm_editor": grammarly
      }, disabled ? {
        color: 'muted'
      } : {}, Textarea.styles, props));
    }
  }]);

  return Textarea;
}(PureComponent);

Textarea.displayName = "Textarea";

_defineProperty(Textarea, "propTypes", _objectSpread({}, Text.propTypes, {
  /**
   * Makes the textarea element required.
   */
  required: PropTypes.bool,

  /**
   * Makes the textarea element disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Sets visual styling of _only_ the text area to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid: PropTypes.bool,

  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck: PropTypes.bool,

  /**
   * Allow the Grammarly browser extension to attach to the backing textarea.
   */
  grammarly: PropTypes.bool,

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

_defineProperty(Textarea, "defaultProps", {
  appearance: 'default',
  width: '100%',
  disabled: false,
  isInvalid: false,
  spellCheck: true,
  grammarly: false
});

_defineProperty(Textarea, "styles", {
  minHeight: 80,
  paddingX: 10,
  paddingY: 8
});

export default withTheme(Textarea);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXh0YXJlYS9zcmMvVGV4dGFyZWEuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiY3giLCJUZXh0Iiwid2l0aFRoZW1lIiwiVGV4dGFyZWEiLCJwcm9wcyIsInRoZW1lIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNhYmxlZCIsInJlcXVpcmVkIiwiaXNJbnZhbGlkIiwiYXBwZWFyYW5jZSIsInBsYWNlaG9sZGVyIiwic3BlbGxDaGVjayIsImdyYW1tYXJseSIsInRoZW1lZENsYXNzTmFtZSIsImdldFRleHRhcmVhQ2xhc3NOYW1lIiwiTWF0aCIsInJvdW5kIiwiY29sb3IiLCJzdHlsZXMiLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwib25lT2ZUeXBlIiwibnVtYmVyIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm1pbkhlaWdodCIsInBhZGRpbmdYIiwicGFkZGluZ1kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEVBQVAsTUFBZSxZQUFmO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCOztJQUVNQyxROzs7Ozs7Ozs7Ozs7OzZCQTJFSztBQUFBLHdCQWVILEtBQUtDLEtBZkY7QUFBQSxVQUVMQyxLQUZLLGVBRUxBLEtBRks7QUFBQSxVQUdMQyxTQUhLLGVBR0xBLFNBSEs7QUFBQSxVQUtMQyxLQUxLLGVBS0xBLEtBTEs7QUFBQSxVQU1MQyxNQU5LLGVBTUxBLE1BTks7QUFBQSxVQU9MQyxRQVBLLGVBT0xBLFFBUEs7QUFBQSxVQVFMQyxRQVJLLGVBUUxBLFFBUks7QUFBQSxVQVNMQyxTQVRLLGVBU0xBLFNBVEs7QUFBQSxVQVVMQyxVQVZLLGVBVUxBLFVBVks7QUFBQSxVQVdMQyxXQVhLLGVBV0xBLFdBWEs7QUFBQSxVQVlMQyxVQVpLLGVBWUxBLFVBWks7QUFBQSxVQWFMQyxTQWJLLGVBYUxBLFNBYks7QUFBQSxVQWNGWCxLQWRFOztBQWdCUCxVQUFNWSxlQUFlLEdBQUdYLEtBQUssQ0FBQ1ksb0JBQU4sQ0FBMkJMLFVBQTNCLENBQXhCO0FBRUEsYUFDRSxvQkFBQyxJQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUMsVUFETDtBQUVFLFFBQUEsU0FBUyxFQUFFWixFQUFFLENBQUNnQixlQUFELEVBQWtCVixTQUFsQixDQUZmO0FBR0UsUUFBQSxJQUFJLEVBQUUsR0FIUjtBQUlFLFFBQUEsS0FBSyxFQUFFQyxLQUpUO0FBS0UsUUFBQSxNQUFNLEVBQUVDLE1BTFY7QUFNRSxRQUFBLFFBQVEsRUFBRUUsUUFOWjtBQU9FLFFBQUEsUUFBUSxFQUFFRCxRQVBaO0FBUUUsUUFBQSxXQUFXLEVBQUVJLFdBUmY7QUFTRSxRQUFBLFdBQVcsRUFBRUssSUFBSSxDQUFDQyxLQUFMLENBQVdYLE1BQU0sR0FBRyxHQUFwQixDQVRmO0FBVUUsUUFBQSxZQUFZLEVBQUVVLElBQUksQ0FBQ0MsS0FBTCxDQUFXWCxNQUFNLEdBQUcsR0FBcEIsQ0FWaEI7QUFXRSxRQUFBLFlBQVksRUFBRSxDQVhoQjtBQVlFLFFBQUEsVUFBVSxFQUFFTSxVQVpkO0FBYUUsd0JBQWNILFNBYmhCO0FBY0UsNkJBQW1CSTtBQWRyQixTQWVPTixRQUFRLEdBQUc7QUFBRVcsUUFBQUEsS0FBSyxFQUFFO0FBQVQsT0FBSCxHQUF3QixFQWZ2QyxFQWdCTWpCLFFBQVEsQ0FBQ2tCLE1BaEJmLEVBaUJNakIsS0FqQk4sRUFERjtBQXFCRDs7OztFQWxIb0JOLGE7O0FBQWpCSyxROztnQkFBQUEsUSxpQ0FLQ0YsSUFBSSxDQUFDcUIsUztBQUVSOzs7QUFHQVosRUFBQUEsUUFBUSxFQUFFWCxTQUFTLENBQUN3QixJOztBQUVwQjs7O0FBR0FkLEVBQUFBLFFBQVEsRUFBRVYsU0FBUyxDQUFDd0IsSTs7QUFFcEI7Ozs7QUFJQVosRUFBQUEsU0FBUyxFQUFFWixTQUFTLENBQUN3QixJOztBQUVyQjs7O0FBR0FULEVBQUFBLFVBQVUsRUFBRWYsU0FBUyxDQUFDd0IsSTs7QUFFdEI7OztBQUdBUixFQUFBQSxTQUFTLEVBQUVoQixTQUFTLENBQUN3QixJOztBQUVyQjs7O0FBR0FWLEVBQUFBLFdBQVcsRUFBRWQsU0FBUyxDQUFDeUIsTTs7QUFFdkI7OztBQUdBWixFQUFBQSxVQUFVLEVBQUViLFNBQVMsQ0FBQ3lCLE07O0FBRXRCOzs7QUFHQWpCLEVBQUFBLEtBQUssRUFBRVIsU0FBUyxDQUFDMEIsU0FBVixDQUFvQixDQUFDMUIsU0FBUyxDQUFDeUIsTUFBWCxFQUFtQnpCLFNBQVMsQ0FBQzJCLE1BQTdCLENBQXBCLEM7O0FBRVA7OztBQUdBckIsRUFBQUEsS0FBSyxFQUFFTixTQUFTLENBQUM0QixNQUFWLENBQWlCQyxVOztBQUV4Qjs7OztBQUlBdEIsRUFBQUEsU0FBUyxFQUFFUCxTQUFTLENBQUN5Qjs7O2dCQXpEbkJyQixRLGtCQTREa0I7QUFDcEJTLEVBQUFBLFVBQVUsRUFBRSxTQURRO0FBRXBCTCxFQUFBQSxLQUFLLEVBQUUsTUFGYTtBQUdwQkUsRUFBQUEsUUFBUSxFQUFFLEtBSFU7QUFJcEJFLEVBQUFBLFNBQVMsRUFBRSxLQUpTO0FBS3BCRyxFQUFBQSxVQUFVLEVBQUUsSUFMUTtBQU1wQkMsRUFBQUEsU0FBUyxFQUFFO0FBTlMsQzs7Z0JBNURsQlosUSxZQXFFWTtBQUNkMEIsRUFBQUEsU0FBUyxFQUFFLEVBREc7QUFFZEMsRUFBQUEsUUFBUSxFQUFFLEVBRkk7QUFHZEMsRUFBQUEsUUFBUSxFQUFFO0FBSEksQzs7QUFnRGxCLGVBQWU3QixTQUFTLENBQUNDLFFBQUQsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBUZXh0IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5UZXh0LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSB0ZXh0YXJlYSBlbGVtZW50IHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSB0ZXh0YXJlYSBlbGVtZW50IGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdmlzdWFsIHN0eWxpbmcgb2YgX29ubHlfIHRoZSB0ZXh0IGFyZWEgdG8gYmUgXCJpbnZhbGlkXCIuXG4gICAgICogTm90ZSB0aGF0IHRoaXMgZG9lcyBub3QgZWZmZWN0IGFueSBgdmFsaWRhdGlvbk1lc3NhZ2VgLlxuICAgICAqL1xuICAgIGlzSW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBVc2UgdGhlIG5hdGl2ZSBzcGVsbCBjaGVjayBmdW5jdGlvbmFsaXR5IG9mIHRoZSBicm93c2VyLlxuICAgICAqL1xuICAgIHNwZWxsQ2hlY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQWxsb3cgdGhlIEdyYW1tYXJseSBicm93c2VyIGV4dGVuc2lvbiB0byBhdHRhY2ggdG8gdGhlIGJhY2tpbmcgdGV4dGFyZWEuXG4gICAgICovXG4gICAgZ3JhbW1hcmx5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwbGFjZWhvbGRlciB0ZXh0IHdoZW4gdGhlcmUgaXMgbm8gdmFsdWUgcHJlc2VudC5cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBUZXh0SW5wdXQuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgVGV4dElucHV0LlxuICAgICAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgYnV0dG9uLlxuICAgICAqIE9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGlzSW52YWxpZDogZmFsc2UsXG4gICAgc3BlbGxDaGVjazogdHJ1ZSxcbiAgICBncmFtbWFybHk6IGZhbHNlXG4gIH1cblxuICBzdGF0aWMgc3R5bGVzID0ge1xuICAgIG1pbkhlaWdodDogODAsXG4gICAgcGFkZGluZ1g6IDEwLFxuICAgIHBhZGRpbmdZOiA4XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG4gICAgICBjbGFzc05hbWUsXG5cbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIGlzSW52YWxpZCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHNwZWxsQ2hlY2ssXG4gICAgICBncmFtbWFybHksXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0VGV4dGFyZWFDbGFzc05hbWUoYXBwZWFyYW5jZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cInRleHRhcmVhXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjeCh0aGVtZWRDbGFzc05hbWUsIGNsYXNzTmFtZSl9XG4gICAgICAgIHNpemU9ezQwMH1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgcGFkZGluZ0xlZnQ9e01hdGgucm91bmQoaGVpZ2h0IC8gMy4yKX1cbiAgICAgICAgcGFkZGluZ1JpZ2h0PXtNYXRoLnJvdW5kKGhlaWdodCAvIDMuMil9XG4gICAgICAgIGJvcmRlclJhZGl1cz17M31cbiAgICAgICAgc3BlbGxDaGVjaz17c3BlbGxDaGVja31cbiAgICAgICAgYXJpYS1pbnZhbGlkPXtpc0ludmFsaWR9XG4gICAgICAgIGRhdGEtZ3JhbW1fZWRpdG9yPXtncmFtbWFybHl9XG4gICAgICAgIHsuLi4oZGlzYWJsZWQgPyB7IGNvbG9yOiAnbXV0ZWQnIH0gOiB7fSl9XG4gICAgICAgIHsuLi5UZXh0YXJlYS5zdHlsZXN9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShUZXh0YXJlYSlcbiJdfQ==