import { CreateDatabaseArgs } from "./types.js";

export const createDatabaseTool = {
  name: "notion_create_database",
  description: "Create a database in Notion",
  inputSchema: {
    type: "object",
    properties: {
      parent: {
        type: "object",
        description: "Parent object of the database",
      },
      title: {
        type: "array",
        description:
          "Title of database as it appears in Notion. An array of rich text objects.",
        items: {
          type: "object",
          description: "A rich text object.",
        },
      },
      properties: {
        type: "object",
        description:
          "Property schema of database. The keys are the names of properties as they appear in Notion and the values are property schema objects.",
      },
    },
    required: ["parent", "properties", "title"],
  },
};
