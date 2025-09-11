import { animate, stagger, text } from "animejs";

const { chars } = text.split("h2", { words: false, chars: true });

animate(chars, {
  // Property keyframes
  y: [
    { to: "-2.75rem", ease: "outExpo", duration: 600 },
    { to: 0, ease: "outBounce", duration: 800, delay: 100 },
  ],
  // Property specific parameters
  rotate: {
    from: "-1turn",
    delay: 0,
  },
  delay: stagger(50),
  ease: "inOutCirc",
  loopDelay: 1000,
  loop: true,
});
