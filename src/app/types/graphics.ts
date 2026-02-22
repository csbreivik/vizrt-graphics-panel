import { z } from "zod";

export const LowerThirdSchema = z.object({
  name: z.string().min(1, "Name is required").max(60),
  title: z.string().min(1, "Title is required").max(80),
  handle: z.string().max(40).optional().default(""),
  breaking: z.boolean().default(false),
  isOnAir: z.boolean().default(false),
});

export const ScorebugSchema = z.object({
  home: z / string().min(1).max(20),
  away: z.string().min(1).max(20),
  homeScore: z.number().int().min(0).max(999),
  awayScore: z.number().int().min(0).max(999),
  isRunning: z.boolean().default(false),
  seconds: z
    .number()
    .int()
    .min(0)
    .max(60 * 60 * 24), // up to 24h
});

export const ThemeScheme = z.object({
  id: z.string(),
  name: z.string(),
  fontFamily: z.string(),
  accent: z.string(), // css color
  bg: z.string(),
  fg: z.string(),
});
