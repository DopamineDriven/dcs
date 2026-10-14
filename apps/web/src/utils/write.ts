import { Fs } from "@d0paminedriven/fs";
import { QueryChildPageBySlug } from "@/queries/page-by-uri";
import { formatHelper } from "@/utils/format-helper";

const fs = new Fs(process.cwd());

(async () => {
  const data = await QueryChildPageBySlug("About_Us", "our-world");
  const s = JSON.stringify(data, null, 2);
  const argv3 = process.argv[3] ?? "no-arg";
  if (data) {
    const templated = `export const ${formatHelper(argv3).split(" ").join("")} = ${s};`;
    fs.withWs(`src/utils/__write__/qr/${process.argv[3]}.ts`, templated);
    return data;
  } else return console.log("there was an error");
})().catch(err => console.error(err));
