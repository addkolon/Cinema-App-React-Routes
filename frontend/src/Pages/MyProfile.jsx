export default function MyProfile({ name, bookings }) {
  return (
    <>
      <h1>Hello {name}</h1>
      <h2>My Bookings</h2>
      {bookings.map((movie, index) => (
        <div className="card" key={index}>
          <h2>{movie.title}</h2>
          <p><strong>Director:</strong> {movie.director}</p>
        </div>
      ))}
    </>
  )
}
