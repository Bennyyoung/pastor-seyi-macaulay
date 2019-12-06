import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import cx from 'classnames';
import { css as glamorCss } from 'glamor';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { withTheme } from '../../theme';

var Text =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Text, _PureComponent);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, _getPrototypeOf(Text).apply(this, arguments));
  }

  _createClass(Text, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          css = _this$props.css,
          theme = _this$props.theme,
          size = _this$props.size,
          color = _this$props.color,
          fontFamily = _this$props.fontFamily,
          marginTop = _this$props.marginTop,
          props = _objectWithoutProperties(_this$props, ["className", "css", "theme", "size", "color", "fontFamily", "marginTop"]);

      var _theme$getTextStyle = theme.getTextStyle(size),
          defaultMarginTop = _theme$getTextStyle.marginTop,
          textStyle = _objectWithoutProperties(_theme$getTextStyle, ["marginTop"]);

      var finalMarginTop = marginTop === 'default' ? defaultMarginTop : marginTop;
      return React.createElement(Box, _extends({
        is: "span",
        color: theme.getTextColor(color),
        fontFamily: theme.getFontFamily(fontFamily),
        marginTop: finalMarginTop
      }, textStyle, {
        className: cx(className, css ? glamorCss(css).toString() : undefined)
      }, props));
    }
  }]);

  return Text;
}(PureComponent);

Text.displayName = "Text";

_defineProperty(Text, "propTypes", _objectSpread({}, Box.propTypes, {
  /**
   * Size of the text style.
   * Can be: 300, 400, 500, 600.
   */
  size: PropTypes.oneOf([300, 400, 500, 600]).isRequired,

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: PropTypes.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Text, "defaultProps", {
  size: 400,
  color: 'default',
  fontFamily: 'ui'
});

export default withTheme(Text);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9UZXh0LmpzIl0sIm5hbWVzIjpbImN4IiwiY3NzIiwiZ2xhbW9yQ3NzIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiQm94Iiwid2l0aFRoZW1lIiwiVGV4dCIsInByb3BzIiwiY2xhc3NOYW1lIiwidGhlbWUiLCJzaXplIiwiY29sb3IiLCJmb250RmFtaWx5IiwibWFyZ2luVG9wIiwiZ2V0VGV4dFN0eWxlIiwiZGVmYXVsdE1hcmdpblRvcCIsInRleHRTdHlsZSIsImZpbmFsTWFyZ2luVG9wIiwiZ2V0VGV4dENvbG9yIiwiZ2V0Rm9udEZhbWlseSIsInRvU3RyaW5nIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwib25lT2YiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPQSxFQUFQLE1BQWUsWUFBZjtBQUNBLFNBQVNDLEdBQUcsSUFBSUMsU0FBaEIsUUFBaUMsUUFBakM7QUFDQSxPQUFPQyxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFFBQWhCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjs7SUFFTUMsSTs7Ozs7Ozs7Ozs7Ozs2QkErQks7QUFBQSx3QkFVSCxLQUFLQyxLQVZGO0FBQUEsVUFFTEMsU0FGSyxlQUVMQSxTQUZLO0FBQUEsVUFHTFQsR0FISyxlQUdMQSxHQUhLO0FBQUEsVUFJTFUsS0FKSyxlQUlMQSxLQUpLO0FBQUEsVUFLTEMsSUFMSyxlQUtMQSxJQUxLO0FBQUEsVUFNTEMsS0FOSyxlQU1MQSxLQU5LO0FBQUEsVUFPTEMsVUFQSyxlQU9MQSxVQVBLO0FBQUEsVUFRTEMsU0FSSyxlQVFMQSxTQVJLO0FBQUEsVUFTRk4sS0FURTs7QUFBQSxnQ0FZK0NFLEtBQUssQ0FBQ0ssWUFBTixDQUNwREosSUFEb0QsQ0FaL0M7QUFBQSxVQVlZSyxnQkFaWix1QkFZQ0YsU0FaRDtBQUFBLFVBWWlDRyxTQVpqQzs7QUFnQlAsVUFBTUMsY0FBYyxHQUNsQkosU0FBUyxLQUFLLFNBQWQsR0FBMEJFLGdCQUExQixHQUE2Q0YsU0FEL0M7QUFHQSxhQUNFLG9CQUFDLEdBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBQyxNQURMO0FBRUUsUUFBQSxLQUFLLEVBQUVKLEtBQUssQ0FBQ1MsWUFBTixDQUFtQlAsS0FBbkIsQ0FGVDtBQUdFLFFBQUEsVUFBVSxFQUFFRixLQUFLLENBQUNVLGFBQU4sQ0FBb0JQLFVBQXBCLENBSGQ7QUFJRSxRQUFBLFNBQVMsRUFBRUs7QUFKYixTQUtNRCxTQUxOO0FBTUUsUUFBQSxTQUFTLEVBQUVsQixFQUFFLENBQUNVLFNBQUQsRUFBWVQsR0FBRyxHQUFHQyxTQUFTLENBQUNELEdBQUQsQ0FBVCxDQUFlcUIsUUFBZixFQUFILEdBQStCQyxTQUE5QztBQU5mLFNBT01kLEtBUE4sRUFERjtBQVdEOzs7O0VBN0RnQkwsYTs7QUFBYkksSTs7Z0JBQUFBLEksaUNBS0NGLEdBQUcsQ0FBQ2tCLFM7QUFFUDs7OztBQUlBWixFQUFBQSxJQUFJLEVBQUVQLFNBQVMsQ0FBQ29CLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBaEIsRUFBc0NDLFU7O0FBRTVDOzs7O0FBSUFaLEVBQUFBLFVBQVUsRUFBRVQsU0FBUyxDQUFDc0IsTUFBVixDQUFpQkQsVTs7QUFFN0I7OztBQUdBZixFQUFBQSxLQUFLLEVBQUVOLFNBQVMsQ0FBQ3VCLE1BQVYsQ0FBaUJGOzs7Z0JBdEJ0QmxCLEksa0JBeUJrQjtBQUNwQkksRUFBQUEsSUFBSSxFQUFFLEdBRGM7QUFFcEJDLEVBQUFBLEtBQUssRUFBRSxTQUZhO0FBR3BCQyxFQUFBQSxVQUFVLEVBQUU7QUFIUSxDOztBQXVDeEIsZUFBZVAsU0FBUyxDQUFDQyxJQUFELENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBjc3MgYXMgZ2xhbW9yQ3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIFRleHQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgQm94IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5Cb3gucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogU2l6ZSBvZiB0aGUgdGV4dCBzdHlsZS5cbiAgICAgKiBDYW4gYmU6IDMwMCwgNDAwLCA1MDAsIDYwMC5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzMwMCwgNDAwLCA1MDAsIDYwMF0pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGb250IGZhbWlseS5cbiAgICAgKiBDYW4gYmU6IGB1aWAsIGBkaXNwbGF5YCBvciBgbW9ub2Agb3IgYSBjdXN0b20gZm9udCBmYW1pbHkuXG4gICAgICovXG4gICAgZm9udEZhbWlseTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6IDQwMCxcbiAgICBjb2xvcjogJ2RlZmF1bHQnLFxuICAgIGZvbnRGYW1pbHk6ICd1aSdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjc3MsXG4gICAgICB0aGVtZSxcbiAgICAgIHNpemUsXG4gICAgICBjb2xvcixcbiAgICAgIGZvbnRGYW1pbHksXG4gICAgICBtYXJnaW5Ub3AsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7IG1hcmdpblRvcDogZGVmYXVsdE1hcmdpblRvcCwgLi4udGV4dFN0eWxlIH0gPSB0aGVtZS5nZXRUZXh0U3R5bGUoXG4gICAgICBzaXplXG4gICAgKVxuXG4gICAgY29uc3QgZmluYWxNYXJnaW5Ub3AgPVxuICAgICAgbWFyZ2luVG9wID09PSAnZGVmYXVsdCcgPyBkZWZhdWx0TWFyZ2luVG9wIDogbWFyZ2luVG9wXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBpcz1cInNwYW5cIlxuICAgICAgICBjb2xvcj17dGhlbWUuZ2V0VGV4dENvbG9yKGNvbG9yKX1cbiAgICAgICAgZm9udEZhbWlseT17dGhlbWUuZ2V0Rm9udEZhbWlseShmb250RmFtaWx5KX1cbiAgICAgICAgbWFyZ2luVG9wPXtmaW5hbE1hcmdpblRvcH1cbiAgICAgICAgey4uLnRleHRTdHlsZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjeChjbGFzc05hbWUsIGNzcyA/IGdsYW1vckNzcyhjc3MpLnRvU3RyaW5nKCkgOiB1bmRlZmluZWQpfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoVGV4dClcbiJdfQ==