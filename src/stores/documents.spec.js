// // stores/counter.spec.ts
// import { setActivePinia, createPinia, storeToRefs } from 'pinia'
// import { useDocumentStore } from './documents'
// import { describe, expect, it, beforeEach } from 'vitest'

// describe('Document Store', () => {
//   beforeEach(() => {
//     // creates a fresh pinia and makes it active
//     // so it's automatically picked up by any useStore() call
//     // without having to pass it to it: `useStore(pinia)`
//     setActivePinia(createPinia())
//   })

//   it('marks a document as complete when it is signed', () => {
//     const store = useDocumentStore()
//     const { documents } = storeToRefs(store)
//     console.log(documents)
//     expect(documents[0].isComplete).toBe(false)
//     documents.signDocument(123)
//     expect(documents[0].isComplete).toBe(true)
//   })
// })
