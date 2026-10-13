import * as dotenv from "dotenv";
import { ExecuteContactFormSubmissionMutation } from "@/mutations/contact-submission";

dotenv.config({ quiet: true });

const ua =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:159.0) Gecko/20100101 Firefox/159.0";

(async () => {
  return await
    ExecuteContactFormSubmissionMutation({
      body: "this is a test.",
      email: "andrew.simpson.ross@gmail.com",
      firstName: "Andrew",
      lastName: "Ross",
      ip: "73.121.141.232",
      subject: "Test email",
      userAgent: ua
    })

})()
  .then(d => {
    console.log(d.data);
  })
  .catch(err => console.error(err));
