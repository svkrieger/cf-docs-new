import React from 'react';
import config from '@site/config';

const ConditionalContent = ({ configKey, valuesMap }) => {

  const configValue = config[configKey];

  // If the config value is not in the valuesMap, render a default content
  const content = valuesMap[configValue] || valuesMap['else'];

  return <p>{content}</p>;
};

export default ConditionalContent;