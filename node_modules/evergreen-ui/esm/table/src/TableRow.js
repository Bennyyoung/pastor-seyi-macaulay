import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _extends from "@babel/runtime/helpers/esm/extends";
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
import cx from 'classnames';
import { Pane } from '../../layers';
import { withTheme } from '../../theme';
import safeInvoke from '../../lib/safe-invoke';
import { TableRowProvider } from './TableRowContext';
import manageTableRowFocusInteraction from './manageTableRowFocusInteraction';

var TableRow =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TableRow, _PureComponent);

  function TableRow() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TableRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TableRow)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(e);
      }

      if (_this.props.isSelectable) {
        if (_this.props.isSelected) {
          _this.props.onDeselect();
        } else {
          _this.props.onSelect();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      if (_this.props.isSelectable) {
        var key = e.key;

        if (key === 'Enter' || key === ' ') {
          _this.props.onSelect();

          e.preventDefault();
        } else if (key === 'ArrowUp' || key === 'ArrowDown') {
          try {
            manageTableRowFocusInteraction(key, _this.mainRef);
          } catch (error) {}
        } else if (key === 'Escape') {
          if (_this.mainRef) _this.mainRef.blur();
        }
      }

      _this.props.onKeyPress(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onRef", function (ref) {
      _this.mainRef = ref;
      safeInvoke(_this.props.innerRef, ref);
    });

    return _this;
  }

  _createClass(TableRow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          innerRef = _this$props.innerRef,
          theme = _this$props.theme,
          className = _this$props.className,
          height = _this$props.height,
          children = _this$props.children,
          intent = _this$props.intent,
          appearance = _this$props.appearance,
          _this$props$tabIndex = _this$props.tabIndex,
          tabIndex = _this$props$tabIndex === void 0 ? -1 : _this$props$tabIndex,
          onClick = _this$props.onClick,
          onKeyPress = _this$props.onKeyPress,
          onSelect = _this$props.onSelect,
          onDeselect = _this$props.onDeselect,
          isHighlighted = _this$props.isHighlighted,
          isSelectable = _this$props.isSelectable,
          isSelected = _this$props.isSelected,
          props = _objectWithoutProperties(_this$props, ["innerRef", "theme", "className", "height", "children", "intent", "appearance", "tabIndex", "onClick", "onKeyPress", "onSelect", "onDeselect", "isHighlighted", "isSelectable", "isSelected"]);

      var themedClassName = theme.getRowClassName(appearance, intent);
      return React.createElement(TableRowProvider, {
        height: height
      }, React.createElement(Pane, _extends({
        innerRef: this.onRef,
        className: cx(themedClassName, className),
        display: "flex",
        "aria-selected": isHighlighted,
        "aria-current": isSelected,
        "data-isselectable": isSelectable,
        tabIndex: isSelectable ? tabIndex : undefined,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        height: height,
        borderBottom: "muted"
      }, props), children));
    }
  }]);

  return TableRow;
}(PureComponent);

TableRow.displayName = "TableRow";

_defineProperty(TableRow, "propTypes", _objectSpread({}, Pane.propTypes, {
  /**
   * The height of the row. Remember to add paddings when using "auto".
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: PropTypes.func,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onDeselect: PropTypes.func,

  /**
   * Makes the TableRow selectable.
   */
  isSelectable: PropTypes.bool,

  /**
   * Makes the TableRow selected.
   */
  isSelected: PropTypes.bool,

  /**
   * Manually set the TableRow to be highlighted.
   */
  isHighlighted: PropTypes.bool,

  /**
   * The intent of the alert.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The appearance of the table row. Default theme only support default.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * Class name passed to the table row.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}));

_defineProperty(TableRow, "defaultProps", {
  intent: 'none',
  appearance: 'default',
  height: 48,
  onSelect: function onSelect() {},
  onDeselect: function onDeselect() {},
  onKeyPress: function onKeyPress() {}
});

export default withTheme(TableRow);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiY3giLCJQYW5lIiwid2l0aFRoZW1lIiwic2FmZUludm9rZSIsIlRhYmxlUm93UHJvdmlkZXIiLCJtYW5hZ2VUYWJsZVJvd0ZvY3VzSW50ZXJhY3Rpb24iLCJUYWJsZVJvdyIsImUiLCJwcm9wcyIsIm9uQ2xpY2siLCJpc1NlbGVjdGFibGUiLCJpc1NlbGVjdGVkIiwib25EZXNlbGVjdCIsIm9uU2VsZWN0Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJtYWluUmVmIiwiZXJyb3IiLCJibHVyIiwib25LZXlQcmVzcyIsInJlZiIsImlubmVyUmVmIiwidGhlbWUiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJjaGlsZHJlbiIsImludGVudCIsImFwcGVhcmFuY2UiLCJ0YWJJbmRleCIsImlzSGlnaGxpZ2h0ZWQiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRSb3dDbGFzc05hbWUiLCJvblJlZiIsInVuZGVmaW5lZCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlS2V5RG93biIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsIm51bWJlciIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYm9vbCIsIm9uZU9mIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsRUFBUCxNQUFlLFlBQWY7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsdUJBQXZCO0FBQ0EsU0FBU0MsZ0JBQVQsUUFBaUMsbUJBQWpDO0FBQ0EsT0FBT0MsOEJBQVAsTUFBMkMsa0NBQTNDOztJQUVNQyxROzs7Ozs7Ozs7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TUFEWTtBQUVwQkMsRUFBQUEsVUFBVSxFQUFFLFNBRlE7QUFHcEJILEVBQUFBLE1BQU0sRUFBRSxFQUhZO0FBSXBCWCxFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQUpFO0FBS3BCRCxFQUFBQSxVQUFVLEVBQUUsc0JBQU0sQ0FBRSxDQUxBO0FBTXBCTyxFQUFBQSxVQUFVLEVBQUUsc0JBQU0sQ0FBRTtBQU5BLEM7O0FBNkZ4QixlQUFlakIsU0FBUyxDQUFDSSxRQUFELENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IHNhZmVJbnZva2UgZnJvbSAnLi4vLi4vbGliL3NhZmUtaW52b2tlJ1xuaW1wb3J0IHsgVGFibGVSb3dQcm92aWRlciB9IGZyb20gJy4vVGFibGVSb3dDb250ZXh0J1xuaW1wb3J0IG1hbmFnZVRhYmxlUm93Rm9jdXNJbnRlcmFjdGlvbiBmcm9tICcuL21hbmFnZVRhYmxlUm93Rm9jdXNJbnRlcmFjdGlvbidcblxuY2xhc3MgVGFibGVSb3cgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgUGFuZSBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uUGFuZS5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSByb3cuIFJlbWVtYmVyIHRvIGFkZCBwYWRkaW5ncyB3aGVuIHVzaW5nIFwiYXV0b1wiLlxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIG9uIGNsaWNrIGFuZCBlbnRlci9zcGFjZSBrZXlwcmVzcy5cbiAgICAgKi9cbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBvbiBjbGljayBhbmQgZW50ZXIvc3BhY2Uga2V5cHJlc3MuXG4gICAgICovXG4gICAgb25EZXNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgVGFibGVSb3cgc2VsZWN0YWJsZS5cbiAgICAgKi9cbiAgICBpc1NlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIFRhYmxlUm93IHNlbGVjdGVkLlxuICAgICAqL1xuICAgIGlzU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogTWFudWFsbHkgc2V0IHRoZSBUYWJsZVJvdyB0byBiZSBoaWdobGlnaHRlZC5cbiAgICAgKi9cbiAgICBpc0hpZ2hsaWdodGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlbnQgb2YgdGhlIGFsZXJ0LlxuICAgICAqL1xuICAgIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSB0YWJsZSByb3cuIERlZmF1bHQgdGhlbWUgb25seSBzdXBwb3J0IGRlZmF1bHQuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIHRhYmxlIHJvdy5cbiAgICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGludGVudDogJ25vbmUnLFxuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0JyxcbiAgICBoZWlnaHQ6IDQ4LFxuICAgIG9uU2VsZWN0OiAoKSA9PiB7fSxcbiAgICBvbkRlc2VsZWN0OiAoKSA9PiB7fSxcbiAgICBvbktleVByZXNzOiAoKSA9PiB7fVxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuaXNTZWxlY3RhYmxlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pc1NlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25EZXNlbGVjdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gZSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNTZWxlY3RhYmxlKSB7XG4gICAgICBjb25zdCB7IGtleSB9ID0gZVxuICAgICAgaWYgKGtleSA9PT0gJ0VudGVyJyB8fCBrZXkgPT09ICcgJykge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93VXAnIHx8IGtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBtYW5hZ2VUYWJsZVJvd0ZvY3VzSW50ZXJhY3Rpb24oa2V5LCB0aGlzLm1haW5SZWYpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIGlmICh0aGlzLm1haW5SZWYpIHRoaXMubWFpblJlZi5ibHVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uS2V5UHJlc3MoZSlcbiAgfVxuXG4gIG9uUmVmID0gcmVmID0+IHtcbiAgICB0aGlzLm1haW5SZWYgPSByZWZcbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMuaW5uZXJSZWYsIHJlZilcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpbm5lclJlZixcbiAgICAgIHRoZW1lLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaGVpZ2h0LFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBpbnRlbnQsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgdGFiSW5kZXggPSAtMSxcblxuICAgICAgLy8gRmlsdGVyIG91dFxuICAgICAgb25DbGljayxcbiAgICAgIG9uS2V5UHJlc3MsXG4gICAgICBvblNlbGVjdCxcbiAgICAgIG9uRGVzZWxlY3QsXG5cbiAgICAgIGlzSGlnaGxpZ2h0ZWQsXG4gICAgICBpc1NlbGVjdGFibGUsXG4gICAgICBpc1NlbGVjdGVkLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFJvd0NsYXNzTmFtZShhcHBlYXJhbmNlLCBpbnRlbnQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRhYmxlUm93UHJvdmlkZXIgaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICA8UGFuZVxuICAgICAgICAgIGlubmVyUmVmPXt0aGlzLm9uUmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y3godGhlbWVkQ2xhc3NOYW1lLCBjbGFzc05hbWUpfVxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBhcmlhLXNlbGVjdGVkPXtpc0hpZ2hsaWdodGVkfVxuICAgICAgICAgIGFyaWEtY3VycmVudD17aXNTZWxlY3RlZH1cbiAgICAgICAgICBkYXRhLWlzc2VsZWN0YWJsZT17aXNTZWxlY3RhYmxlfVxuICAgICAgICAgIHRhYkluZGV4PXtpc1NlbGVjdGFibGUgPyB0YWJJbmRleCA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGJvcmRlckJvdHRvbT1cIm11dGVkXCJcbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUGFuZT5cbiAgICAgIDwvVGFibGVSb3dQcm92aWRlcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRhYmxlUm93KVxuIl19