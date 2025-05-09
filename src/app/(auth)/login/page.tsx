import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const user = await getCurrentUser();
  if (user) {
    redirect("/");
  }
  return <></>;
}
