# UJ-May-ASSESSMENT

Create a CV project using HTML, CSS, and Handlebars. Ensure it's responsive on smaller screens and deploy it on GitHub Pages. Commit your work regularly. .

# Setup

* Clone and fork this repo and complte the above tasks.

* Fork this repo into your GitHub repo and then clone it into your projects folder.
```
git clone <your_github_url_here>
```

* Run this command to install dependencies 
```
npm install 
```

## GitHub

* Please be sure to regularly commit to git locally

# Deployment

Add your project to git and deploy to GitHub Pages. 

Push your code to a `main` branch.

Deploying a ViteJS driven project to GitHub pages use GitHub actions - the instructions are below.

## Build using ViteJs


Running the `npm run build` command will generate versions of the HTML files merged with the `json` files. It will contain no `{{}}` tags.

Try it out and check the generated html files.

## Deploy using GitHub Actions

Deploying a ViteJS app to GitHub pages is marginally more tricky than creating a `gh-pages` branch and pushing it to GitHub. You can find the instructions online [here](https://vitejs.dev/guide/static-deploy.html#github-pages), but you can follow the instructions below.

Once your project is pushed to GitHub there are a few things you need to do.

Set the `base` of your app in your ViteJS setup.

Add this: 

```js
export default {
    base : '/responsive_cv/',   // <-- add this
    plugins: [handlebars({
        context : data   // add this
    })],
};
```


## Create deployment file

Next create a file deployment file. 

Once your code is pushed to GitHub follows th instructions below. To create a `deploy.yml` file.

The instructions:

* Click on the Actions tab
* Click on the `Settings` tab
* Then click on the `Pages` link on the left
* This will open a `GitHub Pages` page
* Under `Build and deployment` under `Source` select `GitHub Actions`
* Next to `Use a suggested workflow,` click on `create your own` 
* as the file name enter `deploy.yml`
* then copy below into the text box
* click on `Commit changes` - also on the following popup
* if all goes well your app will be deployed at `http://yourGitHubUsername.github.io/responsive_cv`

After you have done the above be sure to pull the latest changes into your local git repo. Using this command:

```bash
git pull origin main
```

Code to copy into `deploy.yml`

```yml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ['main']

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          # Upload dist repository
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1

```

 


## Work submission

Submit your GitHub Pages link for feedback by the end of the day

## Planning

Spend the first 30 minutes of your assessment on planning. Read through all the different scenarios & create a Kanban Board with the tasks you think you need to complete. Email a link to your Kanban board to `uj-mentors@projectcodex.co`. 

# Ask help

Ask if you need help or clarify.



