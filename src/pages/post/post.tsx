import { Helmet } from "react-helmet-async";

import { PostHeader } from "./post-header";

export function Post() {
  return (
    <>
      <Helmet title="post" />
      <div className="mx-auto max-w-[904px] px-5 pb-32">
        <PostHeader />

        <main className="w-ful mx-8 my-10 flex flex-col gap-12">
          <p>
            <strong>
              Programming languages all have built-in data structures, but these
              often differ from one language to another.
            </strong>{" "}
            This article attempts to list the built-in data structures available
            in JavaScript and what properties they have. These can be used to
            build other data structures. Wherever possible, comparisons with
            other languages are drawn.
            <br /> <br /> Dynamic typing <br /> JavaScript is a loosely typed
            and dynamic language. Variables in JavaScript are not directly
            associated with any particular value type, and any variable can be
            assigned (and re-assigned) values of all types:
          </p>

          <pre className="p-4 rounded-[2px] bg-base-post">
            {`let foo = 42; // foo is now a number\nfoo = ‘bar’; // foo is now a\nstring foo = true; // foo is now a boolean`}
          </pre>
        </main>
      </div>
    </>
  );
}
