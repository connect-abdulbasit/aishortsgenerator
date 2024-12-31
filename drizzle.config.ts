// drizzle.config.ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL||"",
  },
});
