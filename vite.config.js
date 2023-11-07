import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		// alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
		alias: {
			"@": path.resolve(__dirname, "./src/"),
			"@/sassStyles": path.resolve(__dirname, "./src/sassStyles"),
			"@/assets": path.resolve(__dirname, "./src/assets"),
			"@/components": path.resolve(__dirname, "./src/components"),
			"@/pages": path.resolve(__dirname, "./src/pages"),
		},
	},
});
