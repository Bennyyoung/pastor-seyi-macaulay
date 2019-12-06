"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var _theme = require("../../theme");

var _MenuOption = _interopRequireDefault(require("./MenuOption"));

var MenuOptionsGroup =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(MenuOptionsGroup, _React$PureComponent);

  function MenuOptionsGroup() {
    (0, _classCallCheck2.default)(this, MenuOptionsGroup);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MenuOptionsGroup).apply(this, arguments));
  }

  (0, _createClass2.default)(MenuOptionsGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          options = _this$props.options,
          selected = _this$props.selected,
          onChange = _this$props.onChange;
      return _react.default.createElement(_layers.Pane, {
        paddingY: 8
      }, title && _react.default.createElement(_typography.Heading, {
        size: 100,
        marginLeft: 44,
        marginRight: 16,
        marginY: 8
      }, title), _react.default.createElement(_layers.Pane, null, options.map(function (option) {
        return _react.default.createElement(_MenuOption.default, {
          key: option.value,
          isSelected: option.value === selected,
          onSelect: function onSelect() {
            return onChange(option.value);
          }
        }, option.label);
      })));
    }
  }]);
  return MenuOptionsGroup;
}(_react.default.PureComponent);

MenuOptionsGroup.displayName = "MenuOptionsGroup";
(0, _defineProperty2.default)(MenuOptionsGroup, "propTypes", {
  /**
   * Title of the menu group.
   */
  title: _propTypes.default.node,

  /**
   * The current value of the option group.
   */
  selected: _propTypes.default.any,

  /**
   * Function called when selection changes.
   */
  onChange: _propTypes.default.func,

  /**
   * List of options rendered in the group.
   */
  options: _propTypes.default.array
});

var _default = (0, _theme.withTheme)(MenuOptionsGroup);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51T3B0aW9uc0dyb3VwLmpzIl0sIm5hbWVzIjpbIk1lbnVPcHRpb25zR3JvdXAiLCJwcm9wcyIsInRpdGxlIiwib3B0aW9ucyIsInNlbGVjdGVkIiwib25DaGFuZ2UiLCJtYXAiLCJvcHRpb24iLCJ2YWx1ZSIsImxhYmVsIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwibm9kZSIsImFueSIsImZ1bmMiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBRU1BLGdCOzs7Ozs7Ozs7Ozs7NkJBdUJLO0FBQUEsd0JBQ3dDLEtBQUtDLEtBRDdDO0FBQUEsVUFDQ0MsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUMsT0FEUixlQUNRQSxPQURSO0FBQUEsVUFDaUJDLFFBRGpCLGVBQ2lCQSxRQURqQjtBQUFBLFVBQzJCQyxRQUQzQixlQUMyQkEsUUFEM0I7QUFHUCxhQUNFLDZCQUFDLFlBQUQ7QUFBTSxRQUFBLFFBQVEsRUFBRTtBQUFoQixTQUNHSCxLQUFLLElBQ0osNkJBQUMsbUJBQUQ7QUFBUyxRQUFBLElBQUksRUFBRSxHQUFmO0FBQW9CLFFBQUEsVUFBVSxFQUFFLEVBQWhDO0FBQW9DLFFBQUEsV0FBVyxFQUFFLEVBQWpEO0FBQXFELFFBQUEsT0FBTyxFQUFFO0FBQTlELFNBQ0dBLEtBREgsQ0FGSixFQU1FLDZCQUFDLFlBQUQsUUFDR0MsT0FBTyxDQUFDRyxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFZO0FBQ3ZCLGVBQ0UsNkJBQUMsbUJBQUQ7QUFDRSxVQUFBLEdBQUcsRUFBRUEsTUFBTSxDQUFDQyxLQURkO0FBRUUsVUFBQSxVQUFVLEVBQUVELE1BQU0sQ0FBQ0MsS0FBUCxLQUFpQkosUUFGL0I7QUFHRSxVQUFBLFFBQVEsRUFBRTtBQUFBLG1CQUFNQyxRQUFRLENBQUNFLE1BQU0sQ0FBQ0MsS0FBUixDQUFkO0FBQUE7QUFIWixXQUtHRCxNQUFNLENBQUNFLEtBTFYsQ0FERjtBQVNELE9BVkEsQ0FESCxDQU5GLENBREY7QUFzQkQ7OztFQWhENEJDLGVBQU1DLGE7O0FBQS9CWCxnQjs4QkFBQUEsZ0IsZUFDZTtBQUNqQjs7O0FBR0FFLEVBQUFBLEtBQUssRUFBRVUsbUJBQVVDLElBSkE7O0FBTWpCOzs7QUFHQVQsRUFBQUEsUUFBUSxFQUFFUSxtQkFBVUUsR0FUSDs7QUFXakI7OztBQUdBVCxFQUFBQSxRQUFRLEVBQUVPLG1CQUFVRyxJQWRIOztBQWdCakI7OztBQUdBWixFQUFBQSxPQUFPLEVBQUVTLG1CQUFVSTtBQW5CRixDOztlQWtETixzQkFBVWhCLGdCQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCBNZW51T3B0aW9uIGZyb20gJy4vTWVudU9wdGlvbidcblxuY2xhc3MgTWVudU9wdGlvbnNHcm91cCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRpdGxlIG9mIHRoZSBtZW51IGdyb3VwLlxuICAgICAqL1xuICAgIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBvcHRpb24gZ3JvdXAuXG4gICAgICovXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5hbnksXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBzZWxlY3Rpb24gY2hhbmdlcy5cbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIG9wdGlvbnMgcmVuZGVyZWQgaW4gdGhlIGdyb3VwLlxuICAgICAqL1xuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIG9wdGlvbnMsIHNlbGVjdGVkLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lIHBhZGRpbmdZPXs4fT5cbiAgICAgICAge3RpdGxlICYmIChcbiAgICAgICAgICA8SGVhZGluZyBzaXplPXsxMDB9IG1hcmdpbkxlZnQ9ezQ0fSBtYXJnaW5SaWdodD17MTZ9IG1hcmdpblk9ezh9PlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgKX1cbiAgICAgICAgPFBhbmU+XG4gICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxNZW51T3B0aW9uXG4gICAgICAgICAgICAgICAga2V5PXtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17b3B0aW9uLnZhbHVlID09PSBzZWxlY3RlZH1cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gb25DaGFuZ2Uob3B0aW9uLnZhbHVlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICAgIDwvTWVudU9wdGlvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9QYW5lPlxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoTWVudU9wdGlvbnNHcm91cClcbiJdfQ==