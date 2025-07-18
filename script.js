document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("booking-form");

  bookingForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const message = `Hello, I would like to book an appointment.
Name: ${name}
Phone: ${phone}
Date: ${date}
Time: ${time}`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  });
});
