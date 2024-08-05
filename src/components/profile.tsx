import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Profile() {
  return (
    <div className="flex gap-8 rounded-[10px] bg-base-profile px-10 py-8 shadow-md">
      <img
        src="https://www.agendartecultura.com.br/wp-content/uploads/2022/12/meneson.jpg"
        className="h-[148px] w-[148px] rounded-lg object-cover"
      />

      <div className="flex flex-col gap-6">
        <div className="relative">
          <h1 className="mb-2 text-2xl font-bold text-base-title">
            Cameron Williamson
          </h1>

          <p className="text-md">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <a
            href="#"
            className="absolute right-0 top-1 flex items-center gap-2 text-xs font-bold text-blue hover:underline"
          >
            {" "}
            GITHUB
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="h-3 w-3"
            />
          </a>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1 text-base-subtitle">
            <FontAwesomeIcon
              icon={faGithub}
              className="h-[18px] w-[18px] text-base-label"
            />
            cameronwll
          </span>

          <span className="flex items-center gap-1 text-base-subtitle">
            <FontAwesomeIcon
              icon={faBuilding}
              className="h-[18px] w-[18px] text-base-label"
            />
            Rocketseat
          </span>

          <span className="flex items-center gap-1 text-base-subtitle">
            <FontAwesomeIcon
              icon={faUserGroup}
              className="h-[18px] w-[18px] text-base-label"
            />
            32 seguidores
          </span>
        </div>
      </div>
    </div>
  );
}
