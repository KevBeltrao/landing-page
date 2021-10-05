const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#020154',
              '@link-color': '#cd428d',
              '@success-color': '#52c41a',
              '@warning-color': '#faad14',
              '@error-color': '#cd428d',
              '@font-size-base': '16px',
              '@heading-color': 'rgba(0, 0, 0, 0.85)',
              '@text-color': '#fefefe',
              '@text-color-secondary': 'rgba(0, 0, 0, 0.45)',
              '@disabled-color': 'rgba(0, 0, 0, 0.25)',
              '@border-radius-base': '10px',
              '@border-color-base': '#707070',
              '@box-shadow-base': '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
