import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'medias.testlandscape': MediasTestlandscape;
      'medias.testtest-landscape': MediasTesttestLandscape;
    }
  }
}
