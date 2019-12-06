import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { css } from 'glamor';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { spacing, position, layout } from 'ui-box';
import { withTheme } from '../../theme';
var animationEasing = {
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var handleStyleClass = css({
  backgroundColor: '#fff',
  borderRadius: 9999
}).toString();
var iconContainerStyleClass = css({
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
var handleContainerStyleClass = css({
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
      props = _objectWithoutProperties(_ref, ["size", "fill"]);

  return React.createElement("svg", _extends({
    width: 10,
    height: size,
    viewBox: "0 0 10 7"
  }, props), React.createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
  }));
};

CheckIcon.displayName = "CheckIcon";
CheckIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number
};

var isControlled = function isControlled(component) {
  return {}.hasOwnProperty.call(component.props, 'checked');
};

var Switch =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Switch, _PureComponent);

  function Switch(props, context) {
    var _this;

    _classCallCheck(this, Switch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Switch).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
      if (isControlled(_assertThisInitialized(_this))) {
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

  _createClass(Switch, [{
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
          props = _objectWithoutProperties(_this$props, ["theme", "id", "name", "height", "checked", "onChange", "disabled", "appearance", "hasCheckIcon", "defaultChecked"]);

      var checked = isControlled(this) ? checkedProps : this.state.checked;
      var themedClassName = theme.getSwitchClassName(appearance);
      return React.createElement(Box, _extends({
        is: "label",
        display: "block",
        width: height * 2,
        position: "relative"
      }, props), React.createElement(Box, {
        is: "input",
        className: themedClassName,
        id: id,
        name: name,
        type: "checkbox",
        checked: checked,
        disabled: disabled,
        defaultChecked: defaultChecked,
        onChange: this.handleChange
      }), React.createElement(Box, {
        onClick: this.handleClick,
        height: height,
        width: height * 2
      }, React.createElement(Box, {
        height: height,
        width: height,
        "data-checked": checked,
        className: iconContainerStyleClass
      }, hasCheckIcon && React.createElement(CheckIcon, {
        size: height / 2 - 3
      })), React.createElement(Box, {
        width: height * 2,
        display: "flex",
        "data-checked": checked,
        className: handleContainerStyleClass
      }, React.createElement(Box, {
        flex: 1,
        padding: 2
      }, React.createElement(Box, {
        width: height - 4,
        height: height - 4,
        className: handleStyleClass
      })))));
    }
  }]);

  return Switch;
}(PureComponent);

Switch.displayName = "Switch";

_defineProperty(Switch, "propTypes", _objectSpread({}, spacing.propTypes, position.propTypes, layout.propTypes, {
  /**
   * The id attribute of the radio.
   */
  id: PropTypes.string,

  /**
   * The name attribute of the radio.
   */
  name: PropTypes.string,

  /**
   * The value attribute of the radio.
   */
  value: PropTypes.string,

  /**
   * The height of the switch.
   */
  height: PropTypes.number,

  /**
   * When true, the switch is checked (on).
   */
  checked: PropTypes.bool,

  /**
   * Function called when state changes.
   */
  onChange: PropTypes.func,

  /**
   * When true, the switch is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, the switch is invalid.
   */
  isInvalid: PropTypes.bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * When true, the switch has a check icon.
   */
  hasCheckIcon: PropTypes.bool,

  /**
   * When true, the switch is true by default.
   * This is for uncontrolled usage.
   */
  defaultChecked: PropTypes.bool,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Switch, "defaultProps", {
  height: 16,
  onChange: function onChange() {},
  appearance: 'default',
  hasCheckIcon: true,
  disabled: false
});

export default withTheme(Switch);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zd2l0Y2gvc3JjL1N3aXRjaC5qcyJdLCJuYW1lcyI6WyJjc3MiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJzcGFjaW5nIiwicG9zaXRpb24iLCJsYXlvdXQiLCJ3aXRoVGhlbWUiLCJhbmltYXRpb25FYXNpbmciLCJzcHJpbmciLCJoYW5kbGVTdHlsZUNsYXNzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwidG9TdHJpbmciLCJpY29uQ29udGFpbmVyU3R5bGVDbGFzcyIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmdMZWZ0IiwidHJhbnNmb3JtIiwiaGFuZGxlQ29udGFpbmVyU3R5bGVDbGFzcyIsIkNoZWNrSWNvbiIsInNpemUiLCJmaWxsIiwicHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJpc0NvbnRyb2xsZWQiLCJjb21wb25lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTd2l0Y2giLCJjb250ZXh0IiwidmFsdWUiLCJvbkNoYW5nZSIsInNldFN0YXRlIiwiY2hlY2tlZCIsInN0YXRlIiwiZGVmYXVsdENoZWNrZWQiLCJ0aGVtZSIsImlkIiwibmFtZSIsImhlaWdodCIsImNoZWNrZWRQcm9wcyIsImRpc2FibGVkIiwiYXBwZWFyYW5jZSIsImhhc0NoZWNrSWNvbiIsInRoZW1lZENsYXNzTmFtZSIsImdldFN3aXRjaENsYXNzTmFtZSIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUNsaWNrIiwiYm9vbCIsImZ1bmMiLCJpc0ludmFsaWQiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsU0FBU0EsR0FBVCxRQUFvQixRQUFwQjtBQUNBLE9BQU9DLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxN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cidcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94LCB7IHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgYW5pbWF0aW9uRWFzaW5nID0ge1xuICBzcHJpbmc6IGBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4xNzUpYFxufVxuXG5jb25zdCBoYW5kbGVTdHlsZUNsYXNzID0gY3NzKHtcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIGJvcmRlclJhZGl1czogOTk5OVxufSkudG9TdHJpbmcoKVxuXG5jb25zdCBpY29uQ29udGFpbmVyU3R5bGVDbGFzcyA9IGNzcyh7XG4gIHRyYW5zaXRpb246IGBhbGwgNTAwbXMgJHthbmltYXRpb25FYXNpbmcuc3ByaW5nfWAsXG4gIG9wYWNpdHk6IDAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHBhZGRpbmdMZWZ0OiA0LFxuICAnJltkYXRhLWNoZWNrZWQ9XCJ0cnVlXCJdJzoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gIH0sXG4gICc+IHN2Zyc6IHtcbiAgICB0cmFuc2l0aW9uOiBgYWxsIDUwMG1zICR7YW5pbWF0aW9uRWFzaW5nLnNwcmluZ31gLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJ1xuICB9LFxuICAnJltkYXRhLWNoZWNrZWQ9XCJ0cnVlXCJdID4gc3ZnJzoge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICB9XG59KS50b1N0cmluZygpXG5cbmNvbnN0IGhhbmRsZUNvbnRhaW5lclN0eWxlQ2xhc3MgPSBjc3Moe1xuICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0JyxcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLFxuICAnJltkYXRhLWNoZWNrZWQ9XCJ0cnVlXCJdJzoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNTAlKSdcbiAgfVxufSkudG9TdHJpbmcoKVxuXG5jb25zdCBDaGVja0ljb24gPSAoeyBzaXplLCBmaWxsID0gJ2N1cnJlbnRDb2xvcicsIC4uLnByb3BzIH0pID0+IChcbiAgPHN2ZyB3aWR0aD17MTB9IGhlaWdodD17c2l6ZX0gdmlld0JveD1cIjAgMCAxMCA3XCIgey4uLnByb3BzfT5cbiAgICA8cGF0aFxuICAgICAgZmlsbD17ZmlsbH1cbiAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICBkPVwiTTQgNC41ODZMMS43MDcgMi4yOTNBMSAxIDAgMSAwIC4yOTMgMy43MDdsMyAzYS45OTcuOTk3IDAgMCAwIDEuNDE0IDBsNS01QTEgMSAwIDEgMCA4LjI5My4yOTNMNCA0LjU4NnpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKVxuXG5DaGVja0ljb24ucHJvcFR5cGVzID0ge1xuICBmaWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyXG59XG5cbmNvbnN0IGlzQ29udHJvbGxlZCA9IGNvbXBvbmVudCA9PiB7XG4gIHJldHVybiB7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbXBvbmVudC5wcm9wcywgJ2NoZWNrZWQnKVxufVxuXG5jbGFzcyBTd2l0Y2ggZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyBzb21lIEJveCBBUElzLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGlkIGF0dHJpYnV0ZSBvZiB0aGUgcmFkaW8uXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvLlxuICAgICAqL1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSByYWRpby5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHN3aXRjaC5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBzd2l0Y2ggaXMgY2hlY2tlZCAob24pLlxuICAgICAqL1xuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gc3RhdGUgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBzd2l0Y2ggaXMgZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgc3dpdGNoIGlzIGludmFsaWQuXG4gICAgICovXG4gICAgaXNJbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBjaGVja2JveC5cbiAgICAgKiBUaGUgZGVmYXVsdCB0aGVtZSBvbmx5IGNvbWVzIHdpdGggYSBkZWZhdWx0IHN0eWxlLlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHN3aXRjaCBoYXMgYSBjaGVjayBpY29uLlxuICAgICAqL1xuICAgIGhhc0NoZWNrSWNvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBzd2l0Y2ggaXMgdHJ1ZSBieSBkZWZhdWx0LlxuICAgICAqIFRoaXMgaXMgZm9yIHVuY29udHJvbGxlZCB1c2FnZS5cbiAgICAgKi9cbiAgICBkZWZhdWx0Q2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiAxNixcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICAgIGhhc0NoZWNrSWNvbjogdHJ1ZSxcbiAgICBkaXNhYmxlZDogZmFsc2VcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoZWNrZWQ6IHByb3BzLmNoZWNrZWQgfHwgcHJvcHMuZGVmYXVsdENoZWNrZWQgfHwgZmFsc2VcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSB2YWx1ZSA9PiB7XG4gICAgaWYgKGlzQ29udHJvbGxlZCh0aGlzKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgoeyBjaGVja2VkIH0pID0+ICh7XG4gICAgICAgIGNoZWNrZWQ6ICFjaGVja2VkXG4gICAgICB9KSlcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuXG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBjaGVja2VkOiBjaGVja2VkUHJvcHMsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGhhc0NoZWNrSWNvbixcbiAgICAgIGRlZmF1bHRDaGVja2VkLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgY2hlY2tlZCA9IGlzQ29udHJvbGxlZCh0aGlzKSA/IGNoZWNrZWRQcm9wcyA6IHRoaXMuc3RhdGUuY2hlY2tlZFxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFN3aXRjaENsYXNzTmFtZShhcHBlYXJhbmNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgaXM9XCJsYWJlbFwiXG4gICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgIHdpZHRoPXtoZWlnaHQgKiAyfVxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgaXM9XCJpbnB1dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGVtZWRDbGFzc05hbWV9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17ZGVmYXVsdENoZWNrZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8Qm94IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGhlaWdodD17aGVpZ2h0fSB3aWR0aD17aGVpZ2h0ICogMn0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICB3aWR0aD17aGVpZ2h0fVxuICAgICAgICAgICAgZGF0YS1jaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpY29uQ29udGFpbmVyU3R5bGVDbGFzc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aGFzQ2hlY2tJY29uICYmIDxDaGVja0ljb24gc2l6ZT17aGVpZ2h0IC8gMiAtIDN9IC8+fVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHdpZHRoPXtoZWlnaHQgKiAyfVxuICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgZGF0YS1jaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtoYW5kbGVDb250YWluZXJTdHlsZUNsYXNzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggZmxleD17MX0gcGFkZGluZz17Mn0+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICB3aWR0aD17aGVpZ2h0IC0gNH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodCAtIDR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtoYW5kbGVTdHlsZUNsYXNzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTd2l0Y2gpXG4iXX0=