document.addEventListener("DOMContentLoaded", function () {
  // Initialize Flatpickr
  flatpickr(".js-datepicker", {
    dateFormat: "Y-m-d",
    altInput: true,
    altFormat: "F j, Y",
    allowInput: true,
  });

  // Form submission handler
  function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const birthday = document.getElementById("birthday").value;
    const gender = document.getElementById("gender").value;
    const genre = document.querySelector('input[name="genre"]:checked')?.value;
    const resCode = document.getElementById("res_code").value;

    if (name && birthday && gender && genre && resCode) {
      Swal.fire({
        icon: "success",
        title: "Form Data",
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Birthdate:</strong> ${birthday}</p>
          <p><strong>Gender:</strong> ${gender}</p>
          <p><strong>Favorite Genre:</strong> ${genre}</p>
          <p><strong>Registration Code:</strong> ${resCode}</p>
        `,
      });
      document.getElementById("musicAnimeForm").reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all required fields!",
      });
    }
  }

  document
    .getElementById("musicAnimeForm")
    .addEventListener("submit", submitForm);
});
