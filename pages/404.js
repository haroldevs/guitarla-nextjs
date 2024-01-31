import Layout from "@/components/layout";
import Link from "next/link";
export default function Pagina404() {
  return (
    <Layout title="Página no encontrada">
      <p className="error">Pagina404</p>
      <Link href={"/"} className="error-enlace">
        Ir a Inicio
      </Link>
    </Layout>
  );
}
