import {withPlugins} from "next-compose-plugins"
import withOptimizedImages from "next-optimized-images"

const config = withPlugins(
  [
    // [withOptimizedImages, {}],
  ],
  {
    reactStrictMode: true,
    distDir: "build",
    images: {
      disableStaticImages: true,
    },
  },
);

export default config;
