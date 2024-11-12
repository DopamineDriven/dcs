## [Drisdell Consulting Services Inc](https://drisdell.com)

---

## About this repo

- Uses a Pnpm Workspace + Turborepo 💙
- The website is housed in the `/apps/web` directory
- Reusable tooling configurations (eslint, prettier, typescript, etc) are housed in the `/tooling/*` subdirectories
- The `/app/web` repo uses nextjs, typescript, tailwindcss, headless wordpress via WpGraphQL, and the beta release of `@vercel/blob` to handle file storage to avoid configuring file uploads with a headless graphql setup
- The project is deployed on a vercel pro account
- The wordpress instance is hosted on AWS with the Cloudfront CDN wrapping it
- Email notifications are automatically sent on form submission events via an aws ses address tied to the headless wordpress backend
- Plugins used include Jetpack, Askismet, WPMailer Pro, WPGraphQL and derivatives, GravityForms, and Yoast
- Gravity Forms isn't embedded or configured within the forms of this repo; instead, to save time and make life easier, I rolled my own forms and took advantage of `server actions` to submit graphql mutations via returned form data. This satisfies the variables that gravity forms is looking for on the wordpress side of things when a mutation is sent and also satisfies project requirements of supporting file uploads (resume submissions) on the stakeholder side of things. The automated email sent to the stakeholders on resume form submission events contains a `file` field with a url that points to the file uploaded by the applicant in question (the file being stored on Vercel). This is all thanks to the `@vercel/blob` package.
