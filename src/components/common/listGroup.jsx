import React from "react";

const ListGroup = (props) => {
  const { items, selectedItem, onItemSelect } = props;
  //by assigning textProperty and valueProperty we are not tightly coupled to the fakeGenreService. we can have any property from any service
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item.id}
          onClick={() => onItemSelect(item)}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
