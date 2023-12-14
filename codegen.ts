import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

// if you're using Next.js
loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    'src/generated/storyblok.graphql': {
      schema: {
        'https://gapi.storyblok.com/v1/api': {
          headers: {
            token: process.env.STORYBLOK_API_TOKEN!, // don't forget to add your token
            version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
          },
        },
      },
      plugins: ['schema-ast'],
    },
  },
};

export default config;
