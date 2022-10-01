import { Hono } from "hono";

const app = new Hono();

const allowedMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

app.get("/:method", async (ctx) => {
  const method = ctx.req.param("method").toUpperCase();
  if (!allowedMethods.includes(method)) {
    return ctx.text("Method not supported", 400);
  }

  const suppliedUrl = ctx.req.query("url");
  let url: URL;
  if (suppliedUrl) {
    try {
      url = new URL(suppliedUrl);
    } catch {
      return ctx.text("Invalid URL", 400);
    }
  } else {
    return ctx.text("Missing URL", 400);
  }

  const suppliedHeaders = ctx.req.query("headers");
  let headers: Record<string, string> = {};
  if (suppliedHeaders) {
    try {
      headers = JSON.parse(suppliedHeaders);
    } catch {
      return ctx.text("Invalid headers", 400);
    }
  }

  const body = ctx.req.query("body");

  try {
    const response = await fetch(url.toString(), {
      method,
      headers,
      body,
    });
    return response;
  } catch (err) {
    return ctx.text(err.message, 500);
  }
});

app.all("*", (ctx) =>
  ctx.text(
    "Thanks for dropping by! Visit https://github.com/plibither8/toget for more info ;)"
  )
);

export default app;
