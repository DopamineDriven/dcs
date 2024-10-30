import { GetAboutUsPaths } from "@/queries/about-us";
import { FsService } from "./fs";

const fsHandler = new FsService(process.cwd());
(async () => {
  const data = await GetAboutUsPaths()

  const s = JSON.stringify(data, null, 2);

  console.log(s);

  if (data) {
    const templated = `export const aboutUsOurWorld = ${s} as const;`;
    fsHandler.withWs({
      data: templated,
      cwd: process.cwd(),
      path: `src/utils/${process.argv[3]}.ts`
    });
    return data;
  } else return console.log("there was an error");
})().catch(err => err);
