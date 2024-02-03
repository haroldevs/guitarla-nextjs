import styles from "@/styles/curso.module.css";
export default function Curso({ curso }) {
  const { contenido, imagen, titulo } = curso.attributes;

  const imageUrl = imagen?.data?.attributes?.url;
  return (
    <section
      className={`${styles.curso} curso`}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.7)), url(${imageUrl})`,
      }}
    >
      <div className={`contenedor ${styles.grid}`}>
        <div className={`${styles.contenido}`}>
          <h2 className="heading">{titulo}</h2>
          <p>{contenido[0].children[0].text}</p>
        </div>
      </div>
    </section>
  );
}
