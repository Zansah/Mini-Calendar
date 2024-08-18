document.addEventListener("DOMContentLoaded", function() {
    const date = new Date();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    const month = months[date.getMonth()];
    const day = days[date.getDay()];
    const currentDate = date.getDate();
    const year = date.getFullYear();

    document.getElementById("month").textContent = month;
    document.getElementById("day").textContent = day;
    document.getElementById("date").textContent = currentDate;
    document.getElementById("year").textContent = year;
});
