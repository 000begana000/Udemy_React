import { uiActions } from "./ui-slice";

export const sendCartData = (cart) => {
  // return another (async) function, with dispatch argument
  return async (dispatch) => {
    // display "sending" message
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    // create sendRequest async function to catch all kind of errors
    const sendRequest = async () => {
      const response = await fetch(
        "https://dummy-59bc5-default-rtdb.firebaseio.com/cart.json",
        {
          // PUT method will overwrite cart data with new cart data
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();

      // when the fetching is successful, display "success" message
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      // when there is error, display "error" message
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
