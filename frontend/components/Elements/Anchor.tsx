import Link from "next/link";

type AnchorProps = {
  className?: string;
  href: string;
  local?: boolean;
  children?: React.ReactNode;
};

const Anchor = ({
  className = "",
  href,
  local = true,
  children,
}: AnchorProps) => {
  if (local) {
    return (
      <Link href={href}>
        <a data-type="link" className={`cursor-none interactable ${className}`}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default Anchor;
