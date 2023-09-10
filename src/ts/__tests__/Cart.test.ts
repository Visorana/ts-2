import Cart from '../service/Cart';
import Book from '../domain/Book';

describe('Cart', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  test('should be empty when created', () => {
    expect(cart.items.length).toBe(0);
  });

  test('should increase the cart size when an item is added', () => {
    const book = new Book(1, 'Book Title', 'Author', 100, 10);
    cart.add(book);

    expect(cart.items.length).toBe(1);
  });

  test('should increase the cart size accordingly when multiple items are added', () => {
    const book1 = new Book(1, 'Book Title 1', 'Author', 100, 10);
    const book2 = new Book(2, 'Book Title 2', 'Author', 100, 10);

    cart.add(book1);
    cart.add(book2);

    expect(cart.items.length).toBe(2);
  });

  test('should calculate total price correctly', () => {
    const book1 = new Book(1, 'Book Title 1', 'Author', 100, 10);
    const book2 = new Book(2, 'Book Title 2', 'Author', 100, 10);

    cart.add(book1);
    cart.add(book2);

    const total = cart.calculateTotalPrice();

    expect(total).toBe(20)
  })

  test('should calculate total price with discount correctly', () => {
    const book1 = new Book(1, 'Book Title 1', 'Author', 100, 10);
    const book2 = new Book(2, 'Book Title 2', 'Author', 100, 10);
    const discount = 10;

    cart.add(book1);
    cart.add(book2);

    const total = cart.calculateTotalPriceWithDiscount(discount);

    expect(total).toBe(18)
  })

  test('should delete an item by id', () => {
    const book1 = new Book(1, 'Book Title 1', 'Author', 100, 10);
    const book2 = new Book(2, 'Book Title 2', 'Author', 100, 10);

    cart.add(book1);
    cart.add(book2);

    cart.deleteItem(1)

    expect(cart.items.length).toBe(1);
    expect(cart.items[0].id).toBe(2);
  })
});

