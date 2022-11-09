import { useQuery, useMutation } from "react-query";

async function fetchComments(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return response.json();
}

async function deletePost(postId) {
  if (window.confirm("삭제?")) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      { method: "DELETE" }
    );
    return response.json();
  }
}

async function updatePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { method: "PATCH", data: { title: "REACT QUERY FOREVER!!!!" } }
  );

  return response.json();
}
// useQuery(`comments${post.id}`)
export function PostDetail({ post }) {
  const { data, isError, isLoading } = useQuery(["comments", post.id], () =>
    fetchComments(post.id)
  );

  const deleteMutation = useMutation((postId) => deletePost(postId));

  const updateMutation = useMutation((postId) => updatePost(postId));

  if (isLoading) return <h3>Loading</h3>;
  if (isError) return <h3>Oops, sorry</h3>;

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
      {deleteMutation.isError && <p style={{ color: "red" }}>Error delete</p>}
      {deleteMutation.isLoading && (
        <p style={{ color: "purple" }}>Deleting the post</p>
      )}
      {deleteMutation.isSuccess && (
        <p style={{ color: "green" }}>Post has (not) been delete</p>
      )}

      <button onClick={() => updateMutation.mutate(post.id)}>
        Update title
      </button>
      {updateMutation.isError && <p style={{ color: "red" }}>Error update</p>}
      {updateMutation.isLoading && (<p style={{ color: "purple" }}>Updating the post</p>)}
      {updateMutation.isSuccess && ( <p style={{ color: "green" }}>Post has been Update</p>)}

      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}