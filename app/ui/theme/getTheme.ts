import { createCookieSessionStorage } from "@remix-run/node";
import type { Theme} from "./utils";
import { DEFAULT_THEME, isTheme } from "./utils";

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: '__app_theme',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === 'production',
  },
});


async function getThemeSession(request: Request){
  const session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => {
      const themeValue = session.get('theme');
      return isTheme(themeValue) ? themeValue : null;
    },
    setTheme: (theme: Theme) => session.set('theme', theme),
    commit: () => themeStorage.commitSession(session),
  };
}

async function getTheme(request: Request): Promise<{theme: Theme}>{
  const themeSession = await getThemeSession(request);
  const themeSes = themeSession.getTheme();
  if(themeSes){
    return {theme: themeSes};
  }

  const headerValue = request.headers.get('sec-ch-prefers-color-scheme');
  if(isTheme(headerValue)){
    return {theme: headerValue};
  }

  return {theme: DEFAULT_THEME};
}

export { getTheme, getThemeSession };