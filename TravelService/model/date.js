document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("date");

    const today = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const formattedDate = today.toLocaleDateString("en-US", options);

    dateElement.textContent = formattedDate;
});