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

var _uiBox = require("ui-box");

var _typography = require("../../typography");

var _icon = require("../../icon");

var _spinner = require("../../spinner");

var _theme = require("../../theme");

var Button =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Button, _PureComponent);

  function Button() {
    (0, _classCallCheck2.default)(this, Button);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Button).apply(this, arguments));
  }

  (0, _createClass2.default)(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          intent = _this$props.intent,
          height = _this$props.height,
          isActive = _this$props.isActive,
          children = _this$props.children,
          disabled = _this$props.disabled,
          appearance = _this$props.appearance,
          isLoading = _this$props.isLoading,
          paddingRight = _this$props.paddingRight,
          paddingLeft = _this$props.paddingLeft,
          paddingTop = _this$props.paddingTop,
          paddingBottom = _this$props.paddingBottom,
          iconBeforeKey = _this$props.iconBefore,
          iconAfterKey = _this$props.iconAfter,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "className", "intent", "height", "isActive", "children", "disabled", "appearance", "isLoading", "paddingRight", "paddingLeft", "paddingTop", "paddingBottom", "iconBefore", "iconAfter"]);
      var themedClassName = theme.getButtonClassName(appearance, intent);
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      var iconSize = theme.getIconSizeForButton(height);
      var pr = paddingRight !== undefined ? paddingRight : Math.round(height / 2); // eslint-disable-line no-negated-condition

      var pl = paddingLeft !== undefined ? paddingLeft : Math.round(height / 2); // eslint-disable-line no-negated-condition

      var iconBefore;

      if (iconBeforeKey) {
        iconBefore = _react.default.createElement(_icon.Icon, {
          icon: iconBeforeKey,
          size: iconSize,
          marginLeft: -Math.round(pl * 0.2),
          marginRight: Math.round(iconSize * 0.7)
        });
      }

      var iconAfter;

      if (iconAfterKey) {
        iconAfter = _react.default.createElement(_icon.Icon, {
          icon: iconAfterKey,
          size: iconSize,
          marginRight: -Math.round(pl * 0.2),
          marginLeft: Math.round(iconSize * 0.7)
        });
      }

      return _react.default.createElement(_typography.Text, (0, _extends2.default)({
        is: "button",
        className: (0, _classnames.default)(themedClassName, className),
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        paddingRight: pr,
        paddingLeft: pl,
        marginLeft: 0 // Removes weird margins in Safari
        ,
        marginRight: 0 // Removes weird margins in Safari
        ,
        marginTop: 0 // Removes weird margins in Safari
        ,
        marginBottom: 0 // Removes weird margins in Safari
        ,
        size: textSize,
        color: null // Prevent the Text color overriding the glamor appearanceStyle color
        ,
        height: height,
        lineHeight: "".concat(height, "px")
      }, isActive ? {
        'data-active': true
      } : {}, Button.styles, props, {
        disabled: disabled || isLoading
      }), isLoading && _react.default.createElement(_spinner.Spinner, {
        marginLeft: -Math.round(height / 8),
        marginRight: Math.round(height / 4),
        size: Math.round(height / 2)
      }), iconBefore || null, children, iconAfter || null);
    }
  }]);
  return Button;
}(_react.PureComponent);

Button.displayName = "Button";
(0, _defineProperty2.default)(Button, "propTypes", (0, _objectSpread2.default)({}, _uiBox.dimensions.propTypes, _uiBox.spacing.propTypes, _uiBox.position.propTypes, _uiBox.layout.propTypes, {
  /**
   * The intent of the button.
   */
  intent: _propTypes.default.oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * The appearance of the button.
   */
  appearance: _propTypes.default.oneOf(['default', 'minimal', 'primary']).isRequired,

  /**
   * When true, show a loading spinner before the children.
   * This also disables the button.
   */
  isLoading: _propTypes.default.bool,

  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: _propTypes.default.bool,

  /**
   * Sets an icon before the text. Can be any icon from Evergreen or a custom element.
   */
  iconBefore: _propTypes.default.node,

  /**
   * Sets an icon after the text. Can be any icon from Evergreen or a custom element.
   */
  iconAfter: _propTypes.default.node,

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: _propTypes.default.bool,

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
(0, _defineProperty2.default)(Button, "defaultProps", {
  appearance: 'default',
  height: 32,
  intent: 'none',
  isActive: false,
  paddingBottom: 0,
  paddingTop: 0
});
(0, _defineProperty2.default)(Button, "styles", {
  position: 'relative',
  fontFamily: 'ui',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap'
});

var _default = (0, _theme.withTheme)(Button);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9CdXR0b24uanMiXSwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJ0aGVtZSIsImNsYXNzTmFtZSIsImludGVudCIsImhlaWdodCIsImlzQWN0aXZlIiwiY2hpbGRyZW4iLCJkaXNhYmxlZCIsImFwcGVhcmFuY2UiLCJpc0xvYWRpbmciLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiaWNvbkJlZm9yZUtleSIsImljb25CZWZvcmUiLCJpY29uQWZ0ZXJLZXkiLCJpY29uQWZ0ZXIiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRCdXR0b25DbGFzc05hbWUiLCJ0ZXh0U2l6ZSIsImdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCIsImJvcmRlclJhZGl1cyIsImdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQiLCJpY29uU2l6ZSIsImdldEljb25TaXplRm9yQnV0dG9uIiwicHIiLCJ1bmRlZmluZWQiLCJNYXRoIiwicm91bmQiLCJwbCIsInN0eWxlcyIsIlB1cmVDb21wb25lbnQiLCJkaW1lbnNpb25zIiwicHJvcFR5cGVzIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiUHJvcFR5cGVzIiwib25lT2YiLCJpc1JlcXVpcmVkIiwiYm9vbCIsIm5vZGUiLCJvYmplY3QiLCJzdHJpbmciLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleFdyYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBRU1BLE07Ozs7Ozs7Ozs7Ozs2QkEwRks7QUFBQSx3QkF3QkgsS0FBS0MsS0F4QkY7QUFBQSxVQUVMQyxLQUZLLGVBRUxBLEtBRks7QUFBQSxVQUdMQyxTQUhLLGVBR0xBLFNBSEs7QUFB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VUMsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLENBQWhCLEVBQW1EQyxVOztBQUUvRDs7OztBQUlBL0IsRUFBQUEsU0FBUyxFQUFFNkIsbUJBQVVHLEk7O0FBRXJCOzs7O0FBSUFwQyxFQUFBQSxRQUFRLEVBQUVpQyxtQkFBVUcsSTs7QUFFcEI7OztBQUdBMUIsRUFBQUEsVUFBVSxFQUFFdUIsbUJBQVVJLEk7O0FBRXRCOzs7QUFHQXpCLEVBQUFBLFNBQVMsRUFBRXFCLG1CQUFVSSxJOztBQUVyQjs7OztBQUlBbkMsRUFBQUEsUUFBUSxFQUFFK0IsbUJBQVVHLEk7O0FBRXBCOzs7QUFHQXhDLEVBQUFBLEtBQUssRUFBRXFDLG1CQUFVSyxNQUFWLENBQWlCSCxVOztBQUV4Qjs7OztBQUlBdEMsRUFBQUEsU0FBUyxFQUFFb0MsbUJBQVVNOzs4QkFyRW5CN0MsTSxrQkF3RWtCO0FBQ3BCUyxFQUFBQSxVQUFVLEVBQUUsU0FEUTtBQUVwQkosRUFBQUEsTUFBTSxFQUFFLEVBRlk7QUFHcEJELEVBQUFBLE1BQU0sRUFBRSxNQUhZO0FBSXBCRSxFQUFBQSxRQUFRLEVBQUUsS0FKVTtBQUtwQlEsRUFBQUEsYUFBYSxFQUFFLENBTEs7QUFNcEJELEVBQUFBLFVBQVUsRUFBRTtBQU5RLEM7OEJBeEVsQmIsTSxZQWlGWTtBQUNkcUMsRUFBQUEsUUFBUSxFQUFFLFVBREk7QUFFZFMsRUFBQUEsVUFBVSxFQUFFLElBRkU7QUFHZEMsRUFBQUEsVUFBVSxFQUFFLEdBSEU7QUFJZEMsRUFBQUEsT0FBTyxFQUFFLGFBSks7QUFLZEMsRUFBQUEsVUFBVSxFQUFFLFFBTEU7QUFNZEMsRUFBQUEsUUFBUSxFQUFFO0FBTkksQzs7ZUE2R0gsc0JBQVVsRCxNQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBkaW1lbnNpb25zLCBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vaWNvbidcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi8uLi9zcGlubmVyJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBkaW1lbnNpb25zIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2aWUuXG4gICAgICovXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgc3BhY2luZyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmllLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIHBvc2l0aW9uIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2aWUuXG4gICAgICovXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIGxheW91dCBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmllLlxuICAgICAqL1xuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZW50IG9mIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnbWluaW1hbCcsICdwcmltYXJ5J10pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHNob3cgYSBsb2FkaW5nIHNwaW5uZXIgYmVmb3JlIHRoZSBjaGlsZHJlbi5cbiAgICAgKiBUaGlzIGFsc28gZGlzYWJsZXMgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBpc0xvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRm9yY2VmdWxseSBzZXQgdGhlIGFjdGl2ZSBzdGF0ZSBvZiBhIGJ1dHRvbi5cbiAgICAgKiBVc2VmdWwgaW4gY29uanVjdGlvbiB3aXRoIGEgUG9wb3Zlci5cbiAgICAgKi9cbiAgICBpc0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGFuIGljb24gYmVmb3JlIHRoZSB0ZXh0LiBDYW4gYmUgYW55IGljb24gZnJvbSBFdmVyZ3JlZW4gb3IgYSBjdXN0b20gZWxlbWVudC5cbiAgICAgKi9cbiAgICBpY29uQmVmb3JlOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgYW4gaWNvbiBhZnRlciB0aGUgdGV4dC4gQ2FuIGJlIGFueSBpY29uIGZyb20gRXZlcmdyZWVuIG9yIGEgY3VzdG9tIGVsZW1lbnQuXG4gICAgICovXG4gICAgaWNvbkFmdGVyOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGJ1dHRvbiBpcyBkaXNhYmxlZC5cbiAgICAgKiBpc0xvYWRpbmcgYWxzbyBzZXRzIHRoZSBidXR0b24gdG8gZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIGJ1dHRvbi5cbiAgICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0JyxcbiAgICBoZWlnaHQ6IDMyLFxuICAgIGludGVudDogJ25vbmUnLFxuICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICBwYWRkaW5nQm90dG9tOiAwLFxuICAgIHBhZGRpbmdUb3A6IDBcbiAgfVxuXG4gIHN0YXRpYyBzdHlsZXMgPSB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZm9udEZhbWlseTogJ3VpJyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmbGV4V3JhcDogJ25vd3JhcCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcbiAgICAgIGNsYXNzTmFtZSxcblxuICAgICAgaW50ZW50LFxuICAgICAgaGVpZ2h0LFxuICAgICAgaXNBY3RpdmUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGlzTG9hZGluZyxcblxuICAgICAgLy8gUGFkZGluZ3NcbiAgICAgIHBhZGRpbmdSaWdodCxcbiAgICAgIHBhZGRpbmdMZWZ0LFxuICAgICAgcGFkZGluZ1RvcCxcbiAgICAgIHBhZGRpbmdCb3R0b20sXG5cbiAgICAgIC8vIEljb25zXG4gICAgICBpY29uQmVmb3JlOiBpY29uQmVmb3JlS2V5LFxuICAgICAgaWNvbkFmdGVyOiBpY29uQWZ0ZXJLZXksXG5cbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldEJ1dHRvbkNsYXNzTmFtZShhcHBlYXJhbmNlLCBpbnRlbnQpXG4gICAgY29uc3QgdGV4dFNpemUgPSB0aGVtZS5nZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuXG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gdGhlbWUuZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG4gICAgY29uc3QgaWNvblNpemUgPSB0aGVtZS5nZXRJY29uU2l6ZUZvckJ1dHRvbihoZWlnaHQpXG5cbiAgICBjb25zdCBwciA9XG4gICAgICBwYWRkaW5nUmlnaHQgIT09IHVuZGVmaW5lZCA/IHBhZGRpbmdSaWdodCA6IE1hdGgucm91bmQoaGVpZ2h0IC8gMikgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZWdhdGVkLWNvbmRpdGlvblxuICAgIGNvbnN0IHBsID0gcGFkZGluZ0xlZnQgIT09IHVuZGVmaW5lZCA/IHBhZGRpbmdMZWZ0IDogTWF0aC5yb3VuZChoZWlnaHQgLyAyKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5lZ2F0ZWQtY29uZGl0aW9uXG5cbiAgICBsZXQgaWNvbkJlZm9yZVxuICAgIGlmIChpY29uQmVmb3JlS2V5KSB7XG4gICAgICBpY29uQmVmb3JlID0gKFxuICAgICAgICA8SWNvblxuICAgICAgICAgIGljb249e2ljb25CZWZvcmVLZXl9XG4gICAgICAgICAgc2l6ZT17aWNvblNpemV9XG4gICAgICAgICAgbWFyZ2luTGVmdD17LU1hdGgucm91bmQocGwgKiAwLjIpfVxuICAgICAgICAgIG1hcmdpblJpZ2h0PXtNYXRoLnJvdW5kKGljb25TaXplICogMC43KX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBsZXQgaWNvbkFmdGVyXG4gICAgaWYgKGljb25BZnRlcktleSkge1xuICAgICAgaWNvbkFmdGVyID0gKFxuICAgICAgICA8SWNvblxuICAgICAgICAgIGljb249e2ljb25BZnRlcktleX1cbiAgICAgICAgICBzaXplPXtpY29uU2l6ZX1cbiAgICAgICAgICBtYXJnaW5SaWdodD17LU1hdGgucm91bmQocGwgKiAwLjIpfVxuICAgICAgICAgIG1hcmdpbkxlZnQ9e01hdGgucm91bmQoaWNvblNpemUgKiAwLjcpfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17Y3godGhlbWVkQ2xhc3NOYW1lLCBjbGFzc05hbWUpfVxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzPXtib3JkZXJSYWRpdXN9XG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM9e2JvcmRlclJhZGl1c31cbiAgICAgICAgcGFkZGluZ1RvcD17cGFkZGluZ1RvcH1cbiAgICAgICAgcGFkZGluZ0JvdHRvbT17cGFkZGluZ0JvdHRvbX1cbiAgICAgICAgcGFkZGluZ1JpZ2h0PXtwcn1cbiAgICAgICAgcGFkZGluZ0xlZnQ9e3BsfVxuICAgICAgICBtYXJnaW5MZWZ0PXswfSAvLyBSZW1vdmVzIHdlaXJkIG1hcmdpbnMgaW4gU2FmYXJpXG4gICAgICAgIG1hcmdpblJpZ2h0PXswfSAvLyBSZW1vdmVzIHdlaXJkIG1hcmdpbnMgaW4gU2FmYXJpXG4gICAgICAgIG1hcmdpblRvcD17MH0gLy8gUmVtb3ZlcyB3ZWlyZCBtYXJnaW5zIGluIFNhZmFyaVxuICAgICAgICBtYXJnaW5Cb3R0b209ezB9IC8vIFJlbW92ZXMgd2VpcmQgbWFyZ2lucyBpbiBTYWZhcmlcbiAgICAgICAgc2l6ZT17dGV4dFNpemV9XG4gICAgICAgIGNvbG9yPXtudWxsfSAvLyBQcmV2ZW50IHRoZSBUZXh0IGNvbG9yIG92ZXJyaWRpbmcgdGhlIGdsYW1vciBhcHBlYXJhbmNlU3R5bGUgY29sb3JcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIGxpbmVIZWlnaHQ9e2Ake2hlaWdodH1weGB9XG4gICAgICAgIHsuLi4oaXNBY3RpdmUgPyB7ICdkYXRhLWFjdGl2ZSc6IHRydWUgfSA6IHt9KX1cbiAgICAgICAgey4uLkJ1dHRvbi5zdHlsZXN9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IGlzTG9hZGluZ31cbiAgICAgID5cbiAgICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgICAgPFNwaW5uZXJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ9ey1NYXRoLnJvdW5kKGhlaWdodCAvIDgpfVxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ9e01hdGgucm91bmQoaGVpZ2h0IC8gNCl9XG4gICAgICAgICAgICBzaXplPXtNYXRoLnJvdW5kKGhlaWdodCAvIDIpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtpY29uQmVmb3JlIHx8IG51bGx9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge2ljb25BZnRlciB8fCBudWxsfVxuICAgICAgPC9UZXh0PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoQnV0dG9uKVxuIl19