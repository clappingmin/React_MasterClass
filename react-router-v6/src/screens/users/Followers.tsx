import { useOutletContext } from 'react-router-dom';

interface IFollwersContext {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollwersContext>();
  return <h1>Here aer {nameOfMyUser}의 followers</h1>;
}

export default Followers;
