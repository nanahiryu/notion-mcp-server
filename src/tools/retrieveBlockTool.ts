import { commonIdDescription, NotionTool } from "../utils/common";

export const retrieveBlockTool: NotionTool = {
  name: "notion_retrieve_block",
  description: "Retrieve a block from Notion",
  inputSchema: {
    type: "object",
    properties: {
      block_id: {
        type: "string",
        description: "The ID of the block to retrieve." + commonIdDescription,
      },
    },
    required: ["block_id"],
  },
};

export default retrieveBlockTool;
