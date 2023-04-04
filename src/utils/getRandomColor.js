export const getRandomColor = () => {
  const style = {};
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * (100 + 1));
  const lightness = Math.floor(Math.random() * (85 - 30) + 30);

  const getContrastColor = lightness => {
    if (lightness > 65) {
      style.color = 'black';
    } else {
      style.color = 'white';
    }
  };
  getContrastColor(lightness);

  style.backgroundColor =
    'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
  return style;
};
