import { PrsmMock } from "../../components/PrsmMock";
import { Phone, Edit, Globe } from "../../components/icons";
import s from "../Story.module.css";

const STEPS = [
  {
    icon: Phone,
    title: "We talk for 10 minutes",
    body: "You tell me about your business. That is all I need to start.",
  },
  {
    icon: Edit,
    title: "I build your site",
    body: "Design, words and photos, all handled for you.",
  },
  {
    icon: Globe,
    title: "You go live",
    body: "On your own domain, ready for customers to find.",
  },
];

/** Chapter 4 — proof. The three steps light up while a real site assembles. */
export function Proof() {
  return (
    <div className={`${s.chapterInner} ${s.proofInner}`}>
      <div className={s.proofCopy}>
        <span
          className={`${s.kicker} ${s.aRise}`}
          style={{ animationDelay: "0.1s" }}
        >
          How it works
        </span>
        <h2 className={s.bigline}>
          <span className={s.lineMask}>
            <span
              className={`${s.lineFill} ${s.aWipe}`}
              style={{ animationDelay: "0.2s" }}
            >
              Live in about
            </span>
          </span>
          <span className={s.lineMask}>
            <span
              className={`${s.lineFill} ${s.aWipe}`}
              style={{ animationDelay: "0.32s" }}
            >
              a week.
            </span>
          </span>
        </h2>

        <ol className={s.steps}>
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <li
                className={`${s.step} ${s.aRise}`}
                key={step.title}
                style={{ animationDelay: `${0.7 + i * 0.28}s` }}
              >
                <span
                  className={`${s.stepIcon} ${s.aPop}`}
                  style={{ animationDelay: `${0.85 + i * 0.28}s` }}
                >
                  <Icon />
                </span>
                <span className={s.stepText}>
                  <span className={s.stepTitle}>
                    <span className={s.stepNum}>{i + 1}</span>
                    {step.title}
                  </span>
                  <span className={s.stepBody}>{step.body}</span>
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      <div
        className={`${s.proofVisual} ${s.aRise}`}
        style={{ animationDelay: "0.5s" }}
      >
        <PrsmMock className={s.proofSite} />
        <span
          className={`${s.buildSweep} ${s.aSweep}`}
          style={{ animationDelay: "0.9s" }}
          aria-hidden="true"
        />
        {/* <span className={`${s.liveBadge} ${s.aLive}`} style={{ animationDelay: '2.3s' }}>
          <span className={s.liveDot} aria-hidden="true" />
          prsmallergy.org is live
        </span> */}
      </div>
    </div>
  );
}
