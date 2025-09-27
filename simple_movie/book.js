const books = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    rating: 4.5,
    description: "A philosophical novel about following your dreams and personal legend.",
    image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    rating: 4.8,
    description: "A practical guide to building good habits and breaking bad ones.",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    rating: 4.2,
    description: "A dystopian novel about totalitarianism and surveillance.",
    image: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    rating: 4.7,
    description: "A fantasy adventure about Bilbo Baggins and his journey with dwarves.",
    image: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    rating: 4.6,
    description: "A classic novel addressing racism and justice in the Deep South.",
    image: "https://m.media-amazon.com/images/I/81OdwZG0NEL.jpg"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    rating: 4.3,
    description: "A story about wealth, love, and the American Dream in the 1920s.",
    image: "https://m.media-amazon.com/images/I/81af+MCATTL.jpg"
  },
  {
    title: "The Power of Now",
    author: "Eckhart Tolle",
    year: 1997,
    rating: 4.4,
    description: "A spiritual book encouraging readers to live fully in the present moment.",
    image: "https://m.media-amazon.com/images/I/81s6DUyQCZL.jpg"
  },
  {
    title: "Harry Potter and the Sorcerer’s Stone",
    author: "J.K. Rowling",
    year: 1997,
    rating: 4.9,
    description: "The first book in the Harry Potter series introducing the magical world.",
    image: "https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    rating: 4.1,
    description: "A romantic novel about manners, morality, and misunderstandings.",
    image: "https://m.media-amazon.com/images/I/91HHxxtA1wL.jpg"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    rating: 3.9,
    description: "A coming-of-age story about Holden Caulfield’s struggles with identity.",
    image: "https://m.media-amazon.com/images/I/81OthjkJBuL.jpg"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    year: 2011,
    rating: 4.7,
    description: "A thought-provoking book about the history and evolution of humankind.",
    image: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg"
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    year: 1954,
    rating: 4.9,
    description: "The first part of Tolkien’s epic fantasy trilogy about the One Ring.",
    image: "https://m.media-amazon.com/images/I/91SZSW8qSsL.jpg"
  }
];

let books_cont =document.getElementById("books")
let book_cards=books.map((book)=>{

   return `<div class="movie_card" id="bright">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src="${book.image}"/>
      <h1>${book.title}</h1>
      <h4>${book.year}, ${book.author}</h4>
      <span class="minutes">117 min</span>
      <p class="type">rating ${book.rating}</p>
    </div>
    <div class="movie_desc">
      <p class="text">
       ${book.description}
      </p>
    </div>
    <div class="movie_social">
      <ul>
        <li><i class="material-icons">share</i></li>
        <li><i class="material-icons"></i></li>
        <li><i class="material-icons">chat_bubble</i></li>
      </ul>
    </div>
  </div>
  <div class="blur_back bright_back"></div>
</div>`
})
books_cont.innerHTML=book_cards.join("")
