
## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Tests

```sh
npm test
```

### Run minified version

```sh
npm -g install static-server (Optional: if no server installed)
cd {drive}/.../testiubenda/dist
static-server

Or use any other preferred local http server
```

### Unsolved problems:
- Stuck on component test setup. I used to use prev versions of test utils, but the new version has a significant number of changes that I don't have time to properly process right now.

### Design decisions:

- created settings object with all related data.

### Suggested improvements:

- create config for texts
- create custom alert with store
- create basic input components
- flatten server data structure or split main and nested object into two to ease code structure

### How much time it took and what you would have done given more time:

It took ~6 hours combined. With more time I could've properly figured out how newer versions of test utils work and, well, make it actually work.