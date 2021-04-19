export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username == 'user' && password == 'iampwd') {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 2000);
  });
};

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let products = [
        {
          id: 0,
          brand: 'Fujifilm',
          type: 'APS-C',
          category: 'Mirrorless',
          name: 'Fujifilm X-T2',
          originalPrice: 15000,
          sellingPrice: 12000,
          image: require('../../assets/images/1.png'),
        },
        {
          id: 1,
          brand: 'Canon',
          type: 'Full-Frame',
          category: 'Mirrorless',
          name: 'Canon EOS R',
          originalPrice: 26000,
          sellingPrice: 23000,
          image: require('../../assets/images/2.png'),
        },
        {
          id: 2,
          brand: 'Fujifilm',
          type: 'APS-C',
          category: 'Mirrorless',
          name: 'Fujifilm X-T3',
          originalPrice: 22000,
          sellingPrice: 18000,
          image: require('../../assets/images/3.png'),
        },
        {
          id: 3,
          brand: 'Canon',
          type: '4/3 Cmos',
          category: 'DC',
          name: 'Canon EOS M',
          originalPrice: 13000,
          sellingPrice: 8800,
          image: require('../../assets/images/4.png'),
        },
        {
          id: 4,
          brand: 'Sony',
          type: 'APS-C',
          category: 'Mirrorless',
          name: 'Sony a6100',
          originalPrice: 15000,
          sellingPrice: 13000,
          image: require('../../assets/images/5.png'),
        },
      ];
      resolve(products);
    }, 2000);
  });
};
