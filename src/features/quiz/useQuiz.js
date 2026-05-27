import { useMemo, useState } from 'react'
import { readJSON, writeJSON, remove } from '../../lib/storage'
import { scenarios } from './quizData'

const STORAGE_KEY = 'quiz:lastResult'

export function useQuiz() {
  const total = scenarios.length
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState(() => [])
  const current = scenarios[idx]

  const progress = useMemo(() => {
    if (total === 0) return 0
    return Math.round(((idx + 1) / total) * 100)
  }, [idx, total])

  function answer(choiceId) {
    const isCorrect = choiceId === current.correctChoiceId
    setAnswers((prev) => [
      ...prev,
      { scenarioId: current.id, choiceId, isCorrect },
    ])
    if (isCorrect) setScore((s) => s + 1)
    return { isCorrect, explanation: current.explanation, correctChoiceId: current.correctChoiceId }
  }

  function next() {
    setIdx((i) => Math.min(i + 1, total - 1))
  }

  function isLast() {
    return idx >= total - 1
  }

  function reset() {
    setIdx(0)
    setScore(0)
    setAnswers([])
    remove(STORAGE_KEY)
  }

  function persistResult() {
    const result = {
      completedAt: Date.now(),
      total,
      score,
      answers,
    }
    writeJSON(STORAGE_KEY, result)
    return result
  }

  return {
    idx,
    total,
    score,
    answers,
    current,
    progress,
    answer,
    next,
    isLast,
    reset,
    persistResult,
  }
}

export function readLastResult() {
  return readJSON(STORAGE_KEY, null)
}

