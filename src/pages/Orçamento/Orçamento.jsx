import FooterOrçamento from "../../components/FooterOrçamento";
import REAL from "../../REAL/REAL";
import { useEffect } from "react";

function Orçamento() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <REAL />
    <FooterOrçamento />
    </>
  );
}

export default Orçamento;