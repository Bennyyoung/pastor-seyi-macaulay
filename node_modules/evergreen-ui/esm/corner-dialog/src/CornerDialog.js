import _extends from "@babel/runtime/helpers/esm/extends";
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
import Transition from 'react-transition-group/Transition';
import { Pane, Card } from '../../layers';
import { Portal } from '../../portal';
import { Paragraph, Heading } from '../../typography';
import { Button, IconButton } from '../../buttons';
import absolutePositions from '../../constants/src/AbsolutePosition';
import positions from '../../constants/src/Position';
var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var ANIMATION_DURATION = 240;
var openAnimation = css.keyframes('openAnimation', {
  from: {
    transform: 'translateY(100%)'
  },
  to: {
    transform: 'translateY(0)'
  }
});
var closeAnimation = css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.9)',
    opacity: 0
  }
});
var animationStyles = {
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: "".concat(openAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.spring, " both")
  },
  '&[data-state="exiting"]': {
    animation: "".concat(closeAnimation, " 120ms ").concat(animationEasing.acceleration, " both")
  }
};

var CornerDialog =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CornerDialog, _PureComponent);

  function CornerDialog(props) {
    var _this;

    _classCallCheck(this, CornerDialog);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CornerDialog).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleExited", function () {
      _this.setState({
        exiting: false,
        exited: true
      });

      _this.props.onCloseComplete();
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      _this.props.onCancel(_this.handleClose);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        exiting: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleConfirm", function () {
      _this.props.onConfirm(_this.handleClose);
    });

    _defineProperty(_assertThisInitialized(_this), "renderChildren", function () {
      var children = _this.props.children;

      if (typeof children === 'function') {
        return children({
          close: _this.handleClose
        });
      }

      if (typeof children === 'string') {
        return React.createElement(Paragraph, {
          size: 400,
          color: "muted"
        }, children);
      }

      return children;
    });

    _this.state = {
      exiting: false,
      exited: !props.isShown
    };
    return _this;
  }

  _createClass(CornerDialog, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.isShown && this.props.isShown) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          exited: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          width = _this$props.width,
          intent = _this$props.intent,
          isShown = _this$props.isShown,
          hasFooter = _this$props.hasFooter,
          hasCancel = _this$props.hasCancel,
          hasClose = _this$props.hasClose,
          cancelLabel = _this$props.cancelLabel,
          confirmLabel = _this$props.confirmLabel,
          onOpenComplete = _this$props.onOpenComplete,
          _this$props$container = _this$props.containerProps,
          containerProps = _this$props$container === void 0 ? {} : _this$props$container,
          position = _this$props.position;
      var _this$state = this.state,
          exiting = _this$state.exiting,
          exited = _this$state.exited;
      if (exited) return null;
      return React.createElement(Portal, null, React.createElement(Transition, {
        appear: true,
        unmountOnExit: true,
        timeout: ANIMATION_DURATION,
        in: isShown && !exiting,
        onExited: this.handleExited,
        onEntered: onOpenComplete
      }, function (state) {
        return React.createElement(Card, _extends({
          role: "dialog",
          backgroundColor: "white",
          elevation: 4,
          width: width,
          css: animationStyles,
          "data-state": state,
          padding: 32,
          position: "fixed"
        }, absolutePositions[Object.keys(absolutePositions).includes(position) ? position : positions.BOTTOM_RIGHT], containerProps), React.createElement(Pane, {
          display: "flex",
          alignItems: "center",
          marginBottom: 12
        }, React.createElement(Heading, {
          is: "h4",
          size: 600,
          flex: "1"
        }, title), hasClose && React.createElement(IconButton, {
          height: 32,
          icon: "cross",
          appearance: "minimal",
          onClick: _this2.handleClose
        })), React.createElement(Pane, {
          overflowY: "auto",
          "data-state": state
        }, _this2.renderChildren()), hasFooter && React.createElement(Pane, {
          marginTop: 24,
          flexShrink: 0,
          display: "flex",
          flexDirection: "row-reverse"
        }, React.createElement(Button, {
          appearance: "primary",
          intent: intent,
          marginLeft: 8,
          onClick: _this2.handleConfirm
        }, confirmLabel), hasCancel && React.createElement(Button, {
          onClick: _this2.handleCancel
        }, cancelLabel)));
      }));
    }
  }]);

  return CornerDialog;
}(PureComponent);

CornerDialog.displayName = "CornerDialog";

_defineProperty(CornerDialog, "propTypes", {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph size={400} color="muted" /> is used to wrap the string.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * The intent of the CornerDialog. Used for the button.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * When true, the dialog is shown.
   */
  isShown: PropTypes.bool,

  /**
   * Title of the Dialog. Titles should use Title Case.
   */
  title: PropTypes.node,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func,

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: PropTypes.bool,

  /**
   * Function that will be called when the confirm button is clicked.
   * This does not close the Dialog. A close function will be passed
   * as a paramater you can use to close the dialog.
   *
   * `onConfirm={(close) => close()}`
   */
  onConfirm: PropTypes.func,

  /**
   * Label of the confirm button.
   */
  confirmLabel: PropTypes.string,

  /**
   * When true, the cancel button is shown.
   */
  hasCancel: PropTypes.bool,

  /**
   * When true, the close button is shown.
   */
  hasClose: PropTypes.bool,

  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   *
   * `onCancel={(close) => close()}`
   */
  onCancel: PropTypes.func,

  /**
   * Label of the cancel button.
   */
  cancelLabel: PropTypes.string,

  /**
   * Width of the Dialog.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: PropTypes.object,

  /**
   * Props that will set position of corner dialog
   */
  position: PropTypes.oneOf([positions.TOP_LEFT, positions.TOP_RIGHT, positions.BOTTOM_LEFT, positions.BOTTOM_RIGHT])
});

_defineProperty(CornerDialog, "defaultProps", {
  width: 392,
  intent: 'none',
  hasFooter: true,
  confirmLabel: 'Learn More',
  hasCancel: true,
  hasClose: true,
  cancelLabel: 'Close',
  onCancel: function onCancel(close) {
    return close();
  },
  onConfirm: function onConfirm(close) {
    return close();
  },
  onCloseComplete: function onCloseComplete() {},
  position: positions.BOTTOM_RIGHT
});

export { CornerDialog as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JuZXItZGlhbG9nL3NyYy9Db3JuZXJEaWFsb2cuanMiXSwibmFtZXMiOlsiY3NzIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiVHJhbnNpdGlvbiIsIlBhbmUiLCJDYXJkIiwiUG9ydGFsIiwiUGFyYWdyYXBoIiwiSGVhZGluZyIsIkJ1dHRvbiIsIkljb25CdXR0b24iLCJhYnNvbHV0ZVBvc2l0aW9ucyIsInBvc2l0aW9ucyIsImFuaW1hdGlvbkVhc2luZyIsImRlY2VsZXJhdGlvbiIsImFjY2VsZXJhdGlvbiIsInNwcmluZyIsIkFOSU1BVElPTl9EVVJBVElPTiIsIm9wZW5BbmltYXRpb24iLCJrZXlmcmFtZXMiLCJmcm9tIiwidHJhbnNmb3JtIiwidG8iLCJjbG9zZUFuaW1hdGlvbiIsIm9wYWNpdHkiLCJhbmltYXRpb25TdHlsZXMiLCJhbmltYXRpb24iLCJDb3JuZXJEaWFsb2ciLCJwcm9wcyIsInNldFN0YXRlIiwiZXhpdGluZyIsImV4aXRlZCIsIm9uQ2xvc2VDb21wbGV0ZSIsIm9uQ2FuY2VsIiwiaGFuZGxlQ2xvc2UiLCJvbkNvbmZpcm0iLCJjaGlsZHJlbiIsImNsb3NlIiwic3RhdGUiLCJpc1Nob3duIiwicHJldlByb3BzIiwidGl0bGUiLCJ3aWR0aCIsImludGVudCIsImhhc0Zvb3RlciIsImhhc0NhbmNlbCIsImhhc0Nsb3NlIiwiY2FuY2VsTGFiZWwiLCJjb25maXJtTGFiZWwiLCJvbk9wZW5Db21wbGV0ZSIsImNvbnRhaW5lclByb3BzIiwicG9zaXRpb24iLCJoYW5kbGVFeGl0ZWQiLCJPYmplY3QiLCJrZXlzIiwiaW5jbHVkZXMiLCJCT1RUT01fUklHSFQiLCJyZW5kZXJDaGlsZHJlbiIsImhhbmRsZUNvbmZpcm0iLCJoYW5kbGVDYW5jZWwiLCJvbmVPZlR5cGUiLCJub2RlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJvbmVPZiIsImJvb2wiLCJzdHJpbmciLCJudW1iZXIiLCJvYmplY3Qi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UyxFQUFFLElBSFM7QUFJcEJJLEVBQUFBLFlBQVksRUFBRSxZQUpNO0FBS3BCSCxFQUFBQSxTQUFTLEVBQUUsSUFMUztBQU1wQkMsRUFBQUEsUUFBUSxFQUFFLElBTlU7QUFPcEJDLEVBQUFBLFdBQVcsRUFBRSxPQVBPO0FBUXBCZCxFQUFBQSxRQUFRLEVBQUUsa0JBQUFJLEtBQUs7QUFBQSxXQUFJQSxLQUFLLEVBQVQ7QUFBQSxHQVJLO0FBU3BCRixFQUFBQSxTQUFTLEVBQUUsbUJBQUFFLEtBQUs7QUFBQSxXQUFJQSxLQUFLLEVBQVQ7QUFBQSxHQVRJO0FBVXBCTCxFQUFBQSxlQUFlLEVBQUUsMkJBQU0sQ0FBRSxDQVZMO0FBV3BCbUIsRUFBQUEsUUFBUSxFQUFFdkMsU0FBUyxDQUFDNEM7QUFYQSxDOztTQWpHSDdCLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJ1xuaW1wb3J0IHsgUGFuZSwgQ2FyZCB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gJy4uLy4uL3BvcnRhbCdcbmltcG9ydCB7IFBhcmFncmFwaCwgSGVhZGluZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBCdXR0b24sIEljb25CdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b25zJ1xuaW1wb3J0IGFic29sdXRlUG9zaXRpb25zIGZyb20gJy4uLy4uL2NvbnN0YW50cy9zcmMvQWJzb2x1dGVQb3NpdGlvbidcbmltcG9ydCBwb3NpdGlvbnMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL3NyYy9Qb3NpdGlvbidcblxuY29uc3QgYW5pbWF0aW9uRWFzaW5nID0ge1xuICBkZWNlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSlgLFxuICBhY2NlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDEsIDEpYCxcbiAgc3ByaW5nOiBgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuMTc1KWBcbn1cblxuY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OID0gMjQwXG5cbmNvbnN0IG9wZW5BbmltYXRpb24gPSBjc3Mua2V5ZnJhbWVzKCdvcGVuQW5pbWF0aW9uJywge1xuICBmcm9tOiB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKSdcbiAgfSxcbiAgdG86IHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ1xuICB9XG59KVxuXG5jb25zdCBjbG9zZUFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ2Nsb3NlQW5pbWF0aW9uJywge1xuICBmcm9tOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgdG86IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjkpJyxcbiAgICBvcGFjaXR5OiAwXG4gIH1cbn0pXG5cbmNvbnN0IGFuaW1hdGlvblN0eWxlcyA9IHtcbiAgJyZbZGF0YS1zdGF0ZT1cImVudGVyaW5nXCJdLCAmW2RhdGEtc3RhdGU9XCJlbnRlcmVkXCJdJzoge1xuICAgIGFuaW1hdGlvbjogYCR7b3BlbkFuaW1hdGlvbn0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHtcbiAgICAgIGFuaW1hdGlvbkVhc2luZy5zcHJpbmdcbiAgICB9IGJvdGhgXG4gIH0sXG4gICcmW2RhdGEtc3RhdGU9XCJleGl0aW5nXCJdJzoge1xuICAgIGFuaW1hdGlvbjogYCR7Y2xvc2VBbmltYXRpb259IDEyMG1zICR7YW5pbWF0aW9uRWFzaW5nLmFjY2VsZXJhdGlvbn0gYm90aGBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JuZXJEaWFsb2cgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDaGlsZHJlbiBjYW4gYmUgYSBzdHJpbmcsIG5vZGUgb3IgYSBmdW5jdGlvbiBhY2NlcHRpbmcgYCh7IGNsb3NlIH0pYC5cbiAgICAgKiBXaGVuIHBhc3NpbmcgYSBzdHJpbmcsIDxQYXJhZ3JhcGggc2l6ZT17NDAwfSBjb2xvcj1cIm11dGVkXCIgLz4gaXMgdXNlZCB0byB3cmFwIHRoZSBzdHJpbmcuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZW50IG9mIHRoZSBDb3JuZXJEaWFsb2cuIFVzZWQgZm9yIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSlcbiAgICAgIC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgZGlhbG9nIGlzIHNob3duLlxuICAgICAqL1xuICAgIGlzU2hvd246IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGl0bGUgb2YgdGhlIERpYWxvZy4gVGl0bGVzIHNob3VsZCB1c2UgVGl0bGUgQ2FzZS5cbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGV4aXQgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBvbkNsb3NlQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBlbnRlciB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIG9uT3BlbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGZvb3RlciB3aXRoIHRoZSBjYW5jZWwgYW5kIGNvbmZpcm0gYnV0dG9uIGlzIHNob3duLlxuICAgICAqL1xuICAgIGhhc0Zvb3RlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGNvbmZpcm0gYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICogVGhpcyBkb2VzIG5vdCBjbG9zZSB0aGUgRGlhbG9nLiBBIGNsb3NlIGZ1bmN0aW9uIHdpbGwgYmUgcGFzc2VkXG4gICAgICogYXMgYSBwYXJhbWF0ZXIgeW91IGNhbiB1c2UgdG8gY2xvc2UgdGhlIGRpYWxvZy5cbiAgICAgKlxuICAgICAqIGBvbkNvbmZpcm09eyhjbG9zZSkgPT4gY2xvc2UoKX1gXG4gICAgICovXG4gICAgb25Db25maXJtOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIExhYmVsIG9mIHRoZSBjb25maXJtIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBjb25maXJtTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjYW5jZWwgYnV0dG9uIGlzIHNob3duLlxuICAgICAqL1xuICAgIGhhc0NhbmNlbDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjbG9zZSBidXR0b24gaXMgc2hvd24uXG4gICAgICovXG4gICAgaGFzQ2xvc2U6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBjYW5jZWwgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICogVGhpcyBjbG9zZXMgdGhlIERpYWxvZyBieSBkZWZhdWx0LlxuICAgICAqXG4gICAgICogYG9uQ2FuY2VsPXsoY2xvc2UpID0+IGNsb3NlKCl9YFxuICAgICAqL1xuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIExhYmVsIG9mIHRoZSBjYW5jZWwgYnV0dG9uLlxuICAgICAqL1xuICAgIGNhbmNlbExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogV2lkdGggb2YgdGhlIERpYWxvZy5cbiAgICAgKi9cbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLyoqXG4gICAgICogUHJvcHMgdGhhdCBhcmUgcGFzc2VkIHRvIHRoZSBkaWFsb2cgY29udGFpbmVyLlxuICAgICAqL1xuICAgIGNvbnRhaW5lclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogUHJvcHMgdGhhdCB3aWxsIHNldCBwb3NpdGlvbiBvZiBjb3JuZXIgZGlhbG9nXG4gICAgICovXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBwb3NpdGlvbnMuVE9QX0xFRlQsXG4gICAgICBwb3NpdGlvbnMuVE9QX1JJR0hULFxuICAgICAgcG9zaXRpb25zLkJPVFRPTV9MRUZULFxuICAgICAgcG9zaXRpb25zLkJPVFRPTV9SSUdIVFxuICAgIF0pXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHdpZHRoOiAzOTIsXG4gICAgaW50ZW50OiAnbm9uZScsXG4gICAgaGFzRm9vdGVyOiB0cnVlLFxuICAgIGNvbmZpcm1MYWJlbDogJ0xlYXJuIE1vcmUnLFxuICAgIGhhc0NhbmNlbDogdHJ1ZSxcbiAgICBoYXNDbG9zZTogdHJ1ZSxcbiAgICBjYW5jZWxMYWJlbDogJ0Nsb3NlJyxcbiAgICBvbkNhbmNlbDogY2xvc2UgPT4gY2xvc2UoKSxcbiAgICBvbkNvbmZpcm06IGNsb3NlID0+IGNsb3NlKCksXG4gICAgb25DbG9zZUNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICBwb3NpdGlvbjogcG9zaXRpb25zLkJPVFRPTV9SSUdIVFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleGl0aW5nOiBmYWxzZSxcbiAgICAgIGV4aXRlZDogIXByb3BzLmlzU2hvd25cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKCFwcmV2UHJvcHMuaXNTaG93biAmJiB0aGlzLnByb3BzLmlzU2hvd24pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGV4aXRlZDogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRXhpdGVkID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBleGl0aW5nOiBmYWxzZSwgZXhpdGVkOiB0cnVlIH0pXG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlQ29tcGxldGUoKVxuICB9XG5cbiAgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25DYW5jZWwodGhpcy5oYW5kbGVDbG9zZSlcbiAgfVxuXG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBleGl0aW5nOiB0cnVlIH0pXG4gIH1cblxuICBoYW5kbGVDb25maXJtID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25Db25maXJtKHRoaXMuaGFuZGxlQ2xvc2UpXG4gIH1cblxuICByZW5kZXJDaGlsZHJlbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKHsgY2xvc2U6IHRoaXMuaGFuZGxlQ2xvc2UgfSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBhcmFncmFwaCBzaXplPXs0MDB9IGNvbG9yPVwibXV0ZWRcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgd2lkdGgsXG4gICAgICBpbnRlbnQsXG4gICAgICBpc1Nob3duLFxuICAgICAgaGFzRm9vdGVyLFxuICAgICAgaGFzQ2FuY2VsLFxuICAgICAgaGFzQ2xvc2UsXG4gICAgICBjYW5jZWxMYWJlbCxcbiAgICAgIGNvbmZpcm1MYWJlbCxcbiAgICAgIG9uT3BlbkNvbXBsZXRlLFxuICAgICAgY29udGFpbmVyUHJvcHMgPSB7fSxcbiAgICAgIHBvc2l0aW9uXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHsgZXhpdGluZywgZXhpdGVkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoZXhpdGVkKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsPlxuICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgIGFwcGVhclxuICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgICB0aW1lb3V0PXtBTklNQVRJT05fRFVSQVRJT059XG4gICAgICAgICAgaW49e2lzU2hvd24gJiYgIWV4aXRpbmd9XG4gICAgICAgICAgb25FeGl0ZWQ9e3RoaXMuaGFuZGxlRXhpdGVkfVxuICAgICAgICAgIG9uRW50ZXJlZD17b25PcGVuQ29tcGxldGV9XG4gICAgICAgID5cbiAgICAgICAgICB7c3RhdGUgPT4gKFxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgZWxldmF0aW9uPXs0fVxuICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgIGNzcz17YW5pbWF0aW9uU3R5bGVzfVxuICAgICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgICAgcGFkZGluZz17MzJ9XG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICAgICAgICB7Li4uYWJzb2x1dGVQb3NpdGlvbnNbXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYWJzb2x1dGVQb3NpdGlvbnMpLmluY2x1ZGVzKHBvc2l0aW9uKVxuICAgICAgICAgICAgICAgICAgPyBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgOiBwb3NpdGlvbnMuQk9UVE9NX1JJR0hUXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIHsuLi5jb250YWluZXJQcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFBhbmUgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbWFyZ2luQm90dG9tPXsxMn0+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgaXM9XCJoNFwiIHNpemU9ezYwMH0gZmxleD1cIjFcIj5cbiAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAge2hhc0Nsb3NlICYmIChcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzJ9XG4gICAgICAgICAgICAgICAgICAgIGljb249XCJjcm9zc1wiXG4gICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9QYW5lPlxuXG4gICAgICAgICAgICAgIDxQYW5lIG92ZXJmbG93WT1cImF1dG9cIiBkYXRhLXN0YXRlPXtzdGF0ZX0+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2hpbGRyZW4oKX1cbiAgICAgICAgICAgICAgPC9QYW5lPlxuXG4gICAgICAgICAgICAgIHtoYXNGb290ZXIgJiYgKFxuICAgICAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9ezI0fVxuICAgICAgICAgICAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3ctcmV2ZXJzZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGludGVudD17aW50ZW50fVxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0PXs4fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNvbmZpcm19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjb25maXJtTGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIHtoYXNDYW5jZWwgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2FuY2VsfT57Y2FuY2VsTGFiZWx9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApfVxuICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICA8L1BvcnRhbD5cbiAgICApXG4gIH1cbn1cbiJdfQ==