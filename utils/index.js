const fs = require("fs");

async function handlerToInvoke(event, context) {
  let count = 0;

  const timer = setInterval(() => {
    console.log(`handlerToInvoke:`, count++, new Date());
  }, 1000);

  new Promise((_, resolve) => {
    setTimeout(() => {
      const filename = `dist/${Date.now()}.txt`;

      fs.writeFileSync(filename, new Date());
      console.log("resolved at: ", new Date());
      clearInterval(timer);
    }, 5000);
  });

  return {
    clientContext: context.clientContext,
    event,
  };
}

module.exports = { handlerToInvoke };
