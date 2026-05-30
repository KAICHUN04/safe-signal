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
    didYouKnow:
      'Did you know? Once an image is sent online, you permanently lose control of it. It can be shared, edited, or used against you — even years later.',
  },
  {
    id: 'info-1',
    title: 'Personal info request',
    messages: [
      { from: 'them', text: 'what school do you go to?' },
      { from: 'them', text: 'and what is your last name? just curious' },
    ],
    choices: [
      { id: 'a', text: 'Share details so they trust you.' },
      { id: 'b', text: 'Keep it vague and change the subject.' },
      { id: 'c', text: 'Do not share. End the chat and report if needed.' },
    ],
    correctChoiceId: 'c',
    explanation:
      'Personal info can be used to find you offline or impersonate you. You do not owe anyone private details—especially someone you only know online.',
    didYouKnow:
      'Did you know? With just your name, school, and suburb — a stranger can find your daily routine, your home, and your family within minutes.',
  },
  {
    id: 'emotion-1',
    title: 'Emotional manipulation',
    messages: [
      { from: 'them', text: 'wow everyone leaves me. i guess you will too.' },
      { from: 'them', text: 'if you cared you would stay on call tonight' },
    ],
    choices: [
      { id: 'a', text: 'Stay because you feel guilty.' },
      { id: 'b', text: 'Set a boundary and talk to a trusted adult.' },
      { id: 'c', text: 'Promise to do whatever they want.' },
    ],
    correctChoiceId: 'b',
    explanation:
      'Guilt and pressure are manipulation tools. Healthy friends respect boundaries—unsafe people punish you for having them.',
    didYouKnow:
      'Did you know? Making you feel responsible for their emotions is a deliberate tactic called emotional coercion — it is one of the most common early grooming strategies.',
  },
  {
    id: 'friendship-1',
    title: 'Fake friendship building',
    messages: [
      { from: 'them', text: 'you are different from everyone else' },
      { from: 'them', text: 'we should keep our friendship special. no one needs to know' },
    ],
    choices: [
      { id: 'a', text: 'Agree to keep it secret to be special.' },
      { id: 'b', text: 'Ask to meet them alone to prove you trust them.' },
      { id: 'c', text: 'Keep things public and involve a trusted adult if it feels off.' },
    ],
    correctChoiceId: 'c',
    explanation:
      'Special secrets can be a trap. Safe relationships do not require secrecy or isolation from your support system.',
    didYouKnow:
      'Did you know? Predators spend an average of 3 weeks building trust before attempting to isolate a victim from their friends and family.',
  },
  {
    id: 'private-app-1',
    title: 'Move to private apps',
    messages: [
      { from: 'them', text: 'can you switch to a private app? my messages disappear there' },
      { from: 'them', text: 'it is safer 😉' },
    ],
    choices: [
      { id: 'a', text: 'Switch immediately so they do not get mad.' },
      { id: 'b', text: 'Keep it on the current platform where you can report.' },
      { id: 'c', text: 'Turn on disappearing messages too.' },
    ],
    correctChoiceId: 'b',
    explanation:
      'Moving to private apps and disappearing messages reduces accountability and can make it harder to report. Staying on-platform helps you keep evidence and use safety tools.',
    didYouKnow:
      'Did you know? 89% of sexual solicitations of teens happen in chat apps and DMs — predators deliberately seek out platforms with less moderation.',
  },
  {
    id: 'meetup-1',
    title: 'Stranger wants to meet in person',
    messages: [
      { from: 'them', text: 'we have been talking for 2 weeks now, i feel like i really know you 🥺' },
      { from: 'them', text: 'lets meet at the mall this saturday. just us, it will be fun!' },
    ],
    choices: [
      { id: 'a', text: 'Agree — you have been talking for a while so it feels safe.' },
      { id: 'b', text: 'Say maybe and ask a friend to secretly come along.' },
      { id: 'c', text: 'Decline and tell a trusted adult about the request.' },
      { id: 'd', text: 'Ask them to video call first before deciding.' },
    ],
    correctChoiceId: 'c',
    explanation:
      'Two weeks of online chatting does not mean you truly know someone. Predators build false trust quickly on purpose. Never agree to meet an online stranger alone — decline and immediately tell a trusted adult.',
    didYouKnow:
      'Did you know? In most reported cases of online predatory behaviour, the predator asked to meet in person within the first month of contact.',
  },
  {
    id: 'age-lie-1',
    title: 'Someone reveals they are much older',
    messages: [
      { from: 'them', text: 'ok i have to be honest with you… i am actually 27, not 16.' },
      { from: 'them', text: 'but age is just a number right? i feel more connected to you than anyone my age 💙' },
    ],
    choices: [
      { id: 'a', text: 'Feel flattered — an older person choosing to talk to you is a compliment.' },
      { id: 'b', text: 'Keep talking but be more careful from now on.' },
      { id: 'c', text: 'End the conversation, block them, and tell a trusted adult.' },
      { id: 'd', text: 'Ask them why they lied about their age before deciding.' },
    ],
    correctChoiceId: 'c',
    explanation:
      'An adult who lies about their age to befriend a teenager online is a serious red flag. Age is just a number is a manipulation line. This person broke your trust deliberately — block, report, and tell a trusted adult right away.',
    didYouKnow:
      'Did you know? Studies show that most online predators deliberately misrepresent their age, gender, or appearance during the early stages of grooming.',
  },
  {
    id: 'fake-giveaway-1',
    title: 'Suspicious giveaway asking for your password',
    messages: [
      { from: 'them', text: '🎉 CONGRATS! You have been selected for a FREE 10,000 Robux giveaway!' },
      { from: 'them', text: 'Just DM us your username and password to verify your account. Hurry — only 10 spots left! ⏰' },
    ],
    choices: [
      { id: 'a', text: 'Send your username and password quickly before spots run out.' },
      { id: 'b', text: 'Send only your username but not your password.' },
      { id: 'c', text: 'Ignore it — no real giveaway ever asks for your password.' },
      { id: 'd', text: 'Ask your friends if they got the same message first.' },
    ],
    correctChoiceId: 'c',
    explanation:
      'No legitimate giveaway ever needs your password — ever. This is account theft disguised as a prize. Sharing your password gives strangers full access to your account and any personal information linked to it. Ignore, report, and warn friends.',
    didYouKnow:
      'Did you know? Fake giveaway scams are the number one way teenagers lose access to their gaming accounts. Once your password is stolen, recovery is very difficult.',
  },
  {
    id: 'impersonation-1',
    title: 'Someone claims to be a famous person',
    messages: [
      { from: 'them', text: 'hey it is actually me [famous streamer]. this is my private account 🎮' },
      { from: 'them', text: 'i am selecting fans for an exclusive group. send me your number so i can add you 📲' },
    ],
    choices: [
      { id: 'a', text: 'Send your number — this could be a real opportunity!' },
      { id: 'b', text: 'Ask them to prove it by posting something on their main account.' },
      { id: 'c', text: 'Ignore the message and report the account for impersonation.' },
      { id: 'd', text: 'Share it with friends to see if they think it is real.' },
    ],
    correctChoiceId: 'c',
    explanation:
      'Famous people do not contact random fans from secret accounts asking for phone numbers. This is impersonation — a common tactic to collect personal contact details. Report the account and never share your phone number with strangers online.',
    didYouKnow:
      'Did you know? There are thousands of fake celebrity accounts active on social media at any given time. Platforms remove millions of impersonation accounts every year.',
  },
  {
    id: 'survey-1',
    title: 'Suspicious online survey or form',
    messages: [
      { from: 'them', text: 'hey fill out this quick survey for a school cyber safety project! 📋' },
      { from: 'them', text: 'it asks for your name, age, school, address and daily routine. takes 2 mins!' },
    ],
    choices: [
      { id: 'a', text: 'Fill it out — it sounds like a legitimate school project.' },
      { id: 'b', text: 'Fill in only your name and age but skip the rest.' },
      { id: 'c', text: 'Refuse and report — no real survey needs your address and daily routine.' },
      { id: 'd', text: 'Ask the sender which school they are from before deciding.' },
    ],
    correctChoiceId: 'c',
    explanation:
      'Collecting your address and daily routine gives someone the information to physically locate and track you. Legitimate school surveys never ask for home addresses or daily schedules. This is a data harvesting tactic — refuse, report the link, and tell a trusted adult.',
    didYouKnow:
      'Did you know? Data harvesting through fake forms and surveys is one of the fastest growing online threats targeting teenagers — your daily routine alone is enough to track your movements.',
  },
]