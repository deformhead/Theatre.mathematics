export function hypothenuse(ab, ac) {

    // return the hypothenuse value of a right-angled triangle given its two smallest sides
    return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
};

export function sigmoid(x) {

    // return the sigmoid value of given x
    return 1 / (1 + Math.exp(-x));
};
