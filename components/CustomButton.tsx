import { ButtonProps } from "@/types/type";
import { FC } from "react";
import { Text, TouchableOpacity } from "react-native";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
    if (!variant) return "bg-[#0286ff]";

    const map = {
        primary: "bg-[#0286ff]",
        secondary: "bg-gray-500",
        danger: "bg-red-500",
        success: "bg-green-500",
        outline: "bg-transparent border-neutral-300 border-[0.5px]",
    } as const;

    return map[variant] ?? "bg-[#0286ff]";
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
    if (!variant) return "text-black";

    const map = {
        primary: "text-black",
        secondary: "text-gray-100",
        danger: "text-red-100",
        success: "text-green-100",
        default: "text-white",
    } as const;

    return map[variant] ?? "bg-[#0286ff]";
};

const CustomButton: FC<ButtonProps> = ({
    onPress,
    title,
    bgVariant = "primary",
    textVariant = "default",
    IconLeft,
    IconRight,
    className,
    ...props
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={`w-full p-3 rounded-full flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}
            {...props}
        >
            {IconLeft && <IconLeft />}
            <Text
                className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}
            >
                {title}
            </Text>
            {IconRight && <IconRight />}
        </TouchableOpacity>
    );
};

export default CustomButton;
