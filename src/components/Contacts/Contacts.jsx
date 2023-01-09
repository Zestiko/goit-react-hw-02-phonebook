import React from "react";
import Proptypes from "prop-types"
export const Contacts = ({ contacts }) => {
    return <div>
        <ul>
          {contacts.map(({ name, id, number, onDelete }) => {
              return <li key={id}>{name}: {number}
                <button key={id} type="button" onClick={()=>onDelete(id)}> delete</button>
                </li>
            })}
      </ul>
    </div>
      
    
};
