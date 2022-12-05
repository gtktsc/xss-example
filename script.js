document.body.addEventListener(
  "mousemove",
  (e) =>
    (document.body.style.rotate = `${
      (e.clientY / document.body.clientWidth) * 360
    }deg`)
);
