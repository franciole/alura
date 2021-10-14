class NegociacoesView extends View {
  constructor(elemento) {
    super(elemento);
  }

  template(model) {
    return `
    <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                ${model.negociacoes
                  .map(
                    (n) =>
                      `
                    <tr>
                        <td>${DateHelper.dataParaTexto(n._data)}</td>
                        <td>${n._quantidade}</td>
                        <td>${n._valor}</td>
                        <td>${n.getVolume()}</td>
                    </tr>
                  `
                  )
                  .join("")}
            </tbody>
            <tfoot>
                    <td colspan="3"></td>
                    <td>
                      ${model.negociacoes.reduce(
                        (total, n) => total + n.getVolume(),
                        0.0
                      )}
                    </td>
            </tfoot>
         </table>
        `;
  }
}
