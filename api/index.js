import { ipAddress } from "@vercel/edge";

export const config = {
  runtime: "edge",
};

export default function (req) {
  return new Response(ipAddress(req));
}
