import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'NegocioDicsysApp',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#121212",
      androidSplashResourceName: "splash", // Recurso de imagen
      splashFullScreen: true, 
      splashImmersive: true,   
    },
  },
};

export default config;
