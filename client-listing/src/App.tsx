import clients from "./data/clients.json"
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
function App() {

  return (
    <>

      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold">Clients List</h2>
          </div>
        </div>
        <DataTable data={clients} columns={columns} />
      </div>
    </>
  )
}

export default App
