import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import cx from 'classnames';
import { css as glamorCss } from 'glamor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Positioner } from '../../positioner';
import { Tooltip } from '../../tooltip';
import { Position } from '../../constants';
import PopoverStateless from './PopoverStateless';

var Popover =
/*#__PURE__*/
function (_Component) {
  _inherits(Popover, _Component);

  function Popover(props) {
    var _this;

    _classCallCheck(this, Popover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popover).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "bringFocusInside", function () {
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

    _defineProperty(_assertThisInitialized(_this), "bringFocusBackToTarget", function () {
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

    _defineProperty(_assertThisInitialized(_this), "onBodyClick", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "onEsc", function (e) {
      // Esc key
      if (e.keyCode === 27) {
        _this.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      if (_this.state.isShown) {
        _this.close();
      } else {
        _this.open();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "open", function () {
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

    _defineProperty(_assertThisInitialized(_this), "close", function () {
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

    _defineProperty(_assertThisInitialized(_this), "handleOpenComplete", function () {
      if (_this.props.bringFocusInside) _this.bringFocusInside();

      _this.props.onOpenComplete();
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseComplete", function () {
      _this.props.onCloseComplete();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      if (e.key === 'ArrowDown') {
        _this.bringFocusInside();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpenHover", function () {
      if (_this.props.trigger === 'hover') {
        _this.open();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseHover", function () {
      if (_this.props.trigger === 'hover') {
        _this.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderTarget", function (_ref) {
      var getRef = _ref.getRef,
          isShown = _ref.isShown;
      var children = _this.props.children;
      var isTooltipInside = children && children.type === Tooltip;

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
        return React.cloneElement(children, {
          popoverProps: _objectSpread({
            getTargetRef: getTargetRef,
            isShown: isShown
          }, popoverTargetProps)
        });
      }
      /**
       * With normal usage only popover props end up on the target.
       */


      return React.cloneElement(children, _objectSpread({
        innerRef: getTargetRef
      }, popoverTargetProps));
    });

    _this.state = {
      isShown: props.isShown
    };
    return _this;
  }

  _createClass(Popover, [{
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
      return React.createElement(Positioner, {
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
        return React.createElement(PopoverStateless, _extends({
          innerRef: function innerRef(ref) {
            _this2.popoverNode = ref;
            getRef(ref);
          },
          "data-state": state,
          display: display,
          minWidth: minWidth,
          minHeight: minHeight
        }, statelessProps, {
          className: cx(statelessProps.className, css ? glamorCss(css).toString() : undefined),
          style: statelessProps && statelessProps.style ? _objectSpread({}, style, statelessProps.style) : style,
          onMouseLeave: _this2.handleCloseHover
        }), typeof content === 'function' ? content({
          close: _this2.close
        }) : content);
      });
    }
  }]);

  return Popover;
}(Component);

Popover.displayName = "Popover";

_defineProperty(Popover, "propTypes", {
  /**
   * The position the Popover is on. Smart positioning might override this.
   */
  position: PropTypes.oneOf([Position.TOP, Position.TOP_LEFT, Position.TOP_RIGHT, Position.BOTTOM, Position.BOTTOM_LEFT, Position.BOTTOM_RIGHT, Position.LEFT, Position.RIGHT]),

  /**
   * When true, the Popover is manually shown.
   */
  isShown: PropTypes.bool,

  /**
   * Open the Popover based on click or hover. Default is click.
   */
  trigger: PropTypes.oneOf(['click', 'hover']),

  /**
   * The content of the Popover.
   */
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * The target button of the Popover.
   * When a function the following arguments are passed:
   * ({ toggle: Function -> Void, getRef: Function -> Ref, isShown: Bool })
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,

  /**
   * The display property passed to the Popover card.
   */
  display: PropTypes.string,

  /**
   * The min width of the Popover card.
   */
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * The min height of the Popover card.
   */
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Properties passed through to the Popover card.
   */
  statelessProps: PropTypes.shape(PopoverStateless.propTypes),

  /**
   * Duration of the animation.
   */
  animationDuration: PropTypes.number,

  /**
   * Function called when the Popover opens.
   */
  onOpen: PropTypes.func.isRequired,

  /**
   * Function fired when Popover closes.
   */
  onClose: PropTypes.func.isRequired,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func.isRequired,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func.isRequired,

  /**
   * Function that will be called when the body is clicked.
   */
  onBodyClick: PropTypes.func.isRequired,

  /**
   * When true, bring focus inside of the Popover on open.
   */
  bringFocusInside: PropTypes.bool,

  /**
   * Boolean indicating if clicking outside the dialog should close the dialog.
   */
  shouldCloseOnExternalClick: PropTypes.bool
});

_defineProperty(Popover, "defaultProps", {
  position: Position.BOTTOM,
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

export { Popover as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL3NyYy9Qb3BvdmVyLmpzIl0sIm5hbWVzIjpbImN4IiwiY3NzIiwiZ2xhbW9yQ3NzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJQb3NpdGlvbmVyIiwiVG9vbHRpcCIsIlBvc2l0aW9uIiwiUG9wb3ZlclN0YXRlbGVzcyIsIlBvcG92ZXIiLCJwcm9wcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBvcG92ZXJOb2RlIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50Iiwic3RhdGUiLCJpc1Nob3duIiwiaXNGb2N1c091dHNpZGVNb2RhbCIsImNvbnRhaW5zIiwiYXV0b2ZvY3VzRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3cmFwcGVyRWxlbWVudCIsImJ1dHRvbkVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvY3VzIiwibGVuZ3RoIiwiaXNGb2N1c0luc2lkZU1vZGFsIiwidGFyZ2V0UmVmIiwiYm9keSIsImUiLCJ0YXJnZXQiLCJvbkJvZHlDbGljayIsInNob3VsZENsb3NlT25FeHRlcm5hbENsaWNrIiwiY2xvc2UiLCJrZXlDb2RlIiwib3BlbiIsInNldFN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRXNjIiwib25PcGVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJyaW5nRm9jdXNCYWNrVG9UYXJnZXQiLCJvbkNsb3NlIiwiYnJpbmdGb2N1c0luc2lkZSIsIm9uT3BlbkNvbXBsZXRlIiwib25DbG9zZUNvbXBsZXRlIiwia2V5IiwidHJpZ2dlciIsImdldFJlZiIsImNoaWxkcmVuIiwiaXNUb29sdGlwSW5zaWRlIiwidHlwZSIsImdldFRhcmdldFJlZiIsInJlZiIsInRvZ2dsZSIsInBvcG92ZXJUYXJnZXRQcm9wcyIsIm9uQ2xpY2siLCJvbk1vdXNlRW50ZXIiLCJoYW5kbGVPcGVuSG92ZXIiLCJvbktleURvd24iLCJoYW5kbGVLZXlEb3duIiwicm9sZSIsImNsb25lRWxlbWVudCIsInBvcG92ZXJQcm9wcyIsImlubmVyUmVmIiwiY29udGVudCIsImRpc3BsYXkiLCJtaW5XaWR0aCIsInBvc2l0aW9uIiwibWluSGVpZ2h0Iiwic3RhdGVsZXNzUHJvcHMiLCJhbmltYXRpb25EdXJhdGlvbiIsInN0YXRlSXNTaG93biIsInNob3duIiwidGFyZ2V0V2lkdGgiLCJyZW5kZXJUYXJnZXQiLCJoYW5kbGVPcGVuQ29tcGxldGUiLCJzdHlsZSIsImNsYXNzTmFtZSIsInRvU3RyaW5nIiwidW5kZWZpbmVkIiwiaGFuZGxlQ2xvc2VIb3ZlciIsIm9uZU9mIiwiVE9QIiwiVE9QX0xFRlQiLCJUT1BfUklHSFQiLCJCT1RUT00iLCJCT1RUT01fTEVGVCIsIkJPVFRPTV9SSUdIVCIsIkxFRlQiLCJSSUdIVCIsImJvb2wiLCJvbmVPZlR5cGUiLCJub2RlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJlbGVtZW50Iiwic3RyaW5nIiwibnVtYmVyIiwic2hhcGUiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU9BLEVBQVAsTUFBZSxZQUFmO0FBQ0EsU0FBU0MsR0FBRyxJQUFJQyxTQUFoQixRQUFpQyxRQUFqQztBQUNBLE9BQU9DLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFVBQVQsUUFBMkIsa0JBQTNCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixlQUF4QjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsaUJBQXpCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsb0JBQTdCOztJQUVxQkMsTzs7Ozs7QUFrSG5CLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLGlGQUFNQSxLQUFOOztBQURpQix1RUFnQkEsWUFBTTtBQUN2QjtBQUNBLGFBQU9DLHFCQUFxQixDQUFDLFlBQU07QUFDakM7QUFDQTtBQUNBLFlBQ0UsTUFBS0MsV0FBTCxJQUFvQixJQUFwQixJQUE0QjtBQUM1QkMsUUFBQUEsUUFB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RmpCOzs7QUFHQXBELEVBQUFBLGdCQUFnQixFQUFFdkMsU0FBUyxDQUFDdUYsSUExRlg7O0FBNEZqQjs7O0FBR0EzRCxFQUFBQSwwQkFBMEIsRUFBRTVCLFNBQVMsQ0FBQ3VGO0FBL0ZyQixDOztnQkFEQWxGLE8sa0JBbUdHO0FBQ3BCMkQsRUFBQUEsUUFBUSxFQUFFN0QsUUFBUSxDQUFDK0UsTUFEQztBQUVwQm5CLEVBQUFBLFFBQVEsRUFBRSxHQUZVO0FBR3BCRSxFQUFBQSxTQUFTLEVBQUUsRUFIUztBQUlwQkUsRUFBQUEsaUJBQWlCLEVBQUUsR0FKQztBQUtwQmhDLEVBQUFBLE1BQU0sRUFBRSxrQkFBTSxDQUFFLENBTEk7QUFNcEJHLEVBQUFBLE9BQU8sRUFBRSxtQkFBTSxDQUFFLENBTkc7QUFPcEJFLEVBQUFBLGNBQWMsRUFBRSwwQkFBTSxDQUFFLENBUEo7QUFRcEJDLEVBQUFBLGVBQWUsRUFBRSwyQkFBTSxDQUFFLENBUkw7QUFTcEJkLEVBQUFBLFdBQVcsRUFBRSx1QkFBTSxDQUFFLENBVEQ7QUFVcEJZLEVBQUFBLGdCQUFnQixFQUFFLEtBVkU7QUFXcEJYLEVBQUFBLDBCQUEwQixFQUFFLElBWFI7QUFZcEJlLEVBQUFBLE9BQU8sRUFBRTtBQVpXLEM7O1NBbkdIdEMsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgY3NzIGFzIGdsYW1vckNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBvc2l0aW9uZXIgfSBmcm9tICcuLi8uLi9wb3NpdGlvbmVyJ1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJy4uLy4uL3Rvb2x0aXAnXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBQb3BvdmVyU3RhdGVsZXNzIGZyb20gJy4vUG9wb3ZlclN0YXRlbGVzcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wb3ZlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIHBvc2l0aW9uIHRoZSBQb3BvdmVyIGlzIG9uLiBTbWFydCBwb3NpdGlvbmluZyBtaWdodCBvdmVycmlkZSB0aGlzLlxuICAgICAqL1xuICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgUG9zaXRpb24uVE9QLFxuICAgICAgUG9zaXRpb24uVE9QX0xFRlQsXG4gICAgICBQb3NpdGlvbi5UT1BfUklHSFQsXG4gICAgICBQb3NpdGlvbi5CT1RUT00sXG4gICAgICBQb3NpdGlvbi5CT1RUT01fTEVGVCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTV9SSUdIVCxcbiAgICAgIFBvc2l0aW9uLkxFRlQsXG4gICAgICBQb3NpdGlvbi5SSUdIVFxuICAgIF0pLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgUG9wb3ZlciBpcyBtYW51YWxseSBzaG93bi5cbiAgICAgKi9cbiAgICBpc1Nob3duOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiBPcGVuIHRoZSBQb3BvdmVyIGJhc2VkIG9uIGNsaWNrIG9yIGhvdmVyLiBEZWZhdWx0IGlzIGNsaWNrLlxuICAgICAqL1xuICAgIHRyaWdnZXI6IFByb3BUeXBlcy5vbmVPZihbJ2NsaWNrJywgJ2hvdmVyJ10pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRlbnQgb2YgdGhlIFBvcG92ZXIuXG4gICAgICovXG4gICAgY29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5mdW5jXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgYnV0dG9uIG9mIHRoZSBQb3BvdmVyLlxuICAgICAqIFdoZW4gYSBmdW5jdGlvbiB0aGUgZm9sbG93aW5nIGFyZ3VtZW50cyBhcmUgcGFzc2VkOlxuICAgICAqICh7IHRvZ2dsZTogRnVuY3Rpb24gLT4gVm9pZCwgZ2V0UmVmOiBGdW5jdGlvbiAtPiBSZWYsIGlzU2hvd246IEJvb2wgfSlcbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5mdW5jXSlcbiAgICAgIC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3BsYXkgcHJvcGVydHkgcGFzc2VkIHRvIHRoZSBQb3BvdmVyIGNhcmQuXG4gICAgICovXG4gICAgZGlzcGxheTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW4gd2lkdGggb2YgdGhlIFBvcG92ZXIgY2FyZC5cbiAgICAgKi9cbiAgICBtaW5XaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1pbiBoZWlnaHQgb2YgdGhlIFBvcG92ZXIgY2FyZC5cbiAgICAgKi9cbiAgICBtaW5IZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnRpZXMgcGFzc2VkIHRocm91Z2ggdG8gdGhlIFBvcG92ZXIgY2FyZC5cbiAgICAgKi9cbiAgICBzdGF0ZWxlc3NQcm9wczogUHJvcFR5cGVzLnNoYXBlKFBvcG92ZXJTdGF0ZWxlc3MucHJvcFR5cGVzKSxcblxuICAgIC8qKlxuICAgICAqIER1cmF0aW9uIG9mIHRoZSBhbmltYXRpb24uXG4gICAgICovXG4gICAgYW5pbWF0aW9uRHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgUG9wb3ZlciBvcGVucy5cbiAgICAgKi9cbiAgICBvbk9wZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBmaXJlZCB3aGVuIFBvcG92ZXIgY2xvc2VzLlxuICAgICAqL1xuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGVudGVyIHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAgICovXG4gICAgb25PcGVuQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGV4aXQgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBvbkNsb3NlQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGJvZHkgaXMgY2xpY2tlZC5cbiAgICAgKi9cbiAgICBvbkJvZHlDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgYnJpbmcgZm9jdXMgaW5zaWRlIG9mIHRoZSBQb3BvdmVyIG9uIG9wZW4uXG4gICAgICovXG4gICAgYnJpbmdGb2N1c0luc2lkZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBCb29sZWFuIGluZGljYXRpbmcgaWYgY2xpY2tpbmcgb3V0c2lkZSB0aGUgZGlhbG9nIHNob3VsZCBjbG9zZSB0aGUgZGlhbG9nLlxuICAgICAqL1xuICAgIHNob3VsZENsb3NlT25FeHRlcm5hbENsaWNrOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwb3NpdGlvbjogUG9zaXRpb24uQk9UVE9NLFxuICAgIG1pbldpZHRoOiAyMDAsXG4gICAgbWluSGVpZ2h0OiA0MCxcbiAgICBhbmltYXRpb25EdXJhdGlvbjogMzAwLFxuICAgIG9uT3BlbjogKCkgPT4ge30sXG4gICAgb25DbG9zZTogKCkgPT4ge30sXG4gICAgb25PcGVuQ29tcGxldGU6ICgpID0+IHt9LFxuICAgIG9uQ2xvc2VDb21wbGV0ZTogKCkgPT4ge30sXG4gICAgb25Cb2R5Q2xpY2s6ICgpID0+IHt9LFxuICAgIGJyaW5nRm9jdXNJbnNpZGU6IGZhbHNlLFxuICAgIHNob3VsZENsb3NlT25FeHRlcm5hbENsaWNrOiB0cnVlLFxuICAgIHRyaWdnZXI6ICdjbGljaydcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzU2hvd246IHByb3BzLmlzU2hvd25cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJvZHlDbGljaywgZmFsc2UpXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbkVzYywgZmFsc2UpXG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kcyBib3Jyb3dlZCBmcm9tIEJsdWVwcmludEpTXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wYWxhbnRpci9ibHVlcHJpbnQvYmxvYi9yZWxlYXNlLzIuMC4wL3BhY2thZ2VzL2NvcmUvc3JjL2NvbXBvbmVudHMvb3ZlcmxheS9vdmVybGF5LnRzeFxuICAgKi9cbiAgYnJpbmdGb2N1c0luc2lkZSA9ICgpID0+IHtcbiAgICAvLyBBbHdheXMgZGVsYXkgZm9jdXMgbWFuaXB1bGF0aW9uIHRvIGp1c3QgYmVmb3JlIHJlcGFpbnQgdG8gcHJldmVudCBzY3JvbGwganVtcGluZ1xuICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgLy8gQ29udGFpbmVyIHJlZiBtYXkgYmUgdW5kZWZpbmVkIGJldHdlZW4gY29tcG9uZW50IG1vdW50aW5nIGFuZCBQb3J0YWwgcmVuZGVyaW5nXG4gICAgICAvLyBhY3RpdmVFbGVtZW50IG1heSBiZSB1bmRlZmluZWQgaW4gc29tZSByYXJlIGNhc2VzIGluIElFXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMucG9wb3Zlck5vZGUgPT0gbnVsbCB8fCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcSwgbm8tZXEtbnVsbFxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09IG51bGwgfHwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICAgIXRoaXMuc3RhdGUuaXNTaG93blxuICAgICAgKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0ZvY3VzT3V0c2lkZU1vZGFsID0gIXRoaXMucG9wb3Zlck5vZGUuY29udGFpbnMoXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgIClcbiAgICAgIGlmIChpc0ZvY3VzT3V0c2lkZU1vZGFsKSB7XG4gICAgICAgIC8vIEVsZW1lbnQgbWFya2VkIGF1dG9mb2N1cyBoYXMgaGlnaGVyIHByaW9yaXR5IHRoYW4gdGhlIG90aGVyIGNsb3duc1xuICAgICAgICBjb25zdCBhdXRvZm9jdXNFbGVtZW50ID0gdGhpcy5wb3BvdmVyTm9kZS5xdWVyeVNlbGVjdG9yKCdbYXV0b2ZvY3VzXScpXG4gICAgICAgIGNvbnN0IHdyYXBwZXJFbGVtZW50ID0gdGhpcy5wb3BvdmVyTm9kZS5xdWVyeVNlbGVjdG9yKCdbdGFiaW5kZXhdJylcbiAgICAgICAgY29uc3QgYnV0dG9uRWxlbWVudHMgPSB0aGlzLnBvcG92ZXJOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgJ2J1dHRvbiwgYSwgW3JvbGU9XCJtZW51aXRlbVwiXSwgW3JvbGU9XCJtZW51aXRlbXJhZGlvXCJdJ1xuICAgICAgICApXG5cbiAgICAgICAgaWYgKGF1dG9mb2N1c0VsZW1lbnQpIHtcbiAgICAgICAgICBhdXRvZm9jdXNFbGVtZW50LmZvY3VzKClcbiAgICAgICAgfSBlbHNlIGlmICh3cmFwcGVyRWxlbWVudCkge1xuICAgICAgICAgIHdyYXBwZXJFbGVtZW50LmZvY3VzKClcbiAgICAgICAgfSBlbHNlIGlmIChidXR0b25FbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudHNbMF0uZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJyaW5nRm9jdXNCYWNrVG9UYXJnZXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMucG9wb3Zlck5vZGUgPT0gbnVsbCB8fCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcSwgbm8tZXEtbnVsbFxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09IG51bGwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNGb2N1c0luc2lkZU1vZGFsID0gdGhpcy5wb3BvdmVyTm9kZS5jb250YWlucyhcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgKVxuXG4gICAgICAvLyBCcmluZyBiYWNrIGZvY3VzIG9uIHRoZSB0YXJnZXQuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMudGFyZ2V0UmVmICYmXG4gICAgICAgIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5IHx8IGlzRm9jdXNJbnNpZGVNb2RhbClcbiAgICAgICkge1xuICAgICAgICB0aGlzLnRhcmdldFJlZi5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIG9uQm9keUNsaWNrID0gZSA9PiB7XG4gICAgLy8gSWdub3JlIGNsaWNrcyBvbiB0aGUgcG9wb3ZlciBvciBidXR0b25cbiAgICBpZiAodGhpcy50YXJnZXRSZWYgJiYgdGhpcy50YXJnZXRSZWYuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb3BvdmVyTm9kZSAmJiB0aGlzLnBvcG92ZXJOb2RlLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTm90aWZ5IGJvZHkgY2xpY2tcbiAgICB0aGlzLnByb3BzLm9uQm9keUNsaWNrKGUpXG5cbiAgICBpZiAodGhpcy5wcm9wcy5zaG91bGRDbG9zZU9uRXh0ZXJuYWxDbGljayA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2xvc2UoKVxuICB9XG5cbiAgb25Fc2MgPSBlID0+IHtcbiAgICAvLyBFc2Mga2V5XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIHRoaXMuY2xvc2UoKVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc1Nob3duKSB7XG4gICAgICB0aGlzLmNsb3NlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKClcbiAgICB9XG4gIH1cblxuICBvcGVuID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Nob3duOiB0cnVlIH0pXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Cb2R5Q2xpY2ssIGZhbHNlKVxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25Fc2MsIGZhbHNlKVxuXG4gICAgdGhpcy5wcm9wcy5vbk9wZW4oKVxuICB9XG5cbiAgY2xvc2UgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Nob3duOiBmYWxzZSB9KVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQm9keUNsaWNrLCBmYWxzZSlcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uRXNjLCBmYWxzZSlcblxuICAgIHRoaXMuYnJpbmdGb2N1c0JhY2tUb1RhcmdldCgpXG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlKClcbiAgfVxuXG4gIGhhbmRsZU9wZW5Db21wbGV0ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5icmluZ0ZvY3VzSW5zaWRlKSB0aGlzLmJyaW5nRm9jdXNJbnNpZGUoKVxuICAgIHRoaXMucHJvcHMub25PcGVuQ29tcGxldGUoKVxuICB9XG5cbiAgaGFuZGxlQ2xvc2VDb21wbGV0ZSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2xvc2VDb21wbGV0ZSgpXG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgdGhpcy5icmluZ0ZvY3VzSW5zaWRlKClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVPcGVuSG92ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMudHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgdGhpcy5vcGVuKClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbG9zZUhvdmVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnRyaWdnZXIgPT09ICdob3ZlcicpIHtcbiAgICAgIHRoaXMuY2xvc2UoKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlclRhcmdldCA9ICh7IGdldFJlZiwgaXNTaG93biB9KSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGlzVG9vbHRpcEluc2lkZSA9IGNoaWxkcmVuICYmIGNoaWxkcmVuLnR5cGUgPT09IFRvb2x0aXBcblxuICAgIGNvbnN0IGdldFRhcmdldFJlZiA9IHJlZiA9PiB7XG4gICAgICB0aGlzLnRhcmdldFJlZiA9IHJlZlxuICAgICAgZ2V0UmVmKHJlZilcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGEgZnVuY3Rpb24gaXMgcGFzc2VkLCB5b3UgY2FuIGNvbnRyb2wgdGhlIFBvcG92ZXIgbWFudWFsbHkuXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKHtcbiAgICAgICAgdG9nZ2xlOiB0aGlzLnRvZ2dsZSxcbiAgICAgICAgZ2V0UmVmOiBnZXRUYXJnZXRSZWYsXG4gICAgICAgIGlzU2hvd25cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgcG9wb3ZlclRhcmdldFByb3BzID0ge1xuICAgICAgb25DbGljazogdGhpcy50b2dnbGUsXG4gICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaGFuZGxlT3BlbkhvdmVyLFxuICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICByb2xlOiAnYnV0dG9uJyxcbiAgICAgICdhcmlhLWV4cGFuZGVkJzogaXNTaG93bixcbiAgICAgICdhcmlhLWhhc3BvcHVwJzogdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvb2x0aXBzIGNhbiBiZSB1c2VkIHdpdGhpbiBhIFBvcG92ZXIgKG5vdCB0aGUgb3RoZXIgd2F5IGFyb3VuZClcbiAgICAgKiBJbiB0aGlzIGNhc2UgdGhlIGNoaWxkcmVuIGlzIHRoZSBUb29sdGlwIGluc3RlYWQgb2YgYSBidXR0b24uXG4gICAgICogUGFzcyB0aGUgcHJvcGVydGllcyB0byB0aGUgVG9vbHRpcCBhbmQgbGV0IHRoZSBUb29sdGlwXG4gICAgICogYWRkIHRoZSBwcm9wZXJ0aWVzIHRvIHRoZSB0YXJnZXQuXG4gICAgICovXG4gICAgaWYgKGlzVG9vbHRpcEluc2lkZSkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcbiAgICAgICAgICBnZXRUYXJnZXRSZWYsXG4gICAgICAgICAgaXNTaG93bixcblxuICAgICAgICAgIC8vIFRoZXNlIHByb3BldGllcyB3aWxsIGJlIHNwcmVhZCBhcyBgcG9wb3ZlclRhcmdldFByb3BzYFxuICAgICAgICAgIC8vIGluIHRoZSBUb29sdGlwIGNvbXBvbmVudC5cbiAgICAgICAgICAuLi5wb3BvdmVyVGFyZ2V0UHJvcHNcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaXRoIG5vcm1hbCB1c2FnZSBvbmx5IHBvcG92ZXIgcHJvcHMgZW5kIHVwIG9uIHRoZSB0YXJnZXQuXG4gICAgICovXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgaW5uZXJSZWY6IGdldFRhcmdldFJlZixcbiAgICAgIC4uLnBvcG92ZXJUYXJnZXRQcm9wc1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNTaG93bixcbiAgICAgIGNvbnRlbnQsXG4gICAgICBkaXNwbGF5LFxuICAgICAgbWluV2lkdGgsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIG1pbkhlaWdodCxcbiAgICAgIHN0YXRlbGVzc1Byb3BzID0ge30sXG4gICAgICBhbmltYXRpb25EdXJhdGlvbixcbiAgICAgIG9uQ2xvc2VDb21wbGV0ZVxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBpc1Nob3duOiBzdGF0ZUlzU2hvd24gfSA9IHRoaXMuc3RhdGVcblxuICAgIC8vIElmIGBpc1Nob3duYCBpcyBhIGJvb2xlYW4sIHBvcG92ZXIgaXMgY29udHJvbGxlZCBtYW51YWxseSwgbm90IHZpYSBtb3VzZSBldmVudHNcbiAgICBjb25zdCBzaG93biA9IHR5cGVvZiBpc1Nob3duID09PSAnYm9vbGVhbicgPyBpc1Nob3duIDogc3RhdGVJc1Nob3duXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvc2l0aW9uZXJcbiAgICAgICAgdGFyZ2V0PXsoeyBnZXRSZWYsIGlzU2hvd24sIHRhcmdldFdpZHRoIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUYXJnZXQoeyBnZXRSZWYsIGlzU2hvd24sIHRhcmdldFdpZHRoIH0pXG4gICAgICAgIH19XG4gICAgICAgIGlzU2hvd249e3Nob3dufVxuICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uPXthbmltYXRpb25EdXJhdGlvbn1cbiAgICAgICAgb25PcGVuQ29tcGxldGU9e3RoaXMuaGFuZGxlT3BlbkNvbXBsZXRlfVxuICAgICAgICBvbkNsb3NlQ29tcGxldGU9e29uQ2xvc2VDb21wbGV0ZX1cbiAgICAgID5cbiAgICAgICAgeyh7IGNzcywgc3R5bGUsIHN0YXRlLCBnZXRSZWYgfSkgPT4gKFxuICAgICAgICAgIDxQb3BvdmVyU3RhdGVsZXNzXG4gICAgICAgICAgICBpbm5lclJlZj17cmVmID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wb3BvdmVyTm9kZSA9IHJlZlxuICAgICAgICAgICAgICBnZXRSZWYocmVmKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgICAgZGlzcGxheT17ZGlzcGxheX1cbiAgICAgICAgICAgIG1pbldpZHRoPXttaW5XaWR0aH1cbiAgICAgICAgICAgIG1pbkhlaWdodD17bWluSGVpZ2h0fVxuICAgICAgICAgICAgey4uLnN0YXRlbGVzc1Byb3BzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgICAgICAgc3RhdGVsZXNzUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBjc3MgPyBnbGFtb3JDc3MoY3NzKS50b1N0cmluZygpIDogdW5kZWZpbmVkXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAgICBzdGF0ZWxlc3NQcm9wcyAmJiBzdGF0ZWxlc3NQcm9wcy5zdHlsZVxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGVsZXNzUHJvcHMuc3R5bGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IHN0eWxlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlQ2xvc2VIb3Zlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgPyBjb250ZW50KHsgY2xvc2U6IHRoaXMuY2xvc2UgfSlcbiAgICAgICAgICAgICAgOiBjb250ZW50fVxuICAgICAgICAgIDwvUG9wb3ZlclN0YXRlbGVzcz5cbiAgICAgICAgKX1cbiAgICAgIDwvUG9zaXRpb25lcj5cbiAgICApXG4gIH1cbn1cbiJdfQ==