import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const here = dirname(fileURLToPath(import.meta.url));
const schema = JSON.parse(await readFile(join(here, "../../schemas/post.schema.json"), "utf8"));
const ajv = new Ajv2020({ allErrors: true, strict: true });
addFormats(ajv);
const validate = ajv.compile(schema);

export function validatePostData(data) {
  const valid = validate(data);
  return {
    valid,
    errors: valid
      ? []
      : (validate.errors ?? []).map((error) => `${error.instancePath || "/"} ${error.message}`),
  };
}
