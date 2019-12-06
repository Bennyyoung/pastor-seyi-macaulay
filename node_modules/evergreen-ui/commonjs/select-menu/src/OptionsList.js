"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fuzzaldrinPlus = _interopRequireDefault(require("fuzzaldrin-plus"));

var _reactTinyVirtualList = _interopRequireDefault(require("react-tiny-virtual-list"));

var _layers = require("../../layers");

var _table = require("../../table");

var _OptionShapePropType = _interopRequireDefault(require("./OptionShapePropType"));

var _Option = _interopRequireDefault(require("./Option"));

/**
 * Fuzzaldrin-plus is the default filter, but you can use your own
 * as long as they follow the following signature:
 * @param options <Array[String]> - ['label', 'label2', ...]
 * @param input <String>
 */
var fuzzyFilter = function fuzzyFilter(options, input, _ref) {
  var key = _ref.key;
  return _fuzzaldrinPlus.default.filter(options, input, {
    key: key
  });
};
/**
 * This is the default item renderer of options
 * you can pass custom renderers as long as they work the same as the Option
 */


var itemRenderer = function itemRenderer(props) {
  return _react.default.createElement(_Option.default, props);
};

itemRenderer.displayName = "itemRenderer";

var OptionsList =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(OptionsList, _PureComponent);

  function OptionsList(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, OptionsList);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(OptionsList).call(this, props, context));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isSelected", function (item) {
      var selected = _this.state.selected;
      return Boolean(selected.find(function (selectedItem) {
        return selectedItem === item.value;
      }));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "search", function (options) {
      var optionsFilter = _this.props.optionsFilter;
      var searchValue = _this.state.searchValue;

      if (searchValue.trim() === '') {
        return options;
      } // Preserve backwards compatibility with allowing custom filters, which accept array of strings


      if (typeof optionsFilter === 'function') {
        return optionsFilter(options.map(function (item) {
          return item.label;
        }), searchValue).map(function (name) {
          return options.find(function (item) {
            return item.label === name;
          });
        });
      }

      return fuzzyFilter(options, searchValue, {
        key: 'label'
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getCurrentIndex", function () {
      var selected = _this.props.selected;

      var options = _this.getFilteredOptions();

      return options.findIndex(function (option) {
        return option.value === selected[selected.length - 1];
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleKeyDown", function (e) {
      if (e.keyCode === 38) {
        _this.handleArrowUp();
      }

      if (e.keyCode === 40) {
        _this.handleArrowDown();
      }

      if (e.keyCode === 13) {
        _this.handleEnter();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleArrowUp", function () {
      var onSelect = _this.props.onSelect;

      var options = _this.getFilteredOptions();

      var nextIndex = _this.getCurrentIndex() - 1;

      if (nextIndex < 0) {
        nextIndex = options.length - 1;
      }

      onSelect(options[nextIndex]);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleArrowDown", function () {
      var onSelect = _this.props.onSelect;

      var options = _this.getFilteredOptions();

      var nextIndex = _this.getCurrentIndex() + 1;

      if (nextIndex === options.length) {
        nextIndex = 0;
      }

      onSelect(options[nextIndex]);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleEnter", function () {
      var isSelected = _this.getCurrentIndex() !== -1;

      if (isSelected) {
        _this.props.close();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (searchValue) {
      _this.setState({
        searchValue: searchValue
      });

      _this.props.onFilterChange(searchValue);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSelect", function (item) {
      _this.props.onSelect(item);

      if (!_this.props.isMultiSelect && _this.props.closeOnSelect) {
        _this.props.close();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleDeselect", function (item) {
      _this.props.onDeselect(item);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "assignSearchRef", function (ref) {
      _this.searchRef = ref;
    });
    _this.state = {
      searchValue: props.defaultSearchValue,
      selected: props.selected
    };
    return _this;
  }

  (0, _createClass2.default)(OptionsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var hasFilter = this.props.hasFilter;
      if (!hasFilter) return;
      /**
       * Hacky solution for broken autoFocus
       * https://github.com/segmentio/evergreen/issues/90
       */

      requestAnimationFrame(function () {
        _this2.searchRef.querySelector('input').focus();
      });
      window.addEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.selected !== this.props.selected) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          selected: this.props.selected
        });
      }
    }
  }, {
    key: "getFilteredOptions",
    value: function getFilteredOptions() {
      var options = this.props.options;
      return this.search(options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          originalOptions = _this$props.options,
          close = _this$props.close,
          closeOnSelect = _this$props.closeOnSelect,
          width = _this$props.width,
          height = _this$props.height,
          onSelect = _this$props.onSelect,
          onDeselect = _this$props.onDeselect,
          onFilterChange = _this$props.onFilterChange,
          selected = _this$props.selected,
          hasFilter = _this$props.hasFilter,
          filterPlaceholder = _this$props.filterPlaceholder,
          filterIcon = _this$props.filterIcon,
          optionSize = _this$props.optionSize,
          _renderItem = _this$props.renderItem,
          optionsFilter = _this$props.optionsFilter,
          isMultiSelect = _this$props.isMultiSelect,
          defaultSearchValue = _this$props.defaultSearchValue,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["options", "close", "closeOnSelect", "width", "height", "onSelect", "onDeselect", "onFilterChange", "selected", "hasFilter", "filterPlaceholder", "filterIcon", "optionSize", "renderItem", "optionsFilter", "isMultiSelect", "defaultSearchValue"]);
      var options = this.search(originalOptions);
      var listHeight = height - (hasFilter ? 32 : 0);
      var currentIndex = this.getCurrentIndex();
      var scrollToIndex = currentIndex === -1 ? 0 : currentIndex;
      return _react.default.createElement(_layers.Pane, (0, _extends2.default)({
        height: height,
        width: width,
        display: "flex",
        flexDirection: "column"
      }, props), hasFilter && _react.default.createElement(_table.TableHead, null, _react.default.createElement(_table.SearchTableHeaderCell, {
        onChange: this.handleChange,
        innerRef: this.assignSearchRef,
        borderRight: null,
        height: 32,
        placeholder: filterPlaceholder,
        icon: filterIcon
      })), _react.default.createElement(_layers.Pane, {
        flex: 1
      }, _react.default.createElement(_reactTinyVirtualList.default, {
        height: listHeight,
        width: "100%",
        itemSize: optionSize,
        itemCount: options.length,
        overscanCount: 20,
        scrollToAlignment: "auto",
        scrollToIndex: scrollToIndex || undefined,
        renderItem: function renderItem(_ref2) {
          var index = _ref2.index,
              style = _ref2.style;
          var item = options[index];

          var isSelected = _this3.isSelected(item);

          return _renderItem({
            key: item.value,
            label: item.label,
            icon: item.icon,
            style: style,
            height: optionSize,
            onSelect: function onSelect() {
              return _this3.handleSelect(item);
            },
            onDeselect: function onDeselect() {
              return _this3.handleDeselect(item);
            },
            isSelectable: !isSelected || isMultiSelect,
            isSelected: isSelected,
            disabled: item.disabled
          });
        }
      })));
    }
  }]);
  return OptionsList;
}(_react.PureComponent);

exports.default = OptionsList;
OptionsList.displayName = "OptionsList";
(0, _defineProperty2.default)(OptionsList, "propTypes", {
  options: _propTypes.default.arrayOf(_OptionShapePropType.default),
  close: _propTypes.default.func,
  height: _propTypes.default.number,
  width: _propTypes.default.number,

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: _propTypes.default.bool,

  /**
   * When true, menu closes on option selection.
   */
  closeOnSelect: _propTypes.default.bool,

  /**
   * This holds the values of the options
   */
  selected: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  onSelect: _propTypes.default.func,
  onDeselect: _propTypes.default.func,
  onFilterChange: _propTypes.default.func,
  hasFilter: _propTypes.default.bool,
  optionSize: _propTypes.default.number,
  renderItem: _propTypes.default.func,
  filterPlaceholder: _propTypes.default.string,
  filterIcon: _propTypes.default.string,
  optionsFilter: _propTypes.default.func,
  defaultSearchValue: _propTypes.default.string
});
(0, _defineProperty2.default)(OptionsList, "defaultProps", {
  options: [],

  /**
   * Including border bottom
   * For some reason passing height to TableRow doesn't work
   * TODO: fix hacky solution
   */
  optionSize: 33,
  onSelect: function onSelect() {},
  onDeselect: function onDeselect() {},
  onFilterChange: function onFilterChange() {},
  selected: [],
  renderItem: itemRenderer,
  filterPlaceholder: 'Filter...',
  filterIcon: 'search',
  defaultSearchValue: ''
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvT3B0aW9uc0xpc3QuanMiXSwibmFtZXMiOlsiZnV6enlGaWx0ZXIiLCJvcHRpb25zIiwiaW5wdXQiLCJrZXkiLCJmdXp6YWxkcmluIiwiZmlsdGVyIiwiaXRlbVJlbmRlcmVyIiwicHJvcHMiLCJPcHRpb25zTGlzdCIsImNvbnRleHQiLCJpdGVtIiwic2VsZWN0ZWQiLCJzdGF0ZSIsIkJvb2xlYW4iLCJmaW5kIiwic2VsZWN0ZWRJdGVtIiwidmFsdWUiLCJvcHRpb25zRmlsdGVyIiwic2VhcmNoVmFsdWUiLCJ0cmltIiwibWFwIiwibGFiZWwiLCJuYW1lIiwiZ2V0RmlsdGVyZWRPcHRpb25zIiwiZmluZEluZGV4Iiwib3B0aW9uIiwibGVuZ3RoIiwiZSIsImtleUNvZGUiLCJoYW5kbGVBcnJvd1VwIiwiaGFuZGxlQXJyb3dEb3duIiwiaGFuZGxlRW50ZXIiLCJvblNlbGVjdCIsIm5leHRJbmRleCIsImdldEN1cnJlbnRJbmRleCIsImlzU2VsZWN0ZWQiLCJjbG9zZSIsInNldFN0YXRlIiwib25GaWx0ZXJDaGFuZ2UiLCJpc011bHRpU2VsZWN0IiwiY2xvc2VPblNlbGVjdCIsIm9uRGVzZWxlY3QiLCJyZWYiLCJzZWFyY2hSZWYiLCJkZWZhdWx0U2VhcmNoVmFsdWUiLCJoYXNGaWx0ZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5RG93biIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwcmV2UHJvcHMiLCJzZWFyY2giLCJvcmlnaW5hbE9wdGlvbnMiLCJ3aWR0aCIsImhlaWdodCIsImZpbHRlclBsYWNlaG9sZGVyIiwiZmlsdGVySWNvbiIsIm9wdGlvblNpemUiLCJyZW5kZXJJdGVtIiwibGlzdEhlaWdodCIsImN1cnJlbnRJbmRleCIsInNjcm9sbFRvSW5kZXgiLCJoYW5kbGVDaGFuZ2UiLCJhc3NpZ25TZWFyY2hSZWYiLCJ1bmRlZmluZWQiLCJpbmRleCIsInN0eWxlIiwiaWNvbiIsImhhbmRsZVNlbGVjdCIsImhhbmRsZURlc2VsZWN0IiwiaXNTZWxlY3RhYmxlIiwiZGlzYWJsZWQiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIk9wdGlvblNoYXBlUHJvcFR5cGUiLCJmdW5jIiwibnVtYmVyIiwiYm9vbCIsIm9uZU9mVHlwZSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBTUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLFFBQTZCO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQy9DLFNBQU9DLHdCQUFXQyxNQUFYLENBQWtCSixPQUFsQixFQUEyQkMsS0FBM0IsRUFBa0M7QUFBRUMsSUFBQUEsR0FBRyxFQUFIQTtBQUFGLEdBQWxDLENBQVA7QUFDRCxDQUZEO0FBSUE7Ozs7OztBQUlBLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEtBQUs7QUFBQSxTQUFJLDZCQUFDLGVBQUQsRUFBWUEsS0FBWixDQUFKO0FBQUEsQ0FBMUI7O0FBQU1ELFk7O0lBRWVFLFc7Ozs7O0FBcURuQix1QkFBWUQsS0FBWixFQUFtQkUsT0FBbkIsRUFBNEI7QUFBQTs7QUFBQTtBQUMxQixpSEFBTUYsS0FBTixFQUFhRSxPQUFiO0FBRDBCLDZGQW9DZixVQUFBQyxJQUFJLEVBQUk7QUFBQSxVQUNYQyxRQURXLEdBQ0UsTUFBS0MsS0FEUCxDQUNYRCxRQURXO0FBR25CLGFBQU9FLE9BQU8sQ0FBQ0YsUUFBUSxDQUFDRyxJQUFULENBQWMsVUFBQUMsWUFBWTtBQUFBLGVBQUlBLFlBQVksS0FBS0wsSUFBSSxDQUFDTSxLQUExQjtBQUFBLE9BQTFCLENBQUQsQ0FBZDtBQUNELEtB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QUFpQixFQUFFLFdBYkM7QUFjcEJDLEVBQUFBLFVBQVUsRUFBRSxRQWRRO0FBZXBCZixFQUFBQSxrQkFBa0IsRUFBRTtBQWZBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGZ1enphbGRyaW4gZnJvbSAnZnV6emFsZHJpbi1wbHVzJ1xuaW1wb3J0IFZpcnR1YWxMaXN0IGZyb20gJ3JlYWN0LXRpbnktdmlydHVhbC1saXN0J1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IFRhYmxlSGVhZCwgU2VhcmNoVGFibGVIZWFkZXJDZWxsIH0gZnJvbSAnLi4vLi4vdGFibGUnXG5pbXBvcnQgT3B0aW9uU2hhcGVQcm9wVHlwZSBmcm9tICcuL09wdGlvblNoYXBlUHJvcFR5cGUnXG5pbXBvcnQgT3B0aW9uIGZyb20gJy4vT3B0aW9uJ1xuXG4vKipcbiAqIEZ1enphbGRyaW4tcGx1cyBpcyB0aGUgZGVmYXVsdCBmaWx0ZXIsIGJ1dCB5b3UgY2FuIHVzZSB5b3VyIG93blxuICogYXMgbG9uZyBhcyB0aGV5IGZvbGxvdyB0aGUgZm9sbG93aW5nIHNpZ25hdHVyZTpcbiAqIEBwYXJhbSBvcHRpb25zIDxBcnJheVtTdHJpbmddPiAtIFsnbGFiZWwnLCAnbGFiZWwyJywgLi4uXVxuICogQHBhcmFtIGlucHV0IDxTdHJpbmc+XG4gKi9cbmNvbnN0IGZ1enp5RmlsdGVyID0gKG9wdGlvbnMsIGlucHV0LCB7IGtleSB9KSA9PiB7XG4gIHJldHVybiBmdXp6YWxkcmluLmZpbHRlcihvcHRpb25zLCBpbnB1dCwgeyBrZXkgfSlcbn1cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBkZWZhdWx0IGl0ZW0gcmVuZGVyZXIgb2Ygb3B0aW9uc1xuICogeW91IGNhbiBwYXNzIGN1c3RvbSByZW5kZXJlcnMgYXMgbG9uZyBhcyB0aGV5IHdvcmsgdGhlIHNhbWUgYXMgdGhlIE9wdGlvblxuICovXG5jb25zdCBpdGVtUmVuZGVyZXIgPSBwcm9wcyA9PiA8T3B0aW9uIHsuLi5wcm9wc30gLz5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uc0xpc3QgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihPcHRpb25TaGFwZVByb3BUeXBlKSxcbiAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBtdWx0aSBzZWxlY3QgaXMgYWNjb3VudGVkIGZvci5cbiAgICAgKi9cbiAgICBpc011bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgbWVudSBjbG9zZXMgb24gb3B0aW9uIHNlbGVjdGlvbi5cbiAgICAgKi9cbiAgICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaG9sZHMgdGhlIHZhbHVlcyBvZiB0aGUgb3B0aW9uc1xuICAgICAqL1xuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRmlsdGVyQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoYXNGaWx0ZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIG9wdGlvblNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcmVuZGVySXRlbTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZmlsdGVyUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmlsdGVySWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvcHRpb25zRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkZWZhdWx0U2VhcmNoVmFsdWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb3B0aW9uczogW10sXG4gICAgLyoqXG4gICAgICogSW5jbHVkaW5nIGJvcmRlciBib3R0b21cbiAgICAgKiBGb3Igc29tZSByZWFzb24gcGFzc2luZyBoZWlnaHQgdG8gVGFibGVSb3cgZG9lc24ndCB3b3JrXG4gICAgICogVE9ETzogZml4IGhhY2t5IHNvbHV0aW9uXG4gICAgICovXG4gICAgb3B0aW9uU2l6ZTogMzMsXG4gICAgb25TZWxlY3Q6ICgpID0+IHt9LFxuICAgIG9uRGVzZWxlY3Q6ICgpID0+IHt9LFxuICAgIG9uRmlsdGVyQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBzZWxlY3RlZDogW10sXG4gICAgcmVuZGVySXRlbTogaXRlbVJlbmRlcmVyLFxuICAgIGZpbHRlclBsYWNlaG9sZGVyOiAnRmlsdGVyLi4uJyxcbiAgICBmaWx0ZXJJY29uOiAnc2VhcmNoJyxcbiAgICBkZWZhdWx0U2VhcmNoVmFsdWU6ICcnXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaFZhbHVlOiBwcm9wcy5kZWZhdWx0U2VhcmNoVmFsdWUsXG4gICAgICBzZWxlY3RlZDogcHJvcHMuc2VsZWN0ZWRcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGhhc0ZpbHRlciB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghaGFzRmlsdGVyKSByZXR1cm5cbiAgICAvKipcbiAgICAgKiBIYWNreSBzb2x1dGlvbiBmb3IgYnJva2VuIGF1dG9Gb2N1c1xuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWdtZW50aW8vZXZlcmdyZWVuL2lzc3Vlcy85MFxuICAgICAqL1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnNlYXJjaFJlZi5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmZvY3VzKClcbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bilcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLnNlbGVjdGVkICE9PSB0aGlzLnByb3BzLnNlbGVjdGVkKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZDogdGhpcy5wcm9wcy5zZWxlY3RlZFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpc1NlbGVjdGVkID0gaXRlbSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIEJvb2xlYW4oc2VsZWN0ZWQuZmluZChzZWxlY3RlZEl0ZW0gPT4gc2VsZWN0ZWRJdGVtID09PSBpdGVtLnZhbHVlKSlcbiAgfVxuXG4gIHNlYXJjaCA9IG9wdGlvbnMgPT4ge1xuICAgIGNvbnN0IHsgb3B0aW9uc0ZpbHRlciB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2VhcmNoVmFsdWUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChzZWFyY2hWYWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICByZXR1cm4gb3B0aW9uc1xuICAgIH1cblxuICAgIC8vIFByZXNlcnZlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggYWxsb3dpbmcgY3VzdG9tIGZpbHRlcnMsIHdoaWNoIGFjY2VwdCBhcnJheSBvZiBzdHJpbmdzXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zRmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gb3B0aW9uc0ZpbHRlcihvcHRpb25zLm1hcChpdGVtID0+IGl0ZW0ubGFiZWwpLCBzZWFyY2hWYWx1ZSkubWFwKFxuICAgICAgICBuYW1lID0+IG9wdGlvbnMuZmluZChpdGVtID0+IGl0ZW0ubGFiZWwgPT09IG5hbWUpXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1enp5RmlsdGVyKG9wdGlvbnMsIHNlYXJjaFZhbHVlLCB7IGtleTogJ2xhYmVsJyB9KVxuICB9XG5cbiAgZ2V0Q3VycmVudEluZGV4ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoKVxuXG4gICAgcmV0dXJuIG9wdGlvbnMuZmluZEluZGV4KFxuICAgICAgb3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gc2VsZWN0ZWRbc2VsZWN0ZWQubGVuZ3RoIC0gMV1cbiAgICApXG4gIH1cblxuICBnZXRGaWx0ZXJlZE9wdGlvbnMoKSB7XG4gICAgY29uc3QgeyBvcHRpb25zIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gdGhpcy5zZWFyY2gob3B0aW9ucylcbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSBlID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOCkge1xuICAgICAgdGhpcy5oYW5kbGVBcnJvd1VwKClcbiAgICB9XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSA0MCkge1xuICAgICAgdGhpcy5oYW5kbGVBcnJvd0Rvd24oKVxuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLmhhbmRsZUVudGVyKClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVBcnJvd1VwID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25TZWxlY3QgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoKVxuXG4gICAgbGV0IG5leHRJbmRleCA9IHRoaXMuZ2V0Q3VycmVudEluZGV4KCkgLSAxXG5cbiAgICBpZiAobmV4dEluZGV4IDwgMCkge1xuICAgICAgbmV4dEluZGV4ID0gb3B0aW9ucy5sZW5ndGggLSAxXG4gICAgfVxuXG4gICAgb25TZWxlY3Qob3B0aW9uc1tuZXh0SW5kZXhdKVxuICB9XG5cbiAgaGFuZGxlQXJyb3dEb3duID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25TZWxlY3QgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoKVxuXG4gICAgbGV0IG5leHRJbmRleCA9IHRoaXMuZ2V0Q3VycmVudEluZGV4KCkgKyAxXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBvcHRpb25zLmxlbmd0aCkge1xuICAgICAgbmV4dEluZGV4ID0gMFxuICAgIH1cblxuICAgIG9uU2VsZWN0KG9wdGlvbnNbbmV4dEluZGV4XSlcbiAgfVxuXG4gIGhhbmRsZUVudGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSB0aGlzLmdldEN1cnJlbnRJbmRleCgpICE9PSAtMVxuXG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMucHJvcHMuY2xvc2UoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IHNlYXJjaFZhbHVlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlYXJjaFZhbHVlXG4gICAgfSlcbiAgICB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlKHNlYXJjaFZhbHVlKVxuICB9XG5cbiAgaGFuZGxlU2VsZWN0ID0gaXRlbSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNlbGVjdChpdGVtKVxuICAgIGlmICghdGhpcy5wcm9wcy5pc011bHRpU2VsZWN0ICYmIHRoaXMucHJvcHMuY2xvc2VPblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5jbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRGVzZWxlY3QgPSBpdGVtID0+IHtcbiAgICB0aGlzLnByb3BzLm9uRGVzZWxlY3QoaXRlbSlcbiAgfVxuXG4gIGFzc2lnblNlYXJjaFJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5zZWFyY2hSZWYgPSByZWZcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBvcHRpb25zOiBvcmlnaW5hbE9wdGlvbnMsXG4gICAgICBjbG9zZSxcbiAgICAgIGNsb3NlT25TZWxlY3QsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgb25EZXNlbGVjdCxcbiAgICAgIG9uRmlsdGVyQ2hhbmdlLFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBoYXNGaWx0ZXIsXG4gICAgICBmaWx0ZXJQbGFjZWhvbGRlcixcbiAgICAgIGZpbHRlckljb24sXG4gICAgICBvcHRpb25TaXplLFxuICAgICAgcmVuZGVySXRlbSxcbiAgICAgIG9wdGlvbnNGaWx0ZXIsXG4gICAgICBpc011bHRpU2VsZWN0LFxuICAgICAgZGVmYXVsdFNlYXJjaFZhbHVlLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnNlYXJjaChvcmlnaW5hbE9wdGlvbnMpXG4gICAgY29uc3QgbGlzdEhlaWdodCA9IGhlaWdodCAtIChoYXNGaWx0ZXIgPyAzMiA6IDApXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5nZXRDdXJyZW50SW5kZXgoKVxuICAgIGNvbnN0IHNjcm9sbFRvSW5kZXggPSBjdXJyZW50SW5kZXggPT09IC0xID8gMCA6IGN1cnJlbnRJbmRleFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2hhc0ZpbHRlciAmJiAoXG4gICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgIDxTZWFyY2hUYWJsZUhlYWRlckNlbGxcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBpbm5lclJlZj17dGhpcy5hc3NpZ25TZWFyY2hSZWZ9XG4gICAgICAgICAgICAgIGJvcmRlclJpZ2h0PXtudWxsfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezMyfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZmlsdGVyUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIGljb249e2ZpbHRlckljb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICApfVxuICAgICAgICA8UGFuZSBmbGV4PXsxfT5cbiAgICAgICAgICA8VmlydHVhbExpc3RcbiAgICAgICAgICAgIGhlaWdodD17bGlzdEhlaWdodH1cbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBpdGVtU2l6ZT17b3B0aW9uU2l6ZX1cbiAgICAgICAgICAgIGl0ZW1Db3VudD17b3B0aW9ucy5sZW5ndGh9XG4gICAgICAgICAgICBvdmVyc2NhbkNvdW50PXsyMH1cbiAgICAgICAgICAgIHNjcm9sbFRvQWxpZ25tZW50PVwiYXV0b1wiXG4gICAgICAgICAgICBzY3JvbGxUb0luZGV4PXtzY3JvbGxUb0luZGV4IHx8IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyh7IGluZGV4LCBzdHlsZSB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBvcHRpb25zW2luZGV4XVxuICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gdGhpcy5pc1NlbGVjdGVkKGl0ZW0pXG4gICAgICAgICAgICAgIHJldHVybiByZW5kZXJJdGVtKHtcbiAgICAgICAgICAgICAgICBrZXk6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW0ubGFiZWwsXG4gICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICAgIGhlaWdodDogb3B0aW9uU2l6ZSxcbiAgICAgICAgICAgICAgICBvblNlbGVjdDogKCkgPT4gdGhpcy5oYW5kbGVTZWxlY3QoaXRlbSksXG4gICAgICAgICAgICAgICAgb25EZXNlbGVjdDogKCkgPT4gdGhpcy5oYW5kbGVEZXNlbGVjdChpdGVtKSxcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGFibGU6ICFpc1NlbGVjdGVkIHx8IGlzTXVsdGlTZWxlY3QsXG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXRlbS5kaXNhYmxlZFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BhbmU+XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG4iXX0=