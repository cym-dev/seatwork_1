import React, { useState } from "react";
import Modal from "./modal";

export default function List({ handleConvertToTime, setTimer }) {
  const [items, setItems] = useState([
      {
        id: 1,
        name: "Toothbrush",
        duration: {
          hour: 0,
          minute: 2,
          second: 0,
        },
        deleted: false,
      },
      {
        id: 2,
        name: "face mask",
        duration: {
          hour: 0,
          minute: 15,
          second: 30,
        },
        deleted: false,
      },
    ]),
    [form, setForm] = useState({
      id: 0,
      name: "",
      duration: {
        hour: 0,
        minute: 0,
        second: 0,
      },
      deleted: false,
    }),
    [toggle, setToggle] = useState(false);

  const handleStore = () => {
    const _form = { ...form, id: items.length + 1 };
    setItems([...items, _form]);
    setForm({ id: 0, name: "", duration: { hour: 0, minute: 0, second: 0 } });
    setToggle(false);
  };
  const handleDelete = _id => {
    const response = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (response) {
      setItems(
        items.map(item => (item.id === _id ? { ...item, deleted: true } : item))
      );
    }
  };

  const handleEdit = _id => {
    const item = items.find(({ id }) => id === _id);
    setForm(item);
    setToggle(true);
  };

  const handleUpdate = () => {
    const _items = items.map(item =>
      item.id === form.id ? { ...form } : item
    );
    setItems(_items);
    setForm({ id: 0, name: "", duration: { hour: 0, minute: 0, second: 0 } });
    setToggle(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.id > 0) {
      handleUpdate();
    } else {
      handleStore();
    }
  };
  const handleCreate = () => {
    setForm({
      id: 0,
      name: "",
      duration: { hour: 0, minute: 0, second: 0 },
    });
    setToggle(true);
  };

  return (
    <div className=" row-span-3 col-span-1 max-w-sm h-fit p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <button
        onClick={handleCreate}
        className="px-6 mb-2 w-full self-end  bg-green-500 text-xl rounded-full">
        +
      </button>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Duration</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {items
            .filter(e => e.deleted !== true)
            .map((item, index) => (
              <tr key={index}>
                <td
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => setTimer(item.duration)}>
                  {item.name}
                </td>
                <td
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => setTimer(item.duration)}>
                  {handleConvertToTime(item.duration)}
                </td>
                <td>
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="text-blue-200 mx-2">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-400">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Modal
        toggle={toggle}
        form={form}
        setForm={setForm}
        setToggle={setToggle}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
