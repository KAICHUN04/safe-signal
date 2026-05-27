export const QUIZ_NAME = 'Signal Check'

export const scenarios = [
  {
    id: 'photos-1',
    title: 'Stranger asking for photos',
    messages: [
      { from: 'them', text: 'hey you seem chill. got any cute pics?' },
      { from: 'them', text: 'just between us 👀' },
    ],
    choices: [
      { id: 'a', text: 'Send a photo to be friendly.' },
      { id: 'b', text: 'Say no and block/report.' },
      { id: 'c', text: 'Ask them to send one first.' },
    ],
    correctChoiceId: 'b',
    explanation:
      'Requests for photos—especially secret ones—are a common grooming tactic. The safest move is to stop, save evidence, block/report, and tell a trusted adult.',
  },
  {
    id: 'info-1',
    title: 'Personal info request',
    messages: [
      { from: 'them', text: 'what school do you go to?' },
      { from: 'them', text: 'and what’s your last name? just curious' },
    ],
    choices: [
      { id: 'a', text: 'Share details so they trust you.' },
      { id: 'b', text: 'Keep it vague and change the subject.' },
      { id: 'c', text: 'Don’t share. End the chat and report if needed.' },
    ],
    correctChoiceId: 'c',
    explanation:
      'Personal info can be used to find you offline or impersonate you. You don’t owe anyone private details—especially someone you only know online.',
  },
  {
    id: 'emotion-1',
    title: 'Emotional manipulation',
    messages: [
      { from: 'them', text: 'wow… everyone leaves me. i guess you will too.' },
      { from: 'them', text: 'if you cared you’d stay on call tonight' },
    ],
    choices: [
      { id: 'a', text: 'Stay because you feel guilty.' },
      { id: 'b', text: 'Set a boundary and talk to a trusted adult.' },
      { id: 'c', text: 'Promise to do whatever they want.' },
    ],
    correctChoiceId: 'b',
    explanation:
      'Guilt and pressure are manipulation tools. Healthy friends respect boundaries—unsafe people punish you for having them.',
  },
  {
    id: 'friendship-1',
    title: 'Fake friendship building',
    messages: [
      { from: 'them', text: 'you’re different from everyone else' },
      { from: 'them', text: 'we should keep our friendship special. no one needs to know' },
    ],
    choices: [
      { id: 'a', text: 'Agree to keep it secret to be “special”.' },
      { id: 'b', text: 'Ask to meet them alone to prove you trust them.' },
      { id: 'c', text: 'Keep things public and involve a trusted adult if it feels off.' },
    ],
    correctChoiceId: 'c',
    explanation:
      '“Special secrets” can be a trap. Safe relationships don’t require secrecy or isolation from your support system.',
  },
  {
    id: 'private-app-1',
    title: 'Move to private apps',
    messages: [
      { from: 'them', text: 'can you switch to a private app? my messages disappear there' },
      { from: 'them', text: 'it’s safer 😉' },
    ],
    choices: [
      { id: 'a', text: 'Switch immediately so they don’t get mad.' },
      { id: 'b', text: 'Keep it on the current platform where you can report.' },
      { id: 'c', text: 'Turn on disappearing messages too.' },
    ],
    correctChoiceId: 'b',
    explanation:
      'Moving to private apps and disappearing messages reduces accountability and can make it harder to report. Staying on-platform helps you keep evidence and use safety tools.',
  },
  {
    id: 'secrets-1',
    title: 'Secret keeping requests',
    messages: [
      { from: 'them', text: 'don’t tell anyone about this… please' },
      { from: 'them', text: 'if you do, you’ll ruin everything' },
    ],
    choices: [
      { id: 'a', text: 'Agree and keep it secret to avoid problems.' },
      { id: 'b', text: 'Stop replying and tell a trusted adult if it continues.' },
      { id: 'c', text: 'Send screenshots to them so you prove you’re serious.' },
    ],
    correctChoiceId: 'b',
    explanation:
      '“Don’t tell” and threats are red flags. You deserve support—stop the pressure and reach out to a trusted adult.',
  },
  {
    id: 'gifts-1',
    title: 'Gifts / rewards manipulation',
    messages: [
      { from: 'them', text: 'i can get you a gift if you do me a favor' },
      { from: 'them', text: 'it’s a quick thing. then we’ll be “close”' },
    ],
    choices: [
      { id: 'a', text: 'Do the favor to earn the gift.' },
      { id: 'b', text: 'Refuse and end the chat. Report if it feels unsafe.' },
      { id: 'c', text: 'Ask for the gift details so you can negotiate.' },
    ],
    correctChoiceId: 'b',
    explanation:
      'Gifts can be used to create control or “debt.” Unsafe people may punish you for saying no—refuse and report.',
  },
  {
    id: 'private-group-1',
    title: 'Move the conversation to DMs / private groups',
    messages: [
      { from: 'them', text: 'join my private server so no one can see' },
      { from: 'them', text: 'i’ll send you something there' },
    ],
    choices: [
      { id: 'a', text: 'Join immediately because it seems harmless.' },
      { id: 'b', text: 'Stay public/inside the app tools where reporting is available.' },
      { id: 'c', text: 'Share your username and invite link to prove you trust them.' },
    ],
    correctChoiceId: 'b',
    explanation:
      'Private spaces can hide wrongdoing and reduce your ability to report. Use platform safety tools and keep boundaries.',
  },
  {
    id: 'emotional-1',
    title: 'Emotional guilt trip',
    messages: [
      { from: 'them', text: 'after everything i did, you’re ignoring me?' },
      { from: 'them', text: 'if you really cared, you would…' },
    ],
    choices: [
      { id: 'a', text: 'Apologize and do what they ask.' },
      { id: 'b', text: 'Say you’re not comfortable, stop replying, and talk to a trusted adult if needed.' },
      { id: 'c', text: 'Wait quietly until they calm down.' },
    ],
    correctChoiceId: 'b',
    explanation:
      'Guilt is a manipulation tactic. Healthy people won’t punish you for boundaries—pause and seek support.',
  },
  {
    id: 'threats-1',
    title: 'Threats if you report or tell',
    messages: [
      { from: 'them', text: 'if you tell, i’ll expose you online' },
      { from: 'them', text: 'don’t make this worse for yourself' },
    ],
    choices: [
      { id: 'a', text: 'Believe the threat and keep everything secret.' },
      { id: 'b', text: 'Save evidence, block/report, and tell a trusted adult.' },
      { id: 'c', text: 'Argue with them to stop the threat.' },
    ],
    correctChoiceId: 'b',
    explanation:
      'Threats are serious. Don’t negotiate. Save evidence, block/report, and tell a trusted adult or local support.',
  },
]

