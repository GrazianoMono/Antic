let carousel = document.getElementById("rooms-carousel");
let carousel_position = 0;

let carousel_children_count = carousel.childElementCount;
let append_zero = carousel.childElementCount < 10 ? true : false;

let carousel_counter = document.getElementById("carousel-counter");

let rooms = document.getElementsByClassName("room");

if (append_zero) {
    carousel_counter.innerHTML =
        "0" + (carousel_position + 1) + " / 0" + carousel_children_count;
} else {
    carousel_counter.innerHTML =
        carousel_position + 1 + carousel_children_count;
}

const carousel_slide = (value) => {
    if (carousel_position + value < 0) return;
    if (carousel_position + value >= carousel_children_count) return;
    carousel_position += value;
    let room_width = window.getComputedStyle(rooms[0]).width;
    for (const room of rooms) {
        room.style =
            "transform: " +
            "translateX(calc(" +
            -carousel_position +
            " * " +
            room_width +
            "))";
    }
    if (append_zero) {
        carousel_counter.innerHTML =
            "0" + (carousel_position + 1) + " / 0" + carousel_children_count;
    } else {
        carousel_counter.innerHTML =
            carousel_position + 1 + carousel_children_count;
    }
};

document.getElementById("carousel-next").onclick = () => {
    carousel_slide(1);
};
document.getElementById("carousel-previous").onclick = () => {
    carousel_slide(-1);
};
