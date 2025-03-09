// action для INC
export const inc = () => ({
    type: "INC",
});

// action для DEC
export const dec = () => ({
    type: "DEC",
});

// action для RND
export const rnd = (value) => ({
    type: "RND",
    payload: value,
});
