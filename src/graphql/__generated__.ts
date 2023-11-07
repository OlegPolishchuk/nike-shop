import { GraphQLClient } from 'graphql-request';
// @ts-ignore
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  I18NLocaleCode: { input: any; output: any };
  JSON: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type BannerSection = {
  readonly __typename?: 'BannerSection';
  readonly Title: Scalars['String']['output'];
  readonly card: ReadonlyArray<Maybe<ComponentUiBannerCard>>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<BannerSectionRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type BannerSectionCardArgs = {
  filters: InputMaybe<ComponentUiBannerCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type BannerSectionLocalizationsArgs = {
  filters: InputMaybe<BannerSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type BannerSectionEntity = {
  readonly __typename?: 'BannerSectionEntity';
  readonly attributes: Maybe<BannerSection>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type BannerSectionEntityResponse = {
  readonly __typename?: 'BannerSectionEntityResponse';
  readonly data: Maybe<BannerSectionEntity>;
};

export type BannerSectionEntityResponseCollection = {
  readonly __typename?: 'BannerSectionEntityResponseCollection';
  readonly data: ReadonlyArray<BannerSectionEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type BannerSectionFiltersInput = {
  readonly Title: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<BannerSectionFiltersInput>>>;
  readonly card: InputMaybe<ComponentUiBannerCardFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<BannerSectionFiltersInput>;
  readonly not: InputMaybe<BannerSectionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<BannerSectionFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type BannerSectionInput = {
  readonly Title: InputMaybe<Scalars['String']['input']>;
  readonly card: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiBannerCardInput>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type BannerSectionRelationResponseCollection = {
  readonly __typename?: 'BannerSectionRelationResponseCollection';
  readonly data: ReadonlyArray<BannerSectionEntity>;
};

export type BooleanFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly contains: InputMaybe<Scalars['Boolean']['input']>;
  readonly containsi: InputMaybe<Scalars['Boolean']['input']>;
  readonly endsWith: InputMaybe<Scalars['Boolean']['input']>;
  readonly eq: InputMaybe<Scalars['Boolean']['input']>;
  readonly eqi: InputMaybe<Scalars['Boolean']['input']>;
  readonly gt: InputMaybe<Scalars['Boolean']['input']>;
  readonly gte: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly lt: InputMaybe<Scalars['Boolean']['input']>;
  readonly lte: InputMaybe<Scalars['Boolean']['input']>;
  readonly ne: InputMaybe<Scalars['Boolean']['input']>;
  readonly nei: InputMaybe<Scalars['Boolean']['input']>;
  readonly not: InputMaybe<BooleanFilterInput>;
  readonly notContains: InputMaybe<Scalars['Boolean']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Boolean']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentEntityShoeOption = {
  readonly __typename?: 'ComponentEntityShoeOption';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly mainImage: UploadFileEntityResponse;
  readonly medias: Maybe<UploadFileRelationResponseCollection>;
  readonly price: Scalars['Int']['output'];
  readonly priceSt: Maybe<Scalars['String']['output']>;
  readonly tag: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentEntityShoeOptionMediasArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentEntityShoeOptionFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentEntityShoeOptionFiltersInput>>>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentEntityShoeOptionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentEntityShoeOptionFiltersInput>>>;
  readonly price: InputMaybe<IntFilterInput>;
  readonly priceSt: InputMaybe<StringFilterInput>;
  readonly tag: InputMaybe<StringFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentEntityShoeOptionInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly mainImage: InputMaybe<Scalars['ID']['input']>;
  readonly medias: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly price: InputMaybe<Scalars['Int']['input']>;
  readonly priceSt: InputMaybe<Scalars['String']['input']>;
  readonly tag: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentKidSizes1Y = {
  readonly __typename?: 'ComponentKidSizes1Y';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentKidSizes1YFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes1YFiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentKidSizes1YFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes1YFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentKidSizes1YInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentKidSizes2Y = {
  readonly __typename?: 'ComponentKidSizes2Y';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentKidSizes2YFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes2YFiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentKidSizes2YFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes2YFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentKidSizes2YInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentKidSizes3Y = {
  readonly __typename?: 'ComponentKidSizes3Y';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentKidSizes3YFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes3YFiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentKidSizes3YFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes3YFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentKidSizes3YInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentKidSizes11C = {
  readonly __typename?: 'ComponentKidSizes11C';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentKidSizes11CFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes11CFiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentKidSizes11CFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes11CFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentKidSizes11CInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentKidSizes12C = {
  readonly __typename?: 'ComponentKidSizes12C';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentKidSizes12CFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes12CFiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentKidSizes12CFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes12CFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentKidSizes12CInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentKidSizes13C = {
  readonly __typename?: 'ComponentKidSizes13C';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentKidSizes13CFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes13CFiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentKidSizes13CFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes13CFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentKidSizes13CInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentKidSizes15Y = {
  readonly __typename?: 'ComponentKidSizes15Y';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentKidSizes15YFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes15YFiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentKidSizes15YFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes15YFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentKidSizes15YInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentKidSizes25Y = {
  readonly __typename?: 'ComponentKidSizes25Y';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentKidSizes25YFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes25YFiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentKidSizes25YFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes25YFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentKidSizes25YInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentKidSizes105C = {
  readonly __typename?: 'ComponentKidSizes105C';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentKidSizes105CFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes105CFiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentKidSizes105CFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes105CFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentKidSizes105CInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentKidSizes115C = {
  readonly __typename?: 'ComponentKidSizes115C';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentKidSizes115CFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes115CFiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentKidSizes115CFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes115CFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentKidSizes115CInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentKidSizes125C = {
  readonly __typename?: 'ComponentKidSizes125C';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentKidSizes125CFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes125CFiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentKidSizes125CFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes125CFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentKidSizes125CInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentKidSizes135C = {
  readonly __typename?: 'ComponentKidSizes135C';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentKidSizes135CFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes135CFiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentKidSizes135CFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentKidSizes135CFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentKidSizes135CInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentLayoutHeaderLinkList = {
  readonly __typename?: 'ComponentLayoutHeaderLinkList';
  readonly Title: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
};

export type ComponentMenSizesM7W85 = {
  readonly __typename?: 'ComponentMenSizesM7W85';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentMenSizesM7W85FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM7W85FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentMenSizesM7W85FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM7W85FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentMenSizesM7W85Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMenSizesM8W95 = {
  readonly __typename?: 'ComponentMenSizesM8W95';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentMenSizesM8W95FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM8W95FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentMenSizesM8W95FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM8W95FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentMenSizesM8W95Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMenSizesM9W105 = {
  readonly __typename?: 'ComponentMenSizesM9W105';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentMenSizesM9W105FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM9W105FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentMenSizesM9W105FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM9W105FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentMenSizesM9W105Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMenSizesM10W115 = {
  readonly __typename?: 'ComponentMenSizesM10W115';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentMenSizesM10W115FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM10W115FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentMenSizesM10W115FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM10W115FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentMenSizesM10W115Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMenSizesM11W125 = {
  readonly __typename?: 'ComponentMenSizesM11W125';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentMenSizesM11W125FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM11W125FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentMenSizesM11W125FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM11W125FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentMenSizesM11W125Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMenSizesM12W135 = {
  readonly __typename?: 'ComponentMenSizesM12W135';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentMenSizesM12W135FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM12W135FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentMenSizesM12W135FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM12W135FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentMenSizesM12W135Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMenSizesM13W145 = {
  readonly __typename?: 'ComponentMenSizesM13W145';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentMenSizesM13W145FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM13W145FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentMenSizesM13W145FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM13W145FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentMenSizesM13W145Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMenSizesM14W155 = {
  readonly __typename?: 'ComponentMenSizesM14W155';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentMenSizesM14W155FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM14W155FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentMenSizesM14W155FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM14W155FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentMenSizesM14W155Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMenSizesM15W165 = {
  readonly __typename?: 'ComponentMenSizesM15W165';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentMenSizesM15W165FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM15W165FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentMenSizesM15W165FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM15W165FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentMenSizesM15W165Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMenSizesM16W175 = {
  readonly __typename?: 'ComponentMenSizesM16W175';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentMenSizesM16W175FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM16W175FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentMenSizesM16W175FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM16W175FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentMenSizesM16W175Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMenSizesM17W185 = {
  readonly __typename?: 'ComponentMenSizesM17W185';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentMenSizesM17W185FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM17W185FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentMenSizesM17W185FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM17W185FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentMenSizesM17W185Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMenSizesM18W195 = {
  readonly __typename?: 'ComponentMenSizesM18W195';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentMenSizesM18W195FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM18W195FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentMenSizesM18W195FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM18W195FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentMenSizesM18W195Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMenSizesM75W9 = {
  readonly __typename?: 'ComponentMenSizesM75W9';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentMenSizesM75W9FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM75W9FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentMenSizesM75W9FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM75W9FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentMenSizesM75W9Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMenSizesM85W10 = {
  readonly __typename?: 'ComponentMenSizesM85W10';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentMenSizesM85W10FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM85W10FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentMenSizesM85W10FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM85W10FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentMenSizesM85W10Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMenSizesM95W11 = {
  readonly __typename?: 'ComponentMenSizesM95W11';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentMenSizesM95W11FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM95W11FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentMenSizesM95W11FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM95W11FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentMenSizesM95W11Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMenSizesM105W12 = {
  readonly __typename?: 'ComponentMenSizesM105W12';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentMenSizesM105W12FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM105W12FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentMenSizesM105W12FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM105W12FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentMenSizesM105W12Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMenSizesM115W13 = {
  readonly __typename?: 'ComponentMenSizesM115W13';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentMenSizesM115W13FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM115W13FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentMenSizesM115W13FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM115W13FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentMenSizesM115W13Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMenSizesM125W14 = {
  readonly __typename?: 'ComponentMenSizesM125W14';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentMenSizesM125W14FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM125W14FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentMenSizesM125W14FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentMenSizesM125W14FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentMenSizesM125W14Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSettingsBannerSection = {
  readonly __typename?: 'ComponentSettingsBannerSection';
  readonly id: Scalars['ID']['output'];
  readonly show: Scalars['Boolean']['output'];
};

export type ComponentSettingsBannerSectionFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentSettingsBannerSectionFiltersInput>>>;
  readonly not: InputMaybe<ComponentSettingsBannerSectionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentSettingsBannerSectionFiltersInput>>>;
  readonly show: InputMaybe<BooleanFilterInput>;
};

export type ComponentSettingsBannerSectionInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly show: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentSettingsKidSizes = {
  readonly __typename?: 'ComponentSettingsKidSizes';
  readonly c11: ComponentKidSizes11C;
  readonly c12: ComponentKidSizes12C;
  readonly c13: ComponentKidSizes13C;
  readonly c105: ComponentKidSizes105C;
  readonly c115: ComponentKidSizes115C;
  readonly c125: ComponentKidSizes125C;
  readonly c135: ComponentKidSizes135C;
  readonly id: Scalars['ID']['output'];
  readonly y1: ComponentKidSizes1Y;
  readonly y2: ComponentKidSizes2Y;
  readonly y3: ComponentKidSizes3Y;
  readonly y15: ComponentKidSizes15Y;
  readonly y25: ComponentKidSizes25Y;
};

export type ComponentSettingsKidSizesFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentSettingsKidSizesFiltersInput>>>;
  readonly c11: InputMaybe<ComponentKidSizes11CFiltersInput>;
  readonly c12: InputMaybe<ComponentKidSizes12CFiltersInput>;
  readonly c13: InputMaybe<ComponentKidSizes13CFiltersInput>;
  readonly c105: InputMaybe<ComponentKidSizes105CFiltersInput>;
  readonly c115: InputMaybe<ComponentKidSizes115CFiltersInput>;
  readonly c125: InputMaybe<ComponentKidSizes125CFiltersInput>;
  readonly c135: InputMaybe<ComponentKidSizes135CFiltersInput>;
  readonly not: InputMaybe<ComponentSettingsKidSizesFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentSettingsKidSizesFiltersInput>>>;
  readonly y1: InputMaybe<ComponentKidSizes1YFiltersInput>;
  readonly y2: InputMaybe<ComponentKidSizes2YFiltersInput>;
  readonly y3: InputMaybe<ComponentKidSizes3YFiltersInput>;
  readonly y15: InputMaybe<ComponentKidSizes15YFiltersInput>;
  readonly y25: InputMaybe<ComponentKidSizes25YFiltersInput>;
};

export type ComponentSettingsKidSizesInput = {
  readonly c11: InputMaybe<ComponentKidSizes11CInput>;
  readonly c12: InputMaybe<ComponentKidSizes12CInput>;
  readonly c13: InputMaybe<ComponentKidSizes13CInput>;
  readonly c105: InputMaybe<ComponentKidSizes105CInput>;
  readonly c115: InputMaybe<ComponentKidSizes115CInput>;
  readonly c125: InputMaybe<ComponentKidSizes125CInput>;
  readonly c135: InputMaybe<ComponentKidSizes135CInput>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly y1: InputMaybe<ComponentKidSizes1YInput>;
  readonly y2: InputMaybe<ComponentKidSizes2YInput>;
  readonly y3: InputMaybe<ComponentKidSizes3YInput>;
  readonly y15: InputMaybe<ComponentKidSizes15YInput>;
  readonly y25: InputMaybe<ComponentKidSizes25YInput>;
};

export type ComponentSettingsMenSizes = {
  readonly __typename?: 'ComponentSettingsMenSizes';
  readonly id: Scalars['ID']['output'];
  readonly m7: ComponentMenSizesM7W85;
  readonly m8: ComponentMenSizesM8W95;
  readonly m9: ComponentMenSizesM9W105;
  readonly m10: ComponentMenSizesM10W115;
  readonly m11: ComponentMenSizesM11W125;
  readonly m12: ComponentMenSizesM12W135;
  readonly m13: ComponentMenSizesM13W145;
  readonly m14: ComponentMenSizesM14W155;
  readonly m15: ComponentMenSizesM15W165;
  readonly m16: ComponentMenSizesM16W175;
  readonly m17: ComponentMenSizesM17W185;
  readonly m18: ComponentMenSizesM18W195;
  readonly m75: ComponentMenSizesM75W9;
  readonly m85: ComponentMenSizesM85W10;
  readonly m105: ComponentMenSizesM105W12;
  readonly m115: ComponentMenSizesM115W13;
  readonly m125: ComponentMenSizesM125W14;
  readonly n95: ComponentMenSizesM95W11;
};

export type ComponentSettingsMenSizesFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentSettingsMenSizesFiltersInput>>>;
  readonly m7: InputMaybe<ComponentMenSizesM7W85FiltersInput>;
  readonly m8: InputMaybe<ComponentMenSizesM8W95FiltersInput>;
  readonly m9: InputMaybe<ComponentMenSizesM9W105FiltersInput>;
  readonly m10: InputMaybe<ComponentMenSizesM10W115FiltersInput>;
  readonly m11: InputMaybe<ComponentMenSizesM11W125FiltersInput>;
  readonly m12: InputMaybe<ComponentMenSizesM12W135FiltersInput>;
  readonly m13: InputMaybe<ComponentMenSizesM13W145FiltersInput>;
  readonly m14: InputMaybe<ComponentMenSizesM14W155FiltersInput>;
  readonly m15: InputMaybe<ComponentMenSizesM15W165FiltersInput>;
  readonly m16: InputMaybe<ComponentMenSizesM16W175FiltersInput>;
  readonly m17: InputMaybe<ComponentMenSizesM17W185FiltersInput>;
  readonly m18: InputMaybe<ComponentMenSizesM18W195FiltersInput>;
  readonly m75: InputMaybe<ComponentMenSizesM75W9FiltersInput>;
  readonly m85: InputMaybe<ComponentMenSizesM85W10FiltersInput>;
  readonly m105: InputMaybe<ComponentMenSizesM105W12FiltersInput>;
  readonly m115: InputMaybe<ComponentMenSizesM115W13FiltersInput>;
  readonly m125: InputMaybe<ComponentMenSizesM125W14FiltersInput>;
  readonly n95: InputMaybe<ComponentMenSizesM95W11FiltersInput>;
  readonly not: InputMaybe<ComponentSettingsMenSizesFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentSettingsMenSizesFiltersInput>>>;
};

export type ComponentSettingsMenSizesInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly m7: InputMaybe<ComponentMenSizesM7W85Input>;
  readonly m8: InputMaybe<ComponentMenSizesM8W95Input>;
  readonly m9: InputMaybe<ComponentMenSizesM9W105Input>;
  readonly m10: InputMaybe<ComponentMenSizesM10W115Input>;
  readonly m11: InputMaybe<ComponentMenSizesM11W125Input>;
  readonly m12: InputMaybe<ComponentMenSizesM12W135Input>;
  readonly m13: InputMaybe<ComponentMenSizesM13W145Input>;
  readonly m14: InputMaybe<ComponentMenSizesM14W155Input>;
  readonly m15: InputMaybe<ComponentMenSizesM15W165Input>;
  readonly m16: InputMaybe<ComponentMenSizesM16W175Input>;
  readonly m17: InputMaybe<ComponentMenSizesM17W185Input>;
  readonly m18: InputMaybe<ComponentMenSizesM18W195Input>;
  readonly m75: InputMaybe<ComponentMenSizesM75W9Input>;
  readonly m85: InputMaybe<ComponentMenSizesM85W10Input>;
  readonly m105: InputMaybe<ComponentMenSizesM105W12Input>;
  readonly m115: InputMaybe<ComponentMenSizesM115W13Input>;
  readonly m125: InputMaybe<ComponentMenSizesM125W14Input>;
  readonly n95: InputMaybe<ComponentMenSizesM95W11Input>;
};

export type ComponentSettingsSize = {
  readonly __typename?: 'ComponentSettingsSize';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentSettingsSizeFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentSettingsSizeFiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentSettingsSizeFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentSettingsSizeFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentSettingsSizeInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSettingsWomenSizes = {
  readonly __typename?: 'ComponentSettingsWomenSizes';
  readonly id: Scalars['ID']['output'];
  readonly w5: ComponentWomenSizesW5M35;
  readonly w6: ComponentWomenSizesW6M45;
  readonly w7: ComponentWomenSizesW7M55;
  readonly w8: ComponentWomenSizesW8M65;
  readonly w9: ComponentWomenSizesW9M75;
  readonly w10: ComponentWomenSizesW10M85;
  readonly w11: ComponentWomenSizesW11M95;
  readonly w12: ComponentWomenSizesW12M105;
  readonly w55: ComponentWomenSizesW55M4;
  readonly w65: ComponentWomenSizesW65M5;
  readonly w75: ComponentWomenSizesW75M6;
  readonly w85: ComponentWomenSizesW85M7;
  readonly w95: ComponentWomenSizesW95M8;
  readonly w105: ComponentWomenSizesW105M9;
  readonly w115: ComponentWomenSizesW115M10;
};

export type ComponentSettingsWomenSizesFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentSettingsWomenSizesFiltersInput>>>;
  readonly not: InputMaybe<ComponentSettingsWomenSizesFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentSettingsWomenSizesFiltersInput>>>;
  readonly w5: InputMaybe<ComponentWomenSizesW5M35FiltersInput>;
  readonly w6: InputMaybe<ComponentWomenSizesW6M45FiltersInput>;
  readonly w7: InputMaybe<ComponentWomenSizesW7M55FiltersInput>;
  readonly w8: InputMaybe<ComponentWomenSizesW8M65FiltersInput>;
  readonly w9: InputMaybe<ComponentWomenSizesW9M75FiltersInput>;
  readonly w10: InputMaybe<ComponentWomenSizesW10M85FiltersInput>;
  readonly w11: InputMaybe<ComponentWomenSizesW11M95FiltersInput>;
  readonly w12: InputMaybe<ComponentWomenSizesW12M105FiltersInput>;
  readonly w55: InputMaybe<ComponentWomenSizesW55M4FiltersInput>;
  readonly w65: InputMaybe<ComponentWomenSizesW65M5FiltersInput>;
  readonly w75: InputMaybe<ComponentWomenSizesW75M6FiltersInput>;
  readonly w85: InputMaybe<ComponentWomenSizesW85M7FiltersInput>;
  readonly w95: InputMaybe<ComponentWomenSizesW95M8FiltersInput>;
  readonly w105: InputMaybe<ComponentWomenSizesW105M9FiltersInput>;
  readonly w115: InputMaybe<ComponentWomenSizesW115M10FiltersInput>;
};

export type ComponentSettingsWomenSizesInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly w5: InputMaybe<ComponentWomenSizesW5M35Input>;
  readonly w6: InputMaybe<ComponentWomenSizesW6M45Input>;
  readonly w7: InputMaybe<ComponentWomenSizesW7M55Input>;
  readonly w8: InputMaybe<ComponentWomenSizesW8M65Input>;
  readonly w9: InputMaybe<ComponentWomenSizesW9M75Input>;
  readonly w10: InputMaybe<ComponentWomenSizesW10M85Input>;
  readonly w11: InputMaybe<ComponentWomenSizesW11M95Input>;
  readonly w12: InputMaybe<ComponentWomenSizesW12M105Input>;
  readonly w55: InputMaybe<ComponentWomenSizesW55M4Input>;
  readonly w65: InputMaybe<ComponentWomenSizesW65M5Input>;
  readonly w75: InputMaybe<ComponentWomenSizesW75M6Input>;
  readonly w85: InputMaybe<ComponentWomenSizesW85M7Input>;
  readonly w95: InputMaybe<ComponentWomenSizesW95M8Input>;
  readonly w105: InputMaybe<ComponentWomenSizesW105M9Input>;
  readonly w115: InputMaybe<ComponentWomenSizesW115M10Input>;
};

export type ComponentUiBannerCard = {
  readonly __typename?: 'ComponentUiBannerCard';
  readonly Title: Maybe<Scalars['String']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
};

export type ComponentUiBannerCardFiltersInput = {
  readonly Title: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiBannerCardFiltersInput>>>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiBannerCardFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiBannerCardFiltersInput>>>;
};

export type ComponentUiBannerCardInput = {
  readonly Title: InputMaybe<Scalars['String']['input']>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentUiButton = {
  readonly __typename?: 'ComponentUiButton';
  readonly href: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly label: Maybe<Scalars['String']['output']>;
};

export type ComponentUiButtonFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiButtonFiltersInput>>>;
  readonly href: InputMaybe<StringFilterInput>;
  readonly label: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiButtonFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiButtonFiltersInput>>>;
};

export type ComponentUiButtonInput = {
  readonly href: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly label: InputMaybe<Scalars['String']['input']>;
};

export type ComponentUiFigure = {
  readonly __typename?: 'ComponentUiFigure';
  readonly LinkButton: Maybe<ReadonlyArray<Maybe<ComponentUiButton>>>;
  readonly caption: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly image: Maybe<UploadFileEntityResponse>;
};

export type ComponentUiFigureLinkButtonArgs = {
  filters: InputMaybe<ComponentUiButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentUiLink = {
  readonly __typename?: 'ComponentUiLink';
  readonly href: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly label: Scalars['String']['output'];
};

export type ComponentUiLinkFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkFiltersInput>>>;
  readonly href: InputMaybe<StringFilterInput>;
  readonly label: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiLinkFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkFiltersInput>>>;
};

export type ComponentUiLinkList = {
  readonly __typename?: 'ComponentUiLinkList';
  readonly Link: ReadonlyArray<Maybe<ComponentUiLink>>;
  readonly id: Scalars['ID']['output'];
  readonly title: Maybe<Scalars['String']['output']>;
};

export type ComponentUiLinkListLinkArgs = {
  filters: InputMaybe<ComponentUiLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentUiMembershipCard = {
  readonly __typename?: 'ComponentUiMembershipCard';
  readonly id: Scalars['ID']['output'];
  readonly image: UploadFileEntityResponse;
  readonly link: Scalars['String']['output'];
  readonly subtitle: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};

export type ComponentUiMembershipCardFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiMembershipCardFiltersInput>>>;
  readonly link: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiMembershipCardFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiMembershipCardFiltersInput>>>;
  readonly subtitle: InputMaybe<StringFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentUiMembershipCardInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly image: InputMaybe<Scalars['ID']['input']>;
  readonly link: InputMaybe<Scalars['String']['input']>;
  readonly subtitle: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentUiShoeCardForCarousel = {
  readonly __typename?: 'ComponentUiShoeCardForCarousel';
  readonly id: Scalars['ID']['output'];
  readonly link: Scalars['String']['output'];
  readonly media: UploadFileEntityResponse;
  readonly price: Scalars['String']['output'];
  readonly section_shoes: Maybe<SectionShoeRelationResponseCollection>;
  readonly tag: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentUiShoeCardForCarouselSection_ShoesArgs = {
  filters: InputMaybe<SectionShoeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentUiShoeCardForCarouselFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiShoeCardForCarouselFiltersInput>>>;
  readonly link: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiShoeCardForCarouselFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiShoeCardForCarouselFiltersInput>>>;
  readonly price: InputMaybe<StringFilterInput>;
  readonly section_shoes: InputMaybe<SectionShoeFiltersInput>;
  readonly tag: InputMaybe<StringFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentUiShoeCardForCarouselInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly link: InputMaybe<Scalars['String']['input']>;
  readonly media: InputMaybe<Scalars['ID']['input']>;
  readonly price: InputMaybe<Scalars['String']['input']>;
  readonly section_shoes: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly tag: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentUiSizes = {
  readonly __typename?: 'ComponentUiSizes';
  readonly Sizes: ReadonlyArray<Maybe<ComponentSettingsSize>>;
  readonly id: Scalars['ID']['output'];
};

export type ComponentUiSizesSizesArgs = {
  filters: InputMaybe<ComponentSettingsSizeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentUiSizesFiltersInput = {
  readonly Sizes: InputMaybe<ComponentSettingsSizeFiltersInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiSizesFiltersInput>>>;
  readonly not: InputMaybe<ComponentUiSizesFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiSizesFiltersInput>>>;
};

export type ComponentUiSizesInput = {
  readonly Sizes: InputMaybe<ReadonlyArray<InputMaybe<ComponentSettingsSizeInput>>>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentUiTrendCard = {
  readonly __typename?: 'ComponentUiTrendCard';
  readonly id: Scalars['ID']['output'];
  readonly image: UploadFileEntityResponse;
  readonly link: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentUiTrendCardFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiTrendCardFiltersInput>>>;
  readonly link: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiTrendCardFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiTrendCardFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentUiTrendCardInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly image: InputMaybe<Scalars['ID']['input']>;
  readonly link: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWomenSizesW5M35 = {
  readonly __typename?: 'ComponentWomenSizesW5M35';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentWomenSizesW5M35FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW5M35FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentWomenSizesW5M35FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW5M35FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentWomenSizesW5M35Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWomenSizesW6M45 = {
  readonly __typename?: 'ComponentWomenSizesW6M45';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentWomenSizesW6M45FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW6M45FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentWomenSizesW6M45FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW6M45FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentWomenSizesW6M45Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWomenSizesW7M55 = {
  readonly __typename?: 'ComponentWomenSizesW7M55';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentWomenSizesW7M55FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW7M55FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentWomenSizesW7M55FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW7M55FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentWomenSizesW7M55Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWomenSizesW8M65 = {
  readonly __typename?: 'ComponentWomenSizesW8M65';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentWomenSizesW8M65FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW8M65FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentWomenSizesW8M65FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW8M65FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentWomenSizesW8M65Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWomenSizesW9M75 = {
  readonly __typename?: 'ComponentWomenSizesW9M75';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentWomenSizesW9M75FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW9M75FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentWomenSizesW9M75FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW9M75FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentWomenSizesW9M75Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWomenSizesW10M85 = {
  readonly __typename?: 'ComponentWomenSizesW10M85';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentWomenSizesW10M85FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW10M85FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentWomenSizesW10M85FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW10M85FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentWomenSizesW10M85Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWomenSizesW11M95 = {
  readonly __typename?: 'ComponentWomenSizesW11M95';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentWomenSizesW11M95FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW11M95FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentWomenSizesW11M95FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW11M95FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentWomenSizesW11M95Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWomenSizesW12M105 = {
  readonly __typename?: 'ComponentWomenSizesW12M105';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentWomenSizesW12M105FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW12M105FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentWomenSizesW12M105FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW12M105FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentWomenSizesW12M105Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWomenSizesW55M4 = {
  readonly __typename?: 'ComponentWomenSizesW55M4';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentWomenSizesW55M4FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW55M4FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentWomenSizesW55M4FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW55M4FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentWomenSizesW55M4Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWomenSizesW65M5 = {
  readonly __typename?: 'ComponentWomenSizesW65M5';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentWomenSizesW65M5FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW65M5FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentWomenSizesW65M5FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW65M5FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentWomenSizesW65M5Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWomenSizesW75M6 = {
  readonly __typename?: 'ComponentWomenSizesW75M6';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentWomenSizesW75M6FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW75M6FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentWomenSizesW75M6FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW75M6FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentWomenSizesW75M6Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWomenSizesW85M7 = {
  readonly __typename?: 'ComponentWomenSizesW85M7';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentWomenSizesW85M7FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW85M7FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentWomenSizesW85M7FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW85M7FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentWomenSizesW85M7Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWomenSizesW95M8 = {
  readonly __typename?: 'ComponentWomenSizesW95M8';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentWomenSizesW95M8FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW95M8FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentWomenSizesW95M8FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW95M8FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentWomenSizesW95M8Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWomenSizesW105M9 = {
  readonly __typename?: 'ComponentWomenSizesW105M9';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentWomenSizesW105M9FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW105M9FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentWomenSizesW105M9FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW105M9FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentWomenSizesW105M9Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWomenSizesW115M10 = {
  readonly __typename?: 'ComponentWomenSizesW115M10';
  readonly id: Scalars['ID']['output'];
  readonly inStock: Scalars['Boolean']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentWomenSizesW115M10FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW115M10FiltersInput>>>;
  readonly inStock: InputMaybe<BooleanFilterInput>;
  readonly not: InputMaybe<ComponentWomenSizesW115M10FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentWomenSizesW115M10FiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentWomenSizesW115M10Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly inStock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type Country = {
  readonly __typename?: 'Country';
  readonly code2: Scalars['String']['output'];
  readonly code3: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<CountryRelationResponseCollection>;
  readonly page_home: Maybe<PageHomeEntityResponse>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type CountryLocalizationsArgs = {
  filters: InputMaybe<CountryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type CountryEntity = {
  readonly __typename?: 'CountryEntity';
  readonly attributes: Maybe<Country>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type CountryEntityResponse = {
  readonly __typename?: 'CountryEntityResponse';
  readonly data: Maybe<CountryEntity>;
};

export type CountryEntityResponseCollection = {
  readonly __typename?: 'CountryEntityResponseCollection';
  readonly data: ReadonlyArray<CountryEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type CountryFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<CountryFiltersInput>>>;
  readonly code2: InputMaybe<StringFilterInput>;
  readonly code3: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<CountryFiltersInput>;
  readonly not: InputMaybe<CountryFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<CountryFiltersInput>>>;
  readonly page_home: InputMaybe<PageHomeFiltersInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type CountryInput = {
  readonly code2: InputMaybe<Scalars['String']['input']>;
  readonly code3: InputMaybe<Scalars['String']['input']>;
  readonly page_home: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type CountryRelationResponseCollection = {
  readonly __typename?: 'CountryRelationResponseCollection';
  readonly data: ReadonlyArray<CountryEntity>;
};

export type DateTimeFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly contains: InputMaybe<Scalars['DateTime']['input']>;
  readonly containsi: InputMaybe<Scalars['DateTime']['input']>;
  readonly endsWith: InputMaybe<Scalars['DateTime']['input']>;
  readonly eq: InputMaybe<Scalars['DateTime']['input']>;
  readonly eqi: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte: InputMaybe<Scalars['DateTime']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly lt: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte: InputMaybe<Scalars['DateTime']['input']>;
  readonly ne: InputMaybe<Scalars['DateTime']['input']>;
  readonly nei: InputMaybe<Scalars['DateTime']['input']>;
  readonly not: InputMaybe<DateTimeFilterInput>;
  readonly notContains: InputMaybe<Scalars['DateTime']['input']>;
  readonly notContainsi: InputMaybe<Scalars['DateTime']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Sectionshoe_Gender {
  Men = 'men',
  Unisex = 'unisex',
  Women = 'women',
}

export enum Enum_Sectionshoe_Pagesubtitle {
  AirForce = 'AirForce',
  AirJordan = 'AirJordan',
  AirMax = 'AirMax',
  AllGifts = 'AllGifts',
  Baseball = 'Baseball',
  Basketball = 'Basketball',
  BasketballAndLifestyle = 'Basketball_and_Lifestyle',
  BestSellers = 'BestSellers',
  BitAndRall = 'Bit_and_Rall',
  Blazer = 'Blazer',
  Boots = 'Boots',
  Clothing = 'Clothing',
  CrossCountry = 'CrossCountry',
  Drops101 = 'Drops101',
  Dunks = 'Dunks',
  FitnessShorts = 'FitnessShorts',
  Fleece = 'Fleece',
  Football = 'Football',
  Gifts_30AndUnder = 'Gifts_30_and_Under',
  GoftsCards = 'GoftsCards',
  Golf = 'Golf',
  Hoodies = 'Hoodies',
  JordanHeatCheck = 'JordanHeatCheck',
  LeBron = 'LeBron',
  MemberProduct = 'MemberProduct',
  Metcon = 'Metcon',
  New = 'New',
  NewArrivals = 'NewArrivals',
  NewAndUpcomingDrops = 'New_and_UpcomingDrops',
  NikeLab = 'NikeLab',
  NikeSb = 'NikeSB',
  Pants = 'Pants',
  Pegasus = 'Pegasus',
  Running = 'Running',
  SnkrLaunchCalendar = 'SNKRLaunchCalendar',
  Shoes = 'Shoes',
  Shoes_100AndUnder = 'Shoes_100_and_Under',
  Soccer = 'Soccer',
  Socks = 'Socks',
  TrainingAndGym = 'Training_and_Gym',
  UltimateSalgeUpTo60Off = 'UltimateSalgeUpTo60_Off',
  Underwear = 'Underwear',
  Valeyball = 'Valeyball',
  Yoga = 'Yoga',
}

export enum Enum_Sectionshoe_Pagesubtitle2 {
  AirForce = 'AirForce',
  AirJordan = 'AirJordan',
  AirMax = 'AirMax',
  AllGifts = 'AllGifts',
  Baseball = 'Baseball',
  Basketball = 'Basketball',
  BasketballAndLifestyle = 'Basketball_and_Lifestyle',
  BestSellers = 'BestSellers',
  BitAndRall = 'Bit_and_Rall',
  Blazer = 'Blazer',
  Boots = 'Boots',
  Clothing = 'Clothing',
  CrossCountry = 'CrossCountry',
  Drops101 = 'Drops101',
  Dunks = 'Dunks',
  FitnessShorts = 'FitnessShorts',
  Fleece = 'Fleece',
  Football = 'Football',
  Gifts_30AndUnder = 'Gifts_30_and_Under',
  GoftsCards = 'GoftsCards',
  Golf = 'Golf',
  Hoodies = 'Hoodies',
  JordanHeatCheck = 'JordanHeatCheck',
  LeBron = 'LeBron',
  MemberProduct = 'MemberProduct',
  Metcon = 'Metcon',
  New = 'New',
  NewArrivals = 'NewArrivals',
  NewAndUpcomingDrops = 'New_and_UpcomingDrops',
  NikeLab = 'NikeLab',
  NikeSb = 'NikeSB',
  Pants = 'Pants',
  Pegasus = 'Pegasus',
  Running = 'Running',
  SnkrLaunchCalendar = 'SNKRLaunchCalendar',
  Shoes = 'Shoes',
  Shoes_100AndUnder = 'Shoes_100_and_Under',
  Soccer = 'Soccer',
  Socks = 'Socks',
  TrainingAndGym = 'Training_and_Gym',
  UltimateSalgeUpTo60Off = 'UltimateSalgeUpTo60_Off',
  Underwear = 'Underwear',
  Valeyball = 'Valeyball',
  Yoga = 'Yoga',
}

export enum Enum_Sectionshoe_Pagetitle {
  Accessories = 'Accessories',
  Kids = 'Kids',
  Men = 'Men',
  NewAndFutured = 'New_and_Futured',
  Sale = 'Sale',
  Women = 'Women',
}

export enum Enum_Sectionshoe_Pagetitle2 {
  Accessories = 'Accessories',
  Kids = 'Kids',
  Men = 'Men',
  NewAndFutured = 'New_and_Futured',
  Sale = 'Sale',
  Women = 'Women',
}

export enum Enum_Sectionshoe_Pagetitle3 {
  Accessories = 'Accessories',
  Kids = 'Kids',
  Men = 'Men',
  NewAndFutured = 'New_and_Futured',
  Sale = 'Sale',
  Women = 'Women',
}

export enum Enum_Sectionshoe_Tags {
  Basketball = 'basketball',
  Kids = 'kids',
  Men = 'men',
  Shoes = 'shoes',
  Women = 'women',
}

export enum Enum_Type_Name {
  BasketballShoes = 'Basketball_Shoes',
  MenSShoes = 'Men_s_Shoes',
  WomenSShoes = 'Women_s_Shoes',
}

export type FileInfoInput = {
  readonly alternativeText: InputMaybe<Scalars['String']['input']>;
  readonly caption: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly contains: InputMaybe<Scalars['Float']['input']>;
  readonly containsi: InputMaybe<Scalars['Float']['input']>;
  readonly endsWith: InputMaybe<Scalars['Float']['input']>;
  readonly eq: InputMaybe<Scalars['Float']['input']>;
  readonly eqi: InputMaybe<Scalars['Float']['input']>;
  readonly gt: InputMaybe<Scalars['Float']['input']>;
  readonly gte: InputMaybe<Scalars['Float']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly lt: InputMaybe<Scalars['Float']['input']>;
  readonly lte: InputMaybe<Scalars['Float']['input']>;
  readonly ne: InputMaybe<Scalars['Float']['input']>;
  readonly nei: InputMaybe<Scalars['Float']['input']>;
  readonly not: InputMaybe<FloatFilterInput>;
  readonly notContains: InputMaybe<Scalars['Float']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Float']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph =
  | BannerSection
  | ComponentEntityShoeOption
  | ComponentKidSizes1Y
  | ComponentKidSizes2Y
  | ComponentKidSizes3Y
  | ComponentKidSizes11C
  | ComponentKidSizes12C
  | ComponentKidSizes13C
  | ComponentKidSizes15Y
  | ComponentKidSizes25Y
  | ComponentKidSizes105C
  | ComponentKidSizes115C
  | ComponentKidSizes125C
  | ComponentKidSizes135C
  | ComponentLayoutHeaderLinkList
  | ComponentMenSizesM7W85
  | ComponentMenSizesM8W95
  | ComponentMenSizesM9W105
  | ComponentMenSizesM10W115
  | ComponentMenSizesM11W125
  | ComponentMenSizesM12W135
  | ComponentMenSizesM13W145
  | ComponentMenSizesM14W155
  | ComponentMenSizesM15W165
  | ComponentMenSizesM16W175
  | ComponentMenSizesM17W185
  | ComponentMenSizesM18W195
  | ComponentMenSizesM75W9
  | ComponentMenSizesM85W10
  | ComponentMenSizesM95W11
  | ComponentMenSizesM105W12
  | ComponentMenSizesM115W13
  | ComponentMenSizesM125W14
  | ComponentSettingsBannerSection
  | ComponentSettingsKidSizes
  | ComponentSettingsMenSizes
  | ComponentSettingsSize
  | ComponentSettingsWomenSizes
  | ComponentUiBannerCard
  | ComponentUiButton
  | ComponentUiFigure
  | ComponentUiLink
  | ComponentUiLinkList
  | ComponentUiMembershipCard
  | ComponentUiShoeCardForCarousel
  | ComponentUiSizes
  | ComponentUiTrendCard
  | ComponentWomenSizesW5M35
  | ComponentWomenSizesW6M45
  | ComponentWomenSizesW7M55
  | ComponentWomenSizesW8M65
  | ComponentWomenSizesW9M75
  | ComponentWomenSizesW10M85
  | ComponentWomenSizesW11M95
  | ComponentWomenSizesW12M105
  | ComponentWomenSizesW55M4
  | ComponentWomenSizesW65M5
  | ComponentWomenSizesW75M6
  | ComponentWomenSizesW85M7
  | ComponentWomenSizesW95M8
  | ComponentWomenSizesW105M9
  | ComponentWomenSizesW115M10
  | Country
  | GoodsPage
  | HomePage
  | I18NLocale
  | KidSize
  | Language
  | LayoutHeader
  | MenSize
  | PageHome
  | PageShoe
  | SectionMainTitle
  | SectionMembership
  | SectionPopular
  | SectionShoe
  | SectionTrend
  | Shoe
  | Size
  | Type
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | WomenSize;

export type GoodsPage = {
  readonly __typename?: 'GoodsPage';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly good: Maybe<ReadonlyArray<Maybe<ComponentUiShoeCardForCarousel>>>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<GoodsPageRelationResponseCollection>;
  readonly pageTitle: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type GoodsPageGoodArgs = {
  filters: InputMaybe<ComponentUiShoeCardForCarouselFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type GoodsPageLocalizationsArgs = {
  filters: InputMaybe<GoodsPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type GoodsPageEntity = {
  readonly __typename?: 'GoodsPageEntity';
  readonly attributes: Maybe<GoodsPage>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type GoodsPageEntityResponse = {
  readonly __typename?: 'GoodsPageEntityResponse';
  readonly data: Maybe<GoodsPageEntity>;
};

export type GoodsPageEntityResponseCollection = {
  readonly __typename?: 'GoodsPageEntityResponseCollection';
  readonly data: ReadonlyArray<GoodsPageEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type GoodsPageFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<GoodsPageFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly good: InputMaybe<ComponentUiShoeCardForCarouselFiltersInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<GoodsPageFiltersInput>;
  readonly not: InputMaybe<GoodsPageFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<GoodsPageFiltersInput>>>;
  readonly pageTitle: InputMaybe<StringFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type GoodsPageInput = {
  readonly good: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiShoeCardForCarouselInput>>>;
  readonly pageTitle: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type GoodsPageRelationResponseCollection = {
  readonly __typename?: 'GoodsPageRelationResponseCollection';
  readonly data: ReadonlyArray<GoodsPageEntity>;
};

export type HomePage = {
  readonly __typename?: 'HomePage';
  readonly banner_section: Maybe<BannerSectionEntityResponse>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<HomePageRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly section_main_title: Maybe<SectionMainTitleEntityResponse>;
  readonly section_membership: Maybe<SectionMembershipEntityResponse>;
  readonly section_popular: Maybe<SectionPopularEntityResponse>;
  readonly section_trend: Maybe<SectionTrendEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type HomePageLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type HomePageEntity = {
  readonly __typename?: 'HomePageEntity';
  readonly attributes: Maybe<HomePage>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type HomePageEntityResponse = {
  readonly __typename?: 'HomePageEntityResponse';
  readonly data: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  readonly banner_section: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly section_main_title: InputMaybe<Scalars['ID']['input']>;
  readonly section_membership: InputMaybe<Scalars['ID']['input']>;
  readonly section_popular: InputMaybe<Scalars['ID']['input']>;
  readonly section_trend: InputMaybe<Scalars['ID']['input']>;
};

export type HomePageRelationResponseCollection = {
  readonly __typename?: 'HomePageRelationResponseCollection';
  readonly data: ReadonlyArray<HomePageEntity>;
};

export type I18NLocale = {
  readonly __typename?: 'I18NLocale';
  readonly code: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  readonly __typename?: 'I18NLocaleEntity';
  readonly attributes: Maybe<I18NLocale>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  readonly __typename?: 'I18NLocaleEntityResponse';
  readonly data: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  readonly __typename?: 'I18NLocaleEntityResponseCollection';
  readonly data: ReadonlyArray<I18NLocaleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly code: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<I18NLocaleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly contains: InputMaybe<Scalars['ID']['input']>;
  readonly containsi: InputMaybe<Scalars['ID']['input']>;
  readonly endsWith: InputMaybe<Scalars['ID']['input']>;
  readonly eq: InputMaybe<Scalars['ID']['input']>;
  readonly eqi: InputMaybe<Scalars['ID']['input']>;
  readonly gt: InputMaybe<Scalars['ID']['input']>;
  readonly gte: InputMaybe<Scalars['ID']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly lt: InputMaybe<Scalars['ID']['input']>;
  readonly lte: InputMaybe<Scalars['ID']['input']>;
  readonly ne: InputMaybe<Scalars['ID']['input']>;
  readonly nei: InputMaybe<Scalars['ID']['input']>;
  readonly not: InputMaybe<IdFilterInput>;
  readonly notContains: InputMaybe<Scalars['ID']['input']>;
  readonly notContainsi: InputMaybe<Scalars['ID']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly contains: InputMaybe<Scalars['Int']['input']>;
  readonly containsi: InputMaybe<Scalars['Int']['input']>;
  readonly endsWith: InputMaybe<Scalars['Int']['input']>;
  readonly eq: InputMaybe<Scalars['Int']['input']>;
  readonly eqi: InputMaybe<Scalars['Int']['input']>;
  readonly gt: InputMaybe<Scalars['Int']['input']>;
  readonly gte: InputMaybe<Scalars['Int']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly lt: InputMaybe<Scalars['Int']['input']>;
  readonly lte: InputMaybe<Scalars['Int']['input']>;
  readonly ne: InputMaybe<Scalars['Int']['input']>;
  readonly nei: InputMaybe<Scalars['Int']['input']>;
  readonly not: InputMaybe<IntFilterInput>;
  readonly notContains: InputMaybe<Scalars['Int']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Int']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly contains: InputMaybe<Scalars['JSON']['input']>;
  readonly containsi: InputMaybe<Scalars['JSON']['input']>;
  readonly endsWith: InputMaybe<Scalars['JSON']['input']>;
  readonly eq: InputMaybe<Scalars['JSON']['input']>;
  readonly eqi: InputMaybe<Scalars['JSON']['input']>;
  readonly gt: InputMaybe<Scalars['JSON']['input']>;
  readonly gte: InputMaybe<Scalars['JSON']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly lt: InputMaybe<Scalars['JSON']['input']>;
  readonly lte: InputMaybe<Scalars['JSON']['input']>;
  readonly ne: InputMaybe<Scalars['JSON']['input']>;
  readonly nei: InputMaybe<Scalars['JSON']['input']>;
  readonly not: InputMaybe<JsonFilterInput>;
  readonly notContains: InputMaybe<Scalars['JSON']['input']>;
  readonly notContainsi: InputMaybe<Scalars['JSON']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['JSON']['input']>;
};

export type KidSize = {
  readonly __typename?: 'KidSize';
  readonly c11: ComponentKidSizes11C;
  readonly c12: ComponentKidSizes12C;
  readonly c13: ComponentKidSizes13C;
  readonly c105: ComponentKidSizes105C;
  readonly c115: ComponentKidSizes115C;
  readonly c125: ComponentKidSizes125C;
  readonly c135: ComponentKidSizes135C;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<KidSizeRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly y1: ComponentKidSizes1Y;
  readonly y2: ComponentKidSizes2Y;
  readonly y3: ComponentKidSizes3Y;
  readonly y15: ComponentKidSizes15Y;
  readonly y25: ComponentKidSizes25Y;
};

export type KidSizeLocalizationsArgs = {
  filters: InputMaybe<KidSizeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type KidSizeEntity = {
  readonly __typename?: 'KidSizeEntity';
  readonly attributes: Maybe<KidSize>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type KidSizeEntityResponse = {
  readonly __typename?: 'KidSizeEntityResponse';
  readonly data: Maybe<KidSizeEntity>;
};

export type KidSizeEntityResponseCollection = {
  readonly __typename?: 'KidSizeEntityResponseCollection';
  readonly data: ReadonlyArray<KidSizeEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type KidSizeFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<KidSizeFiltersInput>>>;
  readonly c11: InputMaybe<ComponentKidSizes11CFiltersInput>;
  readonly c12: InputMaybe<ComponentKidSizes12CFiltersInput>;
  readonly c13: InputMaybe<ComponentKidSizes13CFiltersInput>;
  readonly c105: InputMaybe<ComponentKidSizes105CFiltersInput>;
  readonly c115: InputMaybe<ComponentKidSizes115CFiltersInput>;
  readonly c125: InputMaybe<ComponentKidSizes125CFiltersInput>;
  readonly c135: InputMaybe<ComponentKidSizes135CFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<KidSizeFiltersInput>;
  readonly not: InputMaybe<KidSizeFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<KidSizeFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly y1: InputMaybe<ComponentKidSizes1YFiltersInput>;
  readonly y2: InputMaybe<ComponentKidSizes2YFiltersInput>;
  readonly y3: InputMaybe<ComponentKidSizes3YFiltersInput>;
  readonly y15: InputMaybe<ComponentKidSizes15YFiltersInput>;
  readonly y25: InputMaybe<ComponentKidSizes25YFiltersInput>;
};

export type KidSizeInput = {
  readonly c11: InputMaybe<ComponentKidSizes11CInput>;
  readonly c12: InputMaybe<ComponentKidSizes12CInput>;
  readonly c13: InputMaybe<ComponentKidSizes13CInput>;
  readonly c105: InputMaybe<ComponentKidSizes105CInput>;
  readonly c115: InputMaybe<ComponentKidSizes115CInput>;
  readonly c125: InputMaybe<ComponentKidSizes125CInput>;
  readonly c135: InputMaybe<ComponentKidSizes135CInput>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly y1: InputMaybe<ComponentKidSizes1YInput>;
  readonly y2: InputMaybe<ComponentKidSizes2YInput>;
  readonly y3: InputMaybe<ComponentKidSizes3YInput>;
  readonly y15: InputMaybe<ComponentKidSizes15YInput>;
  readonly y25: InputMaybe<ComponentKidSizes25YInput>;
};

export type KidSizeRelationResponseCollection = {
  readonly __typename?: 'KidSizeRelationResponseCollection';
  readonly data: ReadonlyArray<KidSizeEntity>;
};

export type Language = {
  readonly __typename?: 'Language';
  readonly code: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly name: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type LanguageEntity = {
  readonly __typename?: 'LanguageEntity';
  readonly attributes: Maybe<Language>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type LanguageEntityResponse = {
  readonly __typename?: 'LanguageEntityResponse';
  readonly data: Maybe<LanguageEntity>;
};

export type LanguageEntityResponseCollection = {
  readonly __typename?: 'LanguageEntityResponseCollection';
  readonly data: ReadonlyArray<LanguageEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type LanguageFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<LanguageFiltersInput>>>;
  readonly code: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<LanguageFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<LanguageFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type LanguageInput = {
  readonly code: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type LayoutHeader = {
  readonly __typename?: 'LayoutHeader';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<LayoutHeaderRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type LayoutHeaderLocalizationsArgs = {
  filters: InputMaybe<LayoutHeaderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type LayoutHeaderEntity = {
  readonly __typename?: 'LayoutHeaderEntity';
  readonly attributes: Maybe<LayoutHeader>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type LayoutHeaderEntityResponse = {
  readonly __typename?: 'LayoutHeaderEntityResponse';
  readonly data: Maybe<LayoutHeaderEntity>;
};

export type LayoutHeaderEntityResponseCollection = {
  readonly __typename?: 'LayoutHeaderEntityResponseCollection';
  readonly data: ReadonlyArray<LayoutHeaderEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type LayoutHeaderFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<LayoutHeaderFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<LayoutHeaderFiltersInput>;
  readonly not: InputMaybe<LayoutHeaderFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<LayoutHeaderFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type LayoutHeaderInput = {
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type LayoutHeaderRelationResponseCollection = {
  readonly __typename?: 'LayoutHeaderRelationResponseCollection';
  readonly data: ReadonlyArray<LayoutHeaderEntity>;
};

export type MenSize = {
  readonly __typename?: 'MenSize';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<MenSizeRelationResponseCollection>;
  readonly m7: ComponentMenSizesM7W85;
  readonly m8: ComponentMenSizesM8W95;
  readonly m9: ComponentMenSizesM9W105;
  readonly m10: ComponentMenSizesM10W115;
  readonly m11: ComponentMenSizesM11W125;
  readonly m12: ComponentMenSizesM12W135;
  readonly m13: ComponentMenSizesM13W145;
  readonly m14: ComponentMenSizesM14W155;
  readonly m15: ComponentMenSizesM15W165;
  readonly m16: ComponentMenSizesM16W175;
  readonly m17: Maybe<ComponentMenSizesM17W185>;
  readonly m18: ComponentMenSizesM18W195;
  readonly m75: ComponentMenSizesM75W9;
  readonly m85: ComponentMenSizesM85W10;
  readonly m105: ComponentMenSizesM105W12;
  readonly m115: ComponentMenSizesM115W13;
  readonly m125: ComponentMenSizesM125W14;
  readonly n95: ComponentMenSizesM95W11;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type MenSizeLocalizationsArgs = {
  filters: InputMaybe<MenSizeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type MenSizeEntity = {
  readonly __typename?: 'MenSizeEntity';
  readonly attributes: Maybe<MenSize>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type MenSizeEntityResponse = {
  readonly __typename?: 'MenSizeEntityResponse';
  readonly data: Maybe<MenSizeEntity>;
};

export type MenSizeEntityResponseCollection = {
  readonly __typename?: 'MenSizeEntityResponseCollection';
  readonly data: ReadonlyArray<MenSizeEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type MenSizeFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<MenSizeFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<MenSizeFiltersInput>;
  readonly m7: InputMaybe<ComponentMenSizesM7W85FiltersInput>;
  readonly m8: InputMaybe<ComponentMenSizesM8W95FiltersInput>;
  readonly m9: InputMaybe<ComponentMenSizesM9W105FiltersInput>;
  readonly m10: InputMaybe<ComponentMenSizesM10W115FiltersInput>;
  readonly m11: InputMaybe<ComponentMenSizesM11W125FiltersInput>;
  readonly m12: InputMaybe<ComponentMenSizesM12W135FiltersInput>;
  readonly m13: InputMaybe<ComponentMenSizesM13W145FiltersInput>;
  readonly m14: InputMaybe<ComponentMenSizesM14W155FiltersInput>;
  readonly m15: InputMaybe<ComponentMenSizesM15W165FiltersInput>;
  readonly m16: InputMaybe<ComponentMenSizesM16W175FiltersInput>;
  readonly m17: InputMaybe<ComponentMenSizesM17W185FiltersInput>;
  readonly m18: InputMaybe<ComponentMenSizesM18W195FiltersInput>;
  readonly m75: InputMaybe<ComponentMenSizesM75W9FiltersInput>;
  readonly m85: InputMaybe<ComponentMenSizesM85W10FiltersInput>;
  readonly m105: InputMaybe<ComponentMenSizesM105W12FiltersInput>;
  readonly m115: InputMaybe<ComponentMenSizesM115W13FiltersInput>;
  readonly m125: InputMaybe<ComponentMenSizesM125W14FiltersInput>;
  readonly n95: InputMaybe<ComponentMenSizesM95W11FiltersInput>;
  readonly not: InputMaybe<MenSizeFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<MenSizeFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type MenSizeInput = {
  readonly m7: InputMaybe<ComponentMenSizesM7W85Input>;
  readonly m8: InputMaybe<ComponentMenSizesM8W95Input>;
  readonly m9: InputMaybe<ComponentMenSizesM9W105Input>;
  readonly m10: InputMaybe<ComponentMenSizesM10W115Input>;
  readonly m11: InputMaybe<ComponentMenSizesM11W125Input>;
  readonly m12: InputMaybe<ComponentMenSizesM12W135Input>;
  readonly m13: InputMaybe<ComponentMenSizesM13W145Input>;
  readonly m14: InputMaybe<ComponentMenSizesM14W155Input>;
  readonly m15: InputMaybe<ComponentMenSizesM15W165Input>;
  readonly m16: InputMaybe<ComponentMenSizesM16W175Input>;
  readonly m17: InputMaybe<ComponentMenSizesM17W185Input>;
  readonly m18: InputMaybe<ComponentMenSizesM18W195Input>;
  readonly m75: InputMaybe<ComponentMenSizesM75W9Input>;
  readonly m85: InputMaybe<ComponentMenSizesM85W10Input>;
  readonly m105: InputMaybe<ComponentMenSizesM105W12Input>;
  readonly m115: InputMaybe<ComponentMenSizesM115W13Input>;
  readonly m125: InputMaybe<ComponentMenSizesM125W14Input>;
  readonly n95: InputMaybe<ComponentMenSizesM95W11Input>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type MenSizeRelationResponseCollection = {
  readonly __typename?: 'MenSizeRelationResponseCollection';
  readonly data: ReadonlyArray<MenSizeEntity>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  readonly changePassword: Maybe<UsersPermissionsLoginPayload>;
  readonly createBannerSection: Maybe<BannerSectionEntityResponse>;
  readonly createBannerSectionLocalization: Maybe<BannerSectionEntityResponse>;
  readonly createCountry: Maybe<CountryEntityResponse>;
  readonly createCountryLocalization: Maybe<CountryEntityResponse>;
  readonly createGoodsPage: Maybe<GoodsPageEntityResponse>;
  readonly createGoodsPageLocalization: Maybe<GoodsPageEntityResponse>;
  readonly createHomePageLocalization: Maybe<HomePageEntityResponse>;
  readonly createKidSize: Maybe<KidSizeEntityResponse>;
  readonly createKidSizeLocalization: Maybe<KidSizeEntityResponse>;
  readonly createLanguage: Maybe<LanguageEntityResponse>;
  readonly createLayoutHeader: Maybe<LayoutHeaderEntityResponse>;
  readonly createLayoutHeaderLocalization: Maybe<LayoutHeaderEntityResponse>;
  readonly createMenSize: Maybe<MenSizeEntityResponse>;
  readonly createMenSizeLocalization: Maybe<MenSizeEntityResponse>;
  readonly createPageHome: Maybe<PageHomeEntityResponse>;
  readonly createPageHomeLocalization: Maybe<PageHomeEntityResponse>;
  readonly createPageShoe: Maybe<PageShoeEntityResponse>;
  readonly createPageShoeLocalization: Maybe<PageShoeEntityResponse>;
  readonly createSectionMainTitle: Maybe<SectionMainTitleEntityResponse>;
  readonly createSectionMainTitleLocalization: Maybe<SectionMainTitleEntityResponse>;
  readonly createSectionMembership: Maybe<SectionMembershipEntityResponse>;
  readonly createSectionMembershipLocalization: Maybe<SectionMembershipEntityResponse>;
  readonly createSectionPopular: Maybe<SectionPopularEntityResponse>;
  readonly createSectionPopularLocalization: Maybe<SectionPopularEntityResponse>;
  readonly createSectionShoe: Maybe<SectionShoeEntityResponse>;
  readonly createSectionShoeLocalization: Maybe<SectionShoeEntityResponse>;
  readonly createSectionTrend: Maybe<SectionTrendEntityResponse>;
  readonly createSectionTrendLocalization: Maybe<SectionTrendEntityResponse>;
  readonly createShoe: Maybe<ShoeEntityResponse>;
  readonly createShoeLocalization: Maybe<ShoeEntityResponse>;
  readonly createSize: Maybe<SizeEntityResponse>;
  readonly createSizeLocalization: Maybe<SizeEntityResponse>;
  readonly createType: Maybe<TypeEntityResponse>;
  readonly createTypeLocalization: Maybe<TypeEntityResponse>;
  readonly createUploadFile: Maybe<UploadFileEntityResponse>;
  readonly createUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  readonly createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  readonly createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly createWomenSize: Maybe<WomenSizeEntityResponse>;
  readonly createWomenSizeLocalization: Maybe<WomenSizeEntityResponse>;
  readonly deleteBannerSection: Maybe<BannerSectionEntityResponse>;
  readonly deleteCountry: Maybe<CountryEntityResponse>;
  readonly deleteGoodsPage: Maybe<GoodsPageEntityResponse>;
  readonly deleteHomePage: Maybe<HomePageEntityResponse>;
  readonly deleteKidSize: Maybe<KidSizeEntityResponse>;
  readonly deleteLanguage: Maybe<LanguageEntityResponse>;
  readonly deleteLayoutHeader: Maybe<LayoutHeaderEntityResponse>;
  readonly deleteMenSize: Maybe<MenSizeEntityResponse>;
  readonly deletePageHome: Maybe<PageHomeEntityResponse>;
  readonly deletePageShoe: Maybe<PageShoeEntityResponse>;
  readonly deleteSectionMainTitle: Maybe<SectionMainTitleEntityResponse>;
  readonly deleteSectionMembership: Maybe<SectionMembershipEntityResponse>;
  readonly deleteSectionPopular: Maybe<SectionPopularEntityResponse>;
  readonly deleteSectionShoe: Maybe<SectionShoeEntityResponse>;
  readonly deleteSectionTrend: Maybe<SectionTrendEntityResponse>;
  readonly deleteShoe: Maybe<ShoeEntityResponse>;
  readonly deleteSize: Maybe<SizeEntityResponse>;
  readonly deleteType: Maybe<TypeEntityResponse>;
  readonly deleteUploadFile: Maybe<UploadFileEntityResponse>;
  readonly deleteUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  readonly deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  readonly deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly deleteWomenSize: Maybe<WomenSizeEntityResponse>;
  /** Confirm an email users email address */
  readonly emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  readonly forgotPassword: Maybe<UsersPermissionsPasswordPayload>;
  readonly login: UsersPermissionsLoginPayload;
  readonly multipleUpload: ReadonlyArray<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  readonly register: UsersPermissionsLoginPayload;
  readonly removeFile: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  readonly resetPassword: Maybe<UsersPermissionsLoginPayload>;
  readonly updateBannerSection: Maybe<BannerSectionEntityResponse>;
  readonly updateCountry: Maybe<CountryEntityResponse>;
  readonly updateFileInfo: UploadFileEntityResponse;
  readonly updateGoodsPage: Maybe<GoodsPageEntityResponse>;
  readonly updateHomePage: Maybe<HomePageEntityResponse>;
  readonly updateKidSize: Maybe<KidSizeEntityResponse>;
  readonly updateLanguage: Maybe<LanguageEntityResponse>;
  readonly updateLayoutHeader: Maybe<LayoutHeaderEntityResponse>;
  readonly updateMenSize: Maybe<MenSizeEntityResponse>;
  readonly updatePageHome: Maybe<PageHomeEntityResponse>;
  readonly updatePageShoe: Maybe<PageShoeEntityResponse>;
  readonly updateSectionMainTitle: Maybe<SectionMainTitleEntityResponse>;
  readonly updateSectionMembership: Maybe<SectionMembershipEntityResponse>;
  readonly updateSectionPopular: Maybe<SectionPopularEntityResponse>;
  readonly updateSectionShoe: Maybe<SectionShoeEntityResponse>;
  readonly updateSectionTrend: Maybe<SectionTrendEntityResponse>;
  readonly updateShoe: Maybe<ShoeEntityResponse>;
  readonly updateSize: Maybe<SizeEntityResponse>;
  readonly updateType: Maybe<TypeEntityResponse>;
  readonly updateUploadFile: Maybe<UploadFileEntityResponse>;
  readonly updateUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  readonly updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  readonly updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly updateWomenSize: Maybe<WomenSizeEntityResponse>;
  readonly upload: UploadFileEntityResponse;
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

export type MutationCreateBannerSectionArgs = {
  data: BannerSectionInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateBannerSectionLocalizationArgs = {
  data: InputMaybe<BannerSectionInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateCountryArgs = {
  data: CountryInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateCountryLocalizationArgs = {
  data: InputMaybe<CountryInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateGoodsPageArgs = {
  data: GoodsPageInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateGoodsPageLocalizationArgs = {
  data: InputMaybe<GoodsPageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateHomePageLocalizationArgs = {
  data: InputMaybe<HomePageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateKidSizeArgs = {
  data: KidSizeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateKidSizeLocalizationArgs = {
  data: InputMaybe<KidSizeInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateLanguageArgs = {
  data: LanguageInput;
};

export type MutationCreateLayoutHeaderArgs = {
  data: LayoutHeaderInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateLayoutHeaderLocalizationArgs = {
  data: InputMaybe<LayoutHeaderInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateMenSizeArgs = {
  data: MenSizeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateMenSizeLocalizationArgs = {
  data: InputMaybe<MenSizeInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreatePageHomeArgs = {
  data: PageHomeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreatePageHomeLocalizationArgs = {
  data: InputMaybe<PageHomeInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreatePageShoeArgs = {
  data: PageShoeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreatePageShoeLocalizationArgs = {
  data: InputMaybe<PageShoeInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSectionMainTitleArgs = {
  data: SectionMainTitleInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSectionMainTitleLocalizationArgs = {
  data: InputMaybe<SectionMainTitleInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSectionMembershipArgs = {
  data: SectionMembershipInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSectionMembershipLocalizationArgs = {
  data: InputMaybe<SectionMembershipInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSectionPopularArgs = {
  data: SectionPopularInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSectionPopularLocalizationArgs = {
  data: InputMaybe<SectionPopularInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSectionShoeArgs = {
  data: SectionShoeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSectionShoeLocalizationArgs = {
  data: InputMaybe<SectionShoeInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSectionTrendArgs = {
  data: SectionTrendInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSectionTrendLocalizationArgs = {
  data: InputMaybe<SectionTrendInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateShoeArgs = {
  data: ShoeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateShoeLocalizationArgs = {
  data: InputMaybe<ShoeInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSizeArgs = {
  data: SizeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSizeLocalizationArgs = {
  data: InputMaybe<SizeInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateTypeArgs = {
  data: TypeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateTypeLocalizationArgs = {
  data: InputMaybe<TypeInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationCreateWomenSizeArgs = {
  data: WomenSizeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateWomenSizeLocalizationArgs = {
  data: InputMaybe<WomenSizeInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteBannerSectionArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteCountryArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteGoodsPageArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteHomePageArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteKidSizeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteLanguageArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteLayoutHeaderArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteMenSizeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeletePageHomeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeletePageShoeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteSectionMainTitleArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteSectionMembershipArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteSectionPopularArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteSectionShoeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteSectionTrendArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteShoeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteSizeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteTypeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteWomenSizeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  files: ReadonlyArray<InputMaybe<Scalars['Upload']['input']>>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};

export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

export type MutationUpdateBannerSectionArgs = {
  data: BannerSectionInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateCountryArgs = {
  data: CountryInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info: InputMaybe<FileInfoInput>;
};

export type MutationUpdateGoodsPageArgs = {
  data: GoodsPageInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateKidSizeArgs = {
  data: KidSizeInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateLanguageArgs = {
  data: LanguageInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateLayoutHeaderArgs = {
  data: LayoutHeaderInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateMenSizeArgs = {
  data: MenSizeInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdatePageHomeArgs = {
  data: PageHomeInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdatePageShoeArgs = {
  data: PageShoeInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateSectionMainTitleArgs = {
  data: SectionMainTitleInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateSectionMembershipArgs = {
  data: SectionMembershipInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateSectionPopularArgs = {
  data: SectionPopularInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateSectionShoeArgs = {
  data: SectionShoeInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateSectionTrendArgs = {
  data: SectionTrendInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateShoeArgs = {
  data: ShoeInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateSizeArgs = {
  data: SizeInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateTypeArgs = {
  data: TypeInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateWomenSizeArgs = {
  data: WomenSizeInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info: InputMaybe<FileInfoInput>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};

export type PageHome = {
  readonly __typename?: 'PageHome';
  readonly Title: Scalars['String']['output'];
  readonly banner_section: Maybe<BannerSectionEntityResponse>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<PageHomeRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly section_main_title: Maybe<SectionMainTitleEntityResponse>;
  readonly section_membership: Maybe<SectionMembershipEntityResponse>;
  readonly section_popular: Maybe<SectionPopularEntityResponse>;
  readonly section_trend: Maybe<SectionTrendEntityResponse>;
  readonly settingBannerSection: ComponentSettingsBannerSection;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type PageHomeLocalizationsArgs = {
  filters: InputMaybe<PageHomeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type PageHomeEntity = {
  readonly __typename?: 'PageHomeEntity';
  readonly attributes: Maybe<PageHome>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type PageHomeEntityResponse = {
  readonly __typename?: 'PageHomeEntityResponse';
  readonly data: Maybe<PageHomeEntity>;
};

export type PageHomeEntityResponseCollection = {
  readonly __typename?: 'PageHomeEntityResponseCollection';
  readonly data: ReadonlyArray<PageHomeEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type PageHomeFiltersInput = {
  readonly Title: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<PageHomeFiltersInput>>>;
  readonly banner_section: InputMaybe<BannerSectionFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<PageHomeFiltersInput>;
  readonly not: InputMaybe<PageHomeFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<PageHomeFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly section_main_title: InputMaybe<SectionMainTitleFiltersInput>;
  readonly section_membership: InputMaybe<SectionMembershipFiltersInput>;
  readonly section_popular: InputMaybe<SectionPopularFiltersInput>;
  readonly section_trend: InputMaybe<SectionTrendFiltersInput>;
  readonly settingBannerSection: InputMaybe<ComponentSettingsBannerSectionFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type PageHomeInput = {
  readonly Title: InputMaybe<Scalars['String']['input']>;
  readonly banner_section: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly section_main_title: InputMaybe<Scalars['ID']['input']>;
  readonly section_membership: InputMaybe<Scalars['ID']['input']>;
  readonly section_popular: InputMaybe<Scalars['ID']['input']>;
  readonly section_trend: InputMaybe<Scalars['ID']['input']>;
  readonly settingBannerSection: InputMaybe<ComponentSettingsBannerSectionInput>;
};

export type PageHomeRelationResponseCollection = {
  readonly __typename?: 'PageHomeRelationResponseCollection';
  readonly data: ReadonlyArray<PageHomeEntity>;
};

export type PageShoe = {
  readonly __typename?: 'PageShoe';
  readonly banner_section: Maybe<BannerSectionEntityResponse>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<PageShoeRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly section_shoe: Maybe<SectionShoeEntityResponse>;
  readonly section_trend: Maybe<SectionTrendEntityResponse>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type PageShoeLocalizationsArgs = {
  filters: InputMaybe<PageShoeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type PageShoeEntity = {
  readonly __typename?: 'PageShoeEntity';
  readonly attributes: Maybe<PageShoe>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type PageShoeEntityResponse = {
  readonly __typename?: 'PageShoeEntityResponse';
  readonly data: Maybe<PageShoeEntity>;
};

export type PageShoeEntityResponseCollection = {
  readonly __typename?: 'PageShoeEntityResponseCollection';
  readonly data: ReadonlyArray<PageShoeEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type PageShoeFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<PageShoeFiltersInput>>>;
  readonly banner_section: InputMaybe<BannerSectionFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<PageShoeFiltersInput>;
  readonly not: InputMaybe<PageShoeFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<PageShoeFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly section_shoe: InputMaybe<SectionShoeFiltersInput>;
  readonly section_trend: InputMaybe<SectionTrendFiltersInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type PageShoeInput = {
  readonly banner_section: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly section_shoe: InputMaybe<Scalars['ID']['input']>;
  readonly section_trend: InputMaybe<Scalars['ID']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type PageShoeRelationResponseCollection = {
  readonly __typename?: 'PageShoeRelationResponseCollection';
  readonly data: ReadonlyArray<PageShoeEntity>;
};

export type Pagination = {
  readonly __typename?: 'Pagination';
  readonly page: Scalars['Int']['output'];
  readonly pageCount: Scalars['Int']['output'];
  readonly pageSize: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type PaginationArg = {
  readonly limit: InputMaybe<Scalars['Int']['input']>;
  readonly page: InputMaybe<Scalars['Int']['input']>;
  readonly pageSize: InputMaybe<Scalars['Int']['input']>;
  readonly start: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  readonly __typename?: 'Query';
  readonly bannerSection: Maybe<BannerSectionEntityResponse>;
  readonly bannerSections: Maybe<BannerSectionEntityResponseCollection>;
  readonly countries: Maybe<CountryEntityResponseCollection>;
  readonly country: Maybe<CountryEntityResponse>;
  readonly goodsPage: Maybe<GoodsPageEntityResponse>;
  readonly goodsPages: Maybe<GoodsPageEntityResponseCollection>;
  readonly homePage: Maybe<HomePageEntityResponse>;
  readonly i18NLocale: Maybe<I18NLocaleEntityResponse>;
  readonly i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
  readonly kidSize: Maybe<KidSizeEntityResponse>;
  readonly kidSizes: Maybe<KidSizeEntityResponseCollection>;
  readonly language: Maybe<LanguageEntityResponse>;
  readonly languages: Maybe<LanguageEntityResponseCollection>;
  readonly layoutHeader: Maybe<LayoutHeaderEntityResponse>;
  readonly layoutHeaders: Maybe<LayoutHeaderEntityResponseCollection>;
  readonly me: Maybe<UsersPermissionsMe>;
  readonly menSize: Maybe<MenSizeEntityResponse>;
  readonly menSizes: Maybe<MenSizeEntityResponseCollection>;
  readonly pageHome: Maybe<PageHomeEntityResponse>;
  readonly pageHomes: Maybe<PageHomeEntityResponseCollection>;
  readonly pageShoe: Maybe<PageShoeEntityResponse>;
  readonly pageShoes: Maybe<PageShoeEntityResponseCollection>;
  readonly sectionMainTitle: Maybe<SectionMainTitleEntityResponse>;
  readonly sectionMainTitles: Maybe<SectionMainTitleEntityResponseCollection>;
  readonly sectionMembership: Maybe<SectionMembershipEntityResponse>;
  readonly sectionMemberships: Maybe<SectionMembershipEntityResponseCollection>;
  readonly sectionPopular: Maybe<SectionPopularEntityResponse>;
  readonly sectionPopulars: Maybe<SectionPopularEntityResponseCollection>;
  readonly sectionShoe: Maybe<SectionShoeEntityResponse>;
  readonly sectionShoes: Maybe<SectionShoeEntityResponseCollection>;
  readonly sectionTrend: Maybe<SectionTrendEntityResponse>;
  readonly sectionTrends: Maybe<SectionTrendEntityResponseCollection>;
  readonly shoe: Maybe<ShoeEntityResponse>;
  readonly shoes: Maybe<ShoeEntityResponseCollection>;
  readonly size: Maybe<SizeEntityResponse>;
  readonly sizes: Maybe<SizeEntityResponseCollection>;
  readonly type: Maybe<TypeEntityResponse>;
  readonly types: Maybe<TypeEntityResponseCollection>;
  readonly uploadFile: Maybe<UploadFileEntityResponse>;
  readonly uploadFiles: Maybe<UploadFileEntityResponseCollection>;
  readonly uploadFolder: Maybe<UploadFolderEntityResponse>;
  readonly uploadFolders: Maybe<UploadFolderEntityResponseCollection>;
  readonly usersPermissionsRole: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly usersPermissionsRoles: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  readonly usersPermissionsUser: Maybe<UsersPermissionsUserEntityResponse>;
  readonly usersPermissionsUsers: Maybe<UsersPermissionsUserEntityResponseCollection>;
  readonly womenSize: Maybe<WomenSizeEntityResponse>;
  readonly womenSizes: Maybe<WomenSizeEntityResponseCollection>;
};

export type QueryBannerSectionArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryBannerSectionsArgs = {
  filters: InputMaybe<BannerSectionFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryCountriesArgs = {
  filters: InputMaybe<CountryFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryCountryArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryGoodsPageArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryGoodsPagesArgs = {
  filters: InputMaybe<GoodsPageFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryHomePageArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryI18NLocaleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryKidSizeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryKidSizesArgs = {
  filters: InputMaybe<KidSizeFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryLanguageArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryLanguagesArgs = {
  filters: InputMaybe<LanguageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryLayoutHeaderArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryLayoutHeadersArgs = {
  filters: InputMaybe<LayoutHeaderFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryMenSizeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryMenSizesArgs = {
  filters: InputMaybe<MenSizeFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryPageHomeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryPageHomesArgs = {
  filters: InputMaybe<PageHomeFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryPageShoeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryPageShoesArgs = {
  filters: InputMaybe<PageShoeFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QuerySectionMainTitleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QuerySectionMainTitlesArgs = {
  filters: InputMaybe<SectionMainTitleFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QuerySectionMembershipArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QuerySectionMembershipsArgs = {
  filters: InputMaybe<SectionMembershipFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QuerySectionPopularArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QuerySectionPopularsArgs = {
  filters: InputMaybe<SectionPopularFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QuerySectionShoeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QuerySectionShoesArgs = {
  filters: InputMaybe<SectionShoeFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QuerySectionTrendArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QuerySectionTrendsArgs = {
  filters: InputMaybe<SectionTrendFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryShoeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryShoesArgs = {
  filters: InputMaybe<ShoeFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QuerySizeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QuerySizesArgs = {
  filters: InputMaybe<SizeFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryTypeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryTypesArgs = {
  filters: InputMaybe<TypeFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUploadFileArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUploadFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUploadFolderArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUploadFoldersArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryWomenSizeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryWomenSizesArgs = {
  filters: InputMaybe<WomenSizeFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  readonly __typename?: 'ResponseCollectionMeta';
  readonly pagination: Pagination;
};

export type SectionMainTitle = {
  readonly __typename?: 'SectionMainTitle';
  readonly MainTitle: Scalars['String']['output'];
  readonly ShowCollectionLinkButton: ComponentUiButton;
  readonly SubTitle: Maybe<Scalars['String']['output']>;
  readonly Title: Scalars['String']['output'];
  readonly Video: Maybe<UploadFileEntityResponse>;
  readonly WatchLinkButton: ComponentUiButton;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<SectionMainTitleRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type SectionMainTitleLocalizationsArgs = {
  filters: InputMaybe<SectionMainTitleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionMainTitleEntity = {
  readonly __typename?: 'SectionMainTitleEntity';
  readonly attributes: Maybe<SectionMainTitle>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type SectionMainTitleEntityResponse = {
  readonly __typename?: 'SectionMainTitleEntityResponse';
  readonly data: Maybe<SectionMainTitleEntity>;
};

export type SectionMainTitleEntityResponseCollection = {
  readonly __typename?: 'SectionMainTitleEntityResponseCollection';
  readonly data: ReadonlyArray<SectionMainTitleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type SectionMainTitleFiltersInput = {
  readonly MainTitle: InputMaybe<StringFilterInput>;
  readonly ShowCollectionLinkButton: InputMaybe<ComponentUiButtonFiltersInput>;
  readonly SubTitle: InputMaybe<StringFilterInput>;
  readonly Title: InputMaybe<StringFilterInput>;
  readonly WatchLinkButton: InputMaybe<ComponentUiButtonFiltersInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<SectionMainTitleFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<SectionMainTitleFiltersInput>;
  readonly not: InputMaybe<SectionMainTitleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<SectionMainTitleFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type SectionMainTitleInput = {
  readonly MainTitle: InputMaybe<Scalars['String']['input']>;
  readonly ShowCollectionLinkButton: InputMaybe<ComponentUiButtonInput>;
  readonly SubTitle: InputMaybe<Scalars['String']['input']>;
  readonly Title: InputMaybe<Scalars['String']['input']>;
  readonly Video: InputMaybe<Scalars['ID']['input']>;
  readonly WatchLinkButton: InputMaybe<ComponentUiButtonInput>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type SectionMainTitleRelationResponseCollection = {
  readonly __typename?: 'SectionMainTitleRelationResponseCollection';
  readonly data: ReadonlyArray<SectionMainTitleEntity>;
};

export type SectionMembership = {
  readonly __typename?: 'SectionMembership';
  readonly JoinUsButton: Maybe<ComponentUiButton>;
  readonly SignInButton: Maybe<ComponentUiButton>;
  readonly card: Maybe<ReadonlyArray<Maybe<ComponentUiMembershipCard>>>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<SectionMembershipRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly subtitle: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type SectionMembershipCardArgs = {
  filters: InputMaybe<ComponentUiMembershipCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionMembershipLocalizationsArgs = {
  filters: InputMaybe<SectionMembershipFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionMembershipEntity = {
  readonly __typename?: 'SectionMembershipEntity';
  readonly attributes: Maybe<SectionMembership>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type SectionMembershipEntityResponse = {
  readonly __typename?: 'SectionMembershipEntityResponse';
  readonly data: Maybe<SectionMembershipEntity>;
};

export type SectionMembershipEntityResponseCollection = {
  readonly __typename?: 'SectionMembershipEntityResponseCollection';
  readonly data: ReadonlyArray<SectionMembershipEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type SectionMembershipFiltersInput = {
  readonly JoinUsButton: InputMaybe<ComponentUiButtonFiltersInput>;
  readonly SignInButton: InputMaybe<ComponentUiButtonFiltersInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<SectionMembershipFiltersInput>>>;
  readonly card: InputMaybe<ComponentUiMembershipCardFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<SectionMembershipFiltersInput>;
  readonly not: InputMaybe<SectionMembershipFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<SectionMembershipFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly subtitle: InputMaybe<StringFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type SectionMembershipInput = {
  readonly JoinUsButton: InputMaybe<ComponentUiButtonInput>;
  readonly SignInButton: InputMaybe<ComponentUiButtonInput>;
  readonly card: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiMembershipCardInput>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly subtitle: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type SectionMembershipRelationResponseCollection = {
  readonly __typename?: 'SectionMembershipRelationResponseCollection';
  readonly data: ReadonlyArray<SectionMembershipEntity>;
};

export type SectionPopular = {
  readonly __typename?: 'SectionPopular';
  readonly card: ReadonlyArray<Maybe<ComponentUiShoeCardForCarousel>>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<SectionPopularRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly sectionTitle: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type SectionPopularCardArgs = {
  filters: InputMaybe<ComponentUiShoeCardForCarouselFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionPopularLocalizationsArgs = {
  filters: InputMaybe<SectionPopularFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionPopularEntity = {
  readonly __typename?: 'SectionPopularEntity';
  readonly attributes: Maybe<SectionPopular>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type SectionPopularEntityResponse = {
  readonly __typename?: 'SectionPopularEntityResponse';
  readonly data: Maybe<SectionPopularEntity>;
};

export type SectionPopularEntityResponseCollection = {
  readonly __typename?: 'SectionPopularEntityResponseCollection';
  readonly data: ReadonlyArray<SectionPopularEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type SectionPopularFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<SectionPopularFiltersInput>>>;
  readonly card: InputMaybe<ComponentUiShoeCardForCarouselFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<SectionPopularFiltersInput>;
  readonly not: InputMaybe<SectionPopularFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<SectionPopularFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly sectionTitle: InputMaybe<StringFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type SectionPopularInput = {
  readonly card: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiShoeCardForCarouselInput>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly sectionTitle: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type SectionPopularRelationResponseCollection = {
  readonly __typename?: 'SectionPopularRelationResponseCollection';
  readonly data: ReadonlyArray<SectionPopularEntity>;
};

export type SectionShoe = {
  readonly __typename?: 'SectionShoe';
  readonly KidSizes: Maybe<ComponentSettingsKidSizes>;
  readonly MenSizes: Maybe<ComponentSettingsMenSizes>;
  readonly WomenSizes: Maybe<ComponentSettingsWomenSizes>;
  readonly addToBagButton: Maybe<ComponentUiButton>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly detailsButton: Maybe<ReadonlyArray<Maybe<ComponentUiButton>>>;
  readonly favoriteButton: Maybe<ComponentUiButton>;
  readonly gender: Enum_Sectionshoe_Gender;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<SectionShoeRelationResponseCollection>;
  readonly options: ComponentEntityShoeOption;
  readonly pageSubtitle: Enum_Sectionshoe_Pagesubtitle;
  readonly pageSubtitle2: Maybe<Enum_Sectionshoe_Pagesubtitle2>;
  readonly pageTitle: Enum_Sectionshoe_Pagetitle;
  readonly pageTitle2: Maybe<Enum_Sectionshoe_Pagetitle2>;
  readonly pageTitle3: Maybe<Enum_Sectionshoe_Pagetitle3>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly sizes: ComponentUiSizes;
  readonly tags: Enum_Sectionshoe_Tags;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type SectionShoeDetailsButtonArgs = {
  filters: InputMaybe<ComponentUiButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionShoeLocalizationsArgs = {
  filters: InputMaybe<SectionShoeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionShoeEntity = {
  readonly __typename?: 'SectionShoeEntity';
  readonly attributes: Maybe<SectionShoe>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type SectionShoeEntityResponse = {
  readonly __typename?: 'SectionShoeEntityResponse';
  readonly data: Maybe<SectionShoeEntity>;
};

export type SectionShoeEntityResponseCollection = {
  readonly __typename?: 'SectionShoeEntityResponseCollection';
  readonly data: ReadonlyArray<SectionShoeEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type SectionShoeFiltersInput = {
  readonly KidSizes: InputMaybe<ComponentSettingsKidSizesFiltersInput>;
  readonly MenSizes: InputMaybe<ComponentSettingsMenSizesFiltersInput>;
  readonly WomenSizes: InputMaybe<ComponentSettingsWomenSizesFiltersInput>;
  readonly addToBagButton: InputMaybe<ComponentUiButtonFiltersInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<SectionShoeFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly detailsButton: InputMaybe<ComponentUiButtonFiltersInput>;
  readonly favoriteButton: InputMaybe<ComponentUiButtonFiltersInput>;
  readonly gender: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<SectionShoeFiltersInput>;
  readonly not: InputMaybe<SectionShoeFiltersInput>;
  readonly options: InputMaybe<ComponentEntityShoeOptionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<SectionShoeFiltersInput>>>;
  readonly pageSubtitle: InputMaybe<StringFilterInput>;
  readonly pageSubtitle2: InputMaybe<StringFilterInput>;
  readonly pageTitle: InputMaybe<StringFilterInput>;
  readonly pageTitle2: InputMaybe<StringFilterInput>;
  readonly pageTitle3: InputMaybe<StringFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly sizes: InputMaybe<ComponentUiSizesFiltersInput>;
  readonly tags: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type SectionShoeInput = {
  readonly KidSizes: InputMaybe<ComponentSettingsKidSizesInput>;
  readonly MenSizes: InputMaybe<ComponentSettingsMenSizesInput>;
  readonly WomenSizes: InputMaybe<ComponentSettingsWomenSizesInput>;
  readonly addToBagButton: InputMaybe<ComponentUiButtonInput>;
  readonly detailsButton: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiButtonInput>>>;
  readonly favoriteButton: InputMaybe<ComponentUiButtonInput>;
  readonly gender: InputMaybe<Enum_Sectionshoe_Gender>;
  readonly options: InputMaybe<ComponentEntityShoeOptionInput>;
  readonly pageSubtitle: InputMaybe<Enum_Sectionshoe_Pagesubtitle>;
  readonly pageSubtitle2: InputMaybe<Enum_Sectionshoe_Pagesubtitle2>;
  readonly pageTitle: InputMaybe<Enum_Sectionshoe_Pagetitle>;
  readonly pageTitle2: InputMaybe<Enum_Sectionshoe_Pagetitle2>;
  readonly pageTitle3: InputMaybe<Enum_Sectionshoe_Pagetitle3>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly sizes: InputMaybe<ComponentUiSizesInput>;
  readonly tags: InputMaybe<Enum_Sectionshoe_Tags>;
};

export type SectionShoeRelationResponseCollection = {
  readonly __typename?: 'SectionShoeRelationResponseCollection';
  readonly data: ReadonlyArray<SectionShoeEntity>;
};

export type SectionTrend = {
  readonly __typename?: 'SectionTrend';
  readonly SectionTitle: Scalars['String']['output'];
  readonly card: ReadonlyArray<Maybe<ComponentUiTrendCard>>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<SectionTrendRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type SectionTrendCardArgs = {
  filters: InputMaybe<ComponentUiTrendCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionTrendLocalizationsArgs = {
  filters: InputMaybe<SectionTrendFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionTrendEntity = {
  readonly __typename?: 'SectionTrendEntity';
  readonly attributes: Maybe<SectionTrend>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type SectionTrendEntityResponse = {
  readonly __typename?: 'SectionTrendEntityResponse';
  readonly data: Maybe<SectionTrendEntity>;
};

export type SectionTrendEntityResponseCollection = {
  readonly __typename?: 'SectionTrendEntityResponseCollection';
  readonly data: ReadonlyArray<SectionTrendEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type SectionTrendFiltersInput = {
  readonly SectionTitle: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<SectionTrendFiltersInput>>>;
  readonly card: InputMaybe<ComponentUiTrendCardFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<SectionTrendFiltersInput>;
  readonly not: InputMaybe<SectionTrendFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<SectionTrendFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type SectionTrendInput = {
  readonly SectionTitle: InputMaybe<Scalars['String']['input']>;
  readonly card: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiTrendCardInput>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type SectionTrendRelationResponseCollection = {
  readonly __typename?: 'SectionTrendRelationResponseCollection';
  readonly data: ReadonlyArray<SectionTrendEntity>;
};

export type Shoe = {
  readonly __typename?: 'Shoe';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Scalars['String']['output'];
  readonly details: Maybe<Scalars['String']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<ShoeRelationResponseCollection>;
  readonly name: Scalars['String']['output'];
  readonly options: ReadonlyArray<Maybe<ComponentEntityShoeOption>>;
  readonly price: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly type: Maybe<TypeEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type ShoeLocalizationsArgs = {
  filters: InputMaybe<ShoeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ShoeOptionsArgs = {
  filters: InputMaybe<ComponentEntityShoeOptionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ShoeEntity = {
  readonly __typename?: 'ShoeEntity';
  readonly attributes: Maybe<Shoe>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type ShoeEntityResponse = {
  readonly __typename?: 'ShoeEntityResponse';
  readonly data: Maybe<ShoeEntity>;
};

export type ShoeEntityResponseCollection = {
  readonly __typename?: 'ShoeEntityResponseCollection';
  readonly data: ReadonlyArray<ShoeEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type ShoeFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ShoeFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly details: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<ShoeFiltersInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ShoeFiltersInput>;
  readonly options: InputMaybe<ComponentEntityShoeOptionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ShoeFiltersInput>>>;
  readonly price: InputMaybe<StringFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly type: InputMaybe<TypeFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ShoeInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly details: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly options: InputMaybe<ReadonlyArray<InputMaybe<ComponentEntityShoeOptionInput>>>;
  readonly price: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly type: InputMaybe<Scalars['ID']['input']>;
};

export type ShoeRelationResponseCollection = {
  readonly __typename?: 'ShoeRelationResponseCollection';
  readonly data: ReadonlyArray<ShoeEntity>;
};

export type Size = {
  readonly __typename?: 'Size';
  readonly Sizes: ReadonlyArray<Maybe<ComponentSettingsSize>>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<SizeRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type SizeSizesArgs = {
  filters: InputMaybe<ComponentSettingsSizeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SizeLocalizationsArgs = {
  filters: InputMaybe<SizeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SizeEntity = {
  readonly __typename?: 'SizeEntity';
  readonly attributes: Maybe<Size>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type SizeEntityResponse = {
  readonly __typename?: 'SizeEntityResponse';
  readonly data: Maybe<SizeEntity>;
};

export type SizeEntityResponseCollection = {
  readonly __typename?: 'SizeEntityResponseCollection';
  readonly data: ReadonlyArray<SizeEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type SizeFiltersInput = {
  readonly Sizes: InputMaybe<ComponentSettingsSizeFiltersInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<SizeFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<SizeFiltersInput>;
  readonly not: InputMaybe<SizeFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<SizeFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type SizeInput = {
  readonly Sizes: InputMaybe<ReadonlyArray<InputMaybe<ComponentSettingsSizeInput>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type SizeRelationResponseCollection = {
  readonly __typename?: 'SizeRelationResponseCollection';
  readonly data: ReadonlyArray<SizeEntity>;
};

export type StringFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly containsi: InputMaybe<Scalars['String']['input']>;
  readonly endsWith: InputMaybe<Scalars['String']['input']>;
  readonly eq: InputMaybe<Scalars['String']['input']>;
  readonly eqi: InputMaybe<Scalars['String']['input']>;
  readonly gt: InputMaybe<Scalars['String']['input']>;
  readonly gte: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly lt: InputMaybe<Scalars['String']['input']>;
  readonly lte: InputMaybe<Scalars['String']['input']>;
  readonly ne: InputMaybe<Scalars['String']['input']>;
  readonly nei: InputMaybe<Scalars['String']['input']>;
  readonly not: InputMaybe<StringFilterInput>;
  readonly notContains: InputMaybe<Scalars['String']['input']>;
  readonly notContainsi: InputMaybe<Scalars['String']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['String']['input']>;
};

export type Type = {
  readonly __typename?: 'Type';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<TypeRelationResponseCollection>;
  readonly name: Maybe<Enum_Type_Name>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly slug: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type TypeLocalizationsArgs = {
  filters: InputMaybe<TypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type TypeEntity = {
  readonly __typename?: 'TypeEntity';
  readonly attributes: Maybe<Type>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type TypeEntityResponse = {
  readonly __typename?: 'TypeEntityResponse';
  readonly data: Maybe<TypeEntity>;
};

export type TypeEntityResponseCollection = {
  readonly __typename?: 'TypeEntityResponseCollection';
  readonly data: ReadonlyArray<TypeEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type TypeFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<TypeFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<TypeFiltersInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<TypeFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<TypeFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly slug: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type TypeInput = {
  readonly name: InputMaybe<Enum_Type_Name>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly slug: InputMaybe<Scalars['String']['input']>;
};

export type TypeRelationResponseCollection = {
  readonly __typename?: 'TypeRelationResponseCollection';
  readonly data: ReadonlyArray<TypeEntity>;
};

export type UploadFile = {
  readonly __typename?: 'UploadFile';
  readonly alternativeText: Maybe<Scalars['String']['output']>;
  readonly caption: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly ext: Maybe<Scalars['String']['output']>;
  readonly formats: Maybe<Scalars['JSON']['output']>;
  readonly hash: Scalars['String']['output'];
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly mime: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly previewUrl: Maybe<Scalars['String']['output']>;
  readonly provider: Scalars['String']['output'];
  readonly provider_metadata: Maybe<Scalars['JSON']['output']>;
  readonly related: Maybe<ReadonlyArray<Maybe<GenericMorph>>>;
  readonly size: Scalars['Float']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly url: Scalars['String']['output'];
  readonly width: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  readonly __typename?: 'UploadFileEntity';
  readonly attributes: Maybe<UploadFile>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  readonly __typename?: 'UploadFileEntityResponse';
  readonly data: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  readonly __typename?: 'UploadFileEntityResponseCollection';
  readonly data: ReadonlyArray<UploadFileEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  readonly alternativeText: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly caption: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly ext: InputMaybe<StringFilterInput>;
  readonly folder: InputMaybe<UploadFolderFiltersInput>;
  readonly folderPath: InputMaybe<StringFilterInput>;
  readonly formats: InputMaybe<JsonFilterInput>;
  readonly hash: InputMaybe<StringFilterInput>;
  readonly height: InputMaybe<IntFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly mime: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UploadFileFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly previewUrl: InputMaybe<StringFilterInput>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly provider_metadata: InputMaybe<JsonFilterInput>;
  readonly size: InputMaybe<FloatFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly url: InputMaybe<StringFilterInput>;
  readonly width: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  readonly alternativeText: InputMaybe<Scalars['String']['input']>;
  readonly caption: InputMaybe<Scalars['String']['input']>;
  readonly ext: InputMaybe<Scalars['String']['input']>;
  readonly folder: InputMaybe<Scalars['ID']['input']>;
  readonly folderPath: InputMaybe<Scalars['String']['input']>;
  readonly formats: InputMaybe<Scalars['JSON']['input']>;
  readonly hash: InputMaybe<Scalars['String']['input']>;
  readonly height: InputMaybe<Scalars['Int']['input']>;
  readonly mime: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly previewUrl: InputMaybe<Scalars['String']['input']>;
  readonly provider: InputMaybe<Scalars['String']['input']>;
  readonly provider_metadata: InputMaybe<Scalars['JSON']['input']>;
  readonly size: InputMaybe<Scalars['Float']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  readonly __typename?: 'UploadFileRelationResponseCollection';
  readonly data: ReadonlyArray<UploadFileEntity>;
};

export type UploadFolder = {
  readonly __typename?: 'UploadFolder';
  readonly children: Maybe<UploadFolderRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly files: Maybe<UploadFileRelationResponseCollection>;
  readonly name: Scalars['String']['output'];
  readonly parent: Maybe<UploadFolderEntityResponse>;
  readonly path: Scalars['String']['output'];
  readonly pathId: Scalars['Int']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type UploadFolderChildrenArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  readonly __typename?: 'UploadFolderEntity';
  readonly attributes: Maybe<UploadFolder>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  readonly __typename?: 'UploadFolderEntityResponse';
  readonly data: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  readonly __typename?: 'UploadFolderEntityResponseCollection';
  readonly data: ReadonlyArray<UploadFolderEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly children: InputMaybe<UploadFolderFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly files: InputMaybe<UploadFileFiltersInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UploadFolderFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly parent: InputMaybe<UploadFolderFiltersInput>;
  readonly path: InputMaybe<StringFilterInput>;
  readonly pathId: InputMaybe<IntFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  readonly children: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly files: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  readonly path: InputMaybe<Scalars['String']['input']>;
  readonly pathId: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  readonly __typename?: 'UploadFolderRelationResponseCollection';
  readonly data: ReadonlyArray<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  readonly __typename?: 'UsersPermissionsCreateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  readonly __typename?: 'UsersPermissionsDeleteRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  readonly identifier: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly provider: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  readonly __typename?: 'UsersPermissionsLoginPayload';
  readonly jwt: Maybe<Scalars['String']['output']>;
  readonly user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  readonly __typename?: 'UsersPermissionsMe';
  readonly blocked: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed: Maybe<Scalars['Boolean']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly role: Maybe<UsersPermissionsMeRole>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  readonly __typename?: 'UsersPermissionsMeRole';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly type: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  readonly __typename?: 'UsersPermissionsPasswordPayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  readonly __typename?: 'UsersPermissionsPermission';
  readonly action: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  readonly __typename?: 'UsersPermissionsPermissionEntity';
  readonly attributes: Maybe<UsersPermissionsPermission>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  readonly action: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  readonly email: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  readonly __typename?: 'UsersPermissionsRole';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly name: Scalars['String']['output'];
  readonly permissions: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  readonly type: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  readonly __typename?: 'UsersPermissionsRoleEntity';
  readonly attributes: Maybe<UsersPermissionsRole>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  readonly __typename?: 'UsersPermissionsRoleEntityResponse';
  readonly data: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsRoleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly permissions: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly type: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly users: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly permissions: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly type: InputMaybe<Scalars['String']['input']>;
  readonly users: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  readonly __typename?: 'UsersPermissionsUpdateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  readonly __typename?: 'UsersPermissionsUser';
  readonly blocked: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed: Maybe<Scalars['Boolean']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['String']['output'];
  readonly provider: Maybe<Scalars['String']['output']>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  readonly __typename?: 'UsersPermissionsUserEntity';
  readonly attributes: Maybe<UsersPermissionsUser>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  readonly __typename?: 'UsersPermissionsUserEntityResponse';
  readonly data: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserEntityResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly blocked: InputMaybe<BooleanFilterInput>;
  readonly confirmationToken: InputMaybe<StringFilterInput>;
  readonly confirmed: InputMaybe<BooleanFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly email: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<UsersPermissionsUserFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly password: InputMaybe<StringFilterInput>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly resetPasswordToken: InputMaybe<StringFilterInput>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly username: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  readonly blocked: InputMaybe<Scalars['Boolean']['input']>;
  readonly confirmationToken: InputMaybe<Scalars['String']['input']>;
  readonly confirmed: InputMaybe<Scalars['Boolean']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly password: InputMaybe<Scalars['String']['input']>;
  readonly provider: InputMaybe<Scalars['String']['input']>;
  readonly resetPasswordToken: InputMaybe<Scalars['String']['input']>;
  readonly role: InputMaybe<Scalars['ID']['input']>;
  readonly username: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserRelationResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
};

export type WomenSize = {
  readonly __typename?: 'WomenSize';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<WomenSizeRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly w5: ComponentWomenSizesW5M35;
  readonly w6: ComponentWomenSizesW6M45;
  readonly w7: ComponentWomenSizesW7M55;
  readonly w8: ComponentWomenSizesW8M65;
  readonly w9: ComponentWomenSizesW9M75;
  readonly w10: ComponentWomenSizesW10M85;
  readonly w11: ComponentWomenSizesW11M95;
  readonly w12: ComponentWomenSizesW12M105;
  readonly w55: ComponentWomenSizesW55M4;
  readonly w65: ComponentWomenSizesW65M5;
  readonly w75: ComponentWomenSizesW75M6;
  readonly w85: ComponentWomenSizesW85M7;
  readonly w95: ComponentWomenSizesW95M8;
  readonly w105: ComponentWomenSizesW105M9;
  readonly w115: ComponentWomenSizesW115M10;
};

export type WomenSizeLocalizationsArgs = {
  filters: InputMaybe<WomenSizeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type WomenSizeEntity = {
  readonly __typename?: 'WomenSizeEntity';
  readonly attributes: Maybe<WomenSize>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type WomenSizeEntityResponse = {
  readonly __typename?: 'WomenSizeEntityResponse';
  readonly data: Maybe<WomenSizeEntity>;
};

export type WomenSizeEntityResponseCollection = {
  readonly __typename?: 'WomenSizeEntityResponseCollection';
  readonly data: ReadonlyArray<WomenSizeEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type WomenSizeFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<WomenSizeFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<WomenSizeFiltersInput>;
  readonly not: InputMaybe<WomenSizeFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<WomenSizeFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly w5: InputMaybe<ComponentWomenSizesW5M35FiltersInput>;
  readonly w6: InputMaybe<ComponentWomenSizesW6M45FiltersInput>;
  readonly w7: InputMaybe<ComponentWomenSizesW7M55FiltersInput>;
  readonly w8: InputMaybe<ComponentWomenSizesW8M65FiltersInput>;
  readonly w9: InputMaybe<ComponentWomenSizesW9M75FiltersInput>;
  readonly w10: InputMaybe<ComponentWomenSizesW10M85FiltersInput>;
  readonly w11: InputMaybe<ComponentWomenSizesW11M95FiltersInput>;
  readonly w12: InputMaybe<ComponentWomenSizesW12M105FiltersInput>;
  readonly w55: InputMaybe<ComponentWomenSizesW55M4FiltersInput>;
  readonly w65: InputMaybe<ComponentWomenSizesW65M5FiltersInput>;
  readonly w75: InputMaybe<ComponentWomenSizesW75M6FiltersInput>;
  readonly w85: InputMaybe<ComponentWomenSizesW85M7FiltersInput>;
  readonly w95: InputMaybe<ComponentWomenSizesW95M8FiltersInput>;
  readonly w105: InputMaybe<ComponentWomenSizesW105M9FiltersInput>;
  readonly w115: InputMaybe<ComponentWomenSizesW115M10FiltersInput>;
};

export type WomenSizeInput = {
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly w5: InputMaybe<ComponentWomenSizesW5M35Input>;
  readonly w6: InputMaybe<ComponentWomenSizesW6M45Input>;
  readonly w7: InputMaybe<ComponentWomenSizesW7M55Input>;
  readonly w8: InputMaybe<ComponentWomenSizesW8M65Input>;
  readonly w9: InputMaybe<ComponentWomenSizesW9M75Input>;
  readonly w10: InputMaybe<ComponentWomenSizesW10M85Input>;
  readonly w11: InputMaybe<ComponentWomenSizesW11M95Input>;
  readonly w12: InputMaybe<ComponentWomenSizesW12M105Input>;
  readonly w55: InputMaybe<ComponentWomenSizesW55M4Input>;
  readonly w65: InputMaybe<ComponentWomenSizesW65M5Input>;
  readonly w75: InputMaybe<ComponentWomenSizesW75M6Input>;
  readonly w85: InputMaybe<ComponentWomenSizesW85M7Input>;
  readonly w95: InputMaybe<ComponentWomenSizesW95M8Input>;
  readonly w105: InputMaybe<ComponentWomenSizesW105M9Input>;
  readonly w115: InputMaybe<ComponentWomenSizesW115M10Input>;
};

export type WomenSizeRelationResponseCollection = {
  readonly __typename?: 'WomenSizeRelationResponseCollection';
  readonly data: ReadonlyArray<WomenSizeEntity>;
};

export type KidSizeFragment = {
  readonly __typename?: 'ComponentSettingsKidSizes';
  readonly id: string;
  readonly c105: {
    readonly __typename?: 'ComponentKidSizes105C';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly c11: {
    readonly __typename?: 'ComponentKidSizes11C';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly c115: {
    readonly __typename?: 'ComponentKidSizes115C';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly c12: {
    readonly __typename?: 'ComponentKidSizes12C';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly c125: {
    readonly __typename?: 'ComponentKidSizes125C';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly c13: {
    readonly __typename?: 'ComponentKidSizes13C';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly c135: {
    readonly __typename?: 'ComponentKidSizes135C';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly y1: {
    readonly __typename?: 'ComponentKidSizes1Y';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly y15: {
    readonly __typename?: 'ComponentKidSizes15Y';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly y2: {
    readonly __typename?: 'ComponentKidSizes2Y';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly y25: {
    readonly __typename?: 'ComponentKidSizes25Y';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly y3: {
    readonly __typename?: 'ComponentKidSizes3Y';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
};

export type MenSizesFragment = {
  readonly __typename?: 'ComponentSettingsMenSizes';
  readonly id: string;
  readonly m7: {
    readonly __typename?: 'ComponentMenSizesM7W85';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly m75: {
    readonly __typename?: 'ComponentMenSizesM75W9';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly m8: {
    readonly __typename?: 'ComponentMenSizesM8W95';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly m85: {
    readonly __typename?: 'ComponentMenSizesM85W10';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly m9: {
    readonly __typename?: 'ComponentMenSizesM9W105';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly n95: {
    readonly __typename?: 'ComponentMenSizesM95W11';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly m10: {
    readonly __typename?: 'ComponentMenSizesM10W115';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly m105: {
    readonly __typename?: 'ComponentMenSizesM105W12';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly m11: {
    readonly __typename?: 'ComponentMenSizesM11W125';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly m115: {
    readonly __typename?: 'ComponentMenSizesM115W13';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly m12: {
    readonly __typename?: 'ComponentMenSizesM12W135';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly m125: {
    readonly __typename?: 'ComponentMenSizesM125W14';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly m13: {
    readonly __typename?: 'ComponentMenSizesM13W145';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly m14: {
    readonly __typename?: 'ComponentMenSizesM14W155';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly m15: {
    readonly __typename?: 'ComponentMenSizesM15W165';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly m16: {
    readonly __typename?: 'ComponentMenSizesM16W175';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly m17: {
    readonly __typename?: 'ComponentMenSizesM17W185';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly m18: {
    readonly __typename?: 'ComponentMenSizesM18W195';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
};

export type WomenSizesFragment = {
  readonly __typename?: 'ComponentSettingsWomenSizes';
  readonly id: string;
  readonly w5: {
    readonly __typename?: 'ComponentWomenSizesW5M35';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly w55: {
    readonly __typename?: 'ComponentWomenSizesW55M4';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly w6: {
    readonly __typename?: 'ComponentWomenSizesW6M45';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly w65: {
    readonly __typename?: 'ComponentWomenSizesW65M5';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly w7: {
    readonly __typename?: 'ComponentWomenSizesW7M55';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly w75: {
    readonly __typename?: 'ComponentWomenSizesW75M6';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly w8: {
    readonly __typename?: 'ComponentWomenSizesW8M65';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly w85: {
    readonly __typename?: 'ComponentWomenSizesW85M7';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly w9: {
    readonly __typename?: 'ComponentWomenSizesW9M75';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly w95: {
    readonly __typename?: 'ComponentWomenSizesW95M8';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly w10: {
    readonly __typename?: 'ComponentWomenSizesW10M85';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly w105: {
    readonly __typename?: 'ComponentWomenSizesW105M9';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly w11: {
    readonly __typename?: 'ComponentWomenSizesW11M95';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly w115: {
    readonly __typename?: 'ComponentWomenSizesW115M10';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
  readonly w12: {
    readonly __typename?: 'ComponentWomenSizesW12M105';
    readonly id: string;
    readonly title: string;
    readonly inStock: boolean;
  };
};

export type BannerCardFragment = {
  readonly __typename?: 'ComponentUiBannerCard';
  readonly id: string;
  readonly Title: string;
  readonly description: string;
};

export type ButtonFragmentFragment = {
  readonly __typename?: 'ComponentUiButton';
  readonly id: string;
  readonly label: string;
  readonly href: string;
};

export type FigureFragmentFragment = {
  readonly __typename?: 'ComponentUiFigure';
  readonly id: string;
  readonly caption: string;
  readonly LinkButton: ReadonlyArray<{
    readonly __typename?: 'ComponentUiButton';
    readonly id: string;
    readonly label: string;
    readonly href: string;
  }>;
  readonly image: {
    readonly __typename?: 'UploadFileEntityResponse';
    readonly data: {
      readonly __typename?: 'UploadFileEntity';
      readonly attributes: {
        readonly __typename?: 'UploadFile';
        readonly name: string;
        readonly alternativeText: string;
        readonly caption: string;
        readonly width: number;
        readonly height: number;
        readonly formats: any;
        readonly hash: string;
        readonly ext: string;
        readonly mime: string;
        readonly size: number;
        readonly url: string;
        readonly previewUrl: string;
        readonly provider: string;
        readonly provider_metadata: any;
      };
    };
  };
};

export type LinkFragmentFragment = {
  readonly __typename?: 'ComponentUiLink';
  readonly id: string;
  readonly label: string;
  readonly href: string;
};

export type MembershipCardFragment = {
  readonly __typename?: 'ComponentUiMembershipCard';
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly link: string;
  readonly image: {
    readonly __typename?: 'UploadFileEntityResponse';
    readonly data: {
      readonly __typename?: 'UploadFileEntity';
      readonly attributes: {
        readonly __typename?: 'UploadFile';
        readonly name: string;
        readonly alternativeText: string;
        readonly caption: string;
        readonly width: number;
        readonly height: number;
        readonly formats: any;
        readonly hash: string;
        readonly ext: string;
        readonly mime: string;
        readonly size: number;
        readonly url: string;
        readonly previewUrl: string;
        readonly provider: string;
        readonly provider_metadata: any;
      };
    };
  };
};

export type ShoeCarouselCardFragment = {
  readonly __typename?: 'ComponentUiShoeCardForCarousel';
  readonly id: string;
  readonly title: string;
  readonly link: string;
  readonly tag: string;
  readonly price: string;
  readonly media: {
    readonly __typename?: 'UploadFileEntityResponse';
    readonly data: {
      readonly __typename?: 'UploadFileEntity';
      readonly attributes: {
        readonly __typename?: 'UploadFile';
        readonly name: string;
        readonly alternativeText: string;
        readonly caption: string;
        readonly width: number;
        readonly height: number;
        readonly formats: any;
        readonly hash: string;
        readonly ext: string;
        readonly mime: string;
        readonly size: number;
        readonly url: string;
        readonly previewUrl: string;
        readonly provider: string;
        readonly provider_metadata: any;
      };
    };
  };
  readonly section_shoes: {
    readonly __typename?: 'SectionShoeRelationResponseCollection';
    readonly data: ReadonlyArray<{
      readonly __typename?: 'SectionShoeEntity';
      readonly id: string;
    }>;
  };
};

export type ShoeOptionFragmentFragment = {
  readonly __typename?: 'ComponentEntityShoeOption';
  readonly title: string;
  readonly tag: string;
  readonly price: number;
  readonly description: string;
  readonly mainImage: {
    readonly __typename?: 'UploadFileEntityResponse';
    readonly data: {
      readonly __typename?: 'UploadFileEntity';
      readonly attributes: {
        readonly __typename?: 'UploadFile';
        readonly name: string;
        readonly alternativeText: string;
        readonly caption: string;
        readonly width: number;
        readonly height: number;
        readonly formats: any;
        readonly hash: string;
        readonly ext: string;
        readonly mime: string;
        readonly size: number;
        readonly url: string;
        readonly previewUrl: string;
        readonly provider: string;
        readonly provider_metadata: any;
      };
    };
  };
  readonly medias: {
    readonly __typename?: 'UploadFileRelationResponseCollection';
    readonly data: ReadonlyArray<{
      readonly __typename?: 'UploadFileEntity';
      readonly attributes: {
        readonly __typename?: 'UploadFile';
        readonly name: string;
        readonly alternativeText: string;
        readonly caption: string;
        readonly width: number;
        readonly height: number;
        readonly formats: any;
        readonly hash: string;
        readonly ext: string;
        readonly mime: string;
        readonly size: number;
        readonly url: string;
        readonly previewUrl: string;
        readonly provider: string;
        readonly provider_metadata: any;
      };
    }>;
  };
};

export type SizeFragment = {
  readonly __typename?: 'ComponentSettingsSize';
  readonly id: string;
  readonly title: string;
  readonly inStock: boolean;
};

export type TrendCardFragment = {
  readonly __typename?: 'ComponentUiTrendCard';
  readonly id: string;
  readonly title: string;
  readonly link: string;
  readonly image: {
    readonly __typename?: 'UploadFileEntityResponse';
    readonly data: {
      readonly __typename?: 'UploadFileEntity';
      readonly attributes: {
        readonly __typename?: 'UploadFile';
        readonly name: string;
        readonly alternativeText: string;
        readonly caption: string;
        readonly width: number;
        readonly height: number;
        readonly formats: any;
        readonly hash: string;
        readonly ext: string;
        readonly mime: string;
        readonly size: number;
        readonly url: string;
        readonly previewUrl: string;
        readonly provider: string;
        readonly provider_metadata: any;
      };
    };
  };
};

export type CountryFragmentFragment = {
  readonly __typename?: 'Country';
  readonly code3: string;
  readonly code2: string;
  readonly createdAt: any;
  readonly updatedAt: any;
  readonly publishedAt: any;
  readonly page_home: {
    readonly __typename?: 'PageHomeEntityResponse';
    readonly data: { readonly __typename?: 'PageHomeEntity'; readonly id: string };
  };
};

export type FileFragmentFragment = {
  readonly __typename?: 'UploadFile';
  readonly name: string;
  readonly alternativeText: string;
  readonly caption: string;
  readonly width: number;
  readonly height: number;
  readonly formats: any;
  readonly hash: string;
  readonly ext: string;
  readonly mime: string;
  readonly size: number;
  readonly url: string;
  readonly previewUrl: string;
  readonly provider: string;
  readonly provider_metadata: any;
};

export type LanguageEntityFragmentFragment = {
  readonly __typename?: 'LanguageEntity';
  readonly id: string;
  readonly attributes: {
    readonly __typename?: 'Language';
    readonly name: string;
    readonly code: string;
  };
};

export type PageGoodsFragment = {
  readonly __typename?: 'GoodsPageEntity';
  readonly id: string;
  readonly attributes: {
    readonly __typename?: 'GoodsPage';
    readonly pageTitle: string;
    readonly title: string;
    readonly good: ReadonlyArray<{
      readonly __typename?: 'ComponentUiShoeCardForCarousel';
      readonly id: string;
      readonly title: string;
      readonly link: string;
      readonly tag: string;
      readonly price: string;
      readonly media: {
        readonly __typename?: 'UploadFileEntityResponse';
        readonly data: {
          readonly __typename?: 'UploadFileEntity';
          readonly attributes: {
            readonly __typename?: 'UploadFile';
            readonly name: string;
            readonly alternativeText: string;
            readonly caption: string;
            readonly width: number;
            readonly height: number;
            readonly formats: any;
            readonly hash: string;
            readonly ext: string;
            readonly mime: string;
            readonly size: number;
            readonly url: string;
            readonly previewUrl: string;
            readonly provider: string;
            readonly provider_metadata: any;
          };
        };
      };
      readonly section_shoes: {
        readonly __typename?: 'SectionShoeRelationResponseCollection';
        readonly data: ReadonlyArray<{
          readonly __typename?: 'SectionShoeEntity';
          readonly id: string;
        }>;
      };
    }>;
  };
};

export type HomePageFragmentFragment = {
  readonly __typename?: 'HomePage';
  readonly section_main_title: {
    readonly __typename?: 'SectionMainTitleEntityResponse';
    readonly data: { readonly __typename?: 'SectionMainTitleEntity'; readonly id: string };
  };
  readonly banner_section: {
    readonly __typename?: 'BannerSectionEntityResponse';
    readonly data: { readonly __typename?: 'BannerSectionEntity'; readonly id: string };
  };
  readonly section_trend: {
    readonly __typename?: 'SectionTrendEntityResponse';
    readonly data: { readonly __typename?: 'SectionTrendEntity'; readonly id: string };
  };
  readonly section_popular: {
    readonly __typename?: 'SectionPopularEntityResponse';
    readonly data: { readonly __typename?: 'SectionPopularEntity'; readonly id: string };
  };
  readonly section_membership: {
    readonly __typename?: 'SectionMembershipEntityResponse';
    readonly data: { readonly __typename?: 'SectionMembershipEntity'; readonly id: string };
  };
};

export type SectionBannerFragmentFragment = {
  readonly __typename?: 'BannerSection';
  readonly card: ReadonlyArray<{
    readonly __typename?: 'ComponentUiBannerCard';
    readonly id: string;
    readonly Title: string;
    readonly description: string;
  }>;
};

export type SectionMainTitleFragmentFragment = {
  readonly __typename?: 'SectionMainTitle';
  readonly MainTitle: string;
  readonly SubTitle: string;
  readonly Title: string;
  readonly publishedAt: any;
  readonly Video: {
    readonly __typename?: 'UploadFileEntityResponse';
    readonly data: {
      readonly __typename?: 'UploadFileEntity';
      readonly attributes: {
        readonly __typename?: 'UploadFile';
        readonly name: string;
        readonly alternativeText: string;
        readonly caption: string;
        readonly width: number;
        readonly height: number;
        readonly formats: any;
        readonly hash: string;
        readonly ext: string;
        readonly mime: string;
        readonly size: number;
        readonly url: string;
        readonly previewUrl: string;
        readonly provider: string;
        readonly provider_metadata: any;
      };
    };
  };
  readonly ShowCollectionLinkButton: {
    readonly __typename?: 'ComponentUiButton';
    readonly id: string;
    readonly label: string;
    readonly href: string;
  };
  readonly WatchLinkButton: {
    readonly __typename?: 'ComponentUiButton';
    readonly id: string;
    readonly label: string;
    readonly href: string;
  };
};

export type SectionMembershipFragmentFragment = {
  readonly __typename?: 'SectionMembership';
  readonly title: string;
  readonly subtitle: string;
  readonly publishedAt: any;
  readonly JoinUsButton: {
    readonly __typename?: 'ComponentUiButton';
    readonly id: string;
    readonly label: string;
    readonly href: string;
  };
  readonly SignInButton: {
    readonly __typename?: 'ComponentUiButton';
    readonly id: string;
    readonly label: string;
    readonly href: string;
  };
  readonly card: ReadonlyArray<{
    readonly __typename?: 'ComponentUiMembershipCard';
    readonly id: string;
    readonly title: string;
    readonly subtitle: string;
    readonly link: string;
    readonly image: {
      readonly __typename?: 'UploadFileEntityResponse';
      readonly data: {
        readonly __typename?: 'UploadFileEntity';
        readonly attributes: {
          readonly __typename?: 'UploadFile';
          readonly name: string;
          readonly alternativeText: string;
          readonly caption: string;
          readonly width: number;
          readonly height: number;
          readonly formats: any;
          readonly hash: string;
          readonly ext: string;
          readonly mime: string;
          readonly size: number;
          readonly url: string;
          readonly previewUrl: string;
          readonly provider: string;
          readonly provider_metadata: any;
        };
      };
    };
  }>;
};

export type SectionPopularFragmentFragment = {
  readonly __typename?: 'SectionPopular';
  readonly sectionTitle: string;
  readonly updatedAt: any;
  readonly card: ReadonlyArray<{
    readonly __typename?: 'ComponentUiShoeCardForCarousel';
    readonly id: string;
    readonly title: string;
    readonly link: string;
    readonly tag: string;
    readonly price: string;
    readonly media: {
      readonly __typename?: 'UploadFileEntityResponse';
      readonly data: {
        readonly __typename?: 'UploadFileEntity';
        readonly attributes: {
          readonly __typename?: 'UploadFile';
          readonly name: string;
          readonly alternativeText: string;
          readonly caption: string;
          readonly width: number;
          readonly height: number;
          readonly formats: any;
          readonly hash: string;
          readonly ext: string;
          readonly mime: string;
          readonly size: number;
          readonly url: string;
          readonly previewUrl: string;
          readonly provider: string;
          readonly provider_metadata: any;
        };
      };
    };
    readonly section_shoes: {
      readonly __typename?: 'SectionShoeRelationResponseCollection';
      readonly data: ReadonlyArray<{
        readonly __typename?: 'SectionShoeEntity';
        readonly id: string;
      }>;
    };
  }>;
};

export type SectionShoeFragmentFragment = {
  readonly __typename?: 'SectionShoe';
  readonly tags: Enum_Sectionshoe_Tags;
  readonly gender: Enum_Sectionshoe_Gender;
  readonly pageTitle: Enum_Sectionshoe_Pagetitle;
  readonly pageSubtitle: Enum_Sectionshoe_Pagesubtitle;
  readonly pageTitle2: Enum_Sectionshoe_Pagetitle2;
  readonly pageTitle3: Enum_Sectionshoe_Pagetitle3;
  readonly updatedAt: any;
  readonly addToBagButton: {
    readonly __typename?: 'ComponentUiButton';
    readonly id: string;
    readonly label: string;
    readonly href: string;
  };
  readonly favoriteButton: {
    readonly __typename?: 'ComponentUiButton';
    readonly id: string;
    readonly label: string;
    readonly href: string;
  };
  readonly options: {
    readonly __typename?: 'ComponentEntityShoeOption';
    readonly title: string;
    readonly tag: string;
    readonly price: number;
    readonly description: string;
    readonly mainImage: {
      readonly __typename?: 'UploadFileEntityResponse';
      readonly data: {
        readonly __typename?: 'UploadFileEntity';
        readonly attributes: {
          readonly __typename?: 'UploadFile';
          readonly name: string;
          readonly alternativeText: string;
          readonly caption: string;
          readonly width: number;
          readonly height: number;
          readonly formats: any;
          readonly hash: string;
          readonly ext: string;
          readonly mime: string;
          readonly size: number;
          readonly url: string;
          readonly previewUrl: string;
          readonly provider: string;
          readonly provider_metadata: any;
        };
      };
    };
    readonly medias: {
      readonly __typename?: 'UploadFileRelationResponseCollection';
      readonly data: ReadonlyArray<{
        readonly __typename?: 'UploadFileEntity';
        readonly attributes: {
          readonly __typename?: 'UploadFile';
          readonly name: string;
          readonly alternativeText: string;
          readonly caption: string;
          readonly width: number;
          readonly height: number;
          readonly formats: any;
          readonly hash: string;
          readonly ext: string;
          readonly mime: string;
          readonly size: number;
          readonly url: string;
          readonly previewUrl: string;
          readonly provider: string;
          readonly provider_metadata: any;
        };
      }>;
    };
  };
  readonly sizes: {
    readonly __typename?: 'ComponentUiSizes';
    readonly id: string;
    readonly Sizes: ReadonlyArray<{
      readonly __typename?: 'ComponentSettingsSize';
      readonly id: string;
      readonly title: string;
      readonly inStock: boolean;
    }>;
  };
};

export type SectionShoeForCardFragmentFragment = {
  readonly __typename?: 'SectionShoe';
  readonly tags: Enum_Sectionshoe_Tags;
  readonly gender: Enum_Sectionshoe_Gender;
  readonly pageTitle: Enum_Sectionshoe_Pagetitle;
  readonly pageSubtitle: Enum_Sectionshoe_Pagesubtitle;
  readonly pageTitle2: Enum_Sectionshoe_Pagetitle2;
  readonly pageTitle3: Enum_Sectionshoe_Pagetitle3;
  readonly updatedAt: any;
  readonly options: {
    readonly __typename?: 'ComponentEntityShoeOption';
    readonly title: string;
    readonly tag: string;
    readonly price: number;
    readonly mainImage: {
      readonly __typename?: 'UploadFileEntityResponse';
      readonly data: {
        readonly __typename?: 'UploadFileEntity';
        readonly attributes: {
          readonly __typename?: 'UploadFile';
          readonly name: string;
          readonly alternativeText: string;
          readonly caption: string;
          readonly width: number;
          readonly height: number;
          readonly formats: any;
          readonly hash: string;
          readonly ext: string;
          readonly mime: string;
          readonly size: number;
          readonly url: string;
          readonly previewUrl: string;
          readonly provider: string;
          readonly provider_metadata: any;
        };
      };
    };
  };
};

export type SectionTrendFragmentFragment = {
  readonly __typename?: 'SectionTrend';
  readonly SectionTitle: string;
  readonly updatedAt: any;
  readonly card: ReadonlyArray<{
    readonly __typename?: 'ComponentUiTrendCard';
    readonly id: string;
    readonly title: string;
    readonly link: string;
    readonly image: {
      readonly __typename?: 'UploadFileEntityResponse';
      readonly data: {
        readonly __typename?: 'UploadFileEntity';
        readonly attributes: {
          readonly __typename?: 'UploadFile';
          readonly name: string;
          readonly alternativeText: string;
          readonly caption: string;
          readonly width: number;
          readonly height: number;
          readonly formats: any;
          readonly hash: string;
          readonly ext: string;
          readonly mime: string;
          readonly size: number;
          readonly url: string;
          readonly previewUrl: string;
          readonly provider: string;
          readonly provider_metadata: any;
        };
      };
    };
  }>;
};

export type GetCountriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetCountriesQuery = {
  readonly __typename?: 'Query';
  readonly countries: {
    readonly __typename?: 'CountryEntityResponseCollection';
    readonly data: ReadonlyArray<{
      readonly __typename?: 'CountryEntity';
      readonly id: string;
      readonly attributes: {
        readonly __typename?: 'Country';
        readonly code3: string;
        readonly code2: string;
        readonly createdAt: any;
        readonly updatedAt: any;
        readonly publishedAt: any;
        readonly page_home: {
          readonly __typename?: 'PageHomeEntityResponse';
          readonly data: { readonly __typename?: 'PageHomeEntity'; readonly id: string };
        };
      };
    }>;
  };
};

export type GetGoodsPageQueryVariables = Exact<{
  pageTitle: InputMaybe<Scalars['String']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>
  >;
  gender: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>
  >;
  size: InputMaybe<Scalars['String']['input']>;
  priceFrom: InputMaybe<Scalars['Int']['input']>;
  priceTo: InputMaybe<Scalars['Int']['input']>;
  query: InputMaybe<Scalars['String']['input']>;
}>;

export type GetGoodsPageQuery = {
  readonly __typename?: 'Query';
  readonly sectionShoes: {
    readonly __typename?: 'SectionShoeEntityResponseCollection';
    readonly meta: {
      readonly __typename?: 'ResponseCollectionMeta';
      readonly pagination: { readonly __typename?: 'Pagination'; readonly total: number };
    };
    readonly data: ReadonlyArray<{
      readonly __typename?: 'SectionShoeEntity';
      readonly id: string;
      readonly attributes: {
        readonly __typename?: 'SectionShoe';
        readonly tags: Enum_Sectionshoe_Tags;
        readonly gender: Enum_Sectionshoe_Gender;
        readonly pageTitle: Enum_Sectionshoe_Pagetitle;
        readonly pageSubtitle: Enum_Sectionshoe_Pagesubtitle;
        readonly pageTitle2: Enum_Sectionshoe_Pagetitle2;
        readonly pageTitle3: Enum_Sectionshoe_Pagetitle3;
        readonly updatedAt: any;
        readonly addToBagButton: {
          readonly __typename?: 'ComponentUiButton';
          readonly id: string;
          readonly label: string;
          readonly href: string;
        };
        readonly favoriteButton: {
          readonly __typename?: 'ComponentUiButton';
          readonly id: string;
          readonly label: string;
          readonly href: string;
        };
        readonly options: {
          readonly __typename?: 'ComponentEntityShoeOption';
          readonly title: string;
          readonly tag: string;
          readonly price: number;
          readonly description: string;
          readonly mainImage: {
            readonly __typename?: 'UploadFileEntityResponse';
            readonly data: {
              readonly __typename?: 'UploadFileEntity';
              readonly attributes: {
                readonly __typename?: 'UploadFile';
                readonly name: string;
                readonly alternativeText: string;
                readonly caption: string;
                readonly width: number;
                readonly height: number;
                readonly formats: any;
                readonly hash: string;
                readonly ext: string;
                readonly mime: string;
                readonly size: number;
                readonly url: string;
                readonly previewUrl: string;
                readonly provider: string;
                readonly provider_metadata: any;
              };
            };
          };
          readonly medias: {
            readonly __typename?: 'UploadFileRelationResponseCollection';
            readonly data: ReadonlyArray<{
              readonly __typename?: 'UploadFileEntity';
              readonly attributes: {
                readonly __typename?: 'UploadFile';
                readonly name: string;
                readonly alternativeText: string;
                readonly caption: string;
                readonly width: number;
                readonly height: number;
                readonly formats: any;
                readonly hash: string;
                readonly ext: string;
                readonly mime: string;
                readonly size: number;
                readonly url: string;
                readonly previewUrl: string;
                readonly provider: string;
                readonly provider_metadata: any;
              };
            }>;
          };
        };
        readonly sizes: {
          readonly __typename?: 'ComponentUiSizes';
          readonly id: string;
          readonly Sizes: ReadonlyArray<{
            readonly __typename?: 'ComponentSettingsSize';
            readonly id: string;
            readonly title: string;
            readonly inStock: boolean;
          }>;
        };
      };
    }>;
  };
};

export type GetGoodsPageMinQueryVariables = Exact<{
  pageTitle: InputMaybe<Scalars['String']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>
  >;
  gender: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>
  >;
  size: InputMaybe<Scalars['String']['input']>;
  priceFrom: InputMaybe<Scalars['Int']['input']>;
  priceTo: InputMaybe<Scalars['Int']['input']>;
  query: InputMaybe<Scalars['String']['input']>;
}>;

export type GetGoodsPageMinQuery = {
  readonly __typename?: 'Query';
  readonly sectionShoes: {
    readonly __typename?: 'SectionShoeEntityResponseCollection';
    readonly meta: {
      readonly __typename?: 'ResponseCollectionMeta';
      readonly pagination: { readonly __typename?: 'Pagination'; readonly total: number };
    };
    readonly data: ReadonlyArray<{
      readonly __typename?: 'SectionShoeEntity';
      readonly id: string;
      readonly attributes: {
        readonly __typename?: 'SectionShoe';
        readonly tags: Enum_Sectionshoe_Tags;
        readonly gender: Enum_Sectionshoe_Gender;
        readonly pageTitle: Enum_Sectionshoe_Pagetitle;
        readonly pageSubtitle: Enum_Sectionshoe_Pagesubtitle;
        readonly pageTitle2: Enum_Sectionshoe_Pagetitle2;
        readonly pageTitle3: Enum_Sectionshoe_Pagetitle3;
        readonly updatedAt: any;
        readonly options: {
          readonly __typename?: 'ComponentEntityShoeOption';
          readonly title: string;
          readonly tag: string;
          readonly price: number;
          readonly mainImage: {
            readonly __typename?: 'UploadFileEntityResponse';
            readonly data: {
              readonly __typename?: 'UploadFileEntity';
              readonly attributes: {
                readonly __typename?: 'UploadFile';
                readonly name: string;
                readonly alternativeText: string;
                readonly caption: string;
                readonly width: number;
                readonly height: number;
                readonly formats: any;
                readonly hash: string;
                readonly ext: string;
                readonly mime: string;
                readonly size: number;
                readonly url: string;
                readonly previewUrl: string;
                readonly provider: string;
                readonly provider_metadata: any;
              };
            };
          };
        };
      };
    }>;
  };
};

export type GetHomePageQueryVariables = Exact<{ [key: string]: never }>;

export type GetHomePageQuery = {
  readonly __typename?: 'Query';
  readonly homePage: {
    readonly __typename?: 'HomePageEntityResponse';
    readonly data: {
      readonly __typename?: 'HomePageEntity';
      readonly id: string;
      readonly attributes: {
        readonly __typename?: 'HomePage';
        readonly section_main_title: {
          readonly __typename?: 'SectionMainTitleEntityResponse';
          readonly data: { readonly __typename?: 'SectionMainTitleEntity'; readonly id: string };
        };
        readonly banner_section: {
          readonly __typename?: 'BannerSectionEntityResponse';
          readonly data: { readonly __typename?: 'BannerSectionEntity'; readonly id: string };
        };
        readonly section_trend: {
          readonly __typename?: 'SectionTrendEntityResponse';
          readonly data: { readonly __typename?: 'SectionTrendEntity'; readonly id: string };
        };
        readonly section_popular: {
          readonly __typename?: 'SectionPopularEntityResponse';
          readonly data: { readonly __typename?: 'SectionPopularEntity'; readonly id: string };
        };
        readonly section_membership: {
          readonly __typename?: 'SectionMembershipEntityResponse';
          readonly data: { readonly __typename?: 'SectionMembershipEntity'; readonly id: string };
        };
      };
    };
  };
};

export type GetSectionBannerQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetSectionBannerQuery = {
  readonly __typename?: 'Query';
  readonly bannerSection: {
    readonly __typename?: 'BannerSectionEntityResponse';
    readonly data: {
      readonly __typename?: 'BannerSectionEntity';
      readonly id: string;
      readonly attributes: {
        readonly __typename?: 'BannerSection';
        readonly card: ReadonlyArray<{
          readonly __typename?: 'ComponentUiBannerCard';
          readonly id: string;
          readonly Title: string;
          readonly description: string;
        }>;
      };
    };
  };
};

export type GetSectionMainTitleQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetSectionMainTitleQuery = {
  readonly __typename?: 'Query';
  readonly sectionMainTitle: {
    readonly __typename?: 'SectionMainTitleEntityResponse';
    readonly data: {
      readonly __typename?: 'SectionMainTitleEntity';
      readonly id: string;
      readonly attributes: {
        readonly __typename?: 'SectionMainTitle';
        readonly MainTitle: string;
        readonly SubTitle: string;
        readonly Title: string;
        readonly publishedAt: any;
        readonly Video: {
          readonly __typename?: 'UploadFileEntityResponse';
          readonly data: {
            readonly __typename?: 'UploadFileEntity';
            readonly attributes: {
              readonly __typename?: 'UploadFile';
              readonly name: string;
              readonly alternativeText: string;
              readonly caption: string;
              readonly width: number;
              readonly height: number;
              readonly formats: any;
              readonly hash: string;
              readonly ext: string;
              readonly mime: string;
              readonly size: number;
              readonly url: string;
              readonly previewUrl: string;
              readonly provider: string;
              readonly provider_metadata: any;
            };
          };
        };
        readonly ShowCollectionLinkButton: {
          readonly __typename?: 'ComponentUiButton';
          readonly id: string;
          readonly label: string;
          readonly href: string;
        };
        readonly WatchLinkButton: {
          readonly __typename?: 'ComponentUiButton';
          readonly id: string;
          readonly label: string;
          readonly href: string;
        };
      };
    };
  };
};

export type GetSectionMembershipQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetSectionMembershipQuery = {
  readonly __typename?: 'Query';
  readonly sectionMembership: {
    readonly __typename?: 'SectionMembershipEntityResponse';
    readonly data: {
      readonly __typename?: 'SectionMembershipEntity';
      readonly id: string;
      readonly attributes: {
        readonly __typename?: 'SectionMembership';
        readonly title: string;
        readonly subtitle: string;
        readonly publishedAt: any;
        readonly JoinUsButton: {
          readonly __typename?: 'ComponentUiButton';
          readonly id: string;
          readonly label: string;
          readonly href: string;
        };
        readonly SignInButton: {
          readonly __typename?: 'ComponentUiButton';
          readonly id: string;
          readonly label: string;
          readonly href: string;
        };
        readonly card: ReadonlyArray<{
          readonly __typename?: 'ComponentUiMembershipCard';
          readonly id: string;
          readonly title: string;
          readonly subtitle: string;
          readonly link: string;
          readonly image: {
            readonly __typename?: 'UploadFileEntityResponse';
            readonly data: {
              readonly __typename?: 'UploadFileEntity';
              readonly attributes: {
                readonly __typename?: 'UploadFile';
                readonly name: string;
                readonly alternativeText: string;
                readonly caption: string;
                readonly width: number;
                readonly height: number;
                readonly formats: any;
                readonly hash: string;
                readonly ext: string;
                readonly mime: string;
                readonly size: number;
                readonly url: string;
                readonly previewUrl: string;
                readonly provider: string;
                readonly provider_metadata: any;
              };
            };
          };
        }>;
      };
    };
  };
};

export type GetSectionPopularQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetSectionPopularQuery = {
  readonly __typename?: 'Query';
  readonly sectionPopular: {
    readonly __typename?: 'SectionPopularEntityResponse';
    readonly data: {
      readonly __typename?: 'SectionPopularEntity';
      readonly id: string;
      readonly attributes: {
        readonly __typename?: 'SectionPopular';
        readonly sectionTitle: string;
        readonly updatedAt: any;
        readonly card: ReadonlyArray<{
          readonly __typename?: 'ComponentUiShoeCardForCarousel';
          readonly id: string;
          readonly title: string;
          readonly link: string;
          readonly tag: string;
          readonly price: string;
          readonly media: {
            readonly __typename?: 'UploadFileEntityResponse';
            readonly data: {
              readonly __typename?: 'UploadFileEntity';
              readonly attributes: {
                readonly __typename?: 'UploadFile';
                readonly name: string;
                readonly alternativeText: string;
                readonly caption: string;
                readonly width: number;
                readonly height: number;
                readonly formats: any;
                readonly hash: string;
                readonly ext: string;
                readonly mime: string;
                readonly size: number;
                readonly url: string;
                readonly previewUrl: string;
                readonly provider: string;
                readonly provider_metadata: any;
              };
            };
          };
          readonly section_shoes: {
            readonly __typename?: 'SectionShoeRelationResponseCollection';
            readonly data: ReadonlyArray<{
              readonly __typename?: 'SectionShoeEntity';
              readonly id: string;
            }>;
          };
        }>;
      };
    };
  };
};

export type GetSectionShoeQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
}>;

export type GetSectionShoeQuery = {
  readonly __typename?: 'Query';
  readonly sectionShoe: {
    readonly __typename?: 'SectionShoeEntityResponse';
    readonly data: {
      readonly __typename?: 'SectionShoeEntity';
      readonly id: string;
      readonly attributes: {
        readonly __typename?: 'SectionShoe';
        readonly tags: Enum_Sectionshoe_Tags;
        readonly gender: Enum_Sectionshoe_Gender;
        readonly pageTitle: Enum_Sectionshoe_Pagetitle;
        readonly pageSubtitle: Enum_Sectionshoe_Pagesubtitle;
        readonly pageTitle2: Enum_Sectionshoe_Pagetitle2;
        readonly pageTitle3: Enum_Sectionshoe_Pagetitle3;
        readonly updatedAt: any;
        readonly addToBagButton: {
          readonly __typename?: 'ComponentUiButton';
          readonly id: string;
          readonly label: string;
          readonly href: string;
        };
        readonly favoriteButton: {
          readonly __typename?: 'ComponentUiButton';
          readonly id: string;
          readonly label: string;
          readonly href: string;
        };
        readonly options: {
          readonly __typename?: 'ComponentEntityShoeOption';
          readonly title: string;
          readonly tag: string;
          readonly price: number;
          readonly description: string;
          readonly mainImage: {
            readonly __typename?: 'UploadFileEntityResponse';
            readonly data: {
              readonly __typename?: 'UploadFileEntity';
              readonly attributes: {
                readonly __typename?: 'UploadFile';
                readonly name: string;
                readonly alternativeText: string;
                readonly caption: string;
                readonly width: number;
                readonly height: number;
                readonly formats: any;
                readonly hash: string;
                readonly ext: string;
                readonly mime: string;
                readonly size: number;
                readonly url: string;
                readonly previewUrl: string;
                readonly provider: string;
                readonly provider_metadata: any;
              };
            };
          };
          readonly medias: {
            readonly __typename?: 'UploadFileRelationResponseCollection';
            readonly data: ReadonlyArray<{
              readonly __typename?: 'UploadFileEntity';
              readonly attributes: {
                readonly __typename?: 'UploadFile';
                readonly name: string;
                readonly alternativeText: string;
                readonly caption: string;
                readonly width: number;
                readonly height: number;
                readonly formats: any;
                readonly hash: string;
                readonly ext: string;
                readonly mime: string;
                readonly size: number;
                readonly url: string;
                readonly previewUrl: string;
                readonly provider: string;
                readonly provider_metadata: any;
              };
            }>;
          };
        };
        readonly sizes: {
          readonly __typename?: 'ComponentUiSizes';
          readonly id: string;
          readonly Sizes: ReadonlyArray<{
            readonly __typename?: 'ComponentSettingsSize';
            readonly id: string;
            readonly title: string;
            readonly inStock: boolean;
          }>;
        };
      };
    };
  };
};

export type GetSectionTrendQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetSectionTrendQuery = {
  readonly __typename?: 'Query';
  readonly sectionTrend: {
    readonly __typename?: 'SectionTrendEntityResponse';
    readonly data: {
      readonly __typename?: 'SectionTrendEntity';
      readonly id: string;
      readonly attributes: {
        readonly __typename?: 'SectionTrend';
        readonly SectionTitle: string;
        readonly updatedAt: any;
        readonly card: ReadonlyArray<{
          readonly __typename?: 'ComponentUiTrendCard';
          readonly id: string;
          readonly title: string;
          readonly link: string;
          readonly image: {
            readonly __typename?: 'UploadFileEntityResponse';
            readonly data: {
              readonly __typename?: 'UploadFileEntity';
              readonly attributes: {
                readonly __typename?: 'UploadFile';
                readonly name: string;
                readonly alternativeText: string;
                readonly caption: string;
                readonly width: number;
                readonly height: number;
                readonly formats: any;
                readonly hash: string;
                readonly ext: string;
                readonly mime: string;
                readonly size: number;
                readonly url: string;
                readonly previewUrl: string;
                readonly provider: string;
                readonly provider_metadata: any;
              };
            };
          };
        }>;
      };
    };
  };
};

export const KidSizeFragmentDoc = gql`
  fragment KidSize on ComponentSettingsKidSizes {
    id
    c105 {
      id
      title
      inStock
    }
    c11 {
      id
      title
      inStock
    }
    c115 {
      id
      title
      inStock
    }
    c115 {
      id
      title
      inStock
    }
    c12 {
      id
      title
      inStock
    }
    c125 {
      id
      title
      inStock
    }
    c13 {
      id
      title
      inStock
    }
    c135 {
      id
      title
      inStock
    }
    y1 {
      id
      title
      inStock
    }
    y15 {
      id
      title
      inStock
    }
    y2 {
      id
      title
      inStock
    }
    y25 {
      id
      title
      inStock
    }
    y3 {
      id
      title
      inStock
    }
  }
`;
export const MenSizesFragmentDoc = gql`
  fragment MenSizes on ComponentSettingsMenSizes {
    id
    m7 {
      id
      title
      inStock
    }
    m75 {
      id
      title
      inStock
    }
    m8 {
      id
      title
      inStock
    }
    m85 {
      id
      title
      inStock
    }
    m9 {
      id
      title
      inStock
    }
    n95 {
      id
      title
      inStock
    }
    m10 {
      id
      title
      inStock
    }
    m105 {
      id
      title
      inStock
    }
    m11 {
      id
      title
      inStock
    }
    m115 {
      id
      title
      inStock
    }
    m12 {
      id
      title
      inStock
    }
    m125 {
      id
      title
      inStock
    }
    m13 {
      id
      title
      inStock
    }
    m14 {
      id
      title
      inStock
    }
    m15 {
      id
      title
      inStock
    }
    m16 {
      id
      title
      inStock
    }
    m17 {
      id
      title
      inStock
    }
    m18 {
      id
      title
      inStock
    }
  }
`;
export const WomenSizesFragmentDoc = gql`
  fragment WomenSizes on ComponentSettingsWomenSizes {
    id
    w5 {
      id
      title
      inStock
    }
    w55 {
      id
      title
      inStock
    }
    w6 {
      id
      title
      inStock
    }
    w65 {
      id
      title
      inStock
    }
    w7 {
      id
      title
      inStock
    }
    w75 {
      id
      title
      inStock
    }
    w8 {
      id
      title
      inStock
    }
    w85 {
      id
      title
      inStock
    }
    w9 {
      id
      title
      inStock
    }
    w95 {
      id
      title
      inStock
    }
    w10 {
      id
      title
      inStock
    }
    w105 {
      id
      title
      inStock
    }
    w11 {
      id
      title
      inStock
    }
    w115 {
      id
      title
      inStock
    }
    w12 {
      id
      title
      inStock
    }
  }
`;
export const ButtonFragmentFragmentDoc = gql`
  fragment ButtonFragment on ComponentUiButton {
    id
    label
    href
  }
`;
export const FileFragmentFragmentDoc = gql`
  fragment FileFragment on UploadFile {
    name
    alternativeText
    caption
    width
    height
    formats
    hash
    ext
    mime
    size
    url
    previewUrl
    provider
    provider_metadata
  }
`;
export const FigureFragmentFragmentDoc = gql`
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
  ${ButtonFragmentFragmentDoc}
  ${FileFragmentFragmentDoc}
`;
export const LinkFragmentFragmentDoc = gql`
  fragment LinkFragment on ComponentUiLink {
    id
    label
    href
  }
`;
export const CountryFragmentFragmentDoc = gql`
  fragment CountryFragment on Country {
    code3
    code2
    createdAt
    updatedAt
    publishedAt
    page_home {
      data {
        id
      }
    }
  }
`;
export const LanguageEntityFragmentFragmentDoc = gql`
  fragment LanguageEntityFragment on LanguageEntity {
    id
    attributes {
      name
      code
    }
  }
`;
export const ShoeCarouselCardFragmentDoc = gql`
  fragment ShoeCarouselCard on ComponentUiShoeCardForCarousel {
    id
    title
    link
    tag
    media {
      data {
        attributes {
          ...FileFragment
        }
      }
    }
    section_shoes {
      data {
        id
      }
    }
    price
  }
  ${FileFragmentFragmentDoc}
`;
export const PageGoodsFragmentDoc = gql`
  fragment PageGoods on GoodsPageEntity {
    id
    attributes {
      pageTitle
      title
      good(
        pagination: { page: $page, pageSize: $pageSize }
        filters: { price: $price, tag: $tag }
      ) {
        ...ShoeCarouselCard
      }
    }
  }
  ${ShoeCarouselCardFragmentDoc}
`;
export const HomePageFragmentFragmentDoc = gql`
  fragment HomePageFragment on HomePage {
    section_main_title {
      data {
        id
      }
    }
    banner_section {
      data {
        id
      }
    }
    section_trend {
      data {
        id
      }
    }
    section_popular {
      data {
        id
      }
    }
    section_membership {
      data {
        id
      }
    }
  }
`;
export const BannerCardFragmentDoc = gql`
  fragment BannerCard on ComponentUiBannerCard {
    id
    Title
    description
  }
`;
export const SectionBannerFragmentFragmentDoc = gql`
  fragment SectionBannerFragment on BannerSection {
    card {
      ...BannerCard
    }
  }
  ${BannerCardFragmentDoc}
`;
export const SectionMainTitleFragmentFragmentDoc = gql`
  fragment SectionMainTitleFragment on SectionMainTitle {
    MainTitle
    SubTitle
    Video {
      data {
        attributes {
          ...FileFragment
        }
      }
    }
    ShowCollectionLinkButton {
      ...ButtonFragment
    }
    WatchLinkButton {
      ...ButtonFragment
    }
    Title
    publishedAt
  }
  ${FileFragmentFragmentDoc}
  ${ButtonFragmentFragmentDoc}
`;
export const MembershipCardFragmentDoc = gql`
  fragment MembershipCard on ComponentUiMembershipCard {
    id
    title
    subtitle
    image {
      data {
        attributes {
          ...FileFragment
        }
      }
    }
    link
  }
  ${FileFragmentFragmentDoc}
`;
export const SectionMembershipFragmentFragmentDoc = gql`
  fragment SectionMembershipFragment on SectionMembership {
    title
    subtitle
    JoinUsButton {
      ...ButtonFragment
    }
    SignInButton {
      ...ButtonFragment
    }
    card {
      ...MembershipCard
    }
    publishedAt
  }
  ${ButtonFragmentFragmentDoc}
  ${MembershipCardFragmentDoc}
`;
export const SectionPopularFragmentFragmentDoc = gql`
  fragment SectionPopularFragment on SectionPopular {
    sectionTitle
    card {
      ...ShoeCarouselCard
    }
    updatedAt
  }
  ${ShoeCarouselCardFragmentDoc}
`;
export const ShoeOptionFragmentFragmentDoc = gql`
  fragment ShoeOptionFragment on ComponentEntityShoeOption {
    mainImage {
      data {
        attributes {
          ...FileFragment
        }
      }
    }
    medias {
      data {
        attributes {
          ...FileFragment
        }
      }
    }
    title
    tag
    price
    description
  }
  ${FileFragmentFragmentDoc}
`;
export const SizeFragmentDoc = gql`
  fragment Size on ComponentSettingsSize {
    id
    title
    inStock
  }
`;
export const SectionShoeFragmentFragmentDoc = gql`
  fragment SectionShoeFragment on SectionShoe {
    addToBagButton {
      ...ButtonFragment
    }
    favoriteButton {
      ...ButtonFragment
    }
    options {
      ...ShoeOptionFragment
    }
    sizes {
      id
      Sizes {
        ...Size
      }
    }
    tags
    gender
    pageTitle
    pageSubtitle
    pageTitle2
    pageTitle3
    updatedAt
  }
  ${ButtonFragmentFragmentDoc}
  ${ShoeOptionFragmentFragmentDoc}
  ${SizeFragmentDoc}
`;
export const SectionShoeForCardFragmentFragmentDoc = gql`
  fragment SectionShoeForCardFragment on SectionShoe {
    options {
      mainImage {
        data {
          attributes {
            ...FileFragment
          }
        }
      }
      title
      tag
      price
    }
    tags
    gender
    pageTitle
    pageSubtitle
    pageTitle2
    pageTitle3
    updatedAt
  }
  ${FileFragmentFragmentDoc}
`;
export const TrendCardFragmentDoc = gql`
  fragment TrendCard on ComponentUiTrendCard {
    id
    title
    link
    image {
      data {
        attributes {
          ...FileFragment
        }
      }
    }
  }
  ${FileFragmentFragmentDoc}
`;
export const SectionTrendFragmentFragmentDoc = gql`
  fragment SectionTrendFragment on SectionTrend {
    SectionTitle
    card {
      ...TrendCard
    }
    updatedAt
  }
  ${TrendCardFragmentDoc}
`;
export const GetCountriesDocument = gql`
  query getCountries {
    countries {
      data {
        id
        attributes {
          ...CountryFragment
        }
      }
    }
  }
  ${CountryFragmentFragmentDoc}
`;
export const GetGoodsPageDocument = gql`
  query getGoodsPage(
    $pageTitle: String
    $page: Int
    $pageSize: Int
    $sort: [String]
    $gender: [String]
    $size: String
    $priceFrom: Int
    $priceTo: Int
    $query: String
  ) {
    sectionShoes(
      filters: {
        pageSubtitle: { eqi: $pageTitle }
        gender: { in: $gender }
        sizes: { Sizes: { title: { containsi: $size }, inStock: { eq: true } } }
        options: { price: { between: [$priceFrom, $priceTo] }, title: { containsi: $query } }
      }
      pagination: { page: $page, pageSize: $pageSize }
      sort: $sort
    ) {
      meta {
        pagination {
          total
        }
      }
      data {
        id
        attributes {
          ...SectionShoeFragment
        }
      }
    }
  }
  ${SectionShoeFragmentFragmentDoc}
`;
export const GetGoodsPageMinDocument = gql`
  query getGoodsPageMin(
    $pageTitle: String
    $page: Int
    $pageSize: Int
    $sort: [String]
    $gender: [String]
    $size: String
    $priceFrom: Int
    $priceTo: Int
    $query: String
  ) {
    sectionShoes(
      filters: {
        pageSubtitle: { eqi: $pageTitle }
        gender: { in: $gender }
        sizes: { Sizes: { title: { containsi: $size }, inStock: { eq: true } } }
        options: { price: { between: [$priceFrom, $priceTo] }, title: { containsi: $query } }
      }
      pagination: { page: $page, pageSize: $pageSize }
      sort: $sort
    ) {
      meta {
        pagination {
          total
        }
      }
      data {
        id
        attributes {
          ...SectionShoeForCardFragment
        }
      }
    }
  }
  ${SectionShoeForCardFragmentFragmentDoc}
`;
export const GetHomePageDocument = gql`
  query getHomePage {
    homePage {
      data {
        id
        attributes {
          ...HomePageFragment
        }
      }
    }
  }
  ${HomePageFragmentFragmentDoc}
`;
export const GetSectionBannerDocument = gql`
  query getSectionBanner($id: ID, $locale: I18NLocaleCode) {
    bannerSection(id: $id, locale: $locale) {
      data {
        id
        attributes {
          ...SectionBannerFragment
        }
      }
    }
  }
  ${SectionBannerFragmentFragmentDoc}
`;
export const GetSectionMainTitleDocument = gql`
  query getSectionMainTitle($id: ID, $locale: I18NLocaleCode) {
    sectionMainTitle(id: $id, locale: $locale) {
      data {
        id
        attributes {
          ...SectionMainTitleFragment
        }
      }
    }
  }
  ${SectionMainTitleFragmentFragmentDoc}
`;
export const GetSectionMembershipDocument = gql`
  query getSectionMembership($id: ID, $locale: I18NLocaleCode) {
    sectionMembership(id: $id, locale: $locale) {
      data {
        id
        attributes {
          ...SectionMembershipFragment
        }
      }
    }
  }
  ${SectionMembershipFragmentFragmentDoc}
`;
export const GetSectionPopularDocument = gql`
  query getSectionPopular($id: ID, $locale: I18NLocaleCode) {
    sectionPopular(id: $id, locale: $locale) {
      data {
        id
        attributes {
          ...SectionPopularFragment
        }
      }
    }
  }
  ${SectionPopularFragmentFragmentDoc}
`;
export const GetSectionShoeDocument = gql`
  query getSectionShoe($id: ID) {
    sectionShoe(id: $id) {
      data {
        id
        attributes {
          ...SectionShoeFragment
        }
      }
    }
  }
  ${SectionShoeFragmentFragmentDoc}
`;
export const GetSectionTrendDocument = gql`
  query getSectionTrend($id: ID, $locale: I18NLocaleCode) {
    sectionTrend(id: $id, locale: $locale) {
      data {
        id
        attributes {
          ...SectionTrendFragment
        }
      }
    }
  }
  ${SectionTrendFragmentFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getCountries(
      variables?: GetCountriesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetCountriesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetCountriesQuery>(GetCountriesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getCountries',
        'query',
      );
    },
    getGoodsPage(
      variables?: GetGoodsPageQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetGoodsPageQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetGoodsPageQuery>(GetGoodsPageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getGoodsPage',
        'query',
      );
    },
    getGoodsPageMin(
      variables?: GetGoodsPageMinQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetGoodsPageMinQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetGoodsPageMinQuery>(GetGoodsPageMinDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getGoodsPageMin',
        'query',
      );
    },
    getHomePage(
      variables?: GetHomePageQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetHomePageQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetHomePageQuery>(GetHomePageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getHomePage',
        'query',
      );
    },
    getSectionBanner(
      variables?: GetSectionBannerQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetSectionBannerQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetSectionBannerQuery>(GetSectionBannerDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getSectionBanner',
        'query',
      );
    },
    getSectionMainTitle(
      variables?: GetSectionMainTitleQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetSectionMainTitleQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetSectionMainTitleQuery>(GetSectionMainTitleDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getSectionMainTitle',
        'query',
      );
    },
    getSectionMembership(
      variables?: GetSectionMembershipQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetSectionMembershipQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetSectionMembershipQuery>(GetSectionMembershipDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getSectionMembership',
        'query',
      );
    },
    getSectionPopular(
      variables?: GetSectionPopularQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetSectionPopularQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetSectionPopularQuery>(GetSectionPopularDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getSectionPopular',
        'query',
      );
    },
    getSectionShoe(
      variables?: GetSectionShoeQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetSectionShoeQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetSectionShoeQuery>(GetSectionShoeDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getSectionShoe',
        'query',
      );
    },
    getSectionTrend(
      variables?: GetSectionTrendQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetSectionTrendQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetSectionTrendQuery>(GetSectionTrendDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getSectionTrend',
        'query',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
