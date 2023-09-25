const { JSDOM } = require('jsdom');
const assert = require('assert');
const html = `
<!DOCTYPE html>
<html>
<head>
  <title>HTML Paragraph Tag Test</title>
</head>
<body>
  <p id="test-paragraph">This is a sample paragraph.</p>
</body>
</html>
`;
const dom = new JSDOM(html);
global.document = dom.window.document;
describe('HTML Paragraph Tag Test', () => {
  it('should have the correct initial text', () => {
    const paragraph = document.getElementById('test-paragraph');
    assert.strictEqual(paragraph.textContent, 'This is a sample paragraph.');
  });
});