// Utilitaires pour les animations 3D

export const playAnimation = (actions, animationName, options = {}) => {
  const {
    loop = true,
    clampWhenFinished = false,
    crossFadeDuration = 0.3
  } = options;

  const action = actions[animationName];
  if (!action) {
    console.warn(`Animation "${animationName}" not found`);
    return null;
  }

  Object.values(actions).forEach(otherAction => {
    if (otherAction !== action && otherAction.isRunning()) {
      otherAction.fadeOut(crossFadeDuration);
    }
  });

  action.reset();
  action.setLoop(loop ? 2201 : 2200); 
  action.clampWhenFinished = clampWhenFinished;
  action.fadeIn(crossFadeDuration);
  action.play();

  return action;
};

export const stopAnimation = (actions, animationName, fadeOutDuration = 0.3) => {
  const action = actions[animationName];
  if (!action) {
    console.warn(`Animation "${animationName}" not found`);
    return;
  }

  action.fadeOut(fadeOutDuration);
};

export const stopAllAnimations = (actions, fadeOutDuration = 0.3) => {
  Object.values(actions).forEach(action => {
    if (action.isRunning()) {
      action.fadeOut(fadeOutDuration);
    }
  });
};

export const getAnimationNames = (animations) => {
  return animations ? animations.map(clip => clip.name) : [];
};
