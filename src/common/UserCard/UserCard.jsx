import "./UserCard.css";

export const UserCard = ({ id, name, surnames, dni, email, phone }) => {
  return (
    <div className="cardDesign">
      <div>User id number: {id}</div>
      <div>Surnames: {surnames}</div>
      <div>Name: {name}</div>
      <div>DNI number: {dni}</div>
      <div>E-mail: {email}</div>
      <div>Phone number: {phone}</div>
    </div>
  );
};
