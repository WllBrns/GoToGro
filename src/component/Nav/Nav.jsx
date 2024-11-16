import "./Nav.css"

import { FaCashRegister } from "react-icons/fa";
import { MdPersonAddAlt1 } from "react-icons/md";
import { MdPersonSearch } from "react-icons/md";
import { RiFileList3Fill } from "react-icons/ri";


export const Nav  = ({className}) => {
  return (
    <nav className={className}>
      <ul>
        <li>
          <a href=""><FaCashRegister className="icon" />Add Order</a>
        </li>

        <li>
          <a href=""><MdPersonAddAlt1 className="icon" />Add Member</a>
        </li>

        <li>
          <a href=""><MdPersonSearch className="icon" />Member Info</a>
        </li>

        <li>
          <a href=""><RiFileList3Fill className="icon" />Sales Report</a>
        </li>
      </ul>
    </nav>
  );
}