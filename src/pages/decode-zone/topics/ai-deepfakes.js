const topic = {
  slug: 'ai-deepfakes',
  title: 'AI Deepfakes & Voice-Clone Scams',
  hubBlurb:
    'Fabricated explicit images generated from ordinary photographs, cloned voices used to request money, and AI-generated fake profiles in your direct messages.',
  summary:
    'Deepfakes are AI-generated images, videos, or voices that closely resemble the real subject. With only a small number of your social media photographs, anyone can now generate a fabricated explicit image of you. With only ten seconds of your voice from a TikTok or voice note, anyone can clone it. Scammers and bullies are already using both techniques.',
  scale: {
    text: 'The FBI has formally warned that criminals are using generative AI to make fraud more convincing. This includes the creation of deepfake explicit images of victims for use in sextortion, and the cloning of family members\' voices to request urgent money transfers.',
    source: {
      title: 'Criminals Use Generative AI to Facilitate Financial Fraud (PSA, December 2024)',
      publisher: 'FBI IC3',
      url: 'https://www.ic3.gov/PSA/2024/PSA241203',
    },
  },
  redFlags: [
    'An explicit image of you appears that you never produced. Inspect the edges, hands, jewellery, and background. Deepfakes typically render these elements incorrectly.',
    'A voice note that appears to be from a family member requests money urgently and asks you to keep the request confidential.',
    'A video call in which the face barely blinks, the lighting on the face does not match the room, or the audio lags behind the lip movement.',
    'A profile in your direct messages whose photographs appear unusually polished, with no tagged friends or older posts.',
    'The person refuses to switch to a live video call on a different platform that you select.',
    'A combination of urgency, secrecy, and a request for money. This pattern is consistent across most scams.',
  ],
  caseStudy: {
    title: 'Deepfake images of classmates: a school-level crime',
    summary:
      'In several countries, including high-profile cases reported in Spain, South Korea, and the United States, teenage boys have used freely available AI applications to generate fabricated explicit images of female classmates from ordinary school photographs, and then circulated them in group chats. These images cause the same harm as authentic ones, and in most jurisdictions they are now treated as a serious offence against the victim. The FBI confirms that this same technique is being used in sextortion against teenagers.',
    source: {
      title: 'Criminals Use Generative AI to Facilitate Financial Fraud',
      publisher: 'FBI IC3',
      url: 'https://www.ic3.gov/PSA/2024/PSA241203',
    },
  },
  whatToDo: [
    {
      step: 'Stop',
      detail:
        'Do not act on impulse and do not pay. If a person claiming to be a family member is requesting money urgently by voice, end the call and ring them back on their verified number.',
    },
    {
      step: 'Save',
      detail:
        'Save the file, the link, and the account that sent or posted it. This evidence will be required for any report.',
    },
    {
      step: 'Block',
      detail:
        'Report and block the account on the platform. If a fabricated image of you is online, submit it to StopNCII.org so that participating platforms can assist in removing it.',
    },
    {
      step: 'Tell',
      detail:
        'Speak to a trusted adult. Report the incident to Cyber999 and to the Royal Malaysia Police (PDRM). A fabricated image of you is still a form of abuse against you.',
    },
  ],
  extraTools: [
    {
      label: 'StopNCII.org (removal of deepfake or authentic intimate images)',
      url: 'https://stopncii.org/',
    },
  ],
  helplineHighlight: 'cyber999',
}

export default topic
