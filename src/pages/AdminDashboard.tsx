import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { BlogPost } from '../types/blog';
import { useNavigate } from 'react-router';
import { Plus, Edit, Trash2, Eye, X } from 'lucide-react';

export default function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData: BlogPost[] = [];
      snapshot.forEach((doc) => {
        postsData.push({ id: doc.id, ...doc.data() } as BlogPost);
      });
      setPosts(postsData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching posts:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const confirmDelete = async () => {
    if (!postToDelete) return;
    try {
      await deleteDoc(doc(db, 'posts', postToDelete));
      setPostToDelete(null);
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post.");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-heading font-bold">Blog Posts</h1>
        <button
          onClick={() => navigate('/admin/posts/new')}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus size={18} /> New Post
        </button>
      </div>

      {loading ? (
        <div>Loading posts...</div>
      ) : (
        <div className="bg-[#111] border border-white/10 rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-4 font-medium text-white/70">Title</th>
                <th className="p-4 font-medium text-white/70">Status</th>
                <th className="p-4 font-medium text-white/70">Date</th>
                <th className="p-4 font-medium text-white/70 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-white/50">No posts found. Create one!</td>
                </tr>
              ) : (
                posts.map((post) => (
                  <tr key={post.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4">
                      <div className="font-medium">{post.title}</div>
                      <div className="text-sm text-white/50">{post.slug}</div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${post.status === 'published' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-white/70">
                      {post.createdAt?.toDate().toLocaleDateString() || 'Unknown'}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => navigate(`/blog/${post.slug}`)} className="p-2 text-white/50 hover:text-white transition-colors" title="View">
                          <Eye size={18} />
                        </button>
                        <button onClick={() => navigate(`/admin/posts/${post.id}`)} className="p-2 text-white/50 hover:text-primary transition-colors" title="Edit">
                          <Edit size={18} />
                        </button>
                        <button onClick={() => setPostToDelete(post.id)} className="p-2 text-white/50 hover:text-red-400 transition-colors" title="Delete">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {postToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-heading font-bold text-white">Delete Post</h3>
              <button onClick={() => setPostToDelete(null)} className="text-white/50 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            <p className="text-white/70 mb-6">
              Are you sure you want to delete this post? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setPostToDelete(null)}
                className="px-4 py-2 rounded-lg font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 font-medium rounded-lg transition-colors"
              >
                Delete Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
