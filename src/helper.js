const saveCurrentData = (data, stepArg, savedData) => {
  const increaseStep = stepArg + 1;
  const savedWidgetsArray = [...savedData, data];
  return {
    widgetArray: savedWidgetsArray,
    step: increaseStep,
  };
};

export const getCurrentHighestPriority = (config, stepArg, savedData) => {
  const data = config.find((wid) => {
    if (stepArg === wid.priority) {
      return true;
    }
  });
  const dataStep = saveCurrentData(data, stepArg, savedData);

  return dataStep;
};
