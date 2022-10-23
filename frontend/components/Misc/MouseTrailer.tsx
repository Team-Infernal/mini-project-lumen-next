import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faArrowRight,
  faArrowUpRightFromSquare,
  faCircle,
  faICursor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

import animateTrailer from "utils/animateTrailer";

const MouseTrailer = () => {
  const trailerRef = useRef<HTMLDivElement>(null);
  const [icon, setIcon] = useState<IconDefinition | null>(null);

  const getTrailerIcon = (type: InteractableType) => {
    switch (type) {
      case "link":
        return faArrowRight;
      case "back-link":
        return faArrowLeft;
      case "external-link":
        return faArrowUpRightFromSquare;
      case "interact":
        return faCircle;
      case "text":
        return faICursor;
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!trailerRef.current) {
        return;
      }

      const target = event.target as HTMLElement;
      const interactable = target.closest(
        ".interactable"
      ) as HTMLElement | null;
      const interacting = !!interactable;

      animateTrailer(event, trailerRef.current, interacting);

      if (interacting) {
        setIcon(getTrailerIcon(interactable.dataset.type as InteractableType));
      } else {
        setIcon(null);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="trailer" ref={trailerRef}>
      {!!icon && (
        <FontAwesomeIcon
          icon={icon}
          className="text-primary text-sm antialiased"
          fixedWidth
        />
      )}
    </div>
  );
};

export default MouseTrailer;

type InteractableType =
  | "link"
  | "back-link"
  | "external-link"
  | "interact"
  | "text";
