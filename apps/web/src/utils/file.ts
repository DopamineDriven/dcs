export function getBase64ValueFileOrBlob(
  file: File | Blob,
  callback: (fileBase64Value: string) => void
) {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => {
    callback(reader.result as string);
  };
}

export const DEFAULT_FILE_STATE = Array.of<File | null>();

export function fileSizeValidator<const T extends number>(size: T) {
  // convert to MB in binary form: 2**10 bytes = 1024 bytes = 1 GB;
  // 2**20 bytes = 1024**2 = 1MB * 900 = 900MB
  // 900 MB Max; size < 1 ? true : false;
  return size / 1024 / 1024 / 900 < 1;
}

export function fileTypeValidator<const T extends string>(type: T) {
  return /(application\/(vnd\.openxmlformats-officedocument\.wordprocessingml\.document|vnd\.oasis\.opendocument\.text|vnd\.rar|rtf|gzip|x-gzip|x-tar|x-bzip|x-bzip2|x-freearc|x-abiword|zip|x-zip-compressed|x-7z-compressed|msword|pdf|x-pdf|illustrator))/g.test(
    type
  );
}
