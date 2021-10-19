import React from "react";

function Cart({ cartItems, removeFromCart }) {
  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="cart cart-header"> Cart items is empty</div>
      ) : (
        <div className="cart cart-header">
          {" "}
          You have {cartItems.length}in the cart
        </div>
      )}
      <div className="cart">
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item._id}>
              <div>
                <img src={item.image} alt={item.title}></img>
              </div>
              <div>
                <div>{item.title}</div>
                <div className="right">
                  {item.price} x {item.count}{" "}
                  <button
                    className="button"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart">
        <div className="total">
          <div>
            Total : {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
          </div>
          <button className="button primary"> Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
