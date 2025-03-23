import { CreateCommentArgs } from "./types.js";
import { commonIdDescription } from "../utils/common.js";

export const createCommentTool = {
  name: "notion_create_comment",
  description:
    "Create a comment in Notion. This requires the integration to have 'insert comment' capabilities. You can either specify a page parent or a discussion_id, but not both.",
  inputSchema: {
    type: "object",
    properties: {
      parent: {
        type: "object",
        description:
          "Parent object that specifies the page to comment on. Must include a page_id if used.",
        properties: {
          page_id: {
            type: "string",
            description:
              "The ID of the page to comment on." + commonIdDescription,
          },
        },
      },
      discussion_id: {
        type: "string",
        description:
          "The ID of an existing discussion thread to add a comment to." +
          commonIdDescription,
      },
      rich_text: {
        type: "array",
        description:
          "Array of rich text objects representing the comment content.",
        items: {
          type: "object",
          description: "A rich text object.",
        },
      },
    },
    required: ["rich_text"],
  },
};
