import Global from "../../Globalstate/Globalstate";

function State() {
  return (
    <Provider store={store}>
      <Global />
    </Provider>
  );
}
export default State;