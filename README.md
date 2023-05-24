# CloudFlare Worker Examples

- https://workers.cloudflare.com/


## Local Environment Setup
```
brew upgrade nodejs

# https://developers.cloudflare.com/workers/get-started/guide/
npm create cloudflare
npm install -g wrangler
wrangler login # Open browser authorization
wrangler init # now deprecated, will run new command
```

### `wrangler login` output
```
$ wrangler login
 ⛅️ wrangler 3.0.1
------------------
Attempting to login via OAuth...
Opening a link in your default browser: https://dash.cloudflare.com/oauth2/auth?response_type=code&client_id=54d11594-84e4-41aa-b438-e81b8fa78ee7&redirect_uri=http%3A%2F%2Flocalhost%3A8976%2Foauth%2Fcallback&scope=account%3Aread%20user%3Aread%20workers%3Awrite%20workers_kv%3Awrite%20workers_routes%3Awrite%20workers_scripts%3Awrite%20workers_tail%3Aread%20d1%3Awrite%20pages%3Awrite%20zone%3Aread%20ssl_certs%3Awrite%20constellation%3Awrite%20offline_access&state=seSqsotAJGEhUQeSDiuee3vUSFkKpZBG&code_challenge=1-bcs7U3sZVqL0uwaVloMRUbydsTfolrs4y0bbDNPcA&code_challenge_method=S256
Successfully logged in.
✔ Would you like to help improve Wrangler by sending usage metrics to Cloudflare? … yes
Your choice has been saved in the following file: ../../Library/Preferences/.wrangler/metrics.json.

  You can override the user level setting for a project in `wrangler.toml`:

   - to disable sending metrics for a project: `send_metrics = false`
   - to enable sending metrics for a project: `send_metrics = true`
```


### `wrangler init` Typescript output

```
$ wrangler init
 ⛅️ wrangler 3.0.1
------------------
Using npm as package manager.
▲ [WARNING] The `init` command is no longer supported. Please use `npm create cloudflare@2` instead.

  The `init` command will be removed in a future version.


Running `npm create cloudflare@2`...
Need to install the following packages:
  create-cloudflare@2.0.8
Ok to proceed? (y) y

using create-cloudflare version 2.0.8

╭ Create an application with Cloudflare Step 1 of 3
│
├ Where do you want to create your application?
│ dir misty-meadow-c68c
│
├ What type of application do you want to create?
│ type "Hello World" script
│
├ Do you want to use TypeScript?
│ typescript yes
│
├ Copying files from "simple" template
│
╰ Application created

╭ Installing dependencies Step 2 of 3
│
├ Installing dependencies
│ installed via `npm install`
│
╰ Dependencies Installed

╭ Deploy with Cloudflare Step 3 of 3
│
├ Do you want to deploy your application?
│ yes deploying via `npm run deploy`
│
├ Logging into Cloudflare checking authentication status
│ logged in
│
├ Selecting Cloudflare account retrieving accounts
│ account Ronald@doit-intl.com's Account
│
├ Deploying your application
│ deployed via `npm run deploy`
│
├  SUCCESS  View your deployed application at https://misty-meadow-c68c.********.workers.dev
│
│ Run the development server npm run start
│ Deploy your application npm run deploy
│ Read the documentation https://developers.cloudflare.com/workers
│ Stuck? Join us at https://discord.gg/cloudflaredev
│
├ Waiting for DNS to propagate
│ DNS propagation complete.
│
├ Waiting for deployment to become available
│ deployment is ready at: https://misty-meadow-c68c.********.workers.dev
│
├ Opening browser
│
╰ See you again soon!
```

### `wrangler init` Javascript output
```
$ wrangler init
 ⛅️ wrangler 3.0.1
------------------
Using npm as package manager.
▲ [WARNING] The `init` command is no longer supported. Please use `npm create cloudflare@2` instead.

  The `init` command will be removed in a future version.


Running `npm create cloudflare@2`...

using create-cloudflare version 2.0.8

╭ Create an application with Cloudflare Step 1 of 3
│
├ Where do you want to create your application?
│ dir black-tree-06e4
│
├ What type of application do you want to create?
│ type Website or web app
│
╰ Which development framework do you want to use?
--○ Angular
--○ Astro
--○ Docusaurus
--○ Gatsby
--○ Hono
--○ Next
--○ Nuxt
--○ Qwik
--○ React
--○ Remix
--○ Solid
--○ Svelte
--● Vue

╰ Continue with Vue via `npx create-vue@3.6.4 black-tree-06e4`

Need to install the following packages:
  create-vue@3.6.4
Ok to proceed? (y) y

Vue.js - The Progressive JavaScript Framework

✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … No / Yes

Scaffolding project in /Users/********/git/cf-worker-examples/black-tree-06e4...

Done. Now run:

  cd black-tree-06e4
  npm install
  npm run dev

╭ Configuring your application for Cloudflare Step 2 of 3
│
┴ Installing wrangler A command line tool for building Cloudflare Workers ...

│ installed via `npm install wrangler --save-dev`
│
├ Adding command scripts for development and deployment
│ added commands to `package.json`
│
╰ Application configured

╭ Deploy with Cloudflare Step 3 of 3
│
├ Do you want to deploy your application?
│ yes deploying via `npm run pages:deploy`
│
├ Logging into Cloudflare checking authentication status
│ logged in
│
├ Selecting Cloudflare account retrieving accounts
│ account ***************** Account
│
├ Creating Pages project
│ created via `npx wrangler pages project create black-tree-06e4 --production-branch main`
│
├ Deploying your application
│ deployed via `npm run pages:deploy`
│
├  SUCCESS  View your deployed application at https://black-tree-06e4.pages.dev
│
│ Run the development server npm run pages:dev
│ Deploy your application npm run pages:deploy
│ Read the documentation https://developers.cloudflare.com/pages
│ Stuck? Join us at https://discord.gg/cloudflaredev
│
┌ Waiting for DNS to propagate (7s) ..
```

This launched to a pages.dev URL, not your own Cloudflare worker account https://black-tree-06e4.pages.dev/


## Manual Example

```
mkdir wordexists
cd wordexists
vi worker.js # generated by chatGPT
wrangler dev
npx wrangler deploy
echo 'name = "wordexists"
main = "worker.js"
compatibility_date = "2023-05-24"' > wrangler.toml
npx wrangler deploy
```

### `wrangler deploy` output
```
$ npx wrangler deploy
 ⛅️ wrangler 3.0.1
------------------
Total Upload: 1.24 KiB / gzip: 0.58 KiB
Uploaded wordexists (0.55 sec)
Published wordexists (0.27 sec)
  https://wordexists.******.workers.dev
Current Deployment ID: f62f30b9-ad6f-471f-883f-da7c34614619
```

## Common Errors

```
$ npx wrangler deploy
 ⛅️ wrangler 3.0.1
------------------

✘ [ERROR] Missing entry-point: The entry-point should be specified via the command line (e.g. `wrangler deploy path/to/script`) or the `main` config field.
```

Solution: Pass the name of the Javascript file.

```
$ npx wrangler deploy worker.js
 ⛅️ wrangler 3.0.1
------------------

✘ [ERROR] A compatibility_date is required when publishing. Add the following to your wrangler.toml file:.

      ```
      compatibility_date = "2023-05-24"
      ```
      Or you could pass it in your terminal as `--compatibility-date 2023-05-24`
  See https://developers.cloudflare.com/workers/platform/compatibility-dates for more information.


If you think this is a bug then please create an issue at https://github.com/cloudflare/workers-sdk/issues/new/choose
```
Solution: Create a `wrangler.toml` file 

## Other Reading
* https://developers.cloudflare.com/workers/wrangler/
* https://blog.cloudflare.com/improved-quick-edit/
* https://code.visualstudio.com/docs/editor/vscode-web
* https://vscode.dev/
