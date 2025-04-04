import { ipAddress } from "@vercel/edge";

export const config = {
  runtime: "edge",
};

export default function (req) {

  // Get the original IP address using ipAddress(req)
  const originalIp = ipAddress(req);

  // Extract the X-Forwarded-For header
  const xForwardedFor = req.headers.get("X-Forwarded-For");

  // If the header exists, use the first IP address in the list
  const ip = xForwardedFor ? xForwardedFor.split(",")[0].trim() : "IP not found";

  // Concatenate the original IP and the X-Forwarded-For IP
  const combinedIp = `${originalIp}, ${forwardedIp}`;

  return new Response(combinedIp);

}
