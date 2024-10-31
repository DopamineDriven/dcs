import { formatHelper } from "./format-helper";
import { FsService } from "./fs";
import { GetConsultantsPaths } from "@/queries/consultants";

const fsHandler = new FsService(process.cwd());
(async () => {
  const data = await GetConsultantsPaths();

  const s = JSON.stringify(data, null, 2);
  const argv3 = process.argv[3] ?? "";
  if (data) {
    const templated = `export const ${formatHelper(argv3).split(" ").join("")} = ${s};`;
    fsHandler.withWs({
      data: templated,
      cwd: process.cwd(),
      path: `src/utils/${process.argv[3]}.ts`
    });
    return data;
  } else return console.log("there was an error");
})().catch(err => err);
