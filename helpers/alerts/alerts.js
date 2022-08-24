import Swal from "sweetalert2";

export const feedbackAlert = (name, parr, type) => {
  Swal.fire({
    title: `<b>${name}</b> ${parr}`,
    icon: `${type}`,
    confirmButtonColor: "#123f3f",
  });
};

export const confirmDelete = () => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#123f3f",
    cancelButtonColor: "#2D9B9B",
    confirmButtonText: "Yes, delete it!",
  });
};
