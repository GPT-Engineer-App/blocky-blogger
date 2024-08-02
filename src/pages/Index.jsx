import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const fetchPosts = async () => {
  // Simulating API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, title: "First Blog Post", content: "This is the content of the first blog post." },
    { id: 2, title: "Second Blog Post", content: "This is the content of the second blog post." },
    { id: 3, title: "Third Blog Post", content: "This is the content of the third blog post." },
  ];
};

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
      <h1 className="text-3xl font-bold mb-6 text-center">My Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Card 
            key={post.id} 
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedPost(post)}
          >
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{post.content.substring(0, 100)}...</p>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle>{selectedPost.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{selectedPost.content}</p>
            </CardContent>
            <button 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setSelectedPost(null)}
            >
              Close
            </button>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;
