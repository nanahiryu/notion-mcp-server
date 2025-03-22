import { commonIdDescription, NotionTool } from "../utils/common";

export const retrievePageTool: NotionTool = {
  name: "notion_retrieve_page",
  description: "Retrieve a page from Notion",
  inputSchema: {
    type: "object",
    properties: {
      page_id: {
        type: "string",
        description: "The ID of the page to retrieve." + commonIdDescription,
      },
    },
    required: ["page_id"],
  },
};

export default retrievePageTool;
