import Swal from "sweetalert2";

const mySwal = (customClasses = {}) => {
  return Swal.mixin({
    customClass: {
      confirmButton: "button button-primary",
      denyButton: "button button-secondary",
      actions: "gap-3",
      title: "p-5",
      ...customClasses,
    },
    buttonsStyling: false,
  });
};

export default mySwal;
