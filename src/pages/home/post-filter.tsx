import { Input } from "../../components/input";

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

      <Input type="text" placeholder="Buscar conteúdo" />
    </form>
  );
}
