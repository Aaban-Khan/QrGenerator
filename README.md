<h1 align="center">QR Code Generator</h1>

<h2>Overview</h2>
<p>
  The <strong>QR Code Generator</strong> is a simple web application built with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> that lets users generate a QR code from any URL or text input. The QR code is dynamically generated using an external API, making it easy to create custom QR codes on the fly.
</p>

<h2>Functionalities</h2>
<ul>
  <li>
    <strong>User Input:</strong> Users can enter a URL or any text into an input field.
  </li>
  <li>
    <strong>QR Code Generation:</strong> On clicking the "Generate QR Code" button, the application calls the <a href="https://api.qrserver.com" target="_blank">QR Code API</a> to generate a QR code based on the provided data.
  </li>
  <li>
    <strong>Dynamic Image Update:</strong> The generated QR code image is displayed by updating the <code>src</code> attribute of an <code>&lt;img&gt;</code> element.
  </li>
  <li>
    <strong>Input Validation:</strong> If the input is empty when the button is clicked, an alert prompts the user to enter a URL or text.
  </li>
</ul>

<h2>Project Structure</h2>
<p>The project consists of the following files:</p>
<ul>
  <li><strong>index.html:</strong> Contains the structure and layout of the application.</li>
  <li><strong>style.css:</strong> Provides styling for a clean, centered, and responsive UI.</li>
  <li><strong>script.js:</strong> Handles the QR code generation logic and input validation.</li>
</ul>

<h2>How to Use</h2>
<ol>
  <li>
    <strong>Download or Clone the Repository:</strong>
    <pre><code>git clone https://github.com/yourusername/qr-code-generator.git</code></pre>
  </li>
  <li>
    <strong>Open the Application:</strong>
    <p>
      Open the <code>index.html</code> file in your preferred web browser (or use a live server extension for a smoother experience).
    </p>
  </li>
  <li>
    <strong>Generate a QR Code:</strong>
    <p>
      Enter a URL or text into the input field and click the <em>Generate QR Code</em> button. The generated QR code will appear below the button.
    </p>
  </li>
</ol>

<h2>License</h2>
<p>
  This project is open source and available under the <strong>MIT License</strong>.
</p>

<h2>Credits</h2>
<p>
  Developed using HTML, CSS, and JavaScript. QR codes are generated using the <a href="https://api.qrserver.com" target="_blank">QR Code API</a>.
</p>
