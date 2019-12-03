export function getInrFormat(number: string | number): string {
  if (!number) {
    return "";
  }
  const y = `${number}`.split(".");
  const x = y[0].toString();
  let lastThree = x.substring(x.length - 3);
  const otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers !== "") lastThree = `,${lastThree}`;
  return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
}

export default {};
