// Block Tools
export { appendBlockChildrenTool } from "./appendBlockChildrenTool";
export { retrieveBlockTool } from "./retrieveBlockTool";
export { retrieveBlockChildrenTool } from "./retrieveBlockChildrenTool";
export { deleteBlockTool } from "./deleteBlockTool";

// Page Tools
export { retrievePageTool } from "./retrievePageTool";
export { updatePagePropertiesTool } from "./updatePagePropertiesTool";

// User Tools
export { listAllUsersTool } from "./listAllUsersTool";

// Rest of the tools will be imported as they are created
export const allTools = [
  // Block Tools
  "appendBlockChildrenTool",
  "retrieveBlockTool",
  "retrieveBlockChildrenTool",
  "deleteBlockTool",

  // Page Tools
  "retrievePageTool",
  "updatePagePropertiesTool",

  // User Tools
  "listAllUsersTool",

  // These tools will be implemented and added to this list
  "retrieveUserTool",
  "retrieveBotUserTool",
  "createDatabaseTool",
  "queryDatabaseTool",
  "retrieveDatabaseTool",
  "updateDatabaseTool",
  "createDatabaseItemTool",
  "createCommentTool",
  "retrieveCommentsTool",
  "searchTool",
];
