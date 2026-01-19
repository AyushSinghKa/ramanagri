document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const service = document.getElementById("service").value;

  const message = `*Ayodhya Booking Request*

Name     : ${name}
Phone    : ${phone}
Service  : ${service}
Date     : ${date}

|| Jai Shri Ram ||`;

  const whatsappNumber = "917054431143"; // CHANGE NUMBER HERE
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  window.open(url, "_blank");
});
