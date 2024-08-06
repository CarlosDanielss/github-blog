export function PostFilter() {
  return (
    <form>
      <div className="mb-3 flex items-center justify-between">
        <label
          htmlFor="content"
          className="text-lg font-bold text-base-subtitle"
        >
          Publicações
        </label>

        <span className="text-sm text-base-span">6 publicações</span>
      </div>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        className="text-md w-full rounded-md border-[1px] border-base-border bg-base-input px-4 py-3 outline-none placeholder:text-base-label focus:border-blue"
      />
    </form>
  );
}
