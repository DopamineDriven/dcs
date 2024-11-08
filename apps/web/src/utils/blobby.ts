

export function b64toBlob(b64Data: string) {
  const sliceSize = 512;
  // eslint-disable-next-line
  const typeMatch = b64Data.match(/data:(.*);/);
  const type = typeMatch?.[1];
  console.log(type ?? "");
  if (!typeMatch) {
    throw new Error(`${b64Data} is not a valid data Url`);
  }
  const byteCharacters = Buffer.from(b64Data, "base64").toString("utf-8");
  const byteArrays = Array.of<Uint8Array>();

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = Array.of<number>();
    byteNumbers.push(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: type });
  return blob;
}
