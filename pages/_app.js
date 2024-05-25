import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-wrap-balancer";
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Provider>
        <Component {...pageProps} />
        <SpeedInsights />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
