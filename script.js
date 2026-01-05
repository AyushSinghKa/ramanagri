document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const pickup = document.getElementById("pickup").value;
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const service = document.getElementById("service").value;

  const message = `*Ayodhya Booking Request*

Name        : ${name}
Phone       : ${phone}
Service     : ${service}

Pickup      : ${pickup}
Destination(Drop) : ${destination}

Date        : ${date}
Time        : ${time}

Please confirm availability.
|| Jai Shri Ram ||`;

  const whatsappNumber = "918595941579"; // CHANGE NUMBER HERE
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");
});
