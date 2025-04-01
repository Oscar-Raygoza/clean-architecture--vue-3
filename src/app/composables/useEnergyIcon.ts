export const useEnergyIcon = (energyType: string) => {
  const energyIcons = {
    Colorless: '/src/app/assets/static/energy/colorless.png',
    Darkness: '/src/app/assets/static/energy/darkness.png',
    Dragon: '/src/app/assets/static/energy/dragon.png',
    Fairy: '/src/app/assets/static/energy/fairy.png',
    Fighting: '/src/app/assets/static/energy/fighting.png',
    Fire: '/src/app/assets/static/energy/fire.png',
    Grass: '/src/app/assets/static/energy/grass.png',
    Lightning: '/src/app/assets/static/energy/lightning.png',
    Metal: '/src/app/assets/static/energy/metal.png',
    Psychic: '/src/app/assets/static/energy/psychic.png',
    Water: '/src/app/assets/static/energy/water.png',
  }

  return energyIcons[energyType as keyof typeof energyIcons] || energyIcons.Colorless
}
