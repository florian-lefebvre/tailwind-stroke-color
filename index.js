module.exports = function ({ addUtilities, e, theme }) {
  const colors = theme("colors");
  const strokeColors = Object.keys(colors).reduce((acc, key) => {
    if (typeof colors[key] === "string") {
      return {
        ...acc,
        [`.stroke-${e(key)}`]: {
          stroke: colors[key],
        },
      };
    }

    const variants = Object.keys(colors[key]);

    return {
      ...acc,
      ...variants.reduce(
        (a, variant) => ({
          ...a,
          [`.stroke-${e(key)}-${variant}`]: {
            stroke: colors[key][variant],
          },
        }),
        {}
      ),
    };
  }, {});
  addUtilities(strokeColors);
};
