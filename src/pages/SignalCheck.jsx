import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../components/Container'
import { IconQuiz } from '../components/icons'
import { useQuiz } from '../features/quiz/useQuiz'
import { shuffleArray } from '../lib/shuffle'

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m18 6-12 12M6 6l12 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function SignalCheck() {
  return <SignalCheckInner />
}

function SignalCheckInner() {
  const navigate = useNavigate()
  const quiz = useQuiz()

  const [feedback, setFeedback] = useState(null)
  const [selected, setSelected] = useState(null)

  const questionLabel = useMemo(() => {
    return `Question ${quiz.idx + 1} of ${quiz.total}`
  }, [quiz.idx, quiz.total])

  const shuffledChoices = useMemo(() => {
    return shuffleArray(quiz.current.choices)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reshuffle per question only
  }, [quiz.idx, quiz.current.id])

  const systemPill = useMemo(() => {
    // Keep it generic; the quiz scenario text still comes from data.
    return 'A stranger just sent you a message request on Discord'
  }, [])

  function choose(choiceId) {
    if (feedback) return

    setSelected(choiceId)
    const result = quiz.answer(choiceId)
    setFeedback(result)
  }

  function next() {
    setFeedback(null)
    setSelected(null)

    if (quiz.isLast()) {
      quiz.persistResult()
      navigate('/signal-report')
      return
    }

    quiz.next()
  }

  const correctChoiceId = feedback?.correctChoiceId
  const isAnswered = Boolean(feedback)

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="space-y-5">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-indigo-200 to-fuchsia-200 bg-clip-text text-transparent">
                Signal Check
              </span>
            </h1>
          </div>

          {/* Progress header */}
          <div>
            <div className="text-xs font-semibold text-slate-300">
              {questionLabel}
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10">
              <div
                className="h-full w-full rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400 transition-[width] duration-500 ease-out"
                style={{ width: `${quiz.progress}%` }}
              />
            </div>
          </div>

          {/* Scenario header */}
          <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
            <div className="flex items-center gap-4">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500/25 to-fuchsia-500/20 ring-1 ring-white/10 neon-ring">
                <IconQuiz className="h-5 w-5 text-indigo-200" />
              </div>
              <div>
                <div className="text-sm font-extrabold">
                  <span className="bg-gradient-to-r from-indigo-200 to-fuchsia-200 bg-clip-text text-transparent">
                    Scenario {quiz.idx + 1}
                  </span>
                </div>
                <div className="text-xs text-slate-400">Read carefully</div>
              </div>
              <div className="ml-auto flex items-center gap-3">
                <div className="hidden text-sm font-bold text-indigo-200 sm:block">
                  Score: {quiz.score}
                </div>
                {quiz.streak >= 2 && (
                  <div className="flex items-center gap-1 rounded-full bg-orange-500/20 px-3 py-1 text-xs font-extrabold text-orange-300 ring-1 ring-orange-400/30">
                    🔥 {quiz.streak} streak
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Chat scenario */}
          <div className="rounded-3xl bg-[#0B1030]/60 p-5 ring-1 ring-white/10">
            <div className="mx-auto w-fit rounded-full bg-white/5 px-4 py-1 text-xs font-semibold text-slate-300 ring-1 ring-white/10">
              {systemPill}
            </div>

            <div className="mt-4 space-y-3">
              {quiz.current.messages.map((m, i) => (
                <div key={i} className="flex justify-start">
                  <div className="max-w-[92%] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100">
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Question */}
          <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
            <div className="text-base font-extrabold">
              <span className="bg-gradient-to-r from-indigo-200 to-fuchsia-200 bg-clip-text text-transparent">
                What&apos;s the safest response?
              </span>
            </div>
            <div className="mt-1 text-xs text-slate-400">
              Choose the safest response
            </div>
          </div>

          {/* Choices */}
          <div className="space-y-3">
            {shuffledChoices.map((c) => {
              const isCorrect = c.id === correctChoiceId
              const isSelected = c.id === selected

              const border =
                isAnswered && isCorrect
                  ? 'border-emerald-300/70 bg-emerald-500/10'
                  : isAnswered && isSelected && !isCorrect
                    ? 'border-rose-300/70 bg-rose-500/10'
                    : 'border-white/10 bg-white/5'

              const iconBg =
                isAnswered && isCorrect
                  ? 'text-emerald-100 bg-emerald-500/20 ring-emerald-400/30'
                  : isAnswered && isSelected && !isCorrect
                    ? 'text-rose-100 bg-rose-500/20 ring-rose-400/30'
                    : 'text-slate-300 bg-white/5 ring-white/10'

              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => choose(c.id)}
                  disabled={isAnswered}
                  className={[
                    'w-full rounded-3xl border p-4 text-left transition',
                    border,
                    isAnswered ? 'cursor-default' : 'hover:bg-white/8',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={[
                        'mt-0.5 grid h-6 w-6 place-items-center rounded-full ring-1',
                        iconBg,
                      ].join(' ')}
                      aria-hidden="true"
                    >
                      {isAnswered ? (
                        isCorrect ? (
                          <IconCheck />
                        ) : isSelected ? (
                          <IconX />
                        ) : (
                          <span className="h-2 w-2 rounded-full border border-white/20" />
                        )
                      ) : (
                        <span className="h-2 w-2 rounded-full border border-white/20" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div
                        className={[
                          'text-sm font-extrabold',
                          isAnswered && isSelected && !isCorrect
                            ? 'text-rose-100'
                            : isAnswered && isCorrect
                              ? 'text-emerald-100'
                              : 'text-slate-100',
                        ].join(' ')}
                      >
                        {c.text}
                      </div>

                      {isAnswered && isSelected && !isCorrect ? (
                        <div className="mt-2 text-xs leading-relaxed text-rose-100/90">
                          {feedback.explanation}
                        </div>
                      ) : null}

                      {isAnswered && !isSelected && isCorrect ? (
                        <div className="mt-2 text-xs leading-relaxed text-emerald-100/90">
                          Perfect. This keeps the interaction safer and easier to
                          report.
                        </div>
                      ) : null}

                      {isAnswered && isSelected && isCorrect ? (
                        <div className="mt-2 text-xs leading-relaxed text-emerald-100/90">
                          Nice choice. This keeps you safer and easier to report
                          if something still feels off.
                        </div>
                      ) : null}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
          
          {/* Did You Know */}
          {isAnswered && feedback?.didYouKnow && (
            <div className="rounded-3xl bg-indigo-500/10 p-4 ring-1 ring-indigo-400/20">
              <div className="flex items-start gap-3">
                <span className="text-lg">💡</span>
                <p className="text-xs leading-relaxed text-indigo-200">
                  {feedback.didYouKnow}
                </p>
              </div>
            </div>
          )}
          
          {/* Next */}
          <div className="pt-2">
            <button
              type="button"
              onClick={next}
              disabled={!isAnswered}
              className={[
                'w-full rounded-2xl px-6 py-3 text-sm font-extrabold text-slate-900',
                'bg-gradient-to-r from-sky-400 to-fuchsia-400',
                'shadow-lg shadow-fuchsia-500/20',
                !isAnswered ? 'opacity-50' : '',
              ].join(' ')}
            >
              {quiz.isLast() ? 'See Results' : 'Next Question'}
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

