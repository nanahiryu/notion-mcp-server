import { RetrieveCommentsArgs } from "./types.js";
import { commonIdDescription } from "../utils/common.js";

export const retrieveCommentsTool = {
  name: "notion_retrieve_comments",
  description:
    "Retrieve a list of unresolved comments from a Notion page or block. Requires the integration to have 'read comment' capabilities.",
  inputSchema: {
    type: "object",
    properties: {
      block_id: {
        type: "string",
        description:
          "The ID of the block or page whose comments you want to retrieve." +
          commonIdDescription,
      },
      start_cursor: {
        type: "string",
        description:
          "If supplied, returns a page of results starting after the cursor.",
      },
      page_size: {
        type: "number",
        description: "Number of comments to retrieve (max 100).",
      },
    },
    required: ["block_id"],
  },
};
