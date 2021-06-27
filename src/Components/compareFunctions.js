//sorts ascending in default

export function compareStockAscending(a, b) {
    // if (a.numberInStock < b.numberInStock) {
    //     return -1;
    // }
    // if (a.numberInStock > b.numberInStock) {
    //     return 1;
    // }
    // return 0;

    return a.numberInStock - b.numberInStock;
}
export function compareStockDescending(a, b) {
    // if (a.numberInStock > b.numberInStock) {
    //     return -1;
    // }
    // if (a.numberInStock < b.numberInStock) {
    //     return 1;
    // }
    // return 0;

    return b.numberInStock - a.numberInStock;
}
export function compareRateAscending(a, b) {
    // if (a.dailyRentalRate < b.dailyRentalRate) {
    //     return -1;
    // }
    // if (a.dailyRentalRate > b.dailyRentalRate) {
    //     return 1;
    // }
    // return 0;

    return a.dailyRentalRate - b.dailyRentalRate;
}
export function compareRateDescending(a, b) {
    // if (a.dailyRentalRate > b.dailyRentalRate) {
    //     return -1;
    // }
    // if (a.dailyRentalRate < b.dailyRentalRate) {
    //     return 1;
    // }
    // return 0;

    return b.dailyRentalRate - a.dailyRentalRate;
}
