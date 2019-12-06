import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import ScrollbarSize from './ScrollbarSize';

var TableHead =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TableHead, _PureComponent);

  function TableHead() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TableHead);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TableHead)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      scrollbarWidth: 0
    });

    _defineProperty(_assertThisInitialized(_this), "handleScrollbarSize", function (width) {
      _this.setState({
        scrollbarWidth: width
      });
    });

    return _this;
  }

  _createClass(TableHead, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          height = _this$props.height,
          accountForScrollbar = _this$props.accountForScrollbar,
          props = _objectWithoutProperties(_this$props, ["children", "height", "accountForScrollbar"]);

      var scrollbarWidth = this.state.scrollbarWidth;
      return React.createElement(Pane, _extends({
        display: "flex",
        flexShrink: 0,
        paddingRight: scrollbarWidth,
        borderBottom: "default",
        background: "tint2",
        height: height
      }, props), children, ' ', accountForScrollbar && React.createElement(ScrollbarSize, {
        handleScrollbarSize: this.handleScrollbarSize
      }));
    }
  }]);

  return TableHead;
}(PureComponent);

TableHead.displayName = "TableHead";

_defineProperty(TableHead, "propTypes", _objectSpread({}, Pane.propTypes, {
  /**
   * The height of the table head.
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

  /**
   * This should always be true if you are using TableHead together with a TableBody.
   * Because TableBody has `overflowY: scroll` by default.
   */
  accountForScrollbar: PropTypes.bool
}));

_defineProperty(TableHead, "defaultProps", {
  height: 32,
  accountForScrollbar: true
});

export { TableHead as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVIZWFkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIlBhbmUiLCJTY3JvbGxiYXJTaXplIiwiVGFibGVIZWFkIiwic2Nyb2xsYmFyV2lkdGgiLCJ3aWR0aCIsInNldFN0YXRlIiwicHJvcHMiLCJjaGlsZHJlbiIsImhlaWdodCIsImFjY291bnRGb3JTY3JvbGxiYXIiLCJzdGF0ZSIsImhhbmRsZVNjcm9sbGJhclNpemUiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLGlCQUExQjs7SUFFcUJDLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0REFtQlg7QUFDTkMsTUFBQUEsY0FBYyxFQUFFO0FBRFYsSzs7MEVBU2MsVUFBQUMsS0FBSyxFQUFJO0FBQzdCLFlBQUtDLFFBQUwsQ0FBYztBQUNaRixRQUFBQSxjQUFjLEVBQUVDO0FBREosT0FBZDtBQUdELEs7Ozs7Ozs7NkJBRVE7QUFBQSx3QkFDcUQsS0FBS0UsS0FEMUQ7QUFBQSxVQUNDQyxRQURELGVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxNQURYLGVBQ1dBLE1BRFg7QUFBQSxVQUNtQkMsbUJBRG5CLGVBQ21CQSxtQkFEbkI7QUFBQSxVQUMyQ0gsS0FEM0M7O0FBQUEsVUFFQ0gsY0FGRCxHQUVvQixLQUFLTyxLQUZ6QixDQUVDUCxjQUZEO0FBSVAsYUFDRSxvQkFBQyxJQUFEO0FBQ0UsUUFBQSxPQUFPLEVBQUMsTUFEVjtBQUVFLFFBQUEsVUFBVSxFQUFFLENBRmQ7QUFHRSxRQUFBLFlBQVksRUFBRUEsY0FIaEI7QUFJRSxRQUFBLFlBQVksRUFBQyxTQUpmO0FBS0UsUUFBQSxVQUFVLEVBQUMsT0FMYjtBQU1FLFFBQUEsTUFBTSxFQUFFSztBQU5WLFNBT01GLEtBUE4sR0FTR0MsUUFUSCxFQVNhLEdBVGIsRUFVR0UsbUJBQW1CLElBQ2xCLG9CQUFDLGFBQUQ7QUFBZSxRQUFBLG1CQUFtQixFQUFFLEtBQUtFO0FBQXpDLFFBWEosQ0FERjtBQWdCRDs7OztFQXREb0NiLGE7O0FBQWxCSSxTOztnQkFBQUEsUyxpQ0FLZEYsSUFBSSxDQUFDWSxTO0FBRVI7OztBQUdBSixFQUFBQSxNQUFNLEVBQUVULFNBQVMsQ0FBQ2MsU0FBVixDQUFvQixDQUFDZCxTQUFTLENBQUNlLE1BQVgsRUFBbUJmLFNBQVMsQ0FBQ2dCLE1BQTdCLENBQXBCLEVBQTBEQyxVOztBQUVsRTs7OztBQUlBUCxFQUFBQSxtQkFBbUIsRUFBRVYsU0FBUyxDQUFDa0I7OztnQkFoQmRmLFMsa0JBdUJHO0FBQ3BCTSxFQUFBQSxNQUFNLEVBQUUsRUFEWTtBQUVwQkMsRUFBQUEsbUJBQW1CLEVBQUU7QUFGRCxDOztTQXZCSFAsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IFNjcm9sbGJhclNpemUgZnJvbSAnLi9TY3JvbGxiYXJTaXplJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZUhlYWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgUGFuZSBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uUGFuZS5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSB0YWJsZSBoZWFkLlxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHNob3VsZCBhbHdheXMgYmUgdHJ1ZSBpZiB5b3UgYXJlIHVzaW5nIFRhYmxlSGVhZCB0b2dldGhlciB3aXRoIGEgVGFibGVCb2R5LlxuICAgICAqIEJlY2F1c2UgVGFibGVCb2R5IGhhcyBgb3ZlcmZsb3dZOiBzY3JvbGxgIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgYWNjb3VudEZvclNjcm9sbGJhcjogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIHNjcm9sbGJhcldpZHRoOiAwXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogMzIsXG4gICAgYWNjb3VudEZvclNjcm9sbGJhcjogdHJ1ZVxuICB9XG5cbiAgaGFuZGxlU2Nyb2xsYmFyU2l6ZSA9IHdpZHRoID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNjcm9sbGJhcldpZHRoOiB3aWR0aFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgaGVpZ2h0LCBhY2NvdW50Rm9yU2Nyb2xsYmFyLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2Nyb2xsYmFyV2lkdGggfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgIHBhZGRpbmdSaWdodD17c2Nyb2xsYmFyV2lkdGh9XG4gICAgICAgIGJvcmRlckJvdHRvbT1cImRlZmF1bHRcIlxuICAgICAgICBiYWNrZ3JvdW5kPVwidGludDJcIlxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59eycgJ31cbiAgICAgICAge2FjY291bnRGb3JTY3JvbGxiYXIgJiYgKFxuICAgICAgICAgIDxTY3JvbGxiYXJTaXplIGhhbmRsZVNjcm9sbGJhclNpemU9e3RoaXMuaGFuZGxlU2Nyb2xsYmFyU2l6ZX0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cbiJdfQ==