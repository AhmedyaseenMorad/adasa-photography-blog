import { Link } from 'react-router-dom'
import data from '../data/posts.json'

const { siteInfo } = data

export default function Footer() {
  const socials = [
    { name: 'twitter', label: 'تويتر' },
    { name: 'github', label: 'جيت هاب' },
    { name: 'linkedin', label: 'لينكد إن' },
    { name: 'youtube', label: 'يوتيوب' },
  ]

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col footer-brand">
          <div className="logo">
            <span className="logo-icon">📷</span>
            <span className="logo-text">{siteInfo.name}</span>
          </div>
          <p>{siteInfo.tagline}</p>
          <p className="footer-email">{siteInfo.email}</p>
        </div>

        <div className="footer-col">
          <h4>روابط سريعة</h4>
          <ul>
            <li><Link to="/">الرئيسية</Link></li>
            <li><Link to="/blog">المدونة</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>تابعنا</h4>
          <ul className="footer-social">
            {socials.map((s) => (
              <li key={s.name}>
                <a href={siteInfo.social[s.name]} target="_blank" rel="noreferrer">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} {siteInfo.name} — جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  )
}
