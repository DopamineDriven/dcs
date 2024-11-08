import { QueryChildPageBySlug } from "@/queries/page-by-uri";
import { formatHelper } from "./format-helper";
import { FsService } from "./fs";

const fsHandler = new FsService(process.cwd());

(async () => {
  const data = await QueryChildPageBySlug("About_Us", "our-world");

  const s = JSON.stringify(data, null, 2);
  const argv3 = process.argv[3] ?? "no-arg";
  if (data) {
    const templated = `export const ${formatHelper(argv3).split(" ").join("")} = ${s};`;
    fsHandler.withWs({
      data: templated,
      cwd: process.cwd(),
      path: `src/utils/__write__/qr/${process.argv[3]}.ts`
    });
    return data;
  } else return console.log("there was an error");
})().catch(err => err);
