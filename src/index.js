import $ from "jquery";
import { Room, Wall, Maze } from "./maze/index.js";

$(document).ready(() => {
  const maze = new Maze(12, 12);
  const rooms = maze.make();
  const html = [];
  rooms.forEach((room) => {
    html.push(room.html());
  });
  const a = html.join("");
  $("#maze").append(a);

  $(".room").on("click", function() {
    const $room = $(this);
    $room.addClass("selected-room");
  });
});
