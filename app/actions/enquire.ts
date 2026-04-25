"use server";

import { prisma } from "@/lib/prisma";

export async function submitEnquiry(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const companyName = formData.get("companyName") as string;
    const domain = formData.get("domain") as string;
    const candidates = parseInt(formData.get("candidates") as string, 10);
    const deliveryMode = formData.get("deliveryMode") as string;
    const location = formData.get("location") as string;

    if (!name || !email || !phone || !domain || !candidates || !deliveryMode) {
      return { success: false, error: "Missing required fields" };
    }

    const enquiry = await prisma.enquiry.create({
      data: {
        name,
        email,
        phone,
        companyName,
        domain,
        candidates,
        deliveryMode,
        location,
      },
    });

    return { success: true, data: enquiry };
  } catch (error) {
    console.error("Failed to submit enquiry:", error);
    return { success: false, error: "Failed to submit enquiry. Please try again." };
  }
}
