import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { dimensions, spacing, position, layout } from 'ui-box';
import { Autocomplete } from '../../autocomplete';
import { TextInput } from '../../text-input';
import { IconButton } from '../../buttons';
import deprecated from '../../lib/deprecated';

var Combobox =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Combobox, _PureComponent);

  function Combobox(props, context) {
    var _this;

    _classCallCheck(this, Combobox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Combobox).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "handleStateChange", function (changes) {
      if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
        if (!changes.isOpen) {
          _this.setState({
            isOpenedByButton: false
          });
        }
      }
    });

    _this.state = {
      isOpenedByButton: false
    };
    return _this;
  }

  _createClass(Combobox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          items = _this$props.items,
          selectedItem = _this$props.selectedItem,
          defaultSelectedItem = _this$props.defaultSelectedItem,
          initialSelectedItem = _this$props.initialSelectedItem,
          itemToString = _this$props.itemToString,
          width = _this$props.width,
          height = _this$props.height,
          onChange = _this$props.onChange,
          placeholder = _this$props.placeholder,
          inputProps = _this$props.inputProps,
          buttonProps = _this$props.buttonProps,
          openOnFocus = _this$props.openOnFocus,
          autocompleteProps = _this$props.autocompleteProps,
          isLoading = _this$props.isLoading,
          props = _objectWithoutProperties(_this$props, ["items", "selectedItem", "defaultSelectedItem", "initialSelectedItem", "itemToString", "width", "height", "onChange", "placeholder", "inputProps", "buttonProps", "openOnFocus", "autocompleteProps", "isLoading"]);

      var disabled = props.disabled || isLoading;
      return React.createElement(Autocomplete, _extends({
        items: items,
        selectedItem: selectedItem,
        initialSelectedItem: initialSelectedItem || defaultSelectedItem,
        itemToString: itemToString,
        onChange: onChange,
        onStateChange: this.handleStateChange,
        isFilterDisabled: this.state.isOpenedByButton
      }, autocompleteProps), function (_ref) {
        var getRef = _ref.getRef,
            isShown = _ref.isShown,
            openMenu = _ref.openMenu,
            inputValue = _ref.inputValue,
            getInputProps = _ref.getInputProps,
            getToggleButtonProps = _ref.getToggleButtonProps,
            clearSelection = _ref.clearSelection;
        return React.createElement(Box, _extends({
          innerRef: function innerRef(ref) {
            return getRef(ref);
          },
          display: "inline-flex",
          width: width
        }, props), React.createElement(TextInput, _extends({
          width: 0,
          flex: 1,
          height: height,
          value: inputValue,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          disabled: disabled
        }, getInputProps(_objectSpread({}, inputProps, {
          placeholder: placeholder,
          onFocus: function onFocus() {
            if (openOnFocus) openMenu();
          },
          onChange: function onChange(e) {
            if (_this2.state.isOpenedByButton) {
              _this2.setState({
                isOpenedByButton: false
              });
            }

            if (e.target.value.trim() === '') {
              // Prevent the selected item from sticking around
              clearSelection();
            }
          }
        })))), React.createElement(IconButton, _extends({
          iconAim: "down",
          color: "muted",
          icon: isLoading ? '' : 'caret-down',
          appearance: "default",
          height: height,
          marginLeft: -1,
          paddingLeft: isLoading ? 12 : 0,
          paddingRight: 0,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          disabled: disabled,
          isLoading: isLoading
        }, getToggleButtonProps(_objectSpread({}, buttonProps, {
          onClick: function onClick() {
            if (!isShown) {
              _this2.setState({
                isOpenedByButton: true
              });
            }
          }
        })))));
      });
    }
  }]);

  return Combobox;
}(PureComponent);

Combobox.displayName = "Combobox";

_defineProperty(Combobox, "propTypes", _objectSpread({}, dimensions.propTypes, spacing.propTypes, position.propTypes, layout.propTypes, {
  /**
   * The options to show in the menu.
   */
  items: PropTypes.array.isRequired,

  /**
   * The selected item when controlled.
   */
  selectedItem: PropTypes.any,

  /**
   * Function called when value changes.
   */
  onChange: PropTypes.func,

  /**
   * When true, open the autocomplete on focus.
   */
  openOnFocus: PropTypes.bool,

  /**
   * Default selected item when uncontrolled.
   */
  initialSelectedItem: PropTypes.any,

  /**
   * Default selected item when uncontrolled (deprecated)
   */
  defaultSelectedItem: deprecated(PropTypes.any, 'Use "initialSelectedItem" instead.'),

  /**
   * The placeholder text when there is no value present.
   */
  placeholder: PropTypes.string,

  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString: PropTypes.func,

  /**
   * Properties forwarded to the input. Use with caution.
   */
  inputProps: PropTypes.object,

  /**
   * Properties forwarded to the button. Use with caution.
   */
  buttonProps: PropTypes.object,

  /**
   * Properties forwarded to the autocomplete component. Use with caution.
   */
  autocompleteProps: PropTypes.object,

  /**
   * Makes the input element disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, show a loading spinner. This also disables the button.
   */
  isLoading: PropTypes.bool
}));

_defineProperty(Combobox, "defaultProps", {
  width: 240,
  openOnFocus: false,
  disabled: false,
  isLoading: false
});

export { Combobox as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21ib2JveC9zcmMvQ29tYm9ib3guanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiQm94IiwiZGltZW5zaW9ucyIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsIkF1dG9jb21wbGV0ZSIsIlRleHRJbnB1dCIsIkljb25CdXR0b24iLCJkZXByZWNhdGVkIiwiQ29tYm9ib3giLCJwcm9wcyIsImNvbnRleHQiLCJjaGFuZ2VzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaXNPcGVuIiwic2V0U3RhdGUiLCJpc09wZW5lZEJ5QnV0dG9uIiwic3RhdGUiLCJpdGVtcyIsInNlbGVjdGVkSXRlbSIsImRlZmF1bHRTZWxlY3RlZEl0ZW0iLCJpbml0aWFsU2VsZWN0ZWRJdGVtIiwiaXRlbVRvU3RyaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiaW5wdXRQcm9wcyIsImJ1dHRvblByb3BzIiwib3Blbk9uRm9jdXMiLCJhdXRvY29tcGxldGVQcm9wcyIsImlzTG9hZGluZyIsImRpc2FibGVkIiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJnZXRSZWYiLCJpc1Nob3duIiwib3Blbk1lbnUiLCJpbnB1dFZhbHVlIiwiZ2V0SW5wdXRQcm9wcyIsImdldFRvZ2dsZUJ1dHRvblByb3BzIiwiY2xlYXJTZWxlY3Rpb24iLCJyZWYiLCJvbkZvY3VzIiwiZSIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsIm9uQ2xpY2siLCJwcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJhbnkiLCJmdW5jIiwiYm9vbCIsInN0cmluZyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdB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QyxTQUFTLENBQUN5RCxJOztBQUVwQjs7O0FBR0F0QixFQUFBQSxTQUFTLEVBQUVuQyxTQUFTLENBQUN5RDs7O2dCQTdFSi9DLFEsa0JBZ0ZHO0FBQ3BCaUIsRUFBQUEsS0FBSyxFQUFFLEdBRGE7QUFFcEJNLEVBQUFBLFdBQVcsRUFBRSxLQUZPO0FBR3BCRyxFQUFBQSxRQUFRLEVBQUUsS0FIVTtBQUlwQkQsRUFBQUEsU0FBUyxFQUFFO0FBSlMsQzs7U0FoRkh6QixRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3gsIHsgZGltZW5zaW9ucywgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IEF1dG9jb21wbGV0ZSB9IGZyb20gJy4uLy4uL2F1dG9jb21wbGV0ZSdcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gJy4uLy4uL3RleHQtaW5wdXQnXG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSAnLi4vLi4vYnV0dG9ucydcbmltcG9ydCBkZXByZWNhdGVkIGZyb20gJy4uLy4uL2xpYi9kZXByZWNhdGVkJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21ib2JveCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEltcGxlbWVudHMgc29tZSBBUElzIGZyb20gdWktYm94LlxuICAgICAqL1xuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbnMgdG8gc2hvdyBpbiB0aGUgbWVudS5cbiAgICAgKi9cbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0ZWQgaXRlbSB3aGVuIGNvbnRyb2xsZWQuXG4gICAgICovXG4gICAgc2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuYW55LFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gdmFsdWUgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIG9wZW4gdGhlIGF1dG9jb21wbGV0ZSBvbiBmb2N1cy5cbiAgICAgKi9cbiAgICBvcGVuT25Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IHNlbGVjdGVkIGl0ZW0gd2hlbiB1bmNvbnRyb2xsZWQuXG4gICAgICovXG4gICAgaW5pdGlhbFNlbGVjdGVkSXRlbTogUHJvcFR5cGVzLmFueSxcblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgc2VsZWN0ZWQgaXRlbSB3aGVuIHVuY29udHJvbGxlZCAoZGVwcmVjYXRlZClcbiAgICAgKi9cbiAgICBkZWZhdWx0U2VsZWN0ZWRJdGVtOiBkZXByZWNhdGVkKFxuICAgICAgUHJvcFR5cGVzLmFueSxcbiAgICAgICdVc2UgXCJpbml0aWFsU2VsZWN0ZWRJdGVtXCIgaW5zdGVhZC4nXG4gICAgKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwbGFjZWhvbGRlciB0ZXh0IHdoZW4gdGhlcmUgaXMgbm8gdmFsdWUgcHJlc2VudC5cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEluIGNhc2UgdGhlIGFycmF5IG9mIGl0ZW1zIGlzIG5vdCBhbiBhcnJheSBvZiBzdHJpbmdzLFxuICAgICAqIHRoaXMgZnVuY3Rpb24gaXMgdXNlZCBvbiBlYWNoIGl0ZW0gdG8gcmV0dXJuIHRoZSBzdHJpbmcgdGhhdCB3aWxsIGJlIHNob3duIG9uIHRoZSBmaWx0ZXJcbiAgICAgKi9cbiAgICBpdGVtVG9TdHJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogUHJvcGVydGllcyBmb3J3YXJkZWQgdG8gdGhlIGlucHV0LiBVc2Ugd2l0aCBjYXV0aW9uLlxuICAgICAqL1xuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0aWVzIGZvcndhcmRlZCB0byB0aGUgYnV0dG9uLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICAgICAqL1xuICAgIGJ1dHRvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogUHJvcGVydGllcyBmb3J3YXJkZWQgdG8gdGhlIGF1dG9jb21wbGV0ZSBjb21wb25lbnQuIFVzZSB3aXRoIGNhdXRpb24uXG4gICAgICovXG4gICAgYXV0b2NvbXBsZXRlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgaW5wdXQgZWxlbWVudCBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHNob3cgYSBsb2FkaW5nIHNwaW5uZXIuIFRoaXMgYWxzbyBkaXNhYmxlcyB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgd2lkdGg6IDI0MCxcbiAgICBvcGVuT25Gb2N1czogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGlzTG9hZGluZzogZmFsc2VcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbmVkQnlCdXR0b246IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3RhdGVDaGFuZ2UgPSBjaGFuZ2VzID0+IHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNoYW5nZXMsICdpc09wZW4nKSkge1xuICAgICAgaWYgKCFjaGFuZ2VzLmlzT3Blbikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuZWRCeUJ1dHRvbjogZmFsc2UgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbXMsXG4gICAgICBzZWxlY3RlZEl0ZW0sXG4gICAgICBkZWZhdWx0U2VsZWN0ZWRJdGVtLCAvLyBEZXByZWNhdGVkXG4gICAgICBpbml0aWFsU2VsZWN0ZWRJdGVtLFxuICAgICAgaXRlbVRvU3RyaW5nLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgaW5wdXRQcm9wcyxcbiAgICAgIGJ1dHRvblByb3BzLFxuICAgICAgb3Blbk9uRm9jdXMsXG4gICAgICBhdXRvY29tcGxldGVQcm9wcyxcbiAgICAgIGlzTG9hZGluZyxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQgfHwgaXNMb2FkaW5nXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEF1dG9jb21wbGV0ZVxuICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWRJdGVtfVxuICAgICAgICBpbml0aWFsU2VsZWN0ZWRJdGVtPXtpbml0aWFsU2VsZWN0ZWRJdGVtIHx8IGRlZmF1bHRTZWxlY3RlZEl0ZW19XG4gICAgICAgIGl0ZW1Ub1N0cmluZz17aXRlbVRvU3RyaW5nfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIG9uU3RhdGVDaGFuZ2U9e3RoaXMuaGFuZGxlU3RhdGVDaGFuZ2V9XG4gICAgICAgIGlzRmlsdGVyRGlzYWJsZWQ9e3RoaXMuc3RhdGUuaXNPcGVuZWRCeUJ1dHRvbn1cbiAgICAgICAgey4uLmF1dG9jb21wbGV0ZVByb3BzfVxuICAgICAgPlxuICAgICAgICB7KHtcbiAgICAgICAgICBnZXRSZWYsXG4gICAgICAgICAgaXNTaG93bixcbiAgICAgICAgICBvcGVuTWVudSxcbiAgICAgICAgICBpbnB1dFZhbHVlLFxuICAgICAgICAgIGdldElucHV0UHJvcHMsXG4gICAgICAgICAgZ2V0VG9nZ2xlQnV0dG9uUHJvcHMsXG4gICAgICAgICAgY2xlYXJTZWxlY3Rpb25cbiAgICAgICAgfSkgPT4gKFxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGlubmVyUmVmPXtyZWYgPT4gZ2V0UmVmKHJlZil9XG4gICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lLWZsZXhcIlxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgd2lkdGg9ezB9XG4gICAgICAgICAgICAgIGZsZXg9ezF9XG4gICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM9ezB9XG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzPXswfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgIHsuLi5nZXRJbnB1dFByb3BzKHtcbiAgICAgICAgICAgICAgICAuLi5pbnB1dFByb3BzLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgIG9uRm9jdXM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChvcGVuT25Gb2N1cykgb3Blbk1lbnUoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNPcGVuZWRCeUJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICBpc09wZW5lZEJ5QnV0dG9uOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHRoZSBzZWxlY3RlZCBpdGVtIGZyb20gc3RpY2tpbmcgYXJvdW5kXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyU2VsZWN0aW9uKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIGljb25BaW09XCJkb3duXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJtdXRlZFwiXG4gICAgICAgICAgICAgIGljb249e2lzTG9hZGluZyA/ICcnIDogJ2NhcmV0LWRvd24nfVxuICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0PXstMX1cbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ9e2lzTG9hZGluZyA/IDEyIDogMH1cbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0PXswfVxuICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzPXswfVxuICAgICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzPXswfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICB7Li4uZ2V0VG9nZ2xlQnV0dG9uUHJvcHMoe1xuICAgICAgICAgICAgICAgIC4uLmJ1dHRvblByb3BzLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICghaXNTaG93bikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuZWRCeUJ1dHRvbjogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9BdXRvY29tcGxldGU+XG4gICAgKVxuICB9XG59XG4iXX0=