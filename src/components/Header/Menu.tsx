import { cx } from "@emotion/css";
import { Link } from "@tanstack/react-location";
import { useTranslation } from "react-i18next";

interface MenuProps {
  isMobile?: boolean;
  open?: boolean;
}
export const Menu: React.FC<MenuProps> = ({ isMobile, open }) => {
  const { t } = useTranslation();

  return (
    <ul
      className={cx("menu", {
        "desktop-menu": !isMobile,
        "mobile-menu": isMobile,
        open,
      })}
    >
      <li>
        <a href="https://minimetis.com">{t("backToMinimetis")}</a>
      </li>
      <li>
        <Link to="/">{t("home")}</Link>
      </li>
      <li>
        <Link to="/mint">{t("mint")}</Link>
      </li>
      <li>
        <Link to="/public-mint">{t("publicMint")}</Link>
      </li>
      {/* <li>
        <Link to="/roadmap">{t("roadmap")}</Link>
      </li> */}
    </ul>
  );
};
