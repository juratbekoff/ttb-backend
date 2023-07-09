import { object, schema, string } from "@verve-neowise/validius";

export const lshValidatior = schema(
  object({
    entries: {
      name: string({
        min: 1,
        required: true,
      }),
      phone: string({
        min: 1,
        max: 30,
        required: true,
      }),
      position: string({
        min: 1,
        required: true,
      }),
      email: string({
        min: 1,
        max: 30,
        required: true,
        isEmail: true,
      }),
    },
  })
);
