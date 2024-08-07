import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

export function PostHeader() {
  return (
    <div className="mt-[-88px] rounded-[10px] bg-base-profile p-8 shadow-md">
      <div className="mb-5 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-xs font-bold uppercase text-blue hover:underline"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          voltar
        </Link>

        <a
          href="#"
          className="flex items-center gap-2 text-xs font-bold uppercase text-blue hover:underline"
        >
          {" "}
          ver no github
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="h-3 w-3"
          />
        </a>
      </div>

      <>
        <h1 className="mb-2 text-2xl font-bold text-base-title">
          JavaScript data types and data structures
        </h1>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1 text-base-span">
            <FontAwesomeIcon
              icon={faGithub}
              className="h-[18px] w-[18px] text-base-label"
            />
            cameronwll
          </span>

          <span className="flex items-center gap-1 text-base-span">
            <FontAwesomeIcon
              icon={faCalendarDay}
              className="h-[18px] w-[18px] text-base-label"
            />
            Há 1 dia
          </span>

          <span className="flex items-center gap-1 text-base-span">
            <FontAwesomeIcon
              icon={faComment}
              className="h-[18px] w-[18px] text-base-label"
            />
            5 comentários
          </span>
        </div>
      </>
    </div>
  );
}
