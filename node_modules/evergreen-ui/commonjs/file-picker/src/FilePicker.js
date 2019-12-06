"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CLASS_PREFIX = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _buttons = require("../../buttons");

var _textInput = require("../../text-input");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var CLASS_PREFIX = 'evergreen-file-picker';
exports.CLASS_PREFIX = CLASS_PREFIX;

var FilePicker =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(FilePicker, _PureComponent);

  function FilePicker() {
    var _this;

    (0, _classCallCheck2.default)(this, FilePicker);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FilePicker).call(this));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "fileInputRef", function (node) {
      _this.fileInput = node;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleFileChange", function (e) {
      // Firefox returns the same array instance each time for some reason
      var files = (0, _toConsumableArray2.default)(e.target.files);

      _this.setState({
        files: files
      });

      (0, _safeInvoke.default)(_this.props.onChange, files);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleButtonClick", function () {
      _this.fileInput.click();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleBlur", function (e) {
      if (e && e.target) e.target.files = _this.state.files;
      (0, _safeInvoke.default)(_this.props.onBlur, e);
    });
    _this.state = {
      files: []
    };
    return _this;
  }

  (0, _createClass2.default)(FilePicker, [{
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
          props = (0, _objectWithoutProperties2.default)(_this$props, ["name", "accept", "required", "multiple", "disabled", "capture", "height", "onChange", "placeholder"]);
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

      return _react.default.createElement(_uiBox.default, (0, _extends2.default)({
        display: "flex",
        className: "".concat(CLASS_PREFIX, "-root")
      }, props), _react.default.createElement(_uiBox.default, {
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
      }), _react.default.createElement(_textInput.TextInput, {
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
      }), _react.default.createElement(_buttons.Button, {
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
}(_react.PureComponent);

exports.default = FilePicker;
FilePicker.displayName = "FilePicker";
(0, _defineProperty2.default)(FilePicker, "propTypes", {
  /**
   * Name attribute of the input.
   */
  name: _propTypes.default.string,

  /**
   * The accept attribute of the input.
   */
  accept: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),

  /**
   * When true, the file picker is required.
   */
  required: _propTypes.default.bool,

  /**
   * When true, accept multiple files.
   */
  multiple: _propTypes.default.bool,

  /**
   * When true, the filepicker is disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * The capture attribute of the input.
   */
  capture: _propTypes.default.bool,

  /**
   * The height of the file picker.
   */
  height: _propTypes.default.number,

  /**
   * Function called when onChange is fired
   */
  onChange: _propTypes.default.func,

  /**
   * Function called when onBlur is fired
   */
  onBlur: _propTypes.default.func,

  /**
   * Placeholder of the text input
   */
  placeholder: _propTypes.default.string
});
(0, _defineProperty2.default)(FilePicker, "defaultProps", {
  placeholder: 'Select a file to upload…'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maWxlLXBpY2tlci9zcmMvRmlsZVBpY2tlci5qcyJdLCJuYW1lcyI6WyJDTEFTU19QUkVGSVgiLCJGaWxlUGlja2VyIiwibm9kZSIsImZpbGVJbnB1dCIsImUiLCJmaWxlcyIsInRhcmdldCIsInNldFN0YXRlIiwicHJvcHMiLCJvbkNoYW5nZSIsImNsaWNrIiwic3RhdGUiLCJvbkJsdXIiLCJuYW1lIiwiYWNjZXB0IiwicmVxdWlyZWQiLCJtdWx0aXBsZSIsImRpc2FibGVkIiwiY2FwdHVyZSIsImhlaWdodCIsInBsYWNlaG9sZGVyIiwiaW5wdXRWYWx1ZSIsImxlbmd0aCIsImJ1dHRvblRleHQiLCJmaWxlSW5wdXRSZWYiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJib29sIiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVPLElBQU1BLFlBQVksR0FBRyx1QkFBckI7OztJQUVjQyxVOzs7OztBQTREbkIsd0JBQWM7QUFBQTs7QUFBQTtBQUNaO0FBRFksK0ZBeUZDLFVBQUFDLElBQUksRUFBSTtBQUNyQixZQUFLQyxTQUFMLEdBQWlCRCxJQUFqQjtBQUNELEtBM0ZhO0FBQUEsbUdBNkZLLFVBQUFFLENBQUMsRUFBSTtBQUN0QjtBQUNBLFVBQU1DLEtBQUssb0NBQU9ELENBQUMsQ0FBQ0UsTUFBRixDQUFTRCxLQUFoQixDQUFYOztBQUVBLFlBQUtFLFFBQUwsQ0FBYztBQUFFRixRQUFBQSxLQUFLLEVBQUxBO0FBQUYsT0FBZDs7QUFFQSwrQkFBVyxNQUFLRyxLQUFMLENBQVdDLFFBQXRCLEVBQWdDSixLQUFoQztBQUNELEtBcEdhO0FBQUEsb0dB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RWlCLG1CQUFVTSxJQS9DRDs7QUFpRGpCOzs7QUFHQWYsRUFBQUEsV0FBVyxFQUFFUyxtQkFBVUM7QUFwRE4sQzs4QkFEQTdCLFUsa0JBd0RHO0FBQ3BCbUIsRUFBQUEsV0FBVyxFQUFFO0FBRE8sQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tICcuLi8uLi90ZXh0LWlucHV0J1xuaW1wb3J0IHNhZmVJbnZva2UgZnJvbSAnLi4vLi4vbGliL3NhZmUtaW52b2tlJ1xuXG5leHBvcnQgY29uc3QgQ0xBU1NfUFJFRklYID0gJ2V2ZXJncmVlbi1maWxlLXBpY2tlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZVBpY2tlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBpbnB1dC5cbiAgICAgKi9cbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFjY2VwdCBhdHRyaWJ1dGUgb2YgdGhlIGlucHV0LlxuICAgICAqL1xuICAgIGFjY2VwdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZylcbiAgICBdKSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGZpbGUgcGlja2VyIGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgYWNjZXB0IG11bHRpcGxlIGZpbGVzLlxuICAgICAqL1xuICAgIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGZpbGVwaWNrZXIgaXMgZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNhcHR1cmUgYXR0cmlidXRlIG9mIHRoZSBpbnB1dC5cbiAgICAgKi9cbiAgICBjYXB0dXJlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIGZpbGUgcGlja2VyLlxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIG9uQ2hhbmdlIGlzIGZpcmVkXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gb25CbHVyIGlzIGZpcmVkXG4gICAgICovXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFBsYWNlaG9sZGVyIG9mIHRoZSB0ZXh0IGlucHV0XG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcGxhY2Vob2xkZXI6ICdTZWxlY3QgYSBmaWxlIHRvIHVwbG9hZOKApidcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaWxlczogW11cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbmFtZSxcbiAgICAgIGFjY2VwdCxcbiAgICAgIHJlcXVpcmVkLFxuICAgICAgbXVsdGlwbGUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGNhcHR1cmUsXG4gICAgICBoZWlnaHQsXG4gICAgICBvbkNoYW5nZSwgLy8gUmVtb3ZlIG9uQ2hhbmdlIGZyb20gcHJvcHNcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZmlsZXMgfSA9IHRoaXMuc3RhdGVcblxuICAgIGxldCBpbnB1dFZhbHVlXG4gICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5wdXRWYWx1ZSA9ICcnXG4gICAgfSBlbHNlIGlmIChmaWxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlucHV0VmFsdWUgPSBmaWxlc1swXS5uYW1lXG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0VmFsdWUgPSBgJHtmaWxlcy5sZW5ndGh9IGZpbGVzYFxuICAgIH1cblxuICAgIGxldCBidXR0b25UZXh0XG4gICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYnV0dG9uVGV4dCA9ICdTZWxlY3QgZmlsZSdcbiAgICB9IGVsc2UgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgYnV0dG9uVGV4dCA9ICdSZXBsYWNlIGZpbGUnXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnUmVwbGFjZSBmaWxlcydcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGNsYXNzTmFtZT17YCR7Q0xBU1NfUFJFRklYfS1yb290YH0gey4uLnByb3BzfT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGlubmVyUmVmPXt0aGlzLmZpbGVJbnB1dFJlZn1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake0NMQVNTX1BSRUZJWH0tZmlsZS1pbnB1dGB9XG4gICAgICAgICAgaXM9XCJpbnB1dFwiXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgYWNjZXB0PXthY2NlcHR9XG4gICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgIG11bHRpcGxlPXttdWx0aXBsZX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgY2FwdHVyZT17Y2FwdHVyZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWxlQ2hhbmdlfVxuICAgICAgICAgIGRpc3BsYXk9XCJub25lXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtDTEFTU19QUkVGSVh9LXRleHQtaW5wdXRgfVxuICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIC8vIFRoZXJlJ3MgYSB3ZWlyZCBzcGVjaWZpdHkgaXNzdWUgd2hlbiB0aGVyZSdzIHR3byBkaWZmZXJlbnRseSBzaXplZCBpbnB1dHMgb24gdGhlIHBhZ2VcbiAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1cz1cIjAgIWltcG9ydGFudFwiXG4gICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM9XCIwICFpbXBvcnRhbnRcIlxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGZsZXg9ezF9XG4gICAgICAgICAgdGV4dE92ZXJmbG93PVwiZWxsaXBzaXNcIlxuICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake0NMQVNTX1BSRUZJWH0tYnV0dG9uYH1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzPXswfVxuICAgICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM9ezB9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgPlxuICAgICAgICAgIHtidXR0b25UZXh0fVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIGZpbGVJbnB1dFJlZiA9IG5vZGUgPT4ge1xuICAgIHRoaXMuZmlsZUlucHV0ID0gbm9kZVxuICB9XG5cbiAgaGFuZGxlRmlsZUNoYW5nZSA9IGUgPT4ge1xuICAgIC8vIEZpcmVmb3ggcmV0dXJucyB0aGUgc2FtZSBhcnJheSBpbnN0YW5jZSBlYWNoIHRpbWUgZm9yIHNvbWUgcmVhc29uXG4gICAgY29uc3QgZmlsZXMgPSBbLi4uZS50YXJnZXQuZmlsZXNdXG5cbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsZXMgfSlcblxuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbkNoYW5nZSwgZmlsZXMpXG4gIH1cblxuICBoYW5kbGVCdXR0b25DbGljayA9ICgpID0+IHtcbiAgICB0aGlzLmZpbGVJbnB1dC5jbGljaygpXG4gIH1cblxuICBoYW5kbGVCbHVyID0gZSA9PiB7XG4gICAgaWYgKGUgJiYgZS50YXJnZXQpIGUudGFyZ2V0LmZpbGVzID0gdGhpcy5zdGF0ZS5maWxlc1xuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbkJsdXIsIGUpXG4gIH1cbn1cbiJdfQ==