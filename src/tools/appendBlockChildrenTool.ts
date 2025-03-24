import { commonIdDescription, NotionTool } from "../utils/common.js";
import { blockObjectSchema } from "../schema/blockObject.js";

export const appendBlockChildrenTool: NotionTool = {
  name: "notion_append_block_children",
  description:
    "Append new children blocks to a specified parent block in Notion. Requires insert content capabilities. You can optionally specify the 'after' parameter to append after a certain block.",
  inputSchema: {
    type: "object",
    properties: {
      block_id: {
        type: "string",
        description: "The ID of the parent block." + commonIdDescription,
      },
      children: {
        type: "array",
        description:
          "Array of block objects to append. Each block must follow the Notion block schema.",
        items: blockObjectSchema,
      },
      after: {
        type: "string",
        description:
          "The ID of the existing block that the new block should be appended after." +
          commonIdDescription,
      },
    },
    required: ["block_id", "children"],
  },
};

export default appendBlockChildrenTool;
