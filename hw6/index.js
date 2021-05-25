const Koa = require("koa");
const compose = require("koa-compose");
const app = new Koa();

async function random(ctx, next) {
  if ("/" == ctx.path) {
    ctx.body = "<h1>WELCOME TO INDEX</h1>";
  } else {
    await next();
  }
}

async function backwards(ctx, next) {
  if ("/about" == ctx.path) {
    ctx.body = "<h1>WELCOME TO ABOUT</h1>";
  } else {
    await next();
  }
}

async function pi(ctx, next) {
  if ("/contact" == ctx.path) {
    ctx.body = "<h1>WELCOME TO CONTACT</h1>";
  } else {
    await next();
  }
}

const all = compose([random, backwards, pi]);

app.use(all);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}.`);
});
