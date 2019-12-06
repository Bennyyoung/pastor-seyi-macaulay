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

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _theme = require("../../theme");

var loadingKeyframes = _glamor.css.keyframes('loading', {
  '0%': {
    transform: 'rotate(0)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
});

var loadingCircleKeyframes = _glamor.css.keyframes('loading-circle', {
  '0%': {
    strokeDashoffset: 600
  },
  '100%': {
    strokeDashoffset: 0
  }
});

var outerClass = (0, _glamor.css)({
  animation: "".concat(loadingKeyframes, " 2s linear infinite")
}).toString();

var innerClass = function innerClass(color) {
  return (0, _glamor.css)({
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
  (0, _inherits2.default)(Spinner, _PureComponent);

  function Spinner(_ref) {
    var _this;

    var delay = _ref.delay;
    (0, _classCallCheck2.default)(this, Spinner);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Spinner).call(this));
    _this.state = {
      isVisible: delay === 0
    };
    return _this;
  }

  (0, _createClass2.default)(Spinner, [{
    key: "render",
    value: function render() {
      if (!this.state.isVisible) {
        return null;
      }

      var _this$props = this.props,
          theme = _this$props.theme,
          size = _this$props.size,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "size"]);
      return _react.default.createElement(_uiBox.default, (0, _extends2.default)({
        width: size,
        height: size,
        lineHeight: 0
      }, props), _react.default.createElement(_uiBox.default, {
        is: "svg",
        className: outerClass,
        x: "0px",
        y: "0px",
        viewBox: "0 0 150 150"
      }, _react.default.createElement(_uiBox.default, {
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
}(_react.PureComponent);

Spinner.displayName = "Spinner";
(0, _defineProperty2.default)(Spinner, "propTypes", (0, _objectSpread2.default)({}, _uiBox.default.propTypes, {
  /**
   * Delay after which spinner should be visible.
   */
  delay: _propTypes.default.number,

  /**
   * The size of the spinner.
   */
  size: _propTypes.default.number.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes.default.object.isRequired
}));
(0, _defineProperty2.default)(Spinner, "defaultProps", {
  size: 40,
  delay: 0
});

var _default = (0, _theme.withTheme)(Spinner);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zcGlubmVyL3NyYy9TcGlubmVyLmpzIl0sIm5hbWVzIjpbImxvYWRpbmdLZXlmcmFtZXMiLCJjc3MiLCJrZXlmcmFtZXMiLCJ0cmFuc2Zvcm0iLCJsb2FkaW5nQ2lyY2xlS2V5ZnJhbWVzIiwic3Ryb2tlRGFzaG9mZnNldCIsIm91dGVyQ2xhc3MiLCJhbmltYXRpb24iLCJ0b1N0cmluZyIsImlubmVyQ2xhc3MiLCJjb2xvciIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTWl0ZXJsaW1pdCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2UiLCJmaWxsIiwiU3Bpbm5lciIsImRlbGF5Iiwic3RhdGUiLCJpc1Zpc2libGUiLCJwcm9wcyIsInRoZW1lIiwic2l6ZSIsInNwaW5uZXJDb2xvciIsImRlbGF5VGltZXIiLCJzZXRUaW1lb3V0Iiwic2V0U3RhdGUiLCJjbGVhclRpbWVvdXQiLCJQdXJlQ29tcG9uZW50IiwiQm94IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MsWUFBSUMsU0FBSixDQUFjLFNBQWQsRUFBeUI7QUFDaEQsUUFBTTtBQUNKQyxJQUFBQSxTQUFTLEVBQUU7QUFEUCxHQUQwQztBQUloRCxVQUFRO0FBQ05BLElBQUFBLFNBQVMsRUFBRTtBQURMO0FBSndDLENBQXpCLENBQXpCOztBQVNBLElBQU1DLHNCQUFzQixHQUFHSCxZQUFJQyxTQUFKLENBQWMsZ0JBQWQsRUFBZ0M7QUFDN0QsUUFBTTtBQUNKRyxJQUFBQSxnQkFBZ0IsRUFBRTtBQURkLEdBRHVEO0FBSTdELFVBQVE7QUFDTkEsSUFBQUEsZ0JBQWdCLEVBQUU7QUFEWjtBQUpxRCxDQUFoQyxDQUEvQjs7QUFTQSxJQUFN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UmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgbG9hZGluZ0tleWZyYW1lcyA9IGNzcy5rZXlmcmFtZXMoJ2xvYWRpbmcnLCB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMCknXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgzNjBkZWcpJ1xuICB9XG59KVxuXG5jb25zdCBsb2FkaW5nQ2lyY2xlS2V5ZnJhbWVzID0gY3NzLmtleWZyYW1lcygnbG9hZGluZy1jaXJjbGUnLCB7XG4gICcwJSc6IHtcbiAgICBzdHJva2VEYXNob2Zmc2V0OiA2MDBcbiAgfSxcbiAgJzEwMCUnOiB7XG4gICAgc3Ryb2tlRGFzaG9mZnNldDogMFxuICB9XG59KVxuXG5jb25zdCBvdXRlckNsYXNzID0gY3NzKHtcbiAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nS2V5ZnJhbWVzfSAycyBsaW5lYXIgaW5maW5pdGVgXG59KS50b1N0cmluZygpXG5cbmNvbnN0IGlubmVyQ2xhc3MgPSBjb2xvciA9PlxuICBjc3Moe1xuICAgIHN0cm9rZURhc2hvZmZzZXQ6IDYwMCxcbiAgICBzdHJva2VEYXNoYXJyYXk6IDMwMCxcbiAgICBzdHJva2VXaWR0aDogMTIsXG4gICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXG4gICAgc3Ryb2tlTGluZWNhcDogJ3JvdW5kJyxcbiAgICBhbmltYXRpb246IGAke2xvYWRpbmdDaXJjbGVLZXlmcmFtZXN9IDEuNnMgY3ViaWMtYmV6aWVyKDAuNCwgMC4xNSwgMC42LCAwLjg1KSBpbmZpbml0ZWAsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBmaWxsOiAndHJhbnNwYXJlbnQnXG4gIH0pLnRvU3RyaW5nKClcblxuY2xhc3MgU3Bpbm5lciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBCb3ggY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBEZWxheSBhZnRlciB3aGljaCBzcGlubmVyIHNob3VsZCBiZSB2aXNpYmxlLlxuICAgICAqL1xuICAgIGRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNpemUgb2YgdGhlIHNwaW5uZXIuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6IDQwLFxuICAgIGRlbGF5OiAwXG4gIH1cblxuICBjb25zdHJ1Y3Rvcih7IGRlbGF5IH0pIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNWaXNpYmxlOiBkZWxheSA9PT0gMFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IHsgdGhlbWUsIHNpemUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggd2lkdGg9e3NpemV9IGhlaWdodD17c2l6ZX0gbGluZUhlaWdodD17MH0gey4uLnByb3BzfT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGlzPVwic3ZnXCJcbiAgICAgICAgICBjbGFzc05hbWU9e291dGVyQ2xhc3N9XG4gICAgICAgICAgeD1cIjBweFwiXG4gICAgICAgICAgeT1cIjBweFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxNTAgMTUwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGlzPVwiY2lyY2xlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17aW5uZXJDbGFzcyh0aGVtZS5zcGlubmVyQ29sb3IpfVxuICAgICAgICAgICAgY3g9XCI3NVwiXG4gICAgICAgICAgICBjeT1cIjc1XCJcbiAgICAgICAgICAgIHI9XCI2MFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRlbGF5IH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNWaXNpYmxlOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9LCBkZWxheSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVyKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTcGlubmVyKVxuIl19