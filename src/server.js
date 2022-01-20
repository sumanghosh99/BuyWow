const app = require("./index");

const connect = require("./configs/db");

app.listen(3000, async () => {
  try {
    await connect();
    console.log("listen to the port 3000");
  } catch (error) {
    console.log({ error: error.message });
  }
});
