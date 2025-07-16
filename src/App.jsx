import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';

const PromoVideo = () => (
  <div className="w-full max-w-screen-lg mx-auto p-4">
    <video controls className="w-full rounded-2xl shadow-lg">
      <source src="/NEW_RVM_PROMO_THE_ONE.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

const Home = () => (
  <div className="text-center">
    <h1 className="text-4xl font-bold mb-4">Red Vision Creative Studio</h1>
    <p className="mb-6">The digital headquarters of your creative empire.</p>
    <PromoVideo />
  </div>
);

const AdminLogin = ({ setAuth }) => {
  const [password, setPassword] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'redvisionadmin') setAuth(true);
    else alert('Incorrect password');
  };
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Admin Password"
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-black text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

const AdminPanel = () => {
  const [artist, setArtist] = useState({ name: '', bio: '', links: '' });
  const [product, setProduct] = useState({ title: '', price: '', image: '' });
  const [content, setContent] = useState({ headline: '', body: '' });

  const handleArtistSubmit = (e) => {
    e.preventDefault();
    console.log('New artist:', artist);
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    console.log('New product:', product);
  };

  const handleContentSubmit = (e) => {
    e.preventDefault();
    console.log('New content block:', content);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Add Artist</h3>
        <form onSubmit={handleArtistSubmit} className="grid gap-2 max-w-md">
          <input type="text" placeholder="Artist Name" className="border p-2" onChange={e => setArtist({ ...artist, name: e.target.value })} />
          <textarea placeholder="Bio" className="border p-2" onChange={e => setArtist({ ...artist, bio: e.target.value })}></textarea>
          <input type="text" placeholder="Links (comma-separated)" className="border p-2" onChange={e => setArtist({ ...artist, links: e.target.value })} />
          <button className="bg-black text-white p-2 rounded">Save Artist</button>
        </form>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Add Product</h3>
        <form onSubmit={handleProductSubmit} className="grid gap-2 max-w-md">
          <input type="text" placeholder="Product Title" className="border p-2" onChange={e => setProduct({ ...product, title: e.target.value })} />
          <input type="text" placeholder="Price" className="border p-2" onChange={e => setProduct({ ...product, price: e.target.value })} />
          <input type="text" placeholder="Image URL or Upload Path" className="border p-2" onChange={e => setProduct({ ...product, image: e.target.value })} />
          <button className="bg-black text-white p-2 rounded">Save Product</button>
        </form>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Edit Text/Content Block</h3>
        <form onSubmit={handleContentSubmit} className="grid gap-2 max-w-md">
          <input type="text" placeholder="Headline" className="border p-2" onChange={e => setContent({ ...content, headline: e.target.value })} />
          <textarea placeholder="Body Text" className="border p-2" onChange={e => setContent({ ...content, body: e.target.value })}></textarea>
          <button className="bg-black text-white p-2 rounded">Save Content</button>
        </form>
      </section>
    </div>
  );
};

const Navbar = ({ isAuth }) => (
  <nav className="bg-black text-white flex gap-4 p-4 justify-center shadow-md">
    <Link to="/">Home</Link>
    <Link to="/about-company">About (Company)</Link>
    <Link to="/about-jason">About (Jason)</Link>
    <Link to="/divisions">Divisions</Link>
    <Link to="/studio-services">Studio Services</Link>
    <Link to="/red-vision-music">Red Vision Music</Link>
    <Link to="/artists">Artists</Link>
    <Link to="/shop">Shop</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/admin">Admin</Link>
  </nav>
);

// Placeholder components for routes
const AboutCompany = () => <div className="p-4">About the Company</div>;
const AboutJason = () => <div className="p-4">About Jason</div>;
const Divisions = () => <div className="p-4">Divisions</div>;
const StudioServices = () => <div className="p-4">Studio Services</div>;
const RedVisionMusic = () => <div className="p-4">Red Vision Music</div>;
const Artists = () => <div className="p-4">Artists</div>;
const Shop = () => <div className="p-4">Shop</div>;
const Contact = () => <div className="p-4">Contact</div>;

function App() {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    document.title = "Red Vision Creative Studio";
  }, []);

  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-company" element={<AboutCompany />} />
        <Route path="/about-jason" element={<AboutJason />} />
        <Route path="/divisions" element={<Divisions />} />
        <Route path="/studio-services" element={<StudioServices />} />
        <Route path="/red-vision-music" element={<RedVisionMusic />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/admin"
          element={isAuth ? <AdminPanel /> : <AdminLogin setAuth={setAuth} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
