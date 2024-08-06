export function Card() {
  return (
    <div className="max-w-[416px] cursor-pointer rounded-[10px] border-2 border-transparent bg-base-post p-8 hover:border-base-label">
      <div className="mb-5 flex items-start justify-between gap-4 text-left">
        <h3 className="flex-1 text-xl font-bold text-base-title">
          JavaScript data types and data structures
        </h3>

        <span className="mt-1 text-sm text-base-span">Há 1 dia</span>
      </div>

      <p className="line-clamp-4 overflow-hidden text-ellipsis">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </p>
    </div>
  );
}
