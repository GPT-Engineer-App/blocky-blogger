import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const categories = ["vue优化", "Linux", "技术分享", "其它", "vue"];

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [createdPost, setCreatedPost] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
      category,
      image: "https://source.unsplash.com/random/800x600?blog",
    };
    setCreatedPost(newPost);
    console.log('New post:', newPost);
    // Here you would typically send the post to your backend
    // For now, we'll just simulate adding it to the posts list
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Create New Blog Post</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <Select onValueChange={setCategory} required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  className="mt-1"
                  rows={6}
                />
              </div>
              <Button type="submit" className="w-full">Create Post</Button>
            </form>
          </CardContent>
        </Card>

        {createdPost && (
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={createdPost.image} alt={createdPost.title} className="w-full h-48 object-cover mb-4 rounded" />
              <h2 className="text-2xl font-bold mb-2">{createdPost.title}</h2>
              <Badge className="mb-4">{createdPost.category}</Badge>
              <p className="text-gray-700">{createdPost.content}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default NewPost;
