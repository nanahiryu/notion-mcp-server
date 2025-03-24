#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequest,
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

// Import type definitions
import {
  AppendBlockChildrenArgs,
  RetrieveBlockArgs,
  RetrieveBlockChildrenArgs,
  DeleteBlockArgs,
  RetrievePageArgs,
  UpdatePagePropertiesArgs,
  ListAllUsersArgs,
  RetrieveUserArgs,
  RetrieveBotUserArgs,
  CreateDatabaseArgs,
  QueryDatabaseArgs,
  RetrieveDatabaseArgs,
  UpdateDatabaseArgs,
  CreateDatabaseItemArgs,
  CreateCommentArgs,
  RetrieveCommentsArgs,
  SearchArgs,
} from "./tools/types.js";

// Import tools
import {
  appendBlockChildrenTool,
  retrieveBlockTool,
  retrieveBlockChildrenTool,
  deleteBlockTool,
  retrievePageTool,
  updatePagePropertiesTool,
  listAllUsersTool,
  retrieveUserTool,
  retrieveBotUserTool,
  createDatabaseTool,
  queryDatabaseTool,
  retrieveDatabaseTool,
  updateDatabaseTool,
  createDatabaseItemTool,
  createCommentTool,
  retrieveCommentsTool,
  searchTool,
} from "./tools/index.js";

// Import client wrapper
import NotionClientWrapper from "./NotionClientWrapper.js";

async function main() {
  const notionToken = process.env.NOTION_API_TOKEN;

  if (!notionToken) {
    console.error("Please set NOTION_API_TOKEN environment variable");
    process.exit(1);
  }

  const server = new Server(
    {
      name: "Notion MCP Server",
      version: "1.0.0",
    },
    {
      capabilities: {
        tools: {},
      },
    }
  );

  const notionClient = new NotionClientWrapper(notionToken);

  server.setRequestHandler(
    CallToolRequestSchema,
    async (request: CallToolRequest) => {
      console.error("Received CallToolRequest:", request);
      try {
        if (!request.params.arguments) {
          throw new Error("No arguments provided");
        }

        switch (request.params.name) {
          case "notion_append_block_children": {
            const args = request.params
              .arguments as unknown as AppendBlockChildrenArgs;
            if (!args.block_id || !args.children) {
              throw new Error(
                "Missing required arguments: block_id and children"
              );
            }
            const response = await notionClient.appendBlockChildren(
              args.block_id,
              args.children
            );
            return {
              content: [{ type: "text", text: JSON.stringify(response) }],
            };
          }

          case "notion_retrieve_block": {
            const args = request.params
              .arguments as unknown as RetrieveBlockArgs;
            if (!args.block_id) {
              throw new Error("Missing required argument: block_id");
            }
            const response = await notionClient.retrieveBlock(args.block_id);
            return {
              content: [{ type: "text", text: JSON.stringify(response) }],
            };
          }

          case "notion_retrieve_block_children": {
            const args = request.params
              .arguments as unknown as RetrieveBlockChildrenArgs;
            if (!args.block_id) {
              throw new Error("Missing required argument: block_id");
            }
            const response = await notionClient.retrieveBlockChildren(
              args.block_id,
              args.start_cursor,
              args.page_size
            );
            return {
              content: [{ type: "text", text: JSON.stringify(response) }],
            };
          }

          case "notion_delete_block": {
            const args = request.params.arguments as unknown as DeleteBlockArgs;
            if (!args.block_id) {
              throw new Error("Missing required argument: block_id");
            }
            const response = await notionClient.deleteBlock(args.block_id);
            return {
              content: [{ type: "text", text: JSON.stringify(response) }],
            };
          }

          case "notion_retrieve_page": {
            const args = request.params
              .arguments as unknown as RetrievePageArgs;
            if (!args.page_id) {
              throw new Error("Missing required argument: page_id");
            }
            const response = await notionClient.retrievePage(args.page_id);
            return {
              content: [{ type: "text", text: JSON.stringify(response) }],
            };
          }

          case "notion_update_page_properties": {
            const args = request.params
              .arguments as unknown as UpdatePagePropertiesArgs;
            if (!args.page_id || !args.properties) {
              throw new Error(
                "Missing required arguments: page_id and properties"
              );
            }
            const response = await notionClient.updatePageProperties(
              args.page_id,
              args.properties
            );
            return {
              content: [{ type: "text", text: JSON.stringify(response) }],
            };
          }

          case "notion_list_all_users": {
            const args = request.params
              .arguments as unknown as ListAllUsersArgs;
            const response = await notionClient.listAllUsers(
              args.start_cursor,
              args.page_size
            );
            return {
              content: [{ type: "text", text: JSON.stringify(response) }],
            };
          }

          case "notion_retrieve_user": {
            const args = request.params
              .arguments as unknown as RetrieveUserArgs;
            if (!args.user_id) {
              throw new Error("Missing required argument: user_id");
            }
            const response = await notionClient.retrieveUser(args.user_id);
            return {
              content: [{ type: "text", text: JSON.stringify(response) }],
            };
          }

          case "notion_retrieve_bot_user": {
            const response = await notionClient.retrieveBotUser();
            return {
              content: [{ type: "text", text: JSON.stringify(response) }],
            };
          }

          case "notion_query_database": {
            const args = request.params
              .arguments as unknown as QueryDatabaseArgs;
            if (!args.database_id) {
              throw new Error("Missing required argument: database_id");
            }
            const response = await notionClient.queryDatabase(
              args.database_id,
              args.filter,
              args.sorts,
              args.start_cursor,
              args.page_size
            );
            return {
              content: [{ type: "text", text: JSON.stringify(response) }],
            };
          }

          case "notion_create_database": {
            const args = request.params
              .arguments as unknown as CreateDatabaseArgs;
            const response = await notionClient.createDatabase(
              args.parent,
              args.title,
              args.properties
            );
            return {
              content: [{ type: "text", text: JSON.stringify(response) }],
            };
          }

          case "notion_retrieve_database": {
            const args = request.params
              .arguments as unknown as RetrieveDatabaseArgs;
            const response = await notionClient.retrieveDatabase(
              args.database_id
            );
            return {
              content: [{ type: "text", text: JSON.stringify(response) }],
            };
          }

          case "notion_update_database": {
            const args = request.params
              .arguments as unknown as UpdateDatabaseArgs;
            const response = await notionClient.updateDatabase(
              args.database_id,
              args.title,
              args.description,
              args.properties
            );
            return {
              content: [{ type: "text", text: JSON.stringify(response) }],
            };
          }

          case "notion_create_database_item": {
            const args = request.params
              .arguments as unknown as CreateDatabaseItemArgs;
            const response = await notionClient.createDatabaseItem(
              args.database_id,
              args.properties
            );
            return {
              content: [{ type: "text", text: JSON.stringify(response) }],
            };
          }

          case "notion_create_comment": {
            const args = request.params
              .arguments as unknown as CreateCommentArgs;

            if (!args.parent && !args.discussion_id) {
              throw new Error(
                "Either parent.page_id or discussion_id must be provided"
              );
            }

            const response = await notionClient.createComment(
              args.parent,
              args.discussion_id,
              args.rich_text
            );
            return {
              content: [{ type: "text", text: JSON.stringify(response) }],
            };
          }

          case "notion_retrieve_comments": {
            const args = request.params
              .arguments as unknown as RetrieveCommentsArgs;
            if (!args.block_id) {
              throw new Error("Missing required argument: block_id");
            }
            const response = await notionClient.retrieveComments(
              args.block_id,
              args.start_cursor,
              args.page_size
            );
            return {
              content: [{ type: "text", text: JSON.stringify(response) }],
            };
          }

          case "notion_search": {
            const args = request.params.arguments as unknown as SearchArgs;
            const response = await notionClient.search(
              args.query,
              args.filter,
              args.sort,
              args.start_cursor,
              args.page_size
            );
            return {
              content: [{ type: "text", text: JSON.stringify(response) }],
            };
          }

          default:
            throw new Error(`Unknown tool: ${request.params.name}`);
        }
      } catch (error) {
        console.error("Error executing tool:", error);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                error: error instanceof Error ? error.message : String(error),
              }),
            },
          ],
        };
      }
    }
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: [
        appendBlockChildrenTool,
        retrieveBlockTool,
        retrieveBlockChildrenTool,
        deleteBlockTool,
        retrievePageTool,
        updatePagePropertiesTool,
        listAllUsersTool,
        retrieveUserTool,
        retrieveBotUserTool,
        createDatabaseTool,
        queryDatabaseTool,
        retrieveDatabaseTool,
        updateDatabaseTool,
        createDatabaseItemTool,
        createCommentTool,
        retrieveCommentsTool,
        searchTool,
      ],
    };
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
