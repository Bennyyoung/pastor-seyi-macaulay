"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "IconNames", {
  enumerable: true,
  get: function get() {
    return _icons.IconNames;
  }
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _icons = require("@blueprintjs/icons");

var _theme = require("../../theme");

/* eslint react/no-array-index-key: 0, eqeqeq: 0, no-eq-null: 0 */

/**
 * This implementation is a remix of the Icon component in Blueprintjs:
 * https://github.com/palantir/blueprint/blob/813e93f2/packages/core/src/components/icon/icon.tsx#L15
 * Refer to the LICENSE for BlueprintJS here: https://github.com/palantir/blueprint/blob/develop/LICENSE
 */
var Icon =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Icon, _PureComponent);

  function Icon() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Icon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Icon)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderSvgPaths", function (pathsSize, iconName) {
      var svgPathsRecord = pathsSize === Icon.SIZE_STANDARD ? _icons.IconSvgPaths16 : _icons.IconSvgPaths20;
      var pathStrings = svgPathsRecord[iconName];

      if (pathStrings == null) {
        return null;
      }

      return pathStrings.map(function (d, i) {
        return _react.default.createElement("path", {
          key: i,
          d: d,
          fillRule: "evenodd"
        });
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          color = _this$props.color,
          icon = _this$props.icon,
          size = _this$props.size,
          title = _this$props.title,
          svgProps = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "color", "icon", "size", "title"]);
      var _this$props$style = this.props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style;

      if (icon == null) {
        return null;
      }

      if (typeof icon !== 'string') {
        return icon;
      } // Choose which pixel grid is most appropriate for given icon size


      var pixelGridSize = size >= Icon.SIZE_LARGE ? Icon.SIZE_LARGE : Icon.SIZE_STANDARD;
      var paths = this.renderSvgPaths(pixelGridSize, icon);

      if (paths == null) {
        return null;
      }

      var viewBox = "0 0 ".concat(pixelGridSize, " ").concat(pixelGridSize);

      if (color != null) {
        style = (0, _objectSpread2.default)({}, style, {
          fill: theme.getIconColor(color)
        });
      }

      return _react.default.createElement(_uiBox.default, (0, _extends2.default)({
        is: "svg"
      }, svgProps, {
        style: style,
        "data-icon": icon,
        width: size,
        height: size,
        viewBox: viewBox
      }), title ? _react.default.createElement("title", null, title) : null, paths);
    }
  }]);
  return Icon;
}(_react.PureComponent);

Icon.displayName = "Icon";
(0, _defineProperty2.default)(Icon, "SIZE_STANDARD", 16);
(0, _defineProperty2.default)(Icon, "SIZE_LARGE", 20);
(0, _defineProperty2.default)(Icon, "propTypes", {
  /**
   * Color of icon. Equivalent to setting CSS `fill` property.
   */
  color: _propTypes.default.string,

  /**
   * Name of a Blueprint UI icon, or an icon element, to render.
   * This prop is required because it determines the content of the component, but it can
   * be explicitly set to falsy values to render nothing.
   *
   * - If `null` or `undefined` or `false`, this component will render nothing.
   * - If given an `IconName` (a string literal union of all icon names),
   *   that icon will be rendered as an `<svg>` with `<path>` tags.
   * - If given a `JSX.Element`, that element will be rendered and _all other props on this component are ignored._
   *   This type is supported to simplify usage of this component in other Blueprint components.
   *   As a consumer, you should never use `<Icon icon={<element />}` directly; simply render `<element />` instead.
   */
  icon: _propTypes.default.node.isRequired,

  /**
   * Size of the icon, in pixels.
   * Blueprint contains 16px and 20px SVG icon images,
   * and chooses the appropriate resolution based on this prop.
   */
  size: _propTypes.default.number.isRequired,

  /**
   * Description string.
   * Browsers usually render this as a tooltip on hover, whereas screen
   * readers will use it for aural feedback.
   * By default, this is set to the icon's name for accessibility.
   */
  title: _propTypes.default.string,

  /**
   * CSS style properties.
   */
  style: _propTypes.default.object,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes.default.object.isRequired
});
(0, _defineProperty2.default)(Icon, "defaultProps", {
  size: 16,
  color: 'currentColor'
});

var _default = (0, _theme.withTheme)(Icon);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29uL3NyYy9JY29uLmpzIl0sIm5hbWVzIjpbIkljb24iLCJwYXRoc1NpemUiLCJpY29uTmFtZSIsInN2Z1BhdGhzUmVjb3JkIiwiU0laRV9TVEFOREFSRCIsIkljb25TdmdQYXRoczE2IiwiSWNvblN2Z1BhdGhzMjAiLCJwYXRoU3RyaW5ncyIsIm1hcCIsImQiLCJpIiwicHJvcHMiLCJ0aGVtZSIsImNvbG9yIiwiaWNvbiIsInNpemUiLCJ0aXRsZSIsInN2Z1Byb3BzIiwic3R5bGUiLCJwaXhlbEdyaWRTaXplIiwiU0laRV9MQVJHRSIsInBhdGhzIiwicmVuZGVyU3ZnUGF0aHMiLCJ2aWV3Qm94IiwiZmlsbCIsImdldEljb25Db2xvciIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJub2RlIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUxBOztBQVNBOzs7OztJQU1NQSxJOzs7Ozs7Ozs7Ozs7Ozs7OztpR0F3RGEsVUFBQ0MsU0FBRCxFQUFZQyxRQUFaLEVBQXlCO0FBQ3hDLFVBQU1DLGNBQWMsR0FDbEJGLFNBQVMsS0FBS0QsSUFBSSxDQUFDSSxhQUFuQixHQUFtQ0MscUJBQW5DLEdBQW9EQyxxQkFEdEQ7QUFFQSxVQUFNQyxXQUFXLEdBQUdKLGNBQWMsQ0FBQ0QsUUFBRCxDQUFsQzs7QUFFQSxVQUFJSyxXQUFXLElBQUksSUFBbkIsRUFBeUI7QUFDdkIsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsYUFBT0EsV0FBVyxDQUFDQyxHQUFaLENBQWdCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVU7QUFBTSxVQUFBLEdBQUcsRUFBRUEsQ0FBWDtBQUFjLFVBQUEsQ0FBQyxFQUFFRCxDQUFqQjtBQUFvQixVQUFBLFFBQVEsRUFBQztBQUE3QixVQUFWO0FBQUEsT0FBaEIsQ0FBUDtBQUNELEs7Ozs7Ozs2QkFFUTtBQUFBLHdCQUNrRCxLQUFLRSxLQUR2RDtBQUFBLFVBQ0NDLEtBREQsZUFDQ0EsS0FERDtBQUFBLFVBQ1FDLEtBRFIsZUFDUUEsS0FEUjtBQUFBLFVBQ2VDLElBRGYsZUFDZUEsSUFEZjtBQUFBLFVBQ3FCQyxJQURyQixlQUNxQkEsSUFEckI7QUFBQSxVQUMyQkMsS0FEM0IsZUFDMkJBLEtBRDNCO0FBQUEsVUFDcUNDLFFBRHJDO0FBQUEsOEJBRWMsS0FBS04sS0FGbkIsQ0FFRE8sS0FGQztBQUFBLFVBRURBLEtBRkMsa0NBRU8sRUFGUDs7QUFJUCxVQUFJSixJQUFJLElBQUksSUFBWixFQUFrQjtBQUNoQixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDNUIsZUFBT0EsSUFBUDtBQUNELE9BVk0sQ0FZUDs7O0FBQ0EsVUFBTUssYUFBYSxHQUNqQkosSUFBSSxJQUFJZixJQUFJLENBQUNvQixVQUFiLEdBQTBCcEIsSUFBSSxDQUFDb0IsVUFBL0IsR0FBNENwQixJQUFJLENBQUNJLGFBRG5EO0FBRUEsVUFBTWlCLEtBQUssR0FBRyxLQUFLQyxjQUFMLENBQW9CSCxhQUFwQixFQUFtQ0wsSUFBbkMsQ0FBZDs7QUFDQSxVQUFJTyxLQUFLLElBQUksSUFBYixFQUFtQjtBQUNqQixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFNRSxPQUFPLGlCQUFVSixhQUFWLGNBQTJCQSxhQUEzQixDQUFiOztBQUVBLFVBQUlOLEtBQUssSUFBSSxJQUFiLEVBQW1CO0FBQ2pCSyxRQUFBQSxLQUFLLG1DQUFRQSxLQUFSO0FBQWVNLFVBQUFBLElBQUksRUFBRVosS0FBSyxDQUFDYSxZQUFOLENBQW1CWixLQUFuQjtBQUFyQixVQUFMO0FBQ0Q7O0FBRUQsYUFDRSw2QkFBQyxjQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUM7QUFETCxTQUVNSSxRQUZOO0FBR0UsUUFBQSxLQUFLLEVBQUVDLEtBSFQ7QUFJRSxxQkFBV0osSUFKYjtBQUtFLFFBQUEsS0FBSyxFQUFFQyxJQUxUO0FBTUUsUUFBQSxNQUFNLEVBQUVBLElBTlY7QUFPRSxRQUFBLE9BQU8sRUFBRVE7QUFQWCxVQVNHUCxLQUFLLEdBQUcsNENBQVFBLEtBQVIsQ0FBSCxHQUE0QixJQVRwQyxFQVVHSyxLQVZILENBREY7QUFjRDs7O0VBNUdnQkssb0I7O0FBQWIxQixJOzhCQUFBQSxJLG1CQUNtQixFOzhCQURuQkEsSSxnQkFHZ0IsRTs4QkFIaEJBLEksZUFLZTtBQUNqQjs7O0FBR0FhLEVBQUFBLEtBQUssRUFBRWMsbUJBQVVDLE1BSkE7O0FBTWpCOzs7Ozs7Ozs7Ozs7QUFZQWQsRUFBQUEsSUFBSSxFQUFFYSxtQkFBVUUsSUFBVixDQUFlQyxVQWxCSjs7QUFvQmpCOzs7OztBQUtBZixFQUFBQSxJQUFJLEVBQUVZLG1CQUFVSSxNQUFWLENBQWlCRCxVQXpCTjs7QUEyQmpCOzs7Ozs7QUFNQWQsRUFBQUEsS0FBSyxFQUFFVyxtQkFBVUMsTUFqQ0E7O0FBbUNqQjs7O0FBR0FWLEVBQUFBLEtBQUssRUFBRVMsbUJBQVVLLE1BdENBOztBQXdDakI7OztBQUdBcEIsRUFBQUEsS0FBSyxFQUFFZSxtQkFBVUssTUFBVixDQUFpQkY7QUEzQ1AsQzs4QkFMZjlCLEksa0JBbURrQjtBQUNwQmUsRUFBQUEsSUFBSSxFQUFFLEVBRGM7QUFFcEJGLEVBQUFBLEtBQUssRUFBRTtBQUZhLEM7O2VBNERULHNCQUFVYixJQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5OiAwLCBlcWVxZXE6IDAsIG5vLWVxLW51bGw6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IEljb25OYW1lcywgSWNvblN2Z1BhdGhzMTYsIEljb25TdmdQYXRoczIwIH0gZnJvbSAnQGJsdWVwcmludGpzL2ljb25zJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmV4cG9ydCB7IEljb25OYW1lcyB9XG5cbi8qKlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBhIHJlbWl4IG9mIHRoZSBJY29uIGNvbXBvbmVudCBpbiBCbHVlcHJpbnRqczpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wYWxhbnRpci9ibHVlcHJpbnQvYmxvYi84MTNlOTNmMi9wYWNrYWdlcy9jb3JlL3NyYy9jb21wb25lbnRzL2ljb24vaWNvbi50c3gjTDE1XG4gKiBSZWZlciB0byB0aGUgTElDRU5TRSBmb3IgQmx1ZXByaW50SlMgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL3BhbGFudGlyL2JsdWVwcmludC9ibG9iL2RldmVsb3AvTElDRU5TRVxuICovXG5cbmNsYXNzIEljb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIFNJWkVfU1RBTkRBUkQgPSAxNlxuXG4gIHN0YXRpYyBTSVpFX0xBUkdFID0gMjBcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbG9yIG9mIGljb24uIEVxdWl2YWxlbnQgdG8gc2V0dGluZyBDU1MgYGZpbGxgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogTmFtZSBvZiBhIEJsdWVwcmludCBVSSBpY29uLCBvciBhbiBpY29uIGVsZW1lbnQsIHRvIHJlbmRlci5cbiAgICAgKiBUaGlzIHByb3AgaXMgcmVxdWlyZWQgYmVjYXVzZSBpdCBkZXRlcm1pbmVzIHRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQsIGJ1dCBpdCBjYW5cbiAgICAgKiBiZSBleHBsaWNpdGx5IHNldCB0byBmYWxzeSB2YWx1ZXMgdG8gcmVuZGVyIG5vdGhpbmcuXG4gICAgICpcbiAgICAgKiAtIElmIGBudWxsYCBvciBgdW5kZWZpbmVkYCBvciBgZmFsc2VgLCB0aGlzIGNvbXBvbmVudCB3aWxsIHJlbmRlciBub3RoaW5nLlxuICAgICAqIC0gSWYgZ2l2ZW4gYW4gYEljb25OYW1lYCAoYSBzdHJpbmcgbGl0ZXJhbCB1bmlvbiBvZiBhbGwgaWNvbiBuYW1lcyksXG4gICAgICogICB0aGF0IGljb24gd2lsbCBiZSByZW5kZXJlZCBhcyBhbiBgPHN2Zz5gIHdpdGggYDxwYXRoPmAgdGFncy5cbiAgICAgKiAtIElmIGdpdmVuIGEgYEpTWC5FbGVtZW50YCwgdGhhdCBlbGVtZW50IHdpbGwgYmUgcmVuZGVyZWQgYW5kIF9hbGwgb3RoZXIgcHJvcHMgb24gdGhpcyBjb21wb25lbnQgYXJlIGlnbm9yZWQuX1xuICAgICAqICAgVGhpcyB0eXBlIGlzIHN1cHBvcnRlZCB0byBzaW1wbGlmeSB1c2FnZSBvZiB0aGlzIGNvbXBvbmVudCBpbiBvdGhlciBCbHVlcHJpbnQgY29tcG9uZW50cy5cbiAgICAgKiAgIEFzIGEgY29uc3VtZXIsIHlvdSBzaG91bGQgbmV2ZXIgdXNlIGA8SWNvbiBpY29uPXs8ZWxlbWVudCAvPn1gIGRpcmVjdGx5OyBzaW1wbHkgcmVuZGVyIGA8ZWxlbWVudCAvPmAgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBpY29uOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogU2l6ZSBvZiB0aGUgaWNvbiwgaW4gcGl4ZWxzLlxuICAgICAqIEJsdWVwcmludCBjb250YWlucyAxNnB4IGFuZCAyMHB4IFNWRyBpY29uIGltYWdlcyxcbiAgICAgKiBhbmQgY2hvb3NlcyB0aGUgYXBwcm9wcmlhdGUgcmVzb2x1dGlvbiBiYXNlZCBvbiB0aGlzIHByb3AuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb24gc3RyaW5nLlxuICAgICAqIEJyb3dzZXJzIHVzdWFsbHkgcmVuZGVyIHRoaXMgYXMgYSB0b29sdGlwIG9uIGhvdmVyLCB3aGVyZWFzIHNjcmVlblxuICAgICAqIHJlYWRlcnMgd2lsbCB1c2UgaXQgZm9yIGF1cmFsIGZlZWRiYWNrLlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoaXMgaXMgc2V0IHRvIHRoZSBpY29uJ3MgbmFtZSBmb3IgYWNjZXNzaWJpbGl0eS5cbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIENTUyBzdHlsZSBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6IDE2LFxuICAgIGNvbG9yOiAnY3VycmVudENvbG9yJ1xuICB9XG5cbiAgcmVuZGVyU3ZnUGF0aHMgPSAocGF0aHNTaXplLCBpY29uTmFtZSkgPT4ge1xuICAgIGNvbnN0IHN2Z1BhdGhzUmVjb3JkID1cbiAgICAgIHBhdGhzU2l6ZSA9PT0gSWNvbi5TSVpFX1NUQU5EQVJEID8gSWNvblN2Z1BhdGhzMTYgOiBJY29uU3ZnUGF0aHMyMFxuICAgIGNvbnN0IHBhdGhTdHJpbmdzID0gc3ZnUGF0aHNSZWNvcmRbaWNvbk5hbWVdXG5cbiAgICBpZiAocGF0aFN0cmluZ3MgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aFN0cmluZ3MubWFwKChkLCBpKSA9PiA8cGF0aCBrZXk9e2l9IGQ9e2R9IGZpbGxSdWxlPVwiZXZlbm9kZFwiIC8+KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIGNvbG9yLCBpY29uLCBzaXplLCB0aXRsZSwgLi4uc3ZnUHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgeyBzdHlsZSA9IHt9IH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoaWNvbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaWNvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBpY29uXG4gICAgfVxuXG4gICAgLy8gQ2hvb3NlIHdoaWNoIHBpeGVsIGdyaWQgaXMgbW9zdCBhcHByb3ByaWF0ZSBmb3IgZ2l2ZW4gaWNvbiBzaXplXG4gICAgY29uc3QgcGl4ZWxHcmlkU2l6ZSA9XG4gICAgICBzaXplID49IEljb24uU0laRV9MQVJHRSA/IEljb24uU0laRV9MQVJHRSA6IEljb24uU0laRV9TVEFOREFSRFxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5yZW5kZXJTdmdQYXRocyhwaXhlbEdyaWRTaXplLCBpY29uKVxuICAgIGlmIChwYXRocyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IHZpZXdCb3ggPSBgMCAwICR7cGl4ZWxHcmlkU2l6ZX0gJHtwaXhlbEdyaWRTaXplfWBcblxuICAgIGlmIChjb2xvciAhPSBudWxsKSB7XG4gICAgICBzdHlsZSA9IHsgLi4uc3R5bGUsIGZpbGw6IHRoZW1lLmdldEljb25Db2xvcihjb2xvcikgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGlzPVwic3ZnXCJcbiAgICAgICAgey4uLnN2Z1Byb3BzfVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIGRhdGEtaWNvbj17aWNvbn1cbiAgICAgICAgd2lkdGg9e3NpemV9XG4gICAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgICAgdmlld0JveD17dmlld0JveH1cbiAgICAgID5cbiAgICAgICAge3RpdGxlID8gPHRpdGxlPnt0aXRsZX08L3RpdGxlPiA6IG51bGx9XG4gICAgICAgIHtwYXRoc31cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoSWNvbilcbiJdfQ==