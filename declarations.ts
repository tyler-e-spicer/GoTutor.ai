// allow importing and typing of mp3 sound effects
declare module "*.mp3" {
  const src: string;
  export default src;
}

// allows jpg
declare module '*.jpg' {
    const src: string;
    export default src;
  }