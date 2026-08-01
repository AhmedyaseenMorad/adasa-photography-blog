import { Link, useParams } from 'react-router-dom'
import data from '../data/posts.json'
import PostCard from '../components/PostCard'
import NotFound from './NotFound'
import { getCategoryColor, formatDate } from '../utils/helpers'

const { posts } = data

function renderContent(content) {
  const blocks = content.split('\n\n')

  return blocks.map((block, index) => {
    if (block.startsWith('## ')) {
      return <h2 key={index}>{block.slice(3)}</h2>
    }
    return <p key={index}>{block}</p>
  })
}

export default function PostDetails() {
  const { slug } = useParams()

  const post = posts.find((item) => item.slug === slug)

  if (!post) {
    return <NotFound />
  }

  const relatedPosts = posts
    .filter((item) => item.category === post.category && item.id !== post.id)
    .slice(0, 3)

  return (
    <article className="post-details">
      <div className="page-hero page-hero-small">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">الرئيسية</Link>
            <span>/</span>
            <Link to="/blog">المدونة</Link>
            <span>/</span>
            <span>{post.title}</span>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="post-details-inner">
          <header className="post-header">
            <div className="post-meta">
              <Link
                to="/blog"
                className={`cat-badge cat-${getCategoryColor(post.category)}`}
              >
                {post.category}
              </Link>
              <span className="post-date">{formatDate(post.date)}</span>
              <span className="read-time">⏱ {post.readTime}</span>
            </div>

            <h1>{post.title}</h1>
            <p className="post-excerpt">{post.excerpt}</p>

            <div className="post-author-box">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="author-avatar large"
              />
              <div>
                <span className="author-name">{post.author.name}</span>
                <span className="author-role">{post.author.role}</span>
              </div>
            </div>
          </header>

          <div className="post-cover">
            <img src={post.image} alt={post.title} />
          </div>

          <div className="post-content">{renderContent(post.content)}</div>

          <div className="post-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <section className="related-posts">
            <div className="section-head">
              <h2>مقالات ذات صلة</h2>
            </div>
            <div className="posts-grid">
              {relatedPosts.map((item) => (
                <PostCard key={item.id} post={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  )
}
