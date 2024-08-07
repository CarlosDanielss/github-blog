import { Helmet } from "react-helmet-async";

import { Profile } from "../../components/profile";
import { PostFilter } from "./post-filter";
import { Card } from "./card";

export function Home() {
  return (
    <>
      <Helmet title="Daniel" />
      <div className="mx-auto max-w-[904px] px-5 pb-32">
        <Profile />
        <main className="w-ful mt-16 flex flex-col gap-12">
          <PostFilter />

          <section className="flex w-full flex-wrap gap-8">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </main>
      </div>
    </>
  );
}
