import { object, schema, string } from "@verve-neowise/validius";

export const instValidator = schema(
  object({
    entries: {
      title: string({
        min: 10,
        required: true,
      }),
      descr: string({
        min: 1,
        required: true,
      }),
    },
  })
);
