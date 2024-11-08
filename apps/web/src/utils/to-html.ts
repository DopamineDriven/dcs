export function toHtml({ file, fileName }: { file: string; fileName: string }) {
  // prettier-ignore
  return`<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <script>
      function DownloadDoc() {
        var downloadLink = document.createElement("a");
        downloadLink.href = "${file}";
        downloadLink.download = "${fileName}";
        downloadLink.click();
      }
    </script>
    <button onClick="DownloadDoc()">
      Download Resume
    </button>
  </body>
</html>`
}
