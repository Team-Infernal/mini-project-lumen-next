const animateTrailer = (
  event: MouseEvent,
  trailer: HTMLDivElement,
  interacting: boolean
) => {
  if (!trailer) {
    return;
  }
  const x = event.clientX - trailer.offsetWidth / 2;
  const y = event.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 2 : 1})`,
  };

  trailer.animate(keyframes, {
    duration: 400,
    fill: "forwards",
  });
};

export default animateTrailer;
