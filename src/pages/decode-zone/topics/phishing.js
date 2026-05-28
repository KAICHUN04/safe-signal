const topic = {
  slug: 'phishing',
  title: 'Phishing & Account Hijacking',
  hubBlurb:
    'How "free skins" links, fake OTP requests, and Discord bot DMs end with your TikTok, ML, or bank account taken over.',
  summary:
    'Phishing is when someone tricks you into giving up a password, a one-time code (OTP), or clicking a malicious link. Teens are most often targeted through game accounts (Mobile Legends, Roblox, Genshin), social accounts (TikTok, Instagram), and "free reward" links shared in Discord or WhatsApp.',
  scale: {
    text: 'CyberSecurity Malaysia\'s Cyber999 incident response centre receives thousands of reports of fraud, account compromise, and malicious code every year — many from individuals, including teens whose game and social accounts have been hijacked.',
    source: {
      title: 'Cyber999 — National Cyber Incident Reporting',
      publisher: 'CyberSecurity Malaysia / MyCERT',
      url: 'https://www.mycert.org.my/cyber999',
    },
  },
  redFlags: [
    '"Free diamonds / free skins / free Robux — just log in here with your account." It is never free.',
    'A DM from a "friend" with a link saying "is this you?" or "look at this".',
    'Someone you do not know asks you to send them the 6-digit code that just came to your phone. Never share OTPs. Ever.',
    'A login page that almost looks right but the URL is slightly off (e.g. faceb00k.com, t1ktok.com).',
    'An email or SMS saying your account will be deleted in 24 hours unless you click.',
    '"Verify your account" forms that ask for your password AND the OTP.',
    'A QR code in a comment or a sticker that you are told to scan to "claim" a reward.',
  ],
  caseStudy: {
    title: 'How game and social accounts get hijacked',
    summary:
      'CyberSecurity Malaysia\'s MyCERT regularly publishes advisories on phishing campaigns targeting Malaysians, including fake login pages for popular platforms and social-engineering attacks asking victims to share their OTP. Once an account is taken over, attackers use it to scam the victim\'s friends and family — that is why "weird message from a friend" is often the first sign someone\'s account was compromised.',
    source: {
      title: 'MyCERT Advisories',
      publisher: 'CyberSecurity Malaysia / MyCERT',
      url: 'https://www.mycert.org.my/',
    },
  },
  whatToDo: [
    {
      step: 'Stop',
      detail:
        'Never type your password into a link from a DM. Never share an OTP — banks, MCMC, TNB, and Pos Malaysia will never ask for it.',
    },
    {
      step: 'Save',
      detail:
        'If you suspect a phishing link, screenshot it and the sender before deleting. Do not click it again.',
    },
    {
      step: 'Block',
      detail:
        'Turn on 2-step verification on every important account (Google, TikTok, Instagram, Discord, your game accounts). Change passwords on anything you reused.',
    },
    {
      step: 'Tell',
      detail:
        'If your account was taken over, or money/credit was stolen, report to Cyber999. If your bank account is involved, call your bank\'s fraud line immediately.',
    },
  ],
  helplineHighlight: 'cyber999',
}

export default topic
