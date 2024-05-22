// allow importing and typing of mp3 sound effects

declare module "*.mp3" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}
