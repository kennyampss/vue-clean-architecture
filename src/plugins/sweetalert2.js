import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";

import "sweetalert2/dist/sweetalert2.min.css";

let sweetOptions = {
  icon: "success",
  showCancelButton: false,
  timer: 3000,
  confirmButtonColor: "#e05a4c",
  confirmButtonText: "Ok",
  cancelButtonText: "Cancel",
  timerProgressBar: true,
  toast: true,
  position: "top-end",
  // cancelButtonColor: "#CBCCCC",
  showConfirmButton: false,
  // showCancelButton: false,

  // TYPES AND ICONS
  // success, error, warning, info, question
};

Vue.use(VueSweetalert2, sweetOptions);
