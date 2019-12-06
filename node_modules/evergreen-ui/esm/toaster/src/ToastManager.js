import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import { StackingOrder } from '../../constants';
import Toast from './Toast';
var wrapperClass = css({
  maxWidth: 560,
  margin: '0 auto',
  top: 0,
  left: 0,
  right: 0,
  position: 'fixed',
  zIndex: StackingOrder.TOASTER,
  pointerEvents: 'none'
});

var hasCustomId = function hasCustomId(settings) {
  return Object.hasOwnProperty.call(settings, 'id');
};

var ToastManager =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ToastManager, _React$PureComponent);

  function ToastManager(props, context) {
    var _this;

    _classCallCheck(this, ToastManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToastManager).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "getToasts", function () {
      return _this.state.toasts;
    });

    _defineProperty(_assertThisInitialized(_this), "closeAll", function () {
      _this.getToasts().forEach(function (toast) {
        return toast.close();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "remove", function (id) {
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

    _defineProperty(_assertThisInitialized(_this), "notify", function (title, settings) {
      // If there's a custom toast ID passed, close existing toasts with the same custom ID
      if (hasCustomId(settings)) {
        _this.remove(settings.id);
      }

      var instance = _this.createToastInstance(title, settings);

      _this.setState(function (previousState) {
        return {
          toasts: [instance].concat(_toConsumableArray(previousState.toasts))
        };
      });

      return instance;
    });

    _defineProperty(_assertThisInitialized(_this), "createToastInstance", function (title, settings) {
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

    _defineProperty(_assertThisInitialized(_this), "closeToast", function (id) {
      _this.setState(function (previousState) {
        return {
          toasts: previousState.toasts.map(function (toast) {
            if (toast.id === id) {
              return _objectSpread({}, toast, {
                isShown: false
              });
            }

            return toast;
          })
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeToast", function (id) {
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

  _createClass(ToastManager, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("span", {
        className: wrapperClass
      }, this.state.toasts.map(function (_ref) {
        var id = _ref.id,
            description = _ref.description,
            props = _objectWithoutProperties(_ref, ["id", "description"]);

        return React.createElement(Toast, _extends({
          key: id,
          onRemove: function onRemove() {
            return _this2.removeToast(id);
          }
        }, props), description);
      }));
    }
  }]);

  return ToastManager;
}(React.PureComponent);

ToastManager.displayName = "ToastManager";

_defineProperty(ToastManager, "propTypes", {
  /**
   * Function called with the `this.notify` function.
   */
  bindNotify: PropTypes.func.isRequired,

  /**
   * Function called with the `this.remove` function.
   */
  bindRemove: PropTypes.func.isRequired,

  /**
   * Function called with the `this.getToasts` function.
   */
  bindGetToasts: PropTypes.func.isRequired,

  /**
   * Function called with the `this.closeAll` function.
   */
  bindCloseAll: PropTypes.func.isRequired
});

_defineProperty(ToastManager, "idCounter", 0);

export { ToastManager as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2FzdGVyL3NyYy9Ub2FzdE1hbmFnZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJjc3MiLCJQcm9wVHlwZXMiLCJTdGFja2luZ09yZGVyIiwiVG9hc3QiLCJ3cmFwcGVyQ2xhc3MiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInRvcCIsImxlZnQiLCJyaWdodCIsInBvc2l0aW9uIiwiekluZGV4IiwiVE9BU1RFUiIsInBvaW50ZXJFdmVudHMiLCJoYXNDdXN0b21JZCIsInNldHRpbmdzIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiVG9hc3RNYW5hZ2VyIiwicHJvcHMiLCJjb250ZXh0Iiwic3RhdGUiLCJ0b2FzdHMiLCJnZXRUb2FzdHMiLCJmb3JFYWNoIiwidG9hc3QiLCJjbG9zZSIsImlkIiwiU3RyaW5nIiwic3RhcnRzV2l0aCIsImNsb3NlVG9hc3QiLCJ0aXRsZSIsInJlbW92ZSIsImluc3RhbmNlIiwiY3JlYXRlVG9hc3RJbnN0YW5jZSIsInNldFN0YXRlIiwicHJldmlvdXNTdGF0ZSIsInVuaXF1ZUlkIiwiaWRDb3VudGVyIiwiZGVzY3JpcHRpb24iLCJoYXNDbG9zZUJ1dHRvbiIsImR1cmF0aW9uIiwiaW50ZW50IiwibWFwIiwiaXNTaG93biIsImZpbHRlciIsImJpbmROb3RpZnkiLCJub3RpZnkiLCJiaW5kUmVtb3ZlIiwiYmluZEdldFRvYXN0cyIsImJpbmRDbG9zZUFsbCIsImNsb3NlQWxsIiwicmVtb3ZlVG9hc3QiLCJQdXJlQ29tcG9uZW50IiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLEdBQVQsUUFBb0IsUUFBcEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsYUFBVCxRQUE4QixpQkFBOUI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLFNBQWxCO0FBRUEsSUFBTUMsWUFBWSxH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QUFDUCxhQUNFO0FBQU0sUUFBQSxTQUFTLEVBQUVuQjtBQUFqQixTQUNHLEtBQUtrQixLQUFMLENBQVdDLE1BQVgsQ0FBa0JxQixHQUFsQixDQUFzQixnQkFBbUM7QUFBQSxZQUFoQ2hCLEVBQWdDLFFBQWhDQSxFQUFnQztBQUFBLFlBQTVCWSxXQUE0QixRQUE1QkEsV0FBNEI7QUFBQSxZQUFacEIsS0FBWTs7QUFDeEQsZUFDRSxvQkFBQyxLQUFEO0FBQU8sVUFBQSxHQUFHLEVBQUVRLEVBQVo7QUFBZ0IsVUFBQSxRQUFRLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUN5QixXQUFMLENBQWlCekIsRUFBakIsQ0FBTjtBQUFBO0FBQTFCLFdBQTBEUixLQUExRCxHQUNHb0IsV0FESCxDQURGO0FBS0QsT0FOQSxDQURILENBREY7QUFXRDs7OztFQWhJdUN6QyxLQUFLLENBQUN1RCxhOztBQUEzQm5DLFk7O2dCQUFBQSxZLGVBQ0E7QUFDakI7OztBQUdBNEIsRUFBQUEsVUFBVSxFQUFFOUMsU0FBUyxDQUFDc0QsSUFBVixDQUFlQyxVQUpWOztBQU1qQjs7O0FBR0FQLEVBQUFBLFVBQVUsRUFBRWhELFNBQVMsQ0FBQ3NELElBQVYsQ0FBZUMsVUFUVjs7QUFXakI7OztBQUdBTixFQUFBQSxhQUFhLEVBQUVqRCxTQUFTLENBQUNzRCxJQUFWLENBQWVDLFVBZGI7O0FBZ0JqQjs7O0FBR0FMLEVBQUFBLFlBQVksRUFBRWxELFNBQVMsQ0FBQ3NELElBQVYsQ0FBZUM7QUFuQlosQzs7Z0JBREFyQyxZLGVBdUJBLEM7O1NBdkJBQSxZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgU3RhY2tpbmdPcmRlciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBUb2FzdCBmcm9tICcuL1RvYXN0J1xuXG5jb25zdCB3cmFwcGVyQ2xhc3MgPSBjc3Moe1xuICBtYXhXaWR0aDogNTYwLFxuICBtYXJnaW46ICcwIGF1dG8nLFxuICB0b3A6IDAsXG4gIGxlZnQ6IDAsXG4gIHJpZ2h0OiAwLFxuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgekluZGV4OiBTdGFja2luZ09yZGVyLlRPQVNURVIsXG4gIHBvaW50ZXJFdmVudHM6ICdub25lJ1xufSlcblxuY29uc3QgaGFzQ3VzdG9tSWQgPSBzZXR0aW5ncyA9PiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChzZXR0aW5ncywgJ2lkJylcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3RNYW5hZ2VyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdpdGggdGhlIGB0aGlzLm5vdGlmeWAgZnVuY3Rpb24uXG4gICAgICovXG4gICAgYmluZE5vdGlmeTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aXRoIHRoZSBgdGhpcy5yZW1vdmVgIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGJpbmRSZW1vdmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2l0aCB0aGUgYHRoaXMuZ2V0VG9hc3RzYCBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBiaW5kR2V0VG9hc3RzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdpdGggdGhlIGB0aGlzLmNsb3NlQWxsYCBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBiaW5kQ2xvc2VBbGw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBpZENvdW50ZXIgPSAwXG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcblxuICAgIHByb3BzLmJpbmROb3RpZnkodGhpcy5ub3RpZnkpXG4gICAgcHJvcHMuYmluZFJlbW92ZSh0aGlzLnJlbW92ZSlcbiAgICBwcm9wcy5iaW5kR2V0VG9hc3RzKHRoaXMuZ2V0VG9hc3RzKVxuICAgIHByb3BzLmJpbmRDbG9zZUFsbCh0aGlzLmNsb3NlQWxsKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRvYXN0czogW11cbiAgICB9XG4gIH1cblxuICBnZXRUb2FzdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUudG9hc3RzXG4gIH1cblxuICBjbG9zZUFsbCA9ICgpID0+IHtcbiAgICB0aGlzLmdldFRvYXN0cygpLmZvckVhY2godG9hc3QgPT4gdG9hc3QuY2xvc2UoKSlcbiAgfVxuXG4gIHJlbW92ZSA9IGlkID0+IHtcbiAgICBmb3IgKGNvbnN0IHRvYXN0IG9mIHRoaXMuc3RhdGUudG9hc3RzKSB7XG4gICAgICAvLyBTaW5jZSB1bmlxdWUgSUQgaXMgc3RpbGwgYXBwZW5kZWQgdG8gYSBjdXN0b20gSUQsIHNraXAgdGhlIHVuaXF1ZSBJRCBhbmQgY2hlY2sgb25seSBwcmVmaXhcbiAgICAgIGlmIChTdHJpbmcodG9hc3QuaWQpLnN0YXJ0c1dpdGgoaWQpKSB7XG4gICAgICAgIHRoaXMuY2xvc2VUb2FzdCh0b2FzdC5pZClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBub3RpZnkgPSAodGl0bGUsIHNldHRpbmdzKSA9PiB7XG4gICAgLy8gSWYgdGhlcmUncyBhIGN1c3RvbSB0b2FzdCBJRCBwYXNzZWQsIGNsb3NlIGV4aXN0aW5nIHRvYXN0cyB3aXRoIHRoZSBzYW1lIGN1c3RvbSBJRFxuICAgIGlmIChoYXNDdXN0b21JZChzZXR0aW5ncykpIHtcbiAgICAgIHRoaXMucmVtb3ZlKHNldHRpbmdzLmlkKVxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jcmVhdGVUb2FzdEluc3RhbmNlKHRpdGxlLCBzZXR0aW5ncylcblxuICAgIHRoaXMuc2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b2FzdHM6IFtpbnN0YW5jZSwgLi4ucHJldmlvdXNTdGF0ZS50b2FzdHNdXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY3JlYXRlVG9hc3RJbnN0YW5jZSA9ICh0aXRsZSwgc2V0dGluZ3MpID0+IHtcbiAgICBjb25zdCB1bmlxdWVJZCA9ICsrVG9hc3RNYW5hZ2VyLmlkQ291bnRlclxuICAgIGNvbnN0IGlkID0gaGFzQ3VzdG9tSWQoc2V0dGluZ3MpID8gYCR7c2V0dGluZ3MuaWR9LSR7dW5pcXVlSWR9YCA6IHVuaXF1ZUlkXG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQsXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBzZXR0aW5ncy5kZXNjcmlwdGlvbixcbiAgICAgIGhhc0Nsb3NlQnV0dG9uOiBzZXR0aW5ncy5oYXNDbG9zZUJ1dHRvbiB8fCB0cnVlLFxuICAgICAgZHVyYXRpb246IHNldHRpbmdzLmR1cmF0aW9uIHx8IDUsXG4gICAgICBjbG9zZTogKCkgPT4gdGhpcy5jbG9zZVRvYXN0KGlkKSxcbiAgICAgIGludGVudDogc2V0dGluZ3MuaW50ZW50XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBzZXQgaXNTaG93biBvbiB0aGUgVG9hc3Qgd2hpY2ggd2lsbCBjbG9zZSB0aGUgdG9hc3QuXG4gICAqIEl0IHdvbid0IHJlbW92ZSB0aGUgdG9hc3QgdW50aWwgb25FeGl0ZWQgdHJpZ2dlcnMgb25SZW1vdmUuXG4gICAqL1xuICBjbG9zZVRvYXN0ID0gaWQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b2FzdHM6IHByZXZpb3VzU3RhdGUudG9hc3RzLm1hcCh0b2FzdCA9PiB7XG4gICAgICAgICAgaWYgKHRvYXN0LmlkID09PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4udG9hc3QsXG4gICAgICAgICAgICAgIGlzU2hvd246IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRvYXN0XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZVRvYXN0ID0gaWQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b2FzdHM6IHByZXZpb3VzU3RhdGUudG9hc3RzLmZpbHRlcih0b2FzdCA9PiB0b2FzdC5pZCAhPT0gaWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXt3cmFwcGVyQ2xhc3N9PlxuICAgICAgICB7dGhpcy5zdGF0ZS50b2FzdHMubWFwKCh7IGlkLCBkZXNjcmlwdGlvbiwgLi4ucHJvcHMgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VG9hc3Qga2V5PXtpZH0gb25SZW1vdmU9eygpID0+IHRoaXMucmVtb3ZlVG9hc3QoaWQpfSB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L1RvYXN0PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICB9XG59XG4iXX0=