// context
import { ProvideLocale } from "../contexts/LocaleContext";
// locales
import Locales from "@/locales/index";

const Provider = ({ children }) => (
  <ProvideLocale locales={Locales}>{children}</ProvideLocale>
);

export default Provider;
