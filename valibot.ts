import * as v from "valibot";

const Data = v.object({
  key: v.string(),
});

const data = v.parse(Data, { key: "hello" });
// Execute "Go to Definition" on the `key` property.
// VSCode/Cursor will show four definitions, but all of
// them points to the exact same location (the second line).
console.log(data.key);
