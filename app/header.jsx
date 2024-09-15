import {data} from "./data"

console.log(data);

const Header = () => {
  return <div>
        {data.map((data, key)=> (
        <li key={key}>
        {data.name}<br/>
        {data.username}<br/>
        {data.email}<br/>
        {data.phone}<br/>
     </li>
     ))}
    </div>;
}

export default Header