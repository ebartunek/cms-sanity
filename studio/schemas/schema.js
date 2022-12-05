
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import faq from './documents/faq'
import dashboard from './documents/dashboard'

// Objects
import content from './objects/content'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    faq,
    dashboard,
    content
  ]),
})
