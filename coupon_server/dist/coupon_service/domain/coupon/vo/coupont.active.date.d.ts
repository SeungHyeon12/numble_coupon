export declare class CouponActiveDate {
    private readonly couponActiveStartDate;
    private readonly couponActiveEndDate;
    constructor(activeStartDate: Date, activeEndDate: Date);
    getProperties(): {
        couponActiveStartDate: Date;
        couponActiveEndDate: Date;
    };
}
