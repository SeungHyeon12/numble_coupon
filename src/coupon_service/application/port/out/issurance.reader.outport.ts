export interface IssuranceReaderOutPort {
  getAllByIssuerUuid(IssuerUuid: string, take: number, skip: number);
}
