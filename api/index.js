import { ipAddress } from "@vercel/edge";

export const config = {
  runtime: "edge",
};

export default function (req) {

  // Get the original IP address using ipAddress(req)
  const originalIp = ipAddress(req);

  // Extract the X-Forwarded-For header
  const xForwardedFor = req.headers.get("X-Forwarded-For");

  // If the header exists, split it into an array of IP addresses
  const forwardedIps = xForwardedFor ? xForwardedFor.split(",").map(ip => ip.trim()) : ["IP not found"];

  // Concatenate the original IP and the X-Forwarded-For IPs
  const combinedIps = [originalIp, ...forwardedIps].join(", ");

  return new Response(combinedIps);
}
