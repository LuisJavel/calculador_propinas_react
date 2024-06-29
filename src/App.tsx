import MenuItems from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {

  const {order, addItem} = useOrder()

  return (
    <div>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadaro de propinas
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 ">
        <div className="p-5">
          <h2 className="text-3xl font-bold">Menu</h2>
          <div className="space-y-3 mt-3">
            {menuItems.map((item) => (
              <MenuItems 
                key={item.id} 
                item={item}
                addItem={addItem}/>
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-400 p-5 rounded-lg space-y-10">
          <OrderContents order={order} />
        </div>
      </main>
    </div>
  );
}

export default App;
