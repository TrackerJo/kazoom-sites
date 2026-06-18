import { Check } from '../../components/icons'
import s from '../Story.module.css'

type Todo = { label: string; done: boolean }

const TODOS: Todo[] = [
  { label: 'Open up the shop', done: true },
  { label: 'Serve the morning rush', done: true },
  { label: 'Reorder what sold out', done: true },
  { label: 'Square up the books', done: true },
  { label: 'Build a website', done: false },
]

/** Chapter 1 — empathy. The owner's day checks itself off; the website never does. */
export function Reality() {
  // Rows rise in sequence; the completed ones tick off a beat later.
  const appearAt = (i: number) => 0.55 + i * 0.34
  const doneAt = (i: number) => appearAt(i) + 0.55

  return (
    <div className={`${s.chapterInner} ${s.realityInner}`}>
      <h2 className={s.bigline} aria-label="You started a business. Not a website.">
        <span className={s.lineMask}>
          <span className={`${s.lineFill} ${s.aWipe}`} style={{ animationDelay: '0.1s' }}>
            You started a business.
          </span>
        </span>
        <span className={s.lineMask}>
          <span
            className={`${s.lineFill} ${s.muted} ${s.aWipe}`}
            style={{ animationDelay: '0.24s' }}
          >
            Not a website.
          </span>
        </span>
      </h2>

      <ul className={s.todoList} aria-hidden="true">
        {TODOS.map((t, i) => (
          <li
            key={t.label}
            className={`${s.todo} ${t.done ? '' : s.todoOpen} ${s.aRise}`}
            style={{ animationDelay: `${appearAt(i)}s` }}
          >
            <span className={s.todoBox}>
              {t.done ? (
                <span
                  className={`${s.todoCheck} ${s.aPop}`}
                  style={{ animationDelay: `${doneAt(i)}s` }}
                >
                  <Check />
                </span>
              ) : (
                <span className={`${s.todoPulse} ${s.aPulse}`} />
              )}
            </span>
            <span className={s.todoLabel}>
              {t.label}
              {t.done && (
                <span
                  className={`${s.strike} ${s.aStrike}`}
                  style={{ animationDelay: `${doneAt(i) + 0.05}s` }}
                  aria-hidden="true"
                />
              )}
            </span>
            {!t.done && <span className={s.todoTag}>still waiting</span>}
          </li>
        ))}
      </ul>

      <p className={`${s.note} ${s.aRise}`} style={{ animationDelay: '2.4s' }}>
        There is always something more urgent. So the website waits. And waits.
      </p>
    </div>
  )
}
