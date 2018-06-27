var scheduleFriday = document.getElementById('schedule-content-friday');
var scheduleSaturday = document.getElementById('schedule-content-saturday');
var scheduleSunday = document.getElementById('schedule-content-sunday');

var buttonFriday = document.getElementById('button-friday');
var buttonSaturday = document.getElementById('button-saturday');
var buttonSunday = document.getElementById('button-sunday');

function toggleDay(button) {
    if (button === buttonFriday) {
        scheduleFriday.style.display = 'flex';
        scheduleSaturday.style.display = 'none';
        scheduleSunday.style.display = 'none';
        buttonFriday.classList.add('active');
        buttonSaturday.classList.remove('active');
        buttonSunday.classList.remove('active');
    } else if (button === buttonSaturday) {
        scheduleFriday.style.display = 'none';
        scheduleSaturday.style.display = 'flex';
        scheduleSunday.style.display = 'none';
        buttonFriday.classList.remove('active');
        buttonSaturday.classList.add('active');
        buttonSunday.classList.remove('active');
    } else if (button === buttonSunday) {
        scheduleFriday.style.display = 'none';
        scheduleSaturday.style.display = 'none';
        scheduleSunday.style.display = 'flex';
        buttonFriday.classList.remove('active');
        buttonSaturday.classList.remove('active');
        buttonSunday.classList.add('active');
    }
}