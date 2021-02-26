import {
  parse,
  stringify,
} from "https://deno.land/std@0.88.0/encoding/yaml.ts";
import { resolve } from "./mod.ts";

const data = parse(
  Deno.readTextFileSync(resolve(Deno.cwd(), "assets/config.yml")),
);

console.log(data); // => { foo: "bar", baz: [ "qux", "quux" ] }

const yaml = stringify({ foo: "bar", baz: ["qux", "quux"] });
console.log(yaml);
// =>
// foo: bar
// baz:
//   - qux
//   - quux
