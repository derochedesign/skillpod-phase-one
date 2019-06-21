# Skillpod Prototype Application

The following guide should be used for testing and deployment from the CLI (command line interface).


## Environment Dependencies (Pre-Deployment)

### Node JS
The following instructions assumes Node (which comes packaged with `npm`) has been installed globally and is available at the command line. To install Node, use one of the two options: 
  - **Web Download & Install**: Download and install from [Node's official website](https://nodejs.org/en/)
  - **Command Line Interface**: Install [Homebrew](https://brew.sh/) using `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` then run `brew install node`.

### Package Manager
It's recommended that [**NPM**](https://www.npmjs.com/) or [**Yarn**](https://yarnpkg.com/en/) (can be installed using [these instructions](https://yarnpkg.com/en/docs/install)) be used from the CLI to manage dependancies, test and build.

### Netlify
To deploy the project to [Netlify](https://www.netlify.com/) for testing and demonstration, install `netlify` at the CLI using `npm install netlify-cli -g`. An account for Skillpod has been created for Netlify, with the `siteId` stored in `.netlify/state.json` for easy CLI deployment. When a new account is created, update the `sideId`. The file `netlify.toml` will contain the build settings.


## Build and Deploy

### Packages

1. Update your package manager of choice:
   * **NPM**: `npm install npm@latest -g`
   * **YARN**: `yarn policies set-version`
2. From the project directory, install module dependancies (listed in `package.json` and `lock` files):
   * **NPM**: `npm install`
   * **YARN**: `yarn`

### Steps: Testing, Building, Deploying

1. `npm start` or `yarn start` will test files on a [local server]((http://localhost:3000))
2. `npm run build` or `yarn build` to create a deployment build to project subfolder `/build`
3. `netlify deploy` deplpoys test build to netlify server (specified in `.netlify` folder)
   - Read more about Netlify deployment here: <https://www.netlify.com/docs/cli/#manual-deploys>
   - You should be prompted to login here. You may also use `netlify login` prior to this step to login from the CLI
4. `netlify deploy --prod` deploys to the Netlify production server. The current Netlify account [can be found here](https://skillpod.netlify.com)


## Other Notes

- Steps to help migrate from `npm` to `yarn`: <https://yarnpkg.com/lang/en/docs/migrating-from-npm/>
- This project template was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)