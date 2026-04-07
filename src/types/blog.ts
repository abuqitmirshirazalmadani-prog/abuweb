export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featuredImage?: string;
  authorName: string;
  authorId: string;
  category?: string;
  tags?: string[];
  status: 'draft' | 'published';
  createdAt: any; // Firestore Timestamp
  updatedAt?: any;
  publishedAt?: any;
  views?: number;
  readingTime?: number;
}
