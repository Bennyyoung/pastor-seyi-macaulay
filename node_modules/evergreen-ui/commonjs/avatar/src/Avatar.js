"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _image = require("../../image");

var _typography = require("../../typography");

var _theme = require("../../theme");

var _getInitials = _interopRequireDefault(require("./utils/getInitials"));

var _hash = _interopRequireDefault(require("./utils/hash"));

var isObjectFitSupported = typeof document !== 'undefined' && 'objectFit' in document.documentElement.style;
var initialsStyleClass = (0, _glamor.css)({
  top: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1
}).toString();

var Avatar =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Avatar, _PureComponent);

  function Avatar(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, Avatar);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Avatar).call(this, props, context));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleError", function () {
      _this.setState({
        imageHasFailedLoading: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getColorProps", function () {
      var _this$props = _this.props,
          isSolid = _this$props.isSolid,
          theme = _this$props.theme,
          color = _this$props.color,
          propsHashValue = _this$props.hashValue,
          name = _this$props.name;

      if (color === 'automatic') {
        var hashValue = (0, _hash.default)(propsHashValue || name);
        return theme.getAvatarProps({
          isSolid: isSolid,
          color: color,
          hashValue: hashValue
        });
      }

      return theme.getAvatarProps({
        isSolid: isSolid,
        color: color
      });
    });
    _this.state = {
      imageHasFailedLoading: false
    };
    return _this;
  }

  (0, _createClass2.default)(Avatar, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          src = _this$props2.src,
          size = _this$props2.size,
          name = _this$props2.name,
          isSolid = _this$props2.isSolid,
          propsHashValue = _this$props2.hashValue,
          getInitials = _this$props2.getInitials,
          propsColor = _this$props2.color,
          forceShowInitials = _this$props2.forceShowInitials,
          sizeLimitOneCharacter = _this$props2.sizeLimitOneCharacter,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["theme", "src", "size", "name", "isSolid", "hashValue", "getInitials", "color", "forceShowInitials", "sizeLimitOneCharacter"]);
      var imageHasFailedLoading = this.state.imageHasFailedLoading;
      var imageUnavailable = !src || imageHasFailedLoading;
      var initialsFontSize = "".concat(theme.getAvatarInitialsFontSize(size, sizeLimitOneCharacter), "px");
      var initials = getInitials(name);

      if (size <= sizeLimitOneCharacter) {
        initials = initials.substring(0, 1);
      }

      var colorProps = this.getColorProps();
      return _react.default.createElement(_uiBox.default, (0, _extends2.default)({
        width: size,
        height: size,
        overflow: "hidden",
        borderRadius: 9999,
        position: "relative",
        display: "inline-flex",
        flexShrink: 0,
        justifyContent: "center",
        backgroundColor: colorProps.backgroundColor,
        title: name
      }, props), (imageUnavailable || forceShowInitials) && _react.default.createElement(_typography.Text, {
        className: initialsStyleClass,
        fontSize: initialsFontSize,
        lineHeight: initialsFontSize,
        width: size,
        height: size,
        color: colorProps.color
      }, initials), !imageUnavailable && _react.default.createElement(_image.Image, {
        style: {
          objectFit: 'cover'
        } // Unsupported by ui-box directly
        ,
        width: isObjectFitSupported ? '100%' : 'auto' // Fallback to old behaviour on IE
        ,
        height: "100%",
        src: src,
        onError: this.handleError
      }));
    }
  }]);
  return Avatar;
}(_react.PureComponent);

Avatar.displayName = "Avatar";
(0, _defineProperty2.default)(Avatar, "propTypes", {
  /**
   * The src attribute of the image.
   * When it's not available, render initials instead.
   */
  src: _propTypes.default.string,

  /**
   * The size of the avatar.
   */
  size: _propTypes.default.number,

  /**
   * The name used for the initials and title attribute.
   */
  name: _propTypes.default.string,

  /**
   * The value used for the hash function.
   * The name is used as the hashValue by default.
   * When dealing with anonymous users you should use the id instead.
   */
  hashValue: _propTypes.default.string,

  /**
   * When true, render a solid avatar.
   */
  isSolid: _propTypes.default.bool,

  /**
   * The color used for the avatar.
   * When the value is `automatic`, use the hash function to determine the color.
   */
  color: _propTypes.default.string.isRequired,

  /**
   * Function to get the initials based on the name.
   */
  getInitials: _propTypes.default.func,

  /**
   * When true, force show the initials.
   * This is useful in some cases when using Gravatar and transparent pngs.
   */
  forceShowInitials: _propTypes.default.bool,

  /**
   * When the size is smaller than this number, use a single initial for the avatar.
   */
  sizeLimitOneCharacter: _propTypes.default.number,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes.default.object.isRequired
});
(0, _defineProperty2.default)(Avatar, "defaultProps", {
  color: 'automatic',
  size: 24,
  isSolid: false,
  getInitials: _getInitials.default,
  forceShowInitials: false,
  sizeLimitOneCharacter: 20
});

var _default = (0, _theme.withTheme)(Avatar);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdmF0YXIvc3JjL0F2YXRhci5qcyJdLCJuYW1lcyI6WyJpc09iamVjdEZpdFN1cHBvcnRlZCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJpbml0aWFsc1N0eWxlQ2xhc3MiLCJ0b3AiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwidG9TdHJpbmciLCJBdmF0YXIiLCJwcm9wcyIsImNvbnRleHQiLCJzZXRTdGF0ZSIsImltYWdlSGFzRmFpbGVkTG9hZGluZyIsImlzU29saWQiLCJ0aGVtZSIsImNvbG9yIiwicHJvcHNIYXNoVmFsdWUiLCJoYXNoVmFsdWUiLCJuYW1lIiwiZ2V0QXZhdGFyUHJvcHMiLCJzdGF0ZSIsInNyYyIsInNpemUiLCJnZXRJbml0aWFscyIsInByb3BzQ29sb3IiLCJmb3JjZVNob3dJbml0aWFscyIsInNpemVMaW1pdE9uZUNoYXJhY3RlciIsImltYWdlVW5hdmFpbGFibGUiLCJpbml0aWFsc0ZvbnRTaXplIiwiZ2V0QXZhdGFySW5pdGlhbHNGb250U2l6ZSIsImluaXRpYWxzIiwic3Vic3RyaW5nIiwiY29sb3JQcm9wcyIsImdldENvbG9yUHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvYmplY3RGaXQiLCJoYW5kbGVFcnJvciIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJib29sIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJvYmplY3QiLCJnbG9iYWxHZXRJbml0aWFscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxvQkFBb0IsR0FDeEIsT0FBT0MsUUFBUCxLQUFvQixXQUFwQixJQUNBLGVBQWVBLFFBQVEsQ0FBQ0MsZUFBVCxD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O0FBS0F0QixFQUFBQSxTQUFTLEVBQUVxQixtQkFBVUMsTUF0Qko7O0FBd0JqQjs7O0FBR0ExQixFQUFBQSxPQUFPLEVBQUV5QixtQkFBVUcsSUEzQkY7O0FBNkJqQjs7OztBQUlBMUIsRUFBQUEsS0FBSyxFQUFFdUIsbUJBQVVDLE1BQVYsQ0FBaUJHLFVBakNQOztBQW1DakI7OztBQUdBbkIsRUFBQUEsV0FBVyxFQUFFZSxtQkFBVUssSUF0Q047O0FBd0NqQjs7OztBQUlBbEIsRUFBQUEsaUJBQWlCLEVBQUVhLG1CQUFVRyxJQTVDWjs7QUE4Q2pCOzs7QUFHQWYsRUFBQUEscUJBQXFCLEVBQUVZLG1CQUFVRSxNQWpEaEI7O0FBbURqQjs7O0FBR0ExQixFQUFBQSxLQUFLLEVBQUV3QixtQkFBVU0sTUFBVixDQUFpQkY7QUF0RFAsQzs4QkFEZmxDLE0sa0JBMERrQjtBQUNwQk8sRUFBQUEsS0FBSyxFQUFFLFdBRGE7QUFFcEJPLEVBQUFBLElBQUksRUFBRSxFQUZjO0FBR3BCVCxFQUFBQSxPQUFPLEVBQUUsS0FIVztBQUlwQlUsRUFBQUEsV0FBVyxFQUFFc0Isb0JBSk87QUFLcEJwQixFQUFBQSxpQkFBaUIsRUFBRSxLQUxDO0FBTXBCQyxFQUFBQSxxQkFBcUIsRUFBRTtBQU5ILEM7O2VBeUdULHNCQUFVbEIsTUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuLi8uLi9pbWFnZSdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgZ2xvYmFsR2V0SW5pdGlhbHMgZnJvbSAnLi91dGlscy9nZXRJbml0aWFscydcbmltcG9ydCBnbG9iYWxIYXNoIGZyb20gJy4vdXRpbHMvaGFzaCdcblxuY29uc3QgaXNPYmplY3RGaXRTdXBwb3J0ZWQgPVxuICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICdvYmplY3RGaXQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZVxuXG5jb25zdCBpbml0aWFsc1N0eWxlQ2xhc3MgPSBjc3Moe1xuICB0b3A6IDAsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIGxpbmVIZWlnaHQ6IDFcbn0pLnRvU3RyaW5nKClcblxuY2xhc3MgQXZhdGFyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIHNyYyBhdHRyaWJ1dGUgb2YgdGhlIGltYWdlLlxuICAgICAqIFdoZW4gaXQncyBub3QgYXZhaWxhYmxlLCByZW5kZXIgaW5pdGlhbHMgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgYXZhdGFyLlxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSB1c2VkIGZvciB0aGUgaW5pdGlhbHMgYW5kIHRpdGxlIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIHVzZWQgZm9yIHRoZSBoYXNoIGZ1bmN0aW9uLlxuICAgICAqIFRoZSBuYW1lIGlzIHVzZWQgYXMgdGhlIGhhc2hWYWx1ZSBieSBkZWZhdWx0LlxuICAgICAqIFdoZW4gZGVhbGluZyB3aXRoIGFub255bW91cyB1c2VycyB5b3Ugc2hvdWxkIHVzZSB0aGUgaWQgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBoYXNoVmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHJlbmRlciBhIHNvbGlkIGF2YXRhci5cbiAgICAgKi9cbiAgICBpc1NvbGlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb2xvciB1c2VkIGZvciB0aGUgYXZhdGFyLlxuICAgICAqIFdoZW4gdGhlIHZhbHVlIGlzIGBhdXRvbWF0aWNgLCB1c2UgdGhlIGhhc2ggZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIHRoZSBjb2xvci5cbiAgICAgKi9cbiAgICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdG8gZ2V0IHRoZSBpbml0aWFscyBiYXNlZCBvbiB0aGUgbmFtZS5cbiAgICAgKi9cbiAgICBnZXRJbml0aWFsczogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIGZvcmNlIHNob3cgdGhlIGluaXRpYWxzLlxuICAgICAqIFRoaXMgaXMgdXNlZnVsIGluIHNvbWUgY2FzZXMgd2hlbiB1c2luZyBHcmF2YXRhciBhbmQgdHJhbnNwYXJlbnQgcG5ncy5cbiAgICAgKi9cbiAgICBmb3JjZVNob3dJbml0aWFsczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBzaXplIGlzIHNtYWxsZXIgdGhhbiB0aGlzIG51bWJlciwgdXNlIGEgc2luZ2xlIGluaXRpYWwgZm9yIHRoZSBhdmF0YXIuXG4gICAgICovXG4gICAgc2l6ZUxpbWl0T25lQ2hhcmFjdGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yOiAnYXV0b21hdGljJyxcbiAgICBzaXplOiAyNCxcbiAgICBpc1NvbGlkOiBmYWxzZSxcbiAgICBnZXRJbml0aWFsczogZ2xvYmFsR2V0SW5pdGlhbHMsXG4gICAgZm9yY2VTaG93SW5pdGlhbHM6IGZhbHNlLFxuICAgIHNpemVMaW1pdE9uZUNoYXJhY3RlcjogMjBcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG4gICAgdGhpcy5zdGF0ZSA9IHsgaW1hZ2VIYXNGYWlsZWRMb2FkaW5nOiBmYWxzZSB9XG4gIH1cblxuICBoYW5kbGVFcnJvciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VIYXNGYWlsZWRMb2FkaW5nOiB0cnVlIH0pXG4gIH1cblxuICBnZXRDb2xvclByb3BzID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzU29saWQsXG4gICAgICB0aGVtZSxcbiAgICAgIGNvbG9yLFxuICAgICAgaGFzaFZhbHVlOiBwcm9wc0hhc2hWYWx1ZSxcbiAgICAgIG5hbWVcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGNvbG9yID09PSAnYXV0b21hdGljJykge1xuICAgICAgY29uc3QgaGFzaFZhbHVlID0gZ2xvYmFsSGFzaChwcm9wc0hhc2hWYWx1ZSB8fCBuYW1lKVxuICAgICAgcmV0dXJuIHRoZW1lLmdldEF2YXRhclByb3BzKHsgaXNTb2xpZCwgY29sb3IsIGhhc2hWYWx1ZSB9KVxuICAgIH1cblxuICAgIHJldHVybiB0aGVtZS5nZXRBdmF0YXJQcm9wcyh7IGlzU29saWQsIGNvbG9yIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG5cbiAgICAgIHNyYyxcbiAgICAgIHNpemUsXG4gICAgICBuYW1lLFxuICAgICAgaXNTb2xpZCxcbiAgICAgIGhhc2hWYWx1ZTogcHJvcHNIYXNoVmFsdWUsXG4gICAgICBnZXRJbml0aWFscyxcbiAgICAgIGNvbG9yOiBwcm9wc0NvbG9yLFxuICAgICAgZm9yY2VTaG93SW5pdGlhbHMsXG4gICAgICBzaXplTGltaXRPbmVDaGFyYWN0ZXIsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7IGltYWdlSGFzRmFpbGVkTG9hZGluZyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGltYWdlVW5hdmFpbGFibGUgPSAhc3JjIHx8IGltYWdlSGFzRmFpbGVkTG9hZGluZ1xuICAgIGNvbnN0IGluaXRpYWxzRm9udFNpemUgPSBgJHt0aGVtZS5nZXRBdmF0YXJJbml0aWFsc0ZvbnRTaXplKFxuICAgICAgc2l6ZSxcbiAgICAgIHNpemVMaW1pdE9uZUNoYXJhY3RlclxuICAgICl9cHhgXG5cbiAgICBsZXQgaW5pdGlhbHMgPSBnZXRJbml0aWFscyhuYW1lKVxuICAgIGlmIChzaXplIDw9IHNpemVMaW1pdE9uZUNoYXJhY3Rlcikge1xuICAgICAgaW5pdGlhbHMgPSBpbml0aWFscy5zdWJzdHJpbmcoMCwgMSlcbiAgICB9XG5cbiAgICBjb25zdCBjb2xvclByb3BzID0gdGhpcy5nZXRDb2xvclByb3BzKClcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIHdpZHRoPXtzaXplfVxuICAgICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPXs5OTk5fVxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgZGlzcGxheT1cImlubGluZS1mbGV4XCJcbiAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2NvbG9yUHJvcHMuYmFja2dyb3VuZENvbG9yfVxuICAgICAgICB0aXRsZT17bmFtZX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7KGltYWdlVW5hdmFpbGFibGUgfHwgZm9yY2VTaG93SW5pdGlhbHMpICYmIChcbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpbml0aWFsc1N0eWxlQ2xhc3N9XG4gICAgICAgICAgICBmb250U2l6ZT17aW5pdGlhbHNGb250U2l6ZX1cbiAgICAgICAgICAgIGxpbmVIZWlnaHQ9e2luaXRpYWxzRm9udFNpemV9XG4gICAgICAgICAgICB3aWR0aD17c2l6ZX1cbiAgICAgICAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgICAgICAgIGNvbG9yPXtjb2xvclByb3BzLmNvbG9yfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpbml0aWFsc31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICAgIHshaW1hZ2VVbmF2YWlsYWJsZSAmJiAoXG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6ICdjb3ZlcicgfX0gLy8gVW5zdXBwb3J0ZWQgYnkgdWktYm94IGRpcmVjdGx5XG4gICAgICAgICAgICB3aWR0aD17aXNPYmplY3RGaXRTdXBwb3J0ZWQgPyAnMTAwJScgOiAnYXV0byd9IC8vIEZhbGxiYWNrIHRvIG9sZCBiZWhhdmlvdXIgb24gSUVcbiAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICBvbkVycm9yPXt0aGlzLmhhbmRsZUVycm9yfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEF2YXRhcilcbiJdfQ==