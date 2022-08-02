import { createServer, Model } from 'miragejs'

export function mockApi() {
  createServer({
    models: {
      transaction: Model,
    },
    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Freelance de website',
            type: 'deposit',
            category: 'Dev',
            amount: 4000,
            createdAt: new Date(),
          },
          {
            id: 2,
            title: 'Alugel',
            type: 'withdraw',
            category: 'Casa',
            amount: 400,
            createdAt: new Date(),
          },
        ],
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/transactions', () => {
        return this.schema.all('transaction')
      })

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)
        return schema.create('transaction', data)
      })

      this.delete('/transactions/:id', (schema, request) => {
        const id = request.params.id
        const transaction = schema.find('transaction', id)
        if (transaction) {
          transaction.destroy()
        }
        return transaction
      })
    },
  })
}
