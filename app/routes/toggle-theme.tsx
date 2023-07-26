import { json, type ActionArgs, type ActionFunction } from "@remix-run/node";
import { getThemeSession } from "~/ui/theme/getTheme";
import { isTheme } from "~/ui/theme/utils";

export const action: ActionFunction = async ({request}: ActionArgs) => {
  const themeSession = await getThemeSession(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const theme = form.get("theme");

  if(!isTheme(theme)){
    return json({
      success: false,
      message: `theme valuer of ${theme} is not a valid theme`
    });
  }

  themeSession.setTheme(theme);
  return json({success: true}, {headers: {'Set-Cookie': await themeSession.commit()}});
};
