for (var i = 0; i < document.getElementsByClassName("nabil-item").length; i++) {
    if (i === 0) {
        document.getElementsByClassName("nabil-item")[i].style.marginTop = "0";
    }
    if (i === document.getElementsByClassName("nabil-item").length - 1) {
        document.getElementsByClassName("nabil-item")[i].style.marginBottom = "0";
    }
    document.getElementsByClassName("nabil-item")[i].style.border = "2px solid " + getRandomColor();
    document.getElementsByClassName("nabil-item")[i].style.height = "calc(69vh / 4)";
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener("DOMContentLoaded", function() {
    var demo1 = new BVAmbient({
      selector: "#ambient",
      fps: 60,
      max_transition_speed: 12000, // speed will be randomized between max and min
      min_transition_speed: 8000,
      particle_number: 30,
      particle_maxwidth: 30,
      particle_minwidth: 10,
      particle_radius: 50,
      particle_opacity: true,
      particle_colision_change: true,
      particle_background: "random",
      refresh_onfocus: true,
      particle_image: {
        image: false,
        src: ""
      },
      responsive: [
          {
            breakpoint: 768,
            settings: {
              particle_number: "15"
            }
          },
          {
            breakpoint: 480,
            settings: {
              particle_number: "10"
            }
          }
      ]
    });
});

demo1.Add(5);