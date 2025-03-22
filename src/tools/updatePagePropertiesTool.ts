import { commonIdDescription, NotionTool } from "../utils/common.js";

export const updatePagePropertiesTool: NotionTool = {
  name: "notion_update_page_properties",
  description: "Update properties of a page or an item in a Notion database",
  inputSchema: {
    type: "object",
    properties: {
      page_id: {
        type: "string",
        description:
          "The ID of the page or database item to update." +
          commonIdDescription,
      },
      properties: {
        type: "object",
        description:
          "Properties to update. These correspond to the columns or fields in the database.",
      },
    },
    required: ["page_id", "properties"],
  },
};

export default updatePagePropertiesTool;
