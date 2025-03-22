// Block Tools
export { appendBlockChildrenTool } from "./appendBlockChildrenTool.js";
export { retrieveBlockTool } from "./retrieveBlockTool.js";
export { retrieveBlockChildrenTool } from "./retrieveBlockChildrenTool.js";
export { deleteBlockTool } from "./deleteBlockTool.js";

// Page Tools
export { retrievePageTool } from "./retrievePageTool.js";
export { updatePagePropertiesTool } from "./updatePagePropertiesTool.js";

// User Tools
export { listAllUsersTool } from "./listAllUsersTool.js";

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
