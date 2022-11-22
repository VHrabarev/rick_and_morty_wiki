# Rick and Morty wiki (in-progress)
Rick and Morty wiki - this is a website where you can find any information about your favorite series "Rick and Morty".

## Technologies
1. React
2. React-redux
3. Reduxjs/toolkit
4. React-router-dom
5. Mui/material

The application is completely written in the React.js library, storage is handled via reduxjs/toolkit.

## Teatures(in-progress)
1. Sign-in/Sing-up

## CI/CD
The project supports full continuous integration and continuous delivery process. Using github action, all basic settings are described in the yaml file at .github/workflows

<pre>
name: Full CI/CD

on: 
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  test:
    name: Test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - name: Install Dependencies
        run: npm install
      - run: npm test
  deploy:
    name: 'Deploy'
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: jsmrcaga/action-netlify-deploy@master
        with:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
          NETLIFY_DEPLOY_MESSAGE: "Prod deploy v${{ github.ref }}"
          NETLIFY_DEPLOY_TO_PROD: true
</pre>

The are two jobs "Test" and "Deploy". The "Test" job runs tests in all files with extension test.jsx/test.js. The "Deploy" job has some settings for deploy build to the server.

<table>
    <thead>
        <tr>
            <th colspan="2">Job "Test"</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>- uses: actions/checkout@v3</td>
            <td>This action checks-out your repository under $GITHUB_WORKSPACE, so your workflow can access it.</td>
        </tr>
        <tr>
          <td>
            <pre>
- uses: actions/setup-node@v3
  with:
    node-version: 16
            </pre>
          </td>
          <td>Configuring authentication for npm</td>
        </tr>
        <tr>
          <td>
            <pre>
- name: Install Dependencies
  run: npm install
- run: npm test
            </pre>
          </td>
          <td>
            Install dependencies and run all tests
          </td>
        </tr>
    </tbody>
</table>