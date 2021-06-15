import { v4 as uuidv4 } from "uuid";

// Information was taken from Chillhop.com, and inspecting the elements via Chrome. Music is copyright free.

function chillHop() {
  return [
    {
      name: "Cruisin",
      artist: "Cloudchord, G Mills",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/8404541e3b694d16fd79433b142ed910f36764dd.jpg",
      id: uuidv4(),
      active: false,
      color: ["#FFB1A7","#FF184B"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8200",
    },
    {
      name: "Beaver Creek",
      artist: "Aso, Middle School, Aviino",
      cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d.jpg",
      id: uuidv4(),
      active: false,
      color: ["#FCC376","#289490"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10076",
    },
    {
      name: "Higher",
      artist: "Misha, Jussi Halme",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7.jpg",
      id: uuidv4(),
      active: true,
      color: ["#E87274", "#2D385A"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15088",
    },
    {
      name: "Arcade",
      artist: "Yasper",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/cd050898ca06fdfdb7fcf2313304d952c6dd8e41.jpg",
      id: uuidv4(),
      active: false,
      color: ["#8554B5","#D88D6E"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7987",
    },
    {
      name: "Going Back",
      artist: "Swørn",
      cover: "https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9.jpg",
      id: uuidv4(),
      active: false,
      color: ["##26444C","#29375E"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10310",
    },
    {
      name: "Waterfalls",
      artist: "G Mills, Molly McPhaul",
      cover: "https://chillhop.com/wp-content/uploads/2021/03/4f968562d372586b08590bf29066c638ee8fda64.jpg",
      id: uuidv4(),
      active: false,
      color: ["#892D42","#FEA568"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16195",
    },
    {
      name: "Rest Until Dark",
      artist: "Sleepy Fish",
      cover: "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd.jpg",
      id: uuidv4(),
      active: false,
      color: ["#3090AE","#2A3E5D"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10015",
    },
  ];
}

export default chillHop;
