# vite-plugin-mjml

A Vite plugin that allows you to import MJML files and automatically compiles them to HTML.

## Installation

```bash
npm install @edde746/vite-plugin-mjml mjml
```

## Usage

Add the plugin to your `vite.config.js`:

```js
import { defineConfig } from 'vite';
import { mjmlPlugin } from '@edde746/vite-plugin-mjml';

export default defineConfig({
  plugins: [mjmlPlugin()]
});
```

Then you can import MJML files directly in your JavaScript/TypeScript code:

```js
import emailHtml from './email.mjml';

// emailHtml contains the compiled HTML string
document.body.innerHTML = emailHtml;
```

## Example

Check the `example/` directory for a complete working example.
