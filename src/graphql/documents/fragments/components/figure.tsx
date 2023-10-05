import { graphql } from '@/graphql/generated';

export const FigureFragment = graphql(`
  fragment FigureFragment on ComponentUiFigure {
    id
    caption
    LinkButton {
      ...ButtonFragment
    }
    image {
      data {
        attributes {
          ...FileFragment
        }
      }
    }
  }
`);
