import { YamlLoader } from "https://deno.land/x/yaml_loader@v0.1.0/mod.ts";
import { resolve } from "../std/mod.ts";

const yamlLoader = new YamlLoader();

const parsedYamlFile = await yamlLoader.parseFile(
  resolve(Deno.cwd(), "assets/config.yml"),
);

console.log(parsedYamlFile);
