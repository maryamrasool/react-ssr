import express from "express";
import React from "react";
import { renderToNodeStream } from "react-dom/server";
import App from "./App";

const app = express();
app.use("/static", express.static("build"));

app.use("/", async (req, res) => {
  res.write(
    `<!DOCTYPE html><html><head><meta charset="utf-8"/></head><body><div id="app">`
  );

  const htmlStream = renderToNodeStream(<App />);

  htmlStream.pipe(
    res,
    { end: false }
  );
  htmlStream.on("end", () => {
    res.write(`</div></body><script src="/static/Client.js"></script></html>`);
    res.end();
  });
});

app.listen(3000, "0.0.0.0", () => {
  console.log(`${new Date()} Server listening on port 3000`);
});
