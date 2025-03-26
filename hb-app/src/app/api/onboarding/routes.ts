import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import dbConnect from "@/lib/db";
import { ServiceProvider } from "@/models/user-models/ServiceProvider";

const app = new Hono();

const onboardingSchema = z.object({
  providerName: z
    .string()
    .min(2, "Business name must be at least 2 characters long"),
  profileImage: z.string().optional(),
  socialMedia: z
    .object({
      instagram: z.string().optional(),
      tiktok: z.string().optional(),
      pinterest: z.string().optional(),
      facebook: z.string().optional(),
      twitter: z.string().optional(),
      snapchat: z.string().optional(),
      businessEmail: z.string().optional(),
    })
    .optional(),
  location: z.string(),
  serviceCategory: z.array(z.string()),
  catersTo: z.array(z.string()).optional(),
  extraOfferings: z.array(z.string()).optional(),
});

// const customerOnboardingSchema = z.object({
//   dateOfBirth: z.number().min(18, "Must be at least 18 years old"),
// });

app.post("/onboarding", zValidator("json", onboardingSchema), async (c) => {
  try {
    await dbConnect();

    const serviceProviderData = await c.req.json();

    const newServiceProvider = new ServiceProvider(serviceProviderData);
    await newServiceProvider.save();

    return c.json(
      {
        message: "Service Provider onboarded successfully",
        data: newServiceProvider,
      },
      201
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return c.json("Failed to save service provider", error);
  }
});

export default app;
