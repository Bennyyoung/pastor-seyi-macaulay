import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import cx from 'classnames';
import { css as glamorCss } from 'glamor';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { withTheme } from '../../theme';
var StringAndBoolPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.bool]);

var Pane =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Pane, _PureComponent);

  function Pane() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Pane);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pane)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getHoverElevationStyle", function (hoverElevation, css) {
      var theme = _this.props.theme;
      if (!Number.isInteger(hoverElevation)) return {};
      return {
        transitionDuration: '150ms',
        transitionProperty: 'box-shadow, transform',
        transitionTimingFunction: "cubic-bezier(0.0, 0.0, 0.2, 1)",
        ':hover': _objectSpread({}, css[':hover'] || {}, {
          transform: 'translateY(-2px)',
          boxShadow: theme.getElevation(hoverElevation)
        })
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getActiveElevationStyle", function (activeElevation, css) {
      var theme = _this.props.theme;
      if (!Number.isInteger(activeElevation)) return {};
      return {
        ':active': _objectSpread({}, css[':active'] || {}, {
          transform: 'translateY(-1px)',
          boxShadow: theme.getElevation(activeElevation)
        })
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getBorderSideProperty", function (_ref) {
      var borderSideProperty = _ref.borderSideProperty,
          border = _ref.border;
      var theme = _this.props.theme;

      if (Object.prototype.hasOwnProperty.call(theme.colors.border, borderSideProperty)) {
        return "1px solid ".concat(theme.colors.border[borderSideProperty]);
      }

      if (borderSideProperty === true) {
        return "1px solid ".concat(theme.colors.border.default);
      }

      if (borderSideProperty === false) {
        return null;
      }

      if (Object.prototype.hasOwnProperty.call(theme.colors.border, border)) {
        return "1px solid ".concat(theme.colors.border[border]);
      }

      if (border === true) {
        return "1px solid ".concat(theme.colors.border.default);
      }

      return borderSideProperty;
    });

    return _this;
  }

  _createClass(Pane, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          theme = _this$props.theme,
          background = _this$props.background,
          elevation = _this$props.elevation,
          hoverElevation = _this$props.hoverElevation,
          activeElevation = _this$props.activeElevation,
          border = _this$props.border,
          borderTop = _this$props.borderTop,
          borderRight = _this$props.borderRight,
          borderBottom = _this$props.borderBottom,
          borderLeft = _this$props.borderLeft,
          _this$props$css = _this$props.css,
          css = _this$props$css === void 0 ? {} : _this$props$css,
          props = _objectWithoutProperties(_this$props, ["theme", "background", "elevation", "hoverElevation", "activeElevation", "border", "borderTop", "borderRight", "borderBottom", "borderLeft", "css"]);

      var elevationStyle = theme.getElevation(elevation);
      var hoverElevationStyle = this.getHoverElevationStyle(hoverElevation, css);
      var activeElevationStyle = this.getActiveElevationStyle(activeElevation, css);

      var _map = [borderTop, borderRight, borderBottom, borderLeft].map(function (borderSideProperty) {
        return _this2.getBorderSideProperty({
          borderSideProperty: borderSideProperty,
          border: border
        });
      }),
          _map2 = _slicedToArray(_map, 4),
          _borderTop = _map2[0],
          _borderRight = _map2[1],
          _borderBottom = _map2[2],
          _borderLeft = _map2[3];

      var className = cx(props.className, glamorCss(_objectSpread({}, css, hoverElevationStyle, activeElevationStyle)).toString());
      return React.createElement(Box, _extends({
        borderTop: _borderTop,
        borderRight: _borderRight,
        borderBottom: _borderBottom,
        borderLeft: _borderLeft,
        boxShadow: elevationStyle,
        background: theme.getBackground(background)
      }, props, {
        className: className
      }));
    }
  }]);

  return Pane;
}(PureComponent);

Pane.displayName = "Pane";

_defineProperty(Pane, "propTypes", _objectSpread({}, Box.propTypes, {
  /**
   * Background property.
   * `tint1`, `tint2` etc. from `theme.colors.background` are available.
   */
  background: PropTypes.string,

  /**
   * Elevation of the Pane.
   * Values: 0, 1, 2, 3, 4.
   */
  elevation: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on hover. Might get deprecated.
   * Values: 0, 1, 2, 3, 4.
   */
  hoverElevation: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on click. Might get deprecated.
   * Values: 0, 1, 2, 3, 4.
   */
  activeElevation: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, muted, default.
   */
  border: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderTop: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderRight: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderBottom: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderLeft: StringAndBoolPropType,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

export default withTheme(Pane);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvc3JjL1BhbmUuanMiXSwibmFtZXMiOlsiY3giLCJjc3MiLCJnbGFtb3JDc3MiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJ3aXRoVGhlbWUiLCJTdHJpbmdBbmRCb29sUHJvcFR5cGUiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJib29sIiwiUGFuZSIsImhvdmVyRWxldmF0aW9uIiwidGhlbWUiLCJwcm9wcyIsIk51bWJlciIsImlzSW50ZWdlciIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiIsInRyYW5zZm9ybSIsImJveFNoYWRvdyIsImdldEVsZXZhdGlvbiIsImFjdGl2ZUVsZXZhdGlvbiIsImJvcmRlclNpZGVQcm9wZXJ0eSIsImJvcmRlciIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNvbG9ycyIsImRlZmF1bHQiLCJiYWNrZ3JvdW5kIiwiZWxldmF0aW9uIiwiYm9yZGVyVG9wIiwiYm9yZGVyUmlnaHQiLCJib3JkZXJCb3R0b20iLCJib3JkZXJMZWZ0IiwiZWxldmF0aW9uU3R5bGUiLCJob3ZlckVsZXZhdGlvblN0eWxlIiwiZ2V0SG92ZXJFbGV2YXRpb25TdHlsZSIsImFjdGl2ZUVsZXZhdGlvblN0eWxlIiwiZ2V0QWN0aXZlRWxldmF0aW9uU3R5bGUiLCJtYXAiLCJnZXRCb3JkZXJTaWRlUHJvcGVydHkiLCJfYm9yZGVyVG9wIiwiX2JvcmRlclJpZ2h0IiwiX2JvcmRlckJvdHRvbSIsIl9ib3JkZXJMZWZ0IiwiY2xhc3NOYW1lIiwidG9TdHJpbmciLCJnZXRCYWNrZ3JvdW5kIiwicHJvcFR5cGVzIiwib25lT2YiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE9BQU9BLEVBQVAsTUFBZSxZQUFmO0FBQ0EsU0FBU0Ms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Ozs7QUFJQTZCLEVBQUFBLFlBQVksRUFBRTdCLHFCOztBQUVkOzs7O0FBSUE4QixFQUFBQSxVQUFVLEVBQUU5QixxQjs7QUFFWjs7O0FBR0FNLEVBQUFBLEtBQUssRUFBRVQsU0FBUyxDQUFDa0QsTUFBVixDQUFpQkM7OztBQTBINUIsZUFBZWpELFNBQVMsQ0FBQ0ssSUFBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgY3NzIGFzIGdsYW1vckNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBTdHJpbmdBbmRCb29sUHJvcFR5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgUHJvcFR5cGVzLmJvb2xcbl0pXG5cbmNsYXNzIFBhbmUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgQm94IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5Cb3gucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQmFja2dyb3VuZCBwcm9wZXJ0eS5cbiAgICAgKiBgdGludDFgLCBgdGludDJgIGV0Yy4gZnJvbSBgdGhlbWUuY29sb3JzLmJhY2tncm91bmRgIGFyZSBhdmFpbGFibGUuXG4gICAgICovXG4gICAgYmFja2dyb3VuZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEVsZXZhdGlvbiBvZiB0aGUgUGFuZS5cbiAgICAgKiBWYWx1ZXM6IDAsIDEsIDIsIDMsIDQuXG4gICAgICovXG4gICAgZWxldmF0aW9uOiBQcm9wVHlwZXMub25lT2YoWzAsIDEsIDIsIDMsIDRdKSxcblxuICAgIC8qKlxuICAgICAqIEVsZXZhdGlvbiBvZiB0aGUgUGFuZSBvbiBob3Zlci4gTWlnaHQgZ2V0IGRlcHJlY2F0ZWQuXG4gICAgICogVmFsdWVzOiAwLCAxLCAyLCAzLCA0LlxuICAgICAqL1xuICAgIGhvdmVyRWxldmF0aW9uOiBQcm9wVHlwZXMub25lT2YoWzAsIDEsIDIsIDMsIDRdKSxcblxuICAgIC8qKlxuICAgICAqIEVsZXZhdGlvbiBvZiB0aGUgUGFuZSBvbiBjbGljay4gTWlnaHQgZ2V0IGRlcHJlY2F0ZWQuXG4gICAgICogVmFsdWVzOiAwLCAxLCAyLCAzLCA0LlxuICAgICAqL1xuICAgIGFjdGl2ZUVsZXZhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFswLCAxLCAyLCAzLCA0XSksXG5cbiAgICAvKipcbiAgICAgKiBDYW4gYmUgYSBleHBsaWNpdCBib3JkZXIgdmFsdWUgb3IgYSBib29sZWFuLlxuICAgICAqIFZhbHVlczogdHJ1ZSwgbXV0ZWQsIGRlZmF1bHQuXG4gICAgICovXG4gICAgYm9yZGVyOiBTdHJpbmdBbmRCb29sUHJvcFR5cGUsXG5cbiAgICAvKipcbiAgICAgKiBDYW4gYmUgYSBleHBsaWNpdCBib3JkZXIgdmFsdWUgb3IgYSBib29sZWFuLlxuICAgICAqIFZhbHVlczogdHJ1ZSwgZXh0cmFNdXRlZCwgbXV0ZWQsIGRlZmF1bHQuXG4gICAgICovXG4gICAgYm9yZGVyVG9wOiBTdHJpbmdBbmRCb29sUHJvcFR5cGUsXG5cbiAgICAvKipcbiAgICAgKiBDYW4gYmUgYSBleHBsaWNpdCBib3JkZXIgdmFsdWUgb3IgYSBib29sZWFuLlxuICAgICAqIFZhbHVlczogdHJ1ZSwgZXh0cmFNdXRlZCwgbXV0ZWQsIGRlZmF1bHQuXG4gICAgICovXG4gICAgYm9yZGVyUmlnaHQ6IFN0cmluZ0FuZEJvb2xQcm9wVHlwZSxcblxuICAgIC8qKlxuICAgICAqIENhbiBiZSBhIGV4cGxpY2l0IGJvcmRlciB2YWx1ZSBvciBhIGJvb2xlYW4uXG4gICAgICogVmFsdWVzOiB0cnVlLCBleHRyYU11dGVkLCBtdXRlZCwgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBib3JkZXJCb3R0b206IFN0cmluZ0FuZEJvb2xQcm9wVHlwZSxcblxuICAgIC8qKlxuICAgICAqIENhbiBiZSBhIGV4cGxpY2l0IGJvcmRlciB2YWx1ZSBvciBhIGJvb2xlYW4uXG4gICAgICogVmFsdWVzOiB0cnVlLCBleHRyYU11dGVkLCBtdXRlZCwgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBib3JkZXJMZWZ0OiBTdHJpbmdBbmRCb29sUHJvcFR5cGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIGdldEhvdmVyRWxldmF0aW9uU3R5bGUgPSAoaG92ZXJFbGV2YXRpb24sIGNzcykgPT4ge1xuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoaG92ZXJFbGV2YXRpb24pKSByZXR1cm4ge31cblxuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246ICcxNTBtcycsXG4gICAgICB0cmFuc2l0aW9uUHJvcGVydHk6ICdib3gtc2hhZG93LCB0cmFuc2Zvcm0nLFxuICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpYCxcbiAgICAgICc6aG92ZXInOiB7XG4gICAgICAgIC4uLihjc3NbJzpob3ZlciddIHx8IHt9KSxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMnB4KScsXG4gICAgICAgIGJveFNoYWRvdzogdGhlbWUuZ2V0RWxldmF0aW9uKGhvdmVyRWxldmF0aW9uKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEFjdGl2ZUVsZXZhdGlvblN0eWxlID0gKGFjdGl2ZUVsZXZhdGlvbiwgY3NzKSA9PiB7XG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihhY3RpdmVFbGV2YXRpb24pKSByZXR1cm4ge31cblxuICAgIHJldHVybiB7XG4gICAgICAnOmFjdGl2ZSc6IHtcbiAgICAgICAgLi4uKGNzc1snOmFjdGl2ZSddIHx8IHt9KSxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMXB4KScsXG4gICAgICAgIGJveFNoYWRvdzogdGhlbWUuZ2V0RWxldmF0aW9uKGFjdGl2ZUVsZXZhdGlvbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRCb3JkZXJTaWRlUHJvcGVydHkgPSAoeyBib3JkZXJTaWRlUHJvcGVydHksIGJvcmRlciB9KSA9PiB7XG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiAgICAgICAgdGhlbWUuY29sb3JzLmJvcmRlcixcbiAgICAgICAgYm9yZGVyU2lkZVByb3BlcnR5XG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm4gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXJbYm9yZGVyU2lkZVByb3BlcnR5XX1gXG4gICAgfVxuXG4gICAgaWYgKGJvcmRlclNpZGVQcm9wZXJ0eSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyLmRlZmF1bHR9YFxuICAgIH1cblxuICAgIGlmIChib3JkZXJTaWRlUHJvcGVydHkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhlbWUuY29sb3JzLmJvcmRlciwgYm9yZGVyKSkge1xuICAgICAgcmV0dXJuIGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyW2JvcmRlcl19YFxuICAgIH1cblxuICAgIGlmIChib3JkZXIgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlci5kZWZhdWx0fWBcbiAgICB9XG5cbiAgICByZXR1cm4gYm9yZGVyU2lkZVByb3BlcnR5XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG5cbiAgICAgIGJhY2tncm91bmQsXG5cbiAgICAgIGVsZXZhdGlvbixcbiAgICAgIGhvdmVyRWxldmF0aW9uLFxuICAgICAgYWN0aXZlRWxldmF0aW9uLFxuXG4gICAgICBib3JkZXIsXG4gICAgICBib3JkZXJUb3AsXG4gICAgICBib3JkZXJSaWdodCxcbiAgICAgIGJvcmRlckJvdHRvbSxcbiAgICAgIGJvcmRlckxlZnQsXG5cbiAgICAgIGNzcyA9IHt9LFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgZWxldmF0aW9uU3R5bGUgPSB0aGVtZS5nZXRFbGV2YXRpb24oZWxldmF0aW9uKVxuICAgIGNvbnN0IGhvdmVyRWxldmF0aW9uU3R5bGUgPSB0aGlzLmdldEhvdmVyRWxldmF0aW9uU3R5bGUoaG92ZXJFbGV2YXRpb24sIGNzcylcbiAgICBjb25zdCBhY3RpdmVFbGV2YXRpb25TdHlsZSA9IHRoaXMuZ2V0QWN0aXZlRWxldmF0aW9uU3R5bGUoXG4gICAgICBhY3RpdmVFbGV2YXRpb24sXG4gICAgICBjc3NcbiAgICApXG5cbiAgICBjb25zdCBbX2JvcmRlclRvcCwgX2JvcmRlclJpZ2h0LCBfYm9yZGVyQm90dG9tLCBfYm9yZGVyTGVmdF0gPSBbXG4gICAgICBib3JkZXJUb3AsXG4gICAgICBib3JkZXJSaWdodCxcbiAgICAgIGJvcmRlckJvdHRvbSxcbiAgICAgIGJvcmRlckxlZnRcbiAgICBdLm1hcChib3JkZXJTaWRlUHJvcGVydHkgPT5cbiAgICAgIHRoaXMuZ2V0Qm9yZGVyU2lkZVByb3BlcnR5KHsgYm9yZGVyU2lkZVByb3BlcnR5LCBib3JkZXIgfSlcbiAgICApXG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSBjeChcbiAgICAgIHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGdsYW1vckNzcyh7XG4gICAgICAgIC4uLmNzcyxcbiAgICAgICAgLi4uaG92ZXJFbGV2YXRpb25TdHlsZSxcbiAgICAgICAgLi4uYWN0aXZlRWxldmF0aW9uU3R5bGVcbiAgICAgIH0pLnRvU3RyaW5nKClcbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBib3JkZXJUb3A9e19ib3JkZXJUb3B9XG4gICAgICAgIGJvcmRlclJpZ2h0PXtfYm9yZGVyUmlnaHR9XG4gICAgICAgIGJvcmRlckJvdHRvbT17X2JvcmRlckJvdHRvbX1cbiAgICAgICAgYm9yZGVyTGVmdD17X2JvcmRlckxlZnR9XG4gICAgICAgIGJveFNoYWRvdz17ZWxldmF0aW9uU3R5bGV9XG4gICAgICAgIGJhY2tncm91bmQ9e3RoZW1lLmdldEJhY2tncm91bmQoYmFja2dyb3VuZCl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoUGFuZSlcbiJdfQ==