import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Users=pgTable("users",{
    id:serial("id").primaryKey(),
    name:varchar("name").notNull(),
    username:varchar('username').notNull(),
    email:varchar("email").unique(),
    imageURL:varchar("imageURL"),
    subscription:boolean("subscription").notNull().default(false),
})