"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ToastManager = _interopRequireDefault(require("./ToastManager"));

var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
/**
 * The Toaster manages the interactionsb between
 * the ToasterManger and the toast API.
 */

var Toaster = function Toaster() {
  var _this = this;

  (0, _classCallCheck2.default)(this, Toaster);
  (0, _defineProperty2.default)(this, "_bindNotify", function (handler) {
    _this.notifyHandler = handler;
  });
  (0, _defineProperty2.default)(this, "_bindRemove", function (handler) {
    _this.removeHandler = handler;
  });
  (0, _defineProperty2.default)(this, "_bindGetToasts", function (handler) {
    _this.getToastsHandler = handler;
  });
  (0, _defineProperty2.default)(this, "_bindCloseAll", function (handler) {
    _this.closeAllHandler = handler;
  });
  (0, _defineProperty2.default)(this, "getToasts", function () {
    return _this.getToastsHandler();
  });
  (0, _defineProperty2.default)(this, "closeAll", function () {
    return _this.closeAllHandler();
  });
  (0, _defineProperty2.default)(this, "notify", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, (0, _objectSpread2.default)({}, settings, {
      intent: 'none'
    }));
  });
  (0, _defineProperty2.default)(this, "success", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, (0, _objectSpread2.default)({}, settings, {
      intent: 'success'
    }));
  });
  (0, _defineProperty2.default)(this, "warning", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, (0, _objectSpread2.default)({}, settings, {
      intent: 'warning'
    }));
  });
  (0, _defineProperty2.default)(this, "danger", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, (0, _objectSpread2.default)({}, settings, {
      intent: 'danger'
    }));
  });
  (0, _defineProperty2.default)(this, "remove", function (id) {
    return _this.removeHandler(id);
  });
  if (!isBrowser) return;
  var container = document.createElement('div');
  container.setAttribute('data-evergreen-toaster-container', '');
  document.body.append(container);

  _reactDom.default.render(_react.default.createElement(_ToastManager.default, {
    bindNotify: this._bindNotify,
    bindRemove: this._bindRemove,
    bindGetToasts: this._bindGetToasts,
    bindCloseAll: this._bindCloseAll
  }), container);
};

exports.default = Toaster;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2FzdGVyL3NyYy9Ub2FzdGVyLmpzIl0sIm5hbWVzIjpbImlzQnJvd3NlciIsIndpbmRvdyIsImRvY3VtZW50IiwiVG9hc3RlciIsImhhbmRsZXIiLCJub3RpZnlIYW5kbGVyIiwicmVtb3ZlSGFuZGxlciIsImdldFRvYXN0c0hhbmRsZXIiLCJjbG9zZUFsbEhhbmRsZXIiLCJ0aXRsZSIsInNldHRpbmdzIiwiaW50ZW50IiwiaWQiLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYm9keSIsImFwcGVuZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiX2JpbmROb3RpZnkiLCJfYmluZFJlbW92ZSIsIl9iaW5kR2V0VG9hc3RzIiwiX2JpbmRDbG9zZUFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUNiLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBT0EsTUFBTSxDQUFDQyxRQUFkLEtBQTJCLFdBRDlEO0FBR0E7Ozs7O0lBSXFCQyxPLEdBQ25CLG1CQUFjO0FBQUE7O0FBQUE7QUFBQSxxREFrQkEsVUFBQUMsT0FBTyxFQUFJO0FBQ3ZCLElBQUEsS0FBSSxDQUFDQyxhQUFMLEdBQXFCRCxPQUFyQjtBQUNELEdBcEJhO0FBQUEscURBc0JBLFVBQUFBLE9BQU8sRUFBSTtBQUN2QixJQUFBLEtBQUksQ0FBQ0UsYUFBTCxHQUFxQkYsT0FBckI7QUFDRCxHQXhCYTtBQUFBLHdEQTBCRyxVQUFBQSxPQUFPLEVBQUk7QUFDMUIsSUFBQSxLQUFJLENBQUNHLGdCQUFMLEdBQXdCSCxPQUF4QjtBQUNELEdBNUJhO0FBQUEsdURBOEJFLFVBQUFBLE9BQU8sRUFBSTtBQUN6QixJQUFBLEtBQUksQ0FBQ0ksZUFBTCxHQUF1QkosT0FBdkI7QUFDRCxHQWhDYTtBQUFBLG1EQWtDRixZQUFNO0FBQ2hCLFdBQU8sS0FBSSxDQUFDRyxnQkFBTCxFQUFQO0FBQ0QsR0FwQ2E7QUFBQSxrREFzQ0gsWUFBTTtBQUNmLFdBQU8sS0FBSSxDQUFDQyxlQUFMLEVBQVA7QUFDRCxHQXhDYTtBQUFBLGdEQTBDTCxVQUFDQyxLQUFELEVBQTBCO0FBQUEsUUFBbEJDLFFBQWtCLHVFQUFQLEVBQU87QUFDakMsV0FBTyxLQUFJLENBQUNMLGFBQUwsQ0FBbUJJLEtBQW5CLGtDQUErQkMsUUFBL0I7QUFBeUNDLE1BQUFBLE1BQU0sRUFBRTtBQUFqRCxPQUFQO0FBQ0QsR0E1Q2E7QUFBQSxpREE4Q0osVUFBQ0YsS0FBRCxFQUEwQjtBQUFBLFFBQWxCQyxRQUFrQix1RUFBUCxFQUFPO0FBQ2xDLFdBQU8sS0FBSSxDQUFDTCxhQUFMLENBQW1CSSxLQUFuQixrQ0FBK0JDLFFBQS9CO0FBQXlDQyxNQUFBQSxNQUFNLEVBQUU7QUFBakQsT0FBUDtBQUNELEdBaERhO0FBQUEsaURBa0RKLFVBQUNGLEtBQUQsRUFBMEI7QUFBQSxRQUFsQkMsUUFBa0IsdUVBQVAsRUFBTztBQUNsQyxXQUFPLEtBQUksQ0FBQ0wsYUFBTCxDQUFtQkksS0FBbkIsa0NBQStCQyxRQUEvQjtBQUF5Q0MsTUFBQUEsTUFBTSxFQUFFO0FBQWpELE9BQVA7QUFDRCxHQXBEYTtBQUFBLGdEQXNETCxVQUFDRixLQUFELEVBQTBCO0FBQUEsUUFBbEJDLFFBQWtCLHVFQUFQLEVBQU87QUFDakMsV0FBTyxLQUFJLENBQUNMLGFBQUwsQ0FBbUJJLEtBQW5CLGtDQUErQkMsUUFBL0I7QUFBeUNDLE1BQUFBLE1BQU0sRUFBRTtBQUFqRCxPQUFQO0FBQ0QsR0F4RGE7QUFBQSxnREEwREwsVUFBQUMsRUFBRSxFQUFJO0FBQ2IsV0FBTyxLQUFJLENBQUNOLGFBQUwsQ0FBbUJNLEVBQW5CLENBQVA7QUFDRCxHQTVEYTtBQUNaLE1BQUksQ0FBQ1osU0FBTCxFQUFnQjtBQUVoQixNQUFNYSxTQUFTLEdBQUdYLFFBQVEsQ0FBQ1ksYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBRCxFQUFBQSxTQUFTLENBQUNFLFlBQVYsQ0FBdUIsa0NBQXZCLEVBQTJELEVBQTNEO0FBQ0FiLEVBQUFBLFFBQVEsQ0FBQ2MsSUFBVCxDQUFjQyxNQUFkLENBQXFCSixTQUFyQjs7QUFFQUssb0JBQVNDLE1BQVQsQ0FDRSw2QkFBQyxxQkFBRDtBQUNFLElBQUEsVUFBVSxFQUFFLEtBQUtDLFdBRG5CO0FBRUUsSUFBQSxVQUFVLEVBQUUsS0FBS0MsV0FGbkI7QUFHRSxJQUFBLGFBQWEsRUFBRSxLQUFLQyxjQUh0QjtBQUlFLElBQUEsWUFBWSxFQUFFLEtBQUtDO0FBSnJCLElBREYsRUFPRVYsU0FQRjtBQVNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFRvYXN0TWFuYWdlciBmcm9tICcuL1RvYXN0TWFuYWdlcidcblxuY29uc3QgaXNCcm93c2VyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuLyoqXG4gKiBUaGUgVG9hc3RlciBtYW5hZ2VzIHRoZSBpbnRlcmFjdGlvbnNiIGJldHdlZW5cbiAqIHRoZSBUb2FzdGVyTWFuZ2VyIGFuZCB0aGUgdG9hc3QgQVBJLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKCFpc0Jyb3dzZXIpIHJldHVyblxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWV2ZXJncmVlbi10b2FzdGVyLWNvbnRhaW5lcicsICcnKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRhaW5lcilcblxuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgIDxUb2FzdE1hbmFnZXJcbiAgICAgICAgYmluZE5vdGlmeT17dGhpcy5fYmluZE5vdGlmeX1cbiAgICAgICAgYmluZFJlbW92ZT17dGhpcy5fYmluZFJlbW92ZX1cbiAgICAgICAgYmluZEdldFRvYXN0cz17dGhpcy5fYmluZEdldFRvYXN0c31cbiAgICAgICAgYmluZENsb3NlQWxsPXt0aGlzLl9iaW5kQ2xvc2VBbGx9XG4gICAgICAvPixcbiAgICAgIGNvbnRhaW5lclxuICAgIClcbiAgfVxuXG4gIF9iaW5kTm90aWZ5ID0gaGFuZGxlciA9PiB7XG4gICAgdGhpcy5ub3RpZnlIYW5kbGVyID0gaGFuZGxlclxuICB9XG5cbiAgX2JpbmRSZW1vdmUgPSBoYW5kbGVyID0+IHtcbiAgICB0aGlzLnJlbW92ZUhhbmRsZXIgPSBoYW5kbGVyXG4gIH1cblxuICBfYmluZEdldFRvYXN0cyA9IGhhbmRsZXIgPT4ge1xuICAgIHRoaXMuZ2V0VG9hc3RzSGFuZGxlciA9IGhhbmRsZXJcbiAgfVxuXG4gIF9iaW5kQ2xvc2VBbGwgPSBoYW5kbGVyID0+IHtcbiAgICB0aGlzLmNsb3NlQWxsSGFuZGxlciA9IGhhbmRsZXJcbiAgfVxuXG4gIGdldFRvYXN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRUb2FzdHNIYW5kbGVyKClcbiAgfVxuXG4gIGNsb3NlQWxsID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmNsb3NlQWxsSGFuZGxlcigpXG4gIH1cblxuICBub3RpZnkgPSAodGl0bGUsIHNldHRpbmdzID0ge30pID0+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnlIYW5kbGVyKHRpdGxlLCB7IC4uLnNldHRpbmdzLCBpbnRlbnQ6ICdub25lJyB9KVxuICB9XG5cbiAgc3VjY2VzcyA9ICh0aXRsZSwgc2V0dGluZ3MgPSB7fSkgPT4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeUhhbmRsZXIodGl0bGUsIHsgLi4uc2V0dGluZ3MsIGludGVudDogJ3N1Y2Nlc3MnIH0pXG4gIH1cblxuICB3YXJuaW5nID0gKHRpdGxlLCBzZXR0aW5ncyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5SGFuZGxlcih0aXRsZSwgeyAuLi5zZXR0aW5ncywgaW50ZW50OiAnd2FybmluZycgfSlcbiAgfVxuXG4gIGRhbmdlciA9ICh0aXRsZSwgc2V0dGluZ3MgPSB7fSkgPT4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeUhhbmRsZXIodGl0bGUsIHsgLi4uc2V0dGluZ3MsIGludGVudDogJ2RhbmdlcicgfSlcbiAgfVxuXG4gIHJlbW92ZSA9IGlkID0+IHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVIYW5kbGVyKGlkKVxuICB9XG59XG4iXX0=