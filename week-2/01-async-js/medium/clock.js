setInterval(() => {
  let hourFormat = new Date().getHours() > 12 ? "PM" : "AM";
  let hours = new Date().getHours();
  let formattedHours =
    hours > 12 ? (hours % 12 < 10 ? "0" + (hours % 12) : hours % 12) : hours;
  let minutes = new Date().getMinutes();
  let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  let seconds = new Date().getSeconds();
  let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  console.log("Time:=> " + hours + ":" + minutes + ":" + seconds);
  console.log(
    "Time Formatted:=> " +
      formattedHours +
      ":" +
      formattedMinutes +
      ":" +
      formattedSeconds +
      " " +
      hourFormat
  );
}, 1000);
