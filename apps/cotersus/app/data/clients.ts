export interface Client {
  name: string;
  url?: string;
}

export const clients = {
  wardPellegrims: {
    name: 'Ward Pellegrims',
    url: 'https://www.pellegrims.coach/',
  },
  cmeKuleuven: {
    name: 'Centrum Menselijke Erfelijkheid KULeuven',
    url: 'https://gbiomed.kuleuven.be/nl/cme',
  },
  riffAgency: {
    name: 'Riff agency',
    url: 'https://riff-agency.be/',
  },
  irisIms: {
    name: 'IRIS IMS',
    url: 'https://www.irisims.com/',
  },
  fednot: {
    name: 'Fednot',
    url: 'https://www.fednot.be/',
  },
  zvcGoldgetters: {
    name: 'ZVC Goldgetters',
    url: 'https://goldgetters.be/',
  },
} as const;

export type ClientKey = keyof typeof clients;
