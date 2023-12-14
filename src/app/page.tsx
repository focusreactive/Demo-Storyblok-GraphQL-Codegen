import { sdk } from '@/sdk';

const PostsPage = async () => {
  const { PostItems } = await sdk.posts();

  return <pre>{JSON.stringify({ PostItems }, null, 2)}</pre>;
};

export default PostsPage;
