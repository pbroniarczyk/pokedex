import { FC } from "react";
import Link from "next/link";

type Props = {
  className?: string;
  link: string;
  label: string;
};

const Navigation: FC<Props> = ({ className, label, link }) => {
  return (
    <div className={`navigation ${className}`}>
      <Link href={link}>{label}</Link>
    </div>
  );
};

export default Navigation;
