//url/api/v1/home-page
export const sectionList = [
    {
      id: 1,
      isFestival: 1,
      title: "Festivals",
      categoryId: 1,
      itemList: [
        { id: 1, name: 'OverFlow', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s' },
        { id: 2, name: 'New Year Event', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUe-FEdfvmbPXm-ZKXNEs2jeRMGt-detjZw&s' },
      ],
    },
    {
      id: 2,
      isFestival: 0,
      title: 'Medical Items',
      categoryId: 2,
      itemList: [
        {
          id: 1,
          name: "Aspirin",
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
        },
        {
          id: 2,
          name: "Ibuprofen",
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
        },
        {
          id: 3,
          name: "Amoxicillin",
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
        },
        {
          id: 4,
          name: "Metformin",
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
        },
        {
          id: 5,
          name: "Loratadine",
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
        },
        {
          id: 6,
          name: "Cough Syrup",
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
        },
      ],
    },
  ];

  // url/api/v1/festival
  export const eventList = [
    {
      id: 1,
      name: "Over Flow",
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s' ,
      startDate: "2024-12-07",
      endDate: "2024-12-08",
      location: "Yangon Easter Park",
    },
    {
      id: 2,
      name: "NYER",
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s' ,
      startDate: "2024-12-30",
      endDate: "2024-12-30",
      location: "Yangon Easter Park",
    },
    {
      id: 3,
      name: "X Mas",
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s' ,
      startDate: "2024-12-24",
      endDate: "2024-12-25",
      location: "MICT Park",
    },
  ];

  // url/api/v1/ticket/{festivalId}
  export const ticketList = [
    {
      id: 1,
      ticketType: "Single",
      ticketRole: "GA",
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
      price: 30000,
      date: ["2024-12-07"],
    },
    {
      id: 1,
      ticketType: "Single",
      ticketRole: "GA",
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
      price: 30000,
      date: ["2024-12-07"],
    },
    {
      id: 2,
      ticketType: "Combo",
      ticketRole: "VIP",
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
      price: 30000,
      date: ["2024-12-07", "2024-12-08"],
    },
  ];

  // url/api/v1/item/{categoryId}
  export const productList = {
    title: "Medical Items",
    itemList: [
      {
        id: 1,
        name: "Aspirin",
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
      },
      {
        id: 2,
        name: "Ibuprofen",
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
      },
      {
        id: 3,
        name: "Amoxicillin",
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
      },
      {
        id: 4,
        name: "Metformin",
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
      },
      {
        id: 5,
        name: "Loratadine",
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
      },
      {
        id: 6,
        name: "Cough Syrup",
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
      },
    ],
  };

  //url/api/v1/item/{id} for productItemDetail
  export const itemList = [
    {
      id: 1,
      name: "Aspirin",
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
      price: 500,
      stock: 20,
      description: "Used to reduce pain, fever, or inflammation.",
    },
    {
      id: 2,
      name: "Ibuprofen",
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
      price: 1500,
      stock: 15,
      description: "Effective for relieving pain and reducing inflammation.",
    },
    {
      id: 3,
      name: "Amoxicillin",
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
      price: 1000,
      stock: 25,
      description: "A commonly used antibiotic for bacterial infections.",
    },
    {
      id: 4,
      name: "Metformin",
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
      price: 1200,
      stock: 18,
      description: "Widely used for the treatment of type 2 diabetes.",
    },
    {
      id: 5,
      name: "Loratadine",
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
      price: 700,
      stock: 30,
      description: "Antihistamine for allergy relief.",
    },
    {
      id: 6,
      name: "Cough Syrup",
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
      price: 300,
      stock: 40,
      description: "Soothes the throat and relieves cough symptoms.",
    },
  ];

   //url/api/v1/ticket/{id}
   export const ticketDetailData = [
    {
      id: 1,
      ticketType: "Single",
      ticketRole: "GA",
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
      price: 30000,
      date: ["2024-12-07"],
    },
    {
      id: 2,
      ticketType: "Round-Trip",
      ticketRole: "VIP",
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
      price: 50000,
      date: ["2024-12-08", "2024-12-09"],
    },
    {
      id: 3,
      ticketType: "Group",
      ticketRole: "GA",
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s',
      price: 80000,
      date: ["2024-12-10"],
    },
  ];
  
  export const receiptData = {
    receiptList: [
      {
        purchasedDate: "Nov 24, 2024",
        purchasedItems: [
          {
            name: "paracetamol",
            price: 2000,
          },
          {
            name: "overflow day 1 GA",
            price: 20000,
          },
        ],
        totalPrice: 22000,
      },
    ],
  };
  
  export const ticketHistoryData = {
    festivalList: [
      {
        festival: "Over Flow",
        ticketList: [
          {
            date: ["2024-12-05", "2024-12-06"],
            time: "2:00 PM",
            serialNumber: "OVFGA181601",
            qr: "gZh79nXpJfXq9GzI/UbdzQ==",
            Location: "Yangon Eastern Park",
            "Bought Date": "Nov 26, 2024 / 6:27 PM",
          },
          {
            festivalName: "Melody Fest",
            date: ["2024-12-12"],
            time: "8:00 PM",
            serialNumber: "MLDFT572904",
            qr: "hXn32kRtKdWy6PyJ/ZtpxA==",
            Location: "Central Park, Mandalay",
            "Bought Date": "Dec 02, 2024 / 1:30 PM",
          },
        ],
      },
    ],
  };