window.modAPI.hooks.onDeriveRecipeDifficulty((recipe, recipeStats, gameFlags) => {

  // Create Variable to hold Stability Bonus
  let stabilityBonus = 0;

  // Get Player Control and Intensity

    const playerControl = gameFlags.control
    const playerIntensity = gameFlags.intensity

  // For both, if above 100, get 10% of the value and flatten to nearest whole number

  if (playerControl > 100) {
    stabilityBonus += Math.floor(playerControl * 0.01);
  }

  if (playerIntensity > 100) {
    stabilityBonus += Math.floor(playerIntensity * 0.01);
  }

  // If Stability Bonus is above 99, cap it at 99

  if (stabilityBonus > 99) {
    stabilityBonus = 99;
  }

  // Divide Stability Bonus by 100 to get a multiplier between 1 and 1.99

    stabilityBonus = 1 + (stabilityBonus / 100);

  // Increase stability based on calculated multiplier

    recipeStats.stability *= stabilityBonus;

    recipeStats.stability = Math.floor(recipeStats.stability);

  return recipeStats;

});