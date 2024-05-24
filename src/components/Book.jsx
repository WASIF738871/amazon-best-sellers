

const Book = ({book, number}) => {
  const { title, author, imageLink, pages, year, country, link} = book;
  return (
    <section className="book">
      <span className="number">#{number+1}</span>
      <img
        src={imageLink}
        alt={title}
      />
      <h2>{title}</h2>
      <p>{year}</p>
      <p>Pages: {pages}</p>
      <a href={link}>click here to read book</a>
      <div style={{display:"flex" ,flexDirection:"column", alignItems:"start"}}>
        <h4>{author.toUpperCase()}</h4>
        <p>{country}</p>
      </div>
    </section>
  );
};

export default Book;
