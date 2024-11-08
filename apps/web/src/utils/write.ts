import { formatHelper } from "./format-helper";
import { FsService } from "./fs";
import { ExecuteResumeSubmissionMutation } from "@/mutations/resume-submission";

const fsHandler = new FsService(process.cwd());

(async () => {
  const data = await ExecuteResumeSubmissionMutation({
    body: "THIS IS A TEST FROM THE CODE EDITOR",
    email: "andrew.simpson.ross@gmail.com",
    firstName: "Andrew",
    lastName: "Ross",
    ip: "73.209.222.239",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0",
    phone: "+15635809987",
    file: "https://ypuktmwmnilhirdf.public.blob.vercel-storage.com/iY4ku51-0wz0ptpsebZGV7DNGQKLTgJHQ9FWSc.pdf"
  });

  const s = JSON.stringify(data, null, 2);
  const argv3 = process.argv[3] ?? "no-arg";
  if (data) {
    const templated = `export const ${formatHelper(argv3).split(" ").join("")} = ${s};`;
    fsHandler.withWs({
      data: templated,
      cwd: process.cwd(),
      path: `src/utils/__write__/${process.argv[3]}.ts`
    });
    return data;
  } else return console.log("there was an error");
})().catch(err => err);
