import { Container } from "./styles";

import { coinConverter } from "../../utils/currencyConverter";
import { useTransactionContext } from "../../hooks/useTransactionContext";

export function TransactionsTable() {
  const { transactions } = useTransactionContext();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td className={item.type}>{coinConverter(item.amount)}</td>
              <td>{item.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(item.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
