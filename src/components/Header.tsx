import { type FC, type PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{ image: { src: string; alt: string } }>;
const Header: FC<HeaderProps> = ({ image: { src, alt }, children }) => {
  return (
    <header>
      <img src={src} alt={alt} />
      {children}
    </header>
  );
};

export default Header;
