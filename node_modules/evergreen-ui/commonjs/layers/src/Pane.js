"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classnames = _interopRequireDefault(require("classnames"));

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _theme = require("../../theme");

var StringAndBoolPropType = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]);

var Pane =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Pane, _PureComponent);

  function Pane() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Pane);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Pane)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getHoverElevationStyle", function (hoverElevation, css) {
      var theme = _this.props.theme;
      if (!Number.isInteger(hoverElevation)) return {};
      return {
        transitionDuration: '150ms',
        transitionProperty: 'box-shadow, transform',
        transitionTimingFunction: "cubic-bezier(0.0, 0.0, 0.2, 1)",
        ':hover': (0, _objectSpread2.default)({}, css[':hover'] || {}, {
          transform: 'translateY(-2px)',
          boxShadow: theme.getElevation(hoverElevation)
        })
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getActiveElevationStyle", function (activeElevation, css) {
      var theme = _this.props.theme;
      if (!Number.isInteger(activeElevation)) return {};
      return {
        ':active': (0, _objectSpread2.default)({}, css[':active'] || {}, {
          transform: 'translateY(-1px)',
          boxShadow: theme.getElevation(activeElevation)
        })
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getBorderSideProperty", function (_ref) {
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

  (0, _createClass2.default)(Pane, [{
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
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "background", "elevation", "hoverElevation", "activeElevation", "border", "borderTop", "borderRight", "borderBottom", "borderLeft", "css"]);
      var elevationStyle = theme.getElevation(elevation);
      var hoverElevationStyle = this.getHoverElevationStyle(hoverElevation, css);
      var activeElevationStyle = this.getActiveElevationStyle(activeElevation, css);

      var _map = [borderTop, borderRight, borderBottom, borderLeft].map(function (borderSideProperty) {
        return _this2.getBorderSideProperty({
          borderSideProperty: borderSideProperty,
          border: border
        });
      }),
          _map2 = (0, _slicedToArray2.default)(_map, 4),
          _borderTop = _map2[0],
          _borderRight = _map2[1],
          _borderBottom = _map2[2],
          _borderLeft = _map2[3];

      var className = (0, _classnames.default)(props.className, (0, _glamor.css)((0, _objectSpread2.default)({}, css, hoverElevationStyle, activeElevationStyle)).toString());
      return _react.default.createElement(_uiBox.default, (0, _extends2.default)({
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
}(_react.PureComponent);

Pane.displayName = "Pane";
(0, _defineProperty2.default)(Pane, "propTypes", (0, _objectSpread2.default)({}, _uiBox.default.propTypes, {
  /**
   * Background property.
   * `tint1`, `tint2` etc. from `theme.colors.background` are available.
   */
  background: _propTypes.default.string,

  /**
   * Elevation of the Pane.
   * Values: 0, 1, 2, 3, 4.
   */
  elevation: _propTypes.default.oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on hover. Might get deprecated.
   * Values: 0, 1, 2, 3, 4.
   */
  hoverElevation: _propTypes.default.oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on click. Might get deprecated.
   * Values: 0, 1, 2, 3, 4.
   */
  activeElevation: _propTypes.default.oneOf([0, 1, 2, 3, 4]),

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
  theme: _propTypes.default.object.isRequired
}));

var _default = (0, _theme.withTheme)(Pane);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvc3JjL1BhbmUuanMiXSwibmFtZXMiOlsiU3RyaW5nQW5kQm9vbFByb3BUeXBlIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiYm9vbCIsIlBhbmUiLCJob3ZlckVsZXZhdGlvbiIsImNzcyIsInRoZW1lIiwicHJvcHMiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24iLCJ0cmFuc2Zvcm0iLCJib3hTaGFkb3ciLCJnZXRFbGV2YXRpb24iLCJhY3RpdmVFbGV2YXRpb24iLCJib3JkZXJTaWRlUHJvcGVydHkiLCJib3JkZXIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJjb2xvcnMiLCJkZWZhdWx0IiwiYmFja2dyb3VuZCIsImVsZXZhdGlvbiIsImJvcmRlclRvcCIsImJvcmRlclJpZ2h0IiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyTGVmdCIsImVsZXZhdGlvblN0eWxlIiwiaG92ZXJFbGV2YXRpb25TdHlsZSIsImdldEhvdmVyRWxldmF0aW9uU3R5bGUiLCJhY3RpdmVFbGV2YXRpb25TdHlsZSIsImdldEFjdGl2ZUVsZXZhdGlvblN0eWxlIiwibWFwIiwiZ2V0Qm9yZGVyU2lkZVByb3BlcnR5IiwiX2JvcmRlclRvcCIsIl9ib3JkZXJSaWdodCIsIl9ib3JkZXJCb3R0b20iLCJfYm9yZGVyTGVmdCIsImNsYXNzTmFtZSIsInRvU3RyaW5nIiwiZ2V0QmFja2dyb3VuZCIsIlB1cmVDb21wb25lbnQiLCJCb3giLCJwcm9wVHlwZXMiLCJvbmVPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLHFCQUFx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QUFBLFNBQVMsRUFBRVYsY0FMYjtBQU1FLFFBQUEsVUFBVSxFQUFFekIsS0FBSyxDQUFDc0MsYUFBTixDQUFvQm5CLFVBQXBCO0FBTmQsU0FPTWxCLEtBUE47QUFRRSxRQUFBLFNBQVMsRUFBRW1DO0FBUmIsU0FERjtBQVlEOzs7RUF2TGdCRyxvQjs7QUFBYjFDLEk7OEJBQUFBLEksK0NBS0MyQyxlQUFJQyxTO0FBRVA7Ozs7QUFJQXRCLEVBQUFBLFVBQVUsRUFBRTFCLG1CQUFVRSxNOztBQUV0Qjs7OztBQUlBeUIsRUFBQUEsU0FBUyxFQUFFM0IsbUJBQVVpRCxLQUFWLENBQWdCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FBaEIsQzs7QUFFWDs7OztBQUlBNUMsRUFBQUEsY0FBYyxFQUFFTCxtQkFBVWlELEtBQVYsQ0FBZ0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFoQixDOztBQUVoQjs7OztBQUlBaEMsRUFBQUEsZUFBZSxFQUFFakIsbUJBQVVpRCxLQUFWLENBQWdCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FBaEIsQzs7QUFFakI7Ozs7QUFJQTlCLEVBQUFBLE1BQU0sRUFBRXBCLHFCOztBQUVSOzs7O0FBSUE2QixFQUFBQSxTQUFTLEVBQUU3QixxQjs7QUFFWDs7OztBQUlBOEIsRUFBQUEsV0FBVyxFQUFFOUIscUI7O0FBRWI7Ozs7QUFJQStCLEVBQUFBLFlBQVksRUFBRS9CLHFCOztBQUVkOzs7O0FBSUFnQyxFQUFBQSxVQUFVLEVBQUVoQyxxQjs7QUFFWjs7O0FBR0FRLEVBQUFBLEtBQUssRUFBRVAsbUJBQVVrRCxNQUFWLENBQWlCQzs7O2VBMEhiLHNCQUFVL0MsSUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBjc3MgYXMgZ2xhbW9yQ3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IFN0cmluZ0FuZEJvb2xQcm9wVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICBQcm9wVHlwZXMuc3RyaW5nLFxuICBQcm9wVHlwZXMuYm9vbFxuXSlcblxuY2xhc3MgUGFuZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBCb3ggY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBCYWNrZ3JvdW5kIHByb3BlcnR5LlxuICAgICAqIGB0aW50MWAsIGB0aW50MmAgZXRjLiBmcm9tIGB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZGAgYXJlIGF2YWlsYWJsZS5cbiAgICAgKi9cbiAgICBiYWNrZ3JvdW5kOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogRWxldmF0aW9uIG9mIHRoZSBQYW5lLlxuICAgICAqIFZhbHVlczogMCwgMSwgMiwgMywgNC5cbiAgICAgKi9cbiAgICBlbGV2YXRpb246IFByb3BUeXBlcy5vbmVPZihbMCwgMSwgMiwgMywgNF0pLFxuXG4gICAgLyoqXG4gICAgICogRWxldmF0aW9uIG9mIHRoZSBQYW5lIG9uIGhvdmVyLiBNaWdodCBnZXQgZGVwcmVjYXRlZC5cbiAgICAgKiBWYWx1ZXM6IDAsIDEsIDIsIDMsIDQuXG4gICAgICovXG4gICAgaG92ZXJFbGV2YXRpb246IFByb3BUeXBlcy5vbmVPZihbMCwgMSwgMiwgMywgNF0pLFxuXG4gICAgLyoqXG4gICAgICogRWxldmF0aW9uIG9mIHRoZSBQYW5lIG9uIGNsaWNrLiBNaWdodCBnZXQgZGVwcmVjYXRlZC5cbiAgICAgKiBWYWx1ZXM6IDAsIDEsIDIsIDMsIDQuXG4gICAgICovXG4gICAgYWN0aXZlRWxldmF0aW9uOiBQcm9wVHlwZXMub25lT2YoWzAsIDEsIDIsIDMsIDRdKSxcblxuICAgIC8qKlxuICAgICAqIENhbiBiZSBhIGV4cGxpY2l0IGJvcmRlciB2YWx1ZSBvciBhIGJvb2xlYW4uXG4gICAgICogVmFsdWVzOiB0cnVlLCBtdXRlZCwgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBib3JkZXI6IFN0cmluZ0FuZEJvb2xQcm9wVHlwZSxcblxuICAgIC8qKlxuICAgICAqIENhbiBiZSBhIGV4cGxpY2l0IGJvcmRlciB2YWx1ZSBvciBhIGJvb2xlYW4uXG4gICAgICogVmFsdWVzOiB0cnVlLCBleHRyYU11dGVkLCBtdXRlZCwgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBib3JkZXJUb3A6IFN0cmluZ0FuZEJvb2xQcm9wVHlwZSxcblxuICAgIC8qKlxuICAgICAqIENhbiBiZSBhIGV4cGxpY2l0IGJvcmRlciB2YWx1ZSBvciBhIGJvb2xlYW4uXG4gICAgICogVmFsdWVzOiB0cnVlLCBleHRyYU11dGVkLCBtdXRlZCwgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBib3JkZXJSaWdodDogU3RyaW5nQW5kQm9vbFByb3BUeXBlLFxuXG4gICAgLyoqXG4gICAgICogQ2FuIGJlIGEgZXhwbGljaXQgYm9yZGVyIHZhbHVlIG9yIGEgYm9vbGVhbi5cbiAgICAgKiBWYWx1ZXM6IHRydWUsIGV4dHJhTXV0ZWQsIG11dGVkLCBkZWZhdWx0LlxuICAgICAqL1xuICAgIGJvcmRlckJvdHRvbTogU3RyaW5nQW5kQm9vbFByb3BUeXBlLFxuXG4gICAgLyoqXG4gICAgICogQ2FuIGJlIGEgZXhwbGljaXQgYm9yZGVyIHZhbHVlIG9yIGEgYm9vbGVhbi5cbiAgICAgKiBWYWx1ZXM6IHRydWUsIGV4dHJhTXV0ZWQsIG11dGVkLCBkZWZhdWx0LlxuICAgICAqL1xuICAgIGJvcmRlckxlZnQ6IFN0cmluZ0FuZEJvb2xQcm9wVHlwZSxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgZ2V0SG92ZXJFbGV2YXRpb25TdHlsZSA9IChob3ZlckVsZXZhdGlvbiwgY3NzKSA9PiB7XG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihob3ZlckVsZXZhdGlvbikpIHJldHVybiB7fVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJzE1MG1zJyxcbiAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogJ2JveC1zaGFkb3csIHRyYW5zZm9ybScsXG4gICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IGBjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSlgLFxuICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgLi4uKGNzc1snOmhvdmVyJ10gfHwge30pLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0ycHgpJyxcbiAgICAgICAgYm94U2hhZG93OiB0aGVtZS5nZXRFbGV2YXRpb24oaG92ZXJFbGV2YXRpb24pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0QWN0aXZlRWxldmF0aW9uU3R5bGUgPSAoYWN0aXZlRWxldmF0aW9uLCBjc3MpID0+IHtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGFjdGl2ZUVsZXZhdGlvbikpIHJldHVybiB7fVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICc6YWN0aXZlJzoge1xuICAgICAgICAuLi4oY3NzWyc6YWN0aXZlJ10gfHwge30pLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xcHgpJyxcbiAgICAgICAgYm94U2hhZG93OiB0aGVtZS5nZXRFbGV2YXRpb24oYWN0aXZlRWxldmF0aW9uKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEJvcmRlclNpZGVQcm9wZXJ0eSA9ICh7IGJvcmRlclNpZGVQcm9wZXJ0eSwgYm9yZGVyIH0pID0+IHtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuICAgICAgICB0aGVtZS5jb2xvcnMuYm9yZGVyLFxuICAgICAgICBib3JkZXJTaWRlUHJvcGVydHlcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlcltib3JkZXJTaWRlUHJvcGVydHldfWBcbiAgICB9XG5cbiAgICBpZiAoYm9yZGVyU2lkZVByb3BlcnR5ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIuZGVmYXVsdH1gXG4gICAgfVxuXG4gICAgaWYgKGJvcmRlclNpZGVQcm9wZXJ0eSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGVtZS5jb2xvcnMuYm9yZGVyLCBib3JkZXIpKSB7XG4gICAgICByZXR1cm4gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXJbYm9yZGVyXX1gXG4gICAgfVxuXG4gICAgaWYgKGJvcmRlciA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyLmRlZmF1bHR9YFxuICAgIH1cblxuICAgIHJldHVybiBib3JkZXJTaWRlUHJvcGVydHlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcblxuICAgICAgYmFja2dyb3VuZCxcblxuICAgICAgZWxldmF0aW9uLFxuICAgICAgaG92ZXJFbGV2YXRpb24sXG4gICAgICBhY3RpdmVFbGV2YXRpb24sXG5cbiAgICAgIGJvcmRlcixcbiAgICAgIGJvcmRlclRvcCxcbiAgICAgIGJvcmRlclJpZ2h0LFxuICAgICAgYm9yZGVyQm90dG9tLFxuICAgICAgYm9yZGVyTGVmdCxcblxuICAgICAgY3NzID0ge30sXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBlbGV2YXRpb25TdHlsZSA9IHRoZW1lLmdldEVsZXZhdGlvbihlbGV2YXRpb24pXG4gICAgY29uc3QgaG92ZXJFbGV2YXRpb25TdHlsZSA9IHRoaXMuZ2V0SG92ZXJFbGV2YXRpb25TdHlsZShob3ZlckVsZXZhdGlvbiwgY3NzKVxuICAgIGNvbnN0IGFjdGl2ZUVsZXZhdGlvblN0eWxlID0gdGhpcy5nZXRBY3RpdmVFbGV2YXRpb25TdHlsZShcbiAgICAgIGFjdGl2ZUVsZXZhdGlvbixcbiAgICAgIGNzc1xuICAgIClcblxuICAgIGNvbnN0IFtfYm9yZGVyVG9wLCBfYm9yZGVyUmlnaHQsIF9ib3JkZXJCb3R0b20sIF9ib3JkZXJMZWZ0XSA9IFtcbiAgICAgIGJvcmRlclRvcCxcbiAgICAgIGJvcmRlclJpZ2h0LFxuICAgICAgYm9yZGVyQm90dG9tLFxuICAgICAgYm9yZGVyTGVmdFxuICAgIF0ubWFwKGJvcmRlclNpZGVQcm9wZXJ0eSA9PlxuICAgICAgdGhpcy5nZXRCb3JkZXJTaWRlUHJvcGVydHkoeyBib3JkZXJTaWRlUHJvcGVydHksIGJvcmRlciB9KVxuICAgIClcblxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGN4KFxuICAgICAgcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgZ2xhbW9yQ3NzKHtcbiAgICAgICAgLi4uY3NzLFxuICAgICAgICAuLi5ob3ZlckVsZXZhdGlvblN0eWxlLFxuICAgICAgICAuLi5hY3RpdmVFbGV2YXRpb25TdHlsZVxuICAgICAgfSkudG9TdHJpbmcoKVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGJvcmRlclRvcD17X2JvcmRlclRvcH1cbiAgICAgICAgYm9yZGVyUmlnaHQ9e19ib3JkZXJSaWdodH1cbiAgICAgICAgYm9yZGVyQm90dG9tPXtfYm9yZGVyQm90dG9tfVxuICAgICAgICBib3JkZXJMZWZ0PXtfYm9yZGVyTGVmdH1cbiAgICAgICAgYm94U2hhZG93PXtlbGV2YXRpb25TdHlsZX1cbiAgICAgICAgYmFja2dyb3VuZD17dGhlbWUuZ2V0QmFja2dyb3VuZChiYWNrZ3JvdW5kKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShQYW5lKVxuIl19