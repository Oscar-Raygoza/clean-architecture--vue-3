import 'reflect-metadata'
import { Container } from 'inversify'
import getDecorators from 'inversify-inject-decorators'

const container = new Container()

// infrastructure
import networkContainer from '@/modules/network/network.container'

// domain
import cardsContainer from '@/modules/card/card.container'

container.load(...[networkContainer, cardsContainer])

const { lazyInject } = getDecorators(container)
export { lazyInject, container }
