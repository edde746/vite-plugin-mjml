declare module '*.mjml' {
  const content: string;
  export default content;
}

declare module '@edde746/vite-plugin-mjml' {
  export function mjmlPlugin(): {
    name: string;
    load(id: string): string | undefined;
  }
}