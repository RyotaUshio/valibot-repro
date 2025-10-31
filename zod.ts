import * as z from "zod";

const Data = z.object({
    key: z.string(),
});

const data = Data.parse({ key: "hello" });
// Execute "Go to Definition" on the `key` property.
// VSCode/Cursor will immediately jump to the second line
// without showing any other options.
console.log(data.key);
