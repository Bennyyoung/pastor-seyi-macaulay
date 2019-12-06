import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import ReactDOM from 'react-dom';
import ToastManager from './ToastManager';
var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
/**
 * The Toaster manages the interactionsb between
 * the ToasterManger and the toast API.
 */

var Toaster = function Toaster() {
  var _this = this;

  _classCallCheck(this, Toaster);

  _defineProperty(this, "_bindNotify", function (handler) {
    _this.notifyHandler = handler;
  });

  _defineProperty(this, "_bindRemove", function (handler) {
    _this.removeHandler = handler;
  });

  _defineProperty(this, "_bindGetToasts", function (handler) {
    _this.getToastsHandler = handler;
  });

  _defineProperty(this, "_bindCloseAll", function (handler) {
    _this.closeAllHandler = handler;
  });

  _defineProperty(this, "getToasts", function () {
    return _this.getToastsHandler();
  });

  _defineProperty(this, "closeAll", function () {
    return _this.closeAllHandler();
  });

  _defineProperty(this, "notify", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread({}, settings, {
      intent: 'none'
    }));
  });

  _defineProperty(this, "success", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread({}, settings, {
      intent: 'success'
    }));
  });

  _defineProperty(this, "warning", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread({}, settings, {
      intent: 'warning'
    }));
  });

  _defineProperty(this, "danger", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread({}, settings, {
      intent: 'danger'
    }));
  });

  _defineProperty(this, "remove", function (id) {
    return _this.removeHandler(id);
  });

  if (!isBrowser) return;
  var container = document.createElement('div');
  container.setAttribute('data-evergreen-toaster-container', '');
  document.body.append(container);
  ReactDOM.render(React.createElement(ToastManager, {
    bindNotify: this._bindNotify,
    bindRemove: this._bindRemove,
    bindGetToasts: this._bindGetToasts,
    bindCloseAll: this._bindCloseAll
  }), container);
};

export { Toaster as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2FzdGVyL3NyYy9Ub2FzdGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJUb2FzdE1hbmFnZXIiLCJpc0Jyb3dzZXIiLCJ3aW5kb3ciLCJkb2N1bWVudCIsIlRvYXN0ZXIiLCJoYW5kbGVyIiwibm90aWZ5SGFuZGxlciIsInJlbW92ZUhhbmRsZXIiLCJnZXRUb2FzdHNIYW5kbGVyIiwiY2xvc2VBbGxIYW5kbGVyIiwidGl0bGUiLCJzZXR0aW5ncyIsImludGVudCIsImlkIiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmQiLCJyZW5kZXIiLCJfYmluZE5vdGlmeSIsIl9iaW5kUmVtb3ZlIiwiX2JpbmRHZXRUb2FzdHMiLCJfYmluZENsb3NlQWxsIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixXQUFyQjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsZ0JBQXpCO0FBRUEsSUFBTUMsU0FBUyxHQUNiLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBT0EsTUFBTSxDQUFDQyxRQUFkLEtBQTJCLFdBRDlEO0FBR0E7Ozs7O0lBSXFCQyxPLEdBQ25CLG1CQUFjO0FBQUE7O0FBQUE7O0FBQUEsdUNBa0JBLFVBQUFDLE9BQU8sRUFBSTtBQUN2QixJQUFBLEtBQUksQ0FBQ0MsYUFBTCxHQUFxQkQsT0FBckI7QUFDRCxHQXBCYTs7QUFBQSx1Q0FzQkEsVUFBQUEsT0FBTyxFQUFJO0FBQ3ZCLElBQUEsS0FBSSxDQUFDRSxhQUFMLEdBQXFCRixPQUFyQjtBQUNELEdBeEJhOztBQUFBLDBDQTBCRyxVQUFBQSxPQUFPLEVBQUk7QUFDMUIsSUFBQSxLQUFJLENBQUNHLGdCQUFMLEdBQXdCSCxPQUF4QjtBQUNELEdBNUJhOztBQUFBLHlDQThCRSxVQUFBQSxPQUFPLEVBQUk7QUFDekIsSUFBQSxLQUFJLENBQUNJLGVBQUwsR0FBdUJKLE9BQXZCO0FBQ0QsR0FoQ2E7O0FBQUEscUNBa0NGLFlBQU07QUFDaEIsV0FBTyxLQUFJLENBQUNHLGdCQUFMLEVBQVA7QUFDRCxHQXBDYTs7QUFBQSxvQ0FzQ0gsWUFBTTtBQUNmLFdBQU8sS0FBSSxDQUFDQyxlQUFMLEVBQVA7QUFDRCxHQXhDYTs7QUFBQSxrQ0EwQ0wsVUFBQ0MsS0FBRCxFQUEwQjtBQUFBLFFBQWxCQyxRQUFrQix1RUFBUCxFQUFPO0FBQ2pDLFdBQU8sS0FBSSxDQUFDTCxhQUFMLENBQW1CSSxLQUFuQixvQkFBK0JDLFFBQS9CO0FBQXlDQyxNQUFBQSxNQUFNLEVBQUU7QUFBakQsT0FBUDtBQUNELEdBNUNhOztBQUFBLG1DQThDSixVQUFDRixLQUFELEVBQTBCO0FBQUEsUUFBbEJDLFFBQWtCLHVFQUFQLEVBQU87QUFDbEMsV0FBTyxLQUFJLENBQUNMLGFBQUwsQ0FBbUJJLEtBQW5CLG9CQUErQkMsUUFBL0I7QUFBeUNDLE1BQUFBLE1BQU0sRUFBRTtBQUFqRCxPQUFQO0FBQ0QsR0FoRGE7O0FBQUEsbUNBa0RKLFVBQUNGLEtBQUQsRUFBMEI7QUFBQSxRQUFsQkMsUUFBa0IsdUVBQVAsRUFBTztBQUNsQyxXQUFPLEtBQUksQ0FBQ0wsYUFBTCxDQUFtQkksS0FBbkIsb0JBQStCQyxRQUEvQjtBQUF5Q0MsTUFBQUEsTUFBTSxFQUFFO0FBQWpELE9BQVA7QUFDRCxHQXBEYTs7QUFBQSxrQ0FzREwsVUFBQ0YsS0FBRCxFQUEwQjtBQUFBLFFBQWxCQyxRQUFrQix1RUFBUCxFQUFPO0FBQ2pDLFdBQU8sS0FBSSxDQUFDTCxhQUFMLENBQW1CSSxLQUFuQixvQkFBK0JDLFFBQS9CO0FBQXlDQyxNQUFBQSxNQUFNLEVBQUU7QUFBakQsT0FBUDtBQUNELEdBeERhOztBQUFBLGtDQTBETCxVQUFBQyxFQUFFLEVBQUk7QUFDYixXQUFPLEtBQUksQ0FBQ04sYUFBTCxDQUFtQk0sRUFBbkIsQ0FBUDtBQUNELEdBNURhOztBQUNaLE1BQUksQ0FBQ1osU0FBTCxFQUFnQjtBQUVoQixNQUFNYSxTQUFTLEdBQUdYLFFBQVEsQ0FBQ1ksYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBRCxFQUFBQSxTQUFTLENBQUNFLFlBQVYsQ0FBdUIsa0NBQXZCLEVBQTJELEVBQTNEO0FBQ0FiLEVBQUFBLFFBQVEsQ0FBQ2MsSUFBVCxDQUFjQyxNQUFkLENBQXFCSixTQUFyQjtBQUVBZixFQUFBQSxRQUFRLENBQUNvQixNQUFULENBQ0Usb0JBQUMsWUFBRDtBQUNFLElBQUEsVUFBVSxFQUFFLEtBQUtDLFdBRG5CO0FBRUUsSUFBQSxVQUFVLEVBQUUsS0FBS0MsV0FGbkI7QUFHRSxJQUFBLGFBQWEsRUFBRSxLQUFLQyxjQUh0QjtBQUlFLElBQUEsWUFBWSxFQUFFLEtBQUtDO0FBSnJCLElBREYsRUFPRVQsU0FQRjtBQVNELEM7O1NBakJrQlYsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgVG9hc3RNYW5hZ2VyIGZyb20gJy4vVG9hc3RNYW5hZ2VyJ1xuXG5jb25zdCBpc0Jyb3dzZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG4vKipcbiAqIFRoZSBUb2FzdGVyIG1hbmFnZXMgdGhlIGludGVyYWN0aW9uc2IgYmV0d2VlblxuICogdGhlIFRvYXN0ZXJNYW5nZXIgYW5kIHRoZSB0b2FzdCBBUEkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIWlzQnJvd3NlcikgcmV0dXJuXG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlcmdyZWVuLXRvYXN0ZXItY29udGFpbmVyJywgJycpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGFpbmVyKVxuXG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgPFRvYXN0TWFuYWdlclxuICAgICAgICBiaW5kTm90aWZ5PXt0aGlzLl9iaW5kTm90aWZ5fVxuICAgICAgICBiaW5kUmVtb3ZlPXt0aGlzLl9iaW5kUmVtb3ZlfVxuICAgICAgICBiaW5kR2V0VG9hc3RzPXt0aGlzLl9iaW5kR2V0VG9hc3RzfVxuICAgICAgICBiaW5kQ2xvc2VBbGw9e3RoaXMuX2JpbmRDbG9zZUFsbH1cbiAgICAgIC8+LFxuICAgICAgY29udGFpbmVyXG4gICAgKVxuICB9XG5cbiAgX2JpbmROb3RpZnkgPSBoYW5kbGVyID0+IHtcbiAgICB0aGlzLm5vdGlmeUhhbmRsZXIgPSBoYW5kbGVyXG4gIH1cblxuICBfYmluZFJlbW92ZSA9IGhhbmRsZXIgPT4ge1xuICAgIHRoaXMucmVtb3ZlSGFuZGxlciA9IGhhbmRsZXJcbiAgfVxuXG4gIF9iaW5kR2V0VG9hc3RzID0gaGFuZGxlciA9PiB7XG4gICAgdGhpcy5nZXRUb2FzdHNIYW5kbGVyID0gaGFuZGxlclxuICB9XG5cbiAgX2JpbmRDbG9zZUFsbCA9IGhhbmRsZXIgPT4ge1xuICAgIHRoaXMuY2xvc2VBbGxIYW5kbGVyID0gaGFuZGxlclxuICB9XG5cbiAgZ2V0VG9hc3RzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmdldFRvYXN0c0hhbmRsZXIoKVxuICB9XG5cbiAgY2xvc2VBbGwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xvc2VBbGxIYW5kbGVyKClcbiAgfVxuXG4gIG5vdGlmeSA9ICh0aXRsZSwgc2V0dGluZ3MgPSB7fSkgPT4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeUhhbmRsZXIodGl0bGUsIHsgLi4uc2V0dGluZ3MsIGludGVudDogJ25vbmUnIH0pXG4gIH1cblxuICBzdWNjZXNzID0gKHRpdGxlLCBzZXR0aW5ncyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5SGFuZGxlcih0aXRsZSwgeyAuLi5zZXR0aW5ncywgaW50ZW50OiAnc3VjY2VzcycgfSlcbiAgfVxuXG4gIHdhcm5pbmcgPSAodGl0bGUsIHNldHRpbmdzID0ge30pID0+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnlIYW5kbGVyKHRpdGxlLCB7IC4uLnNldHRpbmdzLCBpbnRlbnQ6ICd3YXJuaW5nJyB9KVxuICB9XG5cbiAgZGFuZ2VyID0gKHRpdGxlLCBzZXR0aW5ncyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5SGFuZGxlcih0aXRsZSwgeyAuLi5zZXR0aW5ncywgaW50ZW50OiAnZGFuZ2VyJyB9KVxuICB9XG5cbiAgcmVtb3ZlID0gaWQgPT4ge1xuICAgIHJldHVybiB0aGlzLnJlbW92ZUhhbmRsZXIoaWQpXG4gIH1cbn1cbiJdfQ==