var pdfUrl = 'files/RESUME - updated NOV 2024.pdf';

var pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

var loadingTask = pdfjsLib.getDocument(pdfUrl);
loadingTask.promise.then(function(pdf) {
  console.log('PDF loaded');

  pdf.getPage(1).then(function(page) {
    console.log('Page loaded');

    var scale = 1.5;
    var viewport = page.getViewport({ scale: scale });

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    var viewer = document.getElementById('pdf-viewer');
    viewer.appendChild(canvas);

    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext).promise.then(function() {
      console.log('Page rendered');
    });
  });
}, function(reason) {
  console.error(reason);
});
