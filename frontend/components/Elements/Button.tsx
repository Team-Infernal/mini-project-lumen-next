import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type ButtonProps = {
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  anchorClassName?: string;
  icon?: IconDefinition;
  iconClassName?: string;
  onClick?: () => void;
  loading?: boolean;
  done?: boolean;
  doneIcon?: IconDefinition;
  doneIconClassName?: string;
  children?: React.ReactNode;
};

const Button = ({
  className = "",
  type = "button",
  href,
  anchorClassName = "",
  icon,
  iconClassName = "",
  onClick,
  loading = false,
  done = false,
  doneIcon = faCheck,
  doneIconClassName,
  children,
}: ButtonProps) => {
  doneIconClassName ??= iconClassName;
  const hasHref = !!href;
  const hasIcon = !!icon;

  const Icon = () => {
    if (done) {
      return <FontAwesomeIcon icon={doneIcon} className={doneIconClassName} />;
    }
    if (hasIcon && !loading) {
      return <FontAwesomeIcon icon={icon} className={iconClassName} />;
    }
    return null;
  };

  const BaseButton = () => (
    <button
      type={type}
      data-type="interact"
      className={cn(`btn animate-none cursor-none interactable ${className}`, {
        "gap-2": hasIcon,
        loading: loading && !done,
      })}
      onClick={onClick}
    >
      <Icon />
      {children}
    </button>
  );

  if (hasHref) {
    return (
      <Link href={href}>
        <a className={anchorClassName}>
          <BaseButton />
        </a>
      </Link>
    );
  }

  return <BaseButton />;
};

export default Button;
