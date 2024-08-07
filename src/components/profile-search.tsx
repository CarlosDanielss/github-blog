import { Input } from "./input";

export function ProfileSearch() {
  return (
    <section className="absolute inset-0 grid h-screen w-full place-content-center backdrop-blur">
      <form className="flex flex-col gap-3 rounded-[10px] bg-base-profile px-10 py-8 shadow-lg">
        <h1 className="mb-2 text-2xl font-bold text-base-title">
          Bem-vindo ao GitHub Blog
        </h1>

        <div>
          <label
            htmlFor="username"
            className="text-md font-medium text-base-span"
          >
            Perfil de usuário
          </label>
          <Input
            id="username"
            type="text"
            placeholder="Digite seu nome de usuário"
          />
        </div>

        <button
          type="submit"
          className="hover:bg-button-hover w-full rounded-md bg-blue px-3 py-2 font-medium text-base-title disabled:cursor-not-allowed disabled:opacity-50"
        >
          Conectar
        </button>
      </form>
    </section>
  );
}
