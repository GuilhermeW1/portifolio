import { json, type LinksFunction, type LoaderFunction, type LoaderArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";

import stylesheet from '~/tailwind.css';

import { ThemeProvider } from "./ui/theme/theme-provider";
import { getTheme } from "./ui/theme/getTheme";
import { Theme } from "./ui/theme/utils";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const loader: LoaderFunction = async ({request}: LoaderArgs) => {
  const theme = await getTheme(request);
  return json(theme);
};

export function ErrorBoundary(){
  const error = useRouteError();

  if(isRouteErrorResponse(error)){
    return (
      <div>
        <h1>{error.status} {error.statusText}</h1>
        <p>{error.data}</p>
      </div>
    );
  }else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

export default function App() {
  const data = useLoaderData<typeof loader>();
  const { theme } = data;
  return (  
    <html lang="en" className={theme === Theme.DARK ? 'dark' : ""}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className=" bg-light-400 dark:bg-dark-400">
        <ThemeProvider theme={theme}>
          <Outlet />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
