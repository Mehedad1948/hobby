export function imageUrlHandler(subUrl: string, devUrl?: string) {
  // Return local dev URL if in development and a devUrl is provided
  if (process.env.NODE_ENV === "development" && devUrl) {
    return devUrl;
  }

  const baseUrl = process.env.NEXT_PUBLIC_IMAGEKIT_BASE_URL || "";
  
  // Remove leading slash from subUrl to prevent double slashes (e.g., .com//image.png)
  const cleanSubUrl = subUrl.startsWith("/") ? subUrl.substring(1) : subUrl;

  return `${baseUrl}${cleanSubUrl}`;
}
