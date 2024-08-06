import { PostFilter } from "./post-filter";
import { Profile } from "../../components/profile";
import { Card } from "./card";

export function Home() {
  return (
    <div className="mx-auto my-[-88px] max-w-[904px] px-5 pb-32">
      <Profile />
      <main className="w-ful mt-16 flex flex-col gap-12">
        <PostFilter />

        <section className="flex w-full gap-8 flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </div>
  );
}
