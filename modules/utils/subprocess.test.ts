const command = new Deno.Command(Deno.execPath(), {
  args: [
    "eval",
    "console.log('hello'); console.error('world')",
  ],
});
const { code, stdout, stderr } = await command.output();
console.assert(code === 0);
console.assert("hello\n" === new TextDecoder().decode(stdout));
console.assert("world\n" === new TextDecoder().decode(stderr));
