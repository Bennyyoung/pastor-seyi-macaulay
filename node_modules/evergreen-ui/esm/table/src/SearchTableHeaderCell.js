import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { css } from 'glamor';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../typography';
import { Icon } from '../../icon';
import TableHeaderCell from './TableHeaderCell';
var invisibleInputClass = css({
  border: 'none',
  backgroundColor: 'transparent',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  WebkitFontSmoothing: 'antialiased',
  '&:focus': {
    outline: 'none'
  },
  '&::placeholder': {
    color: "rgba(67, 90, 111, 0.7)"
  }
}).toString();

var SearchTableHeaderCell =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SearchTableHeaderCell, _PureComponent);

  function SearchTableHeaderCell() {
    _classCallCheck(this, SearchTableHeaderCell);

    return _possibleConstructorReturn(this, _getPrototypeOf(SearchTableHeaderCell).apply(this, arguments));
  }

  _createClass(SearchTableHeaderCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          children = _this$props.children,
          _onChange = _this$props.onChange,
          autoFocus = _this$props.autoFocus,
          spellCheck = _this$props.spellCheck,
          placeholder = _this$props.placeholder,
          icon = _this$props.icon,
          props = _objectWithoutProperties(_this$props, ["value", "children", "onChange", "autoFocus", "spellCheck", "placeholder", "icon"]);

      return React.createElement(TableHeaderCell, props, React.createElement(Icon, {
        icon: icon,
        color: "muted",
        marginLeft: 2,
        marginRight: 10,
        size: 12
      }), React.createElement(Text, {
        is: "input",
        size: 300,
        flex: "1",
        className: invisibleInputClass,
        value: value,
        onChange: function onChange(e) {
          return _onChange(e.target.value);
        },
        autoFocus: autoFocus,
        spellCheck: spellCheck,
        fontWeight: 500,
        marginLeft: -2,
        paddingLeft: 0,
        placeholder: placeholder
      }));
    }
  }]);

  return SearchTableHeaderCell;
}(PureComponent);

SearchTableHeaderCell.displayName = "SearchTableHeaderCell";

_defineProperty(SearchTableHeaderCell, "propTypes", _objectSpread({}, TableHeaderCell.propTypes, {
  /**
   * The value of the input.
   */
  value: PropTypes.string,

  /**
   * Handler to be called when the input changes.
   */
  onChange: PropTypes.func,

  /**
   * Sets whether the component should be automatically focused on component render.
   */
  autoFocus: PropTypes.bool,

  /**
   * Sets whether to apply spell checking to the content.
   */
  spellCheck: PropTypes.bool,

  /**
   * Text to display in the input if the input is empty.
   */
  placeholder: PropTypes.string,

  /**
   * Icon to display in the input.
   */
  icon: PropTypes.string
}));

_defineProperty(SearchTableHeaderCell, "defaultProps", {
  onChange: function onChange() {},
  spellCheck: true,
  placeholder: 'Filter...',
  icon: 'search'
});

export { SearchTableHeaderCell as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvU2VhcmNoVGFibGVIZWFkZXJDZWxsLmpzIl0sIm5hbWVzIjpbImNzcyIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIlRleHQiLCJJY29uIiwiVGFibGVIZWFkZXJDZWxsIiwiaW52aXNpYmxlSW5wdXRDbGFzcyIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsIldlYmtpdEFwcGVhcmFuY2UiLCJNb3pBcHBlYXJhbmNlIiwiV2Via2l0Rm9udFNtb290aGluZyIsIm91dGxpbmUiLCJjb2xvciIsInRvU3RyaW5nIiwiU2VhcmNoVGFibGVIZWFkZXJDZWxsIiwicHJvcHMiLCJ2YWx1ZSIsImNoaWxkcmVuIiwib25DaGFuZ2UiLCJhdXRvRm9jdXMiLCJzcGVsbENoZWNrIiwicGxhY2Vob2xkZXIiLCJpY29uIiwiZSIsInRhcmdldCIsInByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVNBLEdBQVQsUUFBb0IsUUFBcEI7QUFDQSxPQUFPQyxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsWUFBckI7QUFDQSxPQUFPQyxlQUFQLE1BQTRCLG1CQUE1QjtBQUVBLElBQU1DLG1CQUFtQixHQUFHUCxHQUFHLENBQUM7QUFDOUJRLEVBQUFBLE1BQU0sRUFBRSxNQURzQjtBQUU5QkMsRUFBQUEsZUFBZSxFQUFFLGFBRmE7QUFHOUJDLEVBQUFBLGdCQUFnQixFQUFFLE1BSFk7QUFJOUJDLEVBQUFBLGFBQWEsRUFBRSxNQUplO0FBSzlCQyxFQUFBQSxtQkFBbUIsRUFBRSxhQUxTO0FBTzlCLGFBQVc7QUFDVEMsSUFBQUEsT0FBTyxFQUFFO0FBREEsR0FQbUI7QUFXOUIsb0JBQWtCO0FBQ2hCQyxJQUFBQSxLQUFLO0FBRFc7QUFYWSxDQUFELENBQUgsQ0FjekJDLFFBZHlCLEVBQTVCOztJQWdCcUJDLHFCOzs7Ozs7Ozs7Ozs7OzZCQTZDVjtBQUFBLHdCQVVILEtBQUtDLEtBVkY7QUFBQSxVQUVMQyxLQUZLLGVBRUxBLEtBRks7QUFBQSxVQUdMQyxRQUhLLGVBR0xBLFFBSEs7QUFBQSxVQUlMQyxTQUpLLGVBSUxBLFFBSks7QUFBQSxVQUtMQyxTQUxLLGVBS0xBLFNBTEs7QUFBQSxVQU1MQyxVQU5LLGVBTUxBLFVBTks7QUFBQSxVQU9MQyxXQVBLLGVBT0xBLFdBUEs7QUFBQSxVQVFMQyxJQVJLLGVBUUxBLElBUks7QUFBQSxVQVNGUCxLQVRFOztBQVlQLGFBQ0Usb0JBQUMsZUFBRCxFQUFxQkEsS0FBckIsRUFDRSxvQkFBQyxJQUFEO0FBQ0UsUUFBQSxJQUFJLEVBQUVPLElBRFI7QUFFRSxRQUFBLEtBQUssRUFBQyxPQUZSO0FBR0UsUUFBQSxVQUFVLEVBQUUsQ0FIZDtBQUlFLFFBQUEsV0FBVyxFQUFFLEVBSmY7QUFLRSxRQUFBLElBQUksRUFBRTtBQUxSLFFBREYsRUFRRSxvQkFBQyxJQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUMsT0FETDtBQUVFLFFBQUEsSUFBSSxFQUFFLEdBRlI7QUFHRSxRQUFBLElBQUksRUFBQyxHQUhQO0FBSUUsUUFBQSxTQUFTLEVBQUVqQixtQkFKYjtBQUtFLFFBQUEsS0FBSyxFQUFFVyxLQUxUO0FBTUUsUUFBQSxRQUFRLEVBQUUsa0JBQUFPLENBQUM7QUFBQSxpQkFBSUwsU0FBUSxDQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU1IsS0FBVixDQUFaO0FBQUEsU0FOYjtBQU9FLFFBQUEsU0FBUyxFQUFFRyxTQVBiO0FBUUUsUUFBQSxVQUFVLEVBQUVDLFVBUmQ7QUFTRSxRQUFBLFVBQVUsRUFBRSxHQVRkO0FBVUUsUUFBQSxVQUFVLEVBQUUsQ0FBQyxDQVZmO0FBV0UsUUFBQSxXQUFXLEVBQUUsQ0FYZjtBQVlFLFFBQUEsV0FBVyxFQUFFQztBQVpmLFFBUkYsQ0FERjtBQXlCRDs7OztFQWxGZ0RyQixhOztBQUE5QmMscUI7O2dCQUFBQSxxQixpQ0FLZFYsZUFBZSxDQUFDcUIsUztBQUVuQjs7O0FBR0FULEVBQUFBLEtBQUssRUFBRWYsU0FBUyxDQUFDeUIsTTs7QUFFakI7OztBQUdBUixFQUFBQSxRQUFRLEVBQUVqQixTQUFTLENBQUMwQixJOztBQUVwQjs7O0FBR0FSLEVBQUFBLFNBQVMsRUFBRWxCLFNBQVMsQ0FBQzJCLEk7O0FBRXJCOzs7QUFHQVIsRUFBQUEsVUFBVSxFQUFFbkIsU0FBUyxDQUFDMkIsSTs7QUFFdEI7OztBQUdBUCxFQUFBQSxXQUFXLEVBQUVwQixTQUFTLENBQUN5QixNOztBQUV2Qjs7O0FBR0FKLEVBQUFBLElBQUksRUFBRXJCLFNBQVMsQ0FBQ3lCOzs7Z0JBbkNDWixxQixrQkFzQ0c7QUFDcEJJLEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBREU7QUFFcEJFLEVBQUFBLFVBQVUsRUFBRSxJQUZRO0FBR3BCQyxFQUFBQSxXQUFXLEVBQUUsV0FITztBQUlwQkMsRUFBQUEsSUFBSSxFQUFFO0FBSmMsQzs7U0F0Q0hSLHFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL2ljb24nXG5pbXBvcnQgVGFibGVIZWFkZXJDZWxsIGZyb20gJy4vVGFibGVIZWFkZXJDZWxsJ1xuXG5jb25zdCBpbnZpc2libGVJbnB1dENsYXNzID0gY3NzKHtcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgV2Via2l0QXBwZWFyYW5jZTogJ25vbmUnLFxuICBNb3pBcHBlYXJhbmNlOiAnbm9uZScsXG4gIFdlYmtpdEZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG5cbiAgJyY6Zm9jdXMnOiB7XG4gICAgb3V0bGluZTogJ25vbmUnXG4gIH0sXG5cbiAgJyY6OnBsYWNlaG9sZGVyJzoge1xuICAgIGNvbG9yOiBgcmdiYSg2NywgOTAsIDExMSwgMC43KWBcbiAgfVxufSkudG9TdHJpbmcoKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hUYWJsZUhlYWRlckNlbGwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgVGFibGVIZWFkZXJDZWxsIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5UYWJsZUhlYWRlckNlbGwucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIG9mIHRoZSBpbnB1dC5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGlucHV0IGNoYW5nZXMuXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB3aGV0aGVyIHRoZSBjb21wb25lbnQgc2hvdWxkIGJlIGF1dG9tYXRpY2FsbHkgZm9jdXNlZCBvbiBjb21wb25lbnQgcmVuZGVyLlxuICAgICAqL1xuICAgIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHdoZXRoZXIgdG8gYXBwbHkgc3BlbGwgY2hlY2tpbmcgdG8gdGhlIGNvbnRlbnQuXG4gICAgICovXG4gICAgc3BlbGxDaGVjazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUZXh0IHRvIGRpc3BsYXkgaW4gdGhlIGlucHV0IGlmIHRoZSBpbnB1dCBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEljb24gdG8gZGlzcGxheSBpbiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgc3BlbGxDaGVjazogdHJ1ZSxcbiAgICBwbGFjZWhvbGRlcjogJ0ZpbHRlci4uLicsXG4gICAgaWNvbjogJ3NlYXJjaCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBhdXRvRm9jdXMsXG4gICAgICBzcGVsbENoZWNrLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBpY29uLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZUhlYWRlckNlbGwgey4uLnByb3BzfT5cbiAgICAgICAgPEljb25cbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIGNvbG9yPVwibXV0ZWRcIlxuICAgICAgICAgIG1hcmdpbkxlZnQ9ezJ9XG4gICAgICAgICAgbWFyZ2luUmlnaHQ9ezEwfVxuICAgICAgICAgIHNpemU9ezEyfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGlzPVwiaW5wdXRcIlxuICAgICAgICAgIHNpemU9ezMwMH1cbiAgICAgICAgICBmbGV4PVwiMVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtpbnZpc2libGVJbnB1dENsYXNzfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgYXV0b0ZvY3VzPXthdXRvRm9jdXN9XG4gICAgICAgICAgc3BlbGxDaGVjaz17c3BlbGxDaGVja31cbiAgICAgICAgICBmb250V2VpZ2h0PXs1MDB9XG4gICAgICAgICAgbWFyZ2luTGVmdD17LTJ9XG4gICAgICAgICAgcGFkZGluZ0xlZnQ9ezB9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZUhlYWRlckNlbGw+XG4gICAgKVxuICB9XG59XG4iXX0=