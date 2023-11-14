import { useDispatch, useSelector } from "react-redux";
import { addCusomerAction, removeCusomerAction } from "./store/customCashReducer";
import { fetchCustomers } from "./store/asynkAction/customers";


function App() {
  const dispath = useDispatch();
  const customer = useSelector(state => state.customer.customers);
  const cash = useSelector(state => state.cash.cash);

  const addCash = (cash) => { dispath({ type: "ADD_CASH", payload: cash }) }
  const getCash = (cash) => { dispath({ type: "GET_CASH", payload: cash }) }

  const addCustomer = (name) => {
    const custom = {
      name,
      id: Date.now(),
    }
    dispath(addCusomerAction(custom))

  }
  const removeCustomer = (item) => {
    dispath(removeCusomerAction(item.id))
  }

  return (
    <div className="App">
      <div>
        {cash}
      </div>
      <button onClick={() => addCash(5)}>додати</button>
      <button onClick={() => getCash(3)}>зняти</button>
      {customer.length > 0 ?
        <ul>
          {customer.map((customerItem) =>
            <li key={customerItem.id}
              onClick={() => removeCustomer(customerItem)}>
              {customerItem.name}
            </li>

          )}
        </ul>
        :
        <p style={{ fontSize: "2rem" }}>клієнти пусті</p>
      }
      <button onClick={() => addCustomer(prompt())}>додати клієнта</button>
      <button onClick={() => dispath(fetchCustomers())}>додатів клієнта з бази</button>
    </div>
  );
}

export default App;
