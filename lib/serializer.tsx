import React from 'react'
import {PortableTextComponents} from '@portabletext/react'

import { Blockquote, Text, Title, List } from '@mantine/core'
import { ListItem } from '@mantine/core/lib/List/ListItem/ListItem'

export const components: PortableTextComponents = {

  marks: {
    link: ({children, value}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
  },
    block: {
      normal: ({children}) => <Text fz="md">{children}</Text>,
      h1: ({children}) => <Title my="sm" order={1}>{children}</Title>,
      h2: ({children}) => <Title my="sm" order={2}>{children}</Title>,
      h3: ({children}) => <Title my="sm" order={3}>{children}</Title>,
      h4: ({children}) => <Title my="sm" order={4}>{children}</Title>,
      h5: ({children}) => <Title my="sm" order={5}>{children}</Title>,
      h6: ({children}) => <Title my="sm" order={6}>{children}</Title>,
      blockquote: ({children}) => <Blockquote>{children}</Blockquote>,
    },
    list: {
      bullet: ({children}) => <List m="sm">{children}</List>,
      number: ({children}) => <List m="sm" type='ordered'>{children}</List>,
    },
  }
  