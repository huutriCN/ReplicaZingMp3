import { ProvideLocale } from "../contexts/LocaleContext";

const Provider = ({ children }) => <ProvideLocale>{children}</ProvideLocale>;

export default Provider;
