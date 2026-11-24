import React, { useMemo, useState } from 'react';

const label = ['All', 'Leves', 'A menü', 'B menü', 'Heti menü', 'Savanyúság', 'Csomagolás'];
const tags = ['Vegetarian', 'Gluten-free', 'Alcohol'];
const categories = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek'];

const dishes = [
  {
    id: 1,
    name: 'Karfiol leves',
    description: 'description',
    price: 1100,
    category: 'Hétfő',
    label: 'Leves',
    tags: [],

  },
  {
    id: 2,
    name: 'Császármorzs (barack íz)',
    description: 'description',
    price: 1900,
    category: 'Hétfő',
    label: 'A menü',
    tags: [],
  },
  {
    id: 3,
    name: 'Lecsósszelet tarhonya',
    description: 'description',
    price: 2100,
    category: 'Hétfő',
    label: '    B menü  ',
    tags: [],
  },
  {
    id: 4,
    name: 'Rántottsajt, jázminrizs és tartármártás',
    description: 'description',
    price: 2300,
    category: 'Hétfő',
    label: 'Heti menü',
    tags: [],
  },
    {
    id: 5,
    name: 'Karfiol leves',
    description: 'description',
    price: 1100,
    category: 'Kedd',
    label: 'Leves',
    tags: [],

  },
  {
    id: 6,
    name: 'Császármorzs (barack íz)',
    description: 'description',
    price: 1900,
    category: 'Kedd',
    label: 'A menü',
    tags: [],
  },
  {
    id: 7,
    name: 'Lecsósszelet tarhonya',
    description: 'description',
    price: 2100,
    category: 'Kedd',
    label: '    B menü  ',
    tags: [],
  },
  {
    id: 8,
    name: 'Rántottsajt, jázminrizs és tartármártás',
    description: 'description',
    price: 2300,
    category: 'Kedd',
    label: 'Heti menü',
    tags: [],
  },
    {
    id: 9,
    name: 'Karfiol leves',
    description: 'description',
    price: 1100,
    category: 'Szerda',
    label: 'Leves',
    tags: [],

  },
  {
    id: 10,
    name: 'Császármorzs (barack íz)',
    description: 'description',
    price: 1900,
    category: 'Szerda',
    label: 'A menü',
    tags: [],
  },
  {
    id: 11,
    name: 'Lecsósszelet tarhonya',
    description: 'description',
    price: 2100,
    category: 'Szerda',
    label: '    B menü  ',
    tags: [],
  },
  {
    id: 12,
    name: 'Rántottsajt, jázminrizs és tartármártás',
    description: 'description',
    price: 2300,
    category: 'Szerda',
    label: 'Heti menü',
    tags: [],
  },
    {
    id: 13,
    name: 'Karfiol leves',
    description: 'description',
    price: 1100,
    category: 'Csütörtök',
    label: 'Leves',
    tags: [],

  },
  {
    id: 14,
    name: 'Császármorzs (barack íz)',
    description: 'description',
    price: 1900,
    category: 'Csütörtök',
    label: 'A menü',
    tags: [],
  },
  {
    id: 15,
    name: 'Lecsósszelet tarhonya',
    description: 'description',
    price: 2100,
    category: 'Csütörtök',
    label: '    B menü  ',
    tags: [],
  },
  {
    id: 16,
    name: 'Rántottsajt, jázminrizs és tartármártás',
    description: 'description',
    price: 2300,
    category: 'Csütörtök',
    label: 'Heti menü',
    tags: [],
  },
    {
    id: 17,
    name: 'Karfiol leves',
    description: 'description',
    price: 1100,
    category: 'Péntek',
    label: 'Leves',
    tags: [],

  },
  {
    id: 18,
    name: 'Császármorzs (barack íz)',
    description: 'description',
    price: 1900,
    category: 'Péntek',
    label: 'A menü',
    tags: [],
  },
  {
    id: 19,
    name: 'Lecsósszelet tarhonya',
    description: 'description',
    price: 2100,
    category: 'Péntek',
    label: '    B menü  ',
    tags: [],
  },
  {
    id: 20,
    name: 'Rántottsajt, jázminrizs és tartármártás',
    description: 'description',
    price: 2300,
    category: 'Péntek',
    label: 'Heti menü',
    tags: [],
  },
  {
    id: 100,
    name: 'Savanyúság',
    description: 'description',
    price: 350,
    category: [],
    label: 'Savanyúság',
    tags: [],
  },
  {
    id: 101,
    name: 'Csomagolás',
    description: '150Ft / db',
    price: 150,
    label: 'Csomagolás',
    category: [],
    tags: [],
  },
];


function Icon({ name, size = 20 }) {
  const paths = {
    bag: <><path d="M5 8h14l1 13H4L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    leaf: <><path d="M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 8-8 8-16Z" /><path d="M4 21c3-5 7-8 12-11" /></>,
  };

  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

function DishCard({ dish, onAdd }) {
  return (
    <article className="dish-card">
      <div className="dish-content">
        <div className="dish-heading">
          <h3>{dish.name}</h3>
          <span className="dish-price">{dish.price} Ft</span>
        </div>
        <span className="dish-label">{dish.label}</span>
        <p className="dish-description">{dish.description}</p>
        <div className="dish-footer">
          <div className="dish-tags">
            {(dish.tags ?? []).map((tag) => (
              <span className="diet-tag" key={tag}>{tag === 'Vegetarian' && <Icon name="leaf" size={13} />}{tag}</span>
            ))}
          </div>
          <button className="add-button" onClick={() => onAdd(dish.name)} aria-label={`Add ${dish.name}`}>
            <Icon name="plus" size={17} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [notice, setNotice] = useState('');

  const filteredDishes = useMemo(() => dishes.filter((dish) => {
    const matchesCategory = activeCategory === 'All' || dish.category === activeCategory;
    const query = search.trim().toLowerCase();
    const matchesSearch = !query || `${dish.name} ${dish.description} ${(dish.tags ?? []).join(' ')}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  }), [activeCategory, search]);

  function addToOrder(name) {
    setCartCount((count) => count + 1);
    setNotice(`${name} added to your order`);
    window.clearTimeout(window.noticeTimer);
    window.noticeTimer = window.setTimeout(() => setNotice(''), 2400);
  }

  return (
    <div className="site-shell">
      <div className="announcement">
        {/* <span>GOOD FOOD, GOOD COMPANY</span><span className="announcement-dot">✳</span><span>NOW BOOKING FOR THE SEASON</span> */}
        </div>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Steve’s Kitchen and Pub"><span>Steve’s Kitchen<i>&</i> Pub</span><small>PLACEHOLER</small></a>
        <nav className="main-nav" aria-label="Main navigation">
          <a className="nav-active" href="#menu">Menü</a>
          {/* <a href="#story">Our story</a> */}
          <a href="#visit">Elérhetőség</a>
        </nav>
        <a className="order-button" href="#menu"><span>Rendelés megkezdése</span><span className="order-count"><Icon name="bag" size={17} />{cartCount > 0 && <b>{cartCount}</b>}</span></a>
      </header>

      <main id="top">
        {/* <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" />A TABLE FOR EVERY SEASON</p>
            <h1 id="hero-title">Rooted in the<br /><em>good things.</em></h1>
            <p className="hero-description">A neighborhood kitchen celebrating thoughtful ingredients, slow afternoons, and the people around your table.</p>
            <a className="text-link" href="#menu">Explore our menu <Icon name="arrow" size={18} /></a>
            <div className="hero-note"><span className="note-star">✳</span><span>Locally sourced<br />always made with care</span></div>
          </div>
          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1500&q=90" alt="A warmly lit restaurant table set for dinner" />
            <div className="image-caption"><span>01 / 04</span><span>Gather around</span></div>
            <div className="hero-stamp"><span>FRESH<br />FROM<br />THE FARM</span><span className="stamp-star">✳</span></div>
          </div>
        </section> */}

        <section className="menu-section" id="menu" aria-labelledby="menu-title">
          <div className="section-heading">
            <div>
              {/* <p className="eyebrow"><span className="eyebrow-line" />MADE FOR SHARING</p> */}
              <h2 id="menu-title">Mai <em>Menü</em></h2>
            </div>
            <p className="menu-intro"><time dateTime={new Date().toISOString().slice(0, 10)}>{new Date().toLocaleDateString('hu-HU')}</time></p>
          </div>

          <div className="menu-controls">
            <div className="category-tabs" role="tablist" aria-label="Filter menu by category">
              {categories.map((category) => (
                <button key={category} className={`category-tab ${activeCategory === category ? 'selected' : ''}`} role="tab" aria-selected={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}</button>
              ))}
            </div>
            <label className="search-box"><span className="search-icon">⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="PLACEHOLDER" aria-label="Search menu" /><kbd>⌘ K</kbd></label>
          </div>

          {filteredDishes.length > 0 ? (
            <div className="dish-grid">{filteredDishes.map((dish) => <DishCard key={dish.id} dish={dish} onAdd={addToOrder} />)}</div>
          ) : (
            <div className="empty-state"><span>✳</span><p>No dishes found just yet.</p><button onClick={() => { setSearch(''); setActiveCategory('All'); }}>Show the full menu</button></div>
          )}
          <div className="menu-footnote"><span>✳</span> Alergiáidrol szólj előre</div>
        </section>

        <section className="visit-strip" id="visit">
          <div className="visit-icon"><Icon name="pin" size={22} /></div>
          <div><p className="eyebrow">GYERE EL SZEMÉLYESEN</p><h2>Jó étvágyat kíván a <br />Steve's Kitchen & Pub</h2></div>
          <p className="visit-address"><Icon name="pin" size={10} /> 8000 Székesfehérvár, Budai út 12<br/><Icon name="phone" size={10} /> 06 70 774 7308</p>
          <a className="visit-link" href="https://maps.google.com/" target="_blank" rel="noreferrer">Térkép<Icon name="arrow" size={18} /></a>
        </section>
      </main>

      <footer className="site-footer" id="story"><span>Jó étvágyat kíván a Steve's Kitchen & Pub</span></footer>
      {notice && <div className="toast" role="status">✳ &nbsp; {notice}</div>}
    </div>
  );
}