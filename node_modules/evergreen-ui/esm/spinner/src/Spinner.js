import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { css } from 'glamor';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { withTheme } from '../../theme';
var loadingKeyframes = css.keyframes('loading', {
  '0%': {
    transform: 'rotate(0)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
});
var loadingCircleKeyframes = css.keyframes('loading-circle', {
  '0%': {
    strokeDashoffset: 600
  },
  '100%': {
    strokeDashoffset: 0
  }
});
var outerClass = css({
  animation: "".concat(loadingKeyframes, " 2s linear infinite")
}).toString();

var innerClass = function innerClass(color) {
  return css({
    strokeDashoffset: 600,
    strokeDasharray: 300,
    strokeWidth: 12,
    strokeMiterlimit: 10,
    strokeLinecap: 'round',
    animation: "".concat(loadingCircleKeyframes, " 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite"),
    stroke: color,
    fill: 'transparent'
  }).toString();
};

var Spinner =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Spinner, _PureComponent);

  function Spinner(_ref) {
    var _this;

    var delay = _ref.delay;

    _classCallCheck(this, Spinner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Spinner).call(this));
    _this.state = {
      isVisible: delay === 0
    };
    return _this;
  }

  _createClass(Spinner, [{
    key: "render",
    value: function render() {
      if (!this.state.isVisible) {
        return null;
      }

      var _this$props = this.props,
          theme = _this$props.theme,
          size = _this$props.size,
          props = _objectWithoutProperties(_this$props, ["theme", "size"]);

      return React.createElement(Box, _extends({
        width: size,
        height: size,
        lineHeight: 0
      }, props), React.createElement(Box, {
        is: "svg",
        className: outerClass,
        x: "0px",
        y: "0px",
        viewBox: "0 0 150 150"
      }, React.createElement(Box, {
        is: "circle",
        className: innerClass(theme.spinnerColor),
        cx: "75",
        cy: "75",
        r: "60"
      })));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var delay = this.props.delay;

      if (delay > 0) {
        this.delayTimer = setTimeout(function () {
          _this2.setState({
            isVisible: true
          });
        }, delay);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.delayTimer);
    }
  }]);

  return Spinner;
}(PureComponent);

Spinner.displayName = "Spinner";

_defineProperty(Spinner, "propTypes", _objectSpread({}, Box.propTypes, {
  /**
   * Delay after which spinner should be visible.
   */
  delay: PropTypes.number,

  /**
   * The size of the spinner.
   */
  size: PropTypes.number.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Spinner, "defaultProps", {
  size: 40,
  delay: 0
});

export default withTheme(Spinner);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zcGlubmVyL3NyYy9TcGlubmVyLmpzIl0sIm5hbWVzIjpbImNzcyIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkJveCIsIndpdGhUaGVtZSIsImxvYWRpbmdLZXlmcmFtZXMiLCJrZXlmcmFtZXMiLCJ0cmFuc2Zvcm0iLCJsb2FkaW5nQ2lyY2xlS2V5ZnJhbWVzIiwic3Ryb2tlRGFzaG9mZnNldCIsIm91dGVyQ2xhc3MiLCJhbmltYXRpb24iLCJ0b1N0cmluZyIsImlubmVyQ2xhc3MiLCJjb2xvciIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTWl0ZXJsaW1pdCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2UiLCJmaWxsIiwiU3Bpbm5lciIsImRlbGF5Iiwic3RhdGUiLCJpc1Zpc2libGUiLCJwcm9wcyIsInRoZW1lIiwic2l6ZSIsInNwaW5uZXJDb2xvciIsImRlbGF5VGltZXIiLCJzZXRUaW1lb3V0Iiwic2V0U3RhdGUiLCJjbGVhclRpbWVvdXQiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxTQUFTQSxHQUFULFFBQW9CLFFBQXBCO0FBQ0EsT0FBT0MsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixRQUFoQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBR04sR0FBRyxDQUFDTyxTQUFKLENBQWMsU0FBZCxFQUF5QjtBQUNoRCxRQUFNO0FBQ0pDLElBQUFBLFNBQVMsRUFBRTtBQURQLEdBRDBDO0FBSWhELFVBQVE7QUFDTkEsSUFBQUEsU0FBUyxFQUFFO0FBREw7QUFKd0MsQ0FBekIsQ0FBekI7QUFTQSxJQUFNQyxzQkFBc0IsR0FBR1QsR0FBRyxDQUFDTyxTQUFK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LFNBQVMsQ0FBQ2tDLE1BQVYsQ0FBaUJEOzs7Z0JBcEJ0QmQsTyxrQkF1QmtCO0FBQ3BCTSxFQUFBQSxJQUFJLEVBQUUsRUFEYztBQUVwQkwsRUFBQUEsS0FBSyxFQUFFO0FBRmEsQzs7QUF5RHhCLGVBQWVsQixTQUFTLENBQUNpQixPQUFELENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IGxvYWRpbmdLZXlmcmFtZXMgPSBjc3Mua2V5ZnJhbWVzKCdsb2FkaW5nJywge1xuICAnMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDApJ1xuICB9LFxuICAnMTAwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMzYwZGVnKSdcbiAgfVxufSlcblxuY29uc3QgbG9hZGluZ0NpcmNsZUtleWZyYW1lcyA9IGNzcy5rZXlmcmFtZXMoJ2xvYWRpbmctY2lyY2xlJywge1xuICAnMCUnOiB7XG4gICAgc3Ryb2tlRGFzaG9mZnNldDogNjAwXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHN0cm9rZURhc2hvZmZzZXQ6IDBcbiAgfVxufSlcblxuY29uc3Qgb3V0ZXJDbGFzcyA9IGNzcyh7XG4gIGFuaW1hdGlvbjogYCR7bG9hZGluZ0tleWZyYW1lc30gMnMgbGluZWFyIGluZmluaXRlYFxufSkudG9TdHJpbmcoKVxuXG5jb25zdCBpbm5lckNsYXNzID0gY29sb3IgPT5cbiAgY3NzKHtcbiAgICBzdHJva2VEYXNob2Zmc2V0OiA2MDAsXG4gICAgc3Ryb2tlRGFzaGFycmF5OiAzMDAsXG4gICAgc3Ryb2tlV2lkdGg6IDEyLFxuICAgIHN0cm9rZU1pdGVybGltaXQ6IDEwLFxuICAgIHN0cm9rZUxpbmVjYXA6ICdyb3VuZCcsXG4gICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nQ2lyY2xlS2V5ZnJhbWVzfSAxLjZzIGN1YmljLWJlemllcigwLjQsIDAuMTUsIDAuNiwgMC44NSkgaW5maW5pdGVgLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgZmlsbDogJ3RyYW5zcGFyZW50J1xuICB9KS50b1N0cmluZygpXG5cbmNsYXNzIFNwaW5uZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgQm94IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5Cb3gucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogRGVsYXkgYWZ0ZXIgd2hpY2ggc3Bpbm5lciBzaG91bGQgYmUgdmlzaWJsZS5cbiAgICAgKi9cbiAgICBkZWxheTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFRoZSBzaXplIG9mIHRoZSBzcGlubmVyLlxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaXplOiA0MCxcbiAgICBkZWxheTogMFxuICB9XG5cbiAgY29uc3RydWN0b3IoeyBkZWxheSB9KSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzVmlzaWJsZTogZGVsYXkgPT09IDBcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCB7IHRoZW1lLCBzaXplLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IGxpbmVIZWlnaHQ9ezB9IHsuLi5wcm9wc30+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBpcz1cInN2Z1wiXG4gICAgICAgICAgY2xhc3NOYW1lPXtvdXRlckNsYXNzfVxuICAgICAgICAgIHg9XCIwcHhcIlxuICAgICAgICAgIHk9XCIwcHhcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTUwIDE1MFwiXG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBpcz1cImNpcmNsZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2lubmVyQ2xhc3ModGhlbWUuc3Bpbm5lckNvbG9yKX1cbiAgICAgICAgICAgIGN4PVwiNzVcIlxuICAgICAgICAgICAgY3k9XCI3NVwiXG4gICAgICAgICAgICByPVwiNjBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBkZWxheSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGRlbGF5ID4gMCkge1xuICAgICAgdGhpcy5kZWxheVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzVmlzaWJsZTogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSwgZGVsYXkpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lcilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoU3Bpbm5lcilcbiJdfQ==