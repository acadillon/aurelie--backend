import type { Schema, Struct } from '@strapi/strapi';

export interface MediaSlideLandscape extends Struct.ComponentSchema {
  collectionName: 'components_media_slide_landscapes';
  info: {
    displayName: 'SlideLandscape';
  };
  attributes: {
    background: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    title: Schema.Attribute.String & Schema.Attribute.Private;
  };
}

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
      'media.slide-landscape': MediaSlideLandscape;
      'text.group-field': TextGroupField;
    }
  }
}
