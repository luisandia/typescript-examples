import { PI } from "./DataTypes.js";
declare var Swal: any;

console.log(PI);

$(document).ready(() => {
  console.log("Hello");
});

$("#botAlerta").on("click", function () {
  Swal.fire('Any fool can use a computer')
});
