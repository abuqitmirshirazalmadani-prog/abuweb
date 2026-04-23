import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { db } from '../firebase';
import { BlogPost as BlogPostType } from '../types/blog';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      try {
        const q = query(
          collection(db, 'posts'), 
          where('slug', '==', slug), 
          where('status', '==', 'published'),
          limit(1)
        );
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const postData = { id: snapshot.docs[0].id, ...snapshot.docs[0].data() } as BlogPostType;
          setPost(postData);

          // Fetch related posts (same category)
          if (postData.category) {
            const relatedQ = query(
              collection(db, 'posts'),
              where('status', '==', 'published'),
              where('category', '==', postData.category),
              limit(4)
            );
            const relatedSnap = await getDocs(relatedQ);
            const relatedData: BlogPostType[] = [];
            relatedSnap.forEach(doc => {
              if (doc.id !== postData.id) {
                relatedData.push({ id: doc.id, ...doc.data() } as BlogPostType);
              }
            });
            setRelatedPosts(relatedData.slice(0, 3));
          }
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex justify-center items-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl font-heading font-bold mb-4">Post Not Found</h1>
        <p className="text-white/70 mb-8">The article you are looking for does not exist or has been removed.</p>
        <Link to="/blog" className="px-6 py-3 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://abuqitmir.tech/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": shareUrl
    },
    "headline": post.title,
    "description": post.excerpt || post.content.substring(0, 150),
    "image": post.featuredImage || "https://abuqitmir.tech/logo.png",  
    "author": {
      "@type": "Person",
      "name": post.authorName,
      "url": "https://abuqitmir.tech"
    },  
    "publisher": {
      "@type": "Organization",
      "name": "Abu Qitmir",
      "logo": {
        "@type": "ImageObject",
        "url": "https://abuqitmir.tech/logo.png"
      }
    },
    "datePublished": post.publishedAt?.toDate().toISOString() || post.createdAt?.toDate().toISOString(),
    "dateModified": post.updatedAt?.toDate().toISOString() || post.createdAt?.toDate().toISOString()
  };

  return (
    <>
      <SEO 
        title={post.title} 
        description={post.excerpt || post.content.substring(0, 150)}
        canonical={shareUrl}
        schema={articleSchema}
      />
      
      <article className="pt-32 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mb-8 text-sm font-medium">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <header className="mb-12 text-center md:text-left">
            {post.category && (
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                {post.category}
              </span>
            )}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {post.authorName.charAt(0)}
                </div>
                <span className="text-white/80 font-medium">{post.authorName}</span>
              </div>
              <span className="flex items-center gap-1"><Calendar size={14} /> {post.publishedAt?.toDate().toLocaleDateString() || post.createdAt?.toDate().toLocaleDateString()}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {post.readingTime} min read</span>
            </div>
          </header>

          {post.featuredImage && (
            <div className="mb-12 rounded-3xl overflow-hidden aspect-video relative border border-white/10">
              <img src={post.featuredImage} alt={post.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Social Share Sidebar */}
            <div className="hidden lg:block w-12 shrink-0">
              <div className="sticky top-32 flex flex-col gap-4">
                <span className="text-xs font-bold text-white/30 uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 mb-4 mx-auto">Share</span>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#1877F2] hover:border-[#1877F2] transition-colors">
                  <Facebook size={18} />
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-colors">
                  <Twitter size={18} />
                </a>
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 prose prose-invert prose-primary max-w-none prose-p:leading-relaxed prose-img:rounded-2xl prose-img:border prose-img:border-white/10 prose-headings:font-heading prose-a:text-primary hover:prose-a:text-primary/80">
              <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                {post.content}
              </ReactMarkdown>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-white/50 mr-2 flex items-center">Tags:</span>
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Mobile Social Share */}
              <div className="lg:hidden mt-8 flex items-center gap-4">
                <span className="text-sm font-medium text-white/50 flex items-center gap-2"><Share2 size={16} /> Share:</span>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#1877F2] transition-colors">
                  <Facebook size={20} />
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#1DA1F2] transition-colors">
                  <Twitter size={20} />
                </a>
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#0A66C2] transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-24 pt-12 border-t border-white/10">
              <h3 className="text-2xl font-heading font-bold mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(related => (
                  <Link key={related.id} to={`/blog/${related.slug}`} className="group block bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="aspect-video relative overflow-hidden">
                      {related.featuredImage ? (
                        <img src={related.featuredImage} alt={related.title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-black flex items-center justify-center">
                          <span className="text-primary/50 font-heading text-xl font-bold">AQ</span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h4 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{related.title}</h4>
                      <div className="text-xs text-white/50 flex items-center gap-3">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {related.publishedAt?.toDate().toLocaleDateString()}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </article>
    </>
  );
}
