

export const openWrapper = {
    opacity: 1,
};

export const closeWrapper = {
    opacity: 0,
};

export const openWindow = {
    scale: 1,
};

export const closeWindow = {
    scale: 0,
};

export const menuVariant = {
    hidden: {
        x: "-100%",
        opacity: 0,
        transition: {
            type: "tween",
        },
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
        },
    },
};