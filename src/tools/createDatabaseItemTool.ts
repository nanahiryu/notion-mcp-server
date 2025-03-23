import { CreateDatabaseItemArgs } from "./types.js";
import { commonIdDescription } from "../utils/common.js";

export const createDatabaseItemTool = {
  name: "notion_create_database_item",
  description: "Create a new item (page) in a Notion database",
  inputSchema: {
    type: "object",
    properties: {
      database_id: {
        type: "string",
        description:
          "The ID of the database to add the item to." + commonIdDescription,
      },
      properties: {
        type: "object",
        description:
          "Properties of the new database item. These should match the database schema.",
      },
    },
    required: ["database_id", "properties"],
  },
};
