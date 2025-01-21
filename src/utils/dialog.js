import Swal from "sweetalert2";

export default function showDialog({ title, text, confirmButtonText, action }) {
  Swal.fire({
    title: title || "Are you sure?", // Default value jika tidak diberikan
    text: text || "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmButtonText || "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed && typeof action === "function") {
      action();
    }
  });
}
