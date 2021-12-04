export const setTheme = (theme?: 'dark' | 'light' | 'system') => {
  console.log(theme);

  if (theme === 'dark') {
    localStorage.theme = 'dark';
  } else {
    localStorage.removeItem('theme');
  }

  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.dataset.theme = 'dark';
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
};
