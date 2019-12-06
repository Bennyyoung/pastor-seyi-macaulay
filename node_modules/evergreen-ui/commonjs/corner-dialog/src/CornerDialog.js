"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _layers = require("../../layers");

var _portal = require("../../portal");

var _typography = require("../../typography");

var _buttons = require("../../buttons");

var _AbsolutePosition = _interopRequireDefault(require("../../constants/src/AbsolutePosition"));

var _Position = _interopRequireDefault(require("../../constants/src/Position"));

var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var ANIMATION_DURATION = 240;

var openAnimation = _glamor.css.keyframes('openAnimation', {
  from: {
    transform: 'translateY(100%)'
  },
  to: {
    transform: 'translateY(0)'
  }
});

var closeAnimation = _glamor.css.keyframes('closeAnimation', {
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
  (0, _inherits2.default)(CornerDialog, _PureComponent);

  function CornerDialog(props) {
    var _this;

    (0, _classCallCheck2.default)(this, CornerDialog);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CornerDialog).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleExited", function () {
      _this.setState({
        exiting: false,
        exited: true
      });

      _this.props.onCloseComplete();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleCancel", function () {
      _this.props.onCancel(_this.handleClose);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClose", function () {
      _this.setState({
        exiting: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleConfirm", function () {
      _this.props.onConfirm(_this.handleClose);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderChildren", function () {
      var children = _this.props.children;

      if (typeof children === 'function') {
        return children({
          close: _this.handleClose
        });
      }

      if (typeof children === 'string') {
        return _react.default.createElement(_typography.Paragraph, {
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

  (0, _createClass2.default)(CornerDialog, [{
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
      return _react.default.createElement(_portal.Portal, null, _react.default.createElement(_Transition.default, {
        appear: true,
        unmountOnExit: true,
        timeout: ANIMATION_DURATION,
        in: isShown && !exiting,
        onExited: this.handleExited,
        onEntered: onOpenComplete
      }, function (state) {
        return _react.default.createElement(_layers.Card, (0, _extends2.default)({
          role: "dialog",
          backgroundColor: "white",
          elevation: 4,
          width: width,
          css: animationStyles,
          "data-state": state,
          padding: 32,
          position: "fixed"
        }, _AbsolutePosition.default[Object.keys(_AbsolutePosition.default).includes(position) ? position : _Position.default.BOTTOM_RIGHT], containerProps), _react.default.createElement(_layers.Pane, {
          display: "flex",
          alignItems: "center",
          marginBottom: 12
        }, _react.default.createElement(_typography.Heading, {
          is: "h4",
          size: 600,
          flex: "1"
        }, title), hasClose && _react.default.createElement(_buttons.IconButton, {
          height: 32,
          icon: "cross",
          appearance: "minimal",
          onClick: _this2.handleClose
        })), _react.default.createElement(_layers.Pane, {
          overflowY: "auto",
          "data-state": state
        }, _this2.renderChildren()), hasFooter && _react.default.createElement(_layers.Pane, {
          marginTop: 24,
          flexShrink: 0,
          display: "flex",
          flexDirection: "row-reverse"
        }, _react.default.createElement(_buttons.Button, {
          appearance: "primary",
          intent: intent,
          marginLeft: 8,
          onClick: _this2.handleConfirm
        }, confirmLabel), hasCancel && _react.default.createElement(_buttons.Button, {
          onClick: _this2.handleCancel
        }, cancelLabel)));
      }));
    }
  }]);
  return CornerDialog;
}(_react.PureComponent);

exports.default = CornerDialog;
CornerDialog.displayName = "CornerDialog";
(0, _defineProperty2.default)(CornerDialog, "propTypes", {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph size={400} color="muted" /> is used to wrap the string.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]).isRequired,

  /**
   * The intent of the CornerDialog. Used for the button.
   */
  intent: _propTypes.default.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * When true, the dialog is shown.
   */
  isShown: _propTypes.default.bool,

  /**
   * Title of the Dialog. Titles should use Title Case.
   */
  title: _propTypes.default.node,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes.default.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes.default.func,

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: _propTypes.default.bool,

  /**
   * Function that will be called when the confirm button is clicked.
   * This does not close the Dialog. A close function will be passed
   * as a paramater you can use to close the dialog.
   *
   * `onConfirm={(close) => close()}`
   */
  onConfirm: _propTypes.default.func,

  /**
   * Label of the confirm button.
   */
  confirmLabel: _propTypes.default.string,

  /**
   * When true, the cancel button is shown.
   */
  hasCancel: _propTypes.default.bool,

  /**
   * When true, the close button is shown.
   */
  hasClose: _propTypes.default.bool,

  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   *
   * `onCancel={(close) => close()}`
   */
  onCancel: _propTypes.default.func,

  /**
   * Label of the cancel button.
   */
  cancelLabel: _propTypes.default.string,

  /**
   * Width of the Dialog.
   */
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: _propTypes.default.object,

  /**
   * Props that will set position of corner dialog
   */
  position: _propTypes.default.oneOf([_Position.default.TOP_LEFT, _Position.default.TOP_RIGHT, _Position.default.BOTTOM_LEFT, _Position.default.BOTTOM_RIGHT])
});
(0, _defineProperty2.default)(CornerDialog, "defaultProps", {
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
  position: _Position.default.BOTTOM_RIGHT
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JuZXItZGlhbG9nL3NyYy9Db3JuZXJEaWFsb2cuanMiXSwibmFtZXMiOlsiYW5pbWF0aW9uRWFzaW5nIiwiZGVjZWxlcmF0aW9uIiwiYWNjZWxlcmF0aW9uIiwic3ByaW5nIiwiQU5JTUFUSU9OX0RVUkFUSU9OIiwib3BlbkFuaW1hdGlvbiIsImNzcyIsImtleWZyYW1lcyIsImZyb20iLCJ0cmFuc2Zvcm0iLCJ0byIsImNsb3NlQW5pbWF0aW9uIiwib3BhY2l0eSIsImFuaW1hdGlvblN0eWxlcyIsImFuaW1hdGlvbiIsIkNvcm5lckRpYWxvZyIsInByb3BzIiwic2V0U3RhdGUiLCJleGl0aW5nIiwiZXhpdGVkIiwib25DbG9zZUNvbXBsZXRlIiwib25DYW5jZWwiLCJoYW5kbGVDbG9zZSIsIm9uQ29uZmlybSIsImNoaWxkcmVuIiwiY2xvc2UiLCJzdGF0ZSIsImlzU2hvd24iLCJwcmV2UHJvcHMiLCJ0aXRsZSIsIndpZHRoIiwiaW50ZW50IiwiaGFzRm9vdGVyIiwiaGFzQ2FuY2VsIiwiaGFzQ2xvc2UiLCJjYW5jZWxMYWJlbCIsImNvbmZpcm1MYWJlbCIsIm9uT3BlbkNvbXBsZXRlIiwiY29udGFpbmVyUHJvcHMiLCJwb3NpdGlvbiIsImhhbmRsZUV4aXRlZCIsImFic29sdXRlUG9zaXRpb25zIiwiT2JqZWN0Iiwia2V5cyIsImluY2x1ZGVzIiwicG9zaXRpb25zIiwiQk9UVE9NX1JJR0hUIiwicmVuZGVyQ2hpbGRyZW4iLCJoYW5kbGVDb25maXJtIiwiaGFuZGxlQ2FuY2VsIiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsIm5vZGUiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm9uZU9mIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsIm9iamVjdCIsIlRPUF9MRUZUIiwiVE9QX1JJR0hUIiwiQk9UVE9NX0xFRlQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNB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LG1CQUFVTyxNQXpFTjs7QUEyRWpCOzs7QUFHQTVCLEVBQUFBLEtBQUssRUFBRXFCLG1CQUFVQyxTQUFWLENBQW9CLENBQUNELG1CQUFVTyxNQUFYLEVBQW1CUCxtQkFBVVEsTUFBN0IsQ0FBcEIsQ0E5RVU7O0FBZ0ZqQjs7O0FBR0FyQixFQUFBQSxjQUFjLEVBQUVhLG1CQUFVUyxNQW5GVDs7QUFxRmpCOzs7QUFHQXJCLEVBQUFBLFFBQVEsRUFBRVksbUJBQVVLLEtBQVYsQ0FBZ0IsQ0FDeEJYLGtCQUFVZ0IsUUFEYyxFQUV4QmhCLGtCQUFVaUIsU0FGYyxFQUd4QmpCLGtCQUFVa0IsV0FIYyxFQUl4QmxCLGtCQUFVQyxZQUpjLENBQWhCO0FBeEZPLEM7OEJBREEvQixZLGtCQWlHRztBQUNwQmUsRUFBQUEsS0FBSyxFQUFFLEdBRGE7QUFFcEJDLEVBQUFBLE1BQU0sRUFBRSxNQUZZO0FBR3BCQyxFQUFBQSxTQUFTLEVBQUUsSUFIUztBQUlwQkksRUFBQUEsWUFBWSxFQUFFLFlBSk07QUFLcEJILEVBQUFBLFNBQVMsRUFBRSxJQUxTO0FBTXBCQyxFQUFBQSxRQUFRLEVBQUUsSUFOVTtBQU9wQkMsRUFBQUEsV0FBVyxFQUFFLE9BUE87QUFRcEJkLEVBQUFBLFFBQVEsRUFBRSxrQkFBQUksS0FBSztBQUFBLFdBQUlBLEtBQUssRUFBVDtBQUFBLEdBUks7QUFTcEJGLEVBQUFBLFNBQVMsRUFBRSxtQkFBQUUsS0FBSztBQUFBLFdBQUlBLEtBQUssRUFBVDtBQUFBLEdBVEk7QUFVcEJMLEVBQUFBLGVBQWUsRUFBRSwyQkFBTSxDQUFFLENBVkw7QUFXcEJtQixFQUFBQSxRQUFRLEVBQUVNLGtCQUFVQztBQVhBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJ1xuaW1wb3J0IHsgUGFuZSwgQ2FyZCB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gJy4uLy4uL3BvcnRhbCdcbmltcG9ydCB7IFBhcmFncmFwaCwgSGVhZGluZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBCdXR0b24sIEljb25CdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b25zJ1xuaW1wb3J0IGFic29sdXRlUG9zaXRpb25zIGZyb20gJy4uLy4uL2NvbnN0YW50cy9zcmMvQWJzb2x1dGVQb3NpdGlvbidcbmltcG9ydCBwb3NpdGlvbnMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL3NyYy9Qb3NpdGlvbidcblxuY29uc3QgYW5pbWF0aW9uRWFzaW5nID0ge1xuICBkZWNlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSlgLFxuICBhY2NlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDEsIDEpYCxcbiAgc3ByaW5nOiBgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuMTc1KWBcbn1cblxuY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OID0gMjQwXG5cbmNvbnN0IG9wZW5BbmltYXRpb24gPSBjc3Mua2V5ZnJhbWVzKCdvcGVuQW5pbWF0aW9uJywge1xuICBmcm9tOiB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKSdcbiAgfSxcbiAgdG86IHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ1xuICB9XG59KVxuXG5jb25zdCBjbG9zZUFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ2Nsb3NlQW5pbWF0aW9uJywge1xuICBmcm9tOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgdG86IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjkpJyxcbiAgICBvcGFjaXR5OiAwXG4gIH1cbn0pXG5cbmNvbnN0IGFuaW1hdGlvblN0eWxlcyA9IHtcbiAgJyZbZGF0YS1zdGF0ZT1cImVudGVyaW5nXCJdLCAmW2RhdGEtc3RhdGU9XCJlbnRlcmVkXCJdJzoge1xuICAgIGFuaW1hdGlvbjogYCR7b3BlbkFuaW1hdGlvbn0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHtcbiAgICAgIGFuaW1hdGlvbkVhc2luZy5zcHJpbmdcbiAgICB9IGJvdGhgXG4gIH0sXG4gICcmW2RhdGEtc3RhdGU9XCJleGl0aW5nXCJdJzoge1xuICAgIGFuaW1hdGlvbjogYCR7Y2xvc2VBbmltYXRpb259IDEyMG1zICR7YW5pbWF0aW9uRWFzaW5nLmFjY2VsZXJhdGlvbn0gYm90aGBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JuZXJEaWFsb2cgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDaGlsZHJlbiBjYW4gYmUgYSBzdHJpbmcsIG5vZGUgb3IgYSBmdW5jdGlvbiBhY2NlcHRpbmcgYCh7IGNsb3NlIH0pYC5cbiAgICAgKiBXaGVuIHBhc3NpbmcgYSBzdHJpbmcsIDxQYXJhZ3JhcGggc2l6ZT17NDAwfSBjb2xvcj1cIm11dGVkXCIgLz4gaXMgdXNlZCB0byB3cmFwIHRoZSBzdHJpbmcuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZW50IG9mIHRoZSBDb3JuZXJEaWFsb2cuIFVzZWQgZm9yIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSlcbiAgICAgIC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgZGlhbG9nIGlzIHNob3duLlxuICAgICAqL1xuICAgIGlzU2hvd246IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGl0bGUgb2YgdGhlIERpYWxvZy4gVGl0bGVzIHNob3VsZCB1c2UgVGl0bGUgQ2FzZS5cbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGV4aXQgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBvbkNsb3NlQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBlbnRlciB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIG9uT3BlbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGZvb3RlciB3aXRoIHRoZSBjYW5jZWwgYW5kIGNvbmZpcm0gYnV0dG9uIGlzIHNob3duLlxuICAgICAqL1xuICAgIGhhc0Zvb3RlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGNvbmZpcm0gYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICogVGhpcyBkb2VzIG5vdCBjbG9zZSB0aGUgRGlhbG9nLiBBIGNsb3NlIGZ1bmN0aW9uIHdpbGwgYmUgcGFzc2VkXG4gICAgICogYXMgYSBwYXJhbWF0ZXIgeW91IGNhbiB1c2UgdG8gY2xvc2UgdGhlIGRpYWxvZy5cbiAgICAgKlxuICAgICAqIGBvbkNvbmZpcm09eyhjbG9zZSkgPT4gY2xvc2UoKX1gXG4gICAgICovXG4gICAgb25Db25maXJtOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIExhYmVsIG9mIHRoZSBjb25maXJtIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBjb25maXJtTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjYW5jZWwgYnV0dG9uIGlzIHNob3duLlxuICAgICAqL1xuICAgIGhhc0NhbmNlbDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjbG9zZSBidXR0b24gaXMgc2hvd24uXG4gICAgICovXG4gICAgaGFzQ2xvc2U6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBjYW5jZWwgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICogVGhpcyBjbG9zZXMgdGhlIERpYWxvZyBieSBkZWZhdWx0LlxuICAgICAqXG4gICAgICogYG9uQ2FuY2VsPXsoY2xvc2UpID0+IGNsb3NlKCl9YFxuICAgICAqL1xuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIExhYmVsIG9mIHRoZSBjYW5jZWwgYnV0dG9uLlxuICAgICAqL1xuICAgIGNhbmNlbExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogV2lkdGggb2YgdGhlIERpYWxvZy5cbiAgICAgKi9cbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLyoqXG4gICAgICogUHJvcHMgdGhhdCBhcmUgcGFzc2VkIHRvIHRoZSBkaWFsb2cgY29udGFpbmVyLlxuICAgICAqL1xuICAgIGNvbnRhaW5lclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogUHJvcHMgdGhhdCB3aWxsIHNldCBwb3NpdGlvbiBvZiBjb3JuZXIgZGlhbG9nXG4gICAgICovXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBwb3NpdGlvbnMuVE9QX0xFRlQsXG4gICAgICBwb3NpdGlvbnMuVE9QX1JJR0hULFxuICAgICAgcG9zaXRpb25zLkJPVFRPTV9MRUZULFxuICAgICAgcG9zaXRpb25zLkJPVFRPTV9SSUdIVFxuICAgIF0pXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHdpZHRoOiAzOTIsXG4gICAgaW50ZW50OiAnbm9uZScsXG4gICAgaGFzRm9vdGVyOiB0cnVlLFxuICAgIGNvbmZpcm1MYWJlbDogJ0xlYXJuIE1vcmUnLFxuICAgIGhhc0NhbmNlbDogdHJ1ZSxcbiAgICBoYXNDbG9zZTogdHJ1ZSxcbiAgICBjYW5jZWxMYWJlbDogJ0Nsb3NlJyxcbiAgICBvbkNhbmNlbDogY2xvc2UgPT4gY2xvc2UoKSxcbiAgICBvbkNvbmZpcm06IGNsb3NlID0+IGNsb3NlKCksXG4gICAgb25DbG9zZUNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICBwb3NpdGlvbjogcG9zaXRpb25zLkJPVFRPTV9SSUdIVFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleGl0aW5nOiBmYWxzZSxcbiAgICAgIGV4aXRlZDogIXByb3BzLmlzU2hvd25cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKCFwcmV2UHJvcHMuaXNTaG93biAmJiB0aGlzLnByb3BzLmlzU2hvd24pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGV4aXRlZDogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRXhpdGVkID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBleGl0aW5nOiBmYWxzZSwgZXhpdGVkOiB0cnVlIH0pXG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlQ29tcGxldGUoKVxuICB9XG5cbiAgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25DYW5jZWwodGhpcy5oYW5kbGVDbG9zZSlcbiAgfVxuXG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBleGl0aW5nOiB0cnVlIH0pXG4gIH1cblxuICBoYW5kbGVDb25maXJtID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25Db25maXJtKHRoaXMuaGFuZGxlQ2xvc2UpXG4gIH1cblxuICByZW5kZXJDaGlsZHJlbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKHsgY2xvc2U6IHRoaXMuaGFuZGxlQ2xvc2UgfSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBhcmFncmFwaCBzaXplPXs0MDB9IGNvbG9yPVwibXV0ZWRcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgd2lkdGgsXG4gICAgICBpbnRlbnQsXG4gICAgICBpc1Nob3duLFxuICAgICAgaGFzRm9vdGVyLFxuICAgICAgaGFzQ2FuY2VsLFxuICAgICAgaGFzQ2xvc2UsXG4gICAgICBjYW5jZWxMYWJlbCxcbiAgICAgIGNvbmZpcm1MYWJlbCxcbiAgICAgIG9uT3BlbkNvbXBsZXRlLFxuICAgICAgY29udGFpbmVyUHJvcHMgPSB7fSxcbiAgICAgIHBvc2l0aW9uXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHsgZXhpdGluZywgZXhpdGVkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoZXhpdGVkKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsPlxuICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgIGFwcGVhclxuICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgICB0aW1lb3V0PXtBTklNQVRJT05fRFVSQVRJT059XG4gICAgICAgICAgaW49e2lzU2hvd24gJiYgIWV4aXRpbmd9XG4gICAgICAgICAgb25FeGl0ZWQ9e3RoaXMuaGFuZGxlRXhpdGVkfVxuICAgICAgICAgIG9uRW50ZXJlZD17b25PcGVuQ29tcGxldGV9XG4gICAgICAgID5cbiAgICAgICAgICB7c3RhdGUgPT4gKFxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgZWxldmF0aW9uPXs0fVxuICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgIGNzcz17YW5pbWF0aW9uU3R5bGVzfVxuICAgICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgICAgcGFkZGluZz17MzJ9XG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICAgICAgICB7Li4uYWJzb2x1dGVQb3NpdGlvbnNbXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYWJzb2x1dGVQb3NpdGlvbnMpLmluY2x1ZGVzKHBvc2l0aW9uKVxuICAgICAgICAgICAgICAgICAgPyBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgOiBwb3NpdGlvbnMuQk9UVE9NX1JJR0hUXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIHsuLi5jb250YWluZXJQcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFBhbmUgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbWFyZ2luQm90dG9tPXsxMn0+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgaXM9XCJoNFwiIHNpemU9ezYwMH0gZmxleD1cIjFcIj5cbiAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAge2hhc0Nsb3NlICYmIChcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzJ9XG4gICAgICAgICAgICAgICAgICAgIGljb249XCJjcm9zc1wiXG4gICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9QYW5lPlxuXG4gICAgICAgICAgICAgIDxQYW5lIG92ZXJmbG93WT1cImF1dG9cIiBkYXRhLXN0YXRlPXtzdGF0ZX0+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2hpbGRyZW4oKX1cbiAgICAgICAgICAgICAgPC9QYW5lPlxuXG4gICAgICAgICAgICAgIHtoYXNGb290ZXIgJiYgKFxuICAgICAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9ezI0fVxuICAgICAgICAgICAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3ctcmV2ZXJzZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGludGVudD17aW50ZW50fVxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0PXs4fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNvbmZpcm19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjb25maXJtTGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIHtoYXNDYW5jZWwgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2FuY2VsfT57Y2FuY2VsTGFiZWx9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApfVxuICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICA8L1BvcnRhbD5cbiAgICApXG4gIH1cbn1cbiJdfQ==