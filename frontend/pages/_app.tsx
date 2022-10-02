import { setDefaultOptions } from "date-fns";
import { fr } from "date-fns/locale";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from "next/app";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "styles/globals.css";

config.autoAddCss = false;
setDefaultOptions({
  locale: fr,
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
