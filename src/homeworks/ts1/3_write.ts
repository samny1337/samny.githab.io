/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * **/

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
// export const createRandomProduct = (createdAt: string) => {};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
// export const createRandomOperation = (createdAt: string) => {};

type Category = {
  id: string;
  name: string;
  photo?: string;
};

type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

type Operation = Cost | Profit;

export const createRandomProduct = (createdAt: string): Product => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const name: string = 'Огурец';
  const photo: string = 'https://e0.edimdoma.ru/data/ingredients/0000/2107/2107-ed4_wide.jpg?1487748571';
  const desc: string = 'Самый обычный огурец';
  const price: number = 89;
  const category: Category = {
    id: Math.floor(Math.random() * 100).toString(),
    name: 'Овощи',
  };

  return {
    id,
    name,
    photo,
    desc,
    createdAt,
    price,
    category,
  };
};

export const createRandomOperation = (createdAt: string): Operation => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const name: string = 'Продажа огурца';
  const desc: string = 'Продажа огурца по выгодной цене';
  const amount: number = 1;
  const category: Category = {
    id: Math.floor(Math.random() * 100).toString(),
    name: 'Овощи',
  };
  const type = 'Profit';
  // комментарий про сделать случайным не понял. Чтобы тип рандомно проставлялся профит или кост?

  return {
    id,
    name,
    desc,
    createdAt,
    amount,
    category,
    type,
  };
};
