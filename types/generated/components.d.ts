import type { Schema, Struct } from '@strapi/strapi';

export interface TextGroupField extends Struct.ComponentSchema {
  collectionName: 'components_text_group_fields';
  info: {
    description: '';
    displayName: 'GroupField';
  };
  attributes: {
    content: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'text.group-field': TextGroupField;
    }
  }
}
