import 'reflect-metadata'
import { Container } from 'inversify'
import getDecorators from 'inversify-inject-decorators'

const container = new Container()

// domain
import cardsContainer from '@/infrastructure/card/di/card.container'

// infrastructure
import graphqlContainer from '@/infrastructure/graphql/di/graphql.container'
import langContainer from '@/infrastructure/lang/di/lang.container'
import networkContainer from '@/infrastructure/network/di/network.container'
import persistenceContainer from '@/infrastructure/persistence/di/persistence.container'
import themeContainer from '@/infrastructure/theme/di/theme.container'

container.load(
  ...[
    cardsContainer,
    graphqlContainer,
    langContainer,
    networkContainer,
    persistenceContainer,
    themeContainer,
  ],
)

const { lazyInject } = getDecorators(container)
export { lazyInject, container }
