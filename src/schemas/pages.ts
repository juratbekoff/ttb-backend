import { object, schema, string } from "@verve-neowise/validius";

export const pagesValidator = schema(
  object({
    entries: {
      name: string({
        min: 1,
        max: 60,
        required: true,
      }),
      title: string({
        min: 5,
        required: true,
      }),
      content: string({
        min: 10,
        required: true,
      }),
    },
  })
);
