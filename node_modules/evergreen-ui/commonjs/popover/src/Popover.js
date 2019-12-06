"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

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

var _positioner = require("../../positioner");

var _tooltip = require("../../tooltip");

var _constants = require("../../constants");

var _PopoverStateless = _interopRequireDefault(require("./PopoverStateless"));

var Popover =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Popover, _Component);

  function Popover(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Popover);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Popover).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "bringFocusInside", function () {
      // Always delay focus manipulation to just before repaint to prevent scroll jumping
      return requestAnimationFrame(function () {
        // Container ref may be undefined between component mounting and Portal rendering
        // activeElement may be undefined in some rare cases in IE
        if (_this.popoverNode == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
        !_this.state.isShown) {
          return;
        }

        var isFocusOutsideModal = !_this.popoverNode.contains(document.activeElement);

        if (isFocusOutsideModal) {
          // Element marked autofocus has higher priority than the other clowns
          var autofocusElement = _this.popoverNode.querySelector('[autofocus]');

          var wrapperElement = _this.popoverNode.querySelector('[tabindex]');

          var buttonElements = _this.popoverNode.querySelectorAll('button, a, [role="menuitem"], [role="menuitemradio"]');

          if (autofocusElement) {
            autofocusElement.focus();
          } else if (wrapperElement) {
            wrapperElement.focus();
          } else if (buttonElements.length > 0) {
            buttonElements[0].focus();
          }
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "bringFocusBackToTarget", function () {
      return requestAnimationFrame(function () {
        if (_this.popoverNode == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
        ) {
            return;
          }

        var isFocusInsideModal = _this.popoverNode.contains(document.activeElement); // Bring back focus on the target.


        if (_this.targetRef && (document.activeElement === document.body || isFocusInsideModal)) {
          _this.targetRef.focus();
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onBodyClick", function (e) {
      // Ignore clicks on the popover or button
      if (_this.targetRef && _this.targetRef.contains(e.target)) {
        return;
      }

      if (_this.popoverNode && _this.popoverNode.contains(e.target)) {
        return;
      } // Notify body click


      _this.props.onBodyClick(e);

      if (_this.props.shouldCloseOnExternalClick === false) {
        return;
      }

      _this.close();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onEsc", function (e) {
      // Esc key
      if (e.keyCode === 27) {
        _this.close();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "toggle", function () {
      if (_this.state.isShown) {
        _this.close();
      } else {
        _this.open();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "open", function () {
      if (_this.state.isShown) {
        return;
      }

      _this.setState({
        isShown: true
      });

      document.body.addEventListener('click', _this.onBodyClick, false);
      document.body.addEventListener('keydown', _this.onEsc, false);

      _this.props.onOpen();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "close", function () {
      if (!_this.state.isShown) {
        return;
      }

      _this.setState({
        isShown: false
      });

      document.body.removeEventListener('click', _this.onBodyClick, false);
      document.body.removeEventListener('keydown', _this.onEsc, false);

      _this.bringFocusBackToTarget();

      _this.props.onClose();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOpenComplete", function () {
      if (_this.props.bringFocusInside) _this.bringFocusInside();

      _this.props.onOpenComplete();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleCloseComplete", function () {
      _this.props.onCloseComplete();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleKeyDown", function (e) {
      if (e.key === 'ArrowDown') {
        _this.bringFocusInside();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOpenHover", function () {
      if (_this.props.trigger === 'hover') {
        _this.open();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleCloseHover", function () {
      if (_this.props.trigger === 'hover') {
        _this.close();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderTarget", function (_ref) {
      var getRef = _ref.getRef,
          isShown = _ref.isShown;
      var children = _this.props.children;
      var isTooltipInside = children && children.type === _tooltip.Tooltip;

      var getTargetRef = function getTargetRef(ref) {
        _this.targetRef = ref;
        getRef(ref);
      };
      /**
       * When a function is passed, you can control the Popover manually.
       */


      if (typeof children === 'function') {
        return children({
          toggle: _this.toggle,
          getRef: getTargetRef,
          isShown: isShown
        });
      }

      var popoverTargetProps = {
        onClick: _this.toggle,
        onMouseEnter: _this.handleOpenHover,
        onKeyDown: _this.handleKeyDown,
        role: 'button',
        'aria-expanded': isShown,
        'aria-haspopup': true
        /**
         * Tooltips can be used within a Popover (not the other way around)
         * In this case the children is the Tooltip instead of a button.
         * Pass the properties to the Tooltip and let the Tooltip
         * add the properties to the target.
         */

      };

      if (isTooltipInside) {
        return _react.default.cloneElement(children, {
          popoverProps: (0, _objectSpread2.default)({
            getTargetRef: getTargetRef,
            isShown: isShown
          }, popoverTargetProps)
        });
      }
      /**
       * With normal usage only popover props end up on the target.
       */


      return _react.default.cloneElement(children, (0, _objectSpread2.default)({
        innerRef: getTargetRef
      }, popoverTargetProps));
    });
    _this.state = {
      isShown: props.isShown
    };
    return _this;
  }

  (0, _createClass2.default)(Popover, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeEventListener('click', this.onBodyClick, false);
      document.body.removeEventListener('keydown', this.onEsc, false);
    }
    /**
     * Methods borrowed from BlueprintJS
     * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          isShown = _this$props.isShown,
          content = _this$props.content,
          display = _this$props.display,
          minWidth = _this$props.minWidth,
          position = _this$props.position,
          minHeight = _this$props.minHeight,
          _this$props$stateless = _this$props.statelessProps,
          statelessProps = _this$props$stateless === void 0 ? {} : _this$props$stateless,
          animationDuration = _this$props.animationDuration,
          onCloseComplete = _this$props.onCloseComplete;
      var stateIsShown = this.state.isShown; // If `isShown` is a boolean, popover is controlled manually, not via mouse events

      var shown = typeof isShown === 'boolean' ? isShown : stateIsShown;
      return _react.default.createElement(_positioner.Positioner, {
        target: function target(_ref2) {
          var getRef = _ref2.getRef,
              isShown = _ref2.isShown,
              targetWidth = _ref2.targetWidth;
          return _this2.renderTarget({
            getRef: getRef,
            isShown: isShown,
            targetWidth: targetWidth
          });
        },
        isShown: shown,
        position: position,
        animationDuration: animationDuration,
        onOpenComplete: this.handleOpenComplete,
        onCloseComplete: onCloseComplete
      }, function (_ref3) {
        var css = _ref3.css,
            style = _ref3.style,
            state = _ref3.state,
            getRef = _ref3.getRef;
        return _react.default.createElement(_PopoverStateless.default, (0, _extends2.default)({
          innerRef: function innerRef(ref) {
            _this2.popoverNode = ref;
            getRef(ref);
          },
          "data-state": state,
          display: display,
          minWidth: minWidth,
          minHeight: minHeight
        }, statelessProps, {
          className: (0, _classnames.default)(statelessProps.className, css ? (0, _glamor.css)(css).toString() : undefined),
          style: statelessProps && statelessProps.style ? (0, _objectSpread2.default)({}, style, statelessProps.style) : style,
          onMouseLeave: _this2.handleCloseHover
        }), typeof content === 'function' ? content({
          close: _this2.close
        }) : content);
      });
    }
  }]);
  return Popover;
}(_react.Component);

exports.default = Popover;
Popover.displayName = "Popover";
(0, _defineProperty2.default)(Popover, "propTypes", {
  /**
   * The position the Popover is on. Smart positioning might override this.
   */
  position: _propTypes.default.oneOf([_constants.Position.TOP, _constants.Position.TOP_LEFT, _constants.Position.TOP_RIGHT, _constants.Position.BOTTOM, _constants.Position.BOTTOM_LEFT, _constants.Position.BOTTOM_RIGHT, _constants.Position.LEFT, _constants.Position.RIGHT]),

  /**
   * When true, the Popover is manually shown.
   */
  isShown: _propTypes.default.bool,

  /**
   * Open the Popover based on click or hover. Default is click.
   */
  trigger: _propTypes.default.oneOf(['click', 'hover']),

  /**
   * The content of the Popover.
   */
  content: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]).isRequired,

  /**
   * The target button of the Popover.
   * When a function the following arguments are passed:
   * ({ toggle: Function -> Void, getRef: Function -> Ref, isShown: Bool })
   */
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.func]).isRequired,

  /**
   * The display property passed to the Popover card.
   */
  display: _propTypes.default.string,

  /**
   * The min width of the Popover card.
   */
  minWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * The min height of the Popover card.
   */
  minHeight: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * Properties passed through to the Popover card.
   */
  statelessProps: _propTypes.default.shape(_PopoverStateless.default.propTypes),

  /**
   * Duration of the animation.
   */
  animationDuration: _propTypes.default.number,

  /**
   * Function called when the Popover opens.
   */
  onOpen: _propTypes.default.func.isRequired,

  /**
   * Function fired when Popover closes.
   */
  onClose: _propTypes.default.func.isRequired,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes.default.func.isRequired,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes.default.func.isRequired,

  /**
   * Function that will be called when the body is clicked.
   */
  onBodyClick: _propTypes.default.func.isRequired,

  /**
   * When true, bring focus inside of the Popover on open.
   */
  bringFocusInside: _propTypes.default.bool,

  /**
   * Boolean indicating if clicking outside the dialog should close the dialog.
   */
  shouldCloseOnExternalClick: _propTypes.default.bool
});
(0, _defineProperty2.default)(Popover, "defaultProps", {
  position: _constants.Position.BOTTOM,
  minWidth: 200,
  minHeight: 40,
  animationDuration: 300,
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  onOpenComplete: function onOpenComplete() {},
  onCloseComplete: function onCloseComplete() {},
  onBodyClick: function onBodyClick() {},
  bringFocusInside: false,
  shouldCloseOnExternalClick: true,
  trigger: 'click'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL3NyYy9Qb3BvdmVyLmpzIl0sIm5hbWVzIjpbIlBvcG92ZXIiLCJwcm9wcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBvcG92ZXJOb2RlIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50Iiwic3RhdGUiLCJpc1Nob3duIiwiaXNGb2N1c091dHNpZGVNb2RhbCIsImNvbnRhaW5zIiwiYXV0b2ZvY3VzRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3cmFwcGVyRWxlbWVudCIsImJ1dHRvbkVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvY3VzIiwibGVuZ3RoIiwiaXNGb2N1c0luc2lkZU1vZGFsIiwidGFyZ2V0UmVmIiwiYm9keSIsImUiLCJ0YXJnZXQiLCJvbkJvZHlDbGljayIsInNob3VsZENsb3NlT25FeHRlcm5hbENsaWNrIiwiY2xvc2UiLCJrZXlDb2RlIiwib3BlbiIsInNldFN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRXNjIiwib25PcGVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJyaW5nRm9jdXNCYWNrVG9UYXJnZXQiLCJvbkNsb3NlIiwiYnJpbmdGb2N1c0luc2lkZSIsIm9uT3BlbkNvbXBsZXRlIiwib25DbG9zZUNvbXBsZXRlIiwia2V5IiwidHJpZ2dlciIsImdldFJlZiIsImNoaWxkcmVuIiwiaXNUb29sdGlwSW5zaWRlIiwidHlwZSIsIlRvb2x0aXAiLCJnZXRUYXJnZXRSZWYiLCJyZWYiLCJ0b2dnbGUiLCJwb3BvdmVyVGFyZ2V0UHJvcHMiLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwiaGFuZGxlT3BlbkhvdmVyIiwib25LZXlEb3duIiwiaGFuZGxlS2V5RG93biIsInJvbGUiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsInBvcG92ZXJQcm9wcyIsImlubmVyUmVmIiwiY29udGVudCIsImRpc3BsYXkiLCJtaW5XaWR0aCIsInBvc2l0aW9uIiwibWluSGVpZ2h0Iiwic3RhdGVsZXNzUHJvcHMiLCJhbmltYXRpb25EdXJhdGlvbiIsInN0YXRlSXNTaG93biIsInNob3duIiwidGFyZ2V0V2lkdGgiLCJyZW5kZXJUYXJnZXQiLCJoYW5kbGVPcGVuQ29tcGxldGUiLCJjc3MiLCJzdHlsZSIsImNsYXNzTmFtZSIsInRvU3RyaW5nIiwidW5kZWZpbmVkIiwiaGFuZGxlQ2xvc2VIb3ZlciIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9uZU9mIiwiUG9zaXRpb24iLCJUT1AiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIkJPVFRPTSIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiTEVGVCIsIlJJR0hUIiwiYm9vbCIsIm9uZU9mVHlwZSIsIm5vZGUiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImVsZW1lbnQiLCJzdHJpbmciLCJudW1iZXIiLCJzaGFwZSIsIlBvcG92ZXJTdGF0ZWxlc3MiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBRXFCQSxPOzs7OztBQWtIbkIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw2R0FBTUEsS0FBTjtBQURpQixtR0FnQkEsWUFBTTtBQUN2QjtBQUNBLGFBQU9DLHFCQUFxQixDQUFDLFlBQU07QUFDakM7QUFDQTtBQUNBLFlBQ0UsTUFBS0MsV0FBTCxJQUFvQixJQUFwQixJQUE0QjtBQUM1QkMsUUFBQUEsUUFBUSxDQUFDQyxhQUFULElBQTBCLElBRDFCLElBQ2tDO0FBQ2xDLFNBQUMsTUFBS0MsS0FBTCxDQUFXQyxPQUhkLEVBSUU7QUFDQTtBQUNEOztBQUVELFlBQU1DLG1CQUFtQixHQUFHLENBQUMsTUFBS0wsV0FBTCxDQUFpQk0sUUFBakIsQ0FDM0JMLFFBQVEsQ0FBQ0MsYUFEa0IsQ0FBN0I7O0FBR0EsWUFBSUcsbUJBQUosRUFBeUI7QUFDdkI7QUFDQSxjQUFNRSxnQkFBZ0IsR0FBRyxN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QUUsQ0FURDtBQVVwQlksRUFBQUEsZ0JBQWdCLEVBQUUsS0FWRTtBQVdwQlgsRUFBQUEsMEJBQTBCLEVBQUUsSUFYUjtBQVlwQmUsRUFBQUEsT0FBTyxFQUFFO0FBWlcsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgY3NzIGFzIGdsYW1vckNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBvc2l0aW9uZXIgfSBmcm9tICcuLi8uLi9wb3NpdGlvbmVyJ1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJy4uLy4uL3Rvb2x0aXAnXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBQb3BvdmVyU3RhdGVsZXNzIGZyb20gJy4vUG9wb3ZlclN0YXRlbGVzcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wb3ZlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIHBvc2l0aW9uIHRoZSBQb3BvdmVyIGlzIG9uLiBTbWFydCBwb3NpdGlvbmluZyBtaWdodCBvdmVycmlkZSB0aGlzLlxuICAgICAqL1xuICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgUG9zaXRpb24uVE9QLFxuICAgICAgUG9zaXRpb24uVE9QX0xFRlQsXG4gICAgICBQb3NpdGlvbi5UT1BfUklHSFQsXG4gICAgICBQb3NpdGlvbi5CT1RUT00sXG4gICAgICBQb3NpdGlvbi5CT1RUT01fTEVGVCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTV9SSUdIVCxcbiAgICAgIFBvc2l0aW9uLkxFRlQsXG4gICAgICBQb3NpdGlvbi5SSUdIVFxuICAgIF0pLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgUG9wb3ZlciBpcyBtYW51YWxseSBzaG93bi5cbiAgICAgKi9cbiAgICBpc1Nob3duOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiBPcGVuIHRoZSBQb3BvdmVyIGJhc2VkIG9uIGNsaWNrIG9yIGhvdmVyLiBEZWZhdWx0IGlzIGNsaWNrLlxuICAgICAqL1xuICAgIHRyaWdnZXI6IFByb3BUeXBlcy5vbmVPZihbJ2NsaWNrJywgJ2hvdmVyJ10pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRlbnQgb2YgdGhlIFBvcG92ZXIuXG4gICAgICovXG4gICAgY29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5mdW5jXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgYnV0dG9uIG9mIHRoZSBQb3BvdmVyLlxuICAgICAqIFdoZW4gYSBmdW5jdGlvbiB0aGUgZm9sbG93aW5nIGFyZ3VtZW50cyBhcmUgcGFzc2VkOlxuICAgICAqICh7IHRvZ2dsZTogRnVuY3Rpb24gLT4gVm9pZCwgZ2V0UmVmOiBGdW5jdGlvbiAtPiBSZWYsIGlzU2hvd246IEJvb2wgfSlcbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5mdW5jXSlcbiAgICAgIC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3BsYXkgcHJvcGVydHkgcGFzc2VkIHRvIHRoZSBQb3BvdmVyIGNhcmQuXG4gICAgICovXG4gICAgZGlzcGxheTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW4gd2lkdGggb2YgdGhlIFBvcG92ZXIgY2FyZC5cbiAgICAgKi9cbiAgICBtaW5XaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1pbiBoZWlnaHQgb2YgdGhlIFBvcG92ZXIgY2FyZC5cbiAgICAgKi9cbiAgICBtaW5IZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnRpZXMgcGFzc2VkIHRocm91Z2ggdG8gdGhlIFBvcG92ZXIgY2FyZC5cbiAgICAgKi9cbiAgICBzdGF0ZWxlc3NQcm9wczogUHJvcFR5cGVzLnNoYXBlKFBvcG92ZXJTdGF0ZWxlc3MucHJvcFR5cGVzKSxcblxuICAgIC8qKlxuICAgICAqIER1cmF0aW9uIG9mIHRoZSBhbmltYXRpb24uXG4gICAgICovXG4gICAgYW5pbWF0aW9uRHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgUG9wb3ZlciBvcGVucy5cbiAgICAgKi9cbiAgICBvbk9wZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBmaXJlZCB3aGVuIFBvcG92ZXIgY2xvc2VzLlxuICAgICAqL1xuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGVudGVyIHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAgICovXG4gICAgb25PcGVuQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGV4aXQgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBvbkNsb3NlQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGJvZHkgaXMgY2xpY2tlZC5cbiAgICAgKi9cbiAgICBvbkJvZHlDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgYnJpbmcgZm9jdXMgaW5zaWRlIG9mIHRoZSBQb3BvdmVyIG9uIG9wZW4uXG4gICAgICovXG4gICAgYnJpbmdGb2N1c0luc2lkZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBCb29sZWFuIGluZGljYXRpbmcgaWYgY2xpY2tpbmcgb3V0c2lkZSB0aGUgZGlhbG9nIHNob3VsZCBjbG9zZSB0aGUgZGlhbG9nLlxuICAgICAqL1xuICAgIHNob3VsZENsb3NlT25FeHRlcm5hbENsaWNrOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwb3NpdGlvbjogUG9zaXRpb24uQk9UVE9NLFxuICAgIG1pbldpZHRoOiAyMDAsXG4gICAgbWluSGVpZ2h0OiA0MCxcbiAgICBhbmltYXRpb25EdXJhdGlvbjogMzAwLFxuICAgIG9uT3BlbjogKCkgPT4ge30sXG4gICAgb25DbG9zZTogKCkgPT4ge30sXG4gICAgb25PcGVuQ29tcGxldGU6ICgpID0+IHt9LFxuICAgIG9uQ2xvc2VDb21wbGV0ZTogKCkgPT4ge30sXG4gICAgb25Cb2R5Q2xpY2s6ICgpID0+IHt9LFxuICAgIGJyaW5nRm9jdXNJbnNpZGU6IGZhbHNlLFxuICAgIHNob3VsZENsb3NlT25FeHRlcm5hbENsaWNrOiB0cnVlLFxuICAgIHRyaWdnZXI6ICdjbGljaydcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzU2hvd246IHByb3BzLmlzU2hvd25cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJvZHlDbGljaywgZmFsc2UpXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbkVzYywgZmFsc2UpXG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kcyBib3Jyb3dlZCBmcm9tIEJsdWVwcmludEpTXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wYWxhbnRpci9ibHVlcHJpbnQvYmxvYi9yZWxlYXNlLzIuMC4wL3BhY2thZ2VzL2NvcmUvc3JjL2NvbXBvbmVudHMvb3ZlcmxheS9vdmVybGF5LnRzeFxuICAgKi9cbiAgYnJpbmdGb2N1c0luc2lkZSA9ICgpID0+IHtcbiAgICAvLyBBbHdheXMgZGVsYXkgZm9jdXMgbWFuaXB1bGF0aW9uIHRvIGp1c3QgYmVmb3JlIHJlcGFpbnQgdG8gcHJldmVudCBzY3JvbGwganVtcGluZ1xuICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgLy8gQ29udGFpbmVyIHJlZiBtYXkgYmUgdW5kZWZpbmVkIGJldHdlZW4gY29tcG9uZW50IG1vdW50aW5nIGFuZCBQb3J0YWwgcmVuZGVyaW5nXG4gICAgICAvLyBhY3RpdmVFbGVtZW50IG1heSBiZSB1bmRlZmluZWQgaW4gc29tZSByYXJlIGNhc2VzIGluIElFXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMucG9wb3Zlck5vZGUgPT0gbnVsbCB8fCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcSwgbm8tZXEtbnVsbFxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09IG51bGwgfHwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICAgIXRoaXMuc3RhdGUuaXNTaG93blxuICAgICAgKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0ZvY3VzT3V0c2lkZU1vZGFsID0gIXRoaXMucG9wb3Zlck5vZGUuY29udGFpbnMoXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgIClcbiAgICAgIGlmIChpc0ZvY3VzT3V0c2lkZU1vZGFsKSB7XG4gICAgICAgIC8vIEVsZW1lbnQgbWFya2VkIGF1dG9mb2N1cyBoYXMgaGlnaGVyIHByaW9yaXR5IHRoYW4gdGhlIG90aGVyIGNsb3duc1xuICAgICAgICBjb25zdCBhdXRvZm9jdXNFbGVtZW50ID0gdGhpcy5wb3BvdmVyTm9kZS5xdWVyeVNlbGVjdG9yKCdbYXV0b2ZvY3VzXScpXG4gICAgICAgIGNvbnN0IHdyYXBwZXJFbGVtZW50ID0gdGhpcy5wb3BvdmVyTm9kZS5xdWVyeVNlbGVjdG9yKCdbdGFiaW5kZXhdJylcbiAgICAgICAgY29uc3QgYnV0dG9uRWxlbWVudHMgPSB0aGlzLnBvcG92ZXJOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgJ2J1dHRvbiwgYSwgW3JvbGU9XCJtZW51aXRlbVwiXSwgW3JvbGU9XCJtZW51aXRlbXJhZGlvXCJdJ1xuICAgICAgICApXG5cbiAgICAgICAgaWYgKGF1dG9mb2N1c0VsZW1lbnQpIHtcbiAgICAgICAgICBhdXRvZm9jdXNFbGVtZW50LmZvY3VzKClcbiAgICAgICAgfSBlbHNlIGlmICh3cmFwcGVyRWxlbWVudCkge1xuICAgICAgICAgIHdyYXBwZXJFbGVtZW50LmZvY3VzKClcbiAgICAgICAgfSBlbHNlIGlmIChidXR0b25FbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudHNbMF0uZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJyaW5nRm9jdXNCYWNrVG9UYXJnZXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMucG9wb3Zlck5vZGUgPT0gbnVsbCB8fCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcSwgbm8tZXEtbnVsbFxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09IG51bGwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNGb2N1c0luc2lkZU1vZGFsID0gdGhpcy5wb3BvdmVyTm9kZS5jb250YWlucyhcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgKVxuXG4gICAgICAvLyBCcmluZyBiYWNrIGZvY3VzIG9uIHRoZSB0YXJnZXQuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMudGFyZ2V0UmVmICYmXG4gICAgICAgIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5IHx8IGlzRm9jdXNJbnNpZGVNb2RhbClcbiAgICAgICkge1xuICAgICAgICB0aGlzLnRhcmdldFJlZi5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIG9uQm9keUNsaWNrID0gZSA9PiB7XG4gICAgLy8gSWdub3JlIGNsaWNrcyBvbiB0aGUgcG9wb3ZlciBvciBidXR0b25cbiAgICBpZiAodGhpcy50YXJnZXRSZWYgJiYgdGhpcy50YXJnZXRSZWYuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb3BvdmVyTm9kZSAmJiB0aGlzLnBvcG92ZXJOb2RlLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTm90aWZ5IGJvZHkgY2xpY2tcbiAgICB0aGlzLnByb3BzLm9uQm9keUNsaWNrKGUpXG5cbiAgICBpZiAodGhpcy5wcm9wcy5zaG91bGRDbG9zZU9uRXh0ZXJuYWxDbGljayA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2xvc2UoKVxuICB9XG5cbiAgb25Fc2MgPSBlID0+IHtcbiAgICAvLyBFc2Mga2V5XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIHRoaXMuY2xvc2UoKVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc1Nob3duKSB7XG4gICAgICB0aGlzLmNsb3NlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKClcbiAgICB9XG4gIH1cblxuICBvcGVuID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Nob3duOiB0cnVlIH0pXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Cb2R5Q2xpY2ssIGZhbHNlKVxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25Fc2MsIGZhbHNlKVxuXG4gICAgdGhpcy5wcm9wcy5vbk9wZW4oKVxuICB9XG5cbiAgY2xvc2UgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Nob3duOiBmYWxzZSB9KVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQm9keUNsaWNrLCBmYWxzZSlcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uRXNjLCBmYWxzZSlcblxuICAgIHRoaXMuYnJpbmdGb2N1c0JhY2tUb1RhcmdldCgpXG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlKClcbiAgfVxuXG4gIGhhbmRsZU9wZW5Db21wbGV0ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5icmluZ0ZvY3VzSW5zaWRlKSB0aGlzLmJyaW5nRm9jdXNJbnNpZGUoKVxuICAgIHRoaXMucHJvcHMub25PcGVuQ29tcGxldGUoKVxuICB9XG5cbiAgaGFuZGxlQ2xvc2VDb21wbGV0ZSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2xvc2VDb21wbGV0ZSgpXG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgdGhpcy5icmluZ0ZvY3VzSW5zaWRlKClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVPcGVuSG92ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMudHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgdGhpcy5vcGVuKClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbG9zZUhvdmVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnRyaWdnZXIgPT09ICdob3ZlcicpIHtcbiAgICAgIHRoaXMuY2xvc2UoKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlclRhcmdldCA9ICh7IGdldFJlZiwgaXNTaG93biB9KSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGlzVG9vbHRpcEluc2lkZSA9IGNoaWxkcmVuICYmIGNoaWxkcmVuLnR5cGUgPT09IFRvb2x0aXBcblxuICAgIGNvbnN0IGdldFRhcmdldFJlZiA9IHJlZiA9PiB7XG4gICAgICB0aGlzLnRhcmdldFJlZiA9IHJlZlxuICAgICAgZ2V0UmVmKHJlZilcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGEgZnVuY3Rpb24gaXMgcGFzc2VkLCB5b3UgY2FuIGNvbnRyb2wgdGhlIFBvcG92ZXIgbWFudWFsbHkuXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKHtcbiAgICAgICAgdG9nZ2xlOiB0aGlzLnRvZ2dsZSxcbiAgICAgICAgZ2V0UmVmOiBnZXRUYXJnZXRSZWYsXG4gICAgICAgIGlzU2hvd25cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgcG9wb3ZlclRhcmdldFByb3BzID0ge1xuICAgICAgb25DbGljazogdGhpcy50b2dnbGUsXG4gICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaGFuZGxlT3BlbkhvdmVyLFxuICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICByb2xlOiAnYnV0dG9uJyxcbiAgICAgICdhcmlhLWV4cGFuZGVkJzogaXNTaG93bixcbiAgICAgICdhcmlhLWhhc3BvcHVwJzogdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvb2x0aXBzIGNhbiBiZSB1c2VkIHdpdGhpbiBhIFBvcG92ZXIgKG5vdCB0aGUgb3RoZXIgd2F5IGFyb3VuZClcbiAgICAgKiBJbiB0aGlzIGNhc2UgdGhlIGNoaWxkcmVuIGlzIHRoZSBUb29sdGlwIGluc3RlYWQgb2YgYSBidXR0b24uXG4gICAgICogUGFzcyB0aGUgcHJvcGVydGllcyB0byB0aGUgVG9vbHRpcCBhbmQgbGV0IHRoZSBUb29sdGlwXG4gICAgICogYWRkIHRoZSBwcm9wZXJ0aWVzIHRvIHRoZSB0YXJnZXQuXG4gICAgICovXG4gICAgaWYgKGlzVG9vbHRpcEluc2lkZSkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcbiAgICAgICAgICBnZXRUYXJnZXRSZWYsXG4gICAgICAgICAgaXNTaG93bixcblxuICAgICAgICAgIC8vIFRoZXNlIHByb3BldGllcyB3aWxsIGJlIHNwcmVhZCBhcyBgcG9wb3ZlclRhcmdldFByb3BzYFxuICAgICAgICAgIC8vIGluIHRoZSBUb29sdGlwIGNvbXBvbmVudC5cbiAgICAgICAgICAuLi5wb3BvdmVyVGFyZ2V0UHJvcHNcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaXRoIG5vcm1hbCB1c2FnZSBvbmx5IHBvcG92ZXIgcHJvcHMgZW5kIHVwIG9uIHRoZSB0YXJnZXQuXG4gICAgICovXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgaW5uZXJSZWY6IGdldFRhcmdldFJlZixcbiAgICAgIC4uLnBvcG92ZXJUYXJnZXRQcm9wc1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNTaG93bixcbiAgICAgIGNvbnRlbnQsXG4gICAgICBkaXNwbGF5LFxuICAgICAgbWluV2lkdGgsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIG1pbkhlaWdodCxcbiAgICAgIHN0YXRlbGVzc1Byb3BzID0ge30sXG4gICAgICBhbmltYXRpb25EdXJhdGlvbixcbiAgICAgIG9uQ2xvc2VDb21wbGV0ZVxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBpc1Nob3duOiBzdGF0ZUlzU2hvd24gfSA9IHRoaXMuc3RhdGVcblxuICAgIC8vIElmIGBpc1Nob3duYCBpcyBhIGJvb2xlYW4sIHBvcG92ZXIgaXMgY29udHJvbGxlZCBtYW51YWxseSwgbm90IHZpYSBtb3VzZSBldmVudHNcbiAgICBjb25zdCBzaG93biA9IHR5cGVvZiBpc1Nob3duID09PSAnYm9vbGVhbicgPyBpc1Nob3duIDogc3RhdGVJc1Nob3duXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvc2l0aW9uZXJcbiAgICAgICAgdGFyZ2V0PXsoeyBnZXRSZWYsIGlzU2hvd24sIHRhcmdldFdpZHRoIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUYXJnZXQoeyBnZXRSZWYsIGlzU2hvd24sIHRhcmdldFdpZHRoIH0pXG4gICAgICAgIH19XG4gICAgICAgIGlzU2hvd249e3Nob3dufVxuICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uPXthbmltYXRpb25EdXJhdGlvbn1cbiAgICAgICAgb25PcGVuQ29tcGxldGU9e3RoaXMuaGFuZGxlT3BlbkNvbXBsZXRlfVxuICAgICAgICBvbkNsb3NlQ29tcGxldGU9e29uQ2xvc2VDb21wbGV0ZX1cbiAgICAgID5cbiAgICAgICAgeyh7IGNzcywgc3R5bGUsIHN0YXRlLCBnZXRSZWYgfSkgPT4gKFxuICAgICAgICAgIDxQb3BvdmVyU3RhdGVsZXNzXG4gICAgICAgICAgICBpbm5lclJlZj17cmVmID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wb3BvdmVyTm9kZSA9IHJlZlxuICAgICAgICAgICAgICBnZXRSZWYocmVmKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgICAgZGlzcGxheT17ZGlzcGxheX1cbiAgICAgICAgICAgIG1pbldpZHRoPXttaW5XaWR0aH1cbiAgICAgICAgICAgIG1pbkhlaWdodD17bWluSGVpZ2h0fVxuICAgICAgICAgICAgey4uLnN0YXRlbGVzc1Byb3BzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgICAgICAgc3RhdGVsZXNzUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBjc3MgPyBnbGFtb3JDc3MoY3NzKS50b1N0cmluZygpIDogdW5kZWZpbmVkXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAgICBzdGF0ZWxlc3NQcm9wcyAmJiBzdGF0ZWxlc3NQcm9wcy5zdHlsZVxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGVsZXNzUHJvcHMuc3R5bGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IHN0eWxlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlQ2xvc2VIb3Zlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgPyBjb250ZW50KHsgY2xvc2U6IHRoaXMuY2xvc2UgfSlcbiAgICAgICAgICAgICAgOiBjb250ZW50fVxuICAgICAgICAgIDwvUG9wb3ZlclN0YXRlbGVzcz5cbiAgICAgICAgKX1cbiAgICAgIDwvUG9zaXRpb25lcj5cbiAgICApXG4gIH1cbn1cbiJdfQ==