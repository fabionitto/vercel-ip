import { ipAddress } from "@vercel/edge";

export const config = {
  runtime: "edge",
};

export default function (req) {

  // Get the original IP address using ipAddress(req)
  const originalIp = ipAddress(req);

  // Get CF-Connecting-IP from Cloudflare
  const clientIp = req.headers.get("CF-Connecting-IP");

  // Concatenate the original IP and the X-Forwarded-For IPs
  const combinedIps = ["IP Origem:",originalIp,"\n","Ip Cliente CF:", clientIp].join(" ");

  return new Response(combinedIps);
}
