import { object, schema, string } from "@verve-neowise/validius";

export const register = schema(
  object({
    entries: {
      name: string({
        min: 1,
        max: 14,
        required: true,
      }),
      username: string({
        min: 1,
        max: 14,
        required: true,
      }),
      password: string({
        min: 1,
        max: 14,
        required: true,
      }),
    },
  })
);

export const login = schema(
  object({
    entries: {
      username: string({
        min: 1,
        max: 14,
        required: true,
      }),
      password: string({
        min: 1,
        max: 14,
        required: true,
      }),
    },
  })
);
