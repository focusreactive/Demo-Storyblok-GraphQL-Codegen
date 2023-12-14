import { GraphQLClient } from 'graphql-request';
import { getSdk } from './generated/storyblokSdk';

const client = new GraphQLClient('https://gapi.storyblok.com/v1/api', {
  headers: {
    token: process.env.STORYBLOK_API_TOKEN!,
    version: 'draft' // you don't need token when fetch 'published' content
  }
});

export const sdk = getSdk(client);
