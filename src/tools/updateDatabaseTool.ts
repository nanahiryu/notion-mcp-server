import { UpdateDatabaseArgs } from "./types.js";
import { commonIdDescription } from "../utils/common.js";

export const updateDatabaseTool = {
  name: "notion_update_database",
  description: "Update a database in Notion",
  inputSchema: {
    type: "object",
    properties: {
      database_id: {
        type: "string",
        description: "The ID of the database to update." + commonIdDescription,
      },
      title: {
        type: "array",
        description:
          "An array of rich text objects that represents the title of the database that is displayed in the Notion UI.",
        items: {
          type: "object",
          description: "A rich text object.",
        },
      },
      description: {
        type: "array",
        description:
          "An array of rich text objects that represents the description of the database that is displayed in the Notion UI.",
      },
      properties: {
        type: "object",
        description:
          "The properties of a database to be changed in the request, in the form of a JSON object.",
      },
    },
    required: ["database_id"],
  },
};
