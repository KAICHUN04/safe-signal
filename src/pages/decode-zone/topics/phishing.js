const topic = {
  slug: 'phishing',
  title: 'Phishing & Account Hijacking',
  hubBlurb:
    'How "free reward" links, fraudulent OTP requests, and suspicious Discord bot messages lead to the takeover of your gaming, social, or banking accounts.',
  summary:
    'Phishing is the practice of deceiving a person into disclosing a password, a one-time password (OTP), or clicking a malicious link. Teenagers are most frequently targeted through gaming accounts (Mobile Legends, Roblox, Genshin Impact), social media accounts (TikTok, Instagram), and fraudulent reward links shared on Discord or WhatsApp.',
  scale: {
    text: 'Cyber999, the national cyber incident response centre operated by CyberSecurity Malaysia, receives thousands of reports of fraud, account compromise, and malicious code each year. Many of these reports originate from individuals, including teenagers whose gaming and social media accounts have been hijacked.',
    source: {
      title: 'Cyber999 National Cyber Incident Reporting',
      publisher: 'CyberSecurity Malaysia / MyCERT',
      url: 'https://www.mycert.org.my/cyber999',
    },
  },
  redFlags: [
    'An offer of free in-game currency, skins, or Robux that requires you to log in through an unfamiliar link. Such offers are never genuine.',
    'A direct message from a friend containing only a link and a vague prompt such as "is this you?"',
    'A request from an unknown person to share the six-digit code that has just been sent to your phone. Never share an OTP under any circumstances.',
    'A login page that appears almost legitimate but contains a slightly altered URL, such as faceb00k.com or t1ktok.com.',
    'An email or SMS claiming that your account will be deleted within 24 hours unless you click a link.',
    'A verification form that requests both your password and your OTP.',
    'A QR code embedded in a comment or sticker that instructs you to scan in order to claim a reward.',
  ],
  caseStudy: {
    title: 'How gaming and social media accounts are hijacked',
    summary:
      'CyberSecurity Malaysia\'s MyCERT regularly publishes advisories on phishing campaigns targeting Malaysians, including fraudulent login pages for popular platforms and social engineering attacks designed to extract OTPs. Once an account is compromised, the attacker typically uses it to defraud the victim\'s contacts. This is why an unusual message from a friend is often the first indication that their account has been taken over.',
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
        'Never enter your password into a link received in a direct message. Never share an OTP. Legitimate institutions such as banks, MCMC, TNB, and Pos Malaysia will never request it.',
    },
    {
      step: 'Save',
      detail:
        'If you suspect a phishing link, capture a screenshot of both the link and the sender before deleting the message. Do not interact with the link again.',
    },
    {
      step: 'Block',
      detail:
        'Enable two-step verification on every important account, including Google, TikTok, Instagram, Discord, and your gaming accounts. Change the password on any service for which you reused credentials.',
    },
    {
      step: 'Tell',
      detail:
        'If your account has been taken over, or if money or credit has been stolen, report the incident to Cyber999. If your bank account is affected, contact your bank\'s fraud line immediately.',
    },
  ],
  helplineHighlight: 'cyber999',
}

export default topic
