const soundPath = "/clicksound.mp3";
let sound = new Audio(soundPath);

export const playSound = () => {
  sound.play();
};
