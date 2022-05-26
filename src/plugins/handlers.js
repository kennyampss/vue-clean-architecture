import Vue from "vue";

export async function errorHandler(err, defaultErrorMsg, title = "Error") {
  let _errorMessage;
  if (err && err.response && err.response.data && err.response.data.message) {
    _errorMessage = err.response.data.message;
  } else {
    _errorMessage = defaultErrorMsg ? defaultErrorMsg : "Something went wrong!";
  }
  return Vue.swal({
    title: title,
    text: _errorMessage,
    confirmButtonColor: "#6db56b",
    confirmButtonText: "OKAY",
    icon: null,
    toast: false,
    position: "center",
    showConfirmButton: true,
    timer: 0,
  }).then((result) => {
    return Promise.resolve(result);
  });
}

export async function messageHandler(msg = "Success!", title = "Success") {
  return Vue.swal({
    title: title,
    text: msg,
    confirmButtonColor: "#6db56b",
    confirmButtonText: "OKAY",
    icon: null,
    toast: false,
    position: "center",
    showConfirmButton: true,
    timer: 0,
  }).then((result) => {
    return Promise.resolve(result);
  });
}

export async function comingSoonHandler(msg = "", title = "Coming Soon") {
  Vue.swal({
    title: title,
    text: msg,
    confirmButtonColor: "#6db56b",
    confirmButtonText: "OKAY",
    icon: null,
    toast: false,
    position: "center",
    showConfirmButton: true,
    timer: 0,
  });
}

window.globalErrorHandler = errorHandler;
window.globalMessageHandler = messageHandler;
window.globalComingSoonHandler = comingSoonHandler;
