export const environment = {
  production: true,
  featureFlags: [
    {
      key: 'environment-cool-new-feature',
      title: 'Environment Cool New Feature',
      description: 'This is loaded from the Angular environment.',
      default: false
    }
  ]
};
