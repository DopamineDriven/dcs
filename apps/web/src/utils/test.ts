import { FsService } from "./fs";
import json from "./write/mutation-data.json";

const service = new FsService(process.cwd());

// function downloadPdf(base64Doc: string, docName: string) {
//   const downloadLink = document.createElement("a");
//   downloadLink.href = base64Doc;
//   downloadLink.download = docName;
//   downloadLink.click();
// }
// prettier-ignore
const html = ({doc, docName}:{doc: string; docName: string;}) => `
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <script>
      function DownloadDoc() {
        var downloadLink = document.createElement("a");
        downloadLink.href = "${doc}";
        downloadLink.download = "${docName}";
        downloadLink.click();
      }
    </script>
    <button onClick="DownloadDoc()">
      Download Resume
    </button>
  </body>
</html>
`;

service.withWs({
  data: html({doc: json.file, docName: "Resume-2024.pdf"}),
  path: "src/utils/__write__/resume-2024.html",
  cwd: process.cwd()
});
