import { RetrieveUserArgs } from "./types.js";
import { commonIdDescription } from "../utils/common.js";

export const retrieveUserTool = {
  name: "notion_retrieve_user",
  description:
    "Retrieve a specific user by user_id in Notion. **Note:** This function requires upgrading to the Notion Enterprise plan and using an Organization API key to avoid permission errors.",
  inputSchema: {
    type: "object",
    properties: {
      user_id: {
        type: "string",
        description: "The ID of the user to retrieve." + commonIdDescription,
      },
    },
    required: ["user_id"],
  },
};
