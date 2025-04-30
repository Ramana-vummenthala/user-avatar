
const fs = require("fs-extra");
const concat = require("concat");

build = async () => {
  const files = [
    "./dist/user-avatar/runtime.js",
    "./dist/user-avatar/polyfills.js",
    "./dist/user-avatar/main.js",
  ];

  await fs.ensureDir("user-avatar");
  await concat(files, "user-avatar/user-avatar.js");
};
build();
