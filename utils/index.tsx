export const generateTwoColorGradient = (color1: any, color2: any) => {
    return `linear-gradient(to right, ${color1}, ${color2})`;
};

export const generateOneColorGradient = (color: string, opacity1: number, opacity2: number) => {
    return `linear-gradient(to bottom, rgba(${color}, ${opacity1}), rgba(${color}, ${opacity2}))`;
};
