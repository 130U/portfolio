import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";

const here = dirname(fileURLToPath(import.meta.url));
const schema = JSON.parse(await readFile(join(here, "../../schemas/content-sequence.schema.json"), "utf8"));
const ajv = new Ajv2020({ allErrors: true, strict: true });
const validate = ajv.compile(schema);

export function validateSequenceData(data) {
  const valid = validate(data);
  return {
    valid,
    errors: valid
      ? []
      : (validate.errors ?? []).map((error) => `${error.instancePath || "/"} ${error.message}`),
  };
}
