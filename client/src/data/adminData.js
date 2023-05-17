export const usersData = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      phoneNumber: '+1-408-555-1234',
      address: '123 Main St, San Francisco, CA 12345',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'janesmith@yahoo.com',
      phoneNumber: '+1-415-555-5678',
      address: '456 Oak St, New York, NY 67890',
      avatar: 'https://example.com/avatar/janesmith.jpg'
    },
    {
      firstName: 'Michael',
      lastName: 'Johnson',
      email: 'michaeljohnson@hotmail.com',
      phoneNumber: '+1-510-555-9876',
      address: '789 Maple Ave, Los Angeles, CA 45678',
      avatar: 'https://example.com/avatar/michaeljohnson.jpg'
    },
    {
      firstName: 'Emily',
      lastName: 'Lee',
      email: 'emilylee@outlook.com',
      phoneNumber: '+1-650-555-2345',
      address: '234 Pine St, Chicago, IL 56789',
      avatar: 'https://example.com/avatar/emilylee.jpg'
    },
    {
      firstName: 'David',
      lastName: 'Jones',
      email: 'davidjones@gmail.com',
      phoneNumber: '+1-707-555-8765',
      address: '567 Cedar Dr, Houston, TX 34567',
      avatar: 'https://example.com/avatar/davidjones.jpg'
    }
  ];
  
  console.log(usersData);
  
  export const storeData = [
    {
      storeName: 'Funky Fashions',
      address: '123 Main St, San Francisco, CA 94110',
      phoneNumber: '+1-415-555-1234',
      email: 'info@funkyfashions.com',
      products: [
        {
          id: 1,
          name: 'Product 1',
          description: 'This is product 1',
          price: 19.99,
          category: 'Clothing',
          availableQuantity: 50
        },
        {
          id: 2,
          name: 'Product 2',
          description: 'This is product 2',
          price: 49.99,
          category: 'Shoes',
          availableQuantity: 25
        },
        {
          id: 3,
          name: 'Product 3',
          description: 'This is product 3',
          price: 9.99,
          category: 'Accessories',
          availableQuantity: 100
        }
      ],
      orders: [
        {
          id: 1,
          customerId: 1,
          products: [
            {
              id: 1,
              quantity: 2
            },
            {
              id: 2,
              quantity: 1
            }
          ],
          total: 89.97
        },
        {
          id: 2,
          customerId: 2,
          products: [
            {
              id: 3,
              quantity: 5
            }
          ],
          total: 49.95
        }
      ]
    },
    {
      storeName: 'Grocery Galore',
      address: '456 Oak St, New York, NY 67890',
      phoneNumber: '+1-415-555-5678',
      email: 'info@grocerygalore.com',
      products: [
        {
          id: 1,
          name: 'Milk',
          description: 'Fresh whole milk',
          price: 3.99,
          category: 'Dairy',
          availableQuantity: 100
        },
        {
          id: 2,
          name: 'Bread',
          description: 'Whole wheat bread',
          price: 2.99,
          category: 'Bakery',
          availableQuantity: 75
        },
        {
          id: 3,
          name: 'Bananas',
          description: 'Fresh bananas',
          price: 0.79,
          category: 'Produce',
          availableQuantity: 200
        }
      ],
      orders: [
        {
          id: 1,
          customerId: 1,
          products: [
            {
              id: 1,
              quantity: 3
            },
            {
              id: 2,
              quantity: 2
            },
            {
              id: 3,
              quantity: 1
            }
          ],
          total: 16.54
        },
        {
          id: 2,
          customerId: 2,
          products: [
            {
              id: 1,
              quantity: 2
            },
            {
              id: 3,
              quantity: 3
            }
          ],
          total: 8.94
        }
      ]
    },
  ]
  
  
  console.log(storeData);
  
  export const wholesaleData = [
    {
      storeName: 'Wholesale Mart',
      address: '456 Oak St, New York, NY 67890',
      phoneNumber: '+1-415-555-9876',
      email: 'wholesalemart@example.com',
      products: [
        {
          id: 1,
          name: 'Product 1',
          description: 'This is product 1',
          price: 9.99,
          category: 'Electronics',
          minimumOrderQuantity: 10,
          availableQuantity: 100
        },
        {
          id: 2,
          name: 'Product 2',
          description: 'This is product 2',
          price: 19.99,
          category: 'Clothing',
          minimumOrderQuantity: 5,
          availableQuantity: 50
        },
        {
          id: 3,
          name: 'Product 3',
          description: 'This is product 3',
          price: 5.99,
          category: 'Home & Kitchen',
          minimumOrderQuantity: 20,
          availableQuantity: 200
        }
      ],
      orders: [
        {
          id: 1,
          customerId: 1,
          products: [
            {
              id: 1,
              quantity: 50
            },
            {
              id: 2,
              quantity: 20
            }
          ],
          total: 1199.8
        },
        {
          id: 2,
          customerId: 2,
          products: [
            {
              id: 2,
              quantity: 10
            },
            {
              id: 3,
              quantity: 30
            }
          ],
          total: 639.7
        }
      ]
    },
    {
      storeName: 'Wholesale World',
      address: '789 Maple Ave, Los Angeles, CA 45678',
      phoneNumber: '+1-510-555-5678',
      email: 'wholesaleworld@example.com',
      products: [
        {
          id: 1,
          name: 'Product 1',
          description: 'This is product 1',
          price: 8.99,
          category: 'Electronics',
          minimumOrderQuantity: 10,
          availableQuantity: 150
        },
        {
          id: 2,
          name: 'Product 2',
          description: 'This is product 2',
          price: 15.99,
          category: 'Clothing',
          minimumOrderQuantity: 5,
          availableQuantity: 100
        },
        {
          id: 3,
          name: 'Product 3',
          description: 'This is product 3',
          price: 4.99,
          category: 'Home & Kitchen',
          minimumOrderQuantity: 20,
          availableQuantity: 250
        }
      ],
      orders: [
        {
          id: 1,
          customerId: 1,
          products: [
            {
              id: 1,
              quantity: 30
            },
            {
              id: 3,
              quantity: 40
            }
          ],
          total: 1047.7
        },
        {
          id: 2,
          customerId: 2,
          products: [
            {
              id: 2,
              quantity: 15
            },
            {
              id: 3,
              quantity: 25
            }
          ],
          total: 635.8
        }
      ]
    }
  ];
  
  console.log(wholesaleData);
  