import type { ImageSourcePropType } from "react-native";

declare global {
    interface TabIconProps {
        focussed: boolean;
        icon: ImageSourcePropType;
    }
}

export { };
