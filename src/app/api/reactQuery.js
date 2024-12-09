import { useQuery } from "@tanstack/react-query"
import { getData, postData } from "./network";

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: getData,
  })
};

export const useProducts = (productId) => {
  return useQuery({
    queryKey: ['products', productId],
    queryFn: () => postData(productId),
    enabled: !!productId,

  })
};


// <========= By ID examp=========>
const getPostById = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  )
  return await response.json()
}
export const usePostById = (postId) => {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPostById(postId),
    enabled: !!postId,
  })
}
//example usages
// const { status, data, error, isFetching } = usePosts();
// const { status, data, error, isFetching } = usePostById(1)
