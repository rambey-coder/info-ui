import "./App.css";

function App() {
  return (
    <>
      <nav className="bg-gray-200">
        <div className="flex item-center flex-col md:flex-row gap-7 justify-between py-8 container w-[95%] m-auto">
          <h1 className="text-3xl font-bold">Catalog Task</h1>
          <ul className="flex items-center gap-3 flex-wrap">
            <li>
              <button>Discuss</button>
            </li>
            <li>
              <button>Follow</button>
            </li>
            <li>
              <button>Save</button>
            </li>
            <li>
              <button>Update</button>
            </li>
            <li>
              <button>Close</button>
            </li>
            <li>
              <button>Up</button>
            </li>
            <li>
              <button>List</button>
            </li>
          </ul>
        </div>
      </nav>

      <hr />

      <section>
        <div className="container  w-[95%] m-auto">
          <form action="">
            <div className="mt-8 md:w-[60%] w-full mx-auto grid grid-cols-1 gap-3 md:grid-cols-6">
              <div className="col-span-3">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Number
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="number"
                    id="number"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#4361ee] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-3">
                <label
                  htmlFor="request_item"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Request Item
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="request_item"
                    id="request_item"
                    className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#4361ee] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-3">
                <label
                  htmlFor="requested_for"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Requested For
                </label>
                <div className="mt-2">
                  <input
                    id="requested_for"
                    name="requested_for"
                    type="text"
                    autoComplete="requested_for"
                    className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#4361ee] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-3">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  State
                </label>
                <div className="mt-2">
                  <select
                    name=""
                    id=""
                    className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-[#4361ee]  sm:text-sm sm:leading-6">
                    <option value="">Choose State</option>
                  </select>
                </div>
              </div>

              <div className="col-span-3">
                <label
                  htmlFor="configuration_item"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Configuration Item
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="configuration_item"
                    id="configuration_item"
                    className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#4361ee] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-3">
                <label
                  htmlFor="priority"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Priority
                </label>
                <div className="mt-2">
                  <select
                    name=""
                    id=""
                    className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-[#4361ee]  sm:text-sm sm:leading-6">
                    <option value="">Choose Priority</option>
                  </select>
                </div>
              </div>

              <div className="col-span-2 sm:col-start-1">
                <label
                  htmlFor="assignment_group"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Assignment Group
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="assignment_group"
                    id="assignment_group"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#4361ee] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="assign_to"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Assign To
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="assign_to"
                    id="assign_to"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#4361ee] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Watch List
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="watch_list"
                    id="watch_list"
                    autoComplete="watch_list"
                    className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#4361ee] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#4361ee]  sm:text-sm sm:leading-6"></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
