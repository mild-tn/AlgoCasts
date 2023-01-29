var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  Interval: () => Interval
});
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.closed = true;
    this.setClosed = function(closed) {
      this.closed = closed;
    };
    this.formatInterval = function() {
      return this.closed ? "[" + this.start + ", " + this.end + "]" : "(" + this.start + ", " + this.end + ")";
    };
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Interval
});
//# sourceMappingURL=interval.js.map
