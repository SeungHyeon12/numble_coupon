export declare class CouponIssueDate {
    private readonly couponIssuedStartDate;
    private couponIssuedEndDate;
    constructor(issuedStartDate: Date, IssuedEndDate: Date);
    calculateCouponIssuedEndDate(startDate: Date): void;
    getcouponIssuedStartDate(): Date;
    getcouponIssuedEndDate(): Date;
}
