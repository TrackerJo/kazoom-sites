import type { ComponentType, SVGProps } from "react";
import { Edit, Sparkle, Globe } from "./icons";
import { Reveal } from "./Reveal";
import { useReveal } from "../lib/useReveal";
import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    icon: Edit,
    title: "Tell us about your business",
    body: "Answer a few simple questions about what you do. It takes about ten minutes, and there is no jargon to wade through.",
  },
  {
    icon: Sparkle,
    title: "We build your site",
    body: "Our team designs a site around your business, with your words, your colors and your photos. You review it and ask for any changes.",
  },
  {
    icon: Globe,
    title: "Go live and get found",
    body: "We publish it, connect your domain and set you up to show on Google. After that, updates and hosting are on us.",
  },
];

function Step({
  index,
  icon: Icon,
  title,
  body,
}: {
  index: number;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
}) {
  const { ref, visible } = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      className={`${styles.step} reveal ${visible ? "reveal--in" : ""}`}
      style={{ transitionDelay: `${index * 110}ms` }}
    >
      <div className={styles.marker}>
        <span className={styles.disc}>
          <Icon />
          <span className={styles.num}>{index + 1}</span>
        </span>
      </div>
      <h3 className={styles.stepTitle}>{title}</h3>
      <p className={styles.stepBody}>{body}</p>
    </li>
  );
}

export function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className="container">
        <Reveal>
          <div className={styles.head}>
            <span className="eyebrow">How it works</span>
            <h2 className={styles.title}>
              Three easy steps. We do the hard parts.
            </h2>
          </div>
        </Reveal>

        <ol className={styles.steps}>
          {STEPS.map((step, i) => (
            <Step
              key={step.title}
              index={i}
              icon={step.icon}
              title={step.title}
              body={step.body}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
