enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
};

const PREFERS_DARK_MQ = '(prefers-color-scheme: dark)';
const DEFAULT_THEME = Theme.LIGHT;
const DEFAULT_COLOR_SCHEME = 'light dark';

function getPrefers(){
  if(typeof document !== 'undefined'){
    const prefers = window.matchMedia(PREFERS_DARK_MQ).matches ? Theme.DARK : Theme.LIGHT;
    if(prefers){
      return prefers;
    }else {
      return DEFAULT_THEME;
    }
  }else {
    return DEFAULT_THEME;
  }
}

function getPreferredTheme(theme: Theme | null){
  if(theme){
    return theme;
  }else{
    return getPrefers();
  }
}


function isTheme(value: unknown): value is Theme{
  const themes = Object.values(Theme);
  return typeof value === 'string' && themes.includes(value as Theme);
}

export {
  Theme,
  getPreferredTheme,
  PREFERS_DARK_MQ,
  DEFAULT_COLOR_SCHEME,
  DEFAULT_THEME,
  isTheme
};