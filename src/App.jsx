import { creditRequests } from './data';
import UserItem from './components/UserItem';

export function App() {
  return (
      <>
        <h1>Creditos solicitados</h1>
        <table>
          <thead>
          <tr>
            <th>número de créditos</th>
            <th>nombre</th>
            <th>fecha</th>
            <th>cantidad solicitada</th>
            <th>aprobado</th>
          </tr>
          </thead>
          <tbody>
          {creditRequests.map((request) => (
              <UserItem key={request.name} {...request} />
          ))}
          </tbody>
        </table>
      </>
  );
}