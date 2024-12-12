import OrderContents from "./components/OrderContents";
import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"  //estado global 

function App() {

  const { addItem, order, removeItem } = useOrder();

  return (
    <>
      <header className="bg-gray-300 py-5">
        <h1 className="text-center text-4xl font-black">Tips and Consumption Calculator</h1>
      </header>

      <main className="max-w-7xl mx-auto py-5 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="font-black text-center">Menu</h2>
          <div className="space-y-3 mt-5">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              >

              </MenuItem>
            ))}
          </div>

        </div>
        <div className="p-5">
          <h2 className="font-black text-center">Menu</h2>
          <div className="space-y-3 mt-5">
          <OrderContents
          order={order}
          removeItem={removeItem}
          >
          </OrderContents>
          </div>
        </div>
      </main>

    </>
  )
}

export default App
