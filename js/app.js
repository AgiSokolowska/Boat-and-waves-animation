document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('stormBtn').onclick = function() {
        var button = this;
        var wrapper = document.getElementById('wrapper');
        wrapper.classList.toggle("is-storm");

        var musicThunderstorm = document.getElementById('music-thunderstorm');
        var musicElevator = document.getElementById('music-elevator');


        if (musicElevator.paused) {
            musicElevator.play();
            musicThunderstorm.pause();

        } else {
            musicThunderstorm.play();
            musicElevator.pause();
        };
    };
});
