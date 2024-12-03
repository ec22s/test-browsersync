# test-browsersync
A simple test for Node.js watch with BrowserSync.

### Ref.
- https://goodpatch-tech.hatenablog.com/entry/2022/10/24/103000

### Environment
- Node.js v23.3.0
- npm v10.9.1
- [Node.js server without a framework](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework)


### Install
```sh
npm install
```

### Start
```sh
npm run start
# Index page will be opened automatically in default browser.
```

### Test
- Edit `public/index.html` and index page will be reloaded.
- Open `sub/test.html` in browser, edit it and page will be reloaded.

### Limitation
- Editing CSS file (if present) doesn't reload browser.

  https://github.com/BrowserSync/browser-sync/issues/1640


