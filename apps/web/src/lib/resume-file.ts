export const maxResumeBytes = 4 * 1024 * 1024;

const resumeFormats = [
  { extension: "pdf", contentType: "application/pdf" },
  { extension: "doc", contentType: "application/msword" },
  {
    extension: "docx",
    contentType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  }
];

export const resumeFileAccept = resumeFormats
  .map(format => `.${format.extension},${format.contentType}`)
  .join(",");

export function resumeFileFormat(file: File) {
  const extension = file.name.split(".").at(-1)?.toLowerCase();
  return resumeFormats.find(format => format.extension === extension);
}

export function resumeFileError(file: File | undefined) {
  if (!file || file.size === 0) return "Please select a non-empty résumé file.";
  if (file.size > maxResumeBytes) return "Your résumé must be 4 MB or smaller.";
  const format = resumeFileFormat(file);
  if (
    !format ||
    (file.type &&
      file.type !== "application/octet-stream" &&
      file.type !== format.contentType)
  ) {
    return "Please upload a PDF, DOC, or DOCX file.";
  }
}
