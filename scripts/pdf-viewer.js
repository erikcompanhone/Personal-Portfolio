// URL of your PDF
var pdfUrl = 'files/RESUME - updated NOV 2024.pdf';  // Replace with your PDF path

// Initialize the PDF.js library
var pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

// Fetch the PDF
var loadingTask = pdfjsLib.getDocument(pdfUrl);
loadingTask.promise.then(function(pdf) {
  console.log('PDF loaded');

  // Fetch the first page
  pdf.getPage(1).then(function(page) {
    console.log('Page loaded');

    var scale = 1.5;  // Set scale for better readability
    var viewport = page.getViewport({ scale: scale });

    // Prepare canvas using PDF page dimensions
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Append the canvas to the PDF viewer div
    var viewer = document.getElementById('pdf-viewer');
    viewer.appendChild(canvas);

    // Render the PDF page into the canvas context
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext).promise.then(function() {
      console.log('Page rendered');
    });
  });
}, function(reason) {
  // PDF loading error
  console.error(reason);
});
