import { atom } from 'nanostores';

const isThemeExist = localStorage.getItem("theme")

export const themeSelected = atom(isThemeExist);