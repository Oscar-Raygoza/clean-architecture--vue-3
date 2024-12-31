import 'reflect-metadata'
import { Container } from 'inversify'
import getDecorators from 'inversify-inject-decorators'

const container = new Container()

// infrastructure
import networkContainer from '@/infrastructure/network/di/network.container'
import persistenceContainer from '@/infrastructure/persistence/di/persistence.container'
import themeContainer from '@/infrastructure/theme/di/theme.container'

// domain
import cardsContainer from '@/infrastructure/card/di/card.container'

container.load(...[networkContainer, persistenceContainer, cardsContainer, themeContainer])

const { lazyInject } = getDecorators(container)
export { lazyInject, container }
