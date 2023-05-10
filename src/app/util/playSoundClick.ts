const soundPath = "/clicksound.mp3";

export const playSound = () => {
  const sound = new Audio(soundPath);
  sound.play();
};
