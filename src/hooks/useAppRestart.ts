interface IUseAppRestart {
  rebuildAppState: () => void;
}

export const useAppRestart = (): IUseAppRestart => {
  const rebuildAppState = () => {
   // TODO: reset app state and initial store structure
  };

  return {
    rebuildAppState,
  };
};
