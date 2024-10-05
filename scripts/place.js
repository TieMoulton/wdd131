document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    document.getElementById('lastModified').textContent = document.lastModified;

    const temp = 25; // c
    const windSpeed = 15; // km/h

    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
            return windChill.toFixed(1);
        } else {
            return "N/A";
        }
    }

    document.getElementById('windChill').textContent = calculateWindChill(temp, windSpeed);
});
