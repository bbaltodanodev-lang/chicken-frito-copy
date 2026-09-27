import localFont from "next/font/local";

export const geistSans = localFont({
  src: "./fonts/caa3a2e1cccd8315-s.p.09~u27dqhyhd6.woff2",
  variable: "--font-geist-sans",
  display: "swap",
});

export const geistMono = localFont({
  src: "./fonts/797e433ab948586e-s.p.09zddjkbdep5a.woff2",
  variable: "--font-geist-mono",
  display: "swap",
});

export const universo = localFont({
  src: [
    {
      path: "./fonts/Fontspring_DEMO_universo_thin-s.p.01f_g81m12raw.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Fontspring_DEMO_universo_light-s.p.10.d~2u319goy.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Fontspring_DEMO_universo_regular-s.p.08eyg8dlekjo0.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Fontspring_DEMO_universo_bold-s.p.0~_-qxvgmtsnf.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Fontspring_DEMO_universo_black-s.p.17qzeep5t2ol6.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-universo",
  display: "swap",
});

export const universoStencil = localFont({
  src: "./fonts/Fontspring_DEMO_universo_stencil-s.p.0h5z5y4u3f2-y.otf",
  variable: "--font-universo-stencil",
  display: "swap",
});