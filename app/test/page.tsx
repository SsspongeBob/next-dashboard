'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import {
  Blockquote,
  Box, Button,
  Card, Checkbox,
  CheckboxCards,
  CheckboxGroup,
  Container,
  ContextMenu,
  Flex,
  Grid,
  HoverCard,
  IconButton,
  Inset,
  Reset,
  Strong,
  Text
} from '@radix-ui/themes'
import React from 'react'

const Page = () => {
  return (
    <>
      {/* <Reset> */}
      <code color='red'>
        {JSON.stringify({
          hello: "World"
        })}
      </code>
      {/* </Reset> */}
    </>
  )
}

export default Page