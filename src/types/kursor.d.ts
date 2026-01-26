declare module "kursor" {
  interface KursorOptions {
    type?: number;
    removeDefaultCursor?: boolean;
    color?: string;
    el?: string | HTMLElement;
  }

  class Kursor {
    constructor(options?: KursorOptions);
    color(color: string): void;
    hidden(isHidden?: boolean): void;
  }

  export default Kursor;
}
