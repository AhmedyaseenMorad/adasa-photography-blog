import { useState } from 'react'
import data from '../data/posts.json'
import PostCard from '../components/PostCard'

const POSTS_PER_PAGE = 6

const { posts, categories, siteInfo } = data

export default function Blog() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [view, setView] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)

  let filteredPosts = posts

  if (category !== '') {
    filteredPosts = filteredPosts.filter((post) => post.category === category)
  }

  if (search.trim() !== '') {
    const word = search.trim().toLowerCase()
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(word) ||
        post.excerpt.toLowerCase().includes(word),
    )
  }

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE))

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
    setCurrentPage(1)
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
    setCurrentPage(1)
  }

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="blog-page">
      <section className="page-hero">
        <div className="container">
          <h1>المدونة</h1>
          <p>مقالات متنوعة عن عالم التصوير الفوتوغرافي — {siteInfo.tagline}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-toolbar">
            <div className="blog-controls">
              <div className="search-box">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="ابحث عن مقال..."
                  value={search}
                  onChange={handleSearchChange}
                />
              </div>

              <div className="filter-box">
                <select value={category} onChange={handleCategoryChange}>
                  <option value="">جميع الأقسام</option>
                  {categories.map((cat) => (
                    <option key={cat.name} value={cat.name}>
                      {cat.name} ({cat.count})
                    </option>
                  ))}
                </select>
              </div>

              <div className="view-toggle">
                <button
                  className={view === 'grid' ? 'active' : ''}
                  onClick={() => setView('grid')}
                  title="عرض شبكي"
                >
                  ⧉
                </button>
                <button
                  className={view === 'list' ? 'active' : ''}
                  onClick={() => setView('list')}
                  title="عرض قائمة"
                >
                  ☰
                </button>
              </div>
            </div>

            <p className="results-count">عدد النتائج: {filteredPosts.length}</p>
          </div>

          {currentPosts.length > 0 ? (
            <>
              <div className={view === 'grid' ? 'posts-grid' : 'posts-list'}>
                {currentPosts.map((post) => (
                  <PostCard key={post.id} post={post} view={view} />
                ))}
              </div>

              {totalPages > 1 && (
                <nav className="pagination">
                  <button
                    className="page-btn"
                    disabled={currentPage === totalPages}
                    onClick={() => goToPage(currentPage + 1)}
                  >
                    ←
                  </button>

                  {pageNumbers.map((number) => (
                    <button
                      key={number}
                      className={number === currentPage ? 'page-btn active' : 'page-btn'}
                      onClick={() => goToPage(number)}
                    >
                      {number}
                    </button>
                  ))}

                  <button
                    className="page-btn"
                    disabled={currentPage === 1}
                    onClick={() => goToPage(currentPage - 1)}
                  >
                    →
                  </button>
                </nav>
              )}
            </>
          ) : (
            <div className="empty-state">
              <span className="empty-icon">📷</span>
              <h3>لا توجد نتائج مطابقة</h3>
              <p>جرّب كلمة بحث مختلفة أو غيّر القسم</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
