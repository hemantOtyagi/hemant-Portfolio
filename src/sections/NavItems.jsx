import { navLinks } from '../sections/constants/index.js'

export const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({id , href , name}) => (
        <li className="nav-li" key={id}>
          <a href={href} className="nav-li_a" onClick={() => {}}>{name}</a>
        </li> 
      ))}
    </ul>   
  )
}

