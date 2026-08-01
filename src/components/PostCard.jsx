import { Link } from 'react-router-dom'
import { getCategoryColor, formatDate } from '../utils/helpers'

export default function PostCard({ post, view }) {
  const cardClass = view === 'list' ? 'post-card list' : 'post-card'

  return (
    <article className={cardClass}>
      <Link to={`/blog/${post.slug}`} className="post-image">
        <img src={post.image} alt={post.title} loading="lazy" />
      </Link>

      <div className="post-body">
        <div className="post-meta">
          <span className={`cat-badge cat-${getCategoryColor(post.category)}`}>
            {post.category}
          </span>
          <span className="post-date">{formatDate(post.date)}</span>
        </div>

        <h3 className="post-title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="post-excerpt">{post.excerpt}</p>

        <div className="post-footer">
          <div className="post-author">
            <img src={post.author.avatar} alt={post.author.name} className="author-avatar" />
            <div>
              <span className="author-name">{post.author.name}</span>
              <span className="read-time">{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
