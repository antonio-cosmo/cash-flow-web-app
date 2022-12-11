import { createServer, Model, Serializer } from 'miragejs'
interface ITransaction{
  id: number
  title: string
  type: 'income'| 'outcome',
  category: string,
  amount: number,
  createdAt: Date,
}
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
            type: 'income',
            category: 'Dev',
            amount: 4000,
            createdAt: new Date(),
          },
          {
            id: 2,
            title: 'Aluguel',
            type: 'outcome',
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
