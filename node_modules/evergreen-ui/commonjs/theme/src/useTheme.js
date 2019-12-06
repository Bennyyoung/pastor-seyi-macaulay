"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _ThemeContext = require("./ThemeContext");

function useTheme() {
  return (0, _react.useContext)({
    Consumer: _ThemeContext.ThemeConsumer,
    Provider: _ThemeContext.ThemeProvider
  });
}

var _default = useTheme;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZS9zcmMvdXNlVGhlbWUuanMiXSwibmFtZXMiOlsidXNlVGhlbWUiLCJDb25zdW1lciIsIlRoZW1lQ29uc3VtZXIiLCJQcm92aWRlciIsIlRoZW1lUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2xCLFNBQU8sdUJBQVc7QUFBRUMsSUFBQUEsUUFBUSxFQUFFQywyQkFBWjtBQUEyQkMsSUFBQUEsUUFBUSxFQUFFQztBQUFyQyxHQUFYLENBQVA7QUFDRDs7ZUFFY0osUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIFRoZW1lQ29uc3VtZXIgfSBmcm9tICcuL1RoZW1lQ29udGV4dCdcblxuZnVuY3Rpb24gdXNlVGhlbWUoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KHsgQ29uc3VtZXI6IFRoZW1lQ29uc3VtZXIsIFByb3ZpZGVyOiBUaGVtZVByb3ZpZGVyIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVRoZW1lXG4iXX0=