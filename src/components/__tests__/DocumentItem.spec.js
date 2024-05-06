import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import DocumentItem from '../DocumentItem.vue'
import { describe, expect, test, vi } from 'vitest'
import { useDocumentStore } from '@/stores/documents'

describe('DocumentItem component', () => {
  test('triggers a signDocument pinia action when the Sign Document button is clicked', () => {
    const wrapper = mount(DocumentItem, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn
          })
        ]
      },
      props: {
        document: {
          id: 123,
          isComplete: false,
          name: 'Buyer Representation Agreement',
          viewLink: 'https://www.example.com/buyer-representation-agreement'
        }
      }
    })
    const store = useDocumentStore()

    const signButton = wrapper.find('button.text-white')
    expect(wrapper.find('button').text()).toBe('Sign Document')
    expect(store.signDocument).toHaveBeenCalledTimes(0)
    signButton.trigger('click')
    expect(store.signDocument).toHaveBeenCalledTimes(1)
  })
})
