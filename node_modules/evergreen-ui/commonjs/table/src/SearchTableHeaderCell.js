"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../typography");

var _icon = require("../../icon");

var _TableHeaderCell = _interopRequireDefault(require("./TableHeaderCell"));

var invisibleInputClass = (0, _glamor.css)({
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
  (0, _inherits2.default)(SearchTableHeaderCell, _PureComponent);

  function SearchTableHeaderCell() {
    (0, _classCallCheck2.default)(this, SearchTableHeaderCell);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SearchTableHeaderCell).apply(this, arguments));
  }

  (0, _createClass2.default)(SearchTableHeaderCell, [{
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
          props = (0, _objectWithoutProperties2.default)(_this$props, ["value", "children", "onChange", "autoFocus", "spellCheck", "placeholder", "icon"]);
      return _react.default.createElement(_TableHeaderCell.default, props, _react.default.createElement(_icon.Icon, {
        icon: icon,
        color: "muted",
        marginLeft: 2,
        marginRight: 10,
        size: 12
      }), _react.default.createElement(_typography.Text, {
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
}(_react.PureComponent);

exports.default = SearchTableHeaderCell;
SearchTableHeaderCell.displayName = "SearchTableHeaderCell";
(0, _defineProperty2.default)(SearchTableHeaderCell, "propTypes", (0, _objectSpread2.default)({}, _TableHeaderCell.default.propTypes, {
  /**
   * The value of the input.
   */
  value: _propTypes.default.string,

  /**
   * Handler to be called when the input changes.
   */
  onChange: _propTypes.default.func,

  /**
   * Sets whether the component should be automatically focused on component render.
   */
  autoFocus: _propTypes.default.bool,

  /**
   * Sets whether to apply spell checking to the content.
   */
  spellCheck: _propTypes.default.bool,

  /**
   * Text to display in the input if the input is empty.
   */
  placeholder: _propTypes.default.string,

  /**
   * Icon to display in the input.
   */
  icon: _propTypes.default.string
}));
(0, _defineProperty2.default)(SearchTableHeaderCell, "defaultProps", {
  onChange: function onChange() {},
  spellCheck: true,
  placeholder: 'Filter...',
  icon: 'search'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvU2VhcmNoVGFibGVIZWFkZXJDZWxsLmpzIl0sIm5hbWVzIjpbImludmlzaWJsZUlucHV0Q2xhc3MiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJXZWJraXRBcHBlYXJhbmNlIiwiTW96QXBwZWFyYW5jZSIsIldlYmtpdEZvbnRTbW9vdGhpbmciLCJvdXRsaW5lIiwiY29sb3IiLCJ0b1N0cmluZyIsIlNlYXJjaFRhYmxlSGVhZGVyQ2VsbCIsInByb3BzIiwidmFsdWUiLCJjaGlsZHJlbiIsIm9uQ2hhbmdlIiwiYXV0b0ZvY3VzIiwic3BlbGxDaGVjayIsInBsYWNlaG9sZGVyIiwiaWNvbiIsImUiLCJ0YXJnZXQiLCJQdXJlQ29tcG9uZW50IiwiVGFibGVIZWFkZXJDZWxsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLG1CQUFtQixHQUFHLGlCQUFJO0FBQzlCQyxFQUFBQSxNQUFNLEVBQUUsTUFEc0I7QUFFOUJDLEVBQUFBLGVBQWUsRUFBRSxhQUZhO0FBRzlCQyxFQUFBQSxnQkFBZ0IsRUFBRSxNQUhZO0FBSTlCQyxFQUFBQSxhQUFhLEVBQUUsTUFKZTtBQUs5QkMsRUFBQUEsbUJBQW1CLEVBQUUsYUFMUztBQU85QixhQUFXO0FBQ1RDLElBQUFBLE9BQU8sRUFBRTtBQURBLEdBUG1CO0FBVzlCLG9CQUFrQjtBQUNoQkMsSUFBQUEsS0FBSztBQURXO0FBWFksQ0FBSixFQWN6QkMsUUFkeUIsRUFBNUI7O0lBZ0JxQkMscUI7Ozs7Ozs7Ozs7Ozs2QkE2Q1Y7QUFBQSx3QkFVSCxLQUFLQyxLQVZGO0FBQUEsVUFFTEMsS0FGSyxlQUVMQSxLQUZLO0FBQUEsVUFHTEMsUUFISyxlQUdMQSxRQUhLO0FBQUEsVUFJTEMsU0FKSyxlQUlMQSxRQUpLO0FBQUEsVUFLTEMsU0FMSyxlQUtMQSxTQUxLO0FBQUEsVUFNTEMsVUFOSyxlQU1MQSxVQU5LO0FBQUEsVUFPTEMsV0FQSyxlQU9MQSxXQVBLO0FBQUEsVUFRTEMsSUFSSyxlQVFMQSxJQVJLO0FBQUEsVUFTRlAsS0FURTtBQVlQLGFBQ0UsNkJBQUMsd0JBQUQsRUFBcUJBLEtBQXJCLEVBQ0UsNkJBQUMsVUFBRDtBQUNFLFFBQUEsSUFBSSxFQUFFTyxJQURSO0FBRUUsUUFBQSxLQUFLLEVBQUMsT0FGUjtBQUdFLFFBQUEsVUFBVSxFQUFFLENBSGQ7QUFJRSxRQUFBLFdBQVcsRUFBRSxFQUpmO0FBS0UsUUFBQSxJQUFJLEVBQUU7QUFMUixRQURGLEVBUUUsNkJBQUMsZ0JBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBQyxPQURMO0FBRUUsUUFBQSxJQUFJLEVBQUUsR0FGUjtBQUdFLFFBQUEsSUFBSSxFQUFDLEdBSFA7QUFJRSxRQUFBLFNBQVMsRUFBRWpCLG1CQUpiO0FBS0UsUUFBQSxLQUFLLEVBQUVXLEtBTFQ7QUFNRSxRQUFBLFFBQVEsRUFBRSxrQkFBQU8sQ0FBQztBQUFBLGlCQUFJTCxTQUFRLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTUixLQUFWLENBQVo7QUFBQSxTQU5iO0FBT0UsUUFBQSxTQUFTLEVBQUVHLFNBUGI7QUFRRSxRQUFBLFVBQVUsRUFBRUMsVUFSZDtBQVNFLFFBQUEsVUFBVSxFQUFFLEdBVGQ7QUFVRSxRQUFBLFVBQVUsRUFBRSxDQUFDLENBVmY7QUFXRSxRQUFBLFdBQVcsRUFBRSxDQVhmO0FBWUUsUUFBQSxXQUFXLEVBQUVDO0FBWmYsUUFSRixDQURGO0FBeUJEOzs7RUFsRmdESSxvQjs7O0FBQTlCWCxxQjs4QkFBQUEscUIsK0NBS2RZLHlCQUFnQkMsUztBQUVuQjs7O0FBR0FYLEVBQUFBLEtBQUssRUFBRVksbUJBQVVDLE07O0FBRWpCOzs7QUFHQVgsRUFBQUEsUUFBUSxFQUFFVSxtQkFBVUUsSTs7QUFFcEI7OztBQUdBWCxFQUFBQSxTQUFTLEVBQUVTLG1CQUFVRyxJOztBQUVyQjs7O0FBR0FYLEVBQUFBLFVBQVUsRUFBRVEsbUJBQVVHLEk7O0FBRXRCOzs7QUFHQVYsRUFBQUEsV0FBVyxFQUFFTyxtQkFBVUMsTTs7QUFFdkI7OztBQUdBUCxFQUFBQSxJQUFJLEVBQUVNLG1CQUFVQzs7OEJBbkNDZixxQixrQkFzQ0c7QUFDcEJJLEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBREU7QUFFcEJFLEVBQUFBLFVBQVUsRUFBRSxJQUZRO0FBR3BCQyxFQUFBQSxXQUFXLEVBQUUsV0FITztBQUlwQkMsRUFBQUEsSUFBSSxFQUFFO0FBSmMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9pY29uJ1xuaW1wb3J0IFRhYmxlSGVhZGVyQ2VsbCBmcm9tICcuL1RhYmxlSGVhZGVyQ2VsbCdcblxuY29uc3QgaW52aXNpYmxlSW5wdXRDbGFzcyA9IGNzcyh7XG4gIGJvcmRlcjogJ25vbmUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gIFdlYmtpdEFwcGVhcmFuY2U6ICdub25lJyxcbiAgTW96QXBwZWFyYW5jZTogJ25vbmUnLFxuICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuXG4gICcmOmZvY3VzJzoge1xuICAgIG91dGxpbmU6ICdub25lJ1xuICB9LFxuXG4gICcmOjpwbGFjZWhvbGRlcic6IHtcbiAgICBjb2xvcjogYHJnYmEoNjcsIDkwLCAxMTEsIDAuNylgXG4gIH1cbn0pLnRvU3RyaW5nKClcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoVGFibGVIZWFkZXJDZWxsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFRhYmxlSGVhZGVyQ2VsbCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uVGFibGVIZWFkZXJDZWxsLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBpbnB1dCBjaGFuZ2VzLlxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFNldHMgd2hldGhlciB0aGUgY29tcG9uZW50IHNob3VsZCBiZSBhdXRvbWF0aWNhbGx5IGZvY3VzZWQgb24gY29tcG9uZW50IHJlbmRlci5cbiAgICAgKi9cbiAgICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB3aGV0aGVyIHRvIGFwcGx5IHNwZWxsIGNoZWNraW5nIHRvIHRoZSBjb250ZW50LlxuICAgICAqL1xuICAgIHNwZWxsQ2hlY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGV4dCB0byBkaXNwbGF5IGluIHRoZSBpbnB1dCBpZiB0aGUgaW5wdXQgaXMgZW1wdHkuXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBJY29uIHRvIGRpc3BsYXkgaW4gdGhlIGlucHV0LlxuICAgICAqL1xuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIHNwZWxsQ2hlY2s6IHRydWUsXG4gICAgcGxhY2Vob2xkZXI6ICdGaWx0ZXIuLi4nLFxuICAgIGljb246ICdzZWFyY2gnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgc3BlbGxDaGVjayxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgaWNvbixcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8VGFibGVIZWFkZXJDZWxsIHsuLi5wcm9wc30+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICBjb2xvcj1cIm11dGVkXCJcbiAgICAgICAgICBtYXJnaW5MZWZ0PXsyfVxuICAgICAgICAgIG1hcmdpblJpZ2h0PXsxMH1cbiAgICAgICAgICBzaXplPXsxMn1cbiAgICAgICAgLz5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBpcz1cImlucHV0XCJcbiAgICAgICAgICBzaXplPXszMDB9XG4gICAgICAgICAgZmxleD1cIjFcIlxuICAgICAgICAgIGNsYXNzTmFtZT17aW52aXNpYmxlSW5wdXRDbGFzc31cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGF1dG9Gb2N1cz17YXV0b0ZvY3VzfVxuICAgICAgICAgIHNwZWxsQ2hlY2s9e3NwZWxsQ2hlY2t9XG4gICAgICAgICAgZm9udFdlaWdodD17NTAwfVxuICAgICAgICAgIG1hcmdpbkxlZnQ9ey0yfVxuICAgICAgICAgIHBhZGRpbmdMZWZ0PXswfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgLz5cbiAgICAgIDwvVGFibGVIZWFkZXJDZWxsPlxuICAgIClcbiAgfVxufVxuIl19