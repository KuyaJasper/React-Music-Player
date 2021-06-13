import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Higher",
      artist: "Misha, Jussi Halme",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#E87274", "#2D385A"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15088",
    },
  ];
}

export default chillHop;
