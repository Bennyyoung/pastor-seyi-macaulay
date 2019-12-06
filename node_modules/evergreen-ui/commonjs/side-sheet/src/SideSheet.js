"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _glamor = require("glamor");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _overlay = require("../../overlay");

var _constants = require("../../constants");

var _SheetClose = _interopRequireDefault(require("./SheetClose"));

var _paneProps, _subpaneProps, _animationStylesClass;

var paneProps = (_paneProps = {}, (0, _defineProperty2.default)(_paneProps, _constants.Position.LEFT, {
  height: '100vh',
  maxWidth: '100vw',
  position: 'absolute',
  left: 0,
  right: 'auto'
}), (0, _defineProperty2.default)(_paneProps, _constants.Position.RIGHT, {
  height: '100vh',
  maxWidth: '100vw',
  position: 'absolute',
  right: 0,
  left: 'auto'
}), (0, _defineProperty2.default)(_paneProps, _constants.Position.TOP, {
  width: '100vw',
  position: 'absolute',
  maxHeight: '100vh',
  top: 0,
  bottom: 'auto'
}), (0, _defineProperty2.default)(_paneProps, _constants.Position.BOTTOM, {
  width: '100vw',
  maxHeight: '100vh',
  position: 'absolute',
  bottom: 0,
  top: 'auto'
}), _paneProps);
var subpaneProps = (_subpaneProps = {}, (0, _defineProperty2.default)(_subpaneProps, _constants.Position.LEFT, {
  height: '100vh'
}), (0, _defineProperty2.default)(_subpaneProps, _constants.Position.RIGHT, {
  height: '100vh'
}), (0, _defineProperty2.default)(_subpaneProps, _constants.Position.TOP, {
  width: '100vw'
}), (0, _defineProperty2.default)(_subpaneProps, _constants.Position.BOTTOM, {
  width: '100vw'
}), _subpaneProps);
var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)"
};
var ANIMATION_DURATION = 240;

var withAnimations = function withAnimations(animateIn, animateOut) {
  return {
    '&[data-state="entering"], &[data-state="entered"]': {
      animation: "".concat(animateIn, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.deceleration, " both")
    },
    '&[data-state="exiting"]': {
      animation: "".concat(animateOut, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.acceleration, " both")
    }
  };
};

var animationStylesClass = (_animationStylesClass = {}, (0, _defineProperty2.default)(_animationStylesClass, _constants.Position.LEFT, (0, _objectSpread2.default)({
  transform: "translateX(-100%)"
}, withAnimations(_glamor.css.keyframes('anchoredLeftSlideInAnimation', {
  from: {
    transform: "translateX(-100%)"
  },
  to: {
    transform: "translateX(0)"
  }
}), _glamor.css.keyframes('anchoredLeftSlideOutAnimation', {
  from: {
    transform: "translateX(0)"
  },
  to: {
    transform: "translateX(-100%)"
  }
})))), (0, _defineProperty2.default)(_animationStylesClass, _constants.Position.RIGHT, (0, _objectSpread2.default)({
  transform: "translateX(100%)"
}, withAnimations(_glamor.css.keyframes('anchoredRightSlideInAnimation', {
  from: {
    transform: "translateX(100%)"
  },
  to: {
    transform: "translateX(0)"
  }
}), _glamor.css.keyframes('anchoredRightSlideOutAnimation', {
  from: {
    transform: "translateX(0)"
  },
  to: {
    transform: "translateX(100%)"
  }
})))), (0, _defineProperty2.default)(_animationStylesClass, _constants.Position.TOP, (0, _objectSpread2.default)({
  transform: "translateY(-100%)"
}, withAnimations(_glamor.css.keyframes('anchoredTopSlideInAnimation', {
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
}), _glamor.css.keyframes('anchoredTopSlideOutAnimation', {
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
})))), (0, _defineProperty2.default)(_animationStylesClass, _constants.Position.BOTTOM, (0, _objectSpread2.default)({
  transform: "translateY(100%)"
}, withAnimations(_glamor.css.keyframes('anchoredBottomSlideInAnimation', {
  from: {
    transform: "translateY(100%)"
  },
  to: {
    transform: "translateY(0)"
  }
}), _glamor.css.keyframes('anchoredBottomSlideOutAnimation', {
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(100%)"
  }
})))), _animationStylesClass);

var SideSheet =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(SideSheet, _React$Component);

  function SideSheet() {
    (0, _classCallCheck2.default)(this, SideSheet);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SideSheet).apply(this, arguments));
  }

  (0, _createClass2.default)(SideSheet, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          isShown = _this$props.isShown,
          children = _this$props.children,
          containerProps = _this$props.containerProps,
          onOpenComplete = _this$props.onOpenComplete,
          onCloseComplete = _this$props.onCloseComplete,
          onBeforeClose = _this$props.onBeforeClose,
          shouldCloseOnOverlayClick = _this$props.shouldCloseOnOverlayClick,
          shouldCloseOnEscapePress = _this$props.shouldCloseOnEscapePress,
          position = _this$props.position,
          preventBodyScrolling = _this$props.preventBodyScrolling;
      return _react.default.createElement(_overlay.Overlay, {
        isShown: isShown,
        shouldCloseOnClick: shouldCloseOnOverlayClick,
        shouldCloseOnEscapePress: shouldCloseOnEscapePress,
        onBeforeClose: onBeforeClose,
        onExited: onCloseComplete,
        onEntered: onOpenComplete,
        preventBodyScrolling: preventBodyScrolling
      }, function (_ref) {
        var state = _ref.state,
            close = _ref.close;
        return _react.default.createElement(_layers.Pane, (0, _extends2.default)({
          width: width
        }, paneProps[position], {
          css: animationStylesClass[position],
          "data-state": state
        }), _react.default.createElement(_SheetClose.default, {
          position: position,
          "data-state": state,
          isClosing: false,
          onClick: close
        }), _react.default.createElement(_layers.Pane, (0, _extends2.default)({
          elevation: 4,
          backgroundColor: "white",
          overflowY: "auto",
          maxHeight: "100vh",
          "data-state": state,
          width: width
        }, subpaneProps[position], containerProps), typeof children === 'function' ? children({
          close: close
        }) : children));
      });
    }
  }]);
  return SideSheet;
}(_react.default.Component);

SideSheet.displayName = "SideSheet";
(0, _defineProperty2.default)(SideSheet, "propTypes", {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]).isRequired,

  /**
   * When true, the Side Sheet is shown.
   */
  isShown: _propTypes.default.bool,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes.default.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes.default.func,

  /**
   * Function called when overlay is about to close.
   * Return `false` to prevent the sheet from closing.
   * type: `Function -> Boolean`
   */
  onBeforeClose: _propTypes.default.func,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick: _propTypes.default.bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: _propTypes.default.bool,

  /**
   * Width of the SideSheet.
   */
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,

  /**
   * Properties to pass through the SideSheet container Pane.
   */
  containerProps: _propTypes.default.object,

  /**
   * Positions the sheet to the top, left, right, or bottom of the screen.
   */
  position: _propTypes.default.oneOf([_constants.Position.TOP, _constants.Position.BOTTOM, _constants.Position.LEFT, _constants.Position.RIGHT]).isRequired,

  /**
   * Whether or not to prevent scrolling in the outer body
   */
  preventBodyScrolling: _propTypes.default.bool
});
(0, _defineProperty2.default)(SideSheet, "defaultProps", {
  width: 620,
  onCloseComplete: function onCloseComplete() {},
  onOpenComplete: function onOpenComplete() {},
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEscapePress: true,
  position: _constants.Position.RIGHT
});
var _default = SideSheet;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaWRlLXNoZWV0L3NyYy9TaWRlU2hlZXQuanMiXSwibmFtZXMiOlsicGFuZVByb3BzIiwiUG9zaXRpb24iLCJMRUZUIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJwb3NpdGlvbiIsImxlZnQiLCJyaWdodCIsIlJJR0hUIiwiVE9QIiwid2lkdGgiLCJtYXhIZWlnaHQiLCJ0b3AiLCJib3R0b20iLCJCT1RUT00iLCJzdWJwYW5lUHJvcHMiLCJhbmltYXRpb25FYXNpbmciLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJBTklNQVRJT05fRFVSQVRJT04iLCJ3aXRoQW5pbWF0aW9ucyIsImFuaW1hdGVJbiIsImFuaW1hdGVPdXQiLCJhbmltYXRpb24iLCJhbmltYXRpb25TdHlsZXNDbGFzcyIsInRyYW5zZm9ybSIsImNzcyIsImtleWZyYW1lcyIsImZyb20iLCJ0byIsIlNpZGVTaGVldCIsInByb3BzIiwiaXNTaG93biIsImNoaWxkcmVuIiwiY29udGFpbmVyUHJvcHMiLCJvbk9wZW5Db21wbGV0ZSIsIm9uQ2xvc2VDb21wbGV0ZSIsIm9uQmVmb3JlQ2xvc2UiLCJzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrIiwic2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzIiwicHJldmVudEJvZHlTY3JvbGxpbmciLCJzdGF0ZSIsImNsb3NlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJub2RlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIiwic3RyaW5nIiwibnVtYmVyIiwib2JqZWN0Iiwib25lT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsK0RBQ1pDLG9CQUFTQyxJQURHLEVBQ0k7QUFDZkMsRUFBQUEsTUFBTSxFQUFFLE9BRE87QUFFZkMsRUFBQUEsUUFBUSxFQUFF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Ozs7QUFHQWhELEVBQUFBLFFBQVEsRUFBRXdDLG1CQUFVUyxLQUFWLENBQWdCLENBQ3hCckQsb0JBQVNRLEdBRGUsRUFFeEJSLG9CQUFTYSxNQUZlLEVBR3hCYixvQkFBU0MsSUFIZSxFQUl4QkQsb0JBQVNPLEtBSmUsQ0FBaEIsRUFLUHlDLFVBeERjOztBQTBEakI7OztBQUdBVCxFQUFBQSxvQkFBb0IsRUFBRUssbUJBQVVLO0FBN0RmLEM7OEJBRGZwQixTLGtCQWlFa0I7QUFDcEJwQixFQUFBQSxLQUFLLEVBQUUsR0FEYTtBQUVwQjBCLEVBQUFBLGVBQWUsRUFBRSwyQkFBTSxDQUFFLENBRkw7QUFHcEJELEVBQUFBLGNBQWMsRUFBRSwwQkFBTSxDQUFFLENBSEo7QUFJcEJHLEVBQUFBLHlCQUF5QixFQUFFLElBSlA7QUFLcEJDLEVBQUFBLHdCQUF3QixFQUFFLElBTE47QUFNcEJsQyxFQUFBQSxRQUFRLEVBQUVKLG9CQUFTTztBQU5DLEM7ZUFrRVRzQixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICcuLi8uLi9vdmVybGF5J1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgU2hlZXRDbG9zZSBmcm9tICcuL1NoZWV0Q2xvc2UnXG5cbmNvbnN0IHBhbmVQcm9wcyA9IHtcbiAgW1Bvc2l0aW9uLkxFRlRdOiB7XG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIG1heFdpZHRoOiAnMTAwdncnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6ICdhdXRvJ1xuICB9LFxuICBbUG9zaXRpb24uUklHSFRdOiB7XG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIG1heFdpZHRoOiAnMTAwdncnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHJpZ2h0OiAwLFxuICAgIGxlZnQ6ICdhdXRvJ1xuICB9LFxuICBbUG9zaXRpb24uVE9QXToge1xuICAgIHdpZHRoOiAnMTAwdncnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIG1heEhlaWdodDogJzEwMHZoJyxcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiAnYXV0bydcbiAgfSxcbiAgW1Bvc2l0aW9uLkJPVFRPTV06IHtcbiAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICBtYXhIZWlnaHQ6ICcxMDB2aCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiAwLFxuICAgIHRvcDogJ2F1dG8nXG4gIH1cbn1cblxuY29uc3Qgc3VicGFuZVByb3BzID0ge1xuICBbUG9zaXRpb24uTEVGVF06IHtcbiAgICBoZWlnaHQ6ICcxMDB2aCdcbiAgfSxcbiAgW1Bvc2l0aW9uLlJJR0hUXToge1xuICAgIGhlaWdodDogJzEwMHZoJ1xuICB9LFxuICBbUG9zaXRpb24uVE9QXToge1xuICAgIHdpZHRoOiAnMTAwdncnXG4gIH0sXG4gIFtQb3NpdGlvbi5CT1RUT01dOiB7XG4gICAgd2lkdGg6ICcxMDB2dydcbiAgfVxufVxuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIGRlY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKWAsXG4gIGFjY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjQsIDAuMCwgMSwgMSlgXG59XG5cbmNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDI0MFxuXG5jb25zdCB3aXRoQW5pbWF0aW9ucyA9IChhbmltYXRlSW4sIGFuaW1hdGVPdXQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnJltkYXRhLXN0YXRlPVwiZW50ZXJpbmdcIl0sICZbZGF0YS1zdGF0ZT1cImVudGVyZWRcIl0nOiB7XG4gICAgICBhbmltYXRpb246IGAke2FuaW1hdGVJbn0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHtcbiAgICAgICAgYW5pbWF0aW9uRWFzaW5nLmRlY2VsZXJhdGlvblxuICAgICAgfSBib3RoYFxuICAgIH0sXG4gICAgJyZbZGF0YS1zdGF0ZT1cImV4aXRpbmdcIl0nOiB7XG4gICAgICBhbmltYXRpb246IGAke2FuaW1hdGVPdXR9ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7XG4gICAgICAgIGFuaW1hdGlvbkVhc2luZy5hY2NlbGVyYXRpb25cbiAgICAgIH0gYm90aGBcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgYW5pbWF0aW9uU3R5bGVzQ2xhc3MgPSB7XG4gIFtQb3NpdGlvbi5MRUZUXToge1xuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTEwMCUpYCxcbiAgICAuLi53aXRoQW5pbWF0aW9ucyhcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2FuY2hvcmVkTGVmdFNsaWRlSW5BbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtMTAwJSlgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMClgIH1cbiAgICAgIH0pLFxuICAgICAgY3NzLmtleWZyYW1lcygnYW5jaG9yZWRMZWZ0U2xpZGVPdXRBbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgwKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtMTAwJSlgIH1cbiAgICAgIH0pXG4gICAgKVxuICB9LFxuICBbUG9zaXRpb24uUklHSFRdOiB7XG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgxMDAlKWAsXG4gICAgLi4ud2l0aEFuaW1hdGlvbnMoXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZFJpZ2h0U2xpZGVJbkFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDEwMCUpYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDApYCB9XG4gICAgICB9KSxcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2FuY2hvcmVkUmlnaHRTbGlkZU91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDApYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDEwMCUpYCB9XG4gICAgICB9KVxuICAgIClcbiAgfSxcbiAgW1Bvc2l0aW9uLlRPUF06IHtcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0xMDAlKWAsXG4gICAgLi4ud2l0aEFuaW1hdGlvbnMoXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZFRvcFNsaWRlSW5BbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtMTAwJSlgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMClgIH1cbiAgICAgIH0pLFxuICAgICAgY3NzLmtleWZyYW1lcygnYW5jaG9yZWRUb3BTbGlkZU91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDApYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0xMDAlKWAgfVxuICAgICAgfSlcbiAgICApXG4gIH0sXG4gIFtQb3NpdGlvbi5CT1RUT01dOiB7XG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgxMDAlKWAsXG4gICAgLi4ud2l0aEFuaW1hdGlvbnMoXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZEJvdHRvbVNsaWRlSW5BbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgxMDAlKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwKWAgfVxuICAgICAgfSksXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZEJvdHRvbVNsaWRlT3V0QW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMClgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMTAwJSlgIH1cbiAgICAgIH0pXG4gICAgKVxuICB9XG59XG5cbmNsYXNzIFNpZGVTaGVldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ2hpbGRyZW4gY2FuIGJlIGEgc3RyaW5nLCBub2RlIG9yIGEgZnVuY3Rpb24gYWNjZXB0aW5nIGAoeyBjbG9zZSB9KWAuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBTaWRlIFNoZWV0IGlzIHNob3duLlxuICAgICAqL1xuICAgIGlzU2hvd246IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBleGl0IHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAgICovXG4gICAgb25DbG9zZUNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZW50ZXIgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBvbk9wZW5Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBvdmVybGF5IGlzIGFib3V0IHRvIGNsb3NlLlxuICAgICAqIFJldHVybiBgZmFsc2VgIHRvIHByZXZlbnQgdGhlIHNoZWV0IGZyb20gY2xvc2luZy5cbiAgICAgKiB0eXBlOiBgRnVuY3Rpb24gLT4gQm9vbGVhbmBcbiAgICAgKi9cbiAgICBvbkJlZm9yZUNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEJvb2xlYW4gaW5kaWNhdGluZyBpZiBjbGlja2luZyB0aGUgb3ZlcmxheSBzaG91bGQgY2xvc2UgdGhlIG92ZXJsYXkuXG4gICAgICovXG4gICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBCb29sZWFuIGluZGljYXRpbmcgaWYgcHJlc3NpbmcgdGhlIGVzYyBrZXkgc2hvdWxkIGNsb3NlIHRoZSBvdmVybGF5LlxuICAgICAqL1xuICAgIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaWR0aCBvZiB0aGUgU2lkZVNoZWV0LlxuICAgICAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnRpZXMgdG8gcGFzcyB0aHJvdWdoIHRoZSBTaWRlU2hlZXQgY29udGFpbmVyIFBhbmUuXG4gICAgICovXG4gICAgY29udGFpbmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbnMgdGhlIHNoZWV0IHRvIHRoZSB0b3AsIGxlZnQsIHJpZ2h0LCBvciBib3R0b20gb2YgdGhlIHNjcmVlbi5cbiAgICAgKi9cbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFBvc2l0aW9uLlRPUCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTSxcbiAgICAgIFBvc2l0aW9uLkxFRlQsXG4gICAgICBQb3NpdGlvbi5SSUdIVFxuICAgIF0pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBwcmV2ZW50IHNjcm9sbGluZyBpbiB0aGUgb3V0ZXIgYm9keVxuICAgICAqL1xuICAgIHByZXZlbnRCb2R5U2Nyb2xsaW5nOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB3aWR0aDogNjIwLFxuICAgIG9uQ2xvc2VDb21wbGV0ZTogKCkgPT4ge30sXG4gICAgb25PcGVuQ29tcGxldGU6ICgpID0+IHt9LFxuICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IHRydWUsXG4gICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzOiB0cnVlLFxuICAgIHBvc2l0aW9uOiBQb3NpdGlvbi5SSUdIVFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHdpZHRoLFxuICAgICAgaXNTaG93bixcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY29udGFpbmVyUHJvcHMsXG4gICAgICBvbk9wZW5Db21wbGV0ZSxcbiAgICAgIG9uQ2xvc2VDb21wbGV0ZSxcbiAgICAgIG9uQmVmb3JlQ2xvc2UsXG4gICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrLFxuICAgICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzLFxuICAgICAgcG9zaXRpb24sXG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbGluZ1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE92ZXJsYXlcbiAgICAgICAgaXNTaG93bj17aXNTaG93bn1cbiAgICAgICAgc2hvdWxkQ2xvc2VPbkNsaWNrPXtzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrfVxuICAgICAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3M9e3Nob3VsZENsb3NlT25Fc2NhcGVQcmVzc31cbiAgICAgICAgb25CZWZvcmVDbG9zZT17b25CZWZvcmVDbG9zZX1cbiAgICAgICAgb25FeGl0ZWQ9e29uQ2xvc2VDb21wbGV0ZX1cbiAgICAgICAgb25FbnRlcmVkPXtvbk9wZW5Db21wbGV0ZX1cbiAgICAgICAgcHJldmVudEJvZHlTY3JvbGxpbmc9e3ByZXZlbnRCb2R5U2Nyb2xsaW5nfVxuICAgICAgPlxuICAgICAgICB7KHsgc3RhdGUsIGNsb3NlIH0pID0+IChcbiAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgey4uLnBhbmVQcm9wc1twb3NpdGlvbl19XG4gICAgICAgICAgICBjc3M9e2FuaW1hdGlvblN0eWxlc0NsYXNzW3Bvc2l0aW9uXX1cbiAgICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTaGVldENsb3NlXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgICAgICAgZGF0YS1zdGF0ZT17c3RhdGV9XG4gICAgICAgICAgICAgIGlzQ2xvc2luZz17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgIGVsZXZhdGlvbj17NH1cbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICBvdmVyZmxvd1k9XCJhdXRvXCJcbiAgICAgICAgICAgICAgbWF4SGVpZ2h0PVwiMTAwdmhcIlxuICAgICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICB7Li4uc3VicGFuZVByb3BzW3Bvc2l0aW9uXX1cbiAgICAgICAgICAgICAgey4uLmNvbnRhaW5lclByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4oeyBjbG9zZSB9KSA6IGNoaWxkcmVufVxuICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgKX1cbiAgICAgIDwvT3ZlcmxheT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZVNoZWV0XG4iXX0=