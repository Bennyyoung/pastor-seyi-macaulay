import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import cx from 'classnames';
import { css as glamorCss } from 'glamor';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { Positioner } from '../../positioner';
import { Position } from '../../constants';
import TooltipStateless from './TooltipStateless';
var idCounter = 0;

var Tooltip =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Tooltip, _PureComponent);

  function Tooltip(props, context) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "show", function () {
      if (_this.state.isShown) return;

      _this.setState({
        willShow: true
      });

      _this.timeout = setTimeout(function () {
        if (!_this.state.willShow) return;

        _this.setState({
          isShown: true
        });
      }, _this.props.showDelay);
    });

    _defineProperty(_assertThisInitialized(_this), "hide", function () {
      _this.setState({
        isShown: false,
        willShow: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderTarget", function (_ref) {
      var getRef = _ref.getRef;
      var children = _this.props.children;
      var tooltipTargetProps = {
        onMouseEnter: _this.show,
        onMouseLeave: _this.hide,
        'aria-describedby': _this.state.id
        /**
         * Tooltips can be used within a Popover (not the other way around)
         * When a Tooltip is used within a Popover, the Popover passes
         * its props to the Tooltip in a `popoverProps` object.
         */
        // eslint-disable-next-line react/prop-types

      };

      if (_this.props.popoverProps) {
        var _this$props$popoverPr = _this.props.popoverProps,
            getTargetRef = _this$props$popoverPr.getTargetRef,
            isShown = _this$props$popoverPr.isShown,
            popoverTargetProps = _objectWithoutProperties(_this$props$popoverPr, ["getTargetRef", "isShown"]);

        return React.cloneElement(children, _objectSpread({}, popoverTargetProps, tooltipTargetProps, {
          innerRef: function innerRef(ref) {
            // Get the ref for the Tooltip.
            getRef(ref); // Pass the ref to the Popover.

            getTargetRef(ref);
          }
        }));
      }
      /**
       * With normal usage only the props for a Tooltip are passed to the target.
       */


      return React.cloneElement(children, _objectSpread({}, tooltipTargetProps, {
        innerRef: function innerRef(ref) {
          getRef(ref);
        }
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "isPopoverShown", function () {
      return (// eslint-disable-next-line react/prop-types
        _this.props.popoverProps && _this.props.popoverProps.isShown
      );
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnterTarget", function () {
      _this.setState({
        isShownByTarget: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeaveTarget", function () {
      _this.setState({
        isShownByTarget: false,
        willShow: false
      });
    });

    _this.state = {
      id: "evergreen-tooltip-".concat(++idCounter),
      willShow: false,
      isShown: props.isShown,
      isShownByTarget: false
    };
    _this.handleMouseLeaveTarget = debounce(_this.handleMouseLeaveTarget, _this.props.hideDelay);
    _this.hide = debounce(_this.hide, _this.props.hideDelay);
    return _this;
  }

  _createClass(Tooltip, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          appearance = _this$props.appearance,
          isShown = _this$props.isShown,
          content = _this$props.content,
          position = _this$props.position,
          _this$props$stateless = _this$props.statelessProps,
          statelessProps = _this$props$stateless === void 0 ? {} : _this$props$stateless;
      var _this$state = this.state,
          stateIsShown = _this$state.isShown,
          isShownByTarget = _this$state.isShownByTarget;
      var shown = (isShown || stateIsShown || isShownByTarget) && !this.isPopoverShown(); // Tooltip was explicitly set to not be shown

      if (isShown === false) {
        shown = false;
      }

      return React.createElement(Positioner, {
        target: function target(_ref2) {
          var getRef = _ref2.getRef;
          return _this2.renderTarget({
            getRef: getRef
          });
        },
        isShown: shown,
        position: position,
        animationDuration: 160
      }, function (_ref3) {
        var css = _ref3.css,
            style = _ref3.style,
            state = _ref3.state,
            getRef = _ref3.getRef;
        return React.createElement(TooltipStateless, _extends({
          id: _this2.state.id,
          appearance: appearance,
          innerRef: function innerRef(ref) {
            return getRef(ref);
          },
          "data-state": state,
          style: style,
          onMouseEnter: _this2.handleMouseEnterTarget,
          onMouseLeave: _this2.handleMouseLeaveTarget
        }, statelessProps, {
          className: cx(statelessProps.className, css ? glamorCss(css).toString() : undefined)
        }), content);
      });
    }
  }]);

  return Tooltip;
}(PureComponent);

Tooltip.displayName = "Tooltip";

_defineProperty(Tooltip, "propTypes", {
  /**
   * The appearance of the tooltip.
   */
  appearance: PropTypes.oneOf(['default', 'card']).isRequired,

  /**
   * The position the Popover is on.
   */
  position: PropTypes.oneOf([Position.TOP, Position.TOP_LEFT, Position.TOP_RIGHT, Position.BOTTOM, Position.BOTTOM_LEFT, Position.BOTTOM_RIGHT, Position.LEFT, Position.RIGHT]),

  /**
   * The content of the Popover.
   */
  content: PropTypes.node.isRequired,

  /**
   * Time in ms before hiding the Tooltip.
   */
  hideDelay: PropTypes.number.isRequired,

  /**
   * Time in ms before showing the Tooltip.
   */
  showDelay: PropTypes.number.isRequired,

  /**
   * When True, manually show the Tooltip.
   */
  isShown: PropTypes.bool,

  /**
   * The target button of the Tooltip.
   */
  children: PropTypes.node.isRequired,

  /**
   * Properties passed through to the Tooltip.
   */
  statelessProps: PropTypes.object
});

_defineProperty(Tooltip, "defaultProps", {
  appearance: 'default',
  position: Position.BOTTOM,
  hideDelay: 120,
  showDelay: 0
});

export { Tooltip as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b29sdGlwL3NyYy9Ub29sdGlwLmpzIl0sIm5hbWVzIjpbImN4IiwiY3NzIiwiZ2xhbW9yQ3NzIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZGVib3VuY2UiLCJQb3NpdGlvbmVyIiwiUG9zaXRpb24iLCJUb29sdGlwU3RhdGVsZXNzIiwiaWRDb3VudGVyIiwiVG9vbHRpcCIsInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwiaXNTaG93biIsInNldFN0YXRlIiwid2lsbFNob3ciLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsInNob3dEZWxheSIsImdldFJlZiIsImNoaWxkcmVuIiwidG9vbHRpcFRhcmdldFByb3BzIiwib25Nb3VzZUVudGVyIiwic2hvdyIsIm9uTW91c2VMZWF2ZSIsImhpZGUiLCJpZCIsInBvcG92ZXJQcm9wcyIsImdldFRhcmdldFJlZiIsInBvcG92ZXJUYXJnZXRQcm9wcyIsImNsb25lRWxlbWVudCIsImlubmVyUmVmIiwicmVmIiwiaXNTaG93bkJ5VGFyZ2V0IiwiaGFuZGxlTW91c2VMZWF2ZVRhcmdldCIsImhpZGVEZWxheSIsImNsZWFyVGltZW91dCIsImFwcGVhcmFuY2UiLCJjb250ZW50IiwicG9zaXRpb24iLCJzdGF0ZWxlc3NQcm9wcyIsInN0YXRlSXNTaG93biIsInNob3duIiwiaXNQb3BvdmVyU2hvd24iLCJyZW5kZXJUYXJnZXQiLCJzdHlsZSIsImhhbmRsZU1vdXNlRW50ZXJUYXJnZXQiLCJjbGFzc05hbWUiLCJ0b1N0cmluZyIsInVuZGVmaW5lZCIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsIlRPUCIsIlRPUF9MRUZUIiwiVE9QX1JJR0hUIiwiQk9UVE9NIiwiQk9UVE9NX0xFRlQiLCJCT1RUT01fUklHSFQiLCJMRUZUIiwiUklHSFQiLCJub2RlIiwibnVtYmVyIiwiYm9vbCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEVBQVAsTUFBZSxZQUFm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cyBhcyBnbGFtb3JDc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSdcbmltcG9ydCB7IFBvc2l0aW9uZXIgfSBmcm9tICcuLi8uLi9wb3NpdGlvbmVyJ1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgVG9vbHRpcFN0YXRlbGVzcyBmcm9tICcuL1Rvb2x0aXBTdGF0ZWxlc3MnXG5cbmxldCBpZENvdW50ZXIgPSAwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgdG9vbHRpcC5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2NhcmQnXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwb3NpdGlvbiB0aGUgUG9wb3ZlciBpcyBvbi5cbiAgICAgKi9cbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFBvc2l0aW9uLlRPUCxcbiAgICAgIFBvc2l0aW9uLlRPUF9MRUZULFxuICAgICAgUG9zaXRpb24uVE9QX1JJR0hULFxuICAgICAgUG9zaXRpb24uQk9UVE9NLFxuICAgICAgUG9zaXRpb24uQk9UVE9NX0xFRlQsXG4gICAgICBQb3NpdGlvbi5CT1RUT01fUklHSFQsXG4gICAgICBQb3NpdGlvbi5MRUZULFxuICAgICAgUG9zaXRpb24uUklHSFRcbiAgICBdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250ZW50IG9mIHRoZSBQb3BvdmVyLlxuICAgICAqL1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaW1lIGluIG1zIGJlZm9yZSBoaWRpbmcgdGhlIFRvb2x0aXAuXG4gICAgICovXG4gICAgaGlkZURlbGF5OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaW1lIGluIG1zIGJlZm9yZSBzaG93aW5nIHRoZSBUb29sdGlwLlxuICAgICAqL1xuICAgIHNob3dEZWxheTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBUcnVlLCBtYW51YWxseSBzaG93IHRoZSBUb29sdGlwLlxuICAgICAqL1xuICAgIGlzU2hvd246IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHRhcmdldCBidXR0b24gb2YgdGhlIFRvb2x0aXAuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0aWVzIHBhc3NlZCB0aHJvdWdoIHRvIHRoZSBUb29sdGlwLlxuICAgICAqL1xuICAgIHN0YXRlbGVzc1Byb3BzOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0JyxcbiAgICBwb3NpdGlvbjogUG9zaXRpb24uQk9UVE9NLFxuICAgIGhpZGVEZWxheTogMTIwLFxuICAgIHNob3dEZWxheTogMFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpZDogYGV2ZXJncmVlbi10b29sdGlwLSR7KytpZENvdW50ZXJ9YCxcbiAgICAgIHdpbGxTaG93OiBmYWxzZSxcbiAgICAgIGlzU2hvd246IHByb3BzLmlzU2hvd24sXG4gICAgICBpc1Nob3duQnlUYXJnZXQ6IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVNb3VzZUxlYXZlVGFyZ2V0ID0gZGVib3VuY2UoXG4gICAgICB0aGlzLmhhbmRsZU1vdXNlTGVhdmVUYXJnZXQsXG4gICAgICB0aGlzLnByb3BzLmhpZGVEZWxheVxuICAgIClcblxuICAgIHRoaXMuaGlkZSA9IGRlYm91bmNlKHRoaXMuaGlkZSwgdGhpcy5wcm9wcy5oaWRlRGVsYXkpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KVxuICB9XG5cbiAgc2hvdyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc1Nob3duKSByZXR1cm5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHdpbGxTaG93OiB0cnVlXG4gICAgfSlcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS53aWxsU2hvdykgcmV0dXJuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNTaG93bjogdHJ1ZVxuICAgICAgfSlcbiAgICB9LCB0aGlzLnByb3BzLnNob3dEZWxheSlcbiAgfVxuXG4gIGhpZGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1Nob3duOiBmYWxzZSxcbiAgICAgIHdpbGxTaG93OiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXJUYXJnZXQgPSAoeyBnZXRSZWYgfSkgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHRvb2x0aXBUYXJnZXRQcm9wcyA9IHtcbiAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5zaG93LFxuICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhpZGUsXG4gICAgICAnYXJpYS1kZXNjcmliZWRieSc6IHRoaXMuc3RhdGUuaWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb29sdGlwcyBjYW4gYmUgdXNlZCB3aXRoaW4gYSBQb3BvdmVyIChub3QgdGhlIG90aGVyIHdheSBhcm91bmQpXG4gICAgICogV2hlbiBhIFRvb2x0aXAgaXMgdXNlZCB3aXRoaW4gYSBQb3BvdmVyLCB0aGUgUG9wb3ZlciBwYXNzZXNcbiAgICAgKiBpdHMgcHJvcHMgdG8gdGhlIFRvb2x0aXAgaW4gYSBgcG9wb3ZlclByb3BzYCBvYmplY3QuXG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbiAgICBpZiAodGhpcy5wcm9wcy5wb3BvdmVyUHJvcHMpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbiAgICAgICAgZ2V0VGFyZ2V0UmVmLFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgICAgICBpc1Nob3duLFxuICAgICAgICAuLi5wb3BvdmVyVGFyZ2V0UHJvcHNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbiAgICAgIH0gPSB0aGlzLnByb3BzLnBvcG92ZXJQcm9wc1xuXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIC8vIEFkZCB0aGUgUG9wb3ZlciBwcm9wcyB0byB0aGUgdGFyZ2V0LlxuICAgICAgICAuLi5wb3BvdmVyVGFyZ2V0UHJvcHMsXG4gICAgICAgIC8vIEFkZCB0aGUgVG9vbHRpcCBwcm9wcyB0byB0aGUgdGFyZ2V0LlxuICAgICAgICAuLi50b29sdGlwVGFyZ2V0UHJvcHMsXG5cbiAgICAgICAgaW5uZXJSZWY6IHJlZiA9PiB7XG4gICAgICAgICAgLy8gR2V0IHRoZSByZWYgZm9yIHRoZSBUb29sdGlwLlxuICAgICAgICAgIGdldFJlZihyZWYpXG4gICAgICAgICAgLy8gUGFzcyB0aGUgcmVmIHRvIHRoZSBQb3BvdmVyLlxuICAgICAgICAgIGdldFRhcmdldFJlZihyZWYpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2l0aCBub3JtYWwgdXNhZ2Ugb25seSB0aGUgcHJvcHMgZm9yIGEgVG9vbHRpcCBhcmUgcGFzc2VkIHRvIHRoZSB0YXJnZXQuXG4gICAgICovXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgLi4udG9vbHRpcFRhcmdldFByb3BzLFxuICAgICAgaW5uZXJSZWY6IHJlZiA9PiB7XG4gICAgICAgIGdldFJlZihyZWYpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGlzUG9wb3ZlclNob3duID0gKCkgPT5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgIHRoaXMucHJvcHMucG9wb3ZlclByb3BzICYmIHRoaXMucHJvcHMucG9wb3ZlclByb3BzLmlzU2hvd25cblxuICBoYW5kbGVNb3VzZUVudGVyVGFyZ2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNTaG93bkJ5VGFyZ2V0OiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZU1vdXNlTGVhdmVUYXJnZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1Nob3duQnlUYXJnZXQ6IGZhbHNlLFxuICAgICAgd2lsbFNob3c6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgaXNTaG93bixcbiAgICAgIGNvbnRlbnQsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIHN0YXRlbGVzc1Byb3BzID0ge31cbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaXNTaG93bjogc3RhdGVJc1Nob3duLCBpc1Nob3duQnlUYXJnZXQgfSA9IHRoaXMuc3RhdGVcblxuICAgIGxldCBzaG93biA9XG4gICAgICAoaXNTaG93biB8fCBzdGF0ZUlzU2hvd24gfHwgaXNTaG93bkJ5VGFyZ2V0KSAmJiAhdGhpcy5pc1BvcG92ZXJTaG93bigpXG5cbiAgICAvLyBUb29sdGlwIHdhcyBleHBsaWNpdGx5IHNldCB0byBub3QgYmUgc2hvd25cbiAgICBpZiAoaXNTaG93biA9PT0gZmFsc2UpIHtcbiAgICAgIHNob3duID0gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvc2l0aW9uZXJcbiAgICAgICAgdGFyZ2V0PXsoeyBnZXRSZWYgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRhcmdldCh7IGdldFJlZiB9KVxuICAgICAgICB9fVxuICAgICAgICBpc1Nob3duPXtzaG93bn1cbiAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbj17MTYwfVxuICAgICAgPlxuICAgICAgICB7KHsgY3NzLCBzdHlsZSwgc3RhdGUsIGdldFJlZiB9KSA9PiAoXG4gICAgICAgICAgPFRvb2x0aXBTdGF0ZWxlc3NcbiAgICAgICAgICAgIGlkPXt0aGlzLnN0YXRlLmlkfVxuICAgICAgICAgICAgYXBwZWFyYW5jZT17YXBwZWFyYW5jZX1cbiAgICAgICAgICAgIGlubmVyUmVmPXtyZWYgPT4gZ2V0UmVmKHJlZil9XG4gICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVNb3VzZUVudGVyVGFyZ2V0fVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmVUYXJnZXR9XG4gICAgICAgICAgICB7Li4uc3RhdGVsZXNzUHJvcHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICBzdGF0ZWxlc3NQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgIGNzcyA/IGdsYW1vckNzcyhjc3MpLnRvU3RyaW5nKCkgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgPC9Ub29sdGlwU3RhdGVsZXNzPlxuICAgICAgICApfVxuICAgICAgPC9Qb3NpdGlvbmVyPlxuICAgIClcbiAgfVxufVxuIl19