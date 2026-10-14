/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
/** Gravity Forms Field Type. */
export type FormFieldTypeEnum =
  /** A Gravity Forms address field. */
  | 'ADDRESS'
  /** A Gravity Forms calculation field. */
  | 'CALCULATION'
  /** A Gravity Forms captcha field. */
  | 'CAPTCHA'
  /** A Gravity Forms checkbox field. */
  | 'CHECKBOX'
  /** A Gravity Forms consent field. */
  | 'CONSENT'
  /** A Gravity Forms date field. */
  | 'DATE'
  /** A Gravity Forms email field. */
  | 'EMAIL'
  /** A Gravity Forms fileupload field. */
  | 'FILEUPLOAD'
  /** A Gravity Forms hidden field. */
  | 'HIDDEN'
  /** A Gravity Forms hiddenproduct field. */
  | 'HIDDENPRODUCT'
  /** A Gravity Forms html field. */
  | 'HTML'
  /** A Gravity Forms list field. */
  | 'LIST'
  /** A Gravity Forms multiselect field. */
  | 'MULTISELECT'
  /** A Gravity Forms name field. */
  | 'NAME'
  /** A Gravity Forms number field. */
  | 'NUMBER'
  /** A Gravity Forms option field. */
  | 'OPTION'
  /** A Gravity Forms page field. */
  | 'PAGE'
  /** A Gravity Forms password field. */
  | 'PASSWORD'
  /** A Gravity Forms phone field. */
  | 'PHONE'
  /** A Gravity Forms post_category field. */
  | 'POST_CATEGORY'
  /** A Gravity Forms post_content field. */
  | 'POST_CONTENT'
  /** A Gravity Forms post_custom_field field. */
  | 'POST_CUSTOM_FIELD'
  /** A Gravity Forms post_excerpt field. */
  | 'POST_EXCERPT'
  /** A Gravity Forms post_image field. */
  | 'POST_IMAGE'
  /** A Gravity Forms post_tags field. */
  | 'POST_TAGS'
  /** A Gravity Forms post_title field. */
  | 'POST_TITLE'
  /** A Gravity Forms price field. */
  | 'PRICE'
  /** A Gravity Forms product field. */
  | 'PRODUCT'
  /** A Gravity Forms quantity field. */
  | 'QUANTITY'
  /** A Gravity Forms radio field. */
  | 'RADIO'
  /** A Gravity Forms section field. */
  | 'SECTION'
  /** A Gravity Forms select field. */
  | 'SELECT'
  /** A Gravity Forms shipping field. */
  | 'SHIPPING'
  /** A Gravity Forms singleproduct field. */
  | 'SINGLEPRODUCT'
  /** A Gravity Forms singleshipping field. */
  | 'SINGLESHIPPING'
  /** A Gravity Forms text field. */
  | 'TEXT'
  /** A Gravity Forms textarea field. */
  | 'TEXTAREA'
  /** A Gravity Forms time field. */
  | 'TIME'
  /** A Gravity Forms total field. */
  | 'TOTAL'
  /** A Gravity Forms website field. */
  | 'WEBSITE';

/** Field visibility. */
export type FormFieldVisibilityEnum =
  /** The field is for "administrative" use. */
  | 'ADMINISTRATIVE'
  /** The field is "hidden". */
  | 'HIDDEN'
  /** The field is "visible". */
  | 'VISIBLE';

/** The cardinality of the connection order */
export type OrderEnum =
  /** Sort the query result set in an ascending order */
  | 'ASC'
  /** Sort the query result set in a descending order */
  | 'DESC';

/** Field to order the connection by */
export type PostObjectsConnectionOrderbyEnum =
  /** Order by author */
  | 'AUTHOR'
  /** Order by the number of comments it has acquired */
  | 'COMMENT_COUNT'
  /** Order by publish date */
  | 'DATE'
  /** Preserve the ID order given in the IN array */
  | 'IN'
  /** Order by the menu order value */
  | 'MENU_ORDER'
  /** Order by last modified date */
  | 'MODIFIED'
  /** Preserve slug order given in the NAME_IN array */
  | 'NAME_IN'
  /** Order by parent ID */
  | 'PARENT'
  /** Order by slug */
  | 'SLUG'
  /** Order by title */
  | 'TITLE';

/** Type of confirmation returned by the submission. */
export type SubmissionConfirmationTypeEnum =
  /** A confirmation "message". */
  | 'MESSAGE'
  /** A "redirect" to a given URL. */
  | 'REDIRECT';

export type FieldErrorFieldsFragment = { __typename: 'FieldError', id: number | null, message: string | null } & { ' $fragmentName'?: 'FieldErrorFieldsFragment' };

type FormFieldFields_AddressField_Fragment = { __typename: 'AddressField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_AddressField_Fragment' };

type FormFieldFields_CaptchaField_Fragment = { __typename: 'CaptchaField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_CaptchaField_Fragment' };

type FormFieldFields_CheckboxField_Fragment = { __typename: 'CheckboxField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_CheckboxField_Fragment' };

type FormFieldFields_ConsentField_Fragment = { __typename: 'ConsentField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_ConsentField_Fragment' };

type FormFieldFields_DateField_Fragment = { __typename: 'DateField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_DateField_Fragment' };

type FormFieldFields_EmailField_Fragment = { __typename: 'EmailField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_EmailField_Fragment' };

type FormFieldFields_FileUploadField_Fragment = { __typename: 'FileUploadField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_FileUploadField_Fragment' };

type FormFieldFields_HiddenField_Fragment = { __typename: 'HiddenField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_HiddenField_Fragment' };

type FormFieldFields_HtmlField_Fragment = { __typename: 'HtmlField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_HtmlField_Fragment' };

type FormFieldFields_ListField_Fragment = { __typename: 'ListField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_ListField_Fragment' };

type FormFieldFields_MultiSelectField_Fragment = { __typename: 'MultiSelectField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_MultiSelectField_Fragment' };

type FormFieldFields_NameField_Fragment = { __typename: 'NameField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_NameField_Fragment' };

type FormFieldFields_NumberField_Fragment = { __typename: 'NumberField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_NumberField_Fragment' };

type FormFieldFields_OptionCheckboxField_Fragment = { __typename: 'OptionCheckboxField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_OptionCheckboxField_Fragment' };

type FormFieldFields_OptionRadioField_Fragment = { __typename: 'OptionRadioField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_OptionRadioField_Fragment' };

type FormFieldFields_OptionSelectField_Fragment = { __typename: 'OptionSelectField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_OptionSelectField_Fragment' };

type FormFieldFields_PageField_Fragment = { __typename: 'PageField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PageField_Fragment' };

type FormFieldFields_PasswordField_Fragment = { __typename: 'PasswordField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PasswordField_Fragment' };

type FormFieldFields_PhoneField_Fragment = { __typename: 'PhoneField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PhoneField_Fragment' };

type FormFieldFields_PostCategoryCheckboxField_Fragment = { __typename: 'PostCategoryCheckboxField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostCategoryCheckboxField_Fragment' };

type FormFieldFields_PostCategoryMultiSelectField_Fragment = { __typename: 'PostCategoryMultiSelectField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostCategoryMultiSelectField_Fragment' };

type FormFieldFields_PostCategoryRadioField_Fragment = { __typename: 'PostCategoryRadioField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostCategoryRadioField_Fragment' };

type FormFieldFields_PostCategorySelectField_Fragment = { __typename: 'PostCategorySelectField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostCategorySelectField_Fragment' };

type FormFieldFields_PostContentField_Fragment = { __typename: 'PostContentField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostContentField_Fragment' };

type FormFieldFields_PostCustomCheckboxField_Fragment = { __typename: 'PostCustomCheckboxField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostCustomCheckboxField_Fragment' };

type FormFieldFields_PostCustomDateField_Fragment = { __typename: 'PostCustomDateField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostCustomDateField_Fragment' };

type FormFieldFields_PostCustomEmailField_Fragment = { __typename: 'PostCustomEmailField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostCustomEmailField_Fragment' };

type FormFieldFields_PostCustomFileuploadField_Fragment = { __typename: 'PostCustomFileuploadField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostCustomFileuploadField_Fragment' };

type FormFieldFields_PostCustomHiddenField_Fragment = { __typename: 'PostCustomHiddenField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostCustomHiddenField_Fragment' };

type FormFieldFields_PostCustomListField_Fragment = { __typename: 'PostCustomListField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostCustomListField_Fragment' };

type FormFieldFields_PostCustomMultiSelectField_Fragment = { __typename: 'PostCustomMultiSelectField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostCustomMultiSelectField_Fragment' };

type FormFieldFields_PostCustomNumberField_Fragment = { __typename: 'PostCustomNumberField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostCustomNumberField_Fragment' };

type FormFieldFields_PostCustomPhoneField_Fragment = { __typename: 'PostCustomPhoneField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostCustomPhoneField_Fragment' };

type FormFieldFields_PostCustomRadioField_Fragment = { __typename: 'PostCustomRadioField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostCustomRadioField_Fragment' };

type FormFieldFields_PostCustomSelectField_Fragment = { __typename: 'PostCustomSelectField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostCustomSelectField_Fragment' };

type FormFieldFields_PostCustomTextAreaField_Fragment = { __typename: 'PostCustomTextAreaField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostCustomTextAreaField_Fragment' };

type FormFieldFields_PostCustomTextField_Fragment = { __typename: 'PostCustomTextField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostCustomTextField_Fragment' };

type FormFieldFields_PostCustomTimeField_Fragment = { __typename: 'PostCustomTimeField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostCustomTimeField_Fragment' };

type FormFieldFields_PostCustomWebsiteField_Fragment = { __typename: 'PostCustomWebsiteField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostCustomWebsiteField_Fragment' };

type FormFieldFields_PostExcerptField_Fragment = { __typename: 'PostExcerptField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostExcerptField_Fragment' };

type FormFieldFields_PostImageField_Fragment = { __typename: 'PostImageField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostImageField_Fragment' };

type FormFieldFields_PostTagsCheckboxField_Fragment = { __typename: 'PostTagsCheckboxField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostTagsCheckboxField_Fragment' };

type FormFieldFields_PostTagsMultiSelectField_Fragment = { __typename: 'PostTagsMultiSelectField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostTagsMultiSelectField_Fragment' };

type FormFieldFields_PostTagsRadioField_Fragment = { __typename: 'PostTagsRadioField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostTagsRadioField_Fragment' };

type FormFieldFields_PostTagsSelectField_Fragment = { __typename: 'PostTagsSelectField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostTagsSelectField_Fragment' };

type FormFieldFields_PostTagsTextField_Fragment = { __typename: 'PostTagsTextField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostTagsTextField_Fragment' };

type FormFieldFields_PostTitleField_Fragment = { __typename: 'PostTitleField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_PostTitleField_Fragment' };

type FormFieldFields_ProductCalculationField_Fragment = { __typename: 'ProductCalculationField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_ProductCalculationField_Fragment' };

type FormFieldFields_ProductHiddenField_Fragment = { __typename: 'ProductHiddenField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_ProductHiddenField_Fragment' };

type FormFieldFields_ProductPriceField_Fragment = { __typename: 'ProductPriceField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_ProductPriceField_Fragment' };

type FormFieldFields_ProductRadioField_Fragment = { __typename: 'ProductRadioField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_ProductRadioField_Fragment' };

type FormFieldFields_ProductSelectField_Fragment = { __typename: 'ProductSelectField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_ProductSelectField_Fragment' };

type FormFieldFields_ProductSingleField_Fragment = { __typename: 'ProductSingleField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_ProductSingleField_Fragment' };

type FormFieldFields_QuantityHiddenField_Fragment = { __typename: 'QuantityHiddenField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_QuantityHiddenField_Fragment' };

type FormFieldFields_QuantityNumberField_Fragment = { __typename: 'QuantityNumberField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_QuantityNumberField_Fragment' };

type FormFieldFields_QuantitySelectField_Fragment = { __typename: 'QuantitySelectField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_QuantitySelectField_Fragment' };

type FormFieldFields_RadioField_Fragment = { __typename: 'RadioField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_RadioField_Fragment' };

type FormFieldFields_SectionField_Fragment = { __typename: 'SectionField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_SectionField_Fragment' };

type FormFieldFields_SelectField_Fragment = { __typename: 'SelectField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_SelectField_Fragment' };

type FormFieldFields_ShippingRadioField_Fragment = { __typename: 'ShippingRadioField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_ShippingRadioField_Fragment' };

type FormFieldFields_ShippingSelectField_Fragment = { __typename: 'ShippingSelectField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_ShippingSelectField_Fragment' };

type FormFieldFields_ShippingSingleField_Fragment = { __typename: 'ShippingSingleField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_ShippingSingleField_Fragment' };

type FormFieldFields_TextAreaField_Fragment = { __typename: 'TextAreaField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_TextAreaField_Fragment' };

type FormFieldFields_TextField_Fragment = { __typename: 'TextField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_TextField_Fragment' };

type FormFieldFields_TimeField_Fragment = { __typename: 'TimeField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_TimeField_Fragment' };

type FormFieldFields_TotalField_Fragment = { __typename: 'TotalField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_TotalField_Fragment' };

type FormFieldFields_WebsiteField_Fragment = { __typename: 'WebsiteField', databaseId: number, displayOnly: boolean | null, inputType: FormFieldTypeEnum | null, layoutGridColumnSpan: number | null, layoutSpacerGridColumnSpan: number | null, pageNumber: number | null, type: FormFieldTypeEnum | null, visibility: FormFieldVisibilityEnum | null } & { ' $fragmentName'?: 'FormFieldFields_WebsiteField_Fragment' };

export type FormFieldFieldsFragment =
  | FormFieldFields_AddressField_Fragment
  | FormFieldFields_CaptchaField_Fragment
  | FormFieldFields_CheckboxField_Fragment
  | FormFieldFields_ConsentField_Fragment
  | FormFieldFields_DateField_Fragment
  | FormFieldFields_EmailField_Fragment
  | FormFieldFields_FileUploadField_Fragment
  | FormFieldFields_HiddenField_Fragment
  | FormFieldFields_HtmlField_Fragment
  | FormFieldFields_ListField_Fragment
  | FormFieldFields_MultiSelectField_Fragment
  | FormFieldFields_NameField_Fragment
  | FormFieldFields_NumberField_Fragment
  | FormFieldFields_OptionCheckboxField_Fragment
  | FormFieldFields_OptionRadioField_Fragment
  | FormFieldFields_OptionSelectField_Fragment
  | FormFieldFields_PageField_Fragment
  | FormFieldFields_PasswordField_Fragment
  | FormFieldFields_PhoneField_Fragment
  | FormFieldFields_PostCategoryCheckboxField_Fragment
  | FormFieldFields_PostCategoryMultiSelectField_Fragment
  | FormFieldFields_PostCategoryRadioField_Fragment
  | FormFieldFields_PostCategorySelectField_Fragment
  | FormFieldFields_PostContentField_Fragment
  | FormFieldFields_PostCustomCheckboxField_Fragment
  | FormFieldFields_PostCustomDateField_Fragment
  | FormFieldFields_PostCustomEmailField_Fragment
  | FormFieldFields_PostCustomFileuploadField_Fragment
  | FormFieldFields_PostCustomHiddenField_Fragment
  | FormFieldFields_PostCustomListField_Fragment
  | FormFieldFields_PostCustomMultiSelectField_Fragment
  | FormFieldFields_PostCustomNumberField_Fragment
  | FormFieldFields_PostCustomPhoneField_Fragment
  | FormFieldFields_PostCustomRadioField_Fragment
  | FormFieldFields_PostCustomSelectField_Fragment
  | FormFieldFields_PostCustomTextAreaField_Fragment
  | FormFieldFields_PostCustomTextField_Fragment
  | FormFieldFields_PostCustomTimeField_Fragment
  | FormFieldFields_PostCustomWebsiteField_Fragment
  | FormFieldFields_PostExcerptField_Fragment
  | FormFieldFields_PostImageField_Fragment
  | FormFieldFields_PostTagsCheckboxField_Fragment
  | FormFieldFields_PostTagsMultiSelectField_Fragment
  | FormFieldFields_PostTagsRadioField_Fragment
  | FormFieldFields_PostTagsSelectField_Fragment
  | FormFieldFields_PostTagsTextField_Fragment
  | FormFieldFields_PostTitleField_Fragment
  | FormFieldFields_ProductCalculationField_Fragment
  | FormFieldFields_ProductHiddenField_Fragment
  | FormFieldFields_ProductPriceField_Fragment
  | FormFieldFields_ProductRadioField_Fragment
  | FormFieldFields_ProductSelectField_Fragment
  | FormFieldFields_ProductSingleField_Fragment
  | FormFieldFields_QuantityHiddenField_Fragment
  | FormFieldFields_QuantityNumberField_Fragment
  | FormFieldFields_QuantitySelectField_Fragment
  | FormFieldFields_RadioField_Fragment
  | FormFieldFields_SectionField_Fragment
  | FormFieldFields_SelectField_Fragment
  | FormFieldFields_ShippingRadioField_Fragment
  | FormFieldFields_ShippingSelectField_Fragment
  | FormFieldFields_ShippingSingleField_Fragment
  | FormFieldFields_TextAreaField_Fragment
  | FormFieldFields_TextField_Fragment
  | FormFieldFields_TimeField_Fragment
  | FormFieldFields_TotalField_Fragment
  | FormFieldFields_WebsiteField_Fragment
;

type GfEntryFields_GfDraftEntry_Fragment = { __typename: 'GfDraftEntry', dateCreated: string | null, userAgent: string | null, ip: string | null, formId: string | null, isSubmitted: boolean | null, sourceUrl: string | null, id: string, createdById: string | null, createdByDatabaseId: number | null, dateCreatedGmt: string | null } & { ' $fragmentName'?: 'GfEntryFields_GfDraftEntry_Fragment' };

type GfEntryFields_GfSubmittedEntry_Fragment = { __typename: 'GfSubmittedEntry', dateCreated: string | null, userAgent: string | null, ip: string | null, formId: string | null, isSubmitted: boolean | null, sourceUrl: string | null, id: string, createdById: string | null, createdByDatabaseId: number | null, dateCreatedGmt: string | null } & { ' $fragmentName'?: 'GfEntryFields_GfSubmittedEntry_Fragment' };

export type GfEntryFieldsFragment =
  | GfEntryFields_GfDraftEntry_Fragment
  | GfEntryFields_GfSubmittedEntry_Fragment
;

export type GfEntryToFormFieldConnectionEdgeFieldsFragment = { __typename: 'GfEntryToFormFieldConnectionEdge', cursor: string | null } & { ' $fragmentName'?: 'GfEntryToFormFieldConnectionEdgeFieldsFragment' };

export type GfFormFieldsFragment = { __typename: 'GfForm', cssClass: string | null, databaseId: number, dateCreated: string | null, description: string | null, title: string | null, nextFieldId: number | null } & { ' $fragmentName'?: 'GfFormFieldsFragment' };

export type HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragmentFragment = { __typename: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge', cursor: string | null } & { ' $fragmentName'?: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragmentFragment' };

export type HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragmentFragment = { __typename: 'HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo', endCursor: string | null, startCursor: string | null, hasNextPage: boolean, hasPreviousPage: boolean } & { ' $fragmentName'?: 'HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragmentFragment' };

export type MediaDetailsFragmentFragment = { __typename: 'MediaDetails', width: number | null, height: number | null, filePath: string | null } & { ' $fragmentName'?: 'MediaDetailsFragmentFragment' };

export type MediaItemFragmentFragment = { __typename: 'MediaItem', altText: string | null, uri: string | null, title: string | null, sourceUrl: string | null, databaseId: number, fileSize: number | null, filePath: string | null, description: string | null, id: string, slug: string | null } & { ' $fragmentName'?: 'MediaItemFragmentFragment' };

export type MediaSizeFragmentFragment = { __typename: 'MediaSize', sourceUrl: string | null, name: string | null, file: string | null, fileSize: number | null, filePath: string | null, mimeType: string | null, width: string | null, height: string | null } & { ' $fragmentName'?: 'MediaSizeFragmentFragment' };

export type NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment = { __typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge', cursor: string | null } & { ' $fragmentName'?: 'NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment' };

export type PageFragmentFragment = { __typename: 'Page', id: string, databaseId: number, parentId: string | null, slug: string | null, title: string | null, content: string | null, uri: string | null, date: string | null, modified: string | null, modifiedGmt: string | null, dateGmt: string | null, status: string | null, isPreview: boolean | null } & { ' $fragmentName'?: 'PageFragmentFragment' };

export type RootQueryToPageConnectionEdgeFragmentFragment = { __typename: 'RootQueryToPageConnectionEdge', cursor: string | null } & { ' $fragmentName'?: 'RootQueryToPageConnectionEdgeFragmentFragment' };

export type RootQueryToPageConnectionPageInfoFragmentFragment = { __typename: 'RootQueryToPageConnectionPageInfo', endCursor: string | null, startCursor: string | null, hasNextPage: boolean, hasPreviousPage: boolean } & { ' $fragmentName'?: 'RootQueryToPageConnectionPageInfoFragmentFragment' };

export type SubmissionConfirmationFieldsFragment = { __typename: 'SubmissionConfirmation', message: string | null, pageId: number | null, queryString: string | null, type: SubmissionConfirmationTypeEnum | null, url: string | null } & { ' $fragmentName'?: 'SubmissionConfirmationFieldsFragment' };

export type AboutUsPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutUsPathsQuery = { pages: { edges: Array<{ node: { uri: string | null, id: string, databaseId: number } }> } | null };

export type ConsultantPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type ConsultantPathsQuery = { pages: { edges: Array<{ node: { uri: string | null, id: string, databaseId: number } }> } | null };

export type GetChildPagesQueryVariables = Exact<{
  parent?: string | number | null | undefined;
}>;


export type GetChildPagesQuery = { pages: { edges: Array<{ cursor: string | null, node: (
        { featuredImage: (
          { node: (
            { mediaDetails: { ' $fragmentRefs'?: { 'MediaDetailsFragmentFragment': MediaDetailsFragmentFragment } } | null }
            & { ' $fragmentRefs'?: { 'MediaItemFragmentFragment': MediaItemFragmentFragment } }
          ) }
          & { ' $fragmentRefs'?: { 'NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment': NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment } }
        ) | null }
        & { ' $fragmentRefs'?: { 'PageFragmentFragment': PageFragmentFragment } }
      ) }> } | null };

export type GetPageByIdQueryVariables = Exact<{
  id: string | number;
}>;


export type GetPageByIdQuery = { page: (
    { featuredImage: (
      { node: (
        { mediaDetails: { ' $fragmentRefs'?: { 'MediaDetailsFragmentFragment': MediaDetailsFragmentFragment } } | null }
        & { ' $fragmentRefs'?: { 'MediaItemFragmentFragment': MediaItemFragmentFragment } }
      ) }
      & { ' $fragmentRefs'?: { 'NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment': NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment } }
    ) | null }
    & { ' $fragmentRefs'?: { 'PageFragmentFragment': PageFragmentFragment } }
  ) | null };

export type GetPageByIdWithChildrenQueryVariables = Exact<{
  id: string | number;
}>;


export type GetPageByIdWithChildrenQuery = { page: (
    { featuredImage: (
      { node: (
        { mediaDetails: (
          { sizes: Array<{ ' $fragmentRefs'?: { 'MediaSizeFragmentFragment': MediaSizeFragmentFragment } } | null> | null }
          & { ' $fragmentRefs'?: { 'MediaDetailsFragmentFragment': MediaDetailsFragmentFragment } }
        ) | null }
        & { ' $fragmentRefs'?: { 'MediaItemFragmentFragment': MediaItemFragmentFragment } }
      ) }
      & { ' $fragmentRefs'?: { 'NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment': NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment } }
    ) | null, children: { pageInfo: { ' $fragmentRefs'?: { 'HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragmentFragment': HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragmentFragment } }, edges: Array<(
        { node:
          | (
            { featuredImage: (
              { node: (
                { mediaDetails: (
                  { sizes: Array<{ ' $fragmentRefs'?: { 'MediaSizeFragmentFragment': MediaSizeFragmentFragment } } | null> | null }
                  & { ' $fragmentRefs'?: { 'MediaDetailsFragmentFragment': MediaDetailsFragmentFragment } }
                ) | null }
                & { ' $fragmentRefs'?: { 'MediaItemFragmentFragment': MediaItemFragmentFragment } }
              ) }
              & { ' $fragmentRefs'?: { 'NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment': NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment } }
            ) | null }
            & { ' $fragmentRefs'?: { 'PageFragmentFragment': PageFragmentFragment } }
          )
          | Record<PropertyKey, never>
         }
        & { ' $fragmentRefs'?: { 'HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragmentFragment': HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragmentFragment } }
      )> } | null }
    & { ' $fragmentRefs'?: { 'PageFragmentFragment': PageFragmentFragment } }
  ) | null };

export type GetPagesQueryVariables = Exact<{
  first: number;
  field: PostObjectsConnectionOrderbyEnum;
  order: OrderEnum;
  parentIn?: Array<string | number | null | undefined> | string | number | null | undefined;
}>;


export type GetPagesQuery = { pages: { edges: Array<{ cursor: string | null, node: (
        { featuredImage: (
          { node: (
            { mediaDetails: { ' $fragmentRefs'?: { 'MediaDetailsFragmentFragment': MediaDetailsFragmentFragment } } | null }
            & { ' $fragmentRefs'?: { 'MediaItemFragmentFragment': MediaItemFragmentFragment } }
          ) }
          & { ' $fragmentRefs'?: { 'NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment': NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment } }
        ) | null }
        & { ' $fragmentRefs'?: { 'PageFragmentFragment': PageFragmentFragment } }
      ) }> } | null };

export type PageByUriQueryVariables = Exact<{
  uri: string | number;
}>;


export type PageByUriQuery = { page: (
    { featuredImage: (
      { node: (
        { mediaDetails: (
          { sizes: Array<{ ' $fragmentRefs'?: { 'MediaSizeFragmentFragment': MediaSizeFragmentFragment } } | null> | null }
          & { ' $fragmentRefs'?: { 'MediaDetailsFragmentFragment': MediaDetailsFragmentFragment } }
        ) | null }
        & { ' $fragmentRefs'?: { 'MediaItemFragmentFragment': MediaItemFragmentFragment } }
      ) }
      & { ' $fragmentRefs'?: { 'NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment': NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment } }
    ) | null }
    & { ' $fragmentRefs'?: { 'PageFragmentFragment': PageFragmentFragment } }
  ) | null };

export const FieldErrorFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FieldErrorFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<FieldErrorFieldsFragment, unknown>;
export const FormFieldFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormFieldFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"displayOnly"}},{"kind":"Field","name":{"kind":"Name","value":"inputType"}},{"kind":"Field","name":{"kind":"Name","value":"layoutGridColumnSpan"}},{"kind":"Field","name":{"kind":"Name","value":"layoutSpacerGridColumnSpan"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"visibility"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<FormFieldFieldsFragment, unknown>;
export const GfEntryFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GfEntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GfEntry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateCreated"}},{"kind":"Field","name":{"kind":"Name","value":"userAgent"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"ip"}},{"kind":"Field","name":{"kind":"Name","value":"formId"}},{"kind":"Field","name":{"kind":"Name","value":"isSubmitted"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdById"}},{"kind":"Field","name":{"kind":"Name","value":"createdByDatabaseId"}},{"kind":"Field","name":{"kind":"Name","value":"dateCreatedGmt"}}]}}]} as unknown as DocumentNode<GfEntryFieldsFragment, unknown>;
export const GfEntryToFormFieldConnectionEdgeFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GfEntryToFormFieldConnectionEdgeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GfEntryToFormFieldConnectionEdge"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<GfEntryToFormFieldConnectionEdgeFieldsFragment, unknown>;
export const GfFormFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GfFormFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GfForm"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"dateCreated"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"nextFieldId"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<GfFormFieldsFragment, unknown>;
export const HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HierarchicalContentNodeToContentNodeChildrenConnectionEdge"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]} as unknown as DocumentNode<HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragmentFragment, unknown>;
export const HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}}]} as unknown as DocumentNode<HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragmentFragment, unknown>;
export const MediaDetailsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaDetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}}]}}]} as unknown as DocumentNode<MediaDetailsFragmentFragment, unknown>;
export const MediaItemFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<MediaItemFragmentFragment, unknown>;
export const MediaSizeFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaSizeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaSize"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]} as unknown as DocumentNode<MediaSizeFragmentFragment, unknown>;
export const NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdgeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdge"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]} as unknown as DocumentNode<NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment, unknown>;
export const PageFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedGmt"}},{"kind":"Field","name":{"kind":"Name","value":"dateGmt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isPreview"}}]}}]} as unknown as DocumentNode<PageFragmentFragment, unknown>;
export const RootQueryToPageConnectionEdgeFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RootQueryToPageConnectionEdgeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RootQueryToPageConnectionEdge"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]} as unknown as DocumentNode<RootQueryToPageConnectionEdgeFragmentFragment, unknown>;
export const RootQueryToPageConnectionPageInfoFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RootQueryToPageConnectionPageInfoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RootQueryToPageConnectionPageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}}]} as unknown as DocumentNode<RootQueryToPageConnectionPageInfoFragmentFragment, unknown>;
export const SubmissionConfirmationFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubmissionConfirmationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SubmissionConfirmation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"pageId"}},{"kind":"Field","name":{"kind":"Name","value":"queryString"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<SubmissionConfirmationFieldsFragment, unknown>;
export const AboutUsPathsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AboutUsPaths"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parent"},"value":{"kind":"StringValue","value":"cG9zdDoxNg==","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AboutUsPathsQuery, AboutUsPathsQueryVariables>;
export const ConsultantPathsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ConsultantPaths"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parent"},"value":{"kind":"StringValue","value":"cG9zdDo4Nw==","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ConsultantPathsQuery, ConsultantPathsQueryVariables>;
export const GetChildPagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChildPages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parent"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"pages"},"name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parent"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageFragment"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdgeFragment"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaItemFragment"}},{"kind":"Field","name":{"kind":"Name","value":"mediaDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaDetailsFragment"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedGmt"}},{"kind":"Field","name":{"kind":"Name","value":"dateGmt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isPreview"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdgeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdge"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaDetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}}]}}]} as unknown as DocumentNode<GetChildPagesQuery, GetChildPagesQueryVariables>;
export const GetPageByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPageById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageFragment"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdgeFragment"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaItemFragment"}},{"kind":"Field","name":{"kind":"Name","value":"mediaDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaDetailsFragment"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedGmt"}},{"kind":"Field","name":{"kind":"Name","value":"dateGmt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isPreview"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdgeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdge"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaDetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}}]}}]} as unknown as DocumentNode<GetPageByIdQuery, GetPageByIdQueryVariables>;
export const GetPageByIdWithChildrenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPageByIdWithChildren"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageFragment"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdgeFragment"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaItemFragment"}},{"kind":"Field","name":{"kind":"Name","value":"mediaDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaDetailsFragment"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaSizeFragment"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragment"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageFragment"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdgeFragment"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaItemFragment"}},{"kind":"Field","name":{"kind":"Name","value":"mediaDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaDetailsFragment"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaSizeFragment"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedGmt"}},{"kind":"Field","name":{"kind":"Name","value":"dateGmt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isPreview"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdgeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdge"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaDetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaSizeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaSize"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HierarchicalContentNodeToContentNodeChildrenConnectionEdge"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]} as unknown as DocumentNode<GetPageByIdWithChildrenQuery, GetPageByIdWithChildrenQueryVariables>;
export const GetPagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"field"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostObjectsConnectionOrderbyEnum"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderEnum"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentIn"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"pages"},"name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parentIn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentIn"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"orderby"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"field"},"value":{"kind":"Variable","name":{"kind":"Name","value":"field"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageFragment"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdgeFragment"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaItemFragment"}},{"kind":"Field","name":{"kind":"Name","value":"mediaDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaDetailsFragment"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedGmt"}},{"kind":"Field","name":{"kind":"Name","value":"dateGmt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isPreview"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdgeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdge"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaDetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}}]}}]} as unknown as DocumentNode<GetPagesQuery, GetPagesQueryVariables>;
export const PageByUriDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageByUri"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uri"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uri"}}},{"kind":"Argument","name":{"kind":"Name","value":"idType"},"value":{"kind":"EnumValue","value":"URI"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageFragment"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdgeFragment"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaItemFragment"}},{"kind":"Field","name":{"kind":"Name","value":"mediaDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaDetailsFragment"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaSizeFragment"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedGmt"}},{"kind":"Field","name":{"kind":"Name","value":"dateGmt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isPreview"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdgeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdge"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaDetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaSizeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaSize"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]} as unknown as DocumentNode<PageByUriQuery, PageByUriQueryVariables>;