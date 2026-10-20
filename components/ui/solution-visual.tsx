"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Layers,
  Workflow,
} from "lucide-react";
import type { Locale } from "@/lib/site";
export function SolutionVisual({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const ru = locale === "ru";
  const modes = [
    {
      label: "Web",
      code: "build_website",
      result: ru
        ? "Интерфейс под вашу задачу"
        : "An interface for your challenge",
    },
    {
      label: "Python",
      code: "automate_workflow",
      result: ru ? "Меньше ручной работы" : "Less repetitive work",
    },
    {
      label: "AI",
      code: "connect_intelligence",
      result: ru ? "Инструменты с AI-функциями" : "Tools with AI capabilities",
    },
  ];
  return (
    <div
      className="visual"
      aria-label={
        ru
          ? "Интерактивная иллюстрация направлений работы"
          : "Interactive illustration of development services"
      }
    >
      <div className="visual-grid" />
      <span className="visual-caption">
        {ru ? "ИДЕЯ → КОД → ПРОДУКТ" : "IDEA → CODE → PRODUCT"}
      </span>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="float-chip chip-top">
        <Layers size={16} />
        <span>{ru ? "Ваша идея" : "Your idea"}</span>
        <span className="chip-dot" />
      </div>
      <div className="code-window">
        <div className="window-bar">
          <span className="window-dots">
            <i />
            <i />
            <i />
          </span>
          <span>solution.py</span>
          <Code2 size={14} />
        </div>
        <div className="code-content">
          <div>
            <span className="line-no">01</span>
            <span className="purple">from</span> idea{" "}
            <span className="purple">import</span> solution
          </div>
          <div className="code-space">
            <span className="line-no">02</span>
          </div>
          <div>
            <span className="line-no">03</span>
            <span className="purple">def</span>{" "}
            <span className="code-blue">{modes[active].code}</span>():
          </div>
          <div>
            <span className="line-no">04</span> goal ={" "}
            <span className="code-green">&quot;your next move&quot;</span>
          </div>
          <div>
            <span className="line-no">05</span>{" "}
            <span className="purple">return</span> solution(goal)
          </div>
          <div className="code-space">
            <span className="line-no">06</span>
          </div>
          <div>
            <span className="line-no">07</span>
            <span className="muted">
              # let&apos;s build something meaningful
            </span>
          </div>
        </div>
        <div className="window-footer">
          <span>
            <span className="live-dot" /> Python
          </span>
          <span>UTF-8</span>
        </div>
      </div>
      <div className="float-chip chip-bottom">
        <span className="result-icon">
          <Check size={16} />
        </span>
        <span>
          <small>{ru ? "РЕЗУЛЬТАТ" : "THE RESULT"}</small>
          {modes[active].result}
        </span>
        <ArrowUpRight size={17} />
      </div>
      <span className="braces-float">
        <Braces size={32} />
      </span>
      <div
        className="visual-controls"
        aria-label={ru ? "Направление работы" : "Development focus"}
      >
        {modes.map((m, i) => (
          <button
            key={m.label}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            className={active === i ? "active" : ""}
          >
            {i === 0 ? (
              <Code2 size={13} />
            ) : i === 1 ? (
              <Workflow size={13} />
            ) : (
              <Braces size={13} />
            )}{" "}
            {m.label}
          </button>
        ))}
      </div>
    </div>
  );
}
