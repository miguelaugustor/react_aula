function Profile() {
  return (
    <img
      src="https://i0.wp.com/br.nacaodamusica.com/wp-content/uploads/2024/03/beyonce-por-Blair-Caldwell.jpg"
      alt="Beyoncé"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Artist</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
