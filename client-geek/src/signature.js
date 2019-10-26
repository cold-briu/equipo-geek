import React, { PureComponent } from "react";

import jsPDF from "jspdf";

export default class pdfGenerator extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }
  jspdfGenerator = () => {
    var doc = new jsPDF("p", "pt");

    doc.text(30, 30, "Señor Sergio Ramos");

    doc.setFont("courier");

    doc.text(
      30,
      60,
      "Este es el contrato de compra que debes tender en cuenta para"
    );

    doc.text(30, 85, "validar todos los terminos y contratos.");

    doc.text(30, 100, "No olvides firmar el contrato al final de este pdf");

    doc.setFontSize(16);

    //doc.setFontStype("Sans-serif");

    doc.text(60, 800, "Firma el contrato ________________________________");

    doc.save("generated.pdf");
  };

  render() {
    return <button onClick={this.jspdfGenerator}>Generate PDF</button>;
  }
}

//export default pdfGenerator;
