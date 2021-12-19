let slider = document.getElementById("inspiration-slider");
let slider_position = 0;

let slider_children_count = slider.childElementCount;
let append_zero = slider.childElementCount < 10 ? true : false;

let slider_counter = document.getElementById("slider-counter");

let image = document.getElementsByClassName("inspired-image")[0];

if (append_zero) {
    slider_counter.innerHTML =
        "0" + (slider_position + 1) + " / 0" + slider_children_count;
} else {
    slider_counter.innerHTML = slider_position + 1 + slider_children_count;
}

const slide = (value) => {
    if (slider_position + value < 0) return;
    if (slider_position + value >= slider_children_count) return;
    slider_position += value;
    let margin_dimension = window.getComputedStyle(image).marginRight;
    slider.style =
        "transform: " +
        "translateX(calc(" +
        -slider_position +
        " * " +
        "calc(50rem" +
        " + " +
        margin_dimension +
        ")))";
    if (append_zero) {
        slider_counter.innerHTML =
            "0" + (slider_position + 1) + " / 0" + slider_children_count;
    } else {
        slider_counter.innerHTML =
            slider_position + 1 + " / " + slider_children_count;
    }
};

document.getElementById("slide-next").onclick = () => {
    slide(1);
};
document.getElementById("slide-previous").onclick = () => {
    slide(-1);
};
