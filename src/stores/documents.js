import { defineStore } from 'pinia'

export const useDocumentStore = defineStore('Documents', {
  state: () => ({
    documents: [
      {
        id: 123,
        isComplete: 'False',
        name: 'Buyer Representation Agreement',
        viewLink: 'https:/www.example/buyer-representation-agreement'
      },
      {
        id: 456,
        isComplete: 'True',
        name: 'Purchase Agreement',
        viewLink: 'https:/www.example/purchase-agreement'
      },
      {
        id: 789,
        isComplete: 'True',
        name: "Seller's Property Disclosure",
        viewLink: 'https:/www.example/sellers-property-disclosure'
      }
    ]
  }),
  actions: {
    signDocument(documentId) {
      const document = this.documents.find((document) => document.id === documentId)
      if (document) {
        document.isCompleted = True
      }
    }
  }
})
