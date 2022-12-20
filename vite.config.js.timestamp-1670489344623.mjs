// vite.config.js
import { ViteWebfontDownload } from "file:///D:/New%20Projects/Digital-Identity/node_modules/vite-plugin-webfont-dl/dist/index.js";
import { chunkSplitPlugin } from "file:///D:/New%20Projects/Digital-Identity/node_modules/vite-plugin-chunk-split/dist/index.js";
import { defineConfig } from "file:///D:/New%20Projects/Digital-Identity/node_modules/vite/dist/node/index.js";
import { imagetools } from "file:///D:/New%20Projects/Digital-Identity/node_modules/vite-imagetools/dist/index.mjs";
import path from "path";
import react from "file:///D:/New%20Projects/Digital-Identity/node_modules/@vitejs/plugin-react/dist/index.mjs";
import viteCompression from "file:///D:/New%20Projects/Digital-Identity/node_modules/vite-plugin-compression/dist/index.mjs";
import viteImagemin from "file:///D:/New%20Projects/Digital-Identity/node_modules/vite-plugin-imagemin/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\New Projects\\Digital-Identity";
var vite_config_default = defineConfig({
  resolve: {
    alias: [
      {
        find: "components",
        replacement: path.resolve(__vite_injected_original_dirname, "./src/components")
      },
      {
        find: "assets",
        replacement: path.resolve(__vite_injected_original_dirname, "./src/assets")
      },
      {
        find: "router",
        replacement: path.resolve(__vite_injected_original_dirname, "./src/router.jsx")
      }
    ]
  },
  plugins: [
    react(),
    ViteWebfontDownload(),
    chunkSplitPlugin(),
    imagetools(),
    viteCompression({
      algorithm: "brotliCompress",
      threshold: 100
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 30
      },
      pngquant: {
        quality: [0.7, 0.8],
        speed: 4
      },
      webp: {
        quality: 70
      },
      svgo: {
        multipass: true,
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "minifyStyles"
          },
          {
            name: "removeMetadata"
          },
          {
            name: "removeUselessStrokeAndFill"
          },
          {
            name: "reusePaths"
          },
          {
            name: "removeEmptyAttrs",
            active: true
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOZXcgUHJvamVjdHNcXFxcRGlnaXRhbC1JZGVudGl0eVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcTmV3IFByb2plY3RzXFxcXERpZ2l0YWwtSWRlbnRpdHlcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L05ldyUyMFByb2plY3RzL0RpZ2l0YWwtSWRlbnRpdHkvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBWaXRlV2ViZm9udERvd25sb2FkIH0gZnJvbSBcInZpdGUtcGx1Z2luLXdlYmZvbnQtZGxcIjtcclxuaW1wb3J0IHsgY2h1bmtTcGxpdFBsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1jaHVuay1zcGxpdFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgeyBpbWFnZXRvb2xzIH0gZnJvbSBcInZpdGUtaW1hZ2V0b29sc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcbmltcG9ydCB2aXRlQ29tcHJlc3Npb24gZnJvbSBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uXCI7XHJcbmltcG9ydCB2aXRlSW1hZ2VtaW4gZnJvbSBcInZpdGUtcGx1Z2luLWltYWdlbWluXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBmaW5kOiBcImNvbXBvbmVudHNcIixcclxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9jb21wb25lbnRzXCIpLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZmluZDogXCJhc3NldHNcIixcclxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9hc3NldHNcIiksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBmaW5kOiBcInJvdXRlclwiLFxyXG4gICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL3JvdXRlci5qc3hcIiksXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIFZpdGVXZWJmb250RG93bmxvYWQoKSxcclxuICAgIGNodW5rU3BsaXRQbHVnaW4oKSxcclxuICAgIGltYWdldG9vbHMoKSxcclxuICAgIHZpdGVDb21wcmVzc2lvbih7XHJcbiAgICAgIGFsZ29yaXRobTogXCJicm90bGlDb21wcmVzc1wiLFxyXG4gICAgICB0aHJlc2hvbGQ6IDEwMCxcclxuICAgIH0pLFxyXG4gICAgdml0ZUltYWdlbWluKHtcclxuICAgICAgZ2lmc2ljbGU6IHtcclxuICAgICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcclxuICAgICAgICBpbnRlcmxhY2VkOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aXBuZzoge1xyXG4gICAgICAgIG9wdGltaXphdGlvbkxldmVsOiA3LFxyXG4gICAgICB9LFxyXG4gICAgICBtb3pqcGVnOiB7XHJcbiAgICAgICAgcXVhbGl0eTogMzAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBuZ3F1YW50OiB7XHJcbiAgICAgICAgcXVhbGl0eTogWzAuNywgMC44XSxcclxuICAgICAgICBzcGVlZDogNCxcclxuICAgICAgfSxcclxuICAgICAgd2VicDoge1xyXG4gICAgICAgIHF1YWxpdHk6IDcwLFxyXG4gICAgICB9LFxyXG4gICAgICBzdmdvOiB7XHJcbiAgICAgICAgbXVsdGlwYXNzOiB0cnVlLFxyXG4gICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJyZW1vdmVWaWV3Qm94XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIm1pbmlmeVN0eWxlc1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJyZW1vdmVNZXRhZGF0YVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJyZW1vdmVVc2VsZXNzU3Ryb2tlQW5kRmlsbFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJyZXVzZVBhdGhzXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInJlbW92ZUVtcHR5QXR0cnNcIixcclxuICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFIsU0FBUywyQkFBMkI7QUFDOVQsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxrQkFBa0I7QUFDM0IsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sV0FBVztBQUNsQixPQUFPLHFCQUFxQjtBQUM1QixPQUFPLGtCQUFrQjtBQVB6QixJQUFNLG1DQUFtQztBQVV6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsTUFDekQ7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDckQ7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUssUUFBUSxrQ0FBVyxrQkFBa0I7QUFBQSxNQUN6RDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixvQkFBb0I7QUFBQSxJQUNwQixpQkFBaUI7QUFBQSxJQUNqQixXQUFXO0FBQUEsSUFDWCxnQkFBZ0I7QUFBQSxNQUNkLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQSxJQUNiLENBQUM7QUFBQSxJQUNELGFBQWE7QUFBQSxNQUNYLFVBQVU7QUFBQSxRQUNSLG1CQUFtQjtBQUFBLFFBQ25CLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxtQkFBbUI7QUFBQSxNQUNyQjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNSLFNBQVMsQ0FBQyxLQUFLLEdBQUc7QUFBQSxRQUNsQixPQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0EsTUFBTTtBQUFBLFFBQ0osU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNKLFdBQVc7QUFBQSxRQUNYLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRSxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
