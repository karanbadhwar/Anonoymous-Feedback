import { z } from "zod";

export const accpetingMessageSchema = z.object({
  acceptMessages: z.boolean(),
});
