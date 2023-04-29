function isCorrectDate(date: unknown) {
  return isFinite(
    date instanceof Date
      ? (date as unknown as number)
      : (new Date(date as unknown as Date) as unknown as number),
  );
}
