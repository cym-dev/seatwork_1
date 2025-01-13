import React from "react";

export default function Modal({
  toggle,
  setToggle,
  handleSubmit,
  form,
  setForm,
}) {
  return (
    <>
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          toggle ? "" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-[50%] left-[50%] transform translate-x-[30%] translate-y-[20%]  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {form.id > 0 ? "Edit" : "Create"} Item
              </h3>
              <button
                onClick={() => setToggle(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal">
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-4 md:p-5 space-y-4">
                <div>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-5">
                    <div>
                      <label htmlFor="hour">Hour</label>
                      <input
                        type="number"
                        id="hour"
                        name="hour"
                        value={form.duration.hour}
                        onChange={e =>
                          setForm({
                            ...form,
                            duration: {
                              ...form.duration,
                              hour: e.target.value,
                            },
                          })
                        }
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="minute">Minute</label>
                      <input
                        type="number"
                        id="minute"
                        name="minute"
                        value={form.duration.minute}
                        onChange={e =>
                          setForm({
                            ...form,
                            duration: {
                              ...form.duration,
                              minute: e.target.value,
                            },
                          })
                        }
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="second">Second</label>
                      <input
                        type="number"
                        id="second"
                        name="second"
                        value={form.duration.second}
                        onChange={e =>
                          setForm({
                            ...form,
                            duration: {
                              ...form.duration,
                              second: e.target.value,
                            },
                          })
                        }
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="default-modal"
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  {form.id > 0 ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
