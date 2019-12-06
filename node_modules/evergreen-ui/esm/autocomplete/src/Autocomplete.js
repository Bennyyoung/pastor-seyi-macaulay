import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
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
import Downshift from 'downshift';
import VirtualList from 'react-tiny-virtual-list';
import { Popover } from '../../popover';
import { Position } from '../../constants';
import { Heading } from '../../typography';
import { Pane } from '../../layers';
import deprecated from '../../lib/deprecated';
import AutocompleteItem from './AutocompleteItem';

var fuzzyFilter = function fuzzyFilter(itemToString) {
  if (itemToString) {
    return function (items, input) {
      var wrappedItems = items.map(function (item) {
        return {
          key: itemToString(item),
          item: item
        };
      });
      return fuzzaldrin.filter(wrappedItems, input, {
        key: 'key'
      }).map(function (_ref) {
        var item = _ref.item;
        return item;
      });
    };
  }

  return function (items, input) {
    return fuzzaldrin.filter(items, input);
  };
};

var noop = function noop() {};

var autocompleteItemRenderer = function autocompleteItemRenderer(props) {
  return React.createElement(AutocompleteItem, props);
};

autocompleteItemRenderer.displayName = "autocompleteItemRenderer";

// https://github.com/paypal/downshift/issues/164
var Autocomplete =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Autocomplete, _PureComponent);

  function Autocomplete() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Autocomplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Autocomplete)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      targetWidth: 0
    });

    _defineProperty(_assertThisInitialized(_this), "stateReducer", function (state, changes) {
      var items = _this.props.items;

      if (Object.prototype.hasOwnProperty.call(changes, 'isOpen') && changes.isOpen) {
        return _objectSpread({}, changes, {
          highlightedIndex: items.indexOf(state.selectedItem)
        });
      }

      return changes;
    });

    _defineProperty(_assertThisInitialized(_this), "renderResults", function (_ref2) {
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
      return React.createElement(Pane, {
        width: width
      }, title && React.createElement(Pane, {
        padding: 8,
        borderBottom: "muted"
      }, React.createElement(Heading, {
        size: 100
      }, title)), items.length > 0 && React.createElement(VirtualList, {
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

  _createClass(Autocomplete, [{
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
          props = _objectWithoutProperties(_this$props2, ["children", "itemSize", "position", "renderItem", "itemsFilter", "popoverMaxHeight", "popoverMinWidth", "defaultSelectedItem", "initialSelectedItem", "defaultInputValue", "initialInputValue", "getButtonProps", "getToggleButtonProps"]);

      return React.createElement(Downshift, _extends({
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
            restDownshiftProps = _objectWithoutProperties(_ref4, ["isOpen", "inputValue", "getItemProps", "selectedItem", "highlightedIndex", "selectItemAtIndex", "getRootProps"]);

        return React.createElement(Pane, _extends({
          width: "100%"
        }, getRootProps({
          refKey: 'innerRef'
        })), React.createElement(Popover, {
          bringFocusInside: false,
          isShown: isShown,
          minWidth: popoverMinWidth,
          position: position || (_this2.state.targetWidth < popoverMinWidth ? Position.BOTTOM_LEFT : Position.BOTTOM),
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
          return children(_objectSpread({
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
}(PureComponent);

Autocomplete.displayName = "Autocomplete";

_defineProperty(Autocomplete, "propTypes", _objectSpread({
  /**
   * This prop can be either a string or a Node.
   * It will provide a title for the items
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * An array of items to be used as options for the select
   */
  items: PropTypes.array.isRequired,

  /**
   * The selected Item to be shown on the autocomplete
   */
  selectedItem: PropTypes.any,

  /**
   * The selected item to be selected & shown by default on the autocomplete (deprecated)
   */
  defaultSelectedItem: deprecated(PropTypes.any, 'Use "initialSelectedItem" instead.'),

  /**
   * The selected item to be selected & shown by default on the autocomplete (deprecated)
   */
  defaultInputValue: deprecated(PropTypes.any, 'Use "initialInputValue" instead.'),

  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString: PropTypes.func.isRequired,

  /**
   * Function that will render the 'filter' component.
   */
  children: PropTypes.func.isRequired,

  /**
   * The height of each item in the list
   * Because the list is virtualized this is required beforehand.
   */
  itemSize: PropTypes.number,

  /**
   * Function that returns a component to render the item
   */
  renderItem: PropTypes.func,

  /**
   * The position of the Popover the Autocomplete is rendered in.
   */
  position: PropTypes.oneOf(Object.keys(Position)),

  /**
   * A function that is used to filter the items.
   * It should return a subset of the initial items.
   * By default the "fuzzaldrin-plus" package is used.
   */
  itemsFilter: PropTypes.func,

  /**
   * Prop that enables and disables filtering
   * True: Enables Filtering
   * False: Disables Filtering
   */
  isFilterDisabled: PropTypes.bool,

  /**
   * Defines the minimum height the results container will be
   */
  popoverMinWidth: PropTypes.number,

  /**
   * Defines the maximum height the results container will be
   */
  popoverMaxHeight: PropTypes.number,

  /**
   * The selected item to be selected & shown by default on the autocomplete (deprecated)
   */
  getButtonProps: deprecated(PropTypes.func, 'Use "getToggleButtonProps" instead.')
}, Downshift.propTypes));

_defineProperty(Autocomplete, "defaultProps", {
  itemToString: function itemToString(i) {
    return i ? String(i) : '';
  },
  itemSize: 32,
  isFilterDisabled: false,
  popoverMinWidth: 240,
  popoverMaxHeight: 240,
  renderItem: autocompleteItemRenderer
});

export { Autocomplete as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRvY29tcGxldGUvc3JjL0F1dG9jb21wbGV0ZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmdXp6YWxkcmluIiwiRG93bnNoaWZ0IiwiVmlydHVhbExpc3QiLCJQb3BvdmVyIiwiUG9zaXRpb24iLCJIZWFkaW5nIiwiUGFuZSIsImRlcHJlY2F0ZWQiLCJBdXRvY29tcGxldGVJdGVtIiwiZnV6enlGaWx0ZXIiLCJpdGVtVG9TdHJpbmciLCJpdGVtcyIsImlucHV0Iiwid3JhcHBlZEl0ZW1zIiwibWFwIiwiaXRlbSIsImtleSIsImZpbHRlciIsIm5vb3AiLCJhdXRvY29tcGxldGVJdGVtUmVuZGVyZXIiLCJwcm9wcyIsIkF1dG9jb21wbGV0ZSIsInRhcmdldFdpZHRoIiwic3RhdGUiLCJjaGFuZ2VzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaXNPcGVuIiwiaGlnaGxpZ2h0ZWRJbmRleCIsImluZGV4T2YiLCJzZWxlY3RlZEl0ZW0iLCJ3aWR0aCIsImlucHV0VmFsdWUiLCJzZWxlY3RJdGVtQXRJbmRleCIsImdldEl0ZW1Qcm9wcyIsInRpdGxlIiwiaXRlbVNpemUiLCJpdGVtc0ZpbHRlciIsIm9yaWdpbmFsSXRlbXMiLCJyZW5kZXJJdGVtIiwicG9wb3Zlck1heEhlaWdodCIsImlzRmlsdGVyRGlzYWJsZWQiLCJ0cmltIiwibGVuZ3RoIiwiTWF0aCIsIm1pbiIsImluZGV4Iiwic3R5bGUiLCJpdGVtU3RyaW5nIiwib25TZWxlY3QiLCJjaGlsZHJlbiIsIm9uTW91c2VVcCIsIm9uVG91Y2hFbmQiLCJpc1NlbGVjdGVkIiwiaXNIaWdobGlnaHRlZCIsInNldFN0YXRlIiwidGFyZ2V0UmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicG9zaXRpb24iLCJwb3BvdmVyTWluV2lkdGgiLCJkZWZhdWx0U2VsZWN0ZWRJdGVtIiwiaW5pdGlhbFNlbGVjdGVkSXRlbSIsImRlZmF1bHRJbnB1dFZhbHVlIiwiaW5pdGlhbElucHV0VmFsdWUiLCJnZXRCdXR0b25Qcm9wcyIsImdldFRvZ2dsZUJ1dHRvblByb3BzIiwic3RhdGVSZWR1Y2VyIiwiaXNTaG93biIsImdldFJvb3RQcm9wcyIsInJlc3REb3duc2hpZnRQcm9wcyIsInJlZktleSIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NIiwicmVuZGVyUmVzdWx0cyIsIm1heCIsImlzU2hvd25Qb3BvdmVyIiwidG9nZ2xlIiwiZ2V0UmVmIiwicmVmIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibm9kZSIsImFycmF5IiwiaXNSZXF1aXJlZCIsImFueSIsImZ1bmMiLCJudW1iZXIiLCJvbmVPZiIsImtleXMiLCJib29sIiwicHJvcFR5cGVzIiwiaSIsIlN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsaUJBQXZCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixXQUF0QjtBQUNBLE9BQU9DLFdBQVAsTUFBd0IseUJBQXhCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixlQUF4QjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsaUJBQXpCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixrQkFBeEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixzQkFBdkI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QixvQkFBN0I7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsWUFBWSxFQUFJO0FBQ2xDLE1BQUlBLFlBQUosRUFBa0I7QUFDaEIsV0FBTyxVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDdkIsVUFBTUMsWUFBWSxHQUFHRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsZUFBSztBQUN0Q0Ms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RTdCOzs7QUFHQWpDLEVBQUFBLFFBQVEsRUFBRXJELFNBQVMsQ0FBQ3dGLElBQVYsQ0FBZUYsVTs7QUFFekI7Ozs7QUFJQS9DLEVBQUFBLFFBQVEsRUFBRXZDLFNBQVMsQ0FBQ3lGLE07O0FBRXBCOzs7QUFHQS9DLEVBQUFBLFVBQVUsRUFBRTFDLFNBQVMsQ0FBQ3dGLEk7O0FBRXRCOzs7QUFHQTNCLEVBQUFBLFFBQVEsRUFBRTdELFNBQVMsQ0FBQzBGLEtBQVYsQ0FBZ0JoRSxNQUFNLENBQUNpRSxJQUFQLENBQVl0RixRQUFaLENBQWhCLEM7O0FBRVY7Ozs7O0FBS0FtQyxFQUFBQSxXQUFXLEVBQUV4QyxTQUFTLENBQUN3RixJOztBQUV2Qjs7Ozs7QUFLQTVDLEVBQUFBLGdCQUFnQixFQUFFNUMsU0FBUyxDQUFDNEYsSTs7QUFFNUI7OztBQUdBOUIsRUFBQUEsZUFBZSxFQUFFOUQsU0FBUyxDQUFDeUYsTTs7QUFFM0I7OztBQUdBOUMsRUFBQUEsZ0JBQWdCLEVBQUUzQyxTQUFTLENBQUN5RixNOztBQUU1Qjs7O0FBR0F0QixFQUFBQSxjQUFjLEVBQUUzRCxVQUFVLENBQ3hCUixTQUFTLENBQUN3RixJQURjLEVBRXhCLHFDQUZ3QjtHQUt2QnRGLFNBQVMsQ0FBQzJGLFM7O2dCQTdGSXZFLFksa0JBb0dHO0FBQ3BCWCxFQUFBQSxZQUFZLEVBQUUsc0JBQUFtRixDQUFDO0FBQUEsV0FBS0EsQ0FBQyxHQUFHQyxNQUFNLENBQUNELENBQUQsQ0FBVCxHQUFlLEVBQXJCO0FBQUEsR0FESztBQUVwQnZELEVBQUFBLFFBQVEsRUFBRSxFQUZVO0FBR3BCSyxFQUFBQSxnQkFBZ0IsRUFBRSxLQUhFO0FBSXBCa0IsRUFBQUEsZUFBZSxFQUFFLEdBSkc7QUFLcEJuQixFQUFBQSxnQkFBZ0IsRUFBRSxHQUxFO0FBTXBCRCxFQUFBQSxVQUFVLEVBQUV0QjtBQU5RLEM7O1NBcEdIRSxZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBmdXp6YWxkcmluIGZyb20gJ2Z1enphbGRyaW4tcGx1cydcbmltcG9ydCBEb3duc2hpZnQgZnJvbSAnZG93bnNoaWZ0J1xuaW1wb3J0IFZpcnR1YWxMaXN0IGZyb20gJ3JlYWN0LXRpbnktdmlydHVhbC1saXN0J1xuaW1wb3J0IHsgUG9wb3ZlciB9IGZyb20gJy4uLy4uL3BvcG92ZXInXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCBkZXByZWNhdGVkIGZyb20gJy4uLy4uL2xpYi9kZXByZWNhdGVkJ1xuaW1wb3J0IEF1dG9jb21wbGV0ZUl0ZW0gZnJvbSAnLi9BdXRvY29tcGxldGVJdGVtJ1xuXG5jb25zdCBmdXp6eUZpbHRlciA9IGl0ZW1Ub1N0cmluZyA9PiB7XG4gIGlmIChpdGVtVG9TdHJpbmcpIHtcbiAgICByZXR1cm4gKGl0ZW1zLCBpbnB1dCkgPT4ge1xuICAgICAgY29uc3Qgd3JhcHBlZEl0ZW1zID0gaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAga2V5OiBpdGVtVG9TdHJpbmcoaXRlbSksXG4gICAgICAgIGl0ZW1cbiAgICAgIH0pKVxuXG4gICAgICByZXR1cm4gZnV6emFsZHJpblxuICAgICAgICAuZmlsdGVyKHdyYXBwZWRJdGVtcywgaW5wdXQsIHsga2V5OiAna2V5JyB9KVxuICAgICAgICAubWFwKCh7IGl0ZW0gfSkgPT4gaXRlbSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKGl0ZW1zLCBpbnB1dCkgPT4gZnV6emFsZHJpbi5maWx0ZXIoaXRlbXMsIGlucHV0KVxufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgYXV0b2NvbXBsZXRlSXRlbVJlbmRlcmVyID0gcHJvcHMgPT4gPEF1dG9jb21wbGV0ZUl0ZW0gey4uLnByb3BzfSAvPlxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vcGF5cGFsL2Rvd25zaGlmdC9pc3N1ZXMvMTY0XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvY29tcGxldGUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGlzIHByb3AgY2FuIGJlIGVpdGhlciBhIHN0cmluZyBvciBhIE5vZGUuXG4gICAgICogSXQgd2lsbCBwcm92aWRlIGEgdGl0bGUgZm9yIHRoZSBpdGVtc1xuICAgICAqL1xuICAgIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgaXRlbXMgdG8gYmUgdXNlZCBhcyBvcHRpb25zIGZvciB0aGUgc2VsZWN0XG4gICAgICovXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdGVkIEl0ZW0gdG8gYmUgc2hvd24gb24gdGhlIGF1dG9jb21wbGV0ZVxuICAgICAqL1xuICAgIHNlbGVjdGVkSXRlbTogUHJvcFR5cGVzLmFueSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RlZCBpdGVtIHRvIGJlIHNlbGVjdGVkICYgc2hvd24gYnkgZGVmYXVsdCBvbiB0aGUgYXV0b2NvbXBsZXRlIChkZXByZWNhdGVkKVxuICAgICAqL1xuICAgIGRlZmF1bHRTZWxlY3RlZEl0ZW06IGRlcHJlY2F0ZWQoXG4gICAgICBQcm9wVHlwZXMuYW55LFxuICAgICAgJ1VzZSBcImluaXRpYWxTZWxlY3RlZEl0ZW1cIiBpbnN0ZWFkLidcbiAgICApLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdGVkIGl0ZW0gdG8gYmUgc2VsZWN0ZWQgJiBzaG93biBieSBkZWZhdWx0IG9uIHRoZSBhdXRvY29tcGxldGUgKGRlcHJlY2F0ZWQpXG4gICAgICovXG4gICAgZGVmYXVsdElucHV0VmFsdWU6IGRlcHJlY2F0ZWQoXG4gICAgICBQcm9wVHlwZXMuYW55LFxuICAgICAgJ1VzZSBcImluaXRpYWxJbnB1dFZhbHVlXCIgaW5zdGVhZC4nXG4gICAgKSxcblxuICAgIC8qKlxuICAgICAqIEluIGNhc2UgdGhlIGFycmF5IG9mIGl0ZW1zIGlzIG5vdCBhbiBhcnJheSBvZiBzdHJpbmdzLFxuICAgICAqIHRoaXMgZnVuY3Rpb24gaXMgdXNlZCBvbiBlYWNoIGl0ZW0gdG8gcmV0dXJuIHRoZSBzdHJpbmcgdGhhdCB3aWxsIGJlIHNob3duIG9uIHRoZSBmaWx0ZXJcbiAgICAgKi9cbiAgICBpdGVtVG9TdHJpbmc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgcmVuZGVyIHRoZSAnZmlsdGVyJyBjb21wb25lbnQuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIGVhY2ggaXRlbSBpbiB0aGUgbGlzdFxuICAgICAqIEJlY2F1c2UgdGhlIGxpc3QgaXMgdmlydHVhbGl6ZWQgdGhpcyBpcyByZXF1aXJlZCBiZWZvcmVoYW5kLlxuICAgICAqL1xuICAgIGl0ZW1TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgY29tcG9uZW50IHRvIHJlbmRlciB0aGUgaXRlbVxuICAgICAqL1xuICAgIHJlbmRlckl0ZW06IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSBQb3BvdmVyIHRoZSBBdXRvY29tcGxldGUgaXMgcmVuZGVyZWQgaW4uXG4gICAgICovXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihPYmplY3Qua2V5cyhQb3NpdGlvbikpLFxuXG4gICAgLyoqXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gZmlsdGVyIHRoZSBpdGVtcy5cbiAgICAgKiBJdCBzaG91bGQgcmV0dXJuIGEgc3Vic2V0IG9mIHRoZSBpbml0aWFsIGl0ZW1zLlxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIFwiZnV6emFsZHJpbi1wbHVzXCIgcGFja2FnZSBpcyB1c2VkLlxuICAgICAqL1xuICAgIGl0ZW1zRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFByb3AgdGhhdCBlbmFibGVzIGFuZCBkaXNhYmxlcyBmaWx0ZXJpbmdcbiAgICAgKiBUcnVlOiBFbmFibGVzIEZpbHRlcmluZ1xuICAgICAqIEZhbHNlOiBEaXNhYmxlcyBGaWx0ZXJpbmdcbiAgICAgKi9cbiAgICBpc0ZpbHRlckRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIG1pbmltdW0gaGVpZ2h0IHRoZSByZXN1bHRzIGNvbnRhaW5lciB3aWxsIGJlXG4gICAgICovXG4gICAgcG9wb3Zlck1pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgbWF4aW11bSBoZWlnaHQgdGhlIHJlc3VsdHMgY29udGFpbmVyIHdpbGwgYmVcbiAgICAgKi9cbiAgICBwb3BvdmVyTWF4SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdGVkIGl0ZW0gdG8gYmUgc2VsZWN0ZWQgJiBzaG93biBieSBkZWZhdWx0IG9uIHRoZSBhdXRvY29tcGxldGUgKGRlcHJlY2F0ZWQpXG4gICAgICovXG4gICAgZ2V0QnV0dG9uUHJvcHM6IGRlcHJlY2F0ZWQoXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICdVc2UgXCJnZXRUb2dnbGVCdXR0b25Qcm9wc1wiIGluc3RlYWQuJ1xuICAgICksXG5cbiAgICAuLi5Eb3duc2hpZnQucHJvcFR5cGVzXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICB0YXJnZXRXaWR0aDogMFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpdGVtVG9TdHJpbmc6IGkgPT4gKGkgPyBTdHJpbmcoaSkgOiAnJyksXG4gICAgaXRlbVNpemU6IDMyLFxuICAgIGlzRmlsdGVyRGlzYWJsZWQ6IGZhbHNlLFxuICAgIHBvcG92ZXJNaW5XaWR0aDogMjQwLFxuICAgIHBvcG92ZXJNYXhIZWlnaHQ6IDI0MCxcbiAgICByZW5kZXJJdGVtOiBhdXRvY29tcGxldGVJdGVtUmVuZGVyZXJcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGFyZ2V0V2lkdGg6IHRoaXMudGFyZ2V0UmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRlUmVkdWNlciA9IChzdGF0ZSwgY2hhbmdlcykgPT4ge1xuICAgIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjaGFuZ2VzLCAnaXNPcGVuJykgJiZcbiAgICAgIGNoYW5nZXMuaXNPcGVuXG4gICAgKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jaGFuZ2VzLFxuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBpdGVtcy5pbmRleE9mKHN0YXRlLnNlbGVjdGVkSXRlbSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2hhbmdlc1xuICB9XG5cbiAgcmVuZGVyUmVzdWx0cyA9ICh7XG4gICAgd2lkdGgsXG4gICAgaW5wdXRWYWx1ZSxcbiAgICBoaWdobGlnaHRlZEluZGV4LFxuICAgIHNlbGVjdEl0ZW1BdEluZGV4LFxuICAgIHNlbGVjdGVkSXRlbSxcbiAgICBnZXRJdGVtUHJvcHNcbiAgfSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgaXRlbVNpemUsXG4gICAgICBpdGVtc0ZpbHRlcixcbiAgICAgIGl0ZW1zOiBvcmlnaW5hbEl0ZW1zLFxuICAgICAgaXRlbVRvU3RyaW5nLFxuICAgICAgcmVuZGVySXRlbSxcbiAgICAgIHBvcG92ZXJNYXhIZWlnaHQsXG4gICAgICBpc0ZpbHRlckRpc2FibGVkXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGZpbHRlciA9IGl0ZW1zRmlsdGVyIHx8IGZ1enp5RmlsdGVyKGl0ZW1Ub1N0cmluZylcbiAgICBjb25zdCBpdGVtcyA9XG4gICAgICBpc0ZpbHRlckRpc2FibGVkIHx8IGlucHV0VmFsdWUudHJpbSgpID09PSAnJ1xuICAgICAgICA/IG9yaWdpbmFsSXRlbXNcbiAgICAgICAgOiBmaWx0ZXIob3JpZ2luYWxJdGVtcywgaW5wdXRWYWx1ZSlcblxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgd2lkdGg9e3dpZHRofT5cbiAgICAgICAge3RpdGxlICYmIChcbiAgICAgICAgICA8UGFuZSBwYWRkaW5nPXs4fSBib3JkZXJCb3R0b209XCJtdXRlZFwiPlxuICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT17MTAwfT57dGl0bGV9PC9IZWFkaW5nPlxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgKX1cbiAgICAgICAge2l0ZW1zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxWaXJ0dWFsTGlzdFxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGhlaWdodD17TWF0aC5taW4oaXRlbXMubGVuZ3RoICogaXRlbVNpemUsIHBvcG92ZXJNYXhIZWlnaHQpfVxuICAgICAgICAgICAgaXRlbVNpemU9e2l0ZW1TaXplfVxuICAgICAgICAgICAgaXRlbUNvdW50PXtpdGVtcy5sZW5ndGh9XG4gICAgICAgICAgICBzY3JvbGxUb0luZGV4PXtoaWdobGlnaHRlZEluZGV4IHx8IDB9XG4gICAgICAgICAgICBvdmVyc2NhbkNvdW50PXszfVxuICAgICAgICAgICAgc2Nyb2xsVG9BbGlnbm1lbnQ9XCJhdXRvXCJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyh7IGluZGV4LCBzdHlsZSB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpbmRleF1cbiAgICAgICAgICAgICAgY29uc3QgaXRlbVN0cmluZyA9IGl0ZW1Ub1N0cmluZyhpdGVtKVxuICAgICAgICAgICAgICBjb25zdCBvblNlbGVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RJdGVtQXRJbmRleChpbmRleClcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiByZW5kZXJJdGVtKFxuICAgICAgICAgICAgICAgIGdldEl0ZW1Qcm9wcyh7XG4gICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAga2V5OiBpdGVtU3RyaW5nLFxuICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBpdGVtU3RyaW5nLFxuICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwOiBvblNlbGVjdCxcbiAgICAgICAgICAgICAgICAgIG9uVG91Y2hFbmQ6IG9uU2VsZWN0LFxuICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZDogaXRlbVRvU3RyaW5nKHNlbGVjdGVkSXRlbSkgPT09IGl0ZW1TdHJpbmcsXG4gICAgICAgICAgICAgICAgICBpc0hpZ2hsaWdodGVkOiBoaWdobGlnaHRlZEluZGV4ID09PSBpbmRleFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpdGVtU2l6ZSxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgcmVuZGVySXRlbSxcbiAgICAgIGl0ZW1zRmlsdGVyLFxuICAgICAgcG9wb3Zlck1heEhlaWdodCxcbiAgICAgIHBvcG92ZXJNaW5XaWR0aCxcbiAgICAgIGRlZmF1bHRTZWxlY3RlZEl0ZW0sIC8vIERlcHJlY2F0ZWRcbiAgICAgIGluaXRpYWxTZWxlY3RlZEl0ZW0sXG4gICAgICBkZWZhdWx0SW5wdXRWYWx1ZSwgLy8gRGVwcmVjYXRlZFxuICAgICAgaW5pdGlhbElucHV0VmFsdWUsXG4gICAgICBnZXRCdXR0b25Qcm9wcywgLy8gRGVwcmVjYXRlZFxuICAgICAgZ2V0VG9nZ2xlQnV0dG9uUHJvcHMsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPERvd25zaGlmdFxuICAgICAgICBpbml0aWFsU2VsZWN0ZWRJdGVtPXtpbml0aWFsU2VsZWN0ZWRJdGVtIHx8IGRlZmF1bHRTZWxlY3RlZEl0ZW19XG4gICAgICAgIGluaXRpYWxJbnB1dFZhbHVlPXtpbml0aWFsSW5wdXRWYWx1ZSB8fCBkZWZhdWx0SW5wdXRWYWx1ZX1cbiAgICAgICAgZ2V0VG9nZ2xlQnV0dG9uUHJvcHM9e2dldFRvZ2dsZUJ1dHRvblByb3BzIHx8IGdldEJ1dHRvblByb3BzfVxuICAgICAgICBzdGF0ZVJlZHVjZXI9e3RoaXMuc3RhdGVSZWR1Y2VyfVxuICAgICAgICBzY3JvbGxJbnRvVmlldz17bm9vcH1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7KHtcbiAgICAgICAgICBpc09wZW46IGlzU2hvd24sXG4gICAgICAgICAgaW5wdXRWYWx1ZSxcbiAgICAgICAgICBnZXRJdGVtUHJvcHMsXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgICAgc2VsZWN0SXRlbUF0SW5kZXgsXG4gICAgICAgICAgZ2V0Um9vdFByb3BzLFxuICAgICAgICAgIC4uLnJlc3REb3duc2hpZnRQcm9wc1xuICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgPFBhbmUgd2lkdGg9XCIxMDAlXCIgey4uLmdldFJvb3RQcm9wcyh7IHJlZktleTogJ2lubmVyUmVmJyB9KX0+XG4gICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICBicmluZ0ZvY3VzSW5zaWRlPXtmYWxzZX1cbiAgICAgICAgICAgICAgaXNTaG93bj17aXNTaG93bn1cbiAgICAgICAgICAgICAgbWluV2lkdGg9e3BvcG92ZXJNaW5XaWR0aH1cbiAgICAgICAgICAgICAgcG9zaXRpb249e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUudGFyZ2V0V2lkdGggPCBwb3BvdmVyTWluV2lkdGhcbiAgICAgICAgICAgICAgICAgID8gUG9zaXRpb24uQk9UVE9NX0xFRlRcbiAgICAgICAgICAgICAgICAgIDogUG9zaXRpb24uQk9UVE9NKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRlbnQ9eygpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJSZXN1bHRzKHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBNYXRoLm1heCh0aGlzLnN0YXRlLnRhcmdldFdpZHRoLCBwb3BvdmVyTWluV2lkdGgpLFxuICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIGdldEl0ZW1Qcm9wcyxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RJdGVtQXRJbmRleFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG1pbkhlaWdodD17MH1cbiAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb249ezB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsoeyBpc1Nob3duOiBpc1Nob3duUG9wb3ZlciwgdG9nZ2xlLCBnZXRSZWYgfSkgPT5cbiAgICAgICAgICAgICAgICBjaGlsZHJlbih7XG4gICAgICAgICAgICAgICAgICBpc1Nob3duOiBpc1Nob3duUG9wb3ZlcixcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZSxcbiAgICAgICAgICAgICAgICAgIGdldFJlZjogcmVmID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHRoZSByZWYgaW50ZXJuYWxseSB0byBkZXRlcm1pbmUgdGhlIHdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UmVmID0gcmVmXG4gICAgICAgICAgICAgICAgICAgIGdldFJlZihyZWYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RJdGVtQXRJbmRleCxcbiAgICAgICAgICAgICAgICAgIC4uLnJlc3REb3duc2hpZnRQcm9wc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICl9XG4gICAgICA8L0Rvd25zaGlmdD5cbiAgICApXG4gIH1cbn1cbiJdfQ==