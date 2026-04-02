export type EnvMode = 'local' | 'prod';

export const envs: Record<
  EnvMode, 
  { baseURL: string }>  = {
  local: {
    baseURL: 'http://localhost:4173/'
  },
  prod: {
    baseURL: 'https://ericdev1o.github.io/OC900_p12_portfolio/'
  }
};