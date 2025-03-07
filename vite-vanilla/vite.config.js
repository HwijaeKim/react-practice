import { defineConfig } from "vite";
import { ejs } from "vite-plugin-ejs";

export default defineConfig ({
    plugins: [
        ejs({
            title: 'EJS Title',
            heading: "Welcome to EJS",
            content: 'HA-ha',
        }),
    ],
    server: {
        open: true,
    },
});