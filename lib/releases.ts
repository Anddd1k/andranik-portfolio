// Public links only. Defaults were verified after the approved production release.
function publicUrl(value: string | undefined) {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    if (
      url.protocol === "https:" ||
      (url.protocol === "http:" &&
        ["localhost", "127.0.0.1"].includes(url.hostname))
    )
      return url.href;
  } catch {
    return undefined;
  }
  return undefined;
}
export const releases = {
  smokereset: {
    play: "https://play.google.com/store/apps/details?id=com.smokereset.app",
    packageId: "com.smokereset.app",
    developer: "And1k",
    // Unconfirmed profile URL. The public promotion links to the app per owner instruction.
    developerProfileUrl: null as string | null,
  },
  brew: {
    demo: publicUrl(process.env.NEXT_PUBLIC_BREW_DEMO_URL ?? "https://brew-co-demo.vercel.app"),
    github: publicUrl(process.env.NEXT_PUBLIC_BREW_GITHUB_URL ?? "https://github.com/Anddd1k/brew-co-demo"),
  },
  flowdesk: {
    demo: publicUrl(process.env.NEXT_PUBLIC_FLOWDESK_DEMO_URL ?? "https://flowdesk-demo-alpha.vercel.app"),
    github: publicUrl(process.env.NEXT_PUBLIC_FLOWDESK_GITHUB_URL ?? "https://github.com/Anddd1k/flowdesk-demo"),
  },
};
