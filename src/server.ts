import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

async function ConnectionString() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`Database Connected Successfully 🎊 `);

    app.listen(config.port, () => {
      console.log(`Book Catalog listening on http://localhost:${config.port}`);
    });
  } catch (err) {
    console.log("Failed to connect with database", err);
  }
}

ConnectionString();
