import { RetrieveBotUserArgs } from "./types.js";

export const retrieveBotUserTool = {
  name: "notion_retrieve_bot_user",
  description:
    "Retrieve the bot user associated with the current token in Notion",
  inputSchema: {
    type: "object",
    properties: {
      random_string: {
        type: "string",
        description: "Dummy parameter for no-parameter tools",
      },
    },
    required: ["random_string"],
  },
};
