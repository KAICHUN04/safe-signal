import grooming from './grooming.js'
import cyberbullying from './cyberbullying.js'
import sextortion from './sextortion.js'
import aiDeepfakes from './ai-deepfakes.js'
import phishing from './phishing.js'

export const topics = [
  grooming,
  cyberbullying,
  sextortion,
  aiDeepfakes,
  phishing,
]

export const topicsBySlug = Object.fromEntries(
  topics.map((t) => [t.slug, t]),
)
