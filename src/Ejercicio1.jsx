import './Ejercicio1.css';

// Declaración de los 7 componentes individuales
const HeaderSection = () => <section className="header-section">&lt;section&gt;&lt;/section&gt;</section>;
const Navbar = () => <nav className="nav-bar">&lt;nav&gt;&lt;/nav&gt;</nav>;
const ArticleOne = () => <article className="article-box">&lt;article&gt;&lt;/article&gt;</article>;
const ArticleTwo = () => <article className="article-box">&lt;article&gt;&lt;/article&gt;</article>;
const Sidebar = () => <aside className="sidebar-box">&lt;aside&gt;&lt;/aside&gt;</aside>;

const MainContainer = () => (
  <section className="main-section">
    <div className="articles-column">
      <ArticleOne />
      <ArticleTwo />
    </div>
    <Sidebar />
  </section>
);

const Footer = () => <footer className="footer-box">&lt;footer&gt;&lt;/footer&gt;</footer>;

export default function Ejercicio1() {
  return (
    <div className="layout-container">
      <HeaderSection />
      <Navbar />
      <MainContainer />
      <Footer />
    </div>
  );
}