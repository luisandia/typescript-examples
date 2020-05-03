"use strict";
function someFunction(value) {
    var someOtherFunction = function (someArgs) {
        var a = someArgs;
    };
    return someOtherFunction;
}
var result = someFunction("");
