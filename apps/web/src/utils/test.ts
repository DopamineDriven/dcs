import { Fs } from "@d0paminedriven/fs";
import { toHtml } from "./to-html";
import json from "./write/mutation-data.json";

const service = new Fs(process.cwd());

// function downloadPdf(base64Doc: string, docName: string) {
//   const downloadLink = document.createElement("a");
//   downloadLink.href = base64Doc;
//   downloadLink.download = docName;
//   downloadLink.click();
// }
// prettier-ignore

service.withWs(
  "src/utils/__write__/resume-2024.html",
  toHtml({
    file: json.file,
    fileName: "Resume-2024.pdf"
  })
);
