import { atom } from "nanostores";

const availableThemes = ["light", "sunset", "dark"];

// Function to get the theme from localStorage or default to the first theme
export const getTheme = () => {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme && availableThemes.includes(storedTheme) 
      ? storedTheme 
      : availableThemes[0];
  }
  return availableThemes[0];
};

export const theme = atom(getTheme());

export function setNextTheme(t: string) {
  theme.set(t);
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', t);
  }
}

// Function to set the theme on initial load
export function initTheme() {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme && availableThemes.includes(storedTheme)) {
      theme.set(storedTheme);
    }
  }
}