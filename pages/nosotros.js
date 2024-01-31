import Layout from "@/components/layout";
import Image from "next/image";
import styles from "@/styles/nosotros.module.css";
export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description="Sobre nosotros, guitarLA, tienda de música"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            alt="imagen"
            width={1000}
            height={800}
          />
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
