import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _extends from "@babel/runtime/helpers/esm/extends";
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

var OrderedList =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(OrderedList, _PureComponent);

  function OrderedList() {
    _classCallCheck(this, OrderedList);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrderedList).apply(this, arguments));
  }

  _createClass(OrderedList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          size = _this$props.size,
          props = _objectWithoutProperties(_this$props, ["children", "size"]);

      var finalChildren = React.Children.map(children, function (child) {
        if (!React.isValidElement(child)) {
          return child;
        }

        return React.cloneElement(child, {
          // Prefer more granularly defined icon if present
          size: child.props.size || size
        });
      });
      return React.createElement(Box, _extends({}, OrderedList.styles, props), finalChildren);
    }
  }]);

  return OrderedList;
}(PureComponent);

OrderedList.displayName = "OrderedList";

_defineProperty(OrderedList, "propTypes", _objectSpread({}, Box.propTypes, {
  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: PropTypes.oneOf([300, 400, 500, 600]).isRequired
}));

_defineProperty(OrderedList, "defaultProps", {
  size: 400
});

_defineProperty(OrderedList, "styles", {
  is: 'ol',
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'decimal'
});

export { OrderedList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9PcmRlcmVkTGlzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJPcmRlcmVkTGlzdCIsInByb3BzIiwiY2hpbGRyZW4iLCJzaXplIiwiZmluYWxDaGlsZHJlbiIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsInN0eWxlcyIsInByb3BUeXBlcyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImlzIiwibWFyZ2luIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJsaXN0U3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7O0lBRXFCQyxXOzs7Ozs7Ozs7Ozs7OzZCQXVCVjtBQUFBLHdCQUM4QixLQUFLQyxLQURuQztBQUFBLFVBQ0NDLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ1dDLElBRFgsZUFDV0EsSUFEWDtBQUFBLFVBQ29CRixLQURwQjs7QUFHUCxVQUFNRyxhQUFhLEdBQUdSLEtBQUssQ0FBQ1MsUUFBTixDQUFlQyxHQUFmLENBQW1CSixRQUFuQixFQUE2QixVQUFBSyxLQUFLLEVBQUk7QUFDMUQsWUFBSSxDQUFDWCxLQUFLLENBQUNZLGNBQU4sQ0FBcUJELEtBQXJCLENBQUwsRUFBa0M7QUFDaEMsaUJBQU9BLEtBQVA7QUFDRDs7QUFFRCxlQUFPWCxLQUFLLENBQUNhLFlBQU4sQ0FBbUJGLEtBQW5CLEVBQTBCO0FBQy9CO0FBQ0FKLFVBQUFBLElBQUksRUFBRUksS0FBSyxDQUFDTixLQUFOLENBQVlFLElBQVosSUFBb0JBO0FBRkssU0FBMUIsQ0FBUDtBQUlELE9BVHFCLENBQXRCO0FBV0EsYUFDRSxvQkFBQyxHQUFELGVBQVNILFdBQVcsQ0FBQ1UsTUFBckIsRUFBaUNULEtBQWpDLEdBQ0dHLGFBREgsQ0FERjtBQUtEOzs7O0VBMUNzQ1AsYTs7QUFBcEJHLFc7O2dCQUFBQSxXLGlDQUVkRCxHQUFHLENBQUNZLFM7QUFFUDs7OztBQUlBUixFQUFBQSxJQUFJLEVBQUVMLFNBQVMsQ0FBQ2MsS0FBVixDQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixDQUFoQixFQUFzQ0M7OztnQkFSM0JiLFcsa0JBV0c7QUFDcEJHLEVBQUFBLElBQUksRUFBRTtBQURjLEM7O2dCQVhISCxXLFlBZUg7QUFDZGMsRUFBQUEsRUFBRSxFQUFFLElBRFU7QUFFZEMsRUFBQUEsTUFBTSxFQUFFLENBRk07QUFHZEMsRUFBQUEsVUFBVSxFQUFFLE9BSEU7QUFJZEMsRUFBQUEsT0FBTyxFQUFFLENBSks7QUFLZEMsRUFBQUEsU0FBUyxFQUFFO0FBTEcsQzs7U0FmR2xCLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyZWRMaXN0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uQm94LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFNpemUgb2YgdGhlIHRleHQgdXNlZCBpbiBhIGxpc3QgaXRlbS5cbiAgICAgKiBDYW4gYmU6IDMwMCwgNDAwLCA1MDAsIDYwMC5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzMwMCwgNDAwLCA1MDAsIDYwMF0pLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogNDAwXG4gIH1cblxuICBzdGF0aWMgc3R5bGVzID0ge1xuICAgIGlzOiAnb2wnLFxuICAgIG1hcmdpbjogMCxcbiAgICBtYXJnaW5MZWZ0OiAnMS4xZW0nLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbGlzdFN0eWxlOiAnZGVjaW1hbCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBzaXplLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgZmluYWxDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgLy8gUHJlZmVyIG1vcmUgZ3JhbnVsYXJseSBkZWZpbmVkIGljb24gaWYgcHJlc2VudFxuICAgICAgICBzaXplOiBjaGlsZC5wcm9wcy5zaXplIHx8IHNpemVcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHsuLi5PcmRlcmVkTGlzdC5zdHlsZXN9IHsuLi5wcm9wc30+XG4gICAgICAgIHtmaW5hbENoaWxkcmVufVxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG4iXX0=