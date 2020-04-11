System.register(["./DataTypes.js"], function (exports_1, context_1) {
    "use strict";
    var DataTypes_js_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (DataTypes_js_1_1) {
                DataTypes_js_1 = DataTypes_js_1_1;
            }
        ],
        execute: function () {
            console.log(DataTypes_js_1.PI);
            $(document).ready(function () {
                console.log("Hello");
            });
            $("#botAlerta").on("click", function () {
                Swal.fire('Any fool can use a computer');
            });
        }
    };
});
