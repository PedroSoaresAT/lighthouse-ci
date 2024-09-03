import { shallowMount } from '@vue/test-utils'
import { Logo } from '#components'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Logo, {
      props: {
        width: 200
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
