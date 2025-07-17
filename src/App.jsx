import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';

const PromoVideo = () => (
  <div className="video-container">
    <video controls className="w-full rounded-2xl shadow-lg">
      <source src="/NEW_RVM_PROMO_THE_ONE.mp4.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

const Home = () => (
  <div className="hero-section">
    <h1 className="hero-title">RED VISION</h1>
    <h2 className="hero-subtitle">Creative Studio</h2>
    <p className="hero-subtitle">The digital headquarters of your creative empire.</p>
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
    <div className="login-container">
      <div className="login-form">
        <h2 className="mb-6">Admin Access</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Admin Password"
          />
          <button type="submit">
            Access Dashboard
          </button>
        </form>
      </div>
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
    <div className="admin-container">
      <h2 className="section-title">Admin Dashboard</h2>

      <div className="admin-form">
        <h3 className="mb-4">Add Artist</h3>
        <form onSubmit={handleArtistSubmit} className="grid gap-4">
          <input 
            type="text" 
            placeholder="Artist Name" 
            onChange={e => setArtist({ ...artist, name: e.target.value })} 
          />
          <textarea 
            placeholder="Artist Bio" 
            rows="4"
            onChange={e => setArtist({ ...artist, bio: e.target.value })}
          />
          <input 
            type="text" 
            placeholder="Social Links (comma-separated)" 
            onChange={e => setArtist({ ...artist, links: e.target.value })} 
          />
          <button type="submit">Save Artist</button>
        </form>
      </div>

      <div className="admin-form">
        <h3 className="mb-4">Add Product</h3>
        <form onSubmit={handleProductSubmit} className="grid gap-4">
          <input 
            type="text" 
            placeholder="Product Title" 
            onChange={e => setProduct({ ...product, title: e.target.value })} 
          />
          <input 
            type="text" 
            placeholder="Price" 
            onChange={e => setProduct({ ...product, price: e.target.value })} 
          />
          <input 
            type="text" 
            placeholder="Image URL or Upload Path" 
            onChange={e => setProduct({ ...product, image: e.target.value })} 
          />
          <button type="submit">Save Product</button>
        </form>
      </div>

      <div className="admin-form">
        <h3 className="mb-4">Edit Content Block</h3>
        <form onSubmit={handleContentSubmit} className="grid gap-4">
          <input 
            type="text" 
            placeholder="Headline" 
            onChange={e => setContent({ ...content, headline: e.target.value })} 
          />
          <textarea 
            placeholder="Body Text" 
            rows="6"
            onChange={e => setContent({ ...content, body: e.target.value })}
          />
          <button type="submit">Save Content</button>
        </form>
      </div>
    </div>
  );
};

const Navbar = ({ isAuth }) => (
  <nav className="flex gap-4 justify-center flex-wrap">
    <Link to="/">Home</Link>
    <Link to="/about-company">Company</Link>
    <Link to="/about-jason">Jason</Link>
    <Link to="/divisions">Divisions</Link>
    <Link to="/studio-services">Services</Link>
    <Link to="/red-vision-music">Music</Link>
    <Link to="/artists">Artists</Link>
    <Link to="/shop">Shop</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/admin">Admin</Link>
  </nav>
);

// Page components
const AboutCompany = () => (
  <div className="content-section">
    <h1 className="section-title">About Red Vision Creative Studio</h1>
    <div className="section-content">
      <p>Red Vision Creative Studio is a cutting-edge AI-powered record company and marketing agency that's redefining the entertainment industry. We combine artificial intelligence with creative vision to deliver unparalleled results for artists and brands.</p>
      <p>Our mission is to bridge the gap between technology and creativity, providing innovative solutions that amplify artistic expression and drive commercial success.</p>
    </div>
  </div>
);

const AboutJason = () => (
  <div className="content-section">
    <h1 className="section-title">About Jason</h1>
    <div className="section-content">
      <p>Visionary founder and creative director behind Red Vision Creative Studio. Jason brings years of industry experience and a passion for innovation to every project.</p>
      <p>With a deep understanding of both the creative and technical aspects of modern entertainment, Jason leads our team in pushing boundaries and setting new standards in the industry.</p>
    </div>
  </div>
);

const Divisions = () => (
  <div className="content-section">
    <h1 className="section-title">Our Divisions</h1>
    <div className="section-content">
      <h3>Record Label</h3>
      <p>Discovering and developing the next generation of musical talent with AI-enhanced production and distribution.</p>
      
      <h3>Marketing Agency</h3>
      <p>Data-driven marketing strategies that amplify brand presence and drive engagement across all platforms.</p>
      
      <h3>Creative Services</h3>
      <p>Full-service creative solutions including video production, graphic design, and brand development.</p>
    </div>
  </div>
);

const StudioServices = () => (
  <div className="content-section">
    <h1 className="section-title">Studio Services</h1>
    <div className="section-content">
      <h3>Recording & Production</h3>
      <p>State-of-the-art recording facilities with AI-enhanced mixing and mastering capabilities.</p>
      
      <h3>Video Production</h3>
      <p>Professional video production services for music videos, commercials, and branded content.</p>
      
      <h3>Brand Development</h3>
      <p>Complete brand identity creation and development services for artists and businesses.</p>
    </div>
  </div>
);

const RedVisionMusic = () => (
  <div className="content-section">
    <h1 className="section-title">Red Vision Music</h1>
    <div className="section-content">
      <p>Our record label division focuses on discovering and nurturing exceptional talent. We provide comprehensive support for artists at every stage of their career.</p>
      <p>From production and distribution to marketing and promotion, Red Vision Music offers a complete ecosystem for musical success.</p>
    </div>
  </div>
);

const Artists = () => (
  <div className="content-section">
    <h1 className="section-title">Our Artists</h1>
    <div className="section-content">
      <p>Discover the incredible talent in our roster. Each artist brings their unique vision and sound to the Red Vision family.</p>
      <p>Stay tuned as we continue to expand our roster with groundbreaking artists who are shaping the future of music.</p>
    </div>
  </div>
);

const Shop = () => (
  <div className="content-section">
    <h1 className="section-title">Shop</h1>
    <div className="section-content">
      <p>Explore exclusive merchandise, music releases, and limited edition items from Red Vision Creative Studio and our artists.</p>
      <p>Coming soon - our full e-commerce platform featuring the latest releases and exclusive content.</p>
    </div>
  </div>
);

const Contact = () => (
  <div className="content-section">
    <h1 className="section-title">Get In Touch</h1>
    <div className="section-content">
      <h3>Ready to work with us?</h3>
      <p>Whether you're an artist looking for representation, a brand seeking innovative marketing solutions, or a creative professional interested in collaboration, we'd love to hear from you.</p>
      
      <div className="grid gap-4 max-w-md mx-auto mt-8">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Your Message" rows="6" />
        <button type="submit">Send Message</button>
      </div>
    </div>
  </div>
);

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
