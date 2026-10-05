import React from "react";
import "./Progress.css";

const DEFAULT_MAX = 100;

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  label?: string;
  showValue?: boolean;
}

const normalizeProgress = (value: number, max: number) => {
  const safeMax = Number.isFinite(max) && max > 0 ? max : DEFAULT_MAX;
  const safeValue = Number.isFinite(value) ? value : 0;

  return {
    max: safeMax,
    current: Math.min(safeMax, Math.max(0, safeValue)),
  };
};

export const getProgressPercentage = (value = 0, max = DEFAULT_MAX): number => {
  const { max: safeMax, current } = normalizeProgress(value, max);

  return (current / safeMax) * 100;
};

export const Progress: React.FC<ProgressProps> = ({
  value = 0,
  max = DEFAULT_MAX,
  label,
  showValue = false,
  className = "",
  ...props
}) => {
  const { max: safeMax, current } = normalizeProgress(value, max);
  const percentage = (current / safeMax) * 100;

  return React.createElement(
    "div",
    { className: "nutria-progress " + className, ...props },
    label || showValue
      ? React.createElement(
          "div",
          { className: "nutria-progress__header" },
          label
            ? React.createElement(
                "span",
                { className: "nutria-progress__label" },
                label,
              )
            : null,
          showValue
            ? React.createElement(
                "span",
                { className: "nutria-progress__value" },
                Math.round(percentage) + "%",
              )
            : null,
        )
      : null,
    React.createElement(
      "div",
      {
        className: "nutria-progress__track",
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": safeMax,
        "aria-valuenow": Math.round(current),
        "aria-label": label,
      },
      React.createElement("div", {
        className: "nutria-progress__fill",
        style: { width: percentage + "%" },
      }),
    ),
  );
};

export default Progress;
