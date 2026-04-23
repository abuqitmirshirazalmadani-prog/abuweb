import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { doc, getDoc, setDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { BlogPost } from '../types/blog';
import { ArrowLeft, Save, Sparkles } from 'lucide-react';

export default function AdminPostEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === 'new';

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [initialStatus, setInitialStatus] = useState<'draft' | 'published'>('draft');
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [isFormatting, setIsFormatting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isNew && id) {
      const fetchPost = async () => {
        try {
          const docRef = doc(db, 'posts', id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data() as BlogPost;
            setTitle(data.title);
            setSlug(data.slug);
            setContent(data.content);
            setExcerpt(data.excerpt || '');
            setFeaturedImage(data.featuredImage || '');
            setCategory(data.category || '');
            setTags(data.tags?.join(', ') || '');
            setStatus(data.status);
            setInitialStatus(data.status);
          } else {
            setError('Post not found');
          }
        } catch (err) {
          console.error(err);
          setError('Failed to load post');
        } finally {
          setLoading(false);
        }
      };
      fetchPost();
    }
  }, [id, isNew]);

  const generateSlug = (text: string) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (isNew) {
      setSlug(generateSlug(e.target.value));
    }
  };

  const handleAutoFormat = async () => {
    if (!content.trim()) return;

    setIsFormatting(true);
    setError('');
    try {
      const response = await fetch('/api/format-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
      });
      
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Failed to format');
      }
      
      const data = await response.json();
      if (data.formattedContent) {
        setContent(data.formattedContent);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsFormatting(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      const user = auth.currentUser;
      if (!user) throw new Error('Not authenticated');

      const postData: Partial<BlogPost> = {
        title,
        slug,
        content,
        excerpt,
        featuredImage,
        category,
        tags: tags.split(',').map(t => t.trim()).filter(Boolean),
        status,
        updatedAt: serverTimestamp(),
        readingTime: Math.ceil(content.split(/\s+/).length / 200) || 1,
      };

      if (!isNew && status === 'published' && initialStatus !== 'published') {
        postData.publishedAt = serverTimestamp();
      }

      if (isNew) {
        postData.authorId = user.uid;
        postData.authorName = user.displayName || 'Abu Qitmir';
        postData.createdAt = serverTimestamp();
        postData.views = 0;
        if (status === 'published') {
          postData.publishedAt = serverTimestamp();
        }
        await addDoc(collection(db, 'posts'), postData);
      } else if (id) {
        await setDoc(doc(db, 'posts', id), postData, { merge: true });
      }
      
      navigate('/admin');
    } catch (err: any) {
      console.error('Firestore Error:', err);
      // Log more details if available
      if (err.code) console.error('Error code:', err.code);
      setError(err.message || 'Failed to save post');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => navigate('/admin')} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          <ArrowLeft size={20} /> Back to Dashboard
        </button>
        <h1 className="text-2xl font-heading font-bold">{isNew ? 'Create Post' : 'Edit Post'}</h1>
      </div>

      {error && <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 text-red-200 rounded-xl">{error}</div>}

      <form onSubmit={handleSave} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                className="w-full p-3 bg-[#111] border border-white/10 rounded-xl focus:outline-none focus:border-primary text-white text-lg font-medium"
                required
              />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-white/70">Content (Markdown)</label>
                <button
                  type="button"
                  onClick={handleAutoFormat}
                  disabled={isFormatting || !content.trim()}
                  className="flex items-center gap-2 px-3 py-1.5 bg-primary/20 text-primary text-xs font-bold rounded-lg hover:bg-primary/30 transition-colors disabled:opacity-50"
                >
                  <Sparkles size={14} />
                  {isFormatting ? 'Formatting...' : 'Auto-Format with AI'}
                </button>
              </div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-4 bg-[#111] border border-white/10 rounded-xl focus:outline-none focus:border-primary text-white font-mono text-sm min-h-[400px]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Excerpt</label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="w-full p-3 bg-[#111] border border-white/10 rounded-xl focus:outline-none focus:border-primary text-white h-24"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#111] p-6 rounded-xl border border-white/10 space-y-4">
              <h3 className="font-medium text-white border-b border-white/10 pb-2 mb-4">Publishing</h3>
              
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as 'draft' | 'published')}
                  className="w-full p-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary text-white"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">URL Slug</label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full p-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary text-white text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={saving}
                className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 mt-4"
              >
                <Save size={18} /> {saving ? 'Saving...' : 'Save Post'}
              </button>
            </div>

            <div className="bg-[#111] p-6 rounded-xl border border-white/10 space-y-4">
              <h3 className="font-medium text-white border-b border-white/10 pb-2 mb-4">Meta Data</h3>
              
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Featured Image URL</label>
                <input
                  type="text"
                  value={featuredImage}
                  onChange={(e) => setFeaturedImage(e.target.value)}
                  className="w-full p-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary text-white text-sm"
                  placeholder="https://..."
                />
                {featuredImage && (
                  <img src={featuredImage} alt="Preview" referrerPolicy="no-referrer" className="mt-4 w-full h-32 object-cover rounded-lg border border-white/10" />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Category</label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary text-white text-sm"
                  placeholder="e.g. Tech, Business"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Tags (comma separated)</label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full p-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary text-white text-sm"
                  placeholder="react, web, design"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
