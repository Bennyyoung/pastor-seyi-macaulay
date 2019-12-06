"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fuzzaldrinPlus = _interopRequireDefault(require("fuzzaldrin-plus"));

var _downshift = _interopRequireDefault(require("downshift"));

var _reactTinyVirtualList = _interopRequireDefault(require("react-tiny-virtual-list"));

var _popover = require("../../popover");

var _constants = require("../../constants");

var _typography = require("../../typography");

var _layers = require("../../layers");

var _deprecated = _interopRequireDefault(require("../../lib/deprecated"));

var _AutocompleteItem = _interopRequireDefault(require("./AutocompleteItem"));

var fuzzyFilter = function fuzzyFilter(itemToString) {
  if (itemToString) {
    return function (items, input) {
      var wrappedItems = items.map(function (item) {
        return {
          key: itemToString(item),
          item: item
        };
      });
      return _fuzzaldrinPlus.default.filter(wrappedItems, input, {
        key: 'key'
      }).map(function (_ref) {
        var item = _ref.item;
        return item;
      });
    };
  }

  return function (items, input) {
    return _fuzzaldrinPlus.default.filter(items, input);
  };
};

var noop = function noop() {};

var autocompleteItemRenderer = function autocompleteItemRenderer(props) {
  return _react.default.createElement(_AutocompleteItem.default, props);
};

autocompleteItemRenderer.displayName = "autocompleteItemRenderer";

// https://github.com/paypal/downshift/issues/164
var Autocomplete =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Autocomplete, _PureComponent);

  function Autocomplete() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Autocomplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Autocomplete)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      targetWidth: 0
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "stateReducer", function (state, changes) {
      var items = _this.props.items;

      if (Object.prototype.hasOwnProperty.call(changes, 'isOpen') && changes.isOpen) {
        return (0, _objectSpread2.default)({}, changes, {
          highlightedIndex: items.indexOf(state.selectedItem)
        });
      }

      return changes;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderResults", function (_ref2) {
      var width = _ref2.width,
          inputValue = _ref2.inputValue,
          highlightedIndex = _ref2.highlightedIndex,
          selectItemAtIndex = _ref2.selectItemAtIndex,
          selectedItem = _ref2.selectedItem,
          getItemProps = _ref2.getItemProps;
      var _this$props = _this.props,
          title = _this$props.title,
          itemSize = _this$props.itemSize,
          itemsFilter = _this$props.itemsFilter,
          originalItems = _this$props.items,
          itemToString = _this$props.itemToString,
          _renderItem = _this$props.renderItem,
          popoverMaxHeight = _this$props.popoverMaxHeight,
          isFilterDisabled = _this$props.isFilterDisabled;
      var filter = itemsFilter || fuzzyFilter(itemToString);
      var items = isFilterDisabled || inputValue.trim() === '' ? originalItems : filter(originalItems, inputValue);
      if (items.length === 0) return null;
      return _react.default.createElement(_layers.Pane, {
        width: width
      }, title && _react.default.createElement(_layers.Pane, {
        padding: 8,
        borderBottom: "muted"
      }, _react.default.createElement(_typography.Heading, {
        size: 100
      }, title)), items.length > 0 && _react.default.createElement(_reactTinyVirtualList.default, {
        width: "100%",
        height: Math.min(items.length * itemSize, popoverMaxHeight),
        itemSize: itemSize,
        itemCount: items.length,
        scrollToIndex: highlightedIndex || 0,
        overscanCount: 3,
        scrollToAlignment: "auto",
        renderItem: function renderItem(_ref3) {
          var index = _ref3.index,
              style = _ref3.style;
          var item = items[index];
          var itemString = itemToString(item);

          var onSelect = function onSelect() {
            selectItemAtIndex(index);
          };

          return _renderItem(getItemProps({
            item: item,
            key: itemString,
            index: index,
            style: style,
            children: itemString,
            onMouseUp: onSelect,
            onTouchEnd: onSelect,
            isSelected: itemToString(selectedItem) === itemString,
            isHighlighted: highlightedIndex === index
          }));
        }
      }));
    });
    return _this;
  }

  (0, _createClass2.default)(Autocomplete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        targetWidth: this.targetRef.getBoundingClientRect().width
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          itemSize = _this$props2.itemSize,
          position = _this$props2.position,
          renderItem = _this$props2.renderItem,
          itemsFilter = _this$props2.itemsFilter,
          popoverMaxHeight = _this$props2.popoverMaxHeight,
          popoverMinWidth = _this$props2.popoverMinWidth,
          defaultSelectedItem = _this$props2.defaultSelectedItem,
          initialSelectedItem = _this$props2.initialSelectedItem,
          defaultInputValue = _this$props2.defaultInputValue,
          initialInputValue = _this$props2.initialInputValue,
          getButtonProps = _this$props2.getButtonProps,
          getToggleButtonProps = _this$props2.getToggleButtonProps,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["children", "itemSize", "position", "renderItem", "itemsFilter", "popoverMaxHeight", "popoverMinWidth", "defaultSelectedItem", "initialSelectedItem", "defaultInputValue", "initialInputValue", "getButtonProps", "getToggleButtonProps"]);
      return _react.default.createElement(_downshift.default, (0, _extends2.default)({
        initialSelectedItem: initialSelectedItem || defaultSelectedItem,
        initialInputValue: initialInputValue || defaultInputValue,
        getToggleButtonProps: getToggleButtonProps || getButtonProps,
        stateReducer: this.stateReducer,
        scrollIntoView: noop
      }, props), function (_ref4) {
        var isShown = _ref4.isOpen,
            inputValue = _ref4.inputValue,
            getItemProps = _ref4.getItemProps,
            selectedItem = _ref4.selectedItem,
            highlightedIndex = _ref4.highlightedIndex,
            selectItemAtIndex = _ref4.selectItemAtIndex,
            getRootProps = _ref4.getRootProps,
            restDownshiftProps = (0, _objectWithoutProperties2.default)(_ref4, ["isOpen", "inputValue", "getItemProps", "selectedItem", "highlightedIndex", "selectItemAtIndex", "getRootProps"]);
        return _react.default.createElement(_layers.Pane, (0, _extends2.default)({
          width: "100%"
        }, getRootProps({
          refKey: 'innerRef'
        })), _react.default.createElement(_popover.Popover, {
          bringFocusInside: false,
          isShown: isShown,
          minWidth: popoverMinWidth,
          position: position || (_this2.state.targetWidth < popoverMinWidth ? _constants.Position.BOTTOM_LEFT : _constants.Position.BOTTOM),
          content: function content() {
            return _this2.renderResults({
              width: Math.max(_this2.state.targetWidth, popoverMinWidth),
              inputValue: inputValue,
              getItemProps: getItemProps,
              selectedItem: selectedItem,
              highlightedIndex: highlightedIndex,
              selectItemAtIndex: selectItemAtIndex
            });
          },
          minHeight: 0,
          animationDuration: 0
        }, function (_ref5) {
          var isShownPopover = _ref5.isShown,
              toggle = _ref5.toggle,
              _getRef = _ref5.getRef;
          return children((0, _objectSpread2.default)({
            isShown: isShownPopover,
            toggle: toggle,
            getRef: function getRef(ref) {
              // Use the ref internally to determine the width
              _this2.targetRef = ref;

              _getRef(ref);
            },
            inputValue: inputValue,
            selectedItem: selectedItem,
            highlightedIndex: highlightedIndex,
            selectItemAtIndex: selectItemAtIndex
          }, restDownshiftProps));
        }));
      });
    }
  }]);
  return Autocomplete;
}(_react.PureComponent);

exports.default = Autocomplete;
Autocomplete.displayName = "Autocomplete";
(0, _defineProperty2.default)(Autocomplete, "propTypes", (0, _objectSpread2.default)({
  /**
   * This prop can be either a string or a Node.
   * It will provide a title for the items
   */
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),

  /**
   * An array of items to be used as options for the select
   */
  items: _propTypes.default.array.isRequired,

  /**
   * The selected Item to be shown on the autocomplete
   */
  selectedItem: _propTypes.default.any,

  /**
   * The selected item to be selected & shown by default on the autocomplete (deprecated)
   */
  defaultSelectedItem: (0, _deprecated.default)(_propTypes.default.any, 'Use "initialSelectedItem" instead.'),

  /**
   * The selected item to be selected & shown by default on the autocomplete (deprecated)
   */
  defaultInputValue: (0, _deprecated.default)(_propTypes.default.any, 'Use "initialInputValue" instead.'),

  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString: _propTypes.default.func.isRequired,

  /**
   * Function that will render the 'filter' component.
   */
  children: _propTypes.default.func.isRequired,

  /**
   * The height of each item in the list
   * Because the list is virtualized this is required beforehand.
   */
  itemSize: _propTypes.default.number,

  /**
   * Function that returns a component to render the item
   */
  renderItem: _propTypes.default.func,

  /**
   * The position of the Popover the Autocomplete is rendered in.
   */
  position: _propTypes.default.oneOf(Object.keys(_constants.Position)),

  /**
   * A function that is used to filter the items.
   * It should return a subset of the initial items.
   * By default the "fuzzaldrin-plus" package is used.
   */
  itemsFilter: _propTypes.default.func,

  /**
   * Prop that enables and disables filtering
   * True: Enables Filtering
   * False: Disables Filtering
   */
  isFilterDisabled: _propTypes.default.bool,

  /**
   * Defines the minimum height the results container will be
   */
  popoverMinWidth: _propTypes.default.number,

  /**
   * Defines the maximum height the results container will be
   */
  popoverMaxHeight: _propTypes.default.number,

  /**
   * The selected item to be selected & shown by default on the autocomplete (deprecated)
   */
  getButtonProps: (0, _deprecated.default)(_propTypes.default.func, 'Use "getToggleButtonProps" instead.')
}, _downshift.default.propTypes));
(0, _defineProperty2.default)(Autocomplete, "defaultProps", {
  itemToString: function itemToString(i) {
    return i ? String(i) : '';
  },
  itemSize: 32,
  isFilterDisabled: false,
  popoverMinWidth: 240,
  popoverMaxHeight: 240,
  renderItem: autocompleteItemRenderer
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRvY29tcGxldGUvc3JjL0F1dG9jb21wbGV0ZS5qcyJdLCJuYW1lcyI6WyJmdXp6eUZpbHRlciIsIml0ZW1Ub1N0cmluZyIsIml0ZW1zIiwiaW5wdXQiLCJ3cmFwcGVkSXRlbXMiLCJtYXAiLCJpdGVtIiwia2V5IiwiZnV6emFsZHJpbiIsImZpbHRlciIsIm5vb3AiLCJhdXRvY29tcGxldGVJdGVtUmVuZGVyZXIiLCJwcm9wcyIsIkF1dG9jb21wbGV0ZSIsInRhcmdldFdpZHRoIiwic3RhdGUiLCJjaGFuZ2VzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaXNPcGVuIiwiaGlnaGxpZ2h0ZWRJbmRleCIsImluZGV4T2YiLCJzZWxlY3RlZEl0ZW0iLCJ3aWR0aCIsImlucHV0VmFsdWUiLCJzZWxlY3RJdGVtQXRJbmRleCIsImdldEl0ZW1Qcm9wcyIsInRpdGxlIiwiaXRlbVNpemUiLCJpdGVtc0ZpbHRlciIsIm9yaWdpbmFsSXRlbXMiLCJyZW5kZXJJdGVtIiwicG9wb3Zlck1heEhlaWdodCIsImlzRmlsdGVyRGlzYWJsZWQiLCJ0cmltIiwibGVuZ3RoIiwiTWF0aCIsIm1pbiIsImluZGV4Iiwic3R5bGUiLCJpdGVtU3RyaW5nIiwib25TZWxlY3QiLCJjaGlsZHJlbiIsIm9uTW91c2VVcCIsIm9uVG91Y2hFbmQiLCJpc1NlbGVjdGVkIiwiaXNIaWdobGlnaHRlZCIsInNldFN0YXRlIiwidGFyZ2V0UmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicG9zaXRpb24iLCJwb3BvdmVyTWluV2lkdGgiLCJkZWZhdWx0U2VsZWN0ZWRJdGVtIiwiaW5pdGlhbFNlbGVjdGVkSXRlbSIsImRlZmF1bHRJbnB1dFZhbHVlIiwiaW5pdGlhbElucHV0VmFsdWUiLCJnZXRCdXR0b25Qcm9wcyIsImdldFRvZ2dsZUJ1dHRvblByb3BzIiwic3RhdGVSZWR1Y2VyIiwiaXNTaG93biIsImdldFJvb3RQcm9wcyIsInJlc3REb3duc2hpZnRQcm9wcyIsInJlZktleSIsIlBvc2l0aW9uIiwiQk9UVE9NX0xFRlQiLCJCT1RUT00iLCJyZW5kZXJSZXN1bHRzIiwibWF4IiwiaXNTaG93blBvcG92ZXIiLCJ0b2dnbGUiLCJnZXRSZWYiLCJyZWYiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibm9kZSIsImFycmF5IiwiaXNSZXF1aXJlZCIsImFueSIsImZ1bmMiLCJudW1iZXIiLCJvbmVPZiIsImtleXMiLCJib29sIiwiRG93bnNoaWZ0IiwicHJvcFR5cGVzIiwiaSIsIlN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLFlBQVksRUFBSTtBQUNsQyxNQUFJQSxZQUFKLEVBQWtCO0FBQ2hCLFdBQU8sVUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQ3ZCLFVBQU1DLFlBQVksR0FBR0YsS0FBSyxDQUFDRyxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLGVBQUs7QUFDdENDLFVBQUFBLEdBQUcsRUFBRU4sWUFBWSxDQUFDSyxJQUFELENBRHFCO0FBRXRDQSxVQUFBQSxJQUFJLEVBQUpBO0FBRnNDLFNBQUw7QUFBQSxPQUFkLENBQXJCO0FBS0EsYUFBT0Usd0JBQ0pDLE1BREksQ0FDR0wsWUFESCxFQUNpQkQsS0FEakIsRUFDd0I7QUFBRUksUUFBQUEsR0FBRyxFQUFFO0FBQVAsT0FEeEIsRUFFSkYsR0FGSSxDQUVBO0FBQUEsWUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsZUFBY0EsSUFBZDtBQUFBLE9BRkEsQ0FBUDtBQUdELEtBVEQ7QUFVRDs7QUFFRCxTQUFPLFVBQUNKLEtBQUQsRUFBUUMsS0FBUjtBQUFBLFdBQWtCSyx3QkFBV0MsTUFBWCxD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bUJBQVVRLE07O0FBRTVCOzs7QUFHQXpCLEVBQUFBLGNBQWMsRUFBRSx5QkFDZGlCLG1CQUFVTyxJQURJLEVBRWQscUNBRmM7R0FLYkssbUJBQVVDLFM7OEJBN0ZJM0UsWSxrQkFvR0c7QUFDcEJaLEVBQUFBLFlBQVksRUFBRSxzQkFBQXdGLENBQUM7QUFBQSxXQUFLQSxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0QsQ0FBRCxDQUFULEdBQWUsRUFBckI7QUFBQSxHQURLO0FBRXBCM0QsRUFBQUEsUUFBUSxFQUFFLEVBRlU7QUFHcEJLLEVBQUFBLGdCQUFnQixFQUFFLEtBSEU7QUFJcEJrQixFQUFBQSxlQUFlLEVBQUUsR0FKRztBQUtwQm5CLEVBQUFBLGdCQUFnQixFQUFFLEdBTEU7QUFNcEJELEVBQUFBLFVBQVUsRUFBRXRCO0FBTlEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgZnV6emFsZHJpbiBmcm9tICdmdXp6YWxkcmluLXBsdXMnXG5pbXBvcnQgRG93bnNoaWZ0IGZyb20gJ2Rvd25zaGlmdCdcbmltcG9ydCBWaXJ0dWFsTGlzdCBmcm9tICdyZWFjdC10aW55LXZpcnR1YWwtbGlzdCdcbmltcG9ydCB7IFBvcG92ZXIgfSBmcm9tICcuLi8uLi9wb3BvdmVyJ1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgZGVwcmVjYXRlZCBmcm9tICcuLi8uLi9saWIvZGVwcmVjYXRlZCdcbmltcG9ydCBBdXRvY29tcGxldGVJdGVtIGZyb20gJy4vQXV0b2NvbXBsZXRlSXRlbSdcblxuY29uc3QgZnV6enlGaWx0ZXIgPSBpdGVtVG9TdHJpbmcgPT4ge1xuICBpZiAoaXRlbVRvU3RyaW5nKSB7XG4gICAgcmV0dXJuIChpdGVtcywgaW5wdXQpID0+IHtcbiAgICAgIGNvbnN0IHdyYXBwZWRJdGVtcyA9IGl0ZW1zLm1hcChpdGVtID0+ICh7XG4gICAgICAgIGtleTogaXRlbVRvU3RyaW5nKGl0ZW0pLFxuICAgICAgICBpdGVtXG4gICAgICB9KSlcblxuICAgICAgcmV0dXJuIGZ1enphbGRyaW5cbiAgICAgICAgLmZpbHRlcih3cmFwcGVkSXRlbXMsIGlucHV0LCB7IGtleTogJ2tleScgfSlcbiAgICAgICAgLm1hcCgoeyBpdGVtIH0pID0+IGl0ZW0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChpdGVtcywgaW5wdXQpID0+IGZ1enphbGRyaW4uZmlsdGVyKGl0ZW1zLCBpbnB1dClcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IGF1dG9jb21wbGV0ZUl0ZW1SZW5kZXJlciA9IHByb3BzID0+IDxBdXRvY29tcGxldGVJdGVtIHsuLi5wcm9wc30gLz5cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3BheXBhbC9kb3duc2hpZnQvaXNzdWVzLzE2NFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b2NvbXBsZXRlIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhpcyBwcm9wIGNhbiBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYSBOb2RlLlxuICAgICAqIEl0IHdpbGwgcHJvdmlkZSBhIHRpdGxlIGZvciB0aGUgaXRlbXNcbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGl0ZW1zIHRvIGJlIHVzZWQgYXMgb3B0aW9ucyBmb3IgdGhlIHNlbGVjdFxuICAgICAqL1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RlZCBJdGVtIHRvIGJlIHNob3duIG9uIHRoZSBhdXRvY29tcGxldGVcbiAgICAgKi9cbiAgICBzZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5hbnksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0ZWQgaXRlbSB0byBiZSBzZWxlY3RlZCAmIHNob3duIGJ5IGRlZmF1bHQgb24gdGhlIGF1dG9jb21wbGV0ZSAoZGVwcmVjYXRlZClcbiAgICAgKi9cbiAgICBkZWZhdWx0U2VsZWN0ZWRJdGVtOiBkZXByZWNhdGVkKFxuICAgICAgUHJvcFR5cGVzLmFueSxcbiAgICAgICdVc2UgXCJpbml0aWFsU2VsZWN0ZWRJdGVtXCIgaW5zdGVhZC4nXG4gICAgKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RlZCBpdGVtIHRvIGJlIHNlbGVjdGVkICYgc2hvd24gYnkgZGVmYXVsdCBvbiB0aGUgYXV0b2NvbXBsZXRlIChkZXByZWNhdGVkKVxuICAgICAqL1xuICAgIGRlZmF1bHRJbnB1dFZhbHVlOiBkZXByZWNhdGVkKFxuICAgICAgUHJvcFR5cGVzLmFueSxcbiAgICAgICdVc2UgXCJpbml0aWFsSW5wdXRWYWx1ZVwiIGluc3RlYWQuJ1xuICAgICksXG5cbiAgICAvKipcbiAgICAgKiBJbiBjYXNlIHRoZSBhcnJheSBvZiBpdGVtcyBpcyBub3QgYW4gYXJyYXkgb2Ygc3RyaW5ncyxcbiAgICAgKiB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgb24gZWFjaCBpdGVtIHRvIHJldHVybiB0aGUgc3RyaW5nIHRoYXQgd2lsbCBiZSBzaG93biBvbiB0aGUgZmlsdGVyXG4gICAgICovXG4gICAgaXRlbVRvU3RyaW5nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIHJlbmRlciB0aGUgJ2ZpbHRlcicgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiBlYWNoIGl0ZW0gaW4gdGhlIGxpc3RcbiAgICAgKiBCZWNhdXNlIHRoZSBsaXN0IGlzIHZpcnR1YWxpemVkIHRoaXMgaXMgcmVxdWlyZWQgYmVmb3JlaGFuZC5cbiAgICAgKi9cbiAgICBpdGVtU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGNvbXBvbmVudCB0byByZW5kZXIgdGhlIGl0ZW1cbiAgICAgKi9cbiAgICByZW5kZXJJdGVtOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgUG9wb3ZlciB0aGUgQXV0b2NvbXBsZXRlIGlzIHJlbmRlcmVkIGluLlxuICAgICAqL1xuICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LmtleXMoUG9zaXRpb24pKSxcblxuICAgIC8qKlxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGZpbHRlciB0aGUgaXRlbXMuXG4gICAgICogSXQgc2hvdWxkIHJldHVybiBhIHN1YnNldCBvZiB0aGUgaW5pdGlhbCBpdGVtcy5cbiAgICAgKiBCeSBkZWZhdWx0IHRoZSBcImZ1enphbGRyaW4tcGx1c1wiIHBhY2thZ2UgaXMgdXNlZC5cbiAgICAgKi9cbiAgICBpdGVtc0ZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wIHRoYXQgZW5hYmxlcyBhbmQgZGlzYWJsZXMgZmlsdGVyaW5nXG4gICAgICogVHJ1ZTogRW5hYmxlcyBGaWx0ZXJpbmdcbiAgICAgKiBGYWxzZTogRGlzYWJsZXMgRmlsdGVyaW5nXG4gICAgICovXG4gICAgaXNGaWx0ZXJEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBtaW5pbXVtIGhlaWdodCB0aGUgcmVzdWx0cyBjb250YWluZXIgd2lsbCBiZVxuICAgICAqL1xuICAgIHBvcG92ZXJNaW5XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIG1heGltdW0gaGVpZ2h0IHRoZSByZXN1bHRzIGNvbnRhaW5lciB3aWxsIGJlXG4gICAgICovXG4gICAgcG9wb3Zlck1heEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RlZCBpdGVtIHRvIGJlIHNlbGVjdGVkICYgc2hvd24gYnkgZGVmYXVsdCBvbiB0aGUgYXV0b2NvbXBsZXRlIChkZXByZWNhdGVkKVxuICAgICAqL1xuICAgIGdldEJ1dHRvblByb3BzOiBkZXByZWNhdGVkKFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAnVXNlIFwiZ2V0VG9nZ2xlQnV0dG9uUHJvcHNcIiBpbnN0ZWFkLidcbiAgICApLFxuXG4gICAgLi4uRG93bnNoaWZ0LnByb3BUeXBlc1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgdGFyZ2V0V2lkdGg6IDBcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaXRlbVRvU3RyaW5nOiBpID0+IChpID8gU3RyaW5nKGkpIDogJycpLFxuICAgIGl0ZW1TaXplOiAzMixcbiAgICBpc0ZpbHRlckRpc2FibGVkOiBmYWxzZSxcbiAgICBwb3BvdmVyTWluV2lkdGg6IDI0MCxcbiAgICBwb3BvdmVyTWF4SGVpZ2h0OiAyNDAsXG4gICAgcmVuZGVySXRlbTogYXV0b2NvbXBsZXRlSXRlbVJlbmRlcmVyXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRhcmdldFdpZHRoOiB0aGlzLnRhcmdldFJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICAgIH0pXG4gIH1cblxuICBzdGF0ZVJlZHVjZXIgPSAoc3RhdGUsIGNoYW5nZXMpID0+IHtcbiAgICBjb25zdCB7IGl0ZW1zIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY2hhbmdlcywgJ2lzT3BlbicpICYmXG4gICAgICBjaGFuZ2VzLmlzT3BlblxuICAgICkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY2hhbmdlcyxcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogaXRlbXMuaW5kZXhPZihzdGF0ZS5zZWxlY3RlZEl0ZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYW5nZXNcbiAgfVxuXG4gIHJlbmRlclJlc3VsdHMgPSAoe1xuICAgIHdpZHRoLFxuICAgIGlucHV0VmFsdWUsXG4gICAgaGlnaGxpZ2h0ZWRJbmRleCxcbiAgICBzZWxlY3RJdGVtQXRJbmRleCxcbiAgICBzZWxlY3RlZEl0ZW0sXG4gICAgZ2V0SXRlbVByb3BzXG4gIH0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSxcbiAgICAgIGl0ZW1TaXplLFxuICAgICAgaXRlbXNGaWx0ZXIsXG4gICAgICBpdGVtczogb3JpZ2luYWxJdGVtcyxcbiAgICAgIGl0ZW1Ub1N0cmluZyxcbiAgICAgIHJlbmRlckl0ZW0sXG4gICAgICBwb3BvdmVyTWF4SGVpZ2h0LFxuICAgICAgaXNGaWx0ZXJEaXNhYmxlZFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBmaWx0ZXIgPSBpdGVtc0ZpbHRlciB8fCBmdXp6eUZpbHRlcihpdGVtVG9TdHJpbmcpXG4gICAgY29uc3QgaXRlbXMgPVxuICAgICAgaXNGaWx0ZXJEaXNhYmxlZCB8fCBpbnB1dFZhbHVlLnRyaW0oKSA9PT0gJydcbiAgICAgICAgPyBvcmlnaW5hbEl0ZW1zXG4gICAgICAgIDogZmlsdGVyKG9yaWdpbmFsSXRlbXMsIGlucHV0VmFsdWUpXG5cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lIHdpZHRoPXt3aWR0aH0+XG4gICAgICAgIHt0aXRsZSAmJiAoXG4gICAgICAgICAgPFBhbmUgcGFkZGluZz17OH0gYm9yZGVyQm90dG9tPVwibXV0ZWRcIj5cbiAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9ezEwMH0+e3RpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICl9XG4gICAgICAgIHtpdGVtcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8VmlydHVhbExpc3RcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBoZWlnaHQ9e01hdGgubWluKGl0ZW1zLmxlbmd0aCAqIGl0ZW1TaXplLCBwb3BvdmVyTWF4SGVpZ2h0KX1cbiAgICAgICAgICAgIGl0ZW1TaXplPXtpdGVtU2l6ZX1cbiAgICAgICAgICAgIGl0ZW1Db3VudD17aXRlbXMubGVuZ3RofVxuICAgICAgICAgICAgc2Nyb2xsVG9JbmRleD17aGlnaGxpZ2h0ZWRJbmRleCB8fCAwfVxuICAgICAgICAgICAgb3ZlcnNjYW5Db3VudD17M31cbiAgICAgICAgICAgIHNjcm9sbFRvQWxpZ25tZW50PVwiYXV0b1wiXG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoeyBpbmRleCwgc3R5bGUgfSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNbaW5kZXhdXG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW1TdHJpbmcgPSBpdGVtVG9TdHJpbmcoaXRlbSlcbiAgICAgICAgICAgICAgY29uc3Qgb25TZWxlY3QgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0SXRlbUF0SW5kZXgoaW5kZXgpXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gcmVuZGVySXRlbShcbiAgICAgICAgICAgICAgICBnZXRJdGVtUHJvcHMoe1xuICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgIGtleTogaXRlbVN0cmluZyxcbiAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbjogaXRlbVN0cmluZyxcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VVcDogb25TZWxlY3QsXG4gICAgICAgICAgICAgICAgICBvblRvdWNoRW5kOiBvblNlbGVjdCxcbiAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGl0ZW1Ub1N0cmluZyhzZWxlY3RlZEl0ZW0pID09PSBpdGVtU3RyaW5nLFxuICAgICAgICAgICAgICAgICAgaXNIaWdobGlnaHRlZDogaGlnaGxpZ2h0ZWRJbmRleCA9PT0gaW5kZXhcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaXRlbVNpemUsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIHJlbmRlckl0ZW0sXG4gICAgICBpdGVtc0ZpbHRlcixcbiAgICAgIHBvcG92ZXJNYXhIZWlnaHQsXG4gICAgICBwb3BvdmVyTWluV2lkdGgsXG4gICAgICBkZWZhdWx0U2VsZWN0ZWRJdGVtLCAvLyBEZXByZWNhdGVkXG4gICAgICBpbml0aWFsU2VsZWN0ZWRJdGVtLFxuICAgICAgZGVmYXVsdElucHV0VmFsdWUsIC8vIERlcHJlY2F0ZWRcbiAgICAgIGluaXRpYWxJbnB1dFZhbHVlLFxuICAgICAgZ2V0QnV0dG9uUHJvcHMsIC8vIERlcHJlY2F0ZWRcbiAgICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEb3duc2hpZnRcbiAgICAgICAgaW5pdGlhbFNlbGVjdGVkSXRlbT17aW5pdGlhbFNlbGVjdGVkSXRlbSB8fCBkZWZhdWx0U2VsZWN0ZWRJdGVtfVxuICAgICAgICBpbml0aWFsSW5wdXRWYWx1ZT17aW5pdGlhbElucHV0VmFsdWUgfHwgZGVmYXVsdElucHV0VmFsdWV9XG4gICAgICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzPXtnZXRUb2dnbGVCdXR0b25Qcm9wcyB8fCBnZXRCdXR0b25Qcm9wc31cbiAgICAgICAgc3RhdGVSZWR1Y2VyPXt0aGlzLnN0YXRlUmVkdWNlcn1cbiAgICAgICAgc2Nyb2xsSW50b1ZpZXc9e25vb3B9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgeyh7XG4gICAgICAgICAgaXNPcGVuOiBpc1Nob3duLFxuICAgICAgICAgIGlucHV0VmFsdWUsXG4gICAgICAgICAgZ2V0SXRlbVByb3BzLFxuICAgICAgICAgIHNlbGVjdGVkSXRlbSxcbiAgICAgICAgICBoaWdobGlnaHRlZEluZGV4LFxuICAgICAgICAgIHNlbGVjdEl0ZW1BdEluZGV4LFxuICAgICAgICAgIGdldFJvb3RQcm9wcyxcbiAgICAgICAgICAuLi5yZXN0RG93bnNoaWZ0UHJvcHNcbiAgICAgICAgfSkgPT4gKFxuICAgICAgICAgIDxQYW5lIHdpZHRoPVwiMTAwJVwiIHsuLi5nZXRSb290UHJvcHMoeyByZWZLZXk6ICdpbm5lclJlZicgfSl9PlxuICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgYnJpbmdGb2N1c0luc2lkZT17ZmFsc2V9XG4gICAgICAgICAgICAgIGlzU2hvd249e2lzU2hvd259XG4gICAgICAgICAgICAgIG1pbldpZHRoPXtwb3BvdmVyTWluV2lkdGh9XG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiB8fFxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnRhcmdldFdpZHRoIDwgcG9wb3Zlck1pbldpZHRoXG4gICAgICAgICAgICAgICAgICA/IFBvc2l0aW9uLkJPVFRPTV9MRUZUXG4gICAgICAgICAgICAgICAgICA6IFBvc2l0aW9uLkJPVFRPTSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250ZW50PXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUmVzdWx0cyh7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogTWF0aC5tYXgodGhpcy5zdGF0ZS50YXJnZXRXaWR0aCwgcG9wb3Zlck1pbldpZHRoKSxcbiAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUsXG4gICAgICAgICAgICAgICAgICBnZXRJdGVtUHJvcHMsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgICAgICAgICBoaWdobGlnaHRlZEluZGV4LFxuICAgICAgICAgICAgICAgICAgc2VsZWN0SXRlbUF0SW5kZXhcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBtaW5IZWlnaHQ9ezB9XG4gICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uPXswfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7KHsgaXNTaG93bjogaXNTaG93blBvcG92ZXIsIHRvZ2dsZSwgZ2V0UmVmIH0pID0+XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4oe1xuICAgICAgICAgICAgICAgICAgaXNTaG93bjogaXNTaG93blBvcG92ZXIsXG4gICAgICAgICAgICAgICAgICB0b2dnbGUsXG4gICAgICAgICAgICAgICAgICBnZXRSZWY6IHJlZiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgcmVmIGludGVybmFsbHkgdG8gZGV0ZXJtaW5lIHRoZSB3aWR0aFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFJlZiA9IHJlZlxuICAgICAgICAgICAgICAgICAgICBnZXRSZWYocmVmKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgICAgICAgICBoaWdobGlnaHRlZEluZGV4LFxuICAgICAgICAgICAgICAgICAgc2VsZWN0SXRlbUF0SW5kZXgsXG4gICAgICAgICAgICAgICAgICAuLi5yZXN0RG93bnNoaWZ0UHJvcHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICApfVxuICAgICAgPC9Eb3duc2hpZnQ+XG4gICAgKVxuICB9XG59XG4iXX0=