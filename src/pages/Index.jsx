import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

const fetchPosts = async () => {
  // Simulating API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, title: "First Blog Post", content: "This is the content of the first blog post.", image: "https://source.unsplash.com/random/800x600?cute=1", category: "vue优化" },
    { id: 2, title: "Second Blog Post", content: "This is the content of the second blog post.", image: "https://source.unsplash.com/random/800x600?cute=2", category: "Linux" },
    { id: 3, title: "Third Blog Post", content: "This is the content of the third blog post.", image: "https://source.unsplash.com/random/800x600?cute=3", category: "技术分享" },
    { id: 4, title: "Fourth Blog Post", content: "This is the content of the fourth blog post.", image: "https://source.unsplash.com/random/800x600?cute=4", category: "其它" },
    { id: 5, title: "Fifth Blog Post", content: "This is the content of the fifth blog post.", image: "https://source.unsplash.com/random/800x600?cute=5", category: "vue" },
  ];
};

const categories = ["全部", "vue优化", "Linux", "技术分享", "其它", "vue"];

const Index = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="w-full">
            <CardHeader>
              <Skeleton className="h-4 w-[250px]" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-[200px]" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Error loading posts</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">My Cute Blog</h1>
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Badge key={category} variant={category === "全部" ? "default" : "secondary"} className="cursor-pointer">
            {category}
          </Badge>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card 
            key={post.id} 
            className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
            onClick={() => setSelectedPost(post)}
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">{post.content.substring(0, 100)}...</p>
              <Badge>{post.category}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl overflow-hidden">
            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-64 object-cover" />
            <CardHeader>
              <CardTitle>{selectedPost.title}</CardTitle>
              <Badge>{selectedPost.category}</Badge>
            </CardHeader>
            <CardContent>
              <p>{selectedPost.content}</p>
            </CardContent>
            <div className="p-4">
              <button 
                className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                onClick={() => setSelectedPost(null)}
              >
                Close
              </button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;
