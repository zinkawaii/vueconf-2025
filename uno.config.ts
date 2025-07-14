import config from "@slidev/client/uno.config.ts";
import { mergeConfigs, presetWebFonts } from "unocss";

export default mergeConfigs([
    config,
    {
        presets: [
            presetWebFonts({
                fonts: {
                    mono: "DM Mono",
                    sans: "DM Sans",
                    hand: "Caveat",
                    jp: "Noto Serif JP",
                },
            }),
        ],
    },
]);
