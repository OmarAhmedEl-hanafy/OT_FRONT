import React from "react";
import { Link } from "react-router-dom";

export function Breadcrumb({ links, courseId }: any) {
  return (
    <div className="flex items-center pb-4 whitespace-nowrap">
      {links.map((link: any, ind: any) => (
        <React.Fragment key={ind}>
          <Link
            to={`/${ind == links.length - 1 ? "courses/" + courseId : link} `}
            className={`${
              ind == links.length - 1 ? "text-main-color" : "text-main-color/75"
            } hover:underline hover:underline-offset-2`}
          >
            {link}
          </Link>
          <span className="mx-5 text-main-color/75 dark:text-main-color/75 rtl:-scale-x-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}
