export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  heading1: string;
  heading2: string;
  heading3: string;
  coverImg: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    stock: 50,
    description: 'A large phone with one of the best screens',
    heading1: 'こりゃいいわい。',
    heading2: 'こりゃいいわい。',
    heading3: 'こりゃいいわい。',
    coverImg: '/assets/img/phone-cover.jpg',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    stock: 45,
    description: 'A great phone with one of the best cameras',
    heading1: '安くなった',
    heading2: '安くなった',
    heading3: '安くなった',
    coverImg: '/assets/img/phone-cover.jpg',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    stock: 30,
    description: '',
    heading1: '据え置き',
    heading2: '据え置き',
    heading3: '据え置き',
    coverImg: '/assets/img/phone-cover.jpg',
  },
  {
    id: 4,
    name: 'Phone Standard',
    price: 999,
    stock: 30,
    description: '',
    heading1: '新色登場',
    heading2: '新色登場',
    heading3: '新色登場',
    coverImg: '/assets/img/phone-cover.jpg',
  },
];
