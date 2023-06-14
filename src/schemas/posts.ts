import { object, schema, string } from "@verve-neowise/validius";

export const postsValidator = schema(
  object({
    entries: {
      title: string({
        min: 5,
        required: true,
      }),
      descr: string({
        min: 10,
        required: true,
      }),
    },
  })
);
