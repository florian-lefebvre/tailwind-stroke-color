# Stroke Color - TailwindCSS Plugin

[![npm](https://img.shields.io/npm/v/tailwind-stroke-color.svg?style=flat-square)](https://www.npmjs.com/package/tailwind-stroke-color)
[![npm](https://img.shields.io/npm/dt/tailwind-stroke-color.svg?style=flat-square)](https://www.npmjs.com/package/tailwind-stroke-color)

This plugin generates classes for coloring carets using `srtoke: #;`.

## Installation

Pull it in through npm or yarn:

```bash
npm install tailwind-stroke-color
```

```bash
yarn add tailwind-stroke-color
```

## Usage

Add it to the plugins array of your Tailwind config.

```js
plugins: [
  // Other plugins
  require('tailwind-stroke-color')(),
],
```

For each color in `colors` config of tailwind a `stroke-{color}` class is created, analog to `bg-` and `text-` classes.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).