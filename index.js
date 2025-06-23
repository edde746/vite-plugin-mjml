import mjml from 'mjml';
import { readFileSync } from 'fs';

export function mjmlPlugin() {
  return {
    name: 'mjml',
    load(id) {
      if (id.endsWith('.mjml')) {
        const mjmlContent = readFileSync(id, 'utf-8');
        const { html, errors } = mjml(mjmlContent);

        if (errors && errors.length > 0)
          console.warn('MJML compilation warnings:', errors);

        return `export default ${JSON.stringify(html)};`;
      }
    }
  };
}