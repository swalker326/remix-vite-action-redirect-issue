import { useSearchParams } from "@remix-run/react";
import { z } from "zod";

const types = ["code"] as const;
export const VerificationTypeSchema = z.enum(types);

export default function VerifyRoute() {
  const [searchParams] = useSearchParams();
  const code = VerificationTypeSchema.parse(searchParams.get("code"));
  console.log(code);
  console.log("SEARCH PARAMS", searchParams.get("code"));
  return <>Verify</>;
}
