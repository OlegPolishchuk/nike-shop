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
  readonly id: Scalars['ID']['output'];
  readonly medias: Maybe<UploadFileRelationResponseCollection>;
};

export type ComponentEntityShoeOptionMediasArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentEntityShoeOptionFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentEntityShoeOptionFiltersInput>>>;
  readonly not: InputMaybe<ComponentEntityShoeOptionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentEntityShoeOptionFiltersInput>>>;
};

export type ComponentEntityShoeOptionInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly medias: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentLayoutHeaderLinkList = {
  readonly __typename?: 'ComponentLayoutHeaderLinkList';
  readonly Title: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
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
  | ComponentLayoutHeaderLinkList
  | ComponentSettingsBannerSection
  | ComponentUiBannerCard
  | ComponentUiButton
  | ComponentUiFigure
  | ComponentUiLink
  | ComponentUiLinkList
  | ComponentUiMembershipCard
  | ComponentUiTrendCard
  | Country
  | I18NLocale
  | Language
  | LayoutHeader
  | PageHome
  | PageShoe
  | SectionMainTitle
  | SectionMembership
  | SectionShoe
  | SectionTrend
  | Shoe
  | Size
  | Type
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser;

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

export type Mutation = {
  readonly __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  readonly changePassword: Maybe<UsersPermissionsLoginPayload>;
  readonly createBannerSection: Maybe<BannerSectionEntityResponse>;
  readonly createBannerSectionLocalization: Maybe<BannerSectionEntityResponse>;
  readonly createCountry: Maybe<CountryEntityResponse>;
  readonly createCountryLocalization: Maybe<CountryEntityResponse>;
  readonly createLanguage: Maybe<LanguageEntityResponse>;
  readonly createLayoutHeader: Maybe<LayoutHeaderEntityResponse>;
  readonly createLayoutHeaderLocalization: Maybe<LayoutHeaderEntityResponse>;
  readonly createPageHome: Maybe<PageHomeEntityResponse>;
  readonly createPageHomeLocalization: Maybe<PageHomeEntityResponse>;
  readonly createPageShoe: Maybe<PageShoeEntityResponse>;
  readonly createPageShoeLocalization: Maybe<PageShoeEntityResponse>;
  readonly createSectionMainTitle: Maybe<SectionMainTitleEntityResponse>;
  readonly createSectionMainTitleLocalization: Maybe<SectionMainTitleEntityResponse>;
  readonly createSectionMembership: Maybe<SectionMembershipEntityResponse>;
  readonly createSectionMembershipLocalization: Maybe<SectionMembershipEntityResponse>;
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
  readonly deleteBannerSection: Maybe<BannerSectionEntityResponse>;
  readonly deleteCountry: Maybe<CountryEntityResponse>;
  readonly deleteLanguage: Maybe<LanguageEntityResponse>;
  readonly deleteLayoutHeader: Maybe<LayoutHeaderEntityResponse>;
  readonly deletePageHome: Maybe<PageHomeEntityResponse>;
  readonly deletePageShoe: Maybe<PageShoeEntityResponse>;
  readonly deleteSectionMainTitle: Maybe<SectionMainTitleEntityResponse>;
  readonly deleteSectionMembership: Maybe<SectionMembershipEntityResponse>;
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
  readonly updateLanguage: Maybe<LanguageEntityResponse>;
  readonly updateLayoutHeader: Maybe<LayoutHeaderEntityResponse>;
  readonly updatePageHome: Maybe<PageHomeEntityResponse>;
  readonly updatePageShoe: Maybe<PageShoeEntityResponse>;
  readonly updateSectionMainTitle: Maybe<SectionMainTitleEntityResponse>;
  readonly updateSectionMembership: Maybe<SectionMembershipEntityResponse>;
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

export type MutationDeleteBannerSectionArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteCountryArgs = {
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

export type MutationUpdateLanguageArgs = {
  data: LanguageInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateLayoutHeaderArgs = {
  data: LayoutHeaderInput;
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
  readonly i18NLocale: Maybe<I18NLocaleEntityResponse>;
  readonly i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
  readonly language: Maybe<LanguageEntityResponse>;
  readonly languages: Maybe<LanguageEntityResponseCollection>;
  readonly layoutHeader: Maybe<LayoutHeaderEntityResponse>;
  readonly layoutHeaders: Maybe<LayoutHeaderEntityResponseCollection>;
  readonly me: Maybe<UsersPermissionsMe>;
  readonly pageHome: Maybe<PageHomeEntityResponse>;
  readonly pageHomes: Maybe<PageHomeEntityResponseCollection>;
  readonly pageShoe: Maybe<PageShoeEntityResponse>;
  readonly pageShoes: Maybe<PageShoeEntityResponseCollection>;
  readonly sectionMainTitle: Maybe<SectionMainTitleEntityResponse>;
  readonly sectionMainTitles: Maybe<SectionMainTitleEntityResponseCollection>;
  readonly sectionMembership: Maybe<SectionMembershipEntityResponse>;
  readonly sectionMemberships: Maybe<SectionMembershipEntityResponseCollection>;
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

export type QueryI18NLocaleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
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

export type SectionShoe = {
  readonly __typename?: 'SectionShoe';
  readonly addToBagButton: Maybe<ComponentUiButton>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly detailsButton: Maybe<ReadonlyArray<Maybe<ComponentUiButton>>>;
  readonly favoriteButton: Maybe<ComponentUiButton>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<SectionShoeRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
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
  readonly addToBagButton: InputMaybe<ComponentUiButtonFiltersInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<SectionShoeFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly detailsButton: InputMaybe<ComponentUiButtonFiltersInput>;
  readonly favoriteButton: InputMaybe<ComponentUiButtonFiltersInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<SectionShoeFiltersInput>;
  readonly not: InputMaybe<SectionShoeFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<SectionShoeFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type SectionShoeInput = {
  readonly addToBagButton: InputMaybe<ComponentUiButtonInput>;
  readonly detailsButton: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiButtonInput>>>;
  readonly favoriteButton: InputMaybe<ComponentUiButtonInput>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
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
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<SizeRelationResponseCollection>;
  readonly name: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly values: Scalars['String']['output'];
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
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<SizeFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<SizeFiltersInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<SizeFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<SizeFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly values: InputMaybe<StringFilterInput>;
};

export type SizeInput = {
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly values: InputMaybe<Scalars['String']['input']>;
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

export type ShoeOptionFragmentFragment = {
  readonly __typename?: 'ComponentEntityShoeOption';
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

export type PageHomeFragmentFragment = {
  readonly __typename?: 'PageHome';
  readonly Title: string;
  readonly section_main_title: {
    readonly __typename?: 'SectionMainTitleEntityResponse';
    readonly data: { readonly __typename?: 'SectionMainTitleEntity'; readonly id: string };
  };
  readonly banner_section: {
    readonly __typename?: 'BannerSectionEntityResponse';
    readonly data: { readonly __typename?: 'BannerSectionEntity'; readonly id: string };
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

export type GetPageHomeQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetPageHomeQuery = {
  readonly __typename?: 'Query';
  readonly pageHome: {
    readonly __typename?: 'PageHomeEntityResponse';
    readonly data: {
      readonly __typename?: 'PageHomeEntity';
      readonly id: string;
      readonly attributes: {
        readonly __typename?: 'PageHome';
        readonly Title: string;
        readonly section_main_title: {
          readonly __typename?: 'SectionMainTitleEntityResponse';
          readonly data: { readonly __typename?: 'SectionMainTitleEntity'; readonly id: string };
        };
        readonly banner_section: {
          readonly __typename?: 'BannerSectionEntityResponse';
          readonly data: { readonly __typename?: 'BannerSectionEntity'; readonly id: string };
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
export const ShoeOptionFragmentFragmentDoc = gql`
  fragment ShoeOptionFragment on ComponentEntityShoeOption {
    medias {
      data {
        attributes {
          ...FileFragment
        }
      }
    }
  }
  ${FileFragmentFragmentDoc}
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
export const PageHomeFragmentFragmentDoc = gql`
  fragment PageHomeFragment on PageHome {
    Title
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
export const GetPageHomeDocument = gql`
  query getPageHome($id: ID, $locale: I18NLocaleCode) {
    pageHome(id: $id, locale: $locale) {
      data {
        id
        attributes {
          ...PageHomeFragment
        }
      }
    }
  }
  ${PageHomeFragmentFragmentDoc}
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
    getPageHome(
      variables?: GetPageHomeQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetPageHomeQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetPageHomeQuery>(GetPageHomeDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getPageHome',
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
  };
}
export type Sdk = ReturnType<typeof getSdk>;
