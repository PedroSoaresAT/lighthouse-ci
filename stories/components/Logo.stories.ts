import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import { Logo } from '#components'

export default {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs']
} satisfies Meta<typeof Logo>

type Story = StoryObj<typeof Logo>

export const Default: Story = {
  args: {
    width: 200
  }
}
