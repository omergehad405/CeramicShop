import { createContext, useState } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Ceramic Bottles",
      mainImage: "./shop/product-09-300x300.jpg",
      subImages: ["./shop/product-10-100x100.jpg"],
      quantity: 1,
      priceAfterSale: 249.0,
    },
    {
      id: 2,
      name: "Ceramic Cup",
      mainImage: "./shop/ceramic-cup-01-300x300.jpg",
      subImages: [
        "./shop/ceramic-cup-04-100x100.jpg",
        "./shop/ceramic-cup-03-100x100.jpg",
      ],
      quantity: 1,
      priceAfterSale: 189.0,
      priceBeforeSale: 237.0,
    },
    {
      id: 3,
      name: "Ceramic Drink Coasters",
      mainImage: "./shop/product-03-300x300.jpg",
      subImages: ["./shop/product-11-100x100.jpg"],
      quantity: 1,
      priceAfterSale: 99.0,
      priceBeforeSale: 157.0,
    },
    {
      id: 4,
      name: "Ceramic Garden Pots",
      mainImage: "./shop/product-08-300x300.jpg",
      subImages: ["./shop/product-14-100x100.jpg"],
      quantity: 1,
      priceAfterSale: 159.0,
      priceBeforeSale: 179.0,
    },
    {
      id: 5,
      name: "Ceramic Pastel Plates",
      mainImage: "./shop/product-06-300x300.jpg",
      subImages: ["./shop/product-16-100x100.jpg"],
      quantity: 1,
      priceAfterSale: 209.0,
      priceBeforeSale: 239.0,
    },
    {
      id: 6,
      name: "Ceramic Plant Pots",
      mainImage: "./shop/product-05-300x300.jpg",
      subImages: ["./shop/product-15-100x100.jpg"],
      quantity: 1,
      priceAfterSale: 139.0,
    },
    {
      id: 7,
      name: "Ceramic Planter",
      mainImage: "./shop/ceramic-planter-01-300x300.jpg",
      subImages: [
        "./shop/ceramic-planter-03-100x100.jpg",
        "./shop/ceramic-planter-02-100x100.jpg",
      ],
      quantity: 1,
      priceAfterSale: 299.0,
      priceBeforeSale: 349.0,
    },
    {
      id: 8,
      name: "Ceramic Plate",
      mainImage: "./shop/product-01-300x300.jpg",
      subImages: ["./shop/product-13-100x100.jpg"],
      quantity: 1,
      priceAfterSale: 119.0,
      priceBeforeSale: 179.0,
    },
    {
      id: 9,
      name: "Ceramic Plates and Bowls",
      mainImage: "./shop/product-02-300x300.jpg",
      subImages: ["./shop/product-12-100x100.jpg"],
      quantity: 1,
      priceAfterSale: 209.0,
      priceBeforeSale: 249.0,
    },
    {
      id: 10,
      name: "Ceramic Plates and Spoons",
      mainImage: "./shop/product-07-300x300.jpg",
      subImages: ["./shop/product-17.jpg"],
      quantity: 1,
      priceAfterSale: 299.0,
      priceBeforeSale: 349.0,
    },
    {
      id: 11,
      name: "Ceramic Vases and Planters",
      mainImage: "./shop/product-02-300x300.jpg",
      subImages: ["./shop/product-18-100x100.jpg"],
      quantity: 1,
      priceAfterSale: 217.0,
      priceBeforeSale: 247.0,
    },
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeProduct = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  function increaseQuantity(productId) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(productId) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext };
export default ProductsProvider;
