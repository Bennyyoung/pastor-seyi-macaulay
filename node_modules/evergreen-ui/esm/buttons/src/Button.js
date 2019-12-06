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
import { dimensions, spacing, position, layout } from 'ui-box';
import { Text } from '../../typography';
import { Icon } from '../../icon';
import { Spinner } from '../../spinner';
import { withTheme } from '../../theme';

var Button =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
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
          props = _objectWithoutProperties(_this$props, ["theme", "className", "intent", "height", "isActive", "children", "disabled", "appearance", "isLoading", "paddingRight", "paddingLeft", "paddingTop", "paddingBottom", "iconBefore", "iconAfter"]);

      var themedClassName = theme.getButtonClassName(appearance, intent);
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      var iconSize = theme.getIconSizeForButton(height);
      var pr = paddingRight !== undefined ? paddingRight : Math.round(height / 2); // eslint-disable-line no-negated-condition

      var pl = paddingLeft !== undefined ? paddingLeft : Math.round(height / 2); // eslint-disable-line no-negated-condition

      var iconBefore;

      if (iconBeforeKey) {
        iconBefore = React.createElement(Icon, {
          icon: iconBeforeKey,
          size: iconSize,
          marginLeft: -Math.round(pl * 0.2),
          marginRight: Math.round(iconSize * 0.7)
        });
      }

      var iconAfter;

      if (iconAfterKey) {
        iconAfter = React.createElement(Icon, {
          icon: iconAfterKey,
          size: iconSize,
          marginRight: -Math.round(pl * 0.2),
          marginLeft: Math.round(iconSize * 0.7)
        });
      }

      return React.createElement(Text, _extends({
        is: "button",
        className: cx(themedClassName, className),
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
      }), isLoading && React.createElement(Spinner, {
        marginLeft: -Math.round(height / 8),
        marginRight: Math.round(height / 4),
        size: Math.round(height / 2)
      }), iconBefore || null, children, iconAfter || null);
    }
  }]);

  return Button;
}(PureComponent);

Button.displayName = "Button";

_defineProperty(Button, "propTypes", _objectSpread({}, dimensions.propTypes, spacing.propTypes, position.propTypes, layout.propTypes, {
  /**
   * The intent of the button.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * The appearance of the button.
   */
  appearance: PropTypes.oneOf(['default', 'minimal', 'primary']).isRequired,

  /**
   * When true, show a loading spinner before the children.
   * This also disables the button.
   */
  isLoading: PropTypes.bool,

  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: PropTypes.bool,

  /**
   * Sets an icon before the text. Can be any icon from Evergreen or a custom element.
   */
  iconBefore: PropTypes.node,

  /**
   * Sets an icon after the text. Can be any icon from Evergreen or a custom element.
   */
  iconAfter: PropTypes.node,

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: PropTypes.bool,

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

_defineProperty(Button, "defaultProps", {
  appearance: 'default',
  height: 32,
  intent: 'none',
  isActive: false,
  paddingBottom: 0,
  paddingTop: 0
});

_defineProperty(Button, "styles", {
  position: 'relative',
  fontFamily: 'ui',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap'
});

export default withTheme(Button);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9CdXR0b24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiY3giLCJkaW1lbnNpb25zIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiVGV4dCIsIkljb24iLCJTcGlubmVyIiwid2l0aFRoZW1lIiwiQnV0dG9uIiwicHJvcHMiLCJ0aGVtZSIsImNsYXNzTmFtZSIsImludGVudCIsImhlaWdodCIsImlzQWN0aXZlIiwiY2hpbGRyZW4iLCJkaXNhYmxlZCIsImFwcGVhcmFuY2UiLCJpc0xvYWRpbmciLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiaWNvbkJlZm9yZUtleSIsImljb25CZWZvcmUiLCJpY29uQWZ0ZXJLZXkiLCJpY29uQWZ0ZXIiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRCdXR0b25DbGFzc05hbWUiLCJ0ZXh0U2l6ZSIsImdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCIsImJvcmRlclJhZGl1cyIsImdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQiLCJpY29uU2l6ZSIsImdldEljb25TaXplRm9yQnV0dG9uIiwicHIiLCJ1bmRlZmluZWQiLCJNYXRoIiwicm91bmQiLCJwbCIsInN0eWxlcyIsInByb3BUeXBlcyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJub2RlIiwib2JqZWN0Iiwic3RyaW5nIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhXcmFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLFNBQVNDLFVBQVQsRUFBcUJDLE9BQXJCLEVB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Z0JBeEVsQmIsTSxZQWlGWTtBQUNkTixFQUFBQSxRQUFRLEVBQUUsVUFESTtBQUVkOEMsRUFBQUEsVUFBVSxFQUFFLElBRkU7QUFHZEMsRUFBQUEsVUFBVSxFQUFFLEdBSEU7QUFJZEMsRUFBQUEsT0FBTyxFQUFFLGFBSks7QUFLZEMsRUFBQUEsVUFBVSxFQUFFLFFBTEU7QUFNZEMsRUFBQUEsUUFBUSxFQUFFO0FBTkksQzs7QUE2R2xCLGVBQWU3QyxTQUFTLENBQUNDLE1BQUQsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBkaW1lbnNpb25zLCBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vaWNvbidcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi8uLi9zcGlubmVyJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBkaW1lbnNpb25zIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2aWUuXG4gICAgICovXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgc3BhY2luZyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmllLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIHBvc2l0aW9uIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2aWUuXG4gICAgICovXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIGxheW91dCBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmllLlxuICAgICAqL1xuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZW50IG9mIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnbWluaW1hbCcsICdwcmltYXJ5J10pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHNob3cgYSBsb2FkaW5nIHNwaW5uZXIgYmVmb3JlIHRoZSBjaGlsZHJlbi5cbiAgICAgKiBUaGlzIGFsc28gZGlzYWJsZXMgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBpc0xvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRm9yY2VmdWxseSBzZXQgdGhlIGFjdGl2ZSBzdGF0ZSBvZiBhIGJ1dHRvbi5cbiAgICAgKiBVc2VmdWwgaW4gY29uanVjdGlvbiB3aXRoIGEgUG9wb3Zlci5cbiAgICAgKi9cbiAgICBpc0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGFuIGljb24gYmVmb3JlIHRoZSB0ZXh0LiBDYW4gYmUgYW55IGljb24gZnJvbSBFdmVyZ3JlZW4gb3IgYSBjdXN0b20gZWxlbWVudC5cbiAgICAgKi9cbiAgICBpY29uQmVmb3JlOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgYW4gaWNvbiBhZnRlciB0aGUgdGV4dC4gQ2FuIGJlIGFueSBpY29uIGZyb20gRXZlcmdyZWVuIG9yIGEgY3VzdG9tIGVsZW1lbnQuXG4gICAgICovXG4gICAgaWNvbkFmdGVyOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGJ1dHRvbiBpcyBkaXNhYmxlZC5cbiAgICAgKiBpc0xvYWRpbmcgYWxzbyBzZXRzIHRoZSBidXR0b24gdG8gZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIGJ1dHRvbi5cbiAgICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0JyxcbiAgICBoZWlnaHQ6IDMyLFxuICAgIGludGVudDogJ25vbmUnLFxuICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICBwYWRkaW5nQm90dG9tOiAwLFxuICAgIHBhZGRpbmdUb3A6IDBcbiAgfVxuXG4gIHN0YXRpYyBzdHlsZXMgPSB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZm9udEZhbWlseTogJ3VpJyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmbGV4V3JhcDogJ25vd3JhcCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcbiAgICAgIGNsYXNzTmFtZSxcblxuICAgICAgaW50ZW50LFxuICAgICAgaGVpZ2h0LFxuICAgICAgaXNBY3RpdmUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGlzTG9hZGluZyxcblxuICAgICAgLy8gUGFkZGluZ3NcbiAgICAgIHBhZGRpbmdSaWdodCxcbiAgICAgIHBhZGRpbmdMZWZ0LFxuICAgICAgcGFkZGluZ1RvcCxcbiAgICAgIHBhZGRpbmdCb3R0b20sXG5cbiAgICAgIC8vIEljb25zXG4gICAgICBpY29uQmVmb3JlOiBpY29uQmVmb3JlS2V5LFxuICAgICAgaWNvbkFmdGVyOiBpY29uQWZ0ZXJLZXksXG5cbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldEJ1dHRvbkNsYXNzTmFtZShhcHBlYXJhbmNlLCBpbnRlbnQpXG4gICAgY29uc3QgdGV4dFNpemUgPSB0aGVtZS5nZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuXG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gdGhlbWUuZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG4gICAgY29uc3QgaWNvblNpemUgPSB0aGVtZS5nZXRJY29uU2l6ZUZvckJ1dHRvbihoZWlnaHQpXG5cbiAgICBjb25zdCBwciA9XG4gICAgICBwYWRkaW5nUmlnaHQgIT09IHVuZGVmaW5lZCA/IHBhZGRpbmdSaWdodCA6IE1hdGgucm91bmQoaGVpZ2h0IC8gMikgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZWdhdGVkLWNvbmRpdGlvblxuICAgIGNvbnN0IHBsID0gcGFkZGluZ0xlZnQgIT09IHVuZGVmaW5lZCA/IHBhZGRpbmdMZWZ0IDogTWF0aC5yb3VuZChoZWlnaHQgLyAyKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5lZ2F0ZWQtY29uZGl0aW9uXG5cbiAgICBsZXQgaWNvbkJlZm9yZVxuICAgIGlmIChpY29uQmVmb3JlS2V5KSB7XG4gICAgICBpY29uQmVmb3JlID0gKFxuICAgICAgICA8SWNvblxuICAgICAgICAgIGljb249e2ljb25CZWZvcmVLZXl9XG4gICAgICAgICAgc2l6ZT17aWNvblNpemV9XG4gICAgICAgICAgbWFyZ2luTGVmdD17LU1hdGgucm91bmQocGwgKiAwLjIpfVxuICAgICAgICAgIG1hcmdpblJpZ2h0PXtNYXRoLnJvdW5kKGljb25TaXplICogMC43KX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBsZXQgaWNvbkFmdGVyXG4gICAgaWYgKGljb25BZnRlcktleSkge1xuICAgICAgaWNvbkFmdGVyID0gKFxuICAgICAgICA8SWNvblxuICAgICAgICAgIGljb249e2ljb25BZnRlcktleX1cbiAgICAgICAgICBzaXplPXtpY29uU2l6ZX1cbiAgICAgICAgICBtYXJnaW5SaWdodD17LU1hdGgucm91bmQocGwgKiAwLjIpfVxuICAgICAgICAgIG1hcmdpbkxlZnQ9e01hdGgucm91bmQoaWNvblNpemUgKiAwLjcpfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17Y3godGhlbWVkQ2xhc3NOYW1lLCBjbGFzc05hbWUpfVxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzPXtib3JkZXJSYWRpdXN9XG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM9e2JvcmRlclJhZGl1c31cbiAgICAgICAgcGFkZGluZ1RvcD17cGFkZGluZ1RvcH1cbiAgICAgICAgcGFkZGluZ0JvdHRvbT17cGFkZGluZ0JvdHRvbX1cbiAgICAgICAgcGFkZGluZ1JpZ2h0PXtwcn1cbiAgICAgICAgcGFkZGluZ0xlZnQ9e3BsfVxuICAgICAgICBtYXJnaW5MZWZ0PXswfSAvLyBSZW1vdmVzIHdlaXJkIG1hcmdpbnMgaW4gU2FmYXJpXG4gICAgICAgIG1hcmdpblJpZ2h0PXswfSAvLyBSZW1vdmVzIHdlaXJkIG1hcmdpbnMgaW4gU2FmYXJpXG4gICAgICAgIG1hcmdpblRvcD17MH0gLy8gUmVtb3ZlcyB3ZWlyZCBtYXJnaW5zIGluIFNhZmFyaVxuICAgICAgICBtYXJnaW5Cb3R0b209ezB9IC8vIFJlbW92ZXMgd2VpcmQgbWFyZ2lucyBpbiBTYWZhcmlcbiAgICAgICAgc2l6ZT17dGV4dFNpemV9XG4gICAgICAgIGNvbG9yPXtudWxsfSAvLyBQcmV2ZW50IHRoZSBUZXh0IGNvbG9yIG92ZXJyaWRpbmcgdGhlIGdsYW1vciBhcHBlYXJhbmNlU3R5bGUgY29sb3JcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIGxpbmVIZWlnaHQ9e2Ake2hlaWdodH1weGB9XG4gICAgICAgIHsuLi4oaXNBY3RpdmUgPyB7ICdkYXRhLWFjdGl2ZSc6IHRydWUgfSA6IHt9KX1cbiAgICAgICAgey4uLkJ1dHRvbi5zdHlsZXN9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IGlzTG9hZGluZ31cbiAgICAgID5cbiAgICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgICAgPFNwaW5uZXJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ9ey1NYXRoLnJvdW5kKGhlaWdodCAvIDgpfVxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ9e01hdGgucm91bmQoaGVpZ2h0IC8gNCl9XG4gICAgICAgICAgICBzaXplPXtNYXRoLnJvdW5kKGhlaWdodCAvIDIpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtpY29uQmVmb3JlIHx8IG51bGx9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge2ljb25BZnRlciB8fCBudWxsfVxuICAgICAgPC9UZXh0PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoQnV0dG9uKVxuIl19