"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classnames = _interopRequireDefault(require("classnames"));

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _positioner = require("../../positioner");

var _constants = require("../../constants");

var _TooltipStateless = _interopRequireDefault(require("./TooltipStateless"));

var idCounter = 0;

var Tooltip =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Tooltip, _PureComponent);

  function Tooltip(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, Tooltip);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Tooltip).call(this, props, context));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "show", function () {
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hide", function () {
      _this.setState({
        isShown: false,
        willShow: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderTarget", function (_ref) {
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
            popoverTargetProps = (0, _objectWithoutProperties2.default)(_this$props$popoverPr, ["getTargetRef", "isShown"]);
        return _react.default.cloneElement(children, (0, _objectSpread2.default)({}, popoverTargetProps, tooltipTargetProps, {
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


      return _react.default.cloneElement(children, (0, _objectSpread2.default)({}, tooltipTargetProps, {
        innerRef: function innerRef(ref) {
          getRef(ref);
        }
      }));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isPopoverShown", function () {
      return (// eslint-disable-next-line react/prop-types
        _this.props.popoverProps && _this.props.popoverProps.isShown
      );
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMouseEnterTarget", function () {
      _this.setState({
        isShownByTarget: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMouseLeaveTarget", function () {
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
    _this.handleMouseLeaveTarget = (0, _lodash.default)(_this.handleMouseLeaveTarget, _this.props.hideDelay);
    _this.hide = (0, _lodash.default)(_this.hide, _this.props.hideDelay);
    return _this;
  }

  (0, _createClass2.default)(Tooltip, [{
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

      return _react.default.createElement(_positioner.Positioner, {
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
        return _react.default.createElement(_TooltipStateless.default, (0, _extends2.default)({
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
          className: (0, _classnames.default)(statelessProps.className, css ? (0, _glamor.css)(css).toString() : undefined)
        }), content);
      });
    }
  }]);
  return Tooltip;
}(_react.PureComponent);

exports.default = Tooltip;
Tooltip.displayName = "Tooltip";
(0, _defineProperty2.default)(Tooltip, "propTypes", {
  /**
   * The appearance of the tooltip.
   */
  appearance: _propTypes.default.oneOf(['default', 'card']).isRequired,

  /**
   * The position the Popover is on.
   */
  position: _propTypes.default.oneOf([_constants.Position.TOP, _constants.Position.TOP_LEFT, _constants.Position.TOP_RIGHT, _constants.Position.BOTTOM, _constants.Position.BOTTOM_LEFT, _constants.Position.BOTTOM_RIGHT, _constants.Position.LEFT, _constants.Position.RIGHT]),

  /**
   * The content of the Popover.
   */
  content: _propTypes.default.node.isRequired,

  /**
   * Time in ms before hiding the Tooltip.
   */
  hideDelay: _propTypes.default.number.isRequired,

  /**
   * Time in ms before showing the Tooltip.
   */
  showDelay: _propTypes.default.number.isRequired,

  /**
   * When True, manually show the Tooltip.
   */
  isShown: _propTypes.default.bool,

  /**
   * The target button of the Tooltip.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Properties passed through to the Tooltip.
   */
  statelessProps: _propTypes.default.object
});
(0, _defineProperty2.default)(Tooltip, "defaultProps", {
  appearance: 'default',
  position: _constants.Position.BOTTOM,
  hideDelay: 120,
  showDelay: 0
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b29sdGlwL3NyYy9Ub29sdGlwLmpzIl0sIm5hbWVzIjpbImlkQ291bnRlciIsIlRvb2x0aXAiLCJwcm9wcyIsImNvbnRleHQiLCJzdGF0ZSIsImlzU2hvd24iLCJzZXRTdGF0ZSIsIndpbGxTaG93IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJzaG93RGVsYXkiLCJnZXRSZWYiLCJjaGlsZHJlbiIsInRvb2x0aXBUYXJnZXRQcm9wcyIsIm9uTW91c2VFbnRlciIsInNob3ciLCJvbk1vdXNlTGVhdmUiLCJoaWRlIiwiaWQiLCJwb3BvdmVyUHJvcHMiLCJnZXRUYXJnZXRSZWYiLCJwb3BvdmVyVGFyZ2V0UHJvcHMiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsImlubmVyUmVmIiwicmVmIiwiaXNTaG93bkJ5VGFyZ2V0IiwiaGFuZGxlTW91c2VMZWF2ZVRhcmdldCIsImhpZGVEZWxheSIsImNsZWFyVGltZW91dCIsImFwcGVhcmFuY2UiLCJjb250ZW50IiwicG9zaXRpb24iLCJzdGF0ZWxlc3NQcm9wcyIsInN0YXRlSXNTaG93biIsInNob3duIiwiaXNQb3BvdmVyU2hvd24iLCJyZW5kZXJUYXJnZXQiLCJjc3MiLCJzdHlsZSIsImhhbmRsZU1vdXNlRW50ZXJUYXJnZXQiLCJjbGFzc05hbWUiLCJ0b1N0cmluZyIsInVuZGVmaW5lZCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJQb3NpdGlvbiIsIlRPUCIsIlRPUF9MRUZUIiwiVE9QX1JJR0hUIiwiQk9UVE9NIiwiQk9UVE9NX0xFRlQiLCJCT1RUT01fUklHSFQiLCJMRUZUIiwiUklHSFQiLCJub2RlIiwibnVtYmVyIiwiYm9vbCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQUlBLFNBQVMs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QUFWLENBQWVWLFVBdkJQOztBQXlCakI7OztBQUdBbkIsRUFBQUEsU0FBUyxFQUFFaUIsbUJBQVVhLE1BQVYsQ0FBaUJYLFVBNUJYOztBQThCakI7OztBQUdBckMsRUFBQUEsU0FBUyxFQUFFbUMsbUJBQVVhLE1BQVYsQ0FBaUJYLFVBakNYOztBQW1DakI7OztBQUdBMUMsRUFBQUEsT0FBTyxFQUFFd0MsbUJBQVVjLElBdENGOztBQXdDakI7OztBQUdBL0MsRUFBQUEsUUFBUSxFQUFFaUMsbUJBQVVZLElBQVYsQ0FBZVYsVUEzQ1I7O0FBNkNqQjs7O0FBR0FkLEVBQUFBLGNBQWMsRUFBRVksbUJBQVVlO0FBaERULEM7OEJBREEzRCxPLGtCQW9ERztBQUNwQjZCLEVBQUFBLFVBQVUsRUFBRSxTQURRO0FBRXBCRSxFQUFBQSxRQUFRLEVBQUVnQixvQkFBU0ksTUFGQztBQUdwQnhCLEVBQUFBLFNBQVMsRUFBRSxHQUhTO0FBSXBCbEIsRUFBQUEsU0FBUyxFQUFFO0FBSlMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgY3NzIGFzIGdsYW1vckNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJ1xuaW1wb3J0IHsgUG9zaXRpb25lciB9IGZyb20gJy4uLy4uL3Bvc2l0aW9uZXInXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBUb29sdGlwU3RhdGVsZXNzIGZyb20gJy4vVG9vbHRpcFN0YXRlbGVzcydcblxubGV0IGlkQ291bnRlciA9IDBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSB0b29sdGlwLlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnY2FyZCddKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBvc2l0aW9uIHRoZSBQb3BvdmVyIGlzIG9uLlxuICAgICAqL1xuICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgUG9zaXRpb24uVE9QLFxuICAgICAgUG9zaXRpb24uVE9QX0xFRlQsXG4gICAgICBQb3NpdGlvbi5UT1BfUklHSFQsXG4gICAgICBQb3NpdGlvbi5CT1RUT00sXG4gICAgICBQb3NpdGlvbi5CT1RUT01fTEVGVCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTV9SSUdIVCxcbiAgICAgIFBvc2l0aW9uLkxFRlQsXG4gICAgICBQb3NpdGlvbi5SSUdIVFxuICAgIF0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRlbnQgb2YgdGhlIFBvcG92ZXIuXG4gICAgICovXG4gICAgY29udGVudDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRpbWUgaW4gbXMgYmVmb3JlIGhpZGluZyB0aGUgVG9vbHRpcC5cbiAgICAgKi9cbiAgICBoaWRlRGVsYXk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRpbWUgaW4gbXMgYmVmb3JlIHNob3dpbmcgdGhlIFRvb2x0aXAuXG4gICAgICovXG4gICAgc2hvd0RlbGF5OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIFRydWUsIG1hbnVhbGx5IHNob3cgdGhlIFRvb2x0aXAuXG4gICAgICovXG4gICAgaXNTaG93bjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFyZ2V0IGJ1dHRvbiBvZiB0aGUgVG9vbHRpcC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnRpZXMgcGFzc2VkIHRocm91Z2ggdG8gdGhlIFRvb2x0aXAuXG4gICAgICovXG4gICAgc3RhdGVsZXNzUHJvcHM6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICAgIHBvc2l0aW9uOiBQb3NpdGlvbi5CT1RUT00sXG4gICAgaGlkZURlbGF5OiAxMjAsXG4gICAgc2hvd0RlbGF5OiAwXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZXZlcmdyZWVuLXRvb2x0aXAtJHsrK2lkQ291bnRlcn1gLFxuICAgICAgd2lsbFNob3c6IGZhbHNlLFxuICAgICAgaXNTaG93bjogcHJvcHMuaXNTaG93bixcbiAgICAgIGlzU2hvd25CeVRhcmdldDogZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZU1vdXNlTGVhdmVUYXJnZXQgPSBkZWJvdW5jZShcbiAgICAgIHRoaXMuaGFuZGxlTW91c2VMZWF2ZVRhcmdldCxcbiAgICAgIHRoaXMucHJvcHMuaGlkZURlbGF5XG4gICAgKVxuXG4gICAgdGhpcy5oaWRlID0gZGVib3VuY2UodGhpcy5oaWRlLCB0aGlzLnByb3BzLmhpZGVEZWxheSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpXG4gIH1cblxuICBzaG93ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzU2hvd24pIHJldHVyblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgd2lsbFNob3c6IHRydWVcbiAgICB9KVxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLndpbGxTaG93KSByZXR1cm5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc1Nob3duOiB0cnVlXG4gICAgICB9KVxuICAgIH0sIHRoaXMucHJvcHMuc2hvd0RlbGF5KVxuICB9XG5cbiAgaGlkZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzU2hvd246IGZhbHNlLFxuICAgICAgd2lsbFNob3c6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlclRhcmdldCA9ICh7IGdldFJlZiB9KSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgdG9vbHRpcFRhcmdldFByb3BzID0ge1xuICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLnNob3csXG4gICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaGlkZSxcbiAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogdGhpcy5zdGF0ZS5pZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvb2x0aXBzIGNhbiBiZSB1c2VkIHdpdGhpbiBhIFBvcG92ZXIgKG5vdCB0aGUgb3RoZXIgd2F5IGFyb3VuZClcbiAgICAgKiBXaGVuIGEgVG9vbHRpcCBpcyB1c2VkIHdpdGhpbiBhIFBvcG92ZXIsIHRoZSBQb3BvdmVyIHBhc3Nlc1xuICAgICAqIGl0cyBwcm9wcyB0byB0aGUgVG9vbHRpcCBpbiBhIGBwb3BvdmVyUHJvcHNgIG9iamVjdC5cbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgIGlmICh0aGlzLnByb3BzLnBvcG92ZXJQcm9wcykge1xuICAgICAgY29uc3Qge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgICAgICBnZXRUYXJnZXRSZWYsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4gICAgICAgIGlzU2hvd24sXG4gICAgICAgIC4uLnBvcG92ZXJUYXJnZXRQcm9wc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgICAgfSA9IHRoaXMucHJvcHMucG9wb3ZlclByb3BzXG5cbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAgLy8gQWRkIHRoZSBQb3BvdmVyIHByb3BzIHRvIHRoZSB0YXJnZXQuXG4gICAgICAgIC4uLnBvcG92ZXJUYXJnZXRQcm9wcyxcbiAgICAgICAgLy8gQWRkIHRoZSBUb29sdGlwIHByb3BzIHRvIHRoZSB0YXJnZXQuXG4gICAgICAgIC4uLnRvb2x0aXBUYXJnZXRQcm9wcyxcblxuICAgICAgICBpbm5lclJlZjogcmVmID0+IHtcbiAgICAgICAgICAvLyBHZXQgdGhlIHJlZiBmb3IgdGhlIFRvb2x0aXAuXG4gICAgICAgICAgZ2V0UmVmKHJlZilcbiAgICAgICAgICAvLyBQYXNzIHRoZSByZWYgdG8gdGhlIFBvcG92ZXIuXG4gICAgICAgICAgZ2V0VGFyZ2V0UmVmKHJlZilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaXRoIG5vcm1hbCB1c2FnZSBvbmx5IHRoZSBwcm9wcyBmb3IgYSBUb29sdGlwIGFyZSBwYXNzZWQgdG8gdGhlIHRhcmdldC5cbiAgICAgKi9cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAuLi50b29sdGlwVGFyZ2V0UHJvcHMsXG4gICAgICBpbm5lclJlZjogcmVmID0+IHtcbiAgICAgICAgZ2V0UmVmKHJlZilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaXNQb3BvdmVyU2hvd24gPSAoKSA9PlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4gICAgdGhpcy5wcm9wcy5wb3BvdmVyUHJvcHMgJiYgdGhpcy5wcm9wcy5wb3BvdmVyUHJvcHMuaXNTaG93blxuXG4gIGhhbmRsZU1vdXNlRW50ZXJUYXJnZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1Nob3duQnlUYXJnZXQ6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlTW91c2VMZWF2ZVRhcmdldCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzU2hvd25CeVRhcmdldDogZmFsc2UsXG4gICAgICB3aWxsU2hvdzogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBpc1Nob3duLFxuICAgICAgY29udGVudCxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgc3RhdGVsZXNzUHJvcHMgPSB7fVxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBpc1Nob3duOiBzdGF0ZUlzU2hvd24sIGlzU2hvd25CeVRhcmdldCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IHNob3duID1cbiAgICAgIChpc1Nob3duIHx8IHN0YXRlSXNTaG93biB8fCBpc1Nob3duQnlUYXJnZXQpICYmICF0aGlzLmlzUG9wb3ZlclNob3duKClcblxuICAgIC8vIFRvb2x0aXAgd2FzIGV4cGxpY2l0bHkgc2V0IHRvIG5vdCBiZSBzaG93blxuICAgIGlmIChpc1Nob3duID09PSBmYWxzZSkge1xuICAgICAgc2hvd24gPSBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UG9zaXRpb25lclxuICAgICAgICB0YXJnZXQ9eyh7IGdldFJlZiB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVGFyZ2V0KHsgZ2V0UmVmIH0pXG4gICAgICAgIH19XG4gICAgICAgIGlzU2hvd249e3Nob3dufVxuICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uPXsxNjB9XG4gICAgICA+XG4gICAgICAgIHsoeyBjc3MsIHN0eWxlLCBzdGF0ZSwgZ2V0UmVmIH0pID0+IChcbiAgICAgICAgICA8VG9vbHRpcFN0YXRlbGVzc1xuICAgICAgICAgICAgaWQ9e3RoaXMuc3RhdGUuaWR9XG4gICAgICAgICAgICBhcHBlYXJhbmNlPXthcHBlYXJhbmNlfVxuICAgICAgICAgICAgaW5uZXJSZWY9e3JlZiA9PiBnZXRSZWYocmVmKX1cbiAgICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJUYXJnZXR9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZVRhcmdldH1cbiAgICAgICAgICAgIHsuLi5zdGF0ZWxlc3NQcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICAgIHN0YXRlbGVzc1Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgY3NzID8gZ2xhbW9yQ3NzKGNzcykudG9TdHJpbmcoKSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICA8L1Rvb2x0aXBTdGF0ZWxlc3M+XG4gICAgICAgICl9XG4gICAgICA8L1Bvc2l0aW9uZXI+XG4gICAgKVxuICB9XG59XG4iXX0=