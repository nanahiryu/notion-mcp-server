import { RetrieveDatabaseArgs } from "./types.js";
import { commonIdDescription } from "../utils/common.js";

export const retrieveDatabaseTool = {
  name: "notion_retrieve_database",
  description: "Retrieve a database in Notion",
  inputSchema: {
    type: "object",
    properties: {
      database_id: {
        type: "string",
        description:
          "The ID of the database to retrieve." + commonIdDescription,
      },
    },
    required: ["database_id"],
  },
};
