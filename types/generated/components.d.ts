import type { Schema, Struct } from '@strapi/strapi';

export interface MediasImage extends Struct.ComponentSchema {
  collectionName: 'components_medias_images';
  info: {
    description: '';
    displayName: 'Image';
  };
  attributes: {
    Copyright: Schema.Attribute.String;
    Recto: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Verso: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MediasTestlandscape extends Struct.ComponentSchema {
  collectionName: 'components_medias_testlandscapes';
  info: {
    displayName: 'testlandscape';
    icon: 'file';
  };
  attributes: {
    testBackground: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    testImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MediasTesttestLandscape extends Struct.ComponentSchema {
  collectionName: 'components_medias_testtest_landscapes';
  info: {
    displayName: 'testtestLandscape';
    icon: 'file';
  };
  attributes: {
    testBackground: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    testImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface TextGroupField extends Struct.ComponentSchema {
  collectionName: 'components_text_group_fields';
  info: {
    displayName: 'GroupField';
  };
  attributes: {
    Content: Schema.Attribute.String;
    Label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'medias.image': MediasImage;
      'medias.testlandscape': MediasTestlandscape;
      'medias.testtest-landscape': MediasTesttestLandscape;
      'text.group-field': TextGroupField;
    }
  }
}
