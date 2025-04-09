import fs from 'fs';
import path from 'path';
import config from '../../config.js';

const overridesPath = path.join('src', 'components', 'Overrides.js');

// Function to parse config.js and generate Overrides.tsx
function generateOverrides() {
  const partials = config.partials;

  // Prepare to write the Overrides.tsx content
  let overridesContent = `import React from 'react';\n`;

  Object.entries(partials).forEach(([componentName, filePath]) => {
    const resolvedFilePath = path.resolve(filePath);

    // Check if the file exists
    if (fs.existsSync(resolvedFilePath)) {
      const importName = `${componentName}Partial`;
      overridesContent += `import ${importName} from '@site/${filePath}';\n\n`;
      overridesContent += `export function ${componentName}() {\n`;
      overridesContent += `  return <${importName} />;\n`;
      overridesContent += `}\n\n`;
    } else {
      console.warn(`File not found: ${resolvedFilePath}`);
    }
  });

  // Write the Overrides.tsx file
  fs.writeFileSync(overridesPath, overridesContent, 'utf8');
  console.log('Overrides.js has been generated successfully.');
}

// Run the function
generateOverrides();