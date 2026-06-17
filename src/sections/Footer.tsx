const columns = [
  {
    title: 'Product',
    links: ['How it works', 'Examples', 'Pricing', 'Add a domain'],
  },
  {
    title: 'Company',
    links: ['About Kazoom', 'Our work', 'Careers', 'Contact'],
  },
  {
    title: 'Support',
    links: ['Help center', 'Talk to a human', 'Status', 'Privacy'],
  },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__inner">
          <div>
            <a className="logo" href="#top" aria-label="Kazoom home">
              <span className="logo__mark" aria-hidden>K</span>
              Kazoom
            </a>
            <p className="footer__about">
              Websites that make small businesses look as good online as they are
              in person.
            </p>
          </div>
          {columns.map((col) => (
            <nav key={col.title} className="footer__col" aria-label={col.title}>
              <h4>{col.title}</h4>
              {col.links.map((link) => (
                <a key={link} href="#">
                  {link}
                </a>
              ))}
            </nav>
          ))}
        </div>
        <div className="footer__base">
          <span>&copy; {new Date().getFullYear()} Kazoom. All rights reserved.</span>
          <span>Built with care for small businesses.</span>
        </div>
      </div>
    </footer>
  )
}
