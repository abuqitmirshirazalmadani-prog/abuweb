import { useEffect, useState } from 'react';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { BlogPost } from '../types/blog';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Calendar, Clock, ArrowRight, LayoutGrid, List as ListIcon } from 'lucide-react';
import { Hero3DWrapper } from '../components/ui/hero-3d-wrapper';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [category, setCategory] = useState<string>('All');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(
          collection(db, 'posts'),
          where('status', '==', 'published'),
          orderBy('publishedAt', 'desc')
        );
        const snapshot = await getDocs(q);
        const postsData: BlogPost[] = [];
        snapshot.forEach((doc) => {
          postsData.push({ id: doc.id, ...doc.data() } as BlogPost);
        });
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category).filter(Boolean)))];
  const filteredPosts = category === 'All' ? posts : posts.filter(p => p.category === category);
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const regularPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];

  return (
    <>
      <SEO 
        title="Blog - Insights on Software & App Development" 
        description="Read the latest articles, tutorials, and insights on custom software development, mobile apps, AI, and business growth by Abu Qitmir."
        canonical="https://abuqitmir.tech/blog"
      />
      
      <div className="min-h-screen">
        <Hero3DWrapper className="pt-48 pb-40 lg:pt-56 lg:pb-48 min-h-[75vh]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center gap-6 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white drop-shadow-2xl"
            >
              Our <span className="text-primary">Blog</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/80 max-w-2xl mx-auto drop-shadow-md"
            >
              Insights, tutorials, and thoughts on software engineering, design, and building digital products.
            </motion.p>
          </div>
        </Hero3DWrapper>

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && category === 'All' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-16"
                >
                  <Link to={`/blog/${featuredPost.slug}`} className="group block relative rounded-3xl overflow-hidden bg-[#111] border border-white/10 hover:border-primary/50 transition-colors">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      <div className="aspect-video md:aspect-auto relative overflow-hidden">
                        {featuredPost.featuredImage ? (
                          <img src={featuredPost.featuredImage} alt={featuredPost.title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-black flex items-center justify-center">
                            <span className="text-primary/50 font-heading text-4xl font-bold">AQ</span>
                          </div>
                        )}
                      </div>
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        {featuredPost.category && (
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-4 w-fit">
                            {featuredPost.category}
                          </span>
                        )}
                        <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-white/70 mb-6 line-clamp-3">
                          {featuredPost.excerpt || featuredPost.content.substring(0, 150) + '...'}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-white/50 mt-auto">
                          <span className="flex items-center gap-1"><Calendar size={14} /> {featuredPost.publishedAt?.toDate().toLocaleDateString()}</span>
                          <span className="flex items-center gap-1"><Clock size={14} /> {featuredPost.readingTime} min read</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Filters and View Toggle */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === cat ? 'bg-primary text-black' : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2 bg-white/5 p-1 rounded-lg border border-white/10 hidden md:flex">
                  <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white'}`}>
                    <LayoutGrid size={18} />
                  </button>
                  <button onClick={() => setViewMode('list')} className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white'}`}>
                    <ListIcon size={18} />
                  </button>
                </div>
              </div>

              {/* Posts Grid/List */}
              {regularPosts.length > 0 ? (
                <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-6"}>
                  {regularPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link to={`/blog/${post.slug}`} className={`group block bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors ${viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''}`}>
                        <div className={`relative overflow-hidden ${viewMode === 'list' ? 'sm:w-1/3 aspect-video sm:aspect-auto' : 'aspect-video'}`}>
                          {post.featuredImage ? (
                            <img src={post.featuredImage} alt={post.title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-black flex items-center justify-center">
                              <span className="text-primary/50 font-heading text-2xl font-bold">AQ</span>
                            </div>
                          )}
                          {post.category && (
                            <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/10">
                              {post.category}
                            </div>
                          )}
                        </div>
                        <div className={`p-6 flex flex-col ${viewMode === 'list' ? 'sm:w-2/3 justify-center' : ''}`}>
                          <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-white/70 mb-6 line-clamp-2 text-sm">
                            {post.excerpt || post.content.substring(0, 100) + '...'}
                          </p>
                          <div className="flex items-center justify-between text-xs text-white/50 mt-auto pt-4 border-t border-white/10">
                            <span className="flex items-center gap-1"><Calendar size={12} /> {post.publishedAt?.toDate().toLocaleDateString()}</span>
                            <span className="flex items-center gap-1 group-hover:text-primary transition-colors">Read More <ArrowRight size={12} /></span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 text-white/50">
                  No posts found in this category.
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
