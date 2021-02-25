// create subprocess
const p = Deno.run({
  cmd: ["ls", "./"],
  stdout: "inherit",
  stderr: "inherit",
});

// await its completion
const res = await p.status();
console.log(res);
