import { defineDb, defineTable, column } from "astro:db";

const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  },
});

const Post = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    body: column.text(),
    authorId: column.number({ references: () => Author.columns.id }),
  },
});

const Comment = defineTable({
  columns: {
    authorId: column.number({ references: () => Author.columns.id }),
    postId: column.number({ references: () => Post.columns.id }),
    body: column.text(),
    likes: column.number(),
    published: column.date(),
    metadata: column.json(),
  },
});

export default defineDb({
  tables: {
    Author,
    Post,
    Comment,
  },
});
