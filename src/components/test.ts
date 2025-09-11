import { animate } from "animejs";

animate(".square", { x: "17rem" });
animate("#css-selector-id", { rotate: "1turn" });
animate(".row:nth-child(3) .square", { scale: [1, 0.5, 1] });
