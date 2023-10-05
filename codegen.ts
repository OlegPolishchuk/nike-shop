// eslint-disable-next-line import/named
import { CodegenConfig } from '@graphql-codegen/cli';

console.log(process.env.NEXT_PUBLIC_STRAPI_API_URL);

const config: CodegenConfig = {
  schema: `${process.env.NEXT_PUBLIC_STRAPI_API_URL ?? 'http://127.0.0.1:1337'}/graphql/playground`,
  documents: ['src/graphql/documents/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  overwrite: true,
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};

export default config;
