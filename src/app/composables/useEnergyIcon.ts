import Colorless from '@/app/assets/static/energy/colorless.png'
import Darkness from '@/app/assets/static/energy/darkness.png'
import Dragon from '@/app/assets/static/energy/dragon.png'
import Fairy from '@/app/assets/static/energy/fairy.png'
import Fighting from '@/app/assets/static/energy/fighting.png'
import Fire from '@/app/assets/static/energy/fire.png'
import Grass from '@/app/assets/static/energy/grass.png'
import Lightning from '@/app/assets/static/energy/lightning.png'
import Metal from '@/app/assets/static/energy/metal.png'
import Psychic from '@/app/assets/static/energy/psychic.png'
import Water from '@/app/assets/static/energy/water.png'

export const useEnergyIcon = (energyType: string) => {
  const energyIcons = {
    Colorless,
    Darkness,
    Dragon,
    Fairy,
    Fighting,
    Fire,
    Grass,
    Lightning,
    Metal,
    Psychic,
    Water,
  }

  return energyIcons[energyType as keyof typeof energyIcons] || energyIcons.Colorless
}
