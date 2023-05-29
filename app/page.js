import Categories from "@/components/Categories";
import PostList from "@/components/PostList";

import  './page.scss'

export default function Home() {
  return (
    <main >
      <Categories />
      <PostList />
    </main>
  )
}
