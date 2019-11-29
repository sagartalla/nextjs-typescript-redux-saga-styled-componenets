// declare module '*.css' {
//   const content: string|any;
//   export default content;
// }

declare module "*.svg" {
  const content: string | any; // eslint-disable-line @typescript-eslint/no-explicit-any
  export default content;
}

declare module "*.jpg" {
  const content: string | any; // eslint-disable-line @typescript-eslint/no-explicit-any
  export default content;
}

declare module "*.png" {
  const content: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  export default content;
}

declare module "*.gif" {
  const content: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  export default content;
}
