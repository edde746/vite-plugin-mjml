declare module '*.mjml' {
  const content: string;
  export default content;
}

export interface MjmlPluginOptions {
  // Future options can be added here
}

export function mjmlPlugin(options?: MjmlPluginOptions): {
  name: string;
  load(id: string): string | undefined;
};