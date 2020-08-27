const fs = require("fs");
const path = require("path");
const publicApi = require("../public-api.json");

// Create each module
Object.keys(publicApi).forEach((key) => {
  const value = publicApi[key];
  const typingsFile = value.split("/").pop().replace(".ts", ".d.ts");
  const packageJSONContent = {
    name: `@appetize/ui/${key}`,
    main: `../bundles/${key}.umd.js`,
    typings: `./${typingsFile}`,
  };

  fs.writeFileSync(
    path.join(__dirname, `../ui/${key}/package.json`),
    JSON.stringify(packageJSONContent, null, 2)
  );
});
