import { object, schema, string } from "@verve-neowise/validius";

export const appValidator = schema(
  object({
    entries: {
      name: string({
        min: 1,
        max: 14,
        required: true,
      }),
      surname: string({
        min: 1,
        max: 14,
        required: true,
      }),
      email: string({
        min: 1,
        max: 40,
        required: true,
        isEmail: true,
      }),
      gender: string({
        min: 1,
        max: 14,
        required: true,
      }),
      phone: string({
        min: 1,
        max: 14,
        required: true,
      }),
      message: string({
        min: 5,
        required: true,
      }),
    },
  })
);
