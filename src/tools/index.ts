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
export { retrieveUserTool } from "./retrieveUserTool.js";
export { retrieveBotUserTool } from "./retrieveBotUserTool.js";

// Database Tools
export { createDatabaseTool } from "./createDatabaseTool.js";
export { queryDatabaseTool } from "./queryDatabaseTool.js";
export { retrieveDatabaseTool } from "./retrieveDatabaseTool.js";
export { updateDatabaseTool } from "./updateDatabaseTool.js";
export { createDatabaseItemTool } from "./createDatabaseItemTool.js";

// Comment Tools
export { createCommentTool } from "./createCommentTool.js";
export { retrieveCommentsTool } from "./retrieveCommentsTool.js";

// Search Tool
export { searchTool } from "./searchTool.js";

// All tools list
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
  "retrieveUserTool",
  "retrieveBotUserTool",

  // Database Tools
  "createDatabaseTool",
  "queryDatabaseTool",
  "retrieveDatabaseTool",
  "updateDatabaseTool",
  "createDatabaseItemTool",

  // Comment Tools
  "createCommentTool",
  "retrieveCommentsTool",

  // Search Tool
  "searchTool",
];
