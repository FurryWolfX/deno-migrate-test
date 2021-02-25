import { Application, Router } from "https://deno.land/x/oak@v6.5.0/mod.ts";

const books = new Map<string, Record<string, string>>();
books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Arthur",
});

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/book", (context) => {
    context.response.body = Array.from(books.values());
  })
  .get("/book/:id", (context) => {
    if (context.params && context.params.id && books.has(context.params.id)) {
      context.response.body = books.get(context.params.id);
    }
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port, secure }) => {
  const p = secure ? "https://" : "http://";
  const addr = hostname ?? "localhost";
  console.log(
    `Listening on: ${p}${addr}:${port}`,
  );
});

await app.listen({ port: 8000 });
