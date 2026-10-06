import React from "react";
import "./Breadcrumb.css";

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

type BreadcrumbAnchorProps = Pick<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "rel" | "download"
>;

export interface BreadcrumbItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>, BreadcrumbAnchorProps {
  current?: boolean;
}

export type BreadcrumbComponent = React.FC<BreadcrumbProps> & {
  Item: React.FC<BreadcrumbItemProps>;
};

const BreadcrumbNav: React.FC<BreadcrumbProps> = ({
  children,
  className = "",
  ...props
}) => {
  return React.createElement(
    "nav",
    {
      className: "nutria-breadcrumb " + className,
      "aria-label": "Breadcrumb",
      ...props,
    },
    React.createElement(
      "ol",
      { className: "nutria-breadcrumb__list" },
      children,
    ),
  );
};

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  href,
  target,
  rel,
  download,
  current = false,
  children,
  className = "",
  ...props
}) => {
  return React.createElement(
    "li",
    { className: "nutria-breadcrumb__item " + className, ...props },
    React.createElement(
      "span",
      { className: "nutria-breadcrumb__separator", "aria-hidden": "true" },
      "/",
    ),
    href && !current
      ? React.createElement(
          "a",
          { className: "nutria-breadcrumb__link", href, target, rel, download },
          children,
        )
      : React.createElement(
          "span",
          {
            className: "nutria-breadcrumb__current",
            "aria-current": current ? "page" : undefined,
          },
          children,
        ),
  );
};

export const Breadcrumb: BreadcrumbComponent = Object.assign(BreadcrumbNav, {
  Item: BreadcrumbItem,
});

export { BreadcrumbItem };

export default Breadcrumb;
