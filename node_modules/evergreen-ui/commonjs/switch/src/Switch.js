"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _theme = require("../../theme");

var animationEasing = {
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var handleStyleClass = (0, _glamor.css)({
  backgroundColor: '#fff',
  borderRadius: 9999
}).toString();
var iconContainerStyleClass = (0, _glamor.css)({
  transition: "all 500ms ".concat(animationEasing.spring),
  opacity: 0,
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 4,
  '&[data-checked="true"]': {
    opacity: 1,
    transform: 'scale(1)'
  },
  '> svg': {
    transition: "all 500ms ".concat(animationEasing.spring),
    transform: 'scale(0)'
  },
  '&[data-checked="true"] > svg': {
    transform: 'scale(1)'
  }
}).toString();
var handleContainerStyleClass = (0, _glamor.css)({
  transition: 'transform 200ms ease-in-out',
  transform: 'translateX(0%)',
  '&[data-checked="true"]': {
    transform: 'translateX(50%)'
  }
}).toString();

var CheckIcon = function CheckIcon(_ref) {
  var size = _ref.size,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      props = (0, _objectWithoutProperties2.default)(_ref, ["size", "fill"]);
  return _react.default.createElement("svg", (0, _extends2.default)({
    width: 10,
    height: size,
    viewBox: "0 0 10 7"
  }, props), _react.default.createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
  }));
};

CheckIcon.displayName = "CheckIcon";
CheckIcon.propTypes = {
  fill: _propTypes.default.string,
  size: _propTypes.default.number
};

var isControlled = function isControlled(component) {
  return {}.hasOwnProperty.call(component.props, 'checked');
};

var Switch =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Switch, _PureComponent);

  function Switch(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, Switch);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Switch).call(this, props, context));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (value) {
      if (isControlled((0, _assertThisInitialized2.default)(_this))) {
        _this.props.onChange(value);
      } else {
        _this.setState(function (_ref2) {
          var checked = _ref2.checked;
          return {
            checked: !checked
          };
        });

        _this.props.onChange(value);
      }
    });
    _this.state = {
      checked: props.checked || props.defaultChecked || false
    };
    return _this;
  }

  (0, _createClass2.default)(Switch, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          id = _this$props.id,
          name = _this$props.name,
          height = _this$props.height,
          checkedProps = _this$props.checked,
          onChange = _this$props.onChange,
          disabled = _this$props.disabled,
          appearance = _this$props.appearance,
          hasCheckIcon = _this$props.hasCheckIcon,
          defaultChecked = _this$props.defaultChecked,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "id", "name", "height", "checked", "onChange", "disabled", "appearance", "hasCheckIcon", "defaultChecked"]);
      var checked = isControlled(this) ? checkedProps : this.state.checked;
      var themedClassName = theme.getSwitchClassName(appearance);
      return _react.default.createElement(_uiBox.default, (0, _extends2.default)({
        is: "label",
        display: "block",
        width: height * 2,
        position: "relative"
      }, props), _react.default.createElement(_uiBox.default, {
        is: "input",
        className: themedClassName,
        id: id,
        name: name,
        type: "checkbox",
        checked: checked,
        disabled: disabled,
        defaultChecked: defaultChecked,
        onChange: this.handleChange
      }), _react.default.createElement(_uiBox.default, {
        onClick: this.handleClick,
        height: height,
        width: height * 2
      }, _react.default.createElement(_uiBox.default, {
        height: height,
        width: height,
        "data-checked": checked,
        className: iconContainerStyleClass
      }, hasCheckIcon && _react.default.createElement(CheckIcon, {
        size: height / 2 - 3
      })), _react.default.createElement(_uiBox.default, {
        width: height * 2,
        display: "flex",
        "data-checked": checked,
        className: handleContainerStyleClass
      }, _react.default.createElement(_uiBox.default, {
        flex: 1,
        padding: 2
      }, _react.default.createElement(_uiBox.default, {
        width: height - 4,
        height: height - 4,
        className: handleStyleClass
      })))));
    }
  }]);
  return Switch;
}(_react.PureComponent);

Switch.displayName = "Switch";
(0, _defineProperty2.default)(Switch, "propTypes", (0, _objectSpread2.default)({}, _uiBox.spacing.propTypes, _uiBox.position.propTypes, _uiBox.layout.propTypes, {
  /**
   * The id attribute of the radio.
   */
  id: _propTypes.default.string,

  /**
   * The name attribute of the radio.
   */
  name: _propTypes.default.string,

  /**
   * The value attribute of the radio.
   */
  value: _propTypes.default.string,

  /**
   * The height of the switch.
   */
  height: _propTypes.default.number,

  /**
   * When true, the switch is checked (on).
   */
  checked: _propTypes.default.bool,

  /**
   * Function called when state changes.
   */
  onChange: _propTypes.default.func,

  /**
   * When true, the switch is disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * When true, the switch is invalid.
   */
  isInvalid: _propTypes.default.bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: _propTypes.default.string.isRequired,

  /**
   * When true, the switch has a check icon.
   */
  hasCheckIcon: _propTypes.default.bool,

  /**
   * When true, the switch is true by default.
   * This is for uncontrolled usage.
   */
  defaultChecked: _propTypes.default.bool,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes.default.object.isRequired
}));
(0, _defineProperty2.default)(Switch, "defaultProps", {
  height: 16,
  onChange: function onChange() {},
  appearance: 'default',
  hasCheckIcon: true,
  disabled: false
});

var _default = (0, _theme.withTheme)(Switch);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zd2l0Y2gvc3JjL1N3aXRjaC5qcyJdLCJuYW1lcyI6WyJhbmltYXRpb25FYXNpbmciLCJzcHJpbmciLCJoYW5kbGVTdHlsZUNsYXNzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwidG9TdHJpbmciLCJpY29uQ29udGFpbmVyU3R5bGVDbGFzcyIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiZGlzcGxheSIsInBvc2l0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZ0xlZnQiLCJ0cmFuc2Zvcm0iLCJoYW5kbGVDb250YWluZXJTdHlsZUNsYXNzIiwiQ2hlY2tJY29uIiwic2l6ZSIsImZpbGwiLCJwcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsImlzQ29udHJvbGxlZCIsImNvbXBvbmVudCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlN3aXRjaCIsImNvbnRleHQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwic2V0U3RhdGUiLCJjaGVja2VkIiwic3RhdGUiLCJkZWZhdWx0Q2hlY2tlZCIsInRoZW1lIiwiaWQiLCJuYW1lIiwiaGVpZ2h0IiwiY2hlY2tlZFByb3BzIiwiZGlzYWJsZWQiLCJhcHBlYXJhbmNlIiwiaGFzQ2hlY2tJY29uIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0U3dpdGNoQ2xhc3NOYW1lIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQ2xpY2siLCJQdXJlQ29tcG9uZW50Iiwic3BhY2luZyIsImxheW91dCIsImJvb2wiLCJmdW5jIiwiaXNJbnZhbGlkIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRztBQUN0QkMsRUFBQUEsTUFBTTtBQURnQixDQUF4QjtBQUlBLElBQU1DLGdCQUFn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QUFBQSxPQUFPLEVBQUVaLG1CQUFVOEIsSTs7QUFFbkI7OztBQUdBcEIsRUFBQUEsUUFBUSxFQUFFVixtQkFBVStCLEk7O0FBRXBCOzs7QUFHQVgsRUFBQUEsUUFBUSxFQUFFcEIsbUJBQVU4QixJOztBQUVwQjs7O0FBR0FFLEVBQUFBLFNBQVMsRUFBRWhDLG1CQUFVOEIsSTs7QUFFckI7Ozs7QUFJQVQsRUFBQUEsVUFBVSxFQUFFckIsbUJBQVVDLE1BQVYsQ0FBaUJnQyxVOztBQUU3Qjs7O0FBR0FYLEVBQUFBLFlBQVksRUFBRXRCLG1CQUFVOEIsSTs7QUFFeEI7Ozs7QUFJQWhCLEVBQUFBLGNBQWMsRUFBRWQsbUJBQVU4QixJOztBQUUxQjs7O0FBR0FmLEVBQUFBLEtBQUssRUFBRWYsbUJBQVVrQyxNQUFWLENBQWlCRDs7OEJBckV0QjFCLE0sa0JBd0VrQjtBQUNwQlcsRUFBQUEsTUFBTSxFQUFFLEVBRFk7QUFFcEJSLEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBRkU7QUFHcEJXLEVBQUFBLFVBQVUsRUFBRSxTQUhRO0FBSXBCQyxFQUFBQSxZQUFZLEVBQUUsSUFKTTtBQUtwQkYsRUFBQUEsUUFBUSxFQUFFO0FBTFUsQzs7ZUE2RlQsc0JBQVViLE1BQVYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94LCB7IHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgYW5pbWF0aW9uRWFzaW5nID0ge1xuICBzcHJpbmc6IGBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4xNzUpYFxufVxuXG5jb25zdCBoYW5kbGVTdHlsZUNsYXNzID0gY3NzKHtcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIGJvcmRlclJhZGl1czogOTk5OVxufSkudG9TdHJpbmcoKVxuXG5jb25zdCBpY29uQ29udGFpbmVyU3R5bGVDbGFzcyA9IGNzcyh7XG4gIHRyYW5zaXRpb246IGBhbGwgNTAwbXMgJHthbmltYXRpb25FYXNpbmcuc3ByaW5nfWAsXG4gIG9wYWNpdHk6IDAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHBhZGRpbmdMZWZ0OiA0LFxuICAnJltkYXRhLWNoZWNrZWQ9XCJ0cnVlXCJdJzoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gIH0sXG4gICc+IHN2Zyc6IHtcbiAgICB0cmFuc2l0aW9uOiBgYWxsIDUwMG1zICR7YW5pbWF0aW9uRWFzaW5nLnNwcmluZ31gLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJ1xuICB9LFxuICAnJltkYXRhLWNoZWNrZWQ9XCJ0cnVlXCJdID4gc3ZnJzoge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICB9XG59KS50b1N0cmluZygpXG5cbmNvbnN0IGhhbmRsZUNvbnRhaW5lclN0eWxlQ2xhc3MgPSBjc3Moe1xuICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0JyxcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLFxuICAnJltkYXRhLWNoZWNrZWQ9XCJ0cnVlXCJdJzoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNTAlKSdcbiAgfVxufSkudG9TdHJpbmcoKVxuXG5jb25zdCBDaGVja0ljb24gPSAoeyBzaXplLCBmaWxsID0gJ2N1cnJlbnRDb2xvcicsIC4uLnByb3BzIH0pID0+IChcbiAgPHN2ZyB3aWR0aD17MTB9IGhlaWdodD17c2l6ZX0gdmlld0JveD1cIjAgMCAxMCA3XCIgey4uLnByb3BzfT5cbiAgICA8cGF0aFxuICAgICAgZmlsbD17ZmlsbH1cbiAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICBkPVwiTTQgNC41ODZMMS43MDcgMi4yOTNBMSAxIDAgMSAwIC4yOTMgMy43MDdsMyAzYS45OTcuOTk3IDAgMCAwIDEuNDE0IDBsNS01QTEgMSAwIDEgMCA4LjI5My4yOTNMNCA0LjU4NnpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKVxuXG5DaGVja0ljb24ucHJvcFR5cGVzID0ge1xuICBmaWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyXG59XG5cbmNvbnN0IGlzQ29udHJvbGxlZCA9IGNvbXBvbmVudCA9PiB7XG4gIHJldHVybiB7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbXBvbmVudC5wcm9wcywgJ2NoZWNrZWQnKVxufVxuXG5jbGFzcyBTd2l0Y2ggZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyBzb21lIEJveCBBUElzLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGlkIGF0dHJpYnV0ZSBvZiB0aGUgcmFkaW8uXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvLlxuICAgICAqL1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSByYWRpby5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHN3aXRjaC5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBzd2l0Y2ggaXMgY2hlY2tlZCAob24pLlxuICAgICAqL1xuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gc3RhdGUgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBzd2l0Y2ggaXMgZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgc3dpdGNoIGlzIGludmFsaWQuXG4gICAgICovXG4gICAgaXNJbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBjaGVja2JveC5cbiAgICAgKiBUaGUgZGVmYXVsdCB0aGVtZSBvbmx5IGNvbWVzIHdpdGggYSBkZWZhdWx0IHN0eWxlLlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHN3aXRjaCBoYXMgYSBjaGVjayBpY29uLlxuICAgICAqL1xuICAgIGhhc0NoZWNrSWNvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBzd2l0Y2ggaXMgdHJ1ZSBieSBkZWZhdWx0LlxuICAgICAqIFRoaXMgaXMgZm9yIHVuY29udHJvbGxlZCB1c2FnZS5cbiAgICAgKi9cbiAgICBkZWZhdWx0Q2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiAxNixcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICAgIGhhc0NoZWNrSWNvbjogdHJ1ZSxcbiAgICBkaXNhYmxlZDogZmFsc2VcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoZWNrZWQ6IHByb3BzLmNoZWNrZWQgfHwgcHJvcHMuZGVmYXVsdENoZWNrZWQgfHwgZmFsc2VcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSB2YWx1ZSA9PiB7XG4gICAgaWYgKGlzQ29udHJvbGxlZCh0aGlzKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgoeyBjaGVja2VkIH0pID0+ICh7XG4gICAgICAgIGNoZWNrZWQ6ICFjaGVja2VkXG4gICAgICB9KSlcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuXG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBjaGVja2VkOiBjaGVja2VkUHJvcHMsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGhhc0NoZWNrSWNvbixcbiAgICAgIGRlZmF1bHRDaGVja2VkLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgY2hlY2tlZCA9IGlzQ29udHJvbGxlZCh0aGlzKSA/IGNoZWNrZWRQcm9wcyA6IHRoaXMuc3RhdGUuY2hlY2tlZFxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFN3aXRjaENsYXNzTmFtZShhcHBlYXJhbmNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgaXM9XCJsYWJlbFwiXG4gICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgIHdpZHRoPXtoZWlnaHQgKiAyfVxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgaXM9XCJpbnB1dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGVtZWRDbGFzc05hbWV9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17ZGVmYXVsdENoZWNrZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8Qm94IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGhlaWdodD17aGVpZ2h0fSB3aWR0aD17aGVpZ2h0ICogMn0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICB3aWR0aD17aGVpZ2h0fVxuICAgICAgICAgICAgZGF0YS1jaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpY29uQ29udGFpbmVyU3R5bGVDbGFzc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aGFzQ2hlY2tJY29uICYmIDxDaGVja0ljb24gc2l6ZT17aGVpZ2h0IC8gMiAtIDN9IC8+fVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHdpZHRoPXtoZWlnaHQgKiAyfVxuICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgZGF0YS1jaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtoYW5kbGVDb250YWluZXJTdHlsZUNsYXNzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggZmxleD17MX0gcGFkZGluZz17Mn0+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICB3aWR0aD17aGVpZ2h0IC0gNH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodCAtIDR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtoYW5kbGVTdHlsZUNsYXNzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTd2l0Y2gpXG4iXX0=