import { commonIdDescription, NotionTool } from "../utils/common.js";

export const deleteBlockTool: NotionTool = {
  name: "notion_delete_block",
  description: "Delete a block in Notion",
  inputSchema: {
    type: "object",
    properties: {
      block_id: {
        type: "string",
        description: "The ID of the block to delete." + commonIdDescription,
      },
    },
    required: ["block_id"],
  },
};

export default deleteBlockTool;
