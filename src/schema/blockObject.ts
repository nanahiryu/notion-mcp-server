import { richTextObjectSchema } from "./richTextObject.js";

export const blockObjectSchema = {
  type: "object",
  description: "A Notion block object.",
  properties: {
    object: {
      type: "string",
      description: "Should be 'block'.",
      enum: ["block"],
    },
    type: {
      type: "string",
      description:
        "Type of the block. Possible values include 'paragraph', 'heading_1', 'heading_2', 'heading_3', 'bulleted_list_item', 'numbered_list_item', 'to_do', 'toggle', 'child_page', 'child_database', 'embed', 'callout', 'quote', 'equation', 'divider', 'table_of_contents', 'column', 'column_list', 'link_preview', 'synced_block', 'template', 'link_to_page', 'audio', 'bookmark', 'breadcrumb', 'code', 'file', 'image', 'pdf', 'video'. Not all types are supported for creation via API.",
    },
    paragraph: {
      type: "object",
      description: "Paragraph block object.",
      properties: {
        rich_text: richTextObjectSchema,
        color: {
          type: "string",
          description: "The color of the block.",
          enum: [
            "default",
            "blue",
            "blue_background",
            "brown",
            "brown_background",
            "gray",
            "gray_background",
            "green",
            "green_background",
            "orange",
            "orange_background",
            "pink",
            "pink_background",
            "purple",
            "purple_background",
            "red",
            "red_background",
            "yellow",
            "yellow_background",
          ],
        },
        children: {
          type: "array",
          description: "Nested child blocks.",
          items: {
            type: "object",
            description: "A nested block object.",
          },
        },
      },
    },
  },
  required: ["object", "type"],
};

export default blockObjectSchema;
