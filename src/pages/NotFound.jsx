import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-inner">
        <h1 className="not-found-code">404</h1>
        <h2>الصفحة غير موجودة</h2>
        <p>عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">العودة للرئيسية</Link>
          <Link to="/blog" className="btn btn-outline">تصفح المدونة</Link>
        </div>
      </div>
    </div>
  )
}
