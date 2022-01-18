const data = [
      {
        id: 1,
        image:
          "",
        title: "Como soy?",
        descripcion: "Test 1",
        categoria: "Profesionales",
        price: "USS 500",
        stock: "3",
      },
      {
        id: 2,
        image: "choicest/public/19198424",
        title: "Cuanto Sé?",
        descripcion: "Test 2",
        categoria: "Profesionales",
        price: "USS 100",
        stock: "10",
      },
      {
        id: 3,
        image:
          "",
        title: "Que me esta pasando?",
        descripcion: "Test 3",
        categoria: "Profesionales",
        price: "USS 1000",
        stock: "6",
      },
      {
        id: 4,
        image:
          "",
        title: "Que tan decidido estoy?",
        descripcion: "Test 4",
        categoria: "Profesionales",
        price: "USS 700",
        stock: "3",
      },
    ];
    
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 5000);
    });
    
    export default getData;