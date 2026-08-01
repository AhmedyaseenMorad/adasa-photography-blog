import { Link } from 'react-router-dom'
import data from '../data/posts.json'
import PostCard from '../components/PostCard'

const { posts, categories, siteInfo } = data

const categoryIcons = {
  'إضاءة': '💡',
  'بورتريه': '👤',
  'مناظر طبيعية': '🌄',
  'تقنيات': '⚙️',
  'معدات': '📷',
}

export default function Home() {
  const featuredPosts = posts.filter((post) => post.featured)
  const latestPosts = posts.filter((post) => !post.featured).slice(0, 6)

  return (
    <div className="home">
      <section className="hero">
        <div className="container hero-inner">
          <h1 className="hero-title">{siteInfo.name}</h1>
          <p className="hero-tagline">{siteInfo.tagline}</p>
          <p className="hero-desc">{siteInfo.description}</p>
          <div className="hero-actions">
            <Link to="/blog" className="btn btn-primary">استكشف المدونة</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>مميز</h2>
            <Link to="/blog" className="section-link">عرض الكل ←</Link>
          </div>

          <div className="posts-grid">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>أحدث المقالات</h2>
            <Link to="/blog" className="section-link">عرض الكل ←</Link>
          </div>

          <div className="posts-grid">
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>الأقسام</h2>
          </div>

          <div className="categories-grid">
            {categories.map((category) => (
              <Link
                key={category.name}
                to="/blog"
                className={`category-card cat-${category.color}`}
              >
                <span className="category-icon">{categoryIcons[category.name] || '📷'}</span>
                <span className="category-name">{category.name}</span>
                <span className="category-count">{category.count} مقالات</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
