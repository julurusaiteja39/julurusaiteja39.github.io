import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import {componentTagger} from "lovable-tagger";
// export default defineConfig({
//   base: "/julurusaiteja39.github.io/", // CRUCIAL for GitHub Pages
//   build: {
//     outDir: "docs", // Make sure build output goes to ./docs
//     emptyOutDir: true, // Clean old builds from docs
//   },
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),
//     },
//   },
// });

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: "/julurusaiteja39.github.io/",
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));