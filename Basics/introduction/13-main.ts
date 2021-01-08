// import { PI } from "./1-DataTypes.js";
const PI =1.14156;
declare var Swal: any;

console.log(PI);

$(document).ready(() => {
  console.log("Hello");
});

$("#botAlerta").on("click", function () {
  Swal.fire('Any fool can use a computer')
});
