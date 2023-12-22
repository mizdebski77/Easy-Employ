export const titleVariants = {
    hidden: {
        opacity: 0,
        y: -40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 0.6,
        },
    },
};


export const spanVariant = {
    hidden: {
        opacity: 0,
        y: -40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.4,
            duration: 0.6,
        },
    },
};

export const bottomVariant = {
    hidden: {
        opacity: 0,
        y: -40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.6,
            duration: 0.6,
        },
    },
};

export const formVariant = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.6,
            duration: 0.6,
        },
    },
};

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