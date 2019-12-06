import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fuzzaldrin from 'fuzzaldrin-plus';
import VirtualList from 'react-tiny-virtual-list';
import { Pane } from '../../layers';
import { TableHead, SearchTableHeaderCell } from '../../table';
import OptionShapePropType from './OptionShapePropType';
import Option from './Option';
/**
 * Fuzzaldrin-plus is the default filter, but you can use your own
 * as long as they follow the following signature:
 * @param options <Array[String]> - ['label', 'label2', ...]
 * @param input <String>
 */

var fuzzyFilter = function fuzzyFilter(options, input, _ref) {
  var key = _ref.key;
  return fuzzaldrin.filter(options, input, {
    key: key
  });
};
/**
 * This is the default item renderer of options
 * you can pass custom renderers as long as they work the same as the Option
 */


var itemRenderer = function itemRenderer(props) {
  return React.createElement(Option, props);
};

itemRenderer.displayName = "itemRenderer";

var OptionsList =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(OptionsList, _PureComponent);

  function OptionsList(props, context) {
    var _this;

    _classCallCheck(this, OptionsList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OptionsList).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "isSelected", function (item) {
      var selected = _this.state.selected;
      return Boolean(selected.find(function (selectedItem) {
        return selectedItem === item.value;
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "search", function (options) {
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

    _defineProperty(_assertThisInitialized(_this), "getCurrentIndex", function () {
      var selected = _this.props.selected;

      var options = _this.getFilteredOptions();

      return options.findIndex(function (option) {
        return option.value === selected[selected.length - 1];
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "handleArrowUp", function () {
      var onSelect = _this.props.onSelect;

      var options = _this.getFilteredOptions();

      var nextIndex = _this.getCurrentIndex() - 1;

      if (nextIndex < 0) {
        nextIndex = options.length - 1;
      }

      onSelect(options[nextIndex]);
    });

    _defineProperty(_assertThisInitialized(_this), "handleArrowDown", function () {
      var onSelect = _this.props.onSelect;

      var options = _this.getFilteredOptions();

      var nextIndex = _this.getCurrentIndex() + 1;

      if (nextIndex === options.length) {
        nextIndex = 0;
      }

      onSelect(options[nextIndex]);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnter", function () {
      var isSelected = _this.getCurrentIndex() !== -1;

      if (isSelected) {
        _this.props.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (searchValue) {
      _this.setState({
        searchValue: searchValue
      });

      _this.props.onFilterChange(searchValue);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (item) {
      _this.props.onSelect(item);

      if (!_this.props.isMultiSelect && _this.props.closeOnSelect) {
        _this.props.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeselect", function (item) {
      _this.props.onDeselect(item);
    });

    _defineProperty(_assertThisInitialized(_this), "assignSearchRef", function (ref) {
      _this.searchRef = ref;
    });

    _this.state = {
      searchValue: props.defaultSearchValue,
      selected: props.selected
    };
    return _this;
  }

  _createClass(OptionsList, [{
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
          props = _objectWithoutProperties(_this$props, ["options", "close", "closeOnSelect", "width", "height", "onSelect", "onDeselect", "onFilterChange", "selected", "hasFilter", "filterPlaceholder", "filterIcon", "optionSize", "renderItem", "optionsFilter", "isMultiSelect", "defaultSearchValue"]);

      var options = this.search(originalOptions);
      var listHeight = height - (hasFilter ? 32 : 0);
      var currentIndex = this.getCurrentIndex();
      var scrollToIndex = currentIndex === -1 ? 0 : currentIndex;
      return React.createElement(Pane, _extends({
        height: height,
        width: width,
        display: "flex",
        flexDirection: "column"
      }, props), hasFilter && React.createElement(TableHead, null, React.createElement(SearchTableHeaderCell, {
        onChange: this.handleChange,
        innerRef: this.assignSearchRef,
        borderRight: null,
        height: 32,
        placeholder: filterPlaceholder,
        icon: filterIcon
      })), React.createElement(Pane, {
        flex: 1
      }, React.createElement(VirtualList, {
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
}(PureComponent);

OptionsList.displayName = "OptionsList";

_defineProperty(OptionsList, "propTypes", {
  options: PropTypes.arrayOf(OptionShapePropType),
  close: PropTypes.func,
  height: PropTypes.number,
  width: PropTypes.number,

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: PropTypes.bool,

  /**
   * When true, menu closes on option selection.
   */
  closeOnSelect: PropTypes.bool,

  /**
   * This holds the values of the options
   */
  selected: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  onFilterChange: PropTypes.func,
  hasFilter: PropTypes.bool,
  optionSize: PropTypes.number,
  renderItem: PropTypes.func,
  filterPlaceholder: PropTypes.string,
  filterIcon: PropTypes.string,
  optionsFilter: PropTypes.func,
  defaultSearchValue: PropTypes.string
});

_defineProperty(OptionsList, "defaultProps", {
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

export { OptionsList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvT3B0aW9uc0xpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZnV6emFsZHJpbiIsIlZpcnR1YWxMaXN0IiwiUGFuZSIsIlRhYmxlSGVhZCIsIlNlYXJjaFRhYmxlSGVhZGVyQ2VsbCIsIk9wdGlvblNoYXBlUHJvcFR5cGUiLCJPcHRpb24iLCJmdXp6eUZpbHRlciIsIm9wdGlvbnMiLCJpbnB1dCIsImtleSIsImZpbHRlciIsIml0ZW1SZW5kZXJlciIsInByb3BzIiwiT3B0aW9uc0xpc3QiLCJjb250ZXh0IiwiaXRlbSIsInNlbGVjdGVkIiwic3RhdGUiLCJCb29sZWFuIiwiZmluZCIsInNlbGVjdGVkSXRlbSIsInZhbHVlIiwib3B0aW9uc0ZpbHRlciIsInNlYXJjaFZhbHVlIiwidHJpbSIsIm1hcCIsImxhYmVsIiwibmFtZSIsImdldEZpbHRlcmVkT3B0aW9ucyIsImZpbmRJbmRleCIsIm9wdGlvbiIsImxlbmd0aCIsImUiLCJrZXlDb2RlIiwiaGFuZGxlQXJyb3dVcCIsImhhbmRsZUFycm93RG93biIsImhhbmRsZUVudGVyIiwib25TZWxlY3QiLCJuZXh0SW5kZXgiLCJnZXRDdXJyZW50SW5kZXgiLCJpc1NlbGVjdGVkIiwiY2xvc2UiLCJzZXRTdGF0ZSIsIm9uRmlsdGVyQ2hhbmdlIiwiaXNNdWx0aVNlbGVjdCIsImNsb3NlT25TZWxlY3QiLCJvbkRlc2VsZWN0IiwicmVmIiwic2VhcmNoUmVmIiwiZGVmYXVsdFNlYXJjaFZhbHVlIiwiaGFzRmlsdGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicXVlcnlTZWxlY3RvciIsImZvY3VzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleURvd24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJldlByb3BzIiwic2VhcmNoIiwib3JpZ2luYWxPcHRpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJmaWx0ZXJQbGFjZWhvbGRlciIsImZpbHRlckljb24iLCJvcHRpb25TaXplIiwicmVuZGVySXRlbSIsImxpc3RIZWlnaHQiLCJjdXJyZW50SW5kZXgiLCJzY3JvbGxUb0luZGV4IiwiaGFuZGxlQ2hhbmdlIiwiYXNzaWduU2VhcmNoUmVmIiwidW5kZWZpbmVkIiwiaW5kZXgiLCJzdHlsZSIsImljb24iLCJoYW5kbGVTZWxlY3QiLCJoYW5kbGVEZXNlbGVjdCIsImlzU2VsZWN0YWJsZSIsImRpc2FibGVkIiwiYXJyYXlPZiIsImZ1bmMiLCJudW1iZXIiLCJib29sIiwib25lT2ZUeXBlIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLGlCQUF2QjtBQUNBLE9BQU9DLFdBQVAsTUFBd0IseUJBQXhCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjtBQUNBLFNBQVNDLFNBQVQsRUFBb0JDLHFCQUFwQixRQUFpRCxhQUFqRDtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHVCQUFoQztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsVUFBbkI7QUFFQTs7Ozs7OztBQU1BLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE9BQUQsRUFBVUMsS0FBVixRQUE2QjtBQUFBLE1BQVZDLEdBQVUsUUFBVkEsR0FBVTtBQUMvQyxTQUFPVixVQUFVLENBQUNXLE1BQVgsQ0FBa0JILE9BQWxCLEVBQTJCQyxLQUEzQixFQUFrQztBQUFFQyxJQUFBQSxHQUFHLEVBQUhBO0FBQUYsR0FBbEMsQ0FBUDtBQUNELENBRkQ7QUFJQTs7Ozs7O0FBSUEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSztBQUFBLFNBQUksb0JBQUMsTUFBRCxFQUFZQSxLQUFaLENBQUo7QUFBQSxDQUExQjs7QUFBTUQsWTs7SUFFZUUsVzs7Ozs7QUFxRG5C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RixNQTdCTDtBQThCakIvRCxFQUFBQSxhQUFhLEVBQUV4QixTQUFTLENBQUNtRixJQTlCUjtBQStCakJoQyxFQUFBQSxrQkFBa0IsRUFBRW5ELFNBQVMsQ0FBQ3VGO0FBL0JiLEM7O2dCQURBeEUsVyxrQkFtQ0c7QUFDcEJOLEVBQUFBLE9BQU8sRUFBRSxFQURXOztBQUVwQjs7Ozs7QUFLQTBELEVBQUFBLFVBQVUsRUFBRSxFQVBRO0FBUXBCNUIsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FSRTtBQVNwQlMsRUFBQUEsVUFBVSxFQUFFLHNCQUFNLENBQUUsQ0FUQTtBQVVwQkgsRUFBQUEsY0FBYyxFQUFFLDBCQUFNLENBQUUsQ0FWSjtBQVdwQjNCLEVBQUFBLFFBQVEsRUFBRSxFQVhVO0FBWXBCa0QsRUFBQUEsVUFBVSxFQUFFdkQsWUFaUTtBQWFwQm9ELEVBQUFBLGlCQUFpQixFQUFFLFdBYkM7QUFjcEJDLEVBQUFBLFVBQVUsRUFBRSxRQWRRO0FBZXBCZixFQUFBQSxrQkFBa0IsRUFBRTtBQWZBLEM7O1NBbkNIcEMsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgZnV6emFsZHJpbiBmcm9tICdmdXp6YWxkcmluLXBsdXMnXG5pbXBvcnQgVmlydHVhbExpc3QgZnJvbSAncmVhY3QtdGlueS12aXJ0dWFsLWxpc3QnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgVGFibGVIZWFkLCBTZWFyY2hUYWJsZUhlYWRlckNlbGwgfSBmcm9tICcuLi8uLi90YWJsZSdcbmltcG9ydCBPcHRpb25TaGFwZVByb3BUeXBlIGZyb20gJy4vT3B0aW9uU2hhcGVQcm9wVHlwZSdcbmltcG9ydCBPcHRpb24gZnJvbSAnLi9PcHRpb24nXG5cbi8qKlxuICogRnV6emFsZHJpbi1wbHVzIGlzIHRoZSBkZWZhdWx0IGZpbHRlciwgYnV0IHlvdSBjYW4gdXNlIHlvdXIgb3duXG4gKiBhcyBsb25nIGFzIHRoZXkgZm9sbG93IHRoZSBmb2xsb3dpbmcgc2lnbmF0dXJlOlxuICogQHBhcmFtIG9wdGlvbnMgPEFycmF5W1N0cmluZ10+IC0gWydsYWJlbCcsICdsYWJlbDInLCAuLi5dXG4gKiBAcGFyYW0gaW5wdXQgPFN0cmluZz5cbiAqL1xuY29uc3QgZnV6enlGaWx0ZXIgPSAob3B0aW9ucywgaW5wdXQsIHsga2V5IH0pID0+IHtcbiAgcmV0dXJuIGZ1enphbGRyaW4uZmlsdGVyKG9wdGlvbnMsIGlucHV0LCB7IGtleSB9KVxufVxuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGRlZmF1bHQgaXRlbSByZW5kZXJlciBvZiBvcHRpb25zXG4gKiB5b3UgY2FuIHBhc3MgY3VzdG9tIHJlbmRlcmVycyBhcyBsb25nIGFzIHRoZXkgd29yayB0aGUgc2FtZSBhcyB0aGUgT3B0aW9uXG4gKi9cbmNvbnN0IGl0ZW1SZW5kZXJlciA9IHByb3BzID0+IDxPcHRpb24gey4uLnByb3BzfSAvPlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25zTGlzdCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKE9wdGlvblNoYXBlUHJvcFR5cGUpLFxuICAgIGNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIG11bHRpIHNlbGVjdCBpcyBhY2NvdW50ZWQgZm9yLlxuICAgICAqL1xuICAgIGlzTXVsdGlTZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBtZW51IGNsb3NlcyBvbiBvcHRpb24gc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIGNsb3NlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBob2xkcyB0aGUgdmFsdWVzIG9mIHRoZSBvcHRpb25zXG4gICAgICovXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EZXNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25GaWx0ZXJDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGhhc0ZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgb3B0aW9uU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICByZW5kZXJJdGVtOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmaWx0ZXJQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWx0ZXJJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9wdGlvbnNGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRlZmF1bHRTZWFyY2hWYWx1ZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcHRpb25zOiBbXSxcbiAgICAvKipcbiAgICAgKiBJbmNsdWRpbmcgYm9yZGVyIGJvdHRvbVxuICAgICAqIEZvciBzb21lIHJlYXNvbiBwYXNzaW5nIGhlaWdodCB0byBUYWJsZVJvdyBkb2Vzbid0IHdvcmtcbiAgICAgKiBUT0RPOiBmaXggaGFja3kgc29sdXRpb25cbiAgICAgKi9cbiAgICBvcHRpb25TaXplOiAzMyxcbiAgICBvblNlbGVjdDogKCkgPT4ge30sXG4gICAgb25EZXNlbGVjdDogKCkgPT4ge30sXG4gICAgb25GaWx0ZXJDaGFuZ2U6ICgpID0+IHt9LFxuICAgIHNlbGVjdGVkOiBbXSxcbiAgICByZW5kZXJJdGVtOiBpdGVtUmVuZGVyZXIsXG4gICAgZmlsdGVyUGxhY2Vob2xkZXI6ICdGaWx0ZXIuLi4nLFxuICAgIGZpbHRlckljb246ICdzZWFyY2gnLFxuICAgIGRlZmF1bHRTZWFyY2hWYWx1ZTogJydcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoVmFsdWU6IHByb3BzLmRlZmF1bHRTZWFyY2hWYWx1ZSxcbiAgICAgIHNlbGVjdGVkOiBwcm9wcy5zZWxlY3RlZFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgaGFzRmlsdGVyIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFoYXNGaWx0ZXIpIHJldHVyblxuICAgIC8qKlxuICAgICAqIEhhY2t5IHNvbHV0aW9uIGZvciBicm9rZW4gYXV0b0ZvY3VzXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL3NlZ21lbnRpby9ldmVyZ3JlZW4vaXNzdWVzLzkwXG4gICAgICovXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuc2VhcmNoUmVmLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuZm9jdXMoKVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bilcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmIChwcmV2UHJvcHMuc2VsZWN0ZWQgIT09IHRoaXMucHJvcHMuc2VsZWN0ZWQpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkOiB0aGlzLnByb3BzLnNlbGVjdGVkXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGlzU2VsZWN0ZWQgPSBpdGVtID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gQm9vbGVhbihzZWxlY3RlZC5maW5kKHNlbGVjdGVkSXRlbSA9PiBzZWxlY3RlZEl0ZW0gPT09IGl0ZW0udmFsdWUpKVxuICB9XG5cbiAgc2VhcmNoID0gb3B0aW9ucyA9PiB7XG4gICAgY29uc3QgeyBvcHRpb25zRmlsdGVyIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBzZWFyY2hWYWx1ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKHNlYXJjaFZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBvcHRpb25zXG4gICAgfVxuXG4gICAgLy8gUHJlc2VydmUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBhbGxvd2luZyBjdXN0b20gZmlsdGVycywgd2hpY2ggYWNjZXB0IGFycmF5IG9mIHN0cmluZ3NcbiAgICBpZiAodHlwZW9mIG9wdGlvbnNGaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBvcHRpb25zRmlsdGVyKG9wdGlvbnMubWFwKGl0ZW0gPT4gaXRlbS5sYWJlbCksIHNlYXJjaFZhbHVlKS5tYXAoXG4gICAgICAgIG5hbWUgPT4gb3B0aW9ucy5maW5kKGl0ZW0gPT4gaXRlbS5sYWJlbCA9PT0gbmFtZSlcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gZnV6enlGaWx0ZXIob3B0aW9ucywgc2VhcmNoVmFsdWUsIHsga2V5OiAnbGFiZWwnIH0pXG4gIH1cblxuICBnZXRDdXJyZW50SW5kZXggPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldEZpbHRlcmVkT3B0aW9ucygpXG5cbiAgICByZXR1cm4gb3B0aW9ucy5maW5kSW5kZXgoXG4gICAgICBvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSBzZWxlY3RlZFtzZWxlY3RlZC5sZW5ndGggLSAxXVxuICAgIClcbiAgfVxuXG4gIGdldEZpbHRlcmVkT3B0aW9ucygpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiB0aGlzLnNlYXJjaChvcHRpb25zKVxuICB9XG5cbiAgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDM4KSB7XG4gICAgICB0aGlzLmhhbmRsZUFycm93VXAoKVxuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICB0aGlzLmhhbmRsZUFycm93RG93bigpXG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuaGFuZGxlRW50ZXIoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUFycm93VXAgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvblNlbGVjdCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldEZpbHRlcmVkT3B0aW9ucygpXG5cbiAgICBsZXQgbmV4dEluZGV4ID0gdGhpcy5nZXRDdXJyZW50SW5kZXgoKSAtIDFcblxuICAgIGlmIChuZXh0SW5kZXggPCAwKSB7XG4gICAgICBuZXh0SW5kZXggPSBvcHRpb25zLmxlbmd0aCAtIDFcbiAgICB9XG5cbiAgICBvblNlbGVjdChvcHRpb25zW25leHRJbmRleF0pXG4gIH1cblxuICBoYW5kbGVBcnJvd0Rvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvblNlbGVjdCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldEZpbHRlcmVkT3B0aW9ucygpXG5cbiAgICBsZXQgbmV4dEluZGV4ID0gdGhpcy5nZXRDdXJyZW50SW5kZXgoKSArIDFcblxuICAgIGlmIChuZXh0SW5kZXggPT09IG9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICBuZXh0SW5kZXggPSAwXG4gICAgfVxuXG4gICAgb25TZWxlY3Qob3B0aW9uc1tuZXh0SW5kZXhdKVxuICB9XG5cbiAgaGFuZGxlRW50ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IHRoaXMuZ2V0Q3VycmVudEluZGV4KCkgIT09IC0xXG5cbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgdGhpcy5wcm9wcy5jbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gc2VhcmNoVmFsdWUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VhcmNoVmFsdWVcbiAgICB9KVxuICAgIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2Uoc2VhcmNoVmFsdWUpXG4gIH1cblxuICBoYW5kbGVTZWxlY3QgPSBpdGVtID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGl0ZW0pXG4gICAgaWYgKCF0aGlzLnByb3BzLmlzTXVsdGlTZWxlY3QgJiYgdGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLmNsb3NlKClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVEZXNlbGVjdCA9IGl0ZW0gPT4ge1xuICAgIHRoaXMucHJvcHMub25EZXNlbGVjdChpdGVtKVxuICB9XG5cbiAgYXNzaWduU2VhcmNoUmVmID0gcmVmID0+IHtcbiAgICB0aGlzLnNlYXJjaFJlZiA9IHJlZlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9wdGlvbnM6IG9yaWdpbmFsT3B0aW9ucyxcbiAgICAgIGNsb3NlLFxuICAgICAgY2xvc2VPblNlbGVjdCxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgb25TZWxlY3QsXG4gICAgICBvbkRlc2VsZWN0LFxuICAgICAgb25GaWx0ZXJDaGFuZ2UsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIGhhc0ZpbHRlcixcbiAgICAgIGZpbHRlclBsYWNlaG9sZGVyLFxuICAgICAgZmlsdGVySWNvbixcbiAgICAgIG9wdGlvblNpemUsXG4gICAgICByZW5kZXJJdGVtLFxuICAgICAgb3B0aW9uc0ZpbHRlcixcbiAgICAgIGlzTXVsdGlTZWxlY3QsXG4gICAgICBkZWZhdWx0U2VhcmNoVmFsdWUsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc2VhcmNoKG9yaWdpbmFsT3B0aW9ucylcbiAgICBjb25zdCBsaXN0SGVpZ2h0ID0gaGVpZ2h0IC0gKGhhc0ZpbHRlciA/IDMyIDogMClcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmdldEN1cnJlbnRJbmRleCgpXG4gICAgY29uc3Qgc2Nyb2xsVG9JbmRleCA9IGN1cnJlbnRJbmRleCA9PT0gLTEgPyAwIDogY3VycmVudEluZGV4XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7aGFzRmlsdGVyICYmIChcbiAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgPFNlYXJjaFRhYmxlSGVhZGVyQ2VsbFxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGlubmVyUmVmPXt0aGlzLmFzc2lnblNlYXJjaFJlZn1cbiAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ9e251bGx9XG4gICAgICAgICAgICAgIGhlaWdodD17MzJ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmaWx0ZXJQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgaWNvbj17ZmlsdGVySWNvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICl9XG4gICAgICAgIDxQYW5lIGZsZXg9ezF9PlxuICAgICAgICAgIDxWaXJ0dWFsTGlzdFxuICAgICAgICAgICAgaGVpZ2h0PXtsaXN0SGVpZ2h0fVxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGl0ZW1TaXplPXtvcHRpb25TaXplfVxuICAgICAgICAgICAgaXRlbUNvdW50PXtvcHRpb25zLmxlbmd0aH1cbiAgICAgICAgICAgIG92ZXJzY2FuQ291bnQ9ezIwfVxuICAgICAgICAgICAgc2Nyb2xsVG9BbGlnbm1lbnQ9XCJhdXRvXCJcbiAgICAgICAgICAgIHNjcm9sbFRvSW5kZXg9e3Njcm9sbFRvSW5kZXggfHwgdW5kZWZpbmVkfVxuICAgICAgICAgICAgcmVuZGVySXRlbT17KHsgaW5kZXgsIHN0eWxlIH0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IG9wdGlvbnNbaW5kZXhdXG4gICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQoaXRlbSlcbiAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckl0ZW0oe1xuICAgICAgICAgICAgICAgIGtleTogaXRlbS52YWx1ZSxcbiAgICAgICAgICAgICAgICBsYWJlbDogaXRlbS5sYWJlbCxcbiAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBvcHRpb25TaXplLFxuICAgICAgICAgICAgICAgIG9uU2VsZWN0OiAoKSA9PiB0aGlzLmhhbmRsZVNlbGVjdChpdGVtKSxcbiAgICAgICAgICAgICAgICBvbkRlc2VsZWN0OiAoKSA9PiB0aGlzLmhhbmRsZURlc2VsZWN0KGl0ZW0pLFxuICAgICAgICAgICAgICAgIGlzU2VsZWN0YWJsZTogIWlzU2VsZWN0ZWQgfHwgaXNNdWx0aVNlbGVjdCxcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBpdGVtLmRpc2FibGVkXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUGFuZT5cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cbiJdfQ==