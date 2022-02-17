import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
 
  useEffect(() => {
    (async ()=>{
      const res = await api.get('transactions')
      const result = res.data
      console.log(result)
    })();
  }, [])
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de web site</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>17/12/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de web site</td>
            <td className="deposit">R$ 7.000</td>
            <td>Desenvolvimento</td>
            <td>15/12/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de web site</td>
            <td className="withdraw">R$ -1.000</td>
            <td>Desenvolvimento</td>
            <td>17/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}