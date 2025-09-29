import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const Breadcrumb = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((x) => x);

  /** making a dynamic breadcrumb using the url or routes or pathname or params... */
  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    ...pathname.map((segment, index) => ({
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      link: `/${pathname.slice(0, index + 1).join("/")}`,
    })),
  ];

  return (
    <div className="w-fit flex items-center gap-x-2">
      {breadcrumbPaths.map((path, index) => {
        const isLast = index === breadcrumbPaths.length - 1;
        return (
          <React.Fragment key={index}>
            {isLast ? (
              <p className="md:text-base text-sm font-normal text-zinc-400">
                {path.name}
              </p>
            ) : (
              <>
                <Link
                  to={path.link}
                  className="md:text-base text-sm font-normal text-zinc-300 hover:text-zinc-100"
                >
                  {path.name}
                </Link>
                {/** separator */}
                <span className="md:text-base text-sm font-normal text-zinc-200 ml-2">
                  /
                </span>
              </>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
