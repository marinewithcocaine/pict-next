import ServicePost from "../ServicePost/ServicePost";

export default function ServicePosts ({posts}) {
    return (
        <ul className="service-posts">
          {posts.map((post, i) => {
            return <ServicePost post={post} key={i} />;
          })}
        </ul>
      );
}