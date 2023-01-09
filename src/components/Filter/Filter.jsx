import { nanoid } from "nanoid";
import React from "react";

export const Filter = ({ value, onChange }) => {
    const filterID = nanoid();
    return<div>
      <label htmlFor={filterID}>Find contac by name
        <input
          type="text"
          value={value}
          name="filter"
          onChange={onChange}
          id={filterID}
        />
      </label>
    </div>
}