import email from './email.mjml';

document.getElementById('app').innerHTML = `
  <h1>MJML Plugin Demo</h1>
  <p>The MJML template has been compiled to HTML:</p>
  <pre>
<code>${email.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>
  </pre>
`;