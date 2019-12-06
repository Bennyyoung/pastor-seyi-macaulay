import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';

var UnorderedList =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(UnorderedList, _PureComponent);

  function UnorderedList() {
    _classCallCheck(this, UnorderedList);

    return _possibleConstructorReturn(this, _getPrototypeOf(UnorderedList).apply(this, arguments));
  }

  _createClass(UnorderedList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          size = _this$props.size,
          icon = _this$props.icon,
          iconColor = _this$props.iconColor,
          props = _objectWithoutProperties(_this$props, ["children", "size", "icon", "iconColor"]); // Only pass down icon-related props if specified


      var inheritedProps = icon ? {
        size: size,
        icon: icon,
        iconColor: iconColor
      } : {
        size: size
      };
      var finalChildren = React.Children.map(children, function (child) {
        if (!React.isValidElement(child)) {
          return child;
        }

        return React.cloneElement(child, _objectSpread({}, inheritedProps, child.props));
      });
      return React.createElement(Box, _extends({}, UnorderedList.styles, props), finalChildren);
    }
  }]);

  return UnorderedList;
}(PureComponent);

UnorderedList.displayName = "UnorderedList";

_defineProperty(UnorderedList, "propTypes", _objectSpread({}, Box.propTypes, {
  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: PropTypes.oneOf([300, 400, 500, 600]).isRequired,

  /**
   * When passed, adds a icon before each list item in the list
   * You can override this on a individual list item.
   */
  icon: PropTypes.string,

  /**
   * The color of the icon in each list item in the list.
   */
  iconColor: PropTypes.string
}));

_defineProperty(UnorderedList, "defaultProps", {
  size: 400
});

_defineProperty(UnorderedList, "styles", {
  is: 'ul',
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'disc'
});

export { UnorderedList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9Vbm9yZGVyZWRMaXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkJveCIsIlVub3JkZXJlZExpc3QiLCJwcm9wcyIsImNoaWxkcmVuIiwic2l6ZSIsImljb24iLCJpY29uQ29sb3IiLCJpbmhlcml0ZWRQcm9wcyIsImZpbmFsQ2hpbGRyZW4iLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJzdHlsZXMiLCJwcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJpcyIsIm1hcmdpbiIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nIiwibGlzdFN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFFBQWhCOztJQUVxQkMsYTs7Ozs7Ozs7Ozs7Ozs2QkFrQ1Y7QUFBQSx3QkFDK0MsS0FBS0MsS0FEcEQ7QUFBQSxVQUNDQyxRQURELGVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxJQURYLGVBQ1dBLElBRFg7QUFBQSxVQUNpQkMsSUFEakIsZUFDaUJBLElBRGpCO0FBQUEsVUFDdUJDLFNBRHZCLGVBQ3VCQSxTQUR2QjtBQUFBLFVBQ3FDSixLQURyQyxxRkFHUDs7O0FBQ0EsVUFBTUssY0FBYyxHQUFHRixJQUFJLEdBQUc7QUFBRUQsUUFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFDLFFBQUFBLElBQUksRUFBSkEsSUFBUjtBQUFjQyxRQUFBQSxTQUFTLEVBQVRBO0FBQWQsT0FBSCxHQUErQjtBQUFFRixRQUFBQSxJQUFJLEVBQUpBO0FBQUYsT0FBMUQ7QUFFQSxVQUFNSSxhQUFhLEdBQUdYLEtBQUssQ0FBQ1ksUUFBTixDQUFlQyxHQUFmLENBQW1CUCxRQUFuQixFQUE2QixVQUFBUSxLQUFLLEVBQUk7QUFDMUQsWUFBSSxDQUFDZCxLQUFLLENBQUNlLGNBQU4sQ0FBcUJELEtBQXJCLENBQUwsRUFBa0M7QUFDaEMsaUJBQU9BLEtBQVA7QUFDRDs7QUFFRCxlQUFPZCxLQUFLLENBQUNnQixZQUFOLENBQW1CRixLQUFuQixvQkFDRkosY0FERSxFQUdGSSxLQUFLLENBQUNULEtBSEosRUFBUDtBQUtELE9BVnFCLENBQXRCO0FBWUEsYUFDRSxvQkFBQyxHQUFELGVBQVNELGFBQWEsQ0FBQ2EsTUFBdkIsRUFBbUNaLEtBQW5DLEdBQ0dNLGFBREgsQ0FERjtBQUtEOzs7O0VBekR3Q1YsYTs7QUFBdEJHLGE7O2dCQUFBQSxhLGlDQUVkRCxHQUFHLENBQUNlLFM7QUFFUDs7OztBQUlBWCxFQUFBQSxJQUFJLEVBQUVMLFNBQVMsQ0FBQ2lCLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBaEIsRUFBc0NDLFU7O0FBRTVDOzs7O0FBSUFaLEVBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDbUIsTTs7QUFFaEI7OztBQUdBWixFQUFBQSxTQUFTLEVBQUVQLFNBQVMsQ0FBQ21COzs7Z0JBbkJKakIsYSxrQkFzQkc7QUFDcEJHLEVBQUFBLElBQUksRUFBRTtBQURjLEM7O2dCQXRCSEgsYSxZQTBCSDtBQUNka0IsRUFBQUEsRUFBRSxFQUFFLElBRFU7QUFFZEMsRUFBQUEsTUFBTSxFQUFFLENBRk07QUFHZEMsRUFBQUEsVUFBVSxFQUFFLE9BSEU7QUFJZEMsRUFBQUEsT0FBTyxFQUFFLENBSks7QUFLZEMsRUFBQUEsU0FBUyxFQUFFO0FBTEcsQzs7U0ExQkd0QixhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbm9yZGVyZWRMaXN0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uQm94LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFNpemUgb2YgdGhlIHRleHQgdXNlZCBpbiBhIGxpc3QgaXRlbS5cbiAgICAgKiBDYW4gYmU6IDMwMCwgNDAwLCA1MDAsIDYwMC5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzMwMCwgNDAwLCA1MDAsIDYwMF0pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHBhc3NlZCwgYWRkcyBhIGljb24gYmVmb3JlIGVhY2ggbGlzdCBpdGVtIGluIHRoZSBsaXN0XG4gICAgICogWW91IGNhbiBvdmVycmlkZSB0aGlzIG9uIGEgaW5kaXZpZHVhbCBsaXN0IGl0ZW0uXG4gICAgICovXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb2xvciBvZiB0aGUgaWNvbiBpbiBlYWNoIGxpc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBpY29uQ29sb3I6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogNDAwXG4gIH1cblxuICBzdGF0aWMgc3R5bGVzID0ge1xuICAgIGlzOiAndWwnLFxuICAgIG1hcmdpbjogMCxcbiAgICBtYXJnaW5MZWZ0OiAnMS4xZW0nLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbGlzdFN0eWxlOiAnZGlzYydcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBzaXplLCBpY29uLCBpY29uQ29sb3IsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICAvLyBPbmx5IHBhc3MgZG93biBpY29uLXJlbGF0ZWQgcHJvcHMgaWYgc3BlY2lmaWVkXG4gICAgY29uc3QgaW5oZXJpdGVkUHJvcHMgPSBpY29uID8geyBzaXplLCBpY29uLCBpY29uQ29sb3IgfSA6IHsgc2l6ZSB9XG5cbiAgICBjb25zdCBmaW5hbENoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAuLi5pbmhlcml0ZWRQcm9wcyxcbiAgICAgICAgLy8gUHJlZmVyIG1vcmUgZ3JhbnVsYXJseSBkZWZpbmVkIGljb24gaWYgcHJlc2VudFxuICAgICAgICAuLi5jaGlsZC5wcm9wc1xuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggey4uLlVub3JkZXJlZExpc3Quc3R5bGVzfSB7Li4ucHJvcHN9PlxuICAgICAgICB7ZmluYWxDaGlsZHJlbn1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuIl19