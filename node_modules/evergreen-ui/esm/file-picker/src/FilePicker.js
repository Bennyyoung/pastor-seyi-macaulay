import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { Button } from '../../buttons';
import { TextInput } from '../../text-input';
import safeInvoke from '../../lib/safe-invoke';
export var CLASS_PREFIX = 'evergreen-file-picker';

var FilePicker =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FilePicker, _PureComponent);

  function FilePicker() {
    var _this;

    _classCallCheck(this, FilePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FilePicker).call(this));

    _defineProperty(_assertThisInitialized(_this), "fileInputRef", function (node) {
      _this.fileInput = node;
    });

    _defineProperty(_assertThisInitialized(_this), "handleFileChange", function (e) {
      // Firefox returns the same array instance each time for some reason
      var files = _toConsumableArray(e.target.files);

      _this.setState({
        files: files
      });

      safeInvoke(_this.props.onChange, files);
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonClick", function () {
      _this.fileInput.click();
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (e) {
      if (e && e.target) e.target.files = _this.state.files;
      safeInvoke(_this.props.onBlur, e);
    });

    _this.state = {
      files: []
    };
    return _this;
  }

  _createClass(FilePicker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          accept = _this$props.accept,
          required = _this$props.required,
          multiple = _this$props.multiple,
          disabled = _this$props.disabled,
          capture = _this$props.capture,
          height = _this$props.height,
          onChange = _this$props.onChange,
          placeholder = _this$props.placeholder,
          props = _objectWithoutProperties(_this$props, ["name", "accept", "required", "multiple", "disabled", "capture", "height", "onChange", "placeholder"]);

      var files = this.state.files;
      var inputValue;

      if (files.length === 0) {
        inputValue = '';
      } else if (files.length === 1) {
        inputValue = files[0].name;
      } else {
        inputValue = "".concat(files.length, " files");
      }

      var buttonText;

      if (files.length === 0) {
        buttonText = 'Select file';
      } else if (files.length === 1) {
        buttonText = 'Replace file';
      } else {
        buttonText = 'Replace files';
      }

      return React.createElement(Box, _extends({
        display: "flex",
        className: "".concat(CLASS_PREFIX, "-root")
      }, props), React.createElement(Box, {
        innerRef: this.fileInputRef,
        className: "".concat(CLASS_PREFIX, "-file-input"),
        is: "input",
        type: "file",
        name: name,
        accept: accept,
        required: required,
        multiple: multiple,
        disabled: disabled,
        capture: capture,
        onChange: this.handleFileChange,
        display: "none"
      }), React.createElement(TextInput, {
        className: "".concat(CLASS_PREFIX, "-text-input"),
        readOnly: true,
        value: inputValue,
        placeholder: placeholder // There's a weird specifity issue when there's two differently sized inputs on the page
        ,
        borderTopRightRadius: "0 !important",
        borderBottomRightRadius: "0 !important",
        height: height,
        flex: 1,
        textOverflow: "ellipsis",
        onBlur: this.handleBlur
      }), React.createElement(Button, {
        className: "".concat(CLASS_PREFIX, "-button"),
        onClick: this.handleButtonClick,
        disabled: disabled,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        height: height,
        flexShrink: 0,
        type: "button",
        onBlur: this.handleBlur
      }, buttonText));
    }
  }]);

  return FilePicker;
}(PureComponent);

FilePicker.displayName = "FilePicker";

_defineProperty(FilePicker, "propTypes", {
  /**
   * Name attribute of the input.
   */
  name: PropTypes.string,

  /**
   * The accept attribute of the input.
   */
  accept: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

  /**
   * When true, the file picker is required.
   */
  required: PropTypes.bool,

  /**
   * When true, accept multiple files.
   */
  multiple: PropTypes.bool,

  /**
   * When true, the filepicker is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The capture attribute of the input.
   */
  capture: PropTypes.bool,

  /**
   * The height of the file picker.
   */
  height: PropTypes.number,

  /**
   * Function called when onChange is fired
   */
  onChange: PropTypes.func,

  /**
   * Function called when onBlur is fired
   */
  onBlur: PropTypes.func,

  /**
   * Placeholder of the text input
   */
  placeholder: PropTypes.string
});

_defineProperty(FilePicker, "defaultProps", {
  placeholder: 'Select a file to upload…'
});

export { FilePicker as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maWxlLXBpY2tlci9zcmMvRmlsZVBpY2tlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJCdXR0b24iLCJUZXh0SW5wdXQiLCJzYWZlSW52b2tlIiwiQ0xBU1NfUFJFRklYIiwiRmlsZVBpY2tlciIsIm5vZGUiLCJmaWxlSW5wdXQiLCJlIiwiZmlsZXMiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInByb3BzIiwib25DaGFuZ2UiLCJjbGljayIsInN0YXRlIiwib25CbHVyIiwibmFtZSIsImFjY2VwdCIsInJlcXVpcmVkIiwibXVsdGlwbGUiLCJkaXNhYmxlZCIsImNhcHR1cmUiLCJoZWlnaHQiLCJwbGFjZWhvbGRlciIsImlucHV0VmFsdWUiLCJsZW5ndGgiLCJidXR0b25UZXh0IiwiZmlsZUlucHV0UmVmIiwiaGFuZGxlRmlsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJoYW5kbGVCdXR0b25DbGljayIsInN0cmluZyIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJib29sIiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7QUFDQSxTQUFTQyxNQUFULFFBQXVCLGVBQXZCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixrQkFBMUI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLHVCQUF2QjtBQUVBLE9BQU8sSUFBTUMsWUFBWSxHQUFHLHVCQUFyQjs7SUFFY0MsVTs7Ozs7QUE0RG5CLHdCQUFjO0FBQUE7O0FBQUE7O0FBQ1o7O0FBRFksbUVBeUZDLFVBQUFDLElBQUksRUFBSTtBQUNyQixZQUFLQyxTQUFMLEdBQWlCRCxJQUFqQjtBQUNELEtBM0ZhOztBQUFBLHVFQTZGSyxVQUFBRSxDQUFDLEVBQUk7QUFD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QUFBQSxRQUFRLEVBQUVyQixTQUFTLENBQUNvQyxJQXRCSDs7QUF3QmpCOzs7QUFHQWQsRUFBQUEsUUFBUSxFQUFFdEIsU0FBUyxDQUFDb0MsSUEzQkg7O0FBNkJqQjs7O0FBR0FiLEVBQUFBLE9BQU8sRUFBRXZCLFNBQVMsQ0FBQ29DLElBaENGOztBQWtDakI7OztBQUdBWixFQUFBQSxNQUFNLEVBQUV4QixTQUFTLENBQUNxQyxNQXJDRDs7QUF1Q2pCOzs7QUFHQXZCLEVBQUFBLFFBQVEsRUFBRWQsU0FBUyxDQUFDc0MsSUExQ0g7O0FBNENqQjs7O0FBR0FyQixFQUFBQSxNQUFNLEVBQUVqQixTQUFTLENBQUNzQyxJQS9DRDs7QUFpRGpCOzs7QUFHQWIsRUFBQUEsV0FBVyxFQUFFekIsU0FBUyxDQUFDaUM7QUFwRE4sQzs7Z0JBREEzQixVLGtCQXdERztBQUNwQm1CLEVBQUFBLFdBQVcsRUFBRTtBQURPLEM7O1NBeERIbkIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tICcuLi8uLi90ZXh0LWlucHV0J1xuaW1wb3J0IHNhZmVJbnZva2UgZnJvbSAnLi4vLi4vbGliL3NhZmUtaW52b2tlJ1xuXG5leHBvcnQgY29uc3QgQ0xBU1NfUFJFRklYID0gJ2V2ZXJncmVlbi1maWxlLXBpY2tlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZVBpY2tlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBpbnB1dC5cbiAgICAgKi9cbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFjY2VwdCBhdHRyaWJ1dGUgb2YgdGhlIGlucHV0LlxuICAgICAqL1xuICAgIGFjY2VwdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZylcbiAgICBdKSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGZpbGUgcGlja2VyIGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgYWNjZXB0IG11bHRpcGxlIGZpbGVzLlxuICAgICAqL1xuICAgIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGZpbGVwaWNrZXIgaXMgZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNhcHR1cmUgYXR0cmlidXRlIG9mIHRoZSBpbnB1dC5cbiAgICAgKi9cbiAgICBjYXB0dXJlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIGZpbGUgcGlja2VyLlxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIG9uQ2hhbmdlIGlzIGZpcmVkXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gb25CbHVyIGlzIGZpcmVkXG4gICAgICovXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFBsYWNlaG9sZGVyIG9mIHRoZSB0ZXh0IGlucHV0XG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcGxhY2Vob2xkZXI6ICdTZWxlY3QgYSBmaWxlIHRvIHVwbG9hZOKApidcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaWxlczogW11cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbmFtZSxcbiAgICAgIGFjY2VwdCxcbiAgICAgIHJlcXVpcmVkLFxuICAgICAgbXVsdGlwbGUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGNhcHR1cmUsXG4gICAgICBoZWlnaHQsXG4gICAgICBvbkNoYW5nZSwgLy8gUmVtb3ZlIG9uQ2hhbmdlIGZyb20gcHJvcHNcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZmlsZXMgfSA9IHRoaXMuc3RhdGVcblxuICAgIGxldCBpbnB1dFZhbHVlXG4gICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5wdXRWYWx1ZSA9ICcnXG4gICAgfSBlbHNlIGlmIChmaWxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlucHV0VmFsdWUgPSBmaWxlc1swXS5uYW1lXG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0VmFsdWUgPSBgJHtmaWxlcy5sZW5ndGh9IGZpbGVzYFxuICAgIH1cblxuICAgIGxldCBidXR0b25UZXh0XG4gICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYnV0dG9uVGV4dCA9ICdTZWxlY3QgZmlsZSdcbiAgICB9IGVsc2UgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgYnV0dG9uVGV4dCA9ICdSZXBsYWNlIGZpbGUnXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnUmVwbGFjZSBmaWxlcydcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGNsYXNzTmFtZT17YCR7Q0xBU1NfUFJFRklYfS1yb290YH0gey4uLnByb3BzfT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGlubmVyUmVmPXt0aGlzLmZpbGVJbnB1dFJlZn1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake0NMQVNTX1BSRUZJWH0tZmlsZS1pbnB1dGB9XG4gICAgICAgICAgaXM9XCJpbnB1dFwiXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgYWNjZXB0PXthY2NlcHR9XG4gICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgIG11bHRpcGxlPXttdWx0aXBsZX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgY2FwdHVyZT17Y2FwdHVyZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWxlQ2hhbmdlfVxuICAgICAgICAgIGRpc3BsYXk9XCJub25lXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtDTEFTU19QUkVGSVh9LXRleHQtaW5wdXRgfVxuICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIC8vIFRoZXJlJ3MgYSB3ZWlyZCBzcGVjaWZpdHkgaXNzdWUgd2hlbiB0aGVyZSdzIHR3byBkaWZmZXJlbnRseSBzaXplZCBpbnB1dHMgb24gdGhlIHBhZ2VcbiAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1cz1cIjAgIWltcG9ydGFudFwiXG4gICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM9XCIwICFpbXBvcnRhbnRcIlxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGZsZXg9ezF9XG4gICAgICAgICAgdGV4dE92ZXJmbG93PVwiZWxsaXBzaXNcIlxuICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake0NMQVNTX1BSRUZJWH0tYnV0dG9uYH1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzPXswfVxuICAgICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM9ezB9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgPlxuICAgICAgICAgIHtidXR0b25UZXh0fVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIGZpbGVJbnB1dFJlZiA9IG5vZGUgPT4ge1xuICAgIHRoaXMuZmlsZUlucHV0ID0gbm9kZVxuICB9XG5cbiAgaGFuZGxlRmlsZUNoYW5nZSA9IGUgPT4ge1xuICAgIC8vIEZpcmVmb3ggcmV0dXJucyB0aGUgc2FtZSBhcnJheSBpbnN0YW5jZSBlYWNoIHRpbWUgZm9yIHNvbWUgcmVhc29uXG4gICAgY29uc3QgZmlsZXMgPSBbLi4uZS50YXJnZXQuZmlsZXNdXG5cbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsZXMgfSlcblxuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbkNoYW5nZSwgZmlsZXMpXG4gIH1cblxuICBoYW5kbGVCdXR0b25DbGljayA9ICgpID0+IHtcbiAgICB0aGlzLmZpbGVJbnB1dC5jbGljaygpXG4gIH1cblxuICBoYW5kbGVCbHVyID0gZSA9PiB7XG4gICAgaWYgKGUgJiYgZS50YXJnZXQpIGUudGFyZ2V0LmZpbGVzID0gdGhpcy5zdGF0ZS5maWxlc1xuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbkJsdXIsIGUpXG4gIH1cbn1cbiJdfQ==