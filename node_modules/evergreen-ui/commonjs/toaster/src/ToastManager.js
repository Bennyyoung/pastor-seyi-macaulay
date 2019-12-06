"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

var _Toast = _interopRequireDefault(require("./Toast"));

var wrapperClass = (0, _glamor.css)({
  maxWidth: 560,
  margin: '0 auto',
  top: 0,
  left: 0,
  right: 0,
  position: 'fixed',
  zIndex: _constants.StackingOrder.TOASTER,
  pointerEvents: 'none'
});

var hasCustomId = function hasCustomId(settings) {
  return Object.hasOwnProperty.call(settings, 'id');
};

var ToastManager =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(ToastManager, _React$PureComponent);

  function ToastManager(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, ToastManager);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ToastManager).call(this, props, context));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getToasts", function () {
      return _this.state.toasts;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closeAll", function () {
      _this.getToasts().forEach(function (toast) {
        return toast.close();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "remove", function (id) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _this.state.toasts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var toast = _step.value;

          // Since unique ID is still appended to a custom ID, skip the unique ID and check only prefix
          if (String(toast.id).startsWith(id)) {
            _this.closeToast(toast.id);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "notify", function (title, settings) {
      // If there's a custom toast ID passed, close existing toasts with the same custom ID
      if (hasCustomId(settings)) {
        _this.remove(settings.id);
      }

      var instance = _this.createToastInstance(title, settings);

      _this.setState(function (previousState) {
        return {
          toasts: [instance].concat((0, _toConsumableArray2.default)(previousState.toasts))
        };
      });

      return instance;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "createToastInstance", function (title, settings) {
      var uniqueId = ++ToastManager.idCounter;
      var id = hasCustomId(settings) ? "".concat(settings.id, "-").concat(uniqueId) : uniqueId;
      return {
        id: id,
        title: title,
        description: settings.description,
        hasCloseButton: settings.hasCloseButton || true,
        duration: settings.duration || 5,
        close: function close() {
          return _this.closeToast(id);
        },
        intent: settings.intent
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closeToast", function (id) {
      _this.setState(function (previousState) {
        return {
          toasts: previousState.toasts.map(function (toast) {
            if (toast.id === id) {
              return (0, _objectSpread2.default)({}, toast, {
                isShown: false
              });
            }

            return toast;
          })
        };
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "removeToast", function (id) {
      _this.setState(function (previousState) {
        return {
          toasts: previousState.toasts.filter(function (toast) {
            return toast.id !== id;
          })
        };
      });
    });
    props.bindNotify(_this.notify);
    props.bindRemove(_this.remove);
    props.bindGetToasts(_this.getToasts);
    props.bindCloseAll(_this.closeAll);
    _this.state = {
      toasts: []
    };
    return _this;
  }

  (0, _createClass2.default)(ToastManager, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("span", {
        className: wrapperClass
      }, this.state.toasts.map(function (_ref) {
        var id = _ref.id,
            description = _ref.description,
            props = (0, _objectWithoutProperties2.default)(_ref, ["id", "description"]);
        return _react.default.createElement(_Toast.default, (0, _extends2.default)({
          key: id,
          onRemove: function onRemove() {
            return _this2.removeToast(id);
          }
        }, props), description);
      }));
    }
  }]);
  return ToastManager;
}(_react.default.PureComponent);

exports.default = ToastManager;
ToastManager.displayName = "ToastManager";
(0, _defineProperty2.default)(ToastManager, "propTypes", {
  /**
   * Function called with the `this.notify` function.
   */
  bindNotify: _propTypes.default.func.isRequired,

  /**
   * Function called with the `this.remove` function.
   */
  bindRemove: _propTypes.default.func.isRequired,

  /**
   * Function called with the `this.getToasts` function.
   */
  bindGetToasts: _propTypes.default.func.isRequired,

  /**
   * Function called with the `this.closeAll` function.
   */
  bindCloseAll: _propTypes.default.func.isRequired
});
(0, _defineProperty2.default)(ToastManager, "idCounter", 0);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2FzdGVyL3NyYy9Ub2FzdE1hbmFnZXIuanMiXSwibmFtZXMiOlsid3JhcHBlckNsYXNzIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJwb3NpdGlvbiIsInpJbmRleCIsIlN0YWNraW5nT3JkZXIiLCJUT0FTVEVSIiwicG9pbnRlckV2ZW50cyIsImhhc0N1c3RvbUlkIiwic2V0dGluZ3MiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJUb2FzdE1hbmFnZXIiLCJwcm9wcyIsImNvbnRleHQiLCJzdGF0ZSIsInRvYXN0cyIsImdldFRvYXN0cyIsImZvckVhY2giLCJ0b2FzdCIsImNsb3NlIiwiaWQiLCJTdHJpbmciLCJzdGFydHNXaXRoIiwiY2xvc2VUb2FzdCIsInRpdGxlIiwicmVtb3ZlIiwiaW5zdGFuY2UiLCJjcmVhdGVUb2FzdEluc3RhbmNlIiwic2V0U3RhdGUiLCJwcmV2aW91c1N0YXRlIiwidW5pcXVlSWQiLCJpZENvdW50ZXIiLCJkZXNjcmlwdGlvbiIsImhhc0Nsb3NlQnV0dG9uIiwiZHVyYXRpb24iLCJpbnRlbnQiLCJtYXAiLCJpc1Nob3duIiwiZmlsdGVyIiwiYmluZE5vdGlmeSIsIm5vdGlmeSIsImJpbmRSZW1vdmUiLCJiaW5kR2V0VG9hc3RzIiwiYmluZENsb3NlQWxsIiwiY2xvc2VBbGwiLCJyZW1vdmVUb2FzdCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLGlCQUFJO0FBQ3ZCQyxFQUFBQSxRQUFRLEVBQUUsR0FEYTtBQUV2QkMsRUFBQUEsTUFBTSxFQUFFLFFBRmU7QUFHdkJDLEVBQUFBLEdBQUcsRUFBRSxDQUhrQjtBQUl2QkMsRUFBQUEsSUFBSSxFQUFFLENBSmlCO0FBS3ZCQyxFQUFBQSxLQUFLLEVBQUUsQ0FMZ0I7QUFNdkJDLEVBQUFBLFFBQVEsRUFBRSxPQU5hO0FBT3ZCQyxFQUFBQSxNQUFNLEVBQUVDLHlCQUFjQyxPQVBDO0FBUXZCQyxFQUFBQSxhQUFhLEVBQUU7QUFSUSxDQUFKLENBQXJCOztBQVdBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLFFBQVE7QUFBQSxTQUFJQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLElBQXRCLENBQTJCSCxRQUEzQixFQUFxQyxJQUFyQyxDQUFKO0FBQUEsQ0FBNUI7O0lBRXFCSSxZOzs7OztBQXlCbkIsd0JBQVlDLEtBQVosRUFBbUJDLE9BQW5CLEVBQTRCO0FBQUE7O0FBQUE7QUFDMUIsa0hBQU1ELEtBQU4sRUFBYUMsT0FBYjtBQUQwQiw0RkFhaEIsWUFBTTtBQUNoQixhQUFPLE1BQUtDLEtBQUwsQ0FBV0MsTUFBbEI7QUFDRCxLQWYyQjtBQUFBLDJGQWlCakIsWUFBTTtBQUNmLFlBQUtDLFNBQUwsR0FBaUJDLE9BQWpCLENBQXlCLFVBQUFDLEtBQUs7QUFBQSxlQUFJQSxLQUFLLENBQUNDLEtBQU4sRUFBSjtBQUFBLE9BQTlCO0FBQ0QsS0FuQjJCO0FBQUEseUZBcUJuQixVQUFBQyxFQUFFLEVBQUk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDYiw2QkFBb0IsTUFBS04sS0FBTCxDQUFXQyxNQUEvQiw4SEFBdUM7QUFBQSxjQUE1QkcsS0FBNEI7O0FBQ3JDO0FBQ0EsY0FBSUcsTUFBTSxDQUFDSCxLQUFLLENBQUNFLEVBQVAsQ0FBTixDQUFpQkUsVUFBakIsQ0FBNEJGLEVBQTVCLENBQUosRUFBcUM7QUFDbkMsa0JBQUtHLFVBQUwsQ0FBZ0JMLEtBQUssQ0FBQ0UsRUFBdEI7QUFDRDtBQUNGO0FBTlk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9kLEtBNUIyQjtBQUFBLHlGQThCbkIsVUFBQ0ksS0FBRCxFQUFRakIsUUFBUixFQUFxQjtBQUM1QjtBQUNBLFVBQUlELFdBQVcsQ0FBQ0MsUUFBRCxDQUFmLEVBQTJCO0FBQ3pCLGNBQUtrQixNQUFMLENBQVlsQixRQUFRLENBQUNhLEVBQXJCO0FBQ0Q7O0FBRUQsVUFBTU0sUUFBUSxHQUFHLE1BQUtDLG1CQUFMLENBQXlCSCxLQUF6QixFQUFnQ2pCLFFBQWhDLENBQWpCOztBQUVBLFlBQUtxQixRQUFMLENBQWMsVUFBQUMsYUFBYSxFQUFJO0FBQzdCLGVBQU87QUFDTGQsVUFBQUEsTUFBTSxHQUFHVyxRQUFILDBDQUFnQkcsYUFBYSxDQUFDZCxNQUE5QjtBQURELFNBQVA7QUFHRCxPQUpEOztBQU1BLGFBQU9XLFFBQVA7QUFDRCxLQTdDMkI7QUFBQSxzR0ErQ04sVUFBQ0YsS0FBRCxFQUFRakIsUUFBUixFQUFxQjtBQUN6QyxVQUFNdUIsUUFBUSxHQUFHLEVBQUVuQixZQUFZLENBQUNvQixTQUFoQztBQUNBLFVBQU1YLEVBQUUsR0FBR2QsV0FBVyxDQUFDQyxRQUFELENBQVgsYUFBMkJBLFFBQVEsQ0FBQ2EsRUFBcEMsY0FBMENVLFFBQTFDLElBQXVEQSxRQUFsRTtBQUVBLGFBQU87QUFDTFYsUUFBQUEsRUFBRSxFQUFGQSxFQURLO0FBRUxJLFFBQUFBLEtBQUssRUFBTEEsS0FGSztBQUdMUSxRQUFBQSxXQUFXLEVBQUV6QixRQUFRLENBQUN5QixXQUhqQjtBQUlMQyxRQUFBQSxjQUFjLEVBQUUxQixRQUFRLENBQUMwQixjQUFULElBQTJCLElBSnRDO0FBS0xDLFFBQUFBLFFBQVEsRUFBRTNCLFFBQVEsQ0FBQzJCLFFBQVQsSUFBcUIsQ0FMMUI7QUFNTGYsUUFBQUEsS0FBSyxFQUFFO0FBQUEsaUJBQU0sTUFBS0ksVUFBTCxDQUFnQkgsRUFBaEIsQ0FBTjtBQUFBLFNBTkY7QUFPTGUsUUFBQUEsTUFBTSxFQUFFNUIsUUFBUSxDQUFDNEI7QUFQWixPQUFQO0FBU0QsS0E1RDJCO0FBQUEsNkZBa0VmLFVBQUFmLEVBQUUsRUFBSTtBQUNqQixZQUFLUSxRQUFMLENBQWMsVUFBQUMsYUFBYSxFQUFJO0FBQzdCLGVBQU87QUFDTGQsVUFBQUEsTUFBTSxFQUFFYyxhQUFhLENBQUNkLE1BQWQsQ0FBcUJxQixHQUFyQixDQUF5QixVQUFBbEIsS0FBSyxFQUFJO0FBQ3hDLGdCQUFJQSxLQUFLLENBQUNFLEVBQU4sS0FBYUEsRUFBakIsRUFBcUI7QUFDbkIscURBQ0tGLEtBREw7QUFFRW1CLGdCQUFBQSxPQUFPLEVBQUU7QUFGWDtBQUlEOztBQUVELG1CQUFPbkIsS0FBUDtBQUNELFdBVE87QUFESCxTQUFQO0FBWUQsT0FiRDtBQWNELEtBakYyQjtBQUFBLDhGQW1GZCxVQUFBRSxFQUFFLEVBQUk7QUFDbEIsWUFBS1EsUUFBTCxDQUFjLFVBQUFDLGFBQWEsRUFBSTtBQUM3QixlQUFPO0FBQ0xkLFVBQUFBLE1BQU0sRUFBRWMsYUFBYSxDQUFDZCxNQUFkLENBQXFCdUIsTUFBckIsQ0FBNEIsVUFBQXBCLEtBQUs7QUFBQSxtQkFBSUEsS0FBSyxDQUFDRSxFQUFOLEtBQWFBLEVBQWpCO0FBQUEsV0FBakM7QUFESCxTQUFQO0FBR0QsT0FKRDtBQUtELEtBekYyQjtBQUcxQlIsSUFBQUEsS0FBSyxDQUFDMkIsVUFBTixDQUFpQixNQUFLQyxNQUF0QjtBQUNBNUIsSUFBQUEsS0FBSyxDQUFDNkIsVUFBTixDQUFpQixNQUFLaEIsTUFBdEI7QUFDQWIsSUFBQUEsS0FBSyxDQUFDOEIsYUFBTixDQUFvQixNQUFLMUIsU0FBekI7QUFDQUosSUFBQUEsS0FBSyxDQUFDK0IsWUFBTixDQUFtQixNQUFLQyxRQUF4QjtBQUVBLFVBQUs5QixLQUFMLEdBQWE7QUFDWEMsTUFBQUEsTUFBTSxFQUFFO0FBREcsS0FBYjtBQVIwQjtBQVczQjs7Ozs2QkFnRlE7QUFBQTs7QUFDUCxhQUNFO0FBQU0sUUFBQSxTQUFTLEVBQUVwQjtBQUFqQixTQUNHLEtBQUttQixLQUFMLENBQVdDLE1BQVgsQ0FBa0JxQixHQUFsQixDQUFzQixnQkFBbUM7QUFBQSxZQUFoQ2hCLEVBQWdDLFFBQWhDQSxFQUFnQztBQUFBLFlBQTVCWSxXQUE0QixRQUE1QkEsV0FBNEI7QUFBQSxZQUFacEIsS0FBWTtBQUN4RCxlQUNFLDZCQUFDLGNBQUQ7QUFBTyxVQUFBLEdBQUcsRUFBRVEsRUFBWjtBQUFnQixVQUFBLFFBQVEsRUFBRTtBQUFBLG1CQUFNLE1BQUksQ0FBQ3lCLFdBQUwsQ0FBaUJ6QixFQUFqQixDQUFOO0FBQUE7QUFBMUIsV0FBMERSLEtBQTFELEdBQ0dvQixXQURILENBREY7QUFLRCxPQU5BLENBREgsQ0FERjtBQVdEOzs7RUFoSXVDYyxlQUFNQyxhOzs7QUFBM0JwQyxZOzhCQUFBQSxZLGVBQ0E7QUFDakI7OztBQUdBNEIsRUFBQUEsVUFBVSxFQUFFUyxtQkFBVUMsSUFBVixDQUFlQyxVQUpWOztBQU1qQjs7O0FBR0FULEVBQUFBLFVBQVUsRUFBRU8sbUJBQVVDLElBQVYsQ0FBZUMsVUFUVjs7QUFXakI7OztBQUdBUixFQUFBQSxhQUFhLEVBQUVNLG1CQUFVQyxJQUFWLENBQWVDLFVBZGI7O0FBZ0JqQjs7O0FBR0FQLEVBQUFBLFlBQVksRUFBRUssbUJBQVVDLElBQVYsQ0FBZUM7QUFuQlosQzs4QkFEQXZDLFksZUF1QkEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFN0YWNraW5nT3JkZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9Ub2FzdCdcblxuY29uc3Qgd3JhcHBlckNsYXNzID0gY3NzKHtcbiAgbWF4V2lkdGg6IDU2MCxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgdG9wOiAwLFxuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIHpJbmRleDogU3RhY2tpbmdPcmRlci5UT0FTVEVSLFxuICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbn0pXG5cbmNvbnN0IGhhc0N1c3RvbUlkID0gc2V0dGluZ3MgPT4gT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoc2V0dGluZ3MsICdpZCcpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0TWFuYWdlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aXRoIHRoZSBgdGhpcy5ub3RpZnlgIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGJpbmROb3RpZnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2l0aCB0aGUgYHRoaXMucmVtb3ZlYCBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBiaW5kUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdpdGggdGhlIGB0aGlzLmdldFRvYXN0c2AgZnVuY3Rpb24uXG4gICAgICovXG4gICAgYmluZEdldFRvYXN0czogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aXRoIHRoZSBgdGhpcy5jbG9zZUFsbGAgZnVuY3Rpb24uXG4gICAgICovXG4gICAgYmluZENsb3NlQWxsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgaWRDb3VudGVyID0gMFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG5cbiAgICBwcm9wcy5iaW5kTm90aWZ5KHRoaXMubm90aWZ5KVxuICAgIHByb3BzLmJpbmRSZW1vdmUodGhpcy5yZW1vdmUpXG4gICAgcHJvcHMuYmluZEdldFRvYXN0cyh0aGlzLmdldFRvYXN0cylcbiAgICBwcm9wcy5iaW5kQ2xvc2VBbGwodGhpcy5jbG9zZUFsbClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0b2FzdHM6IFtdXG4gICAgfVxuICB9XG5cbiAgZ2V0VG9hc3RzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnRvYXN0c1xuICB9XG5cbiAgY2xvc2VBbGwgPSAoKSA9PiB7XG4gICAgdGhpcy5nZXRUb2FzdHMoKS5mb3JFYWNoKHRvYXN0ID0+IHRvYXN0LmNsb3NlKCkpXG4gIH1cblxuICByZW1vdmUgPSBpZCA9PiB7XG4gICAgZm9yIChjb25zdCB0b2FzdCBvZiB0aGlzLnN0YXRlLnRvYXN0cykge1xuICAgICAgLy8gU2luY2UgdW5pcXVlIElEIGlzIHN0aWxsIGFwcGVuZGVkIHRvIGEgY3VzdG9tIElELCBza2lwIHRoZSB1bmlxdWUgSUQgYW5kIGNoZWNrIG9ubHkgcHJlZml4XG4gICAgICBpZiAoU3RyaW5nKHRvYXN0LmlkKS5zdGFydHNXaXRoKGlkKSkge1xuICAgICAgICB0aGlzLmNsb3NlVG9hc3QodG9hc3QuaWQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbm90aWZ5ID0gKHRpdGxlLCBzZXR0aW5ncykgPT4ge1xuICAgIC8vIElmIHRoZXJlJ3MgYSBjdXN0b20gdG9hc3QgSUQgcGFzc2VkLCBjbG9zZSBleGlzdGluZyB0b2FzdHMgd2l0aCB0aGUgc2FtZSBjdXN0b20gSURcbiAgICBpZiAoaGFzQ3VzdG9tSWQoc2V0dGluZ3MpKSB7XG4gICAgICB0aGlzLnJlbW92ZShzZXR0aW5ncy5pZClcbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlVG9hc3RJbnN0YW5jZSh0aXRsZSwgc2V0dGluZ3MpXG5cbiAgICB0aGlzLnNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9hc3RzOiBbaW5zdGFuY2UsIC4uLnByZXZpb3VzU3RhdGUudG9hc3RzXVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNyZWF0ZVRvYXN0SW5zdGFuY2UgPSAodGl0bGUsIHNldHRpbmdzKSA9PiB7XG4gICAgY29uc3QgdW5pcXVlSWQgPSArK1RvYXN0TWFuYWdlci5pZENvdW50ZXJcbiAgICBjb25zdCBpZCA9IGhhc0N1c3RvbUlkKHNldHRpbmdzKSA/IGAke3NldHRpbmdzLmlkfS0ke3VuaXF1ZUlkfWAgOiB1bmlxdWVJZFxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogc2V0dGluZ3MuZGVzY3JpcHRpb24sXG4gICAgICBoYXNDbG9zZUJ1dHRvbjogc2V0dGluZ3MuaGFzQ2xvc2VCdXR0b24gfHwgdHJ1ZSxcbiAgICAgIGR1cmF0aW9uOiBzZXR0aW5ncy5kdXJhdGlvbiB8fCA1LFxuICAgICAgY2xvc2U6ICgpID0+IHRoaXMuY2xvc2VUb2FzdChpZCksXG4gICAgICBpbnRlbnQ6IHNldHRpbmdzLmludGVudFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdpbGwgc2V0IGlzU2hvd24gb24gdGhlIFRvYXN0IHdoaWNoIHdpbGwgY2xvc2UgdGhlIHRvYXN0LlxuICAgKiBJdCB3b24ndCByZW1vdmUgdGhlIHRvYXN0IHVudGlsIG9uRXhpdGVkIHRyaWdnZXJzIG9uUmVtb3ZlLlxuICAgKi9cbiAgY2xvc2VUb2FzdCA9IGlkID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9hc3RzOiBwcmV2aW91c1N0YXRlLnRvYXN0cy5tYXAodG9hc3QgPT4ge1xuICAgICAgICAgIGlmICh0b2FzdC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnRvYXN0LFxuICAgICAgICAgICAgICBpc1Nob3duOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0b2FzdFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZW1vdmVUb2FzdCA9IGlkID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9hc3RzOiBwcmV2aW91c1N0YXRlLnRvYXN0cy5maWx0ZXIodG9hc3QgPT4gdG9hc3QuaWQgIT09IGlkKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17d3JhcHBlckNsYXNzfT5cbiAgICAgICAge3RoaXMuc3RhdGUudG9hc3RzLm1hcCgoeyBpZCwgZGVzY3JpcHRpb24sIC4uLnByb3BzIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRvYXN0IGtleT17aWR9IG9uUmVtb3ZlPXsoKSA9PiB0aGlzLnJlbW92ZVRvYXN0KGlkKX0gey4uLnByb3BzfT5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9Ub2FzdD5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9zcGFuPlxuICAgIClcbiAgfVxufVxuIl19