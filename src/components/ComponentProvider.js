import * as Placeholders from './PlaceHolderComponents.js';
import * as CustomComponents from './Overrides.js';

const components = {};

// Iterate over each export in the placeholders module
Object.keys(Placeholders).forEach((componentName) => {
  // Check if the corresponding component exists in CustomComponents
  // If it exists, prefer the custom version, otherwise use the placeholder version
  components[componentName] = CustomComponents[componentName] || Placeholders[componentName];
});

export default components;