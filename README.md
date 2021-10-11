![KEVIN-Logo-Estudo-Final-2-1-removebg-preview](https://user-images.githubusercontent.com/43002117/136221485-98600c51-45a5-4dc1-8ef7-3d62bede0d73.png)

Production link: [www.kevbeltrao.com.br](https://www.kevbeltrao.com.br/).\
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technologies
* React
* Typescript
* AntDesign
* Styled Components
* Yarn
* Craco

## Craco

As we're using AntDesign, we need to modify some vars to specify styles.\
Because of that some changes were made to the start, test and build scripts\
"start": "~~react-scripts~~ craco start",
"build": "~~react-scripts~~ craco build",
"test": "~~react-scripts~~ craco test",

## How to run
### Clone the project
```sh
git clone https://github.com/kevbeltrao/landing-page.git
```
```sh
cd landing-page
```
### Install the dependencies
```sh
yarn
```

### Add the .env file with the following info:
```env
REACT_APP_USER_ID=xxxxxxxxx
REACT_APP_SERVICE_ID=xxxxxxxxx
REACT_APP_TEMPLATE_ID=xxxxxxxxx
```

### Run the project
```sh
yarn start
```

## Contribute
### Branches
Pull requests should be composed of type and branch name.\
Branch name must be spaced by "-".\
The types might be:
- feature - For new features
- fix - For adjustments (both bugfixes and hotfixes)
- release - For release branches

Example: feature/navbar-mobile

### Commits
Commits should be structured as <type>(<branch-name>): <commit description>\
Example: feature(navbar-mobile): adding smooth scroll

### Pull requests
Pull requests must have good descriptions.\
The three main topics of the description are:
- What I did
- How I did
- How to test

Of course it's not mandatory, sometimes it won't make sense to add some of these.\
But add descriptive PRs with pictures and referencing code when needed.

## Deployment
The master branch is synched with AWS Amplify.\
Amplify builds the updates on merge and updates the production version.
