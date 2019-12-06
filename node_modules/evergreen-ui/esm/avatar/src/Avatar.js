import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { css } from 'glamor';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { Image } from '../../image';
import { Text } from '../../typography';
import { withTheme } from '../../theme';
import globalGetInitials from './utils/getInitials';
import globalHash from './utils/hash';
var isObjectFitSupported = typeof document !== 'undefined' && 'objectFit' in document.documentElement.style;
var initialsStyleClass = css({
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
  _inherits(Avatar, _PureComponent);

  function Avatar(props, context) {
    var _this;

    _classCallCheck(this, Avatar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Avatar).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "handleError", function () {
      _this.setState({
        imageHasFailedLoading: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getColorProps", function () {
      var _this$props = _this.props,
          isSolid = _this$props.isSolid,
          theme = _this$props.theme,
          color = _this$props.color,
          propsHashValue = _this$props.hashValue,
          name = _this$props.name;

      if (color === 'automatic') {
        var hashValue = globalHash(propsHashValue || name);
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

  _createClass(Avatar, [{
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
          props = _objectWithoutProperties(_this$props2, ["theme", "src", "size", "name", "isSolid", "hashValue", "getInitials", "color", "forceShowInitials", "sizeLimitOneCharacter"]);

      var imageHasFailedLoading = this.state.imageHasFailedLoading;
      var imageUnavailable = !src || imageHasFailedLoading;
      var initialsFontSize = "".concat(theme.getAvatarInitialsFontSize(size, sizeLimitOneCharacter), "px");
      var initials = getInitials(name);

      if (size <= sizeLimitOneCharacter) {
        initials = initials.substring(0, 1);
      }

      var colorProps = this.getColorProps();
      return React.createElement(Box, _extends({
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
      }, props), (imageUnavailable || forceShowInitials) && React.createElement(Text, {
        className: initialsStyleClass,
        fontSize: initialsFontSize,
        lineHeight: initialsFontSize,
        width: size,
        height: size,
        color: colorProps.color
      }, initials), !imageUnavailable && React.createElement(Image, {
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
}(PureComponent);

Avatar.displayName = "Avatar";

_defineProperty(Avatar, "propTypes", {
  /**
   * The src attribute of the image.
   * When it's not available, render initials instead.
   */
  src: PropTypes.string,

  /**
   * The size of the avatar.
   */
  size: PropTypes.number,

  /**
   * The name used for the initials and title attribute.
   */
  name: PropTypes.string,

  /**
   * The value used for the hash function.
   * The name is used as the hashValue by default.
   * When dealing with anonymous users you should use the id instead.
   */
  hashValue: PropTypes.string,

  /**
   * When true, render a solid avatar.
   */
  isSolid: PropTypes.bool,

  /**
   * The color used for the avatar.
   * When the value is `automatic`, use the hash function to determine the color.
   */
  color: PropTypes.string.isRequired,

  /**
   * Function to get the initials based on the name.
   */
  getInitials: PropTypes.func,

  /**
   * When true, force show the initials.
   * This is useful in some cases when using Gravatar and transparent pngs.
   */
  forceShowInitials: PropTypes.bool,

  /**
   * When the size is smaller than this number, use a single initial for the avatar.
   */
  sizeLimitOneCharacter: PropTypes.number,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
});

_defineProperty(Avatar, "defaultProps", {
  color: 'automatic',
  size: 24,
  isSolid: false,
  getInitials: globalGetInitials,
  forceShowInitials: false,
  sizeLimitOneCharacter: 20
});

export default withTheme(Avatar);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdmF0YXIvc3JjL0F2YXRhci5qcyJdLCJuYW1lcyI6WyJjc3MiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJJbWFnZSIsIlRleHQiLCJ3aXRoVGhlbWUiLCJnbG9iYWxHZXRJbml0aWFscyIsImdsb2JhbEhhc2giLCJpc09iamVjdEZpdFN1cHBvcnRlZCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJpbml0aWFsc1N0eWxlQ2xhc3MiLCJ0b3AiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwidG9TdHJpbmciLCJBdmF0YXIiLCJwcm9wcyIsImNvbnRleHQiLCJzZXRTdGF0ZSIsImltYWdlSGFzRmFpbGVkTG9hZGluZyIsImlzU29saWQiLCJ0aGVtZSIsImNvbG9yIiwicHJvcHNIYXNoVmFsdWUiLCJoYXNoVmFsdWUiLCJuYW1lIiwiZ2V0QXZhdGFyUHJvcHMiLCJzdGF0ZSIsInNyYyIsInNpemUiLCJnZXRJbml0aWFscyIsInByb3BzQ29sb3IiLCJmb3JjZVNob3dJbml0aWFscyIsInNpemVMaW1pdE9uZUNoYXJhY3RlciIsImltYWdlVW5hdmFpbGFibGUiLCJpbml0aWFsc0ZvbnRTaXplIiwiZ2V0QXZhdGFySW5pdGlhbHNGb250U2l6ZSIsImluaXRpYWxzIiwic3Vic3RyaW5nIiwiY29sb3JQcm9wcyIsImdldENvbG9yUHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvYmplY3RGaXQiLCJoYW5kbGVFcnJvciIsInN0cmluZyIsIm51bWJlciIsImJvb2wiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsU0FBU0EsR0FBVCxRQUFvQixRQUFwQjtBQUNBLE9BQU9DLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFz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UyxDQUFDZSxNQUFELENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuLi8uLi9pbWFnZSdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgZ2xvYmFsR2V0SW5pdGlhbHMgZnJvbSAnLi91dGlscy9nZXRJbml0aWFscydcbmltcG9ydCBnbG9iYWxIYXNoIGZyb20gJy4vdXRpbHMvaGFzaCdcblxuY29uc3QgaXNPYmplY3RGaXRTdXBwb3J0ZWQgPVxuICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICdvYmplY3RGaXQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZVxuXG5jb25zdCBpbml0aWFsc1N0eWxlQ2xhc3MgPSBjc3Moe1xuICB0b3A6IDAsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIGxpbmVIZWlnaHQ6IDFcbn0pLnRvU3RyaW5nKClcblxuY2xhc3MgQXZhdGFyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIHNyYyBhdHRyaWJ1dGUgb2YgdGhlIGltYWdlLlxuICAgICAqIFdoZW4gaXQncyBub3QgYXZhaWxhYmxlLCByZW5kZXIgaW5pdGlhbHMgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgYXZhdGFyLlxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSB1c2VkIGZvciB0aGUgaW5pdGlhbHMgYW5kIHRpdGxlIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIHVzZWQgZm9yIHRoZSBoYXNoIGZ1bmN0aW9uLlxuICAgICAqIFRoZSBuYW1lIGlzIHVzZWQgYXMgdGhlIGhhc2hWYWx1ZSBieSBkZWZhdWx0LlxuICAgICAqIFdoZW4gZGVhbGluZyB3aXRoIGFub255bW91cyB1c2VycyB5b3Ugc2hvdWxkIHVzZSB0aGUgaWQgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBoYXNoVmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHJlbmRlciBhIHNvbGlkIGF2YXRhci5cbiAgICAgKi9cbiAgICBpc1NvbGlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb2xvciB1c2VkIGZvciB0aGUgYXZhdGFyLlxuICAgICAqIFdoZW4gdGhlIHZhbHVlIGlzIGBhdXRvbWF0aWNgLCB1c2UgdGhlIGhhc2ggZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIHRoZSBjb2xvci5cbiAgICAgKi9cbiAgICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdG8gZ2V0IHRoZSBpbml0aWFscyBiYXNlZCBvbiB0aGUgbmFtZS5cbiAgICAgKi9cbiAgICBnZXRJbml0aWFsczogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIGZvcmNlIHNob3cgdGhlIGluaXRpYWxzLlxuICAgICAqIFRoaXMgaXMgdXNlZnVsIGluIHNvbWUgY2FzZXMgd2hlbiB1c2luZyBHcmF2YXRhciBhbmQgdHJhbnNwYXJlbnQgcG5ncy5cbiAgICAgKi9cbiAgICBmb3JjZVNob3dJbml0aWFsczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBzaXplIGlzIHNtYWxsZXIgdGhhbiB0aGlzIG51bWJlciwgdXNlIGEgc2luZ2xlIGluaXRpYWwgZm9yIHRoZSBhdmF0YXIuXG4gICAgICovXG4gICAgc2l6ZUxpbWl0T25lQ2hhcmFjdGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yOiAnYXV0b21hdGljJyxcbiAgICBzaXplOiAyNCxcbiAgICBpc1NvbGlkOiBmYWxzZSxcbiAgICBnZXRJbml0aWFsczogZ2xvYmFsR2V0SW5pdGlhbHMsXG4gICAgZm9yY2VTaG93SW5pdGlhbHM6IGZhbHNlLFxuICAgIHNpemVMaW1pdE9uZUNoYXJhY3RlcjogMjBcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG4gICAgdGhpcy5zdGF0ZSA9IHsgaW1hZ2VIYXNGYWlsZWRMb2FkaW5nOiBmYWxzZSB9XG4gIH1cblxuICBoYW5kbGVFcnJvciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VIYXNGYWlsZWRMb2FkaW5nOiB0cnVlIH0pXG4gIH1cblxuICBnZXRDb2xvclByb3BzID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzU29saWQsXG4gICAgICB0aGVtZSxcbiAgICAgIGNvbG9yLFxuICAgICAgaGFzaFZhbHVlOiBwcm9wc0hhc2hWYWx1ZSxcbiAgICAgIG5hbWVcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGNvbG9yID09PSAnYXV0b21hdGljJykge1xuICAgICAgY29uc3QgaGFzaFZhbHVlID0gZ2xvYmFsSGFzaChwcm9wc0hhc2hWYWx1ZSB8fCBuYW1lKVxuICAgICAgcmV0dXJuIHRoZW1lLmdldEF2YXRhclByb3BzKHsgaXNTb2xpZCwgY29sb3IsIGhhc2hWYWx1ZSB9KVxuICAgIH1cblxuICAgIHJldHVybiB0aGVtZS5nZXRBdmF0YXJQcm9wcyh7IGlzU29saWQsIGNvbG9yIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG5cbiAgICAgIHNyYyxcbiAgICAgIHNpemUsXG4gICAgICBuYW1lLFxuICAgICAgaXNTb2xpZCxcbiAgICAgIGhhc2hWYWx1ZTogcHJvcHNIYXNoVmFsdWUsXG4gICAgICBnZXRJbml0aWFscyxcbiAgICAgIGNvbG9yOiBwcm9wc0NvbG9yLFxuICAgICAgZm9yY2VTaG93SW5pdGlhbHMsXG4gICAgICBzaXplTGltaXRPbmVDaGFyYWN0ZXIsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7IGltYWdlSGFzRmFpbGVkTG9hZGluZyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGltYWdlVW5hdmFpbGFibGUgPSAhc3JjIHx8IGltYWdlSGFzRmFpbGVkTG9hZGluZ1xuICAgIGNvbnN0IGluaXRpYWxzRm9udFNpemUgPSBgJHt0aGVtZS5nZXRBdmF0YXJJbml0aWFsc0ZvbnRTaXplKFxuICAgICAgc2l6ZSxcbiAgICAgIHNpemVMaW1pdE9uZUNoYXJhY3RlclxuICAgICl9cHhgXG5cbiAgICBsZXQgaW5pdGlhbHMgPSBnZXRJbml0aWFscyhuYW1lKVxuICAgIGlmIChzaXplIDw9IHNpemVMaW1pdE9uZUNoYXJhY3Rlcikge1xuICAgICAgaW5pdGlhbHMgPSBpbml0aWFscy5zdWJzdHJpbmcoMCwgMSlcbiAgICB9XG5cbiAgICBjb25zdCBjb2xvclByb3BzID0gdGhpcy5nZXRDb2xvclByb3BzKClcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIHdpZHRoPXtzaXplfVxuICAgICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPXs5OTk5fVxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgZGlzcGxheT1cImlubGluZS1mbGV4XCJcbiAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2NvbG9yUHJvcHMuYmFja2dyb3VuZENvbG9yfVxuICAgICAgICB0aXRsZT17bmFtZX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7KGltYWdlVW5hdmFpbGFibGUgfHwgZm9yY2VTaG93SW5pdGlhbHMpICYmIChcbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpbml0aWFsc1N0eWxlQ2xhc3N9XG4gICAgICAgICAgICBmb250U2l6ZT17aW5pdGlhbHNGb250U2l6ZX1cbiAgICAgICAgICAgIGxpbmVIZWlnaHQ9e2luaXRpYWxzRm9udFNpemV9XG4gICAgICAgICAgICB3aWR0aD17c2l6ZX1cbiAgICAgICAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgICAgICAgIGNvbG9yPXtjb2xvclByb3BzLmNvbG9yfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpbml0aWFsc31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICAgIHshaW1hZ2VVbmF2YWlsYWJsZSAmJiAoXG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6ICdjb3ZlcicgfX0gLy8gVW5zdXBwb3J0ZWQgYnkgdWktYm94IGRpcmVjdGx5XG4gICAgICAgICAgICB3aWR0aD17aXNPYmplY3RGaXRTdXBwb3J0ZWQgPyAnMTAwJScgOiAnYXV0byd9IC8vIEZhbGxiYWNrIHRvIG9sZCBiZWhhdmlvdXIgb24gSUVcbiAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICBvbkVycm9yPXt0aGlzLmhhbmRsZUVycm9yfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEF2YXRhcilcbiJdfQ==