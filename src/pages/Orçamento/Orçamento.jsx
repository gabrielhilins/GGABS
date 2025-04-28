import FooterOrçamento from "../../components/FooterOrçamento";
import { useEffect } from "react";
import REALTeste from "../../REAL/REALTeste";

function Orçamento() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <REALTeste />
    <FooterOrçamento />
    </>
  );
}

export default Orçamento;