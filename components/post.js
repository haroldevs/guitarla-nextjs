import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/blog.module.css";
import { formatearFecha } from "@/utils/helpers";

export default function Post({ post }) {
  console.log(post);
  const { contenido, imagen, title, url, publishedAt } = post;
  return (
    <article>
      <Image
        src={imagen?.data?.attributes?.formats?.medium?.url}
        width={600}
        height={400}
        alt={`imagen blog ${title}`}
      />
      <div className={styles.contenido}>
        <h3>{title}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido[0].children[0].text}</p>
        <Link className={styles.enlace} href={`/blog/${url}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
}
