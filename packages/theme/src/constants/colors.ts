export const colorTokens = {
  primary: {
    50: "hsl(240, 100%, 98%)",
    100: "hsl(240, 95%, 94%)",
    200: "hsl(240, 90%, 88%)",
    300: "hsl(240, 85%, 80%)",
    400: "hsl(240, 80%, 70%)",
    500: "hsl(240, 75%, 60%)",
    600: "hsl(240, 70%, 50%)",
    700: "hsl(240, 65%, 40%)",
    800: "hsl(240, 60%, 30%)",
    900: "hsl(240, 55%, 20%)",
  },
  accent: {
    50: "hsl(280, 100%, 98%)",
    100: "hsl(280, 95%, 94%)",
    200: "hsl(280, 90%, 88%)",
    300: "hsl(280, 85%, 80%)",
    400: "hsl(280, 80%, 70%)",
    500: "hsl(280, 75%, 60%)",
    600: "hsl(280, 70%, 50%)",
    700: "hsl(280, 65%, 40%)",
    800: "hsl(280, 60%, 30%)",
    900: "hsl(280, 55%, 20%)",
  },

  semantic: {
    success: {
      light: "hsl(142, 76%, 36%)",
      dark: "hsl(142, 71%, 45%)",
    },
    warning: {
      light: "hsl(38, 92%, 50%)",
      dark: "hsl(38, 98%, 64%)",
    },
    error: {
      light: "hsl(0, 84%, 60%)",
      dark: "hsl(0, 84%, 65%)",
    },
    info: {
      light: "hsl(200, 98%, 39%)",
      dark: "hsl(200, 98%, 45%)",
    },
  },

  neutral: {
    50: "hsl(0, 0%, 98%)",
    100: "hsl(0, 0%, 96%)",
    200: "hsl(0, 0%, 90%)",
    300: "hsl(0, 0%, 83%)",
    400: "hsl(0, 0%, 64%)",
    500: "hsl(0, 0%, 45%)",
    600: "hsl(0, 0%, 32%)",
    700: "hsl(0, 0%, 25%)",
    800: "hsl(0, 0%, 15%)",
    900: "hsl(0, 0%, 9%)",
  },
} as const;

export const lightThemeColors = {
  background: "hsl(0, 0%, 100%)",
  foreground: "hsl(240, 10%, 3.9%)",
  card: "hsl(0, 0%, 100%)",
  "card-foreground": "hsl(240, 10%, 3.9%)",
  popover: "hsl(0, 0%, 100%)",
  "popover-foreground": "hsl(240, 10%, 3.9%)",
  muted: "hsl(240, 4.8%, 95.9%)",
  "muted-foreground": "hsl(240, 3.8%, 46.1%)",
  accent: "hsl(240, 4.8%, 95.9%)",
  "accent-foreground": "hsl(240, 5.9%, 10%)",
  border: "hsl(240, 5.9%, 90%)",
  input: "hsl(240, 5.9%, 90%)",
  ring: "hsl(240, 5%, 64.9%)",
} as const;

export const darkThemeColors = {
  background: "hsl(240, 10%, 3.9%)",
  foreground: "hsl(0, 0%, 98%)",
  card: "hsl(240, 10%, 3.9%)",
  "card-foreground": "hsl(0, 0%, 98%)",
  popover: "hsl(240, 10%, 3.9%)",
  "popover-foreground": "hsl(0, 0%, 98%)",
  muted: "hsl(240, 3.7%, 15.9%)",
  "muted-foreground": "hsl(240, 5%, 64.9%)",
  accent: "hsl(240, 3.7%, 15.9%)",
  "accent-foreground": "hsl(0, 0%, 98%)",
  border: "hsl(240, 3.7%, 15.9%)",
  input: "hsl(240, 3.7%, 15.9%)",
  ring: "hsl(240, 4.9%, 83.9%)",
} as const;
