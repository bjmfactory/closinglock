import { defineStore } from 'pinia'

export const useDocumentStore = defineStore('Documents', {
  state: () => ({
    documents: [
      {
        id: 123,
        isComplete: false,
        name: 'Buyer Representation Agreement',
        viewLink: 'https://www.example.com/buyer-representation-agreement'
      },
      {
        id: 456,
        isComplete: true,
        name: 'Purchase Agreement',
        viewLink: 'https://www.example.com/purchase-agreement'
      },
      {
        id: 789,
        isComplete: false,
        name: "Seller's Property Disclosure",
        viewLink: 'https://www.example.com/sellers-property-disclosure'
      }
    ]
  }),
  actions: {
    signDocument(documentId) {
      const document = this.documents.find((document) => document.id === documentId)
      if (document) {
        document.isComplete = true
      }
    }
  }
})
