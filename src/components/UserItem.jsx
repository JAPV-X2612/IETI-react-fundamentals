function UserItem({quantityRequest, isApproved, numCredits, name, date}) {
  if (numCredits > 2) return null;

  return (
      <tr>
        <td>{numCredits}</td>
        <td>{name}</td>
        <td>{date}</td>
        <td>{quantityRequest}</td>
        <td>{isApproved ? '✔️' : '❌'}</td>
      </tr>
  );
}

export default UserItem;