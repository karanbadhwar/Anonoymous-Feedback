import { z } from "zod";

export const verifySchema = z.string().length(6, "Verficatio must be 6 digits");
