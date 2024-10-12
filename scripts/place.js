document.addEventListener("DOMContentLoaded", function() {
    const temp = 25; // celsius
    const windSpeed = 15; // km/h

    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
        }
        return "N/A";
    }

    document.getElementById('windChill').textContent = calculateWindChill(temp, windSpeed);
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});
