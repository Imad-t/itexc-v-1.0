export const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    },
    products: [
        {
            id: 1,
            name: "Product 1",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80",
            inStock: 20,
            price: 10.99,
            rating: 4.5,
            url: "https://example.com/product1"
          },
          {
            id: 2,
            name: "Product 2",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80",
            inStock: 20,
            price: 24.99,
            rating: 3.8,
            url: "https://example.com/product2"
          },
          {
            id: 3,
            name: "Product 3",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80",
            inStock: 20,
            price: 7.99,
            rating: 4.2,
            url: "https://example.com/product3"
          },
          {
            id: 4,
            name: "Product 4",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80",
            inStock: 20,
            price: 799.99,
            rating: 4.9,
            url: "https://example.com/product4"
          },
          {
            id: 5,
            name: "Product 5",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80",
            inStock: 20,
            price: 39.99,
            rating: 4.0,
            url: "https://example.com/product5"
          },
        {
          id: 6,
          name: "Product 6",
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80",
          price: 129.99,
          rating: 4.6,
          url: "https://example.com/product6"
        },
        {
          id: 7,
          name: "Product 7",
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80",
          price: 299.99,
          rating: 3.5,
          url: "https://example.com/product7"
        },
        {
          id: 8,
          name: "Product 8",
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80",
          price: 499.99,
          rating: 4.8,
          url: "https://example.com/product8"
        }
      ]      
      ,
      orders: [
        {
          id: 3,
          date: "April 27, 2023",
          total: 64.98,
          store: {
            id: 1,
            name: "Store A",
            address: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345"
          },
          products: [
            {
              id: 1,
              name: "Product 1",
              image: "https://images.pexels.com/photos/948878/pexels-photo-948878.jpeg",
              price: 10.99,
              quantity: 2
            },
            {
              id: 3,
              name: "Product 3",
              image: "https://images.pexels.com/photos/220307/pexels-photo-220307.jpeg",
              price: 21.50,
              quantity: 1
            },
            {
              id: 4,
              name: "Product 4",
              image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg",
              price: 15.49,
              quantity: 1
            }
          ]
        },
        {
          id: 4,
          date: "April 28, 2023",
          total: 36.47,
          store: {
            id: 2,
            name: "Store B",
            address: "456 Elm St",
            city: "Anytown",
            state: "CA",
            zip: "12345"
          },
          products: [
            {
              id: 2,
              name: "Product 2",
              image: "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg",
              price: 24.99,
              quantity: 1
            },
            {
              id: 5,
              name: "Product 5",
              image: "https://images.pexels.com/photos/3767469/pexels-photo-3767469.jpeg",
              price: 11.48,
              quantity: 1
            }
          ]
        }
      ]   
  };
  