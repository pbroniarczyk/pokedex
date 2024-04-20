import { FC, ReactElement } from "react";
import Link from "next/link";

type Props = {
  className?: string;
  link: string;
  label?: string;
  icon?: ReactElement;
};

const Navigation: FC<Props> = ({ className, icon, label, link }) => {
  return (
    <div className={`navigation ${className}`}>
      <Link href={link}>
        {icon}
        {label}
      </Link>
    </div>
  );
};

export default Navigation;
